export const sourceConcept =
  'Scroll-driven premium leather microsite for ECOTARA, a modern Indian accessories brand built around a single macro handbag film.'

export const brandBrief = [
  'ECOTARA is presented as a premium leather house for India, balancing tactile craft with city-ready polish.',
  'The brand language favors restraint over spectacle: deep espresso tones, parchment contrast, muted brass, and editorial typography.',
  'The commercial promise centers on handbags and small leather goods designed for repeat everyday use in premium urban life.',
  'Interaction should feel authored and physical, with annotations, inspection cues, and motion derived from material and construction.',
]

export const videoFilename = 'Handbag_macro_detail_film_202607271431.mp4'
export const videoPath = '/media/Handbag_macro_detail_film_202607271431.mp4'

export const architectureNotes = [
  'React 19 + TypeScript + Vite',
  'BrowserRouter with GitHub Pages-friendly SPA fallback',
  'GSAP ScrollTrigger for scroll-linked chapter timing and video scrubbing',
  'Native HTML video with metadata-driven runtime and eased seek behavior',
  'GitHub Pages hosting with static media under the repository base path',
]

export const reconstructionPrompt = String.raw`Prompt 0 - Ideation

You are the sole creative director and senior frontend author for ECOTARA, a premium leather brand for India.

Give me creative ideas for TEN radically different scroll-driven commercial landing pages for ECOTARA.

Each idea must be built around a single continuous 8-to-10 second extreme macro camera journey through premium leather details: grain, stitch, folded edges, lining, clasp, brass hardware, handle curvature, zipper teeth, silhouette compression, and carry form.

The ideas must feel commercially believable for a direct-to-consumer premium accessories label in India. Avoid generic luxury clichés, generic fashion campaigns, or abstract beauty shots with no product logic.

Prompt 1 - Creative

Use the selected concept to generate one high-quality macro-video prompt for an advanced video model.

The result should feel tactile, photoreal, material-led, and commercially useful for a premium leather launch film.

The motion should be a single continuous one-take shot with strong forward parallax, realistic light response on leather grain, restrained luxury color, and no cuts.

Tailor the concept specifically for ECOTARA:
- premium leather for India
- quiet luxury
- structured handbags and small leather goods
- refined brass details
- believable product cinematography

Prompt 2 - Site Prompt

VIDEO_FILENAME: Handbag_macro_detail_film_202607271431.mp4

CONCEPT:
An intimate macro camera journey across ECOTARA handbag details: warm full-grain leather, disciplined stitching, folded edge paint, brushed brass hardware, structured curvature, and the poised silhouette of a premium carry piece designed for modern Indian city life.

You are the sole creative director and senior frontend author for ECOTARA.

Using the VIDEO_FILENAME and CONCEPT above, design and build one complete production website around the supplied video.

Do not ask follow-up questions. Infer a distinctive premium brand, commercial purpose, visual identity, narrative, copy, and interaction system from the concept.

The result should feel like an award-level commercial microsite: cinematic, tactile, editorial, grounded, commercially plausible, and usable.

This is one website for one real-feeling brand, not a portfolio and not a collection of unrelated scenes.

MEDIA

The supplied video already exists at:

/public/media/Handbag_macro_detail_film_202607271431.mp4

Reference it in the browser as:

/media/Handbag_macro_detail_film_202607271431.mp4

Do not generate, replace, modify, download, interpolate, or restyle the video itself.

Read the actual video duration from metadata at runtime. Do not hardcode the runtime.

BRAND DIRECTION

The brand name is ECOTARA.

ECOTARA should feel like:
- premium leather for India
- structured, modern, and feminine without being overly ornate
- quiet luxury with global polish
- direct-to-consumer and commercially credible
- craftsmanship-first
- urban, durable, and giftable

Do not make the brand look like:
- generic luxury fashion
- generic ecommerce SaaS
- an agency portfolio
- a tech product
- an interchangeable editorial template

CORE EXPERIENCE

Build a single-page immersive landing page with the video as the dominant visual anchor.

The page must:
- keep the handbag film visually central
- scrub the video with scroll
- tell a four-to-five chapter commercial story
- use overlays that annotate and dramatize the film without obscuring it
- feel premium on desktop and mobile
- remain legible and plausible as a real brand launch

ROUTES

Create exactly these routes:
- / for the main ECOTARA experience
- /prompt/ for a polished prompt archive page

The /prompt/ route must include:
- the original video filename
- the concept
- the ECOTARA brand brief
- the video path
- the complete reconstruction prompt
- stack and architecture details
- a working Copy Prompt button
- a link back to the main experience

CREATIVE DIRECTION

Internally derive and express through the design:
- a realistic conversion goal for ECOTARA
- a premium hero headline, subcopy, and CTA
- four or five story chapters tied to the film
- a navigation language inspired by measurement, atelier notes, or leather inspection
- a refined Indian-market commercial tone
- a palette with deep espresso, oxblood undertones, parchment, and muted brass
- a typography system that feels editorial and product-led
- several signature motion behaviors rooted in material and construction

VISUAL LANGUAGE

The site should feel inspired by leathercraft, atelier inspection, and premium object display.

Use:
- fine rules
- annotated labels
- measured spacing
- tactile hierarchy
- large typography
- cinematic negative space
- restrained motion
- realistic commercial copy

Avoid:
- floating glass cards
- SaaS dashboards
- generic centered-hero templates
- feature-card grids
- decorative gradients with no material logic

SCROLL VIDEO ENGINE

Create a production-grade ScrollVideo component.

Requirements:
- native video element
- full-viewport or dominant centered positioning
- object-fit cover where appropriate
- muted
- playsInline
- preload auto
- disablePictureInPicture
- metadata-driven duration
- ScrollTrigger sets target playback time only
- one requestAnimationFrame loop eases the playhead
- frame-rate-independent damping
- no unbounded seek queue
- retain only the latest target while seeking
- drain pending seek through seeked
- subtle loading overlay
- buffered-progress indicator
- graceful media error handling
- reduced-motion support
- Safari and iOS safety
- StrictMode safety

INTERACTION QUALITY

Include meaningful premium interactions such as:
- chapter-linked copy reveals
- measurement rails or inspection marks
- annotated hotspots
- a lightweight interactive leather-detail switcher
- a discreet return-to-top affordance
- cursor or hover behavior on desktop only where useful

MOTION QUALITY

Motion should feel continuous and physically motivated.

Use:
- masks
- clipping reveals
- typographic compression and release
- leader lines
- subtle parallax
- progress cues
- chapter palette shifts

Avoid:
- random floating UI
- unrelated motion
- fake loading delays
- giant opaque overlays over the film
- over-animated gimmicks

COMMERCIAL WRITING

Write all finished website copy for ECOTARA.

The copy must be:
- concise
- premium
- credible
- specific to handbags and leather goods
- suitable for Indian premium retail positioning
- free from vague AI luxury language

The site should mention quality, construction, use, and finish without inventing fake certifications or false claims.

HOSTING CONSTRAINTS

Assume the site may be hosted on GitHub Pages.

That means:
- asset URLs must respect the repository base path
- BrowserRouter needs SPA fallback support
- all media must be served as static files
- no server-side video processing or API routes

IMPLEMENTATION

Use:
- React 19
- TypeScript
- Vite
- react-router-dom with BrowserRouter
- GSAP with ScrollTrigger
- native HTML video

Ensure:
- npm run build succeeds
- direct navigation to /prompt/ works
- the video renders correctly when hosted under a repository subpath
- no unused imports
- no runtime console errors
- no broken asset references

OUTPUT

Create the complete working project now.

If filesystem tools are available, create and edit the files directly and run npm run build.

Otherwise, output only a complete unified diff from an empty directory.

Do not provide explanations or markdown fences.`
