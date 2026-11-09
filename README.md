# Saikat Ghosh — Professional Portfolio

> **Business Systems, Operations & Digital Programs**  
> Turning manual, multi-source processes into reliable, automated workflows.

[![Live on Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=flat&logo=vercel)](https://saikat-portfolio-one.vercel.app)
[![Accessibility](https://img.shields.io/badge/A11y-WCAG%202.2%20AA-0f766e?style=flat)](#accessibility--standards)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 🌐 Live Production URL
- **Production Site:** [https://saikat-portfolio-one.vercel.app](https://saikat-portfolio-one.vercel.app)
- **Github PROD** [https://sghosh685.github.io/saikat-portfolio/]([url](https://sghosh685.github.io/saikat-portfolio/))
- **LinkedIn:** [linkedin.com/in/saikatghosh00](https://www.linkedin.com/in/saikatghosh00)
- **GitHub:** [github.com/sghosh685](https://github.com/sghosh685)
- **Contact:** [saikatghosh369@gmail.com](mailto:saikatghosh369@gmail.com)

---

## 🚀 Overview

This repository hosts the personal portfolio of **Saikat Ghosh**, highlighting four years of operational leadership and systems analysis across York University units (OsgoodePD, SmartTO, Career Centre, and LA&PS).

The site is built with modern, dependency-free web technologies adhering to performance, accessibility (AODA / WCAG 2.2 AA), and clean architecture standards.

---

## 📁 Repository Structure

```text
saikat-portfolio/
├── index.html          # Semantic HTML5 markup, OpenGraph/Twitter cards & JSON-LD
├── css/
│   └── style.css       # Clean CSS variables, typography, responsive grids & print styles
├── js/
│   └── main.js         # Theme toggle, scroll spy, filtering & clipboard a11y
├── assets/
│   ├── favicon.svg     # Scalable SVG monogram favicon
│   └── og-preview.svg  # High-definition 1200x630 social preview card
├── vercel.json         # Security headers & edge cache configuration
├── .gitignore          # Ignores system artifacts, .vercel, and temp files
└── README.md           # Project documentation and deployment guide
```

---

## ⚡ Technical Highlights

- **Zero Runtime Dependencies:** Extremely fast initial load with 0 KB JavaScript framework overhead.
- **Adaptive Light & Dark Theming:** Uses `color-scheme: light dark` with `:root` CSS variables and inline FOUC (Flash of Unstyled Content) prevention script.
- **Accessible UI & Screen Reader Polish:**
  - Interactive theme button with Sun/Moon icons and dynamic `aria-label` state.
  - Category filter buttons with `aria-pressed="true|false"` bindings.
  - "Copy email" button backed by an `aria-live="polite"` region for audible screen reader confirmation.
  - Clean focus rings (`:focus-visible`) and a "Skip to content" keyboard navigation bypass.
- **Rich Media & Evidence Showcase:**
  - High-definition video walkthrough preview cards linking to live YouTube demos.
  - Interactive process flow diagrams built with accessible SVG markup.
  - Verified credential badges for ISSA Health Coaching and IBM Enterprise Design Thinking.
- **Print & PDF Ready:** Dedicated `@media print` stylesheet formatted for 1-page/2-page executive resume export directly via the browser's "Print / Save PDF" button.
- **Enterprise Edge Security:** Configured via `vercel.json` with HSTS, `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, and strict referrer policies.

---

## 🛠️ Local Development

Clone the repository and run any local HTTP server:

```bash
# Clone repository
git clone git@github.com:sghosh685/saikat-portfolio.git
cd saikat-portfolio

# Start a local preview server (using Node, Python, or npx)
npx serve .
# or
python3 -m http.server 8000
```

Open `http://localhost:8000` or `http://localhost:3000` in your browser.

---

## 🚢 Deployment

The project is linked to Vercel for continuous deployment:

```bash
# Deploy to preview
npx vercel

# Deploy directly to production
npx vercel --prod
```

---

## 📄 License
Released under the [MIT License](LICENSE). © 2026 Saikat Ghosh.
