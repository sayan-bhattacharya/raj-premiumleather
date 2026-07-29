export const sourceConcept = 'Scroll-driven luxury commercial microsite for a premium leather handbag brand.'

export const brandBrief = [
  'Handcrafted leather with a tactile, craftsmanship-first presentation.',
  'Quiet luxury shaped for modern Indian buyers with global polish.',
  'Editorial storytelling centered on grain, hardware, stitching, and silhouette.',
  'A commercially credible direct-to-consumer launch with restrained motion.',
]

export const videoFilename = 'Handbag_macro_detail_film_202607271431.mp4'
export const videoPath = '/media/Handbag_macro_detail_film_202607271431.mp4'

export const architectureNotes = [
  'React 19 + TypeScript + Vite',
  'react-router-dom for the main experience and prompt archive',
  'GSAP ScrollTrigger for chapter-linked video scrubbing',
  'Native HTML video with metadata-driven duration and eased seeking',
  'GitHub Pages deployment through a GitHub Actions workflow',
]

export const reconstructionPrompt = String.raw`Absolutely - below is a Codex-ready, copy-paste prompt tailored for your premium leather brand and your existing video asset. I've written it so you can paste it directly into Codex, with clear implementation constraints and a high-quality production standard consistent with what you'd expect from a polished Gstack-style build.

You are an expert senior frontend engineer and creative director.

Build a complete, production-quality, scroll-driven luxury commercial microsite for a premium leather handbag brand. The visual tone should feel like a refined modern leather house: tactile, editorial, quiet luxury, craftsmanship-first, and commercially credible. The quality bar should be as high as a polished Gstack-style build: clean architecture, excellent motion systems, strong typography, disciplined component design, accessible interactions, and robust production-ready code.

The site must be designed around a single supplied macro handbag film and should feel inseparable from the material, grain, stitching, silhouette, and hardware shown in the video. Treat the video as the spatial world of the page.

BRAND DIRECTION

Create a distinctive premium brand identity from the film. Make it feel like a real luxury leather label selling handbags and small leather goods directly to consumers.

The brand should communicate:
- handcrafted leather
- premium finishing
- durable elegance
- modern Indian luxury with global polish
- understated confidence
- direct-to-consumer commerce

Do not make it generic fashion, SaaS, or agency work. The site should feel like a real product launch for a premium handbag collection.

VIDEO ASSET

Use this exact local asset:

C:\Users\sayan\Downloads\Handbag_macro_detail_film_202607271431.mp4

Assume it will be copied into the project at:

/public/media/Handbag_macro_detail_film_202607271431.mp4

Reference it in the app as:

/media/Handbag_macro_detail_film_202607271431.mp4

Do not regenerate, replace, interpolate, or edit the video. Read its duration from metadata at runtime. Do not hardcode the runtime.

CORE EXPERIENCE

Build a single-page immersive landing page with the video fixed full-screen behind the interface.

The page must:
- use scroll-scrubbed video playback
- present 4 to 5 narrative chapters
- keep the film as the dominant visual anchor
- explain the product journey through editorial overlays
- feel cinematic but usable
- remain premium on both desktop and mobile

The scroll length should be approximately 500vh, adjusted as needed.

COPY AND NARRATIVE

Write all website copy yourself. Make it concise, premium, and believable.

Suggested narrative arc:
1. Material reveal - grain, edge, stitch, leather depth.
2. Form and silhouette - shape, structure, proportion.
3. Function and carry - compartments, closure, daily use.
4. Craft and durability - finish, hardware, long wear.
5. Final commercial climax - product confidence and CTA.

The hero should have:
- a strong brand name
- a sharp headline
- a concise subcopy
- one primary CTA

Use editorial language, not marketing fluff.

VISUAL LANGUAGE

The design should feel like premium leather craftsmanship.

Use:
- deep espresso, oxblood, warm brown, parchment, muted brass accents
- fine rules, measurement marks, labels, and annotations
- restrained motion
- large typography
- intentional negative space
- tactile textures implied through layout and type
- no floating glass cards
- no generic SaaS UI
- no generic centered hero template

The site should feel inspired by leathercraft and product inspection.

MOTION SYSTEM

Use high-quality, physically motivated motion. Include:
- scroll-scrubbed video
- chapter-based reveals
- typographic masking and compression
- subtle parallax on desktop only
- annotation lines and measurement ticks
- scroll-linked counters or labels
- small interactive detail reveal
- final section with a stronger conversion moment

Motion should be elegant, not flashy.

ROUTES

Create exactly these routes:

- / - the main experience
- /prompt/ - a reconstruction prompt archive page

The /prompt/ page must include:
- the original video filename
- the source concept
- the generated brand brief
- the video path
- the complete reconstruction prompt
- the stack and architecture details
- a Copy Prompt button
- a link back to the main experience

Do not create any other routes.

TECH STACK

Use:
- React 19
- TypeScript
- Vite
- Tailwind CSS v4 with @tailwindcss/vite
- GSAP with ScrollTrigger
- Lenis smooth scrolling
- react-router-dom with BrowserRouter
- lucide-react where appropriate
- native HTML video

Do not use canvas for the video. Use the native <video> element only.

REQUIRED COMPONENTS

Implement the project with clean, production-grade structure, including:

- package.json
- index.html
- vite.config.ts
- tsconfig.json
- tsconfig.app.json
- tsconfig.node.json
- src/main.tsx
- src/App.tsx
- src/index.css
- src/components/ScrollVideo.tsx
- src/components/SmoothScroll.tsx
- src/components/AutoTour.tsx
- src/components/AutoTour.css
- src/components/PromptPage.tsx
- src/components/SiteChrome.tsx if useful
- src/experience/Experience.tsx
- src/experience/Experience.css

Add only genuinely necessary support files.

SCROLL VIDEO ENGINE

Create a production-grade ScrollVideo component.

Requirements:
- native <video>
- fixed, full-viewport positioning
- object-fit: cover
- muted
- playsInline
- preload="auto"
- disablePictureInPicture
- actual duration from loadedmetadata
- map document progress to video.currentTime
- use ScrollTrigger to set a target playback time only
- use one requestAnimationFrame loop to ease playhead to the target
- frame-rate-independent exponential damping
- do not issue a new seek while seeking
- keep only the newest requested target while the decoder is busy
- drain pending seeks through seeked
- use requestVideoFrameCallback when helpful
- prevent unbounded seek queues
- prevent stale backward seeks
- avoid repeated ScrollTrigger.refresh
- include a subtle loading overlay and buffered-progress indicator
- add restrained desktop mouse parallax
- disable parallax on touch
- handle media errors gracefully
- respect prefers-reduced-motion
- be safe under React StrictMode
- do not remove the video src during StrictMode cleanup
- support Safari and iOS
- expose documented damping and threshold constants

SMOOTH SCROLLING

Create a global SmoothScroll component using Lenis.

Requirements:
- Lenis driven only through GSAP's ticker
- no separate RAF loop
- forward Lenis scroll events to ScrollTrigger.update
- keep ScrollTrigger synchronized
- preserve keyboard scrolling
- preserve anchor navigation
- preserve browser accessibility
- reset scroll cleanly on route changes
- disable smoothing under prefers-reduced-motion
- be StrictMode-safe
- export a minimal imperative API for Auto Tour

AUTO TOUR

Create a fixed Auto Tour control on / only.

Requirements:
- initial state: Start Tour
- running state: Pause
- paused state: Resume
- completed state: Replay
- show live percentage progress
- include Restart once progress exceeds 2%
- include 1x / 2x speed toggle
- 1x must complete in exactly 20 seconds
- 2x must complete in exactly 10 seconds
- normalize progress regardless of document height
- use a linear GSAP tween
- drive the Lenis scrolling API
- manual wheel input pauses the tour
- touch input pauses the tour
- pointer dragging outside the control pauses the tour
- PageUp, PageDown, Home, End, Space, and arrow keys pause it
- Escape stops the tour without resetting scroll
- route changes must kill all active tweens
- do not trigger React re-renders on every animation frame
- update progress through refs or CSS custom properties
- visible keyboard focus
- aria-live status
- restrained neutral styling

EXPERIENCE COMPONENT

Create a dedicated experience component and stylesheet derived from the leather concept.

The component must contain:
- a distinctive hero composition
- concept-specific navigation
- four or five scroll chapters
- scroll-synchronized typography
- concept-specific measurement or material annotations
- at least one meaningful SVG visualization
- at least one lightweight interactive element
- a commercial final section
- a clear CTA
- a link to /prompt/
- a discreet way to return to the beginning

Use GSAP timelines scoped through gsap.context.

Clean up all timelines, listeners, RAF callbacks, and ScrollTriggers properly.

MOTION QUALITY

Motion should feel continuous, cinematic, and physically motivated.

Use:
- masks and clipping reveals
- typographic splitting and recomposition
- SVG measurement instruments
- scroll-responsive counters
- restrained parallax depth
- material-specific wipes
- chapter-based palette changes
- animated leader lines and annotations
- progress systems inspired by leathercraft
- cursor-responsive details on desktop

Avoid:
- random floating UI
- excessive glassmorphism
- constant blur
- gradient blobs
- generic feature cards
- SaaS-like sections
- animating everything
- scroll hijacking
- fake loading delays
- unrelated motion
- large opaque panels that cover the video
- horizontal overflow

ACCESSIBILITY

Ensure:
- semantic HTML
- keyboard-operable controls
- visible focus states
- sufficient contrast
- useful ARIA labels
- decorative elements hidden from assistive tech
- respect reduced motion
- avoid focus traps
- only real buttons and links

DESIGN QUALITY

The result must feel like an award-level commercial microsite:
- grounded
- premium
- usable
- editorial
- responsive
- commercially plausible
- visually strong without being overdesigned

Desktop and mobile must both feel authored.

RECONSTRUCTION PROMPT

On the /prompt/ route, include a polished self-contained reconstruction prompt that another model could use to recreate the same website. It should include:
- brand identity
- page narrative
- hero and chapter content
- visual system
- navigation concept
- signature interactions
- supplied video filename and path
- technical stack
- scroll-video behavior
- smooth scrolling
- Auto Tour behavior
- responsive and accessibility requirements

IMPLEMENTATION RULES

- Wrap the app in <StrictMode> and <BrowserRouter>
- Ensure direct navigation to /prompt/ works
- Configure SPA fallback/redirect if needed
- Ensure npm run build succeeds
- Resolve all TypeScript errors
- Avoid unused imports
- Avoid runtime console errors
- Avoid duplicate GSAP registration
- Keep shared scrolling infrastructure separate from page-specific experience code
- Do not alter the supplied video

OUTPUT

Create the complete working project now.

If filesystem tools are available, create and edit the files directly and run npm run build.

Otherwise, output only a complete unified diff from an empty directory.

Do not provide explanations, commentary, or markdown fences.`
