# PapBill by Hatbricks — Premium SaaS & Hardware Platform

> **"Smart Billing for Modern Restaurants"**  
> One unified platform for billing, QR ordering, kitchen display (KOT), recipe-level inventory, analytics, and thermal printer hardware.

---

## 🍽️ Overview

PapBill by Hatbricks is a production-grade restaurant management and point-of-sale platform designed for Indian and international dining establishments, ranging from single-counter cafes and QSRs to high-volume cloud kitchens and multi-outlet chains.

---

## 🚀 Key Modules & Architecture

### Architecture (`/frontend`)
- **Framework:** React 19 + TypeScript + Vite 8
- **Styling:** Tailwind CSS v4 with custom design tokens (`#17212D`, `#FF571F`, `#F6F8FB`, `#667085`, `#E5E9EF`)
- **Routing:** React Router 7 with scroll-to-top handler
- **Icons:** Lucide React
- **Typography:** Plus Jakarta Sans & Inter
- **SEO & Social:** OpenGraph, Twitter Cards, dynamic Schema.org JSON-LD (SoftwareApplication, Organization, Product, FAQPage)
- **Zero-Backend Standalone Architecture:**
  - Client-side lead intake with real-time validation and local persistence (`localStorage`)
  - Direct 1-click WhatsApp lead connection (`+91 94825 58220`)
  - Static-ready for zero-configuration hosting on Vercel, Netlify, Cloudflare Pages, or AWS S3

---

## 🌐 Complete Website Routes

| Route | Page Name | Description |
|---|---|---|
| `/` | **Home** | Conversion hero with interactive POS terminal, live cart, thermal printer simulation, 7-step mobile onboarding showcase, trust metrics, and testimonials |
| `/features` | **Features Deep-Dive** | 10 modular operational systems with problems solved, key benefits, and module consoles |
| `/solutions` | **Solutions Overview** | Specialized workflows for Cafes, QSRs, Fine Dining, Cloud Kitchens, and Multi-Branch |
| `/solutions/qr-ordering` | **QR Table Ordering** | Contactless guest ordering journey, mobile simulator, table sessions, and KOT dispatch |
| `/mobile-app` | **Mobile App & POS** | 7-step onboarding, interactive demo, and Play Store download showcase |
| `/pricing` | **Pricing & Plans** | Monthly & Yearly billing toggle (with 10% discount), comparison matrix, and FAQs |
| `/about` | **About PapBill** | Mission, vision, core values, engineering philosophy, and Hatbricks heritage |
| `/contact` | **Contact Sales** | Sales inquiry form with client validation, WhatsApp direct connect, and phone/email support channels |
| `/get-started` | **Fast-Track Onboarding** | Direct restaurant profile intake, menu digitization, and 14-day evaluation |
| `/privacy` | **Privacy Policy** | GDPR/DPDP-compliant data policies |
| `/terms` | **Terms of Service** | SaaS and software warranty terms |
| `/refund-policy` | **Refund Policy** | Software subscription criteria |
| `/support` | **Help & Support** | Setup guides for thermal printers, offline mode, and GST profiles |

---

## 🛠️ Quick Start & Development

### Prerequisites
- Node.js `v20+` or `v22+`
- npm `v10+`

### Installation & Run

1. **Install dependencies & start frontend:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   The application will start at `http://localhost:5173`.

2. **Or run directly from workspace root:**
   ```bash
   npm run dev
   ```

---

## 📦 Production Build

```bash
# Build Frontend
npm run build
```

Production assets will be emitted to `frontend/dist`.

---

## 📄 License & Attribution

© 2026 PapBill by **Hatbricks**. All rights reserved.
