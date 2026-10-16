# PapBill by Hatbricks — Premium SaaS & Hardware Platform

> **"Smart Billing for Modern Restaurants"**  
> One unified platform for billing, QR ordering, kitchen display (KOT), recipe-level inventory, analytics, and thermal printer hardware.

---

## 🍽️ Overview

PapBill by Hatbricks is a production-grade restaurant management and point-of-sale platform designed for Indian and international dining establishments, ranging from single-counter cafes and QSRs to high-volume cloud kitchens and multi-outlet chains.

---

## 🚀 Key Modules & Architecture

### 1. Frontend (`/frontend`)
- **Framework:** React 19 + TypeScript + Vite 8
- **Styling:** Tailwind CSS v4 with custom design tokens (`#17212D`, `#FF571F`, `#F6F8FB`, `#667085`, `#E5E9EF`)
- **Routing:** React Router 7 with scroll-to-top handler
- **Icons:** Lucide React
- **Typography:** Plus Jakarta Sans & Inter
- **SEO & Social:** OpenGraph, Twitter Cards, Schema.org JSON-LD (SoftwareApplication & Organization)

### 2. Backend API (`/server`)
- **Runtime:** Node.js + Express + TypeScript
- **Database:** Parameterized MySQL pool support with automatic local persistent store fallback (`server/data/leads.json`)
- **Endpoints:**
  - `POST /api/public/leads`: Lead capture with strict server-side validation, length sanitization, rate-limiting, and error handling
  - `GET /api/public/health`: Service health check
- **Security:** CORS origin whitelisting, payload size limits (100kb), rate-limiting per IP (10 requests / 15 mins)

---

## 🌐 Complete Website Routes

| Route | Page Name | Description |
|---|---|---|
| `/` | **Home** | Conversion hero with interactive POS terminal, live cart, thermal printer simulation, 5-step workflow, trust metrics, and testimonials |
| `/features` | **Features Deep-Dive** | 10 modular operational systems with problems solved, key benefits, and module consoles |
| `/solutions` | **Solutions Overview** | Specialized workflows for Cafes, QSRs, Fine Dining, Cloud Kitchens, and Multi-Branch |
| `/solutions/qr-ordering` | **QR Table Ordering** | Contactless guest ordering journey, mobile simulator, table sessions, and KOT dispatch |
| `/hardware` | **Hardware Ecosystem** | Certified 80mm thermal receipt printers, POS tablets, cash drawers, scanners, and paper rolls |
| `/hardware/:id` | **Hardware Product Detail** | Deep-dive technical specifications, connectivity matrix, and instant quote inquiry form |
| `/pricing` | **Pricing & Plans** | Monthly & Yearly billing toggle (with 20% discount), comparison matrix, and FAQs |
| `/about` | **About PapBill** | Mission, vision, core values, engineering philosophy, and Hatbricks heritage |
| `/contact` | **Contact Sales** | Sales inquiry form with client/server validation, phone/email support channels |
| `/get-started` | **Fast-Track Onboarding** | Direct restaurant profile intake, menu digitization, and 14-day evaluation |
| `/privacy` | **Privacy Policy** | GDPR/DPDP-compliant draft data policies |
| `/terms` | **Terms of Service** | SaaS and hardware warranty terms |
| `/refund-policy` | **Refund Policy** | Software subscription and hardware exchange criteria |
| `/support` | **Help & Support** | Setup guides for thermal printers, offline mode, and GST profiles |

---

## 🛠️ Quick Start & Development

### Prerequisites
- Node.js `v20+` or `v22+`
- npm `v10+`

### Installation & Run

1. **Install root dependencies & start frontend:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   The application will start at `http://localhost:5173`.

2. **Run Backend API (Optional):**
   ```bash
   cd server
   npm install
   npm run dev
   ```
   The API server will listen on `http://localhost:5001`.

3. **Or run concurrently from the workspace root:**
   ```bash
   npm run dev
   ```

---

## 📦 Production Build

```bash
# Build Frontend
cd frontend
npm run build

# Build Server
cd ../server
npm run build
```

Production assets will be emitted to `frontend/dist`.

---

## 🗄️ Database Setup (MySQL)

To connect a live MySQL instance:
1. Copy `server/.env.example` to `server/.env`:
   ```env
   PORT=5001
   CLIENT_ORIGIN=http://localhost:5173
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=papbill_user
   DB_PASSWORD=your_secure_password
   DB_NAME=papbill_leads
   ```
2. Execute the table migration in `server/schema.sql` against your database.

---

## 📄 License & Attribution

© 2026 PapBill by **Hatbricks**. All rights reserved.
