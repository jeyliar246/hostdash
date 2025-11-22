# Deployment Guide - Host Dashboard

Your host dashboard has been uploaded to GitHub: https://github.com/jeyliar246/hostdash.git

## Quick Deployment Options

### Option 1: Netlify (Recommended - Easiest)

1. Go to https://www.netlify.com and sign up/login
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select `jeyliar246/hostdash`
4. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click "Deploy site"
6. Your site will be live in minutes!

### Option 2: Vercel

1. Go to https://vercel.com and sign up/login
2. Click "Add New Project"
3. Import from GitHub: `jeyliar246/hostdash`
4. Vercel auto-detects Vite settings
5. Click "Deploy"
6. Your site will be live instantly!

### Option 3: GitHub Pages (Free)

1. In your GitHub repo, go to **Settings** → **Pages**
2. Under "Source", select **GitHub Actions**
3. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

4. Push the workflow file to trigger deployment
5. Your site will be at: `https://jeyliar246.github.io/hostdash/`

### Option 4: Any Static Host (Manual)

1. Clone the repo:
   ```bash
   git clone https://github.com/jeyliar246/hostdash.git
   cd hostdash
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

4. Upload the `dist` folder to your web host (via FTP, cPanel, etc.)

## Important Notes

- The dashboard connects to your Supabase backend automatically
- No environment variables needed (Supabase credentials are in the code)
- Make sure your Supabase project allows requests from your deployed domain
- For production, consider moving Supabase keys to environment variables

## Environment Variables (Optional - For Better Security)

If you want to use environment variables:

1. Create `.env` file:
```
VITE_SUPABASE_URL=https://vlmjhtoriudhvxdqrcrs.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

2. Update `src/config/supabase.js`:
```javascript
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
```

3. Add `.env` to `.gitignore`
4. Add environment variables in your hosting platform's dashboard

## Testing Locally Before Deployment

```bash
npm install
npm run build
npm run preview
```

This builds and serves the production version locally at http://localhost:4173

## Troubleshooting

- **Build fails:** Make sure Node.js 18+ is installed
- **CORS errors:** Check Supabase settings for allowed domains
- **Auth not working:** Verify Supabase URL and keys are correct
- **Styling issues:** Clear browser cache and rebuild

Your dashboard is ready to deploy! 🚀




