import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.resolve(__dirname, '../data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

// Ensure data folder exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

export interface LeadRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  businessName: string;
  businessType: string;
  outletCount: string;
  interestedProducts: string[];
  timeline: string;
  message?: string;
  privacyConsent: boolean;
  sourcePage?: string;
  createdAt: string;
  status: string;
  ipAddress?: string;
}

export async function saveLead(lead: LeadRecord): Promise<LeadRecord> {
  // If MySQL credentials exist, attempt database insert
  if (process.env.DB_HOST && process.env.DB_USER && process.env.DB_NAME) {
    try {
      // Dynamic import to avoid hard crash if mysql2 is not loaded
      // @ts-ignore
      const mysql = await import('mysql2/promise').catch(() => null);
      if (mysql) {
        const pool = mysql.createPool({
          host: process.env.DB_HOST,
          port: Number(process.env.DB_PORT) || 3306,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          waitForConnections: true,
          connectionLimit: 10,
        });

        const query = `
          INSERT INTO leads (
            id, name, email, phone, business_name, business_type, outlet_count,
            interested_products, timeline, message, privacy_consent, source_page,
            status, ip_address, created_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
          lead.id,
          lead.name,
          lead.email,
          lead.phone,
          lead.businessName,
          lead.businessType,
          lead.outletCount,
          JSON.stringify(lead.interestedProducts),
          lead.timeline,
          lead.message || null,
          lead.privacyConsent ? 1 : 0,
          lead.sourcePage || 'website',
          lead.status || 'new',
          lead.ipAddress || null,
          lead.createdAt,
        ];

        await pool.execute(query, values);
        return lead;
      }
    } catch (dbErr) {
      console.warn('MySQL connection or insertion failed, falling back to local persistent store.', dbErr);
    }
  }

  // Persistent File Fallback
  let existing: LeadRecord[] = [];
  if (fs.existsSync(LEADS_FILE)) {
    try {
      const content = fs.readFileSync(LEADS_FILE, 'utf-8');
      existing = JSON.parse(content);
    } catch (parseErr) {
      existing = [];
    }
  }

  existing.push(lead);
  fs.writeFileSync(LEADS_FILE, JSON.stringify(existing, null, 2), 'utf-8');
  return lead;
}

export async function getLeadsCount(): Promise<number> {
  if (fs.existsSync(LEADS_FILE)) {
    try {
      const content = fs.readFileSync(LEADS_FILE, 'utf-8');
      const leads = JSON.parse(content);
      return Array.isArray(leads) ? leads.length : 0;
    } catch {
      return 0;
    }
  }
  return 0;
}
