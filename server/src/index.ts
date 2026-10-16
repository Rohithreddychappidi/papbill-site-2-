import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { saveLead, LeadRecord } from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

// CORS Configuration
app.use(
  cors({
    origin: [CLIENT_ORIGIN, 'http://localhost:5173', 'http://127.0.0.1:5173'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Payload size limit to prevent memory exhaustion
app.use(express.json({ limit: '100kb' }));

// Simple in-memory rate limiting map for public forms
const rateLimitMap = new Map<string, { count: number; firstSeen: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 10;

function rateLimit(req: Request, res: Response, next: NextFunction): void {
  const ip = req.ip || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, firstSeen: now });
    return next();
  }

  if (now - record.firstSeen > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, firstSeen: now });
    return next();
  }

  if (record.count >= MAX_REQUESTS) {
    res.status(429).json({
      success: false,
      message: 'Too many submissions. Please wait a few minutes before trying again.',
    });
    return;
  }

  record.count += 1;
  next();
}

// Health Check Endpoint
app.get('/api/public/health', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'PapBill Backend API',
  });
});

// Lead Capture Endpoint
app.post('/api/public/leads', rateLimit, async (req: Request, res: Response) => {
  try {
    const {
      name,
      email,
      phone,
      businessName,
      businessType,
      outletCount,
      interestedProducts,
      timeline,
      message,
      privacyConsent,
      sourcePage,
    } = req.body;

    // Strict Server-side Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 100) {
      res.status(400).json({
        success: false,
        message: 'Name must be between 2 and 100 characters.',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim()) || email.length > 255) {
      res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
      return;
    }

    const sanitizedPhone = (phone || '').toString().replace(/\D/g, '');
    if (sanitizedPhone.length < 10 || sanitizedPhone.length > 15) {
      res.status(400).json({
        success: false,
        message: 'Please provide a valid 10-digit mobile number.',
      });
      return;
    }

    if (!businessName || typeof businessName !== 'string' || businessName.trim().length < 2 || businessName.length > 150) {
      res.status(400).json({
        success: false,
        message: 'Please provide a valid restaurant/business name.',
      });
      return;
    }

    if (!privacyConsent) {
      res.status(400).json({
        success: false,
        message: 'You must consent to the privacy policy to submit an inquiry.',
      });
      return;
    }

    const validBusinessTypes = ['cafe', 'qsr', 'fine-dining', 'cloud-kitchen', 'multi-branch', 'other'];
    const bType = validBusinessTypes.includes(businessType) ? businessType : 'other';

    const validTimelines = ['immediate', '1-month', '3-months', 'exploring'];
    const tLine = validTimelines.includes(timeline) ? timeline : 'immediate';

    const leadId = 'lead_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);

    const leadRecord: LeadRecord = {
      id: leadId,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: sanitizedPhone,
      businessName: businessName.trim(),
      businessType: bType,
      outletCount: (outletCount || '1').toString().slice(0, 32),
      interestedProducts: Array.isArray(interestedProducts)
        ? interestedProducts.map(p => String(p).slice(0, 50)).slice(0, 10)
        : ['POS Billing'],
      timeline: tLine,
      message: message && typeof message === 'string' ? message.slice(0, 1000).trim() : undefined,
      privacyConsent: true,
      sourcePage: sourcePage && typeof sourcePage === 'string' ? sourcePage.slice(0, 128) : 'website',
      createdAt: new Date().toISOString(),
      status: 'new',
      ipAddress: req.ip || req.socket.remoteAddress,
    };

    await saveLead(leadRecord);

    res.status(201).json({
      success: true,
      message: 'Inquiry received successfully. Our team will contact you shortly.',
      data: {
        id: leadId,
      },
    });
  } catch (error) {
    console.error('Failed to process lead submission:', error);
    res.status(500).json({
      success: false,
      message: 'An internal server error occurred. Please contact us via phone or email.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`[PapBill API] Server active on port ${PORT}`);
});
