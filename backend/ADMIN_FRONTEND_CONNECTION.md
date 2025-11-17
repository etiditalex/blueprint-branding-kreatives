# Admin Dashboard ↔ Frontend Connection Guide

This document explains how the admin dashboard communicates with the frontend and how to ensure changes reflect immediately.

## ✅ What's Connected

### 1. **Navigation Menu**
- **Admin Location:** `/admin/navigation`
- **Frontend Component:** `components/Navbar.tsx`
- **API Route:** `/api/navigation`
- **Database Table:** `navigation_items`
- **Update Frequency:** Every 30 seconds + on page load
- **How it works:**
  - Admin creates/edits navigation items → Saved to database
  - Frontend fetches from `/api/navigation` → Displays in navbar
  - Changes appear within 30 seconds automatically

### 2. **Header (Logo & CTA)**
- **Admin Location:** `/admin/header-footer` (Header tab)
- **Frontend Component:** `components/Navbar.tsx`
- **API Route:** `/api/header`
- **Database Table:** `header_content`
- **Update Frequency:** Every 30 seconds + on page load
- **What you can change:**
  - Logo URL
  - Logo width/height (pixels)
  - Logo alt text
  - CTA button text
  - CTA button URL

### 3. **Footer**
- **Admin Location:** `/admin/header-footer` (Footer tab)
- **Frontend Component:** `components/Footer.tsx`
- **API Route:** `/api/footer`
- **Database Table:** `footer_content`
- **Update Frequency:** Every 30 seconds + on page load
- **What you can change:**
  - Company name
  - Description
  - Address
  - Phone
  - Email
  - Social media links (Facebook, Twitter, Instagram, LinkedIn)
  - Copyright text

### 4. **Blog Posts**
- **Admin Location:** `/admin/posts`
- **Frontend Location:** `/insights` and `/insights/[slug]`
- **API Route:** `/api/blog` and `/api/blog/[slug]`
- **Database Table:** `blog_posts`
- **Update Frequency:** Every 30 seconds + on page load
- **How it works:**
  - Create/edit blog post in admin → Set `published = true`
  - Post appears on `/insights` page automatically
  - Individual posts accessible at `/insights/[slug]`

### 5. **Custom Pages**
- **Admin Location:** `/admin/pages`
- **Frontend Location:** `/[slug]` (dynamic route)
- **API Route:** `/api/pages/[slug]`
- **Database Table:** `pages`
- **Update Frequency:** Real-time (no caching)
- **How it works:**
  - Create/edit page in admin → Set `is_published = true`
  - Page accessible at `/[slug]` (e.g., `/my-page`)
  - Changes appear immediately

### 6. **Portfolio Items**
- **Admin Location:** `/admin/portfolio`
- **Frontend Location:** `/portfolio` page
- **API Route:** `/api/portfolio`
- **Database Table:** `portfolio_items`
- **Update Frequency:** Every 30 seconds + on page load
- **How it works:**
  - Create/edit portfolio item in admin
  - Items appear on portfolio page automatically
  - Featured items show on homepage

## 🔄 How Updates Work

### Automatic Refresh
- **Navbar, Footer, Portfolio:** Refresh every 30 seconds
- **Blog Posts:** Refresh every 30 seconds
- **Pages:** Fetched fresh on each page load (no caching)

### Caching Disabled
All API routes have:
- `dynamic = 'force-dynamic'`
- `revalidate = 0`
- `Cache-Control: no-store, no-cache` headers
- Timestamp parameters to prevent browser caching

## 🧪 Testing the Connection

### Test Navigation
1. Go to Admin → Navigation
2. Add/edit a navigation item
3. Set `is_active = true`
4. Wait 30 seconds or refresh frontend
5. Check navbar - item should appear

### Test Header/Logo
1. Go to Admin → Header/Footer → Header tab
2. Change logo URL or dimensions
3. Save
4. Wait 30 seconds or refresh frontend
5. Check navbar - logo should update

### Test Footer
1. Go to Admin → Header/Footer → Footer tab
2. Change company name, email, or social links
3. Save
4. Wait 30 seconds or refresh frontend
5. Check footer - changes should appear

### Test Blog Posts
1. Go to Admin → Blog Posts
2. Create/edit a post
3. Set `published = true`
4. Save
5. Visit `/insights` - post should appear
6. Visit `/insights/[slug]` - post should load

### Test Custom Pages
1. Go to Admin → Pages
2. Create/edit a page
3. Set `is_published = true`
4. Save
5. Visit `/[slug]` - page should load

### Test Portfolio
1. Go to Admin → Portfolio
2. Create/edit an item
3. Save
4. Visit `/portfolio` - item should appear

## 🐛 Troubleshooting

### Changes Not Appearing?

1. **Check if item is published/active:**
   - Blog posts: `published = true`
   - Pages: `is_published = true`
   - Navigation: `is_active = true`

2. **Wait for auto-refresh:**
   - Navbar/Footer/Portfolio: Wait 30 seconds
   - Or hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)

3. **Check browser console:**
   - Press F12 → Console tab
   - Look for errors fetching from API

4. **Test API directly:**
   - Visit `/api/navigation` - Should show JSON
   - Visit `/api/header` - Should show JSON
   - Visit `/api/footer` - Should show JSON
   - Visit `/api/blog` - Should show JSON
   - Visit `/api/portfolio` - Should show JSON

5. **Check database:**
   - Go to Supabase → Table Editor
   - Verify data exists and is correct

### Common Issues

**Issue:** Navigation items not showing
- **Solution:** Make sure `is_active = true` in database
- **Solution:** Click "Sync Navigation" in admin to import static items

**Issue:** Logo not updating
- **Solution:** Check logo URL is valid and accessible
- **Solution:** Verify `logo_width` and `logo_height` are set

**Issue:** Blog posts not appearing
- **Solution:** Check `published = true` in database
- **Solution:** Verify `published_at` date is set

**Issue:** Pages returning 404
- **Solution:** Check `is_published = true` in database
- **Solution:** Verify slug matches exactly (no spaces, lowercase)

## 📊 Data Flow Diagram

```
Admin Dashboard
    ↓ (Save)
Database (Supabase)
    ↓ (Fetch)
API Routes (/api/*)
    ↓ (Fetch)
Frontend Components
    ↓ (Display)
User's Browser
```

## 🔧 Manual Refresh

If you need immediate updates without waiting:

1. **Hard Refresh:** `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. **Clear Cache:** Browser settings → Clear browsing data
3. **Incognito Mode:** Test in incognito/private window

## ✅ Verification Checklist

After making changes in admin, verify:

- [ ] Navigation items appear in navbar
- [ ] Logo displays correctly with correct size
- [ ] Footer shows updated information
- [ ] Blog posts appear on `/insights`
- [ ] Custom pages load at `/[slug]`
- [ ] Portfolio items appear on `/portfolio`
- [ ] Featured items show on homepage
- [ ] All links work correctly
- [ ] Images load properly

## 🚀 Best Practices

1. **Always publish items** - Set `published = true` or `is_published = true`
2. **Use descriptive slugs** - Lowercase, hyphens, no spaces
3. **Test immediately** - Check frontend after saving
4. **Wait for auto-refresh** - Or manually refresh if needed
5. **Check console** - Look for errors if something doesn't work

## 📝 API Endpoints Reference

| Endpoint | Purpose | Method |
|----------|---------|--------|
| `/api/navigation` | Get navigation items | GET |
| `/api/header` | Get header content | GET |
| `/api/footer` | Get footer content | GET |
| `/api/blog` | Get blog posts | GET |
| `/api/blog/[slug]` | Get single blog post | GET |
| `/api/pages` | Get all pages | GET |
| `/api/pages/[slug]` | Get single page | GET |
| `/api/portfolio` | Get portfolio items | GET |

All endpoints return JSON and have caching disabled for real-time updates.

