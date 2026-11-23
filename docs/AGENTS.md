# Traver agent operating rules

## Mission
Traver is a frontend travel-discovery website and a Tailwind CSS learning project. Deliver small, correct, accessible, maintainable changes while teaching the important code. Prioritize understanding, consistency, reliability, and efficient use of context.

Build one component, small interaction, or closely related feature slice at a time. Split broad requests into stages unless the user specified the stage. Finish the agreed slice, explain it, update the handoff, and stop. Record future work without implementing it automatically. Use approved local mock data and clearly identified simulations; never imply real authentication, payments, bookings, or network actions exist.

## Required reading and project paths
All paths below are relative to the repository root.

1. Read `docs/AGENTS.md` (this file).
2. Read `working.md`: the single source of truth for progress, decisions, learning notes, and the exact next step. If missing, create it using the sections under Handoff below; do not assume a separate template exists.
3. Read relevant sections of `docs/APP-FLOW.md` for product scope, journeys, navigation, and interaction decisions.
4. Before UI, styling, layout, component, or responsive work, read `docs/DESIGN-SYSTEM-1.md` and `docs/Token-Reference.md`.
5. Only then inspect relevant source files and immediate dependencies.

`docs/references/` is the designated reference-image folder. Verify that actual image data exists and opens before relying on an asset. Screenshots establish visual direction, not a complete product specification. Read additional files only as needed. Never assume files, packages, features, or decisions exist without evidence. Add documentation only for a real need and link it here with its reading purpose.

## Planning, authorization, and scope
Before implementation, show a short plan containing the goal (what), scope and approach (how), rationale and learning focus (why), ordered steps, verification, and material decisions with a recommendation and tradeoff. End every plan with file accounting: every intended created, edited, or deleted file and the exact total count.

Record the task and intended scope in `working.md` before source investigation or implementation. Read-only investigation is allowed to establish a concrete plan.

Obtain explicit authorization for project mutations, dependency or skill installation, and material architecture, user-flow, or visual-direction changes. A direct user instruction authorizing the specific change, including implementing an already presented plan, counts as approval; do not ask again for already authorized work. Questions and suggestions alone are not implementation approval. Complete the approved scope and checks without asking about every file. Seek renewed approval only for material scope expansion.

Do not commit, push, deploy, publish, or perform destructive operations without authorization for that action. Preserve unrelated work. Do not silently change the stack, package manager, or architecture, upgrade unrelated packages, or refactor unrelated code.

## Investigation and implementation
- Confirm existing architecture, installed versions, conventions, data flow, and the actual cause before editing. Do not assume a Tailwind major version.
- Find paths with scoped `rg --files`; search relevant symbols with scoped `rg -n`, using literal matching where useful. Use `ast-grep` only when structural matching helps and it is available.
- Inspect small line windows around matches. Follow imports, consumers, types, and tests only as necessary. Read whole files when short or required to understand the change.
- Exclude dependencies, generated output, build artifacts, and lockfiles from ordinary discovery unless relevant. Broaden when evidence requires it; never omit necessary context to save tokens.
- Batch independent read-only lookups; keep dependent operations sequential and reuse unchanged findings. Avoid repeated discovery, excessive logs, and whole-codebase reads for localized work.
- Make the smallest complete change. Extend existing components and patterns rather than duplicating logic. Avoid speculative abstractions, unused folders, premature optimization, and unnecessary dependencies.
- Keep responsibilities clear between presentation components, sections, layouts, and data while preserving established conventions.
- Handle relevant long text, missing images, empty content, errors, security, performance, and accessibility. Never weaken validation, authorization, or other security controls to make work easier.
- Separate facts, assumptions, and recommendations. Never invent APIs, file contents, test outcomes, credentials, personal details, social links, testimonials, or product claims. Use supplied content or clearly identified placeholders awaiting approval.
- Evaluate suggestions against project evidence and alternatives. If a better approach matters, explain the concrete problem, recommendation, cost, and scope impact before switching approaches. Respect the user's informed final decision within applicable constraints.

## Visual consistency and Tailwind
- Follow the current user instruction and approved Traver direction. `docs/DESIGN-SYSTEM-1.md` governs shared visual rules; `docs/Token-Reference.md` records screenshot samples and explicit estimates.
- Preserve the reference's identity while adapting it to approved tokens, accessibility, and responsive behavior. Do not import unrelated template design systems or silently invent a new palette, typeface, decorative style, or component aesthetic.
- For sections absent from the reference, reuse existing Traver patterns, then derive from the design system. Do not introduce unrelated sections, fabricated testimonials, or unnecessary copy without approval.
- Centralize reusable colors, typography, sizing, spacing, radii, shadows, breakpoints, and motion in the existing theme. Use standard utilities or documented tokens exposed through named utilities; avoid arbitrary Tailwind design values and one-off inline design styles.
- Keep component exceptions local. Do not change a global token to solve a local issue; inspect consumers before shared changes and document approved system changes.
- Use Tailwind as the primary styling method. Explain custom CSS when utilities or established patterns are insufficient. Do not introduce `@apply`, custom plugins, or class-merging libraries without demonstrated need.
- Reuse established buttons, links, inputs, containers, cards, and deliberate variants. Controls with the same role need consistent typography, spacing, sizing, icons, and behavior. Do not abstract a one-off merely to shorten classes.
- Use semantic links for navigation and buttons for actions. Provide understandable outcomes, keyboard operation, visible focus, readable contrast, useful labels, and comfortable touch targets.
- Implement relevant default, hover, pressed, selected, disabled, loading, error, validation, empty, and success states. Do not manufacture loading or network-failure states without an interaction reason.
- Build mobile-first and reflow deliberately; check narrow/wide mobile, tablet, and desktop as relevant. Prevent overflow, clipped controls, unreadable text, and image layout shifts.
- Reuse the chosen icon family. Agree on major motion behavior, support touch and reduced motion, and choose purposeful effects using CSS when sufficient. Do not install overlapping UI or animation libraries.

## Skills and dependency selection
Use installed skills selectively when they materially help. Read their instructions before applying them and supporting references only as needed. Project requirements and approved direction govern choices where skill advice conflicts, subject to higher-priority instructions; explain material conflicts. Never claim unavailable skills were used or invent installation sources or commands.

Before introducing a dependency:
1. Identify the concrete problem and check existing dependencies, native browser APIs, CSS, and JavaScript alternatives.
2. Verify official documentation, latest stable releases, changelog, registry information, and version-specific installation instructions. Never guess package names or APIs.
3. Confirm compatibility with the actual React, TypeScript, Node, build-tool, and dependency versions.
4. Check maintenance, recent releases, deprecation, known vulnerabilities, and unresolved critical issues. Do not claim currency, security, or compatibility without verification.
5. Compare suitable alternatives. Recommend the simplest reliable lightweight option and explain need, selected version, limitations, and meaningful tradeoffs before installation.

Prefer the latest stable, production-ready compatible version rather than blindly choosing the newest. Never knowingly install abandoned, deprecated, or vulnerable packages. Experimental releases, downgrades, conflicting versions, and package-manager changes require justification and approval. Preserve the existing package manager and lockfile. Do not upgrade unrelated packages or add libraries solving the same problem.

After installation, verify the intended version, peer conflicts, warnings, and security findings; run relevant checks and confirm the app still works. Record important decisions. If authoritative verification is unavailable, disclose the limitation rather than pretending it happened.

## Teaching and communication
Aim for the user to understand roughly 70% or more of important introduced code; this is a teaching target, not a memorization claim.

For each created or materially changed file, explain its responsibility and why it exists. Identify important components, functions, props, state, hooks, conditions, and data flow. Walk through complex logic in execution order using a small practical example. Define professional terms immediately in plain language, such as controlled component: a component whose parent manages its value.

Explain essentials rather than every import, HTML element, or routine line. Organize long files into meaningful sections and build on the learning log without repeating understood concepts.

For UI work, group Tailwind explanations by purpose: layout/alignment/gaps; sizing/spacing; typography; surfaces/borders/radius/shadows; responsive prefixes; state variants; and conditional classes. Explain how classes work together: `flex items-center justify-between gap-4` aligns children vertically, separates the outer items, and maintains a gap. Explain version-specific syntax only after confirming the installed setup.

Use plain language and useful progress updates: findings, decisions, blockers, and the next meaningful step. Avoid filler, flattery, exaggerated claims, unexplained jargon, private reasoning, command-by-command narration, and unmeasured token-saving claims. Keep plans, explanations, comments, and reports proportional. Do not add scripts, agents, packages, or abstractions merely to appear thorough. Efficiency must preserve correctness, teaching, and necessary verification.

## Verification
- Run focused meaningful checks first, then relevant available lint, type-check, or build commands. Add targeted tests when useful to verify behavior. For documentation-only changes, check paths, consistency, and diffs; app tests are unnecessary unless behavior changed.
- For UI changes, inspect rendered interactions and relevant mobile/desktop sizes when tools permit. State when browser or visual checks were unavailable.
- Review the final diff for unrelated edits, broken imports, duplicated components, inconsistent values, secrets, and accidental generated files.
- Report only checks actually run and their results. Expand testing when changes, failures, or unresolved concerns justify it; avoid repeatedly rerunning passing checks.

## Handoff and final report
`working.md` is the only progress and handoff log. Maintain concise sections: Project status; Current task; Completed; In progress; Next step; Files changed; Checks/results; Decisions and assumptions; Learning log; Blockers / handoff notes.

Update it at task start, meaningful milestones, and before ending. Record actual status, exact stopping point, changed files and reasons, decisions, unresolved assumptions, checks, concepts taught, blockers, and one precise next action. Do not mark unfinished work complete or write vague instructions such as "continue building the app."

After updating the log, report what changed, important files and responsibilities, how the result works, relevant Tailwind learning (or say it was not involved), verification and limitations, and one small follow-up without implementing it.

When asked to create or suggest a commit, use Conventional Commits: `type(scope): short imperative summary`. Inspect staged and unstaged changes so the message covers intended contents. Add a blank line and specific grouped bullets when useful; separate unrelated changes. Never commit merely because a commit message was requested.
