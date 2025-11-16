# Backend - Supabase Integration

This folder contains the backend configuration and database setup for Blueprint Branding Kreatives.

## Setup

1. Install Supabase dependencies:
```bash
npm install @supabase/supabase-js
```

2. Create a `.env.local` file in the root directory with:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

3. Run the SQL migrations in Supabase SQL Editor to create the database tables.

## Database Schema

- `contacts` - Contact form submissions
- `bookings` - Booking/consultation requests
- `blog_posts` - Blog posts for insights section
- `portfolio_items` - Portfolio items
- `leads` - Marketing leads

## API Routes

All API routes are in `/app/api/` directory and use Supabase client for database operations.


