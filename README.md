# Tobams Group - Training & Development Assessment

A pixel-perfect, production-ready Next.js application implementing the **Tobams Group Frontend Developer Internship Assessment** Figma design with high visual fidelity, full responsiveness, accessible interactive components, and optimal performance.

---

## 🌟 Overview

This application faithfully reproduces the Tobams Group assessment design across desktop, tablet, and mobile viewports. Built using modern React 19 and Next.js 16 (App Router), the project emphasizes visual precision, semantic HTML5 structure, WAI-ARIA accessibility guidelines, and optimized asset delivery using `next/image` and `next/font`.

### Key Features
- **Responsive Layout**: Pixel-accurate implementation supporting 425px (Mobile), 768px (Tablet), 1280px (Desktop), and 1440px+ viewports.
- **Two-Tier Navigation Bar**: Includes logo, interactive account actions, assessment CTA, and secondary navigation links with mobile drawer support.
- **Hero Banner**: Dark violet overlay with high-contrast text typography, pill badge, and prominent CTA button.
- **Learning Management System Section**: Features circular cropped instructor image frame, soft lavender content card, and bulleted course listing grid.
- **Accessibility & Performance**: Keyboard navigation, screen-reader friendly heading hierarchy, semantic elements (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`), and smooth font loading.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: `next/font/google` ([Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans))
- **Assets Optimization**: `next/image`

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js 18.x** or higher installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tobams-project.git
   cd tobams-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📦 Production Build

To test or verify the production build locally:

```bash
npm run build
npm run start
```

---

## 🎨 Design Decisions & Technical Assumptions

### 1. Color Palette Tokens
The color palette was extracted directly from the Figma design specification:
- **Primary Brand Purple / Plum**: `#5B1947` / `#451036`
- **Primary Action Coral Red**: `#E84D58`
- **Light Lavender Background**: `#F3ECF2`
- **Content Card Lavender**: `#E5D7E3`

### 2. Typography & Fonts
- Selected **Plus Jakarta Sans** via `next/font/google` as it accurately reflects the geometric sans-serif typeface, letter spacing, font weights (400, 500, 600, 700, 800), and rendering details of the Figma mockup.

### 3. Server & Client Component Architecture
- Main page (`app/page.tsx`), `Hero.tsx`, `LmsSection.tsx`, and `Footer.tsx` are rendered as **Server Components** for maximum performance and instant HTML rendering.
- `Navbar.tsx` utilizes `"use client"` solely to handle interactive mobile drawer open/close states and keyboard aria controls.

---

## 🔗 Links

- **Figma Design**: [Frontend Intern Assessment Figma](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0)
- **GitHub Repository**: `https://github.com/your-username/tobams-project` *(Replace with public repository URL)*
- **Live Vercel Deployment**: `https://tobams-project.vercel.app` *(Replace with deployed URL)*

---

## 🤖 AI Usage Disclosure

AI assistance (Antigravity IDE / Gemini) was utilized during development for layout planning, visual token verification, and automated build testing. All generated code, component boundaries, styling utilities, and responsiveness triggers were thoroughly reviewed, tested, refined, and verified against the Figma design requirements.
