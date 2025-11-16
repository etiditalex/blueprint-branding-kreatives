# Blueprint Branding Kreatives - Portfolio Website

A modern, responsive portfolio and marketing website for Blueprint Branding Kreatives, a digital marketing and brand development company.

## Tech Stack

- **Next.js 16** (App Router) - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vercel** - Deployment (ready)
- **Supabase** - Backend integration (configured)

## Features

- ✅ Modern, responsive design
- ✅ Typing animation hero section
- ✅ Smooth scrolling navigation
- ✅ Service showcase sections
- ✅ Contact form with Supabase integration
- ✅ Booking form with Supabase integration
- ✅ Mobile-friendly navigation
- ✅ Brand colors extracted from logo

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── sections/          # Page sections
│   ├── Navbar.tsx         # Navigation bar
│   └── Footer.tsx         # Footer component
├── lib/                    # Utilities and config
│   ├── siteConfig.ts      # Centralized content
│   └── hooks/             # Custom React hooks
├── public/                 # Static assets
└── styles/                 # Additional styles
```

## Color Palette

The color palette has been extracted from the Blueprint Branding Kreatives logo:

- **Primary**: `#3c3c87` (Deep blue/purple)
- **Accent**: `#f04b1e` (Orange/red)

## Supabase Setup

1. See `backend/SETUP.md` for local development setup
2. See `backend/DEPLOYMENT.md` for cloud deployment instructions

## Future Enhancements

- [ ] Portfolio case studies section
- [ ] Blog/CMS integration
- [ ] Analytics integration
- [ ] SEO optimization

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. **Set environment variables in Vercel Dashboard** (see `backend/DEPLOYMENT.md` for details)
4. Deploy!

### Environment Variables Required

Before deploying, make sure to set these in your Vercel project settings:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

See `backend/DEPLOYMENT.md` for detailed instructions.

## License

© 2025 Blueprint Branding Kreatives. All rights reserved.


