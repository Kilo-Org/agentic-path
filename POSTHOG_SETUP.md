# PostHog Analytics Setup

## Problem Diagnosed

Your site at https://path.kilo.ai was **not tracking any page views** because PostHog was not installed or configured.

## What Was Missing

1. No PostHog tracking script in the site
2. No analytics configuration in the Astro/Starlight setup
3. No PostHog initialization code

## Solution Implemented

I've added PostHog analytics tracking to your Astro/Starlight site:

### Files Created/Modified:

1. **`public/posthog.js`** - PostHog tracking script
2. **`astro.config.mjs`** - Added script reference to Starlight head configuration
3. **`src/components/PostHogScript.astro`** - Alternative component-based approach (optional)

## Next Steps - REQUIRED

### 1. Get Your PostHog API Key

You need to replace the placeholder API key with your actual PostHog project key:

1. Go to your PostHog dashboard: https://app.posthog.com (or https://us.posthog.com)
2. Navigate to Project Settings → Project API Key
3. Copy your API key (starts with `phc_`)

### 2. Update the API Key

Edit [`public/posthog.js`](public/posthog.js:9) and replace:

```javascript
posthog.init('phc_YOUR_PROJECT_API_KEY', {
```

With your actual key:

```javascript
posthog.init('phc_abc123yourrealapikey', {
```

### 3. Deploy the Changes

```bash
# Build and deploy
npm run build

# Or if using a deployment platform, commit and push:
git add .
git commit -m "Add PostHog analytics tracking"
git push
```

### 4. Verify It's Working

After deployment:

1. Visit your site: https://path.kilo.ai
2. Open browser DevTools (F12) → Console
3. Type: `posthog` and press Enter
4. You should see the PostHog object (not undefined)
5. Check your PostHog dashboard for incoming events

## Configuration Details

The PostHog script is configured with:

- **API Host**: `https://us.i.posthog.com` (US region)
- **Person Profiles**: `identified_only` (privacy-friendly, only tracks identified users)
- **Capture Pageview**: `true` (automatically tracks page views)
- **Capture Pageleave**: `true` (tracks when users leave pages)

## Alternative: Environment Variables (Recommended)

For better security, you can use environment variables:

1. Create `.env` file:

```env
PUBLIC_POSTHOG_KEY=phc_your_actual_key
PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

2. Update `public/posthog.js` to use import.meta.env (requires converting to Astro component)

## Troubleshooting

If page views still don't appear:

1. **Check browser console** for errors
2. **Verify API key** is correct and active
3. **Check PostHog project** is not paused
4. **Network tab** - look for requests to posthog.com
5. **Ad blockers** - may block PostHog (test in incognito)

## Testing Locally

```bash
npm run dev
```

Then visit http://localhost:4321 and check the browser console for PostHog initialization.
