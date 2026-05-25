# ☕ Vellum Coffee
### Premium Café Website — Next.js + Tailwind CSS + Framer Motion

> **Tagline:** Where Coffee Becomes Ritual  
> **Stack:** Next.js 14 · React 18 · Tailwind CSS 3 · Framer Motion 11 · Lucide React  
> **Status:** Production-Ready · Internship Submission Ready

---

## 🎯 Project Overview

**Vellum Coffee** is a luxury specialty café website built as a complete, production-style Next.js application. The design draws inspiration from premium coffee brands such as Starbucks Reserve, Blue Tokai, and Third Wave Coffee — delivering a cinematic, elegant, and immersive web experience.

---

## ✨ Features

| Feature | Details |
|---------|---------|
| **10 Sections** | Navbar, Hero, Featured Drinks, Full Menu, About, Why Choose Us, Gallery, Testimonials, Reservation Form, Footer |
| **Framer Motion Animations** | Staggered reveals, slide transitions, scale effects, AnimatePresence for tab/form transitions |
| **Scroll Animations** | `whileInView` + `viewport={{ once: true }}` on all sections |
| **Dark Luxury Theme** | Espresso black base, warm gold accents, cream typography |
| **Premium Fonts** | Cormorant Garamond (display) + Jost (body) via `next/font/google` |
| **Responsive** | Mobile-first, fully responsive across all breakpoints |
| **Menu Tabs** | 6 categories × 4 items with AnimatePresence tab switching |
| **Testimonials Carousel** | Auto-advances every 6 seconds, direction-aware slide animation |
| **Reservation Form** | Controlled inputs, loading state, animated success screen |
| **Glass Navbar** | Sticky, applies `backdrop-blur` and border on scroll |
| **Mobile Menu** | Full-screen animated overlay on mobile |
| **CSS Animations** | Custom keyframes: glow pulse, float, steam rise, gold shimmer |
| **Materialised Views** | Gallery grid with hover zoom and overlay reveal |

---

## 🗂 Project Structure

```
vellum-coffee/
│
├── components/
│   ├── Navbar.js           ← Sticky glass navbar, mobile menu
│   ├── Hero.js             ← Full-screen hero, animated background
│   ├── FeaturedDrinks.js   ← 3 signature drink cards
│   ├── MenuSection.js      ← 6-category tabbed menu, 24 items
│   ├── AboutSection.js     ← Story + animated stats grid
│   ├── WhyChooseUs.js      ← 4 feature cards with icon hover glow
│   ├── GallerySection.js   ← Masonry-style gallery with hover zoom
│   ├── Testimonials.js     ← Auto-sliding carousel, 3 reviews
│   ├── ReservationForm.js  ← Premium form + loading + success state
│   └── Footer.js           ← CTA banner, links, social icons
│
├── pages/
│   ├── _app.js             ← Next.js App, font injection (next/font/google)
│   └── index.js            ← Page assembly, <Head> SEO
│
├── styles/
│   └── globals.css         ← Tailwind directives + custom CSS components
│
├── public/                 ← Static assets (favicon, etc.)
│
├── package.json            ← All dependencies
├── next.config.js          ← Next.js config
├── tailwind.config.js      ← Custom colors, fonts, animations
├── postcss.config.js       ← PostCSS for Tailwind
├── jsconfig.json           ← Path aliases (@/components/*)
├── .gitignore              ← Standard Node.js ignore
└── README.md               ← This file
```

---

## 💻 Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js | 14.2.3 |
| UI Library | React | 18.3.1 |
| Styling | Tailwind CSS | 3.4.4 |
| Animations | Framer Motion | 11.2.10 |
| Icons | Lucide React | 0.383.0 |
| Fonts | Cormorant Garamond, Jost | via next/font |
| PostCSS | autoprefixer | 10.4.19 |

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18.17 or later
- npm 9+ or yarn 1.22+

### 1. Clone or Download
```bash
git clone https://github.com/your-username/vellum-coffee.git
cd vellum-coffee
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `espresso` | `#080402` | Primary background |
| `espresso-card` | `#110907` | Card/section backgrounds |
| `espresso-mid` | `#1e1008` | Hover states, midtones |
| `gold` | `#c4903a` | Primary accent |
| `gold-light` | `#e8b55a` | Gradient second stop |
| `gold-pale` | `#f5c96e` | Hover highlights |
| `cream` | `#f4e8d4` | Primary text |
| `cream-muted` | `#a08468` | Secondary text |

### Typography

| Variable | Font | Usage |
|----------|------|-------|
| `font-display` | Cormorant Garamond | All headings, quotes |
| `font-sans` | Jost | Body, labels, buttons |

### Custom Animations

| Name | Description |
|------|-------------|
| `animate-glow-pulse` | Slow breathing glow on radial orbs |
| `animate-float` | Gentle vertical float (hero ring) |
| `animate-steam` | Rising steam wisps above coffee cup |
| `animate-gold-shimmer` | Moving gradient on text |
| `animate-spin-slow` | 22-second slow rotation |

---

## 📱 Responsive Design

| Breakpoint | Layout |
|------------|--------|
| Mobile (`< 640px`) | Single column, hamburger menu, stacked sections |
| Tablet (`640–1024px`) | 2-column grids, full menu tabs wrap |
| Desktop (`> 1024px`) | Full layout, floating decorative elements, side-by-side sections |

Key responsive patterns:
- `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` for menu cards
- `grid-cols-1 lg:grid-cols-2` for About and Reservation split layouts
- `hidden md:flex` / `md:hidden` for desktop vs mobile navigation
- `font-size: clamp()` for fluid typography

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
# Option 1: Vercel CLI
npm install -g vercel
vercel

# Option 2: Git Integration
# 1. Push your project to GitHub
# 2. Go to https://vercel.com/new
# 3. Import the repository
# 4. Click Deploy — Vercel auto-detects Next.js
```

### Deploy to Render

```bash
# 1. Push to GitHub
# 2. Go to https://render.com/new/web
# 3. Connect your repo
# 4. Set:
#    Build Command: npm run build
#    Start Command: npm run start
#    Environment: Node
# 5. Deploy
```

### Environment Variables
No environment variables are required. The project runs entirely client-side.

---

## 📦 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Development | `npm run dev` | Starts dev server at localhost:3000 |
| Build | `npm run build` | Creates optimised production build |
| Start | `npm run start` | Starts production server (requires build) |
| Lint | `npm run lint` | Runs Next.js ESLint |

---

## 🔧 Customisation

### Change Brand Name
Edit `pages/index.js` (title/description) and `components/Navbar.js` (logo text).

### Add Real Images
Replace gradient div backgrounds in `FeaturedDrinks.js` and `GallerySection.js` with `<Image>` from `next/image`. Add the domain to `next.config.js` if loading from an external URL.

### Change Menu Items
Edit the `MENU` object in `components/MenuSection.js` and the `FEATURED` array in `components/FeaturedDrinks.js`.

### Adjust Colors
All brand colors are defined in `tailwind.config.js` under `theme.extend.colors`.

---

## 👤 Author

**Frontend Engineering Intern**  
Project: Vellum Coffee Premium Café Website  
Stack: Next.js · React · Tailwind CSS · Framer Motion

---

*All content, names, and pricing in this project are fictional and created for design purposes.*
