# Blueprint Branding Kreatives Website

A modern, responsive website for Blueprint Branding Kreatives built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, beautiful UI with smooth animations
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js 14 App Router
- 🎭 Smooth animations with Framer Motion
- 🎯 TypeScript for type safety
- 🖼️ Optimized images with Next.js Image component
- 🎨 Custom color palette derived from brand logo

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Images:** Next.js Image Optimization
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
├── app/
│   ├── about/          # About/Who We Are page
│   ├── contact/        # Contact Us page
│   ├── portfolio/      # Portfolio/Works page
│   ├── services/       # Services page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Footer component
├── public/             # Static assets
└── ...config files
```

## Pages

- **Homepage** (`/`) - Hero section, services preview, why choose us, and CTA
- **About** (`/about`) - Company overview, philosophy, vision & mission, values
- **Services** (`/services`) - Detailed service offerings with features
- **Portfolio** (`/portfolio`) - Showcase of work with filtering
- **Contact** (`/contact`) - Contact form and information

## Customization

### Colors

The color palette is defined in `tailwind.config.ts`. The primary colors are derived from the Blueprint Branding Kreatives logo:

- Primary: Teal/Blue tones (#007a8f)
- Accent: Sky blue tones (#0ea5e9)

### Logo

Update the logo URL in:
- `components/Header.tsx`
- `components/Footer.tsx`
- `app/page.tsx`

Or replace with a local image in the `public` folder.

## Build for Production

```bash
npm run build
npm start
```

## License

© 2024 Blueprint Branding Kreatives. All rights reserved.


