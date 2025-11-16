# Admin Dashboard Setup Guide

## Overview

The admin dashboard provides a comprehensive interface for managing all aspects of your website, including blog posts, portfolio items, pages, media, navigation, header/footer, and site settings.

## Initial Setup

### 1. Run Database Schema

First, run the additional admin schema in your Supabase SQL Editor:

```sql
-- Run backend/supabase/admin-schema.sql
```

This creates tables for:
- `site_settings` - Site configuration
- `navigation_items` - Menu items
- `header_content` - Header configuration
- `footer_content` - Footer configuration
- `media_items` - Media library
- `pages` - Custom pages

### 2. Enable Supabase Authentication

1. Go to your Supabase Dashboard
2. Navigate to **Authentication** → **Providers**
3. Enable **Email** provider
4. Configure email settings (optional: disable email confirmation for testing)

### 3. Create Admin User

1. Go to **Authentication** → **Users**
2. Click **"Add user"** → **"Create new user"**
3. Enter email and password
4. Save the credentials

Alternatively, use the admin login page at `/admin/login` and click "Sign Up" to create an account.

## Accessing the Admin Dashboard

1. Navigate to `/admin/login` on your website
2. Enter your admin email and password
3. You'll be redirected to `/admin` dashboard

## Admin Features

### Dashboard (`/admin`)
- Overview statistics
- Quick actions
- Recent activity

### Blog Posts (`/admin/posts`)
- View all blog posts
- Create new posts
- Edit existing posts
- Delete posts
- Publish/unpublish posts

### Portfolio (`/admin/portfolio`)
- Manage portfolio items
- Add/edit/delete items
- Set featured items
- Organize by category

### Pages (`/admin/pages`)
- Create custom pages
- Edit page content
- Manage page templates
- Control page visibility

### Media Library (`/admin/media`)
- Upload images and files
- Organize media by category
- Search and filter media
- Delete unused media

### Navigation (`/admin/navigation`)
- Manage menu items
- Create dropdown menus
- Reorder menu items
- Enable/disable items

### Header/Footer (`/admin/header-footer`)
- Update logo
- Edit header CTA
- Configure footer content
- Manage social links

### Settings (`/admin/settings`)
- Site metadata
- SEO settings
- Social media links
- Contact information
- General configuration

### Contacts (`/admin/contacts`)
- View contact form submissions
- Update contact status
- Filter and search contacts
- Export contacts (coming soon)

## API Routes

All admin API routes are prefixed with `/api/admin/`:

- `GET /api/admin/blog` - List all blog posts
- `POST /api/admin/blog` - Create blog post
- `GET /api/admin/blog/[id]` - Get single post
- `PATCH /api/admin/blog/[id]` - Update post
- `DELETE /api/admin/blog/[id]` - Delete post

Similar routes exist for:
- `/api/admin/portfolio`
- `/api/admin/pages`
- `/api/admin/contacts`
- `/api/admin/media`
- `/api/admin/settings`

## Security

- All admin routes require authentication
- Uses Supabase Row Level Security (RLS)
- Service role key used for admin operations
- Session management via Supabase Auth

## Future Enhancements

- [ ] Rich text editor for blog posts
- [ ] Image upload functionality
- [ ] Bulk operations
- [ ] Export/import functionality
- [ ] Activity logs
- [ ] User roles and permissions
- [ ] Email notifications
- [ ] Analytics integration

## Troubleshooting

### Can't login?
- Check if email authentication is enabled in Supabase
- Verify your email/password
- Check browser console for errors
- Ensure environment variables are set

### API errors?
- Check Supabase connection
- Verify RLS policies are set correctly
- Check server logs for detailed errors
- Ensure service role key is configured

### Missing tables?
- Run `admin-schema.sql` in Supabase SQL Editor
- Check table names match exactly
- Verify RLS policies were created

