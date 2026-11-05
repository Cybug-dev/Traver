# Traver — Design System

> Purpose: A concise source of truth for Traver's shared visual language and UI behaviour.
> Direction: Match the supplied Traver reference, with careful refinement for accessibility, responsiveness, usability, and consistency. Do not redesign it into a different brand.

## 1. Source-of-truth priority

1. User's explicit instruction for the current component.
2. Supplied Traver reference for visual identity and page composition.
3. Existing Traver screens/components for patterns not shown in the reference.
4. Rules in this document.
5. Agent judgement only where the above leave a gap.

A component-specific instruction may intentionally differ from a global rule. Keep that exception local unless the user requests a system-wide change.

## 2. Reference matching

- Preserve the reference's overall character: image-led travel presentation, warm orange accent, light backgrounds, rounded imagery, clean typography, and clear whitespace.
- Refine for accessibility, responsive behaviour, contrast, consistency, and interaction clarity.
- Do not invent a new palette, font direction, decorative style, or component aesthetic.
- Do not blindly reproduce defects or awkward behaviour from a static screenshot.
- Treat measurements and colors sampled from a screenshot as estimates until verified against source assets/design files or confirmed by the user.
- Prefer supplied assets. Do not substitute unrelated imagery.

## 3. Design tokens and implementation

This document describes the rules. Actual tokens belong in the global stylesheet (normally `src/index.css`) using syntax supported by the installed Tailwind version.

Before editing tokens:
1. Inspect `package.json`, lockfile, and current CSS setup.
2. Confirm the Tailwind major version and consult its matching official documentation.
3. Check for existing tokens/fonts before adding anything.
4. Avoid duplicate definitions and arbitrary one-off values.

Maintain one source of truth for shared tokens. Use semantic names, not names tied to one component.

### Required token groups

| Group | Examples |
|---|---|
| Brand | `brand`, `brand-hover`, `brand-foreground` |
| Text | `text`, `text-muted`, `text-subtle`, `text-inverse` |
| Surfaces | `background`, `surface`, `surface-muted`, `surface-inverse` |
| Borders | `border`, `border-strong`, `border-focus` |
| Status | `success`, `warning`, `danger`, `info` and readable foregrounds |
| Typography | Primary font family and deliberate type scale |
| Spacing | Consistent spacing scale |
| Radius | Small, medium, large, pill |
| Shadows | Restrained elevation scale |
| Layout | Container widths and custom breakpoints only when needed |

### Token quality rules

- Extract the reference's font family and visible colors as accurately as possible. If exact values cannot be verified, label them estimates; do not pretend they are exact.
- Keep the palette small and coherent. Do not create a new color for every component.
- Maintain readable contrast; accessibility takes priority over reproducing low-contrast text exactly.
- Use a consistent spacing rhythm. Prefer Tailwind's standard scale unless a deliberate extension is justified.
- Keep radii and shadows restrained and reusable.
- Prefer default Tailwind breakpoints unless the design genuinely requires a documented custom breakpoint.
- Add only tokens that solve recurring needs.
- Do not use arbitrary Tailwind values or one-off inline styles for design values. Use the standard scale or add a reusable token and named utility for a recurring need.

## 4. Typography

- Use the reference font when identifiable or supplied.
- Define a clear hierarchy for hero/display headings, section headings, card headings, body text, labels, and captions.
- Keep font sizes, weights, line heights, and letter spacing consistent.
- Keep body text readable on mobile; do not shrink it simply to fit.
- Use a limited set of font weights and sizes.
- Load fonts through a reliable documented method; avoid unnecessary font families.

## 5. Layout and responsiveness

- Build mobile-first, then enhance for tablet and desktop.
- Use consistent content containers and page gutters.
- Use Grid for two-dimensional layouts and Flexbox for one-dimensional alignment.
- Prevent horizontal overflow, clipped controls, and narrow unreadable text.
- Preserve the reference's hierarchy while allowing sections to stack/reflow on smaller screens.
- Ensure touch targets are comfortable and controls do not depend on hover.
- Check narrow mobile, wider mobile, tablet, and desktop widths.
- Size/crop images deliberately and prevent layout shifts while they load.

## 6. Shared component standards

Create reusable components when a pattern repeats or has meaningful shared behaviour. Do not abstract one-off elements without a clear benefit.

Shared components should have consistent typography, spacing, sizing, radius, border treatment, focus/disabled states, icon alignment, and responsive behaviour.

### Buttons and links
- Distinguish primary, secondary, text, and destructive actions where needed.
- Use clear action labels.
- Provide hover, focus-visible, active, and disabled states.
- Use links for navigation and buttons for actions.
- Prefer semantic interactive elements.

### Forms and inputs
- Associate inputs with visible or programmatic labels.
- Use suitable input types and autocomplete.
- Provide focus, invalid, disabled, and helper-text states.
- Place clear validation messages near the relevant field.
- Prevent accidental duplicate submission while submitting.

### Cards and destination tiles
- Keep image ratios, text hierarchy, padding, and action placement consistent.
- Make clickable areas clear.
- Do not add borders or shadows automatically; follow the reference or the user's component-specific direction.

### Navigation, menus, dropdowns
- Support keyboard use and visible focus.
- Make open/close behaviour predictable.
- Mobile menus need a clear toggle and accessible expanded state.
- Never rely on hover alone.

### Modals and drawers
- Use only when focused attention is needed.
- Include a clear title, close control, and relevant actions.
- Support Escape where appropriate and keep keyboard focus usable.
- Prevent accidental interaction with background content.
- Ensure mobile layouts fit the viewport and are easy to dismiss.

### Toasts and feedback
- Keep messages concise and action-specific.
- Use suitable status semantics.
- Show success only when the action succeeds.
- Avoid repeated identical notifications.

## 7. Interaction states

Implement only the states relevant to a component: default, hover, focus-visible, active/selected, disabled, loading, success, error, and empty.

- Never communicate status through color alone.
- Use consistent status colors and clear text/icon cues.
- Do not show fake success, loading, or network states without a meaningful simulated operation.
- Make frontend simulations clear; never imply a real booking, payment, login, or network request occurred.

## 8. Accessibility and usability

- Use semantic HTML and a logical heading hierarchy.
- Make all interactive controls keyboard accessible.
- Provide visible focus indicators.
- Give meaningful images useful alt text; use empty alt text for decorative images.
- Maintain sufficient contrast and readable text sizes.
- Respect reduced-motion preferences.
- Do not rely on color, hover, or icons alone to communicate meaning.
- Provide accessible names and comfortable touch targets.

## 9. Motion

- Keep motion subtle, purposeful, and consistent.
- Use transitions to clarify state changes, not to decorate everything.
- Avoid excessive animation, parallax, or effects that harm performance/accessibility.
- Respect `prefers-reduced-motion`.
- Do not add an animation dependency if CSS or an existing package is sufficient.

## 10. Missing screens and UI patterns

When a screen, modal, toast, empty state, or interaction is not shown:

1. Follow the journey in `APP-FLOW.md`.
2. Reuse existing Traver components and interaction patterns.
3. Apply the tokens and component standards in this document.
4. Preserve the reference's visual identity and level of polish.
5. Choose the simplest accessible behaviour that completes the journey.
6. Record meaningful assumptions in `WORKING.md`.

Do not import another template's design system to fill a gap. Do not invent complex product rules. Ask the user when a missing decision materially affects the product or navigation.

## 11. Tailwind implementation

- Use syntax and utilities supported by the installed Tailwind version.
- Prefer semantic tokens and reusable patterns over repeated arbitrary values.
- Keep class lists readable and logically grouped: layout, sizing, spacing, typography, color, border/radius, effects, then responsive/state variants.
- Avoid conflicting or redundant utilities.
- Extract components when reuse, readability, or behaviour benefits—not merely to shorten class strings.
- Do not add class-merging or variant libraries unless needed and verified.
- Explain important/unfamiliar utility combinations: what they change and why they were selected.

## 12. Change control

- Do not change global tokens to solve a one-component issue unless the shared token is wrong.
- When changing a shared token, inspect its usages for unintended visual changes.
- Keep user-requested component exceptions local unless asked to make them global.
- Update this document only when a shared rule changes; do not record every one-off styling preference here.
