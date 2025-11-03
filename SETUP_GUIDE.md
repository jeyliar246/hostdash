# Host Dashboard Setup Guide

## Quick Start

1. **Install dependencies:**
   ```bash
   cd host-dashboard
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   - Navigate to http://localhost:3001
   - You'll see the login/signup page

## Features

### Authentication
- **Sign Up**: New hosts can create an account
- **Login**: Existing hosts can log in
- Uses Supabase Auth (same as mobile app)

### Dashboard
- **Statistics**: Shows count of listings for each category
- **Quick Actions**: Click on a category card to add a new listing

### Listing Types
1. **Apartment** - List rental properties
2. **Home Meal** - List home-cooked meals
3. **Event** - List events/tickets
4. **Luxury Car** - List car rentals
5. **Service** - List services (Chef, Driver, etc.)

## File Structure

```
host-dashboard/
├── src/
│   ├── config/
│   │   └── supabase.js          # Supabase client configuration
│   ├── pages/
│   │   ├── AuthPage.jsx         # Login/Signup page
│   │   ├── Dashboard.jsx        # Main dashboard
│   │   └── ListProperty.jsx     # Listing form
│   ├── App.jsx                  # Main app component with routing
│   └── main.jsx                 # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## Configuration

The dashboard connects to your Supabase backend automatically. The credentials are in `src/config/supabase.js` and match your mobile app configuration.

## Database Tables Required

Ensure these tables exist in your Supabase database:
- `profiles` - User profiles
- `properties` - Apartment listings
- `meals` - Home meal listings
- `events` - Event listings
- `luxury_cars` - Car rental listings
- `services` - Service listings

## Production Build

```bash
npm run build
```

The built files will be in the `dist/` directory, ready to deploy to any static hosting service (Netlify, Vercel, etc.).

