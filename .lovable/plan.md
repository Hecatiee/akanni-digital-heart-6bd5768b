## Vision

Reskin the entire site from the warm pastel kindergarten aesthetic into a cinematic, editorial, scroll-driven experience inspired by the reference video (Sleep Well Creative style): deep midnight palette, large serif display type, atmospheric particle/star fields, soft glows, parallax scenes, and slow elegant motion. Content stays the same; the skin, type, palette, and motion language change.

I will keep this in pure frontend/presentation work. No database, auth, or business logic touched.

## Visual language

- Palette: deep midnight blue background (#070B1F to #0C1230), off-white #EDE9DD body, glow accents in soft cyan and warm amber.
- Typography: large editorial serif display ("Fraunces" or "Instrument Serif") for headings with wide letter spacing on hero lines, paired with Inter for body. Quicksand retired sitewide.
- Texture: subtle noise/grain overlay, slow drifting starfield, soft radial glows behind hero subjects, thin hairline dividers.
- Motion: slow fade-up on scroll (Framer Motion / IntersectionObserver), parallax on hero, soft float on glow orbs, marquee tempo slowed, testimonials carousel respects existing 2s timing.
- Layout: more negative space, asymmetric editorial alignment, full-bleed hero, section labels in tiny tracked uppercase.

## Scope of changes (frontend only)

```
src/index.css            redesign tokens (HSL): background, foreground,
                         primary (cyan glow), accent (amber), card, border,
                         add grain + glow utilities
tailwind.config.ts       swap font families: serif display + Inter,
                         add slow drift / glow / grain animations
index.html               load Fraunces + Inter from Google Fonts,
                         remove Quicksand
src/components/Hero.tsx           full-bleed dark hero, serif headline,
                                  starfield + glow orb, parallax CTAs
src/components/Navbar.tsx         translucent dark glass, hairline border,
                                  serif wordmark, refined hover
src/components/About.tsx          editorial two-column, large pull-quote
src/components/Services.tsx       dark cards with glow border on hover,
                                  numbered list aesthetic
src/components/Projects.tsx       cinematic milestone cards, keep flip
                                  interaction from prior request
src/components/Testimonials.tsx   dark glass cards, slow ken-burns,
                                  keep 2s autoplay
src/components/TrustedBy.tsx      monochrome logos, slow marquee
src/components/Contact.tsx        dark form, glow focus rings
src/components/Footer.tsx         minimal serif sign-off
src/components/InternShowcase.tsx dark frame around certificates
src/pages/Internships.tsx         match new dark shell
```

New tiny shared pieces:
- `src/components/Starfield.tsx` (canvas-based slow drifting stars)
- `src/components/Grain.tsx` (fixed SVG noise overlay)

## What I will not change

- Memory rule "Kindergarten pastel" gets retired; I will rewrite `mem://style/brand-identity` and the index Core line to reflect the new cinematic identity so future work stays consistent.
- All copy, all routes, all backend, all forms, internship logic, admin dashboard, testimonials content, contact emails, services list, project highlights order — untouched.
- Mobile-first responsive maintained at every breakpoint.

## Risks / honest notes

- I cannot reproduce the bespoke 3D AI scenes from the reel (those are custom rendered art per scene). The cinematic *feel* will come from typography, palette, glow, starfield, and motion — not from custom rendered worlds.
- If after seeing it you want actual generated dark hero artwork (AI images), that is a quick follow-up.
- This is a substantial reskin; expect one large change set.

## Order of work

1. Tokens + fonts + globals (index.css, tailwind, index.html)
2. Shared atmospherics (Starfield, Grain)
3. Hero + Navbar (sets the tone)
4. About → Services → Projects → Testimonials → TrustedBy → Contact → Footer
5. Internships page + InternShowcase
6. Memory update
7. Mobile pass + visual QA on key breakpoints