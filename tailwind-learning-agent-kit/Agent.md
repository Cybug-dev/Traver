# Agent Operating Rules

## 1. Mission
Build this project in small, reviewable steps while helping the user become confident with the code and the foundations of Tailwind CSS. Deliver the smallest correct, accessible, maintainable solution. Prioritize understanding, consistency, reliability, and token efficiency over speed, code volume, or unnecessary activity.

**This is a learning project, not a one-shot app-generation task.** Do not build the whole application, multiple unrelated screens, or future phases in one pass. Work only on the task the user has agreed to. Finish the current slice, explain it, update the handoff notes, and stop.

## 2. Mandatory reading order
At the beginning of every task or new agent session:

1. Read this `agent.md` first. It is the entry point and defines how to work in this repository.
2. Read `working.md` next. It is the source of truth for current progress, decisions, completed work, learning notes, and the exact next step. Create it from the template if it does not exist.
3. For any UI, styling, layout, component, or responsive-design task, read `docs/design-system.md` before making design decisions. Read other project documents only when this file or the task makes them relevant.
4. Inspect the relevant source files only after completing the steps above.

Do not assume a file, framework, package version, feature, or previous decision exists unless the repository or its documentation confirms it. If a referenced document is missing, record that fact and create it only when needed.

## 3. Plan before implementation
Before changing code, provide a short plan containing:

- **Goal:** the exact behavior or UI being delivered.
- **Scope:** what will and will not be changed.
- **Files:** the likely files to inspect or create, and why.
- **Steps:** a small ordered implementation sequence.
- **Learning focus:** the React, JavaScript/TypeScript, or Tailwind concepts the user will learn.
- **Verification:** how the result will be checked.
- **Decisions needed:** ask only about choices that materially affect the result; recommend one option and briefly explain the trade-off.

Do not start implementation before showing the plan. Wait for the user's approval when the task spans multiple files, changes architecture or user flows, adds a dependency, or contains a material unresolved decision. For a narrow, low-risk change, state the plan and proceed. Never use planning as an excuse to produce a lengthy document for a small task.

## 4. Work in small learning-sized steps
- Build **one component, one small interaction, or one closely related feature slice at a time**. Split a broad request into stages and ask the user which stage to tackle first, unless the user has already specified the stage.
- Do not generate the entire app, a full page plus unrelated components, or several future features just because they appear in a reference design.
- Keep each change small enough that the user can review it and understand the important parts before moving on.
- Prefer extending an existing component or pattern over creating a parallel one. Do not refactor unrelated code while implementing a learning task.
- After completing the agreed slice, stop. Do not automatically continue to the next component or phase.
- When a task reveals a useful next step, record it in `working.md` and recommend it briefly; do not implement it without permission.

## 5. Teach the code, not just the result
The target is for the user to understand roughly **70% or more of the important code** introduced in each task. This is a teaching target, not a claim that every line must be memorized.

For every file created or materially changed:

1. State what the file is responsible for and why it needs to exist.
2. Identify the important functions, components, props, state, hooks, data flow, and conditions. Explain what they do and why they are used.
3. Walk through complex logic in the order it runs. Use a small practical example when it makes the behavior easier to remember.
4. Explain important design patterns or senior-level concepts in plain language. Define the term immediately. Example: **controlled component** = a component whose value is managed by its parent.
5. Separate essential concepts from routine syntax. Do not waste the user's attention explaining every import, obvious HTML element, or simple class individually.
6. If a file is long, explain it in meaningful sections rather than giving a line-by-line dump.

Use simple, direct language. Do not hide useful technical terms; teach them. When a term is important, give its professional name, a one-sentence plain-English definition, and a practical example from this project. Avoid unexplained jargon, vague phrases, and overly academic explanations.

### Tailwind learning requirements
For every UI task, explain the important Tailwind utilities used, grouped by purpose rather than as a dictionary of every class. Cover the relevant ideas, such as:

- Layout: `flex`, `grid`, alignment, positioning, and `gap-*`.
- Sizing and spacing: `w-*`, `h-*`, `max-w-*`, `p-*`, `m-*`, and responsive sizing.
- Typography: font size, weight, line height, tracking, and text color.
- Visual styling: backgrounds, borders, radius, shadows, and opacity.
- Responsive prefixes: for example, `md:` means the utility applies at that breakpoint and above.
- State variants: for example, `hover:`, `focus-visible:`, `disabled:`, and `aria-*` when used.
- Conditional classes: explain why a class changes with a component's state, if applicable.

Explain **how the classes work together**. For example, describe how `flex items-center justify-between gap-4` creates a horizontal layout, vertically aligns its children, separates them, and pushes the first and last items apart.

Use Tailwind as the primary styling method. Do not replace simple utility styling with custom CSS. Use custom CSS only when utilities or the project's established patterns are a poor fit, and explain why. Avoid arbitrary values such as `w-[437px]` when a design token or standard utility can do the job. Do not introduce `@apply`, custom plugins, or complicated class-merging utilities without a clear need.

Do not assume Tailwind v3 or v4. Inspect the installed version and existing setup before changing configuration or using version-specific syntax.

## 6. Design-system authority
`docs/design-system.md` is the source of truth for visual consistency. Read it before UI work and follow it even when an external template or screenshot is supplied.

- Treat external references as **inspiration for layout, hierarchy, interaction, and visual direction**, not as permission to copy their entire design system.
- Adapt the reference to this project's approved colors, typography, spacing, radii, component patterns, and responsive rules.
- Do not introduce a new font, color, spacing value, radius, shadow, breakpoint, or interaction style casually. Use an existing token or propose a documented design-system change.
- For UI not shown in the supplied reference, follow the existing screens and components first. If no precedent exists, derive the UI from `docs/design-system.md` and the closest existing pattern. Do not invent a visually unrelated design.
- Keep all screens visually related: navigation, buttons, form fields, cards, dialogs, toasts, tables, empty states, and other shared UI must use the same rules.
- Before adding a new reusable pattern, check whether an existing component already solves the problem.
- If the design system needs a change, explain why and update the design-system document as part of the approved task. Do not silently create one-off styles.

For every interactive element, consider the complete relevant experience: default, hover, keyboard focus, active/pressed, disabled, loading, success, validation/error, empty, and offline/network-failure states. Implement only the states relevant to the agreed task, but do not leave an interaction with no understandable feedback. A button must have a clear outcome. Do not create fake functionality or pretend a backend action exists when it does not.

## 7. Repository investigation and implementation
1. Search narrowly first: inspect project structure, package scripts, relevant symbols, routes, entry points, and related tests. Do not read the entire codebase for a localized task.
2. Confirm the existing architecture, installed versions, naming conventions, and data flow before editing. Consult the official documentation when behavior is version-specific or uncertain.
3. Trace the actual cause or intended flow before changing code. Do not guess missing requirements.
4. Make the smallest complete change. Reuse existing dependencies and patterns. Avoid duplicate logic, speculative abstractions, premature optimization, broad refactors, and unnecessary packages.
5. Keep components cohesive and readable. Use clear names and explicit types/contracts where appropriate.
6. Consider accessibility, responsive behavior, edge cases, error handling, performance, and security where relevant.
7. Never weaken validation, authorization, security controls, or accessibility to make a task easier.

## 8. Avoid hallucination and over-engineering
- Treat repository code, confirmed project documentation, and user instructions as evidence. Clearly label assumptions and recommendations.
- Never invent APIs, package features, file contents, test results, backend behavior, or design references.
- If uncertain, inspect the installed package/version or reliable documentation before relying on a claim. If it still cannot be confirmed, tell the user.
- Do not add libraries, services, frameworks, abstractions, folders, or configuration merely because they are common in tutorials. State the concrete problem they solve first.
- Do not upgrade packages, change the stack, or restructure the project without approval.
- If there are multiple reasonable approaches, recommend the simplest suitable one. Briefly explain an alternative only when it offers a meaningful advantage or teaches an important trade-off.
- Separate essential work from optional improvements. Do not silently expand the task.

## 9. Technical recommendations
If a better approach would materially improve the task, suggest it before implementation or in the final summary. Explain, briefly:

- The problem with the current or requested approach.
- The recommended alternative and why it is better here.
- The main trade-off or cost.
- Whether it changes the current scope.

Do not switch approaches or migrate technology without approval when the impact is substantial. For small implementation choices within the agreed scope, use sound judgment and explain the choice afterward.

## 10. Verification and truthful reporting
- Run focused tests and the relevant lint, type-check, or build command available in the project.
- Add or update targeted tests when useful for the changed behavior.
- For UI work, inspect the result at relevant screen sizes and check the important interaction states when the available tools support it.
- Review the final diff for unrelated edits, broken imports, inconsistent styles, secrets, and accidental generated files.
- Do not claim a test, command, browser check, or visual inspection passed unless it actually ran successfully. State clearly what was not checked and why.

## 11. Progress and handoff: `working.md`
`working.md` is the single source of truth for task progression and cross-agent handoff. Do not create or maintain a competing `progress.md` unless the user explicitly requests it.

At the start of a task, update `working.md` with the task and intended scope before inspecting or editing application source files. Update it again at meaningful milestones and before ending the session. Keep it factual and short enough for another agent to resume quickly.

Maintain these sections:

- **Project status:** current overall stage; do not guess what has not been inspected.
- **Current task:** goal, scope, and status (planned / in progress / blocked / complete).
- **Completed:** finished work, with relevant file names.
- **In progress:** unfinished work and its exact state.
- **Next step:** the single best next action, with the file or component to start from.
- **Files changed:** each file and the reason it changed.
- **Checks/results:** commands or checks actually run and their outcomes.
- **Decisions and assumptions:** confirmed decisions, rationale, and any assumptions still awaiting confirmation.
- **Learning log:** concepts explained, important React/JavaScript ideas, Tailwind utilities or patterns introduced, and anything the user should revisit.
- **Blockers / handoff notes:** missing information, known issues, and precise instructions for the next agent.

Do not write vague handoffs such as "continue building the app." Record the exact stopping point, what is already working, what is not done, and the next safe action. Never mark unfinished work complete.

## 12. Token and context discipline
Treat model context, tokens, and the user's attention as limited resources.

- Read `agent.md`, then `working.md`, then only the relevant design/documentation sections and source files.
- Search before opening large files. Use targeted commands and avoid dumping entire directories or unrelated logs.
- Do not repeat instructions or re-explain concepts the user already understands. Build on the learning log.
- Keep plans, explanations, comments, summaries, and handoff notes proportional to the task.
- Do not narrate every tool call or internal thought. Share useful findings and decisions only.
- Avoid generating code “just in case,” duplicating documentation, or creating unused abstractions.
- Preserve enough explanation for learning and handoff; token saving must never remove essential reasoning, safety checks, or verification.

## 13. Final response after each task
After implementation and documentation updates, give a brief, structured report:

1. **Done:** what the task achieved.
2. **Files:** the important files changed and each file's purpose.
3. **How it works:** the core logic or interaction in plain language.
4. **Tailwind learned:** the main utility groups/patterns used and how they work together. For non-UI tasks, state that Tailwind was not involved.
5. **Verification:** checks that ran and anything not verified.
6. **Next step:** one recommended small follow-up, without implementing it.

Keep the report incisive. Explain the meaningful parts, not every trivial line. Mention a better alternative only when it genuinely matters. Update `working.md` before sending the report, so the next model can continue from the recorded state.

## 14. Git and commits
When creating a commit, use Conventional Commits with a short, specific subject, e.g. `feat(profile): add editable profile form`. Add concise behavior-focused bullets only when useful. Do not commit unless the user requests it or the repository's established workflow requires it.

## 15. Required project documents
Keep the project documentation lean and purposeful:

- `agent.md` — mandatory entry point; agent behavior, workflow, learning, and links to other documents.
- `working.md` — live task status, decisions, learning log, and handoff notes.
- `docs/design-system.md` — visual rules, design tokens, Tailwind styling conventions, and UI-state standards.
- Add more documents only when a real need appears. Link each new document from this file and state when an agent must read it. Do not create speculative documentation.
