# Traver — token extraction notes

**Reference used:** the supplied 521 × 1536 landing-page screenshot only.

## Values sampled from visible pixels
- Brand orange: `#F2701C` (sampled from the orange CTA button)
- Cool pale surface: `#F6F8F7` (sampled from the feature/section background)
- Warm pale surface: `#FFF4EE` (sampled from the lower promotional panel)
- White page surface: `#FFFFFF`

## Values estimated from visual appearance
- Font: Poppins, weights 400–800. This is the closest visual match, not a confirmed source font.
- Main text: softened near-black `#1A1A1A`
- Secondary text: `#555555`; muted text: `#858585`
- Borders, radii, shadows, type scale, layout widths and spacing are sensible measurements inferred from the screenshot. They cannot be recovered exactly from a flattened image.
- Desktop content max-width: 1200px estimate. Mobile/tablet values are fluid and intentionally scale down rather than mechanically shrinking the desktop layout.

## Responsive strategy
- Mobile-first; 320px minimum supported width.
- Tablet breakpoint: 768px.
- Desktop breakpoint: 1024px.
- Container gutters, section spacing, headings, and grid gaps use CSS `clamp()` and media queries.
- The CSS file does not assume Tailwind v3 or v4. Keep the project's existing Tailwind import/directives and merge the token layer into `src/index.css`.

## Accessibility decision
The supplied navbar reference uses the sampled orange `#F2701C` for both the outlined Sign Up action and the filled Login action, with white text on the filled action. The site follows that visual treatment through `--color-brand`; the previous dark-orange `--color-brand-accessible` variant has been removed so it cannot become a competing CTA background. White text on this orange does not meet WCAG AA contrast for normal-size text, so keep button labels bold and use the dark brand text color for small outlined actions where the reference permits it. The lighter `--color-brand-hover` (`#F58432`) preserves the same bright orange character during hover.

## Navbar measurements
- Header height: 56px after the user's request for more vertical breathing room.
- Header background: neutral near-white `#F7F7F7` estimate.
- Brand mark: 24px, with compact 6px spacing before the wordmark.
- Auth actions: 76px wide by 30px high, 8px gap, 10px rounded corners, and equal sizing. The outlined action uses estimated soft-orange border `#E6C5A7` and text `#C96B2E`.
- Desktop nav links: 14px, increasing to 15px on wide displays, with 36px gaps and 40px gaps on large displays; auth labels: 12px semibold with tight line height, using Tailwind's standard `text-xs` utility.
- The navbar has no bottom border; component styles should use named token utilities, not arbitrary values.
- Desktop nav links are centered independently of the edge-aligned brand and auth actions.
- Desktop content width: approximately five-sixths of the viewport, capped by the shared 1200px container.
