# Deployment Guide - Environment Variables

When deploying to Vercel (or other cloud platforms), you need to set environment variables in the platform's dashboard, not just in `.env.local` (which is only for local development).

## For Vercel Deployment

### Step 1: Go to Your Vercel Project

1. Log in to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project (or create a new one if you haven't deployed yet)

### Step 2: Add Environment Variables

1. Go to **Settings** → **Environment Variables**
2. Add the following three environment variables:

#### Required Environment Variables:

1. **NEXT_PUBLIC_SUPABASE_URL**
   - Value: `https://pdeptcmlamozvfttgjfq.supabase.co`
   - Environment: Select **Production**, **Preview**, and **Development**

2. **NEXT_PUBLIC_SUPABASE_ANON_KEY**
   - Value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkZXB0Y21sYW1venZmdHRnamZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMxOTc1ODAsImV4cCI6MjA3ODc3MzU4MH0.4nA7WJnN3nroCf6VeyyxZqJq86H6BWfQepVVkEQkZWg`
   - Environment: Select **Production**, **Preview**, and **Development**

3. **SUPABASE_SERVICE_ROLE_KEY**
   - Value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkZXB0Y21sYW1venZmdHRnamZxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MzE5NzU4MCwiZXhwIjoyMDc4NzczNTgwfQ.AV5E_YOR1dYBICOgp7ixDmZHwfLGKBibBUiriYfNwQo`
   - Environment: Select **Production**, **Preview**, and **Development**
   - ⚠️ **IMPORTANT**: This is a secret key. Never expose it publicly.

### Step 3: Redeploy

After adding the environment variables:

1. Go to **Deployments** tab
2. Click the **"..."** menu on your latest deployment
3. Select **"Redeploy"**
4. Or push a new commit to trigger a new deployment

### Step 4: Verify

After deployment, test your contact form on the live site. Submissions should now be saved to your Supabase database.

---

## For Other Cloud Platforms

### Netlify

1. Go to **Site settings** → **Environment variables**
2. Add the same three variables as above
3. Redeploy your site

### Railway

1. Go to your project → **Variables** tab
2. Add the same three variables
3. Redeploy

### AWS Amplify / Other Platforms

1. Find the **Environment Variables** or **Configuration** section
2. Add the same three variables
3. Redeploy

---

## Important Notes

- **`.env.local`** is only for local development and is NOT deployed to production
- Environment variables must be set in your cloud platform's dashboard
- After adding/changing environment variables, you must **redeploy** for changes to take effect
- The `NEXT_PUBLIC_` prefix makes variables available to the browser (client-side)
- Variables without `NEXT_PUBLIC_` are only available on the server (API routes)

---

## Troubleshooting

### Contact form still not working after deployment?

1. **Check environment variables are set:**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Verify all three variables are present

2. **Check deployment logs:**
   - Go to Deployments → Click on your deployment → View logs
   - Look for any errors related to Supabase

3. **Verify database tables exist:**
   - Go to Supabase Dashboard → Table Editor
   - Ensure the `contacts` table exists

4. **Test the API endpoint directly:**
   - Use a tool like Postman or curl to test `POST https://your-domain.com/api/contact`
   - Check the response for error messages

---

## Security Best Practices

- ✅ Never commit `.env.local` to git (it's already in `.gitignore`)
- ✅ Never commit service role keys to git
- ✅ Use different keys for development and production if needed
- ✅ Regularly rotate your service role key
- ✅ Only give the service role key to trusted team members

