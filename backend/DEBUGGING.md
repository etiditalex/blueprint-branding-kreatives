# Debugging Guide: Dynamic Pages Connection

## How to Test Dynamic Pages

### Step 1: Verify Database Connection

1. Go to **Supabase Dashboard** → **Table Editor** → **pages**
2. Check if you have any pages with:
   - `is_published = true`
   - A valid `slug` (e.g., "test-page")
   - Content in the `content` field

### Step 2: Test API Endpoint

Test the API directly to see if data is being fetched:

**Option A: Browser**
- Visit: `https://your-domain.vercel.app/api/pages`
- You should see JSON with all published pages

**Option B: Test Specific Page**
- Visit: `https://your-domain.vercel.app/api/pages/[your-slug]`
- Replace `[your-slug]` with your actual page slug
- Should return the page data

### Step 3: Test Frontend Route

1. Create a test page in admin:
   - Title: "Test Dynamic Page"
   - Slug: "test-dynamic-page" (no spaces, use hyphens)
   - Content: "This is a test page"
   - **Check "Publish Page"**
   - Save

2. Visit: `https://your-domain.vercel.app/test-dynamic-page`
   - Should display the page content

### Step 4: Check Server Logs

If the page doesn't load, check Vercel logs:
1. Go to **Vercel Dashboard** → Your Project → **Deployments** → Latest → **Functions** tab
2. Look for console.log messages:
   - "Fetching page with slug: [slug]"
   - "Page found: [title]"
   - Or error messages

## Common Issues

### Issue 1: Page Returns 404

**Possible Causes:**
- Page is not published (`is_published = false`)
- Slug doesn't match exactly (case-sensitive, no spaces)
- Page doesn't exist in database

**Solution:**
1. Check Supabase: `pages` table → find your page → verify `is_published = true`
2. Check slug matches exactly (no extra spaces, correct case)
3. Try the API endpoint first: `/api/pages/[slug]`

### Issue 2: Static Route Conflict

**Problem:** If you have a folder like `app/test/page.tsx`, it will take priority over `app/[slug]/page.tsx`

**Solution:**
- Don't create static pages with the same slug as dynamic pages
- Use unique slugs for dynamic pages (e.g., "custom-test-page")

### Issue 3: Caching Issues

**Problem:** Old cached version showing

**Solution:**
1. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Clear browser cache
3. The API routes have `Cache-Control: no-store` headers to prevent caching

### Issue 4: Database Connection Error

**Problem:** "Failed to fetch page" or Supabase errors

**Solution:**
1. Check `.env.local` has correct Supabase credentials:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
2. Verify these are set in Vercel environment variables
3. Check Supabase project is active and accessible

## Testing Checklist

- [ ] Page exists in Supabase `pages` table
- [ ] `is_published = true` in database
- [ ] Slug is valid (no spaces, lowercase, hyphens only)
- [ ] API endpoint `/api/pages/[slug]` returns data
- [ ] Frontend route `/[slug]` displays page
- [ ] No static route conflicts (no folder with same name)
- [ ] Environment variables are set correctly
- [ ] Vercel deployment is successful

## Debug Commands

### Check if page exists in database:
```sql
SELECT id, slug, title, is_published 
FROM pages 
WHERE slug = 'your-slug-here';
```

### List all published pages:
```sql
SELECT id, slug, title, is_published 
FROM pages 
WHERE is_published = true;
```

### Update a page to published:
```sql
UPDATE pages 
SET is_published = true 
WHERE slug = 'your-slug-here';
```

