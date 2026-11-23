# Traver — token extraction notes

**References used:** the supplied full landing-page screenshot and the clearer `traver temp/traver-landing-reference.jpeg` (1037 × 592), whose page area is approximately 974 × 538 after excluding viewer controls.

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
- Header height: about 50px at 974px, growing to a 64px cap on large screens. Mobile uses 64px after the user's request for more breathing room. The height token also controls anchor scroll clearance.
- Header background: `#F9F9F9`, sampled at several unobstructed pixels in the clearer JPEG reference; this is a screenshot sample, not source CSS metadata.
- Brand mark: 24px at reference width, capped at 28px on large screens, with compact 6px spacing before the wordmark. Wordmark grows from 16px to a 20px cap.
- Auth actions: about 70 × 26px at 974px, capped at 88 × 34px on large screens, 8px gap, and equal sizing. Mobile menu actions have at least 46px height and 96px width. Shared 12px control corners. Sign Up retains a soft-orange outline and transparent surface; Login remains filled orange. Actions stay disabled until real account flows exist.
- Desktop links: approximately 11px at reference width, capped at 14px; gaps about 32px at reference width, capped at 36px. Auth labels scale from 10px to a 12px cap. Poppins remains the shared app font.
- The navbar has no bottom border; component styles should use named token utilities, not arbitrary values.
- Desktop nav links are centered independently of the edge-aligned brand and auth actions.
- Desktop content width: approximately five-sixths of the viewport, capped by the shared 1200px container.
- On wide/ultrawide displays the 1200px content cap prevents oversized navigation or controls drifting to the screen edges. Header surface spans the viewport; content remains aligned with the hero container.
- Motion is an implementation choice because the supplied reference is static: short staggered brand/nav/action entrance; subtle link underline feedback; interruptible mobile-panel opacity/translation. Keyboard menu actions are instant and reduced motion removes entrance movement. Choreography lives in `src/components/navigation/navbar.motion.ts` and reads the existing timing/easing tokens.
- Shared `src/lib/motion.ts` converts CSS durations with either ms or s suffixes; production minification must not collapse a 220ms transition into 0.22ms. Hero and navbar keep separate choreography but share this conversion.
- Mobile menu is an inset white card with 24px corners, 20px screen gutters, active warm Home row, outline icon tiles, and a separate muted account footer. Auth actions fill two equal columns at 48px height with 14px labels and shared 12px control corners. Panel scrolls internally on short screens and dismisses on outside click, Escape, navigation, or a switch to desktop. Unfinished section items are disabled; the coming-soon popup has been removed.
- Header is sticky at viewport top on all screen sizes, per the user's scroll request. Mobile menu has a lightly blurred white backdrop beneath the sticky header; its account footer uses the same 12px control corners. Backdrop/toggle dismissals preserve keyboard access and focus.

## Clearer hero reference: layout correction

These estimates supersede earlier hero proportions and describe the settled layout.

- Shared landing container: 85.2% width capped at 1200px. At 974px, the left edge is about 72px.
- Desktop collage starts around (491px, 76px), approximately 498 × 463px. Its right edge deliberately extends beyond the viewport; the section clips it without horizontal scrolling.
- Within the collage, photo left/top positions are: balloon 13.3%/0%; boardwalk 51.1%/9.5%; tropical 0%/47.2%; hiker 51.1%/56.5%. Narrow photos are 34.8% wide, wide photos 48.1%; heights are 43.9% and 41.3%. This retains approximately 15px gaps at reference width.
- Destination badge: left -4%, top 22.3%, width 25.8%, height 18.2%, translucent warm background and backdrop blur. Verification badge: left 55.7%, top 4.5%, width 12.3%, height 11.7%, translucent white and backdrop blur.
- Heading: retain estimated Poppins, about 36px at 974px, bold first line and normal remaining lines, line height 1.22. The original font remains unverified.
- Copy and badge wording follow the screenshot. Destination/verification numbers are reference demo copy, not verified service statistics.
- Search panel: about 481 × 65px at (72px, 376px), 116% of the copy column, overlapping the tropical photo. Location, Select Date, Get Started; reference date is placeholder text until selected.
- Below 768px, layout stacks and collage fits the viewport. Below 576px, search controls stack with comfortable input/button heights.
- Photographs remain real downloaded stock images; original template photo files were not supplied, so photo content is not identical.

### Detail typography and search surface refinement
- Use the navbar's Poppins family for all text across the app, including badge titles and search labels. The user rejected the separate detail-family override. Compact badge/search headings use weight 600; regular copy and actions retain their existing weights. The original template font is still unverified.
- Detail labels scale from 11–14px (about 11.5px at 974px), badge body text from 10–12px, and desktop hero supporting copy from 12–15px. Smaller text should retain its hierarchy rather than grow as large as main body copy.
- Search panel uses the existing `--color-surface-input` (`#FAFAFA`) instead of pure white.
- Desktop Get Started action is approximately 106 × 34px at 974px, with shared 12px corners and medium weight. It scales to 144 × 44px on wider screens; touch devices and stacked mobile layout retain at least the existing 46px button height.
