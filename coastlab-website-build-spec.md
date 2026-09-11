# CoastLaB Development Website — Build Spec

## Overview
Build a React website for CoastLaB Development, a small software company (LLC in process of being filed) whose first product is Vault, an iMessage app. Domain: coastlab.dev. Prioritize a clean, modern, well-crafted UI — this is a portfolio-quality company site, not a throwaway landing page.

## Tech
- React (component-based)
- Use Tailwind for styling if convenient
- Fully responsive (mobile-first — most traffic will likely come from phones since Vault is an iMessage app)
- Font: Oswald Light throughout, both sites
- No backend required for v1 — Contact page uses a `mailto:` link, not a form

## Site Structure
- `coastlab.dev` — Home
  - Tabs/sections: About Us, Current Projects, Contact Us
- `coastlab.dev/vault` — Vault landing page
- `coastlab.dev/support` — Support (Vault-specific content for now, structured so it can extend to future products)
- `coastlab.dev/privacy` — Privacy Policy (company-wide, with a Vault-specific section)
- `coastlab.dev/terms` — Terms & Conditions (company-wide)

Footer (all pages): contact email, copyright line, links to Privacy/Terms.

## Color Themes

**Main site (Home, Support, Privacy, Terms):**
- Background: slightly lighter than pure black
- Primary color: `#7FDCFF` (light blue), used for headings/accents, font Oswald Light
- Secondary/highlight colors: dark blue and white

**Vault page only (`/vault`):**
- Same dark background as main site
- Primary color: `#FF3B30` (red), font Oswald Light
- Secondary color: white

## Copy

### Home — About Us
> CoastLaB Development started with a passion for creating tools to enhance the everyday functions of how we use technology. Here at CoastLaB we start with projects we are passionate about internally and want to share with the world. We believe this intrinsic desire to create our products is imperative to driving innovation and staying empathetic to users.

### Home — Current Projects
- **Vault: Save and Send Sounds** — links to `/vault`

### Home — Contact Us
- Contact email as a `mailto:` link (placeholder: hello@coastlab.dev — swap in real address)

### Vault — About
> Vault lets you create, save, and send voice clips without ever leaving iMessage. No account to create — just tap, talk, and send. Built for the real, live moments a text doesn't quite capture: a laugh, a quick update, a voice memo you actually want to keep.

### Vault — Features
1. **Native to iMessage** — create and send audio clips right in the conversation, no app switching.
2. **One-tap playback** — clips play instantly for the person you send them to.
3. **Private by design** — your clips live in your own iCloud, not on a company server.
4. **Upload audio from video** — upload, extract and trim audio from your favorite videos.
5. **Save friends' Vault clips** — add friends' Vault clips to your own Vault.
6. **Shared Vaults** *(coming soon)* — build a running audio collection with friends or family.

### Vault — "How It Works" strip
Three-step visual: **Record → Send → Play**. Short, iconography-driven, placeholder icons for now.

### Vault — App Store badge
Include a placeholder for the official Apple "Download on the App Store" badge, positioned prominently on the Vault page. Not linked yet (app not live) — use a disabled/placeholder state.

### Support page
Structure with a "Vault" heading/section so it's clear the page will hold multiple products' support content later. Placeholder FAQ-style content is fine for now (e.g., "How do I record a clip?", "Where are my clips stored?", "My clip won't send — what do I check?").

### Privacy Policy / Terms & Conditions
Use placeholder text for now — final legal copy should be drafted separately (note: needs review before publishing, and should reference CoastLaB Development LLC once the entity is formed). Structure the page with clear headers so real content can be dropped in later:
- Privacy Policy: Information We Collect, How Data Is Stored (note: clips stored in user's private iCloud via CloudKit, not on CoastLaB servers), Third-Party Services, Contact
- Terms & Conditions: Acceptance of Terms, Use of the App, Intellectual Property, Limitation of Liability, Changes to Terms, Contact

## Assets / Placeholders (not final yet)
- Logo/wordmark: use a styled text wordmark ("CoastLaB" in Oswald Light) as placeholder — no image logo yet
- Vault icon: placeholder shape/icon acceptable
- "How it works" icons: simple placeholder icons (record/send/play)
- App Store badge: placeholder, non-functional link

## Notes for whoever builds this
- Keep the two color themes cleanly separated in code (e.g., theme tokens/CSS variables) so the red Vault theme never bleeds into the blue main-site theme or vice versa.
- Design for future products: the "Current Projects" section and the Support page should be built assuming more than one product will eventually live here.
- No user accounts, no login, no backend data storage required for the website itself.
