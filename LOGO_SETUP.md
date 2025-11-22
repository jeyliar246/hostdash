# Logo Setup Guide

## Current Status

The website is configured to use `/logo.png` from the `public` folder.

## Adding Your Logo

1. **Replace the logo file:**
   - Place your Softlife logo image in the `public/` folder
   - Name it: `logo.png`
   - Recommended size: 200x200px (or square format)
   - Format: PNG with transparent background preferred

2. **Alternative formats:**
   - If using SVG, name it `logo.svg` and update the image source in:
     - `src/pages/LandingPage.jsx` (line 86, 184)
     - Change `/logo.png` to `/logo.svg`

3. **Current logo source:**
   - The logo is copied from your mobile app's `assets/icon.png`
   - If you have a specific logo file, replace `public/logo.png` with it

## Where the Logo Appears

- Landing page header (navigation bar)
- Landing page footer
- Any other locations you add it to

## Image Requirements

- **Format:** PNG, SVG, or JPG
- **Size:** 200x200px minimum (square)
- **Background:** Transparent preferred
- **File size:** Under 500KB for faster loading




