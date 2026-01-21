---
title: Spec-Driven Development
description: Using specifications as executable contracts that drive AI agent implementation
sidebar:
  order: 7
---

You've watched it happen: you ask an AI agent to "add photo sharing to the app" and it builds something. The code compiles. Tests pass. But the architecture doesn't match what you'd choose. The data model makes assumptions you'd never make. And now you're three days into a feature that needs a rewrite.

This is the vibe coding trap. The agent isn't broken—it's doing exactly what you asked. The problem is you asked for code when you should have asked for clarity first.

Spec-Driven Development (SDD) flips the script. Instead of jumping straight to implementation, you define what you want in a specification that becomes the source of truth. The spec isn't documentation written after the fact—it's an executable contract that determines what gets built.

## The problem with code-first

When you prompt an AI agent without clear specifications, you're asking it to read your mind. And language models are exceptional at pattern completion, not mind reading.

**What happens with vague prompts:**

- The agent makes reasonable assumptions—some will be wrong.
- Requirements emerge incrementally, locking you into early decisions.
- The codebase becomes the de-facto specification.
- Crucial decisions get trapped in Slack threads or people's heads.
- Major rewrites require enormous effort because code is inherently binding.

You discover issues deep into implementation when they're expensive to fix. The agent built what you said, not what you meant.

## What SDD actually is

Let's be clear about what SDD isn't:

- **Not waterfall planning**: You're not writing exhaustive documentation before touching code.
- **Not bureaucracy**: This shouldn't slow you down; it should prevent expensive rework.
- **Not predicting the future**: You're capturing current understanding, which evolves.

SDD is making technical decisions explicit, reviewable, and evolvable. It's version control for your thinking.

**The core insight:** Specifications become living documents that evolve alongside code. They're active tools that help you think through edge cases, coordinate across teams, and enable multi-variant implementations.

When your spec turns into working code automatically, intent becomes the source of truth—not the code itself.

## The SDD workflow

SDD breaks development into distinct phases. Each phase has a specific purpose and produces artifacts that feed the next phase.

### Phase 0: Constitution (optional but recommended)

Before any iteration begins, establish the rules of the game. What are your non-negotiable principles?

**What goes in a constitution:**

- Testing approaches and standards
- Security policies and compliance rules
- Design system constraints
- Tech stack conventions (CLI-first, API-first, etc.)
- Engineering practices
- Integration requirements

This becomes the guardrails that guide all development. The agent knows what's off-limits before it writes a single line of code.

### Phase 1: Specify

Define the "what" and "why": the problem, users, scope, and success criteria.

**Focus on:**

- Problem statement
- User personas and cohorts
- Key user flows and experiences
- Success metrics
- Constraints (performance, privacy, security)
- What's explicitly out of scope

**Avoid:** Technical implementation details, stack choices, architecture (that comes later).

**Example specification prompt:**

```
Build a trip planner that generates day-by-day itineraries for multi-city trips.

Problem: help travelers plan multi-city trips with realistic timing, budget guidance
Users: casual travelers, travel bloggers, small tour operators
Key flows: create trips, add cities, auto-generate itinerary, adjust by preferences
Non-functional: P95 itinerary generation under 4 seconds for 7-day trips
Out of scope: airline booking, hotel payments
```

The output is a structured `SPEC.md` that captures requirements. The agent may flag `[NEEDS CLARIFICATION]` sections—resolve these before proceeding.

### Phase 2: Plan

Translate the product spec into technical implementation. Now you're defining the "how".

**Focus on:**

- Tech stack selection
- Architecture and design patterns
- Integration boundaries
- Data contracts and schemas
- Performance targets
- Security approach
- Identified risks

**Example planning prompt:**

```
Stack: FastAPI + Postgres + Redis; Next.js front end; mobile via Expo.
Architecture: API-first, backend service + vector store for place of interest (POI) embeddings.
AI: routing agent for POIs, scheduler for packing days, critic for validation.
Performance: target end-to-end plan in under 4 seconds at P95.
Security: redact PII in logs, encrypt at rest.
```

The output is a `PLAN.md` with technical architecture. A key benefit: you can generate multiple plan variations to compare different approaches before committing.

### Phase 3: Tasks

Break the spec and plan into manageable, testable, ordered work items.

**Each task includes:**

- Clear description
- Acceptance criteria
- Dependencies
- Links to spec sections
- Test requirements

**Example task breakdown:**

- API contract for itinerary generation with schemas
- Agent prompts and guardrails
- Data loaders for POI metadata
- Caching and rate-limit handling
- Frontend flows: create trip, edit preferences, view itinerary
- Observability: timing spans, cost tracking, error taxonomies

By default, test-related items are included and ordered before implementation—TDD structure baked in.

### Phase 4: Implement

Execute tasks in small slices while staying within constraints.

**Key practice:** Keep agents pointing back to `SPEC.md` and `PLAN.md` for every change. Work from the spec, plan, or task file rather than ad-hoc prompts. Execute in small, reviewable chunks.

**Example implementation slice:**

- Implement POST /itinerary with schema validation
- Add scheduler agent prompt respecting constraints
- Cache lookups and transit matrices
- Verify against acceptance criteria

Each chunk should solve a specific piece of the puzzle.

### Phase 5: Testing

Testing isn't a separate phase—it's integrated throughout. Tests attach directly to requirements for traceability.

**Types of tests:**

- **Contract tests:** API request/response validation
- **Property tests:** Constraint verification (e.g., no day exceeds 10km walking)
- **Performance tests:** P95 latency under target
- **Security tests:** PII redaction, encryption verification

The trace from "what was promised" to "what was delivered" becomes auditable.

### Phase 6: Maintain

Requirements change. SDD handles this gracefully:

1. Update spec first
2. Regenerate plan
3. Update tasks
4. Let agents refactor within boundaries
5. Extend tests for new rules
6. Keep changelog of spec revisions

**Example change request:**

```
Add "family mode" that favors kid-friendly POIs and shorter walking segments.

Process:
- Update SPEC.md constraints
- Re-run planning
- Regenerate affected tasks
- Adjust prompts
- Extend tests for new rules
- Document why trade-offs were made
```

Human review is essential before accepting regenerated plans.

## GitHub Spec Kit

GitHub's [Spec Kit](https://github.com/github/spec-kit) is an open-source toolkit that operationalizes SDD across multiple AI coding agents.

### What it provides

- **Specify CLI:** Python-based tool that bootstraps projects for SDD
- **Templates:** Structured formats for specs, plans, tasks, and constitution
- **Slash commands:** AI agent prompts for structured development workflow
- **Helper scripts:** Automation for maintaining SDD scaffolding

### Installation

```bash
# Persistent installation (recommended)
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git

# Initialize project
specify init <PROJECT_NAME>

# Or in current directory
specify init . --ai claude
```

### Supported agents

Spec Kit works with most modern AI coding agents:

| Agent          | Support |
| -------------- | ------- |
| Claude Code    | ✅      |
| GitHub Copilot | ✅      |
| Cursor         | ✅      |
| Gemini CLI     | ✅      |
| Windsurf       | ✅      |
| Kilo Code      | ✅      |
| Roo Code       | ✅      |
| Codex CLI      | ✅      |
| opencode       | ✅      |

The templates are designed to work across agents without tweaks.

### Project structure

After running `specify init`, you'll see:

```
├───.github (or agent-specific folder)
│   └───prompts
│       plan.prompt.md
│       specify.prompt.md
│       tasks.prompt.md
│
└───.specify
    ├───memory
    │   constitution.md
    │
    ├───scripts
    │   └───bash (or powershell)
    │       check-task-prerequisites.sh
    │       create-new-feature.sh
    │       setup-plan.sh
    │
    └───templates
        plan-template.md
        spec-template.md
        tasks-template.md
```

## When SDD works

### Ideal scenarios

**Greenfield development (0-to-1):** Starting new projects from scratch. Small upfront work ensures AI builds actual intent, not generic solutions based on common patterns.

**Feature work in existing systems (N-to-N+1):** The most powerful use case. Adding features to complex, existing codebases. Forces clarity on how new features interact with existing systems. New code feels native, not bolted-on.

**Legacy modernization:** Rebuilding legacy systems where original intent is lost to time. Capture essential business logic in a modern spec, design fresh architecture, and let AI rebuild without inherited debt.

**Complex systems with many contributors:** Microservice architectures, multi-repo frontends, AI-powered backends. Every boundary becomes explicit, enabling contract testing.

**High-stakes features:** Payment flows, healthcare diagnostics, safety-critical automation. Encode performance, security, and reliability thresholds.

**Long-term projects:** When a project will outlive the founding team, SDD preserves design intent as institutional memory.

### When to skip it

**Quick prototypes:** SDD might be overkill. Lighten the process—short spec, simple plan, manual notes.

**Design experiments:** SDD's full structure slows momentum when you're exploring.

**One-shot operations:** Sometimes you need immediate results without iteration.

**Simple, well-understood problems:** Overhead isn't justified for trivial tasks.

## Why this works

The core problem with vague prompting is that language models are exceptional at pattern completion, not mind reading.

Vague prompt: "add photo sharing to my app"

This forces the model to guess at thousands of unstated requirements. It makes reasonable assumptions—but some will be wrong. You discover issues deep into implementation when they're expensive to fix.

**With clear specification + technical plan + focused tasks = AI clarity**

Now, instead of guessing, AI:

- **Knows what to build:** From specification
- **Knows how to build it:** From plan
- **Knows sequence:** From tasks
- **Knows constraints:** From constitution

The approach works across different stacks because the fundamental challenge is the same: translating intent into working code. Your specification captures intent clearly. Your plan translates intent to technical decisions. And tasks break the work down into implementable pieces. AI just handles the actual coding.

## Common pitfalls

### Over-specifying too early

**Problem:** Trying to capture every pixel before building.

**Solution:** Specs should evolve with insight. Aim for just-enough structure for test automation and AI generation, and iterate as you validate assumptions.

### Letting specs drift

**Problem:** Changes sneak into production without spec updates.

**Solution:** Treat the document as your changelog's front line. Update the spec first, then merge code. This preserves traceability for audits.

### No clear ownership

**Problem:** "Someone else will fix it later" syndrome.

**Solution:** Appoint a "spec steward" (a role that rotates) to ensure that merge requests include spec updates. They should flag inconsistencies early.

### Focusing on what instead of why

**Problem:** Future teammates lack context for confident changes.

**Solution:** Capture rationale as well as requirements. Include business drivers ("reduce checkout time to under 2 seconds") and document risks mitigated ("meet SOC 2 audit log mandates").

### Treating as static document

**Problem:** The spec becomes an outdated artifact.

**Solution:** Keep your spec as living document that evolves alongside the code. Update during maintenance phase and keep a changelog of revisions.

## Enterprise benefits

**Centralized requirements:** Security policies, compliance rules, design system constraints, integration needs—these should all live in the specification and plan, where AI can actually use them. Not in someone's head, buried in a wiki nobody reads, or scattered across Slack conversations.

**Auditability:** With a spec commit linked to every release, you have a provable chain from requirement to implementation, to satisfy auditors demanding due diligence.

**Shared vocabulary:** One glossary of user flows, metrics, and error states. With no dueling definitions of "session", "tenant", or "SLA", you have less friction in cross-functional work.

**Accelerated onboarding:** New hires skim change-tracked specs. They can see how requirements evolved and reach productive coding in days, not weeks.

**Safe parallel development:** With interfaces frozen in contract and mock servers generated from specification, you can surface integration issues early, before staging.

## The shift in thinking

Traditional development: code is the source of truth.

Spec-driven development: _intent_ is the source of truth.

You stop asking "How do I get the perfect prompt?" and start asking "How do I capture intent clearly enough that AI can execute it?"

The agent's job is translating intent into working code. Your job is making that intent explicit, reviewable, and evolvable.

## Resources

### Official

- TRY: [GitHub - github/spec-kit](https://github.com/github/spec-kit) — Official repository (62k+ stars, MIT license)
- READ: [Spec-driven development with AI - GitHub Blog](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/) — Official announcement and overview

### Tutorials

- READ: [Spec-Driven Development Tutorial using GitHub Spec Kit](https://www.scalablepath.com/machine-learning/spec-driven-development-workflow) — Real-world tutorial with examples
- READ: [Diving Into Spec-Driven Development With GitHub Spec Kit](https://developer.microsoft.com/blog/spec-driven-development-spec-kit) — Microsoft Developer Blog

### Maintainers

- Den Delimarsky (@localden)
- John Lam (@jflam)

---

**Using SDD in production?** [Share your experience](/community/contributing/)—what worked, what didn't, and what you learned along the way.
