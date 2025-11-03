# Host Dashboard - Softlife

A simple web dashboard for hosts to manage their listings (apartments, home meals, events, luxury cars, and services).

## Features

- 🔐 Authentication (Login/Sign Up)
- 📊 Dashboard with listing statistics
- 🏠 List Apartments
- 🍲 List Home Meals
- 🎫 List Events
- 🚗 List Luxury Cars
- 🔧 List Services

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open http://localhost:3001 in your browser

## Build

```bash
npm run build
```

## Configuration

The dashboard connects to the same Supabase backend as the mobile app. The Supabase credentials are configured in `src/config/supabase.js`.

Make sure your Supabase database has the following tables:
- `profiles`
- `properties`
- `meals`
- `events`
- `luxury_cars`
- `services`

## Tech Stack

- React 18
- Vite
- Supabase (Authentication & Database)
- React Router

