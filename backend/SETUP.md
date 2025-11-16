# Supabase Backend Setup Guide

## Prerequisites

1. Create a Supabase account at https://supabase.com
2. Create a new project in Supabase

## Setup Steps

### 1. Get Your Supabase Credentials

1. Go to your Supabase project dashboard
2. Navigate to **Settings** > **API**
3. Copy the following:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon/public key** (under Project API keys)
   - **service_role key** (keep this secret!)

### 2. Create Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

### 3. Run Database Schema

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Copy and paste the contents of `backend/supabase/schema.sql`
4. Click **Run** to execute the SQL

This will create:
- `contacts` table
- `bookings` table
- `blog_posts` table
- `portfolio_items` table
- `leads` table
- All necessary indexes and RLS policies

### 4. Verify Setup

1. Go to **Table Editor** in Supabase
2. You should see all 5 tables created
3. Test the API endpoints:
   - POST `/api/contact` - Submit contact form
   - POST `/api/booking` - Submit booking form
   - GET `/api/blog` - Fetch blog posts
   - GET `/api/portfolio` - Fetch portfolio items

## API Endpoints

### Contact Form
- **POST** `/api/contact`
- Body: `{ name, email, phone?, company?, message }`

### Booking Form
- **POST** `/api/booking`
- Body: `{ firstName, lastName, email, phone, company?, service, date?, time?, message? }`

### Blog Posts
- **GET** `/api/blog?limit=10&category=Digital Marketing`
- Returns: List of published blog posts

### Blog Post by Slug
- **GET** `/api/blog/[slug]`
- Returns: Single blog post

### Portfolio Items
- **GET** `/api/portfolio?category=Graphic Design&featured=true`
- Returns: List of portfolio items

## Database Tables

### contacts
Stores contact form submissions with status tracking.

### bookings
Stores consultation booking requests with date/time preferences.

### blog_posts
Stores blog posts for the insights section with publishing controls.

### portfolio_items
Stores portfolio items with categories and featured flags.

### leads
Stores marketing leads with source tracking.

## Security

- Row Level Security (RLS) is enabled on all tables
- Public can insert into `contacts`, `bookings`, and `leads`
- Public can read published `blog_posts` and all `portfolio_items`
- Admin access requires authentication (configure in Supabase dashboard)

## Next Steps

1. Set up authentication in Supabase if you need admin access
2. Configure email notifications for new submissions (Supabase Edge Functions)
3. Set up database backups
4. Monitor usage in Supabase dashboard


