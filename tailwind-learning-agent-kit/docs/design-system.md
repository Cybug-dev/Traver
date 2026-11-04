# Project Design System

> This document is the visual source of truth for the project. Update it when a design decision is approved. Do not invent one-off styling values in individual screens.

## 1. Purpose and authority

The goal is a cohesive, responsive, accessible product—not a collection of screens that happen to look attractive individually.

Priority order when making UI decisions:

1. The rules and approved tokens in this document.
2. Existing project screens and reusable components.
3. A user-provided visual reference, adapted to this project's system.
4. A new pattern derived from the closest existing pattern and the rules below.

A reference is inspiration, not an instruction to copy its fonts, colors, spacing, component shapes, or effects. Do not mix unrelated design systems. When a new visual decision is necessary, propose it, get approval when it materially changes the system, and record it here.

## 2. Design principles

- **Consistent:** shared elements should look and behave the same across screens.
- **Clear hierarchy:** users should quickly see what matters, what they can do, and what happened after an action.
- **Responsive by default:** start with a usable narrow-screen layout, then enhance it for larger screens.
- **Accessible:** preserve readable contrast, keyboard access, visible focus, sensible labels, and usable touch targets.
- **Purposeful:** every color, border, shadow, animation, and decorative element must support hierarchy or usability.
- **Professional, not ornamental:** avoid visual noise, gratuitous gradients, excessive rounded cards, unnecessary glass effects, random blobs, and animations without a product reason.
- **Reusable, not repetitive:** use shared components for genuinely repeated patterns, but do not abstract a one-off element prematurely.

## 3. Design tokens

Use semantic tokens rather than scattering raw color codes and unrelated numeric values through components. Map these tokens into the installed Tailwind version using its supported configuration/theme approach. First inspect the actual Tailwind version and setup; do not assume Tailwind v3 or v4.

### 3.1 Color roles

The actual color values must be chosen from the approved project direction or a user-provided reference. Do not invent brand colors before that direction is established. Record the chosen values here and expose them through semantic names.

| Semantic token | Purpose |
|---|---|
| `background` | Main page background |
| `foreground` | Primary text on the main background |
| `surface` | Cards, panels, menus, and other raised surfaces |
| `surface-muted` | Subtle secondary surface or section background |
| `text-primary` | Main readable text |
| `text-secondary` | Supporting text and metadata |
| `text-inverse` | Text on a sufficiently dark or brand-colored surface |
| `primary` | Main brand/action color |
| `primary-hover` | Hover/active variation of the primary action |
| `secondary` | Secondary action or supporting accent |
| `border` | Default borders and dividers |
| `focus` | Visible keyboard focus indicator |
| `success` | Successful action or positive status |
| `warning` | Caution or attention status |
| `danger` | Destructive action, failure, or validation error |
| `info` | Informational status |

Rules:
- Use semantic roles in components; avoid raw hex values in JSX/class strings.
- Do not use color alone to communicate status. Pair it with text, an icon, or another cue.
- Keep text/background contrast readable in every state.
- Do not add a new accent color for an isolated component without a system-level reason.

### 3.2 Spacing scale

Use a consistent 4px-based rhythm. Prefer the matching standard Tailwind spacing utilities rather than arbitrary values.

| Token | Value | Typical use |
|---|---:|---|
| `space-1` | 4px | Tight icon/text gap |
| `space-2` | 8px | Compact control spacing |
| `space-3` | 12px | Small component padding/gap |
| `space-4` | 16px | Default component spacing |
| `space-5` | 20px | Comfortable internal spacing |
| `space-6` | 24px | Section or card spacing |
| `space-8` | 32px | Large component/section gap |
| `space-10` | 40px | Section separation |
| `space-12` | 48px | Large section spacing |
| `space-16` | 64px | Major layout separation |
| `space-20` | 80px | Large page section spacing |
| `space-24` | 96px | Exceptional large separation |

Use smaller or larger values only when the design genuinely needs them. Do not use slightly different values (for example, 15px, 17px, and 19px) for visually identical spacing.

### 3.3 Typography

Choose and record the approved font family or families before introducing custom fonts. Do not load a new font just because a reference uses it.

Maintain a clear type hierarchy using the installed Tailwind typography utilities or mapped project tokens:

- **Display:** rare, high-impact page-level messaging.
- **Heading 1:** main page title; one clear primary heading per page where practical.
- **Heading 2 / 3:** section and subsection headings.
- **Body:** primary reading text; prioritize legibility.
- **Body small:** supporting content and descriptions.
- **Label:** form labels, compact UI labels, and metadata.
- **Caption:** low-priority hints and timestamps; never make essential content too small.

Rules:
- Use a consistent scale; do not choose font sizes by eye on every component.
- Use weight, size, line height, and spacing together to establish hierarchy.
- Keep paragraph line lengths comfortable. Avoid long, dense text blocks where layout can improve readability.
- Do not use uppercase, letter spacing, or bold text as decoration everywhere.
- Avoid using low-contrast or tiny text for important information.

### 3.4 Radius, borders, and elevation

Use a small, consistent radius family. The exact approved values should be recorded after the visual direction is established.

- `radius-sm`: compact controls and small elements.
- `radius-md`: standard inputs, buttons, and modest containers.
- `radius-lg`: cards and larger surfaces when appropriate.
- `radius-xl`: only for prominent containers when the product direction supports it.
- `radius-full`: pills, circular avatars, and icon buttons where appropriate.

Use borders to define structure, not to outline every nested element. Use shadows sparingly to communicate elevation or overlay hierarchy. Do not give every card a shadow.

### 3.5 Layout and breakpoints

- Use the installed Tailwind version's standard responsive breakpoints unless the project has a documented reason to customize them.
- Use a mobile-first approach: unprefixed utilities define the narrow layout; breakpoint prefixes add or change behavior on wider screens.
- Establish consistent content widths, page gutters, section spacing, and alignment across related screens.
- Avoid horizontal overflow. Check long labels, navigation, tables, forms, and cards at narrow widths.
- Use grid or flexbox based on the layout problem; do not add positioning hacks to compensate for a poorly structured layout.
- Do not hard-code viewport-specific widths when a max-width, fluid width, grid, or responsive utility is more robust.

## 4. Tailwind implementation rules

- Tailwind utility classes are the default styling tool for components.
- Inspect the installed version and current theme/configuration before using version-specific setup or adding tokens.
- Prefer standard utilities and project tokens over arbitrary values such as `mt-[19px]` or `w-[437px]`.
- Keep class groups readable. For long class lists, format them across lines and group related utilities logically (layout, spacing, typography, color, border/effects, responsive/state variants).
- Explain unfamiliar utilities, responsive prefixes, and state variants to the user when they are introduced.
- Use conditional classes only when they reflect a real state or variant; avoid complex class logic that is harder to understand than the UI behavior.
- Use the project's established class composition approach if one exists. Do not add a class-merging dependency without a demonstrated problem.
- Use custom CSS only for cases where Tailwind utilities are unsuitable or the project's architecture calls for it. Document why the exception is needed.
- Avoid `@apply` for ordinary component styling; do not create a second styling system beside Tailwind.

## 5. Component consistency

Before creating a component, search for an existing equivalent. Reuse it when its behavior and purpose match; do not force reuse when the result would make the component confusing.

Shared patterns should define consistent:

- Structure and alignment.
- Typography and spacing.
- Color, border, radius, and elevation.
- Interactive states and feedback.
- Keyboard and screen-reader behavior.
- Responsive behavior.

Important patterns to standardize when they are introduced include buttons, links, inputs, selects, checkboxes, radio controls, cards, navigation, dialogs/modals, dropdowns, tooltips, toasts/notifications, tables, tabs, badges, and pagination. Do not generate all of these in advance; add them when the product needs them.

## 6. Interaction and feedback states

For each interactive component, identify the states relevant to its behavior and design them consistently:

- Default / idle.
- Hover (pointer devices).
- Keyboard focus, preferably with a clearly visible `focus-visible` treatment.
- Pressed / active.
- Disabled, with a clear reason where needed.
- Loading or submitting.
- Success confirmation.
- Validation or action error.
- Empty state where a collection or result can be empty.
- Offline/network-failure state where the action depends on connectivity.

Also consider skeleton/loading placeholders when content structure is known and loading is long enough to justify them. Do not show a skeleton and spinner together without a clear reason. Do not fabricate success, data, or backend behavior.

A user action must have a clear and truthful outcome. For example, submitting a form should visibly indicate progress, success, or a useful error. A destructive action should be clear and appropriately guarded. Toasts should be brief and should not be the only way essential information is communicated.

## 7. Responsive behavior

- Design the smallest supported screen first, then enhance the layout for larger screens.
- Use breakpoints to respond to actual content/layout needs, not to patch arbitrary visual issues.
- Navigation must remain understandable and usable on mobile and desktop.
- Forms must remain readable, correctly spaced, and operable on touch screens.
- Images must retain intentional cropping and proportions; avoid distortion.
- Check long text, empty states, error messages, and loading states at narrow widths—not just the ideal populated desktop view.

## 8. Accessibility and motion

- Prefer semantic HTML elements and native controls when they fit the interaction.
- Ensure interactive elements are keyboard accessible and have visible focus.
- Give form controls accessible names and associate errors/help text with the relevant control.
- Use appropriate labels, alt text, and accessible names for icon-only controls.
- Maintain adequate contrast and do not use color as the only status indicator.
- Respect `prefers-reduced-motion`; motion must not be required to understand or operate the interface.
- Keep transitions purposeful and restrained. Avoid animation that delays interaction or distracts from content.

## 9. Icons and imagery

- Use one consistent icon family/style throughout the product.
- Do not mix emoji, unrelated icon packs, and decorative symbols as interface icons unless the product explicitly calls for it.
- Icons must have a clear purpose. Icon-only controls need an accessible name and a usable hit area.
- Use imagery that supports the product's content and visual direction. Preserve aspect ratios and use deliberate cropping.
- Do not add random stock imagery, decorative illustrations, or large visual effects just to fill space.

## 10. Before adding or changing a design rule

The agent must:

1. Identify which existing rule or token is insufficient.
2. Explain the proposed change and which screens/components it affects.
3. State the practical benefit and any consistency trade-off.
4. Get user approval for a material system change.
5. Update this document and the relevant shared token/component implementation.
6. Check affected screens for inconsistency or regressions.

## 11. Approved project decisions

Record confirmed choices here as they are made. Do not fill this section with guesses.

| Area | Approved decision | Reason / reference | Date |
|---|---|---|---|
| Brand direction | Pending | Awaiting project direction/reference | — |
| Color palette | Pending | Awaiting project direction/reference | — |
| Font family | Pending | Awaiting project direction/reference | — |
| Tailwind version and token setup | Pending | Confirm from repository before implementation | — |
| Radius and elevation values | Pending | Establish after reviewing the visual direction | — |
| Breakpoint overrides | None approved | Use installed Tailwind defaults unless a need is demonstrated | — |
