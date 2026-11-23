# Traver — App Flow

> Purpose: Give every AI agent the product and interaction context needed to build consistently without making the user re-explain the project.
> Project type: Frontend-focused travel discovery website and Tailwind CSS learning project. Use mock data and simulated interactions for now.

## 1. Product overview

Traver is a travel discovery website that helps people explore holiday destinations and move toward planning or booking a trip.

The supplied screenshot is the visual and structural reference for the landing page. It is not a complete product specification. Do not assume that every possible travel feature has already been defined.

## 2. Current scope

Build the reference landing page incrementally, in this order:

1. Header / navigation
2. Hero introduction and destination-search panel
3. About / recommendation section
4. Features / benefits
5. Destination discovery and cards
6. Customer testimonial
7. Promotional call-to-action
8. Footer

Implement only the component or section requested in the current task. Do not build the whole page at once.

### Project boundaries

- Frontend only for now; use realistic local mock data where needed.
- Use React state to simulate appropriate interactions.
- No backend, database, real authentication, payments, flight inventory, or real booking integration unless the user explicitly requests it.
- Never imply that a simulated booking, payment, account action, or search is a real transaction.
- Do not invent complex travel business rules. If behaviour is unspecified, choose the simplest sensible simulation and explain the assumption.
- Keep the code easy to extend later, but do not build backend abstractions prematurely.

## 3. User journeys

These journeys describe intended direction, not a request to implement every screen immediately.

### A. Discover destinations
`Homepage → Destination cards/search → Destination details (future screen)`

- Users browse featured destinations.
- Search/filter controls may initially use local mock data.
- Selecting a destination can open a detail view when that screen is requested.
- Do not invent extensive destination data or booking rules.

### B. Plan a trip
`Homepage search panel → Enter preferences → Search results (future screen)`

The reference suggests:
- Hero search: location and travel date.
- Destination search panel: location, person/guest count, check-in and check-out dates.

The two panels may be separate visual treatments. Do not force them into one complicated booking engine. For the landing-page task, reproduce the visible controls and provide only the requested simple interaction. Ask if field meaning or behaviour is genuinely unclear.

### C. Booking simulation — future scope
`Destination details → Choose trip options → Review → Confirmation`

Do not implement until requested. Make the simulated nature clear.

### D. Authentication simulation — future scope
`Login / sign up → Simulated signed-in state`

Do not collect or transmit real credentials. Build only when requested.

### E. Navigation
- Header links should lead to the relevant page or landing-page section.
- Use appropriate anchors or smooth scrolling for sections on the same page.
- Do not create dead links or pretend unfinished pages exist. Use an agreed placeholder or ask the user.
- Mobile navigation must open and close, support keyboard use, and expose its expanded state accessibly.

## 4. Interaction states

Consider the states relevant to each control: default, hover, keyboard focus, active/selected, disabled, loading, empty, validation error, and success.

Examples:
- Search: idle, matching results, no results, clear/reset.
- Form: untouched, focused, invalid, submitting, successful.
- Modal/drawer: closed, open, dismissible.
- Toast: meaningful success or error feedback.
- Mobile menu: closed, open, closed after navigation.

Do not add fake loading or network-error states without a real interaction reason.

## 5. Missing screens and unspecified behaviour

When a screen or interaction is not shown:

1. Check this file for the intended journey and project scope.
2. Check `docs/DESIGN-SYSTEM-1.md` for visual and interaction rules.
3. Inspect existing screens and components for established patterns.
4. Reuse those patterns and the existing Traver visual language.
5. Choose the simplest sensible behaviour consistent with the product.
6. Record meaningful assumptions in `working.md`.

Do not copy an unrelated template or invent a new visual direction. Ask the user if an assumption materially changes product behaviour, data, or navigation.

## 6. Required WHAT / HOW / WHY learning approach

For each task, explain briefly before implementation:

- WHAT: the component or behaviour being built.
- HOW: how it should look, respond to interaction, and be implemented.
- WHY: why this approach is appropriate, including relevant Tailwind, CSS, React, accessibility, or design principles.

After implementation, explain the important code and Tailwind utility groups in changed files using plain language and practical examples. Focus on core logic, non-obvious patterns, and useful concepts; do not lecture on every obvious line.

## 7. First task: responsive navbar

Before implementation:
- Read `docs/AGENTS.md`, this file, `docs/DESIGN-SYSTEM-1.md`, and `working.md`.
- Inspect the repository and existing conventions.
- Confirm the installed Tailwind version and use its matching documentation/syntax.
- Inspect the supplied Traver reference.
- Present a small plan before coding.
- Limit the task to the navbar; do not start other homepage sections.
