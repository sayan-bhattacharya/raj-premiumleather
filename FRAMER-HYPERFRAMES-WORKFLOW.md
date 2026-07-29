# Framer + HyperFrames Workflow

Use this after the client reacts to the first coded concept.

## Framer AI Prompt

Paste this into Framer AI to explore alternate art direction while keeping the same luxury positioning:

```text
Create a premium leather brand landing page for "Raj Premium Leather" aimed at the Indian market.

Art direction:
- Warm walnut, saddle tan, brass, cream
- Editorial luxury, heritage travel, boutique hotel mood
- Full-bleed hero
- Minimal copy
- Large serif headline with refined sans-serif support text
- Feels inspired by modern Indian luxury retail, not generic ecommerce

Business cues:
- INR pricing
- Travel, gifting, work, and wedding-season utility
- Cities like Delhi, Mumbai, Bengaluru, Jaipur
- Product categories: weekender, office tote, sling

Hero requirement:
- Prominent autoplay launch-film area
- Strong CTA to watch the film and explore the collection

Interaction:
- Smooth reveal animations
- Depth on scroll
- Premium hover states
```

## HyperFrames Prompt

Use this prompt inside the `hyperframes-launch` project if you want the film rebuilt with more energy, VO, or sharper transitions:

```text
Using /hyperframes, rebuild this launch video as a 20-second product launch film for Raj Premium Leather.

Direction:
- Premium Indian leather brand
- Warm editorial lighting
- Heritage-travel mood
- Strong luxury typography
- Emphasis on the Indian market, INR pricing, and modern city travel

Scenes:
1. Cinematic brand intro
2. Three mock bag highlights
3. Indian market use cases and city cues
4. Closing brand statement with a premium CTA

Keep it elegant, minimal, and client-presentation ready.
```

## Useful Commands

From the site root:

```bash
npm install
npm run dev
npm run build
```

From `hyperframes-launch/`:

```bash
npx hyperframes@0.7.71 preview
npx hyperframes@0.7.71 check
npx hyperframes@0.7.71 render --output ../public/launch-film.mp4
```
