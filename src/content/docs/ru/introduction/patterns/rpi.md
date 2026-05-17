---
title: Research, Plan, Implement (RPI)
description: A three-phase framework for transforming chaotic AI interactions into predictable, high-quality software delivery
sidebar:
  order: 8
---

You've been there. You ask an AI to "refactor this authentication module" and it generates 500 lines of code using libraries you don't have, invents methods that don't exist, and solves a problem you didn't actually have. Three hours later, you're untangling hallucinations and wondering if you should have just done it yourself.

The AI isn't broken. You're asking it to read your mind without giving it structure.

RPI (Research → Plan → Implement) fixes this. Instead of jumping straight to code generation, you break work into three focused phases with built-in validation. The AI researches what exists, plans the change systematically, then executes mechanically. It's slower than "just do it"—and that's the point.

## The problem with direct prompting

When you ask an AI agent to implement something without structure, you're gambling on several things going right simultaneously:

- The AI correctly understands your intent
- It discovers all relevant code and patterns
- It makes architectural decisions you'd agree with
- It doesn't hallucinate APIs or libraries
- It stays within scope

**What actually happens:**

- Context overflow: With too much information, AI loses focus.
- Hallucination: AI invents code that doesn't exist.
- Wrong problem solved: AI misunderstands your requirements.
- Scope creep: Work expands beyond intended boundaries.
- Untestable code: You have no clear success criteria.

The insight: without structure, even brilliant AI assistants become expensive random code generators.

## What RPI actually is

RPI is a three-phase framework with validation gates between each phase. Think of it as turning your AI from an eager intern into a seasoned developer with a GPS.

**The phases:**

1. **Research**: Build context. Document what exists today—no opinions, no suggestions.
2. **Plan**: Design the change. Use a phased approach with atomic tasks and success criteria.
3. **Implement**. Execute mechanically. Follow the plan, and verify after each phase.

**Core principles:**

- One goal per session: Keep the LLM laser-focused.
- Validation before progression: Use scoring scales to verify readiness.
- Human judgment preserved: AI doesn't make big decisions without validation.
- Context management: Start with a fresh session for each phase.

The framework trades speed for clarity, predictability, and correctness. You'll spend more time upfront, but you'll spend far less time debugging hallucinations and fixing architectural mistakes.

## Phase 1: Research

The research phase builds context and insight. You're documenting what exists today—nothing more.

**Strict rules:**

- Document what exists
- Do NOT suggest changes
- Do NOT critique
- Do NOT plan
- Base everything on facts, not assumptions

**In goose:**

```bash
/research "look through the codebase and research how
the LLM Tool Discovery is implemented"
```

This spawns three parallel sub-agents:

| Sub-agent       | Purpose                                           |
| --------------- | ------------------------------------------------- |
| `find_files`    | Uses codebase locator to find relevant files      |
| `analyze_code`  | Reads files fully and documents how they work     |
| `find_patterns` | Looks for similar features or conventions in repo |

**Output:** A structured research document at `thoughts/research/YYYY-MM-DD-HHmm-topic.md`

The document includes git metadata, file and line references, flow descriptions, key components, open questions, and a technical map of the feature as it exists today.

### Reverse prompting

Here's where things get interesting. Instead of you explaining everything upfront, the AI asks _you_ clarifying questions one at a time:

- "Should this work from the file manager or dashboard?"
- "Any file type restrictions?"
- "What happens to shared files?"

This reveals insights you hadn't considered, and prevents wrong assumptions from propagating through the entire workflow.

### Validating research: the FAR scale

Before moving to planning, validate your research against FAR criteria:

| Criterion      | Description                           | What it prevents     |
| -------------- | ------------------------------------- | -------------------- |
| **F**actual    | Based on actual code, not assumptions | Hallucination        |
| **A**ctionable | You know exactly what to build        | Vague requirements   |
| **R**elevant   | Solves the real user need             | Wrong problem solved |

**Critical:** A human must review the research document before proceeding. This informs everything downstream.

## Phase 2: Plan

The planning phase translates research into a phased implementation plan. You're designing the change with clear success criteria.

**In goose:**

```bash
/plan a removal of the Tool Selection Strategy feature
```

**AI's Process:**

1. Read the research document from the previous phase
2. Ask clarifying questions (full removal vs deprecation? config cleanup behavior?)
3. Present design options where multiple approaches exist
4. Produce a phased implementation plan

**Output:** A detailed plan at `thoughts/plans/YYYY-MM-DD-HHmm-description.md`

The plan includes:

- Explicit phases (e.g., 10 phases)
- Exact file paths
- Code snippets showing what to change
- Automated success criteria
- Manual verification steps
- Checkboxes for tracking progress
- Atomic tasks per phase

### Why atomic tasks matter

Each task should be a single, focused unit of work—one command call or file edit. This keeps the AI on track with simple instructions, makes progress easy to verify, prevents context overflow, and allows recovery if the context window fills.

The plan must be explicit enough that someone else (or a fresh AI session) could execute it without additional context.

### Validating plans: the FACTS scale

Validate each task against FACTS criteria:

| Criterion    | Description                                    | What it prevents              |
| ------------ | ---------------------------------------------- | ----------------------------- |
| **F**easible | Can actually be done with available tools/APIs | Impossible tasks              |
| **A**tomic   | Single, focused unit of work                   | Context overflow, scope creep |
| **C**lear    | Unambiguous instructions                       | Misinterpretation             |
| **T**estable | Has clear success criteria                     | Untestable code               |
| **S**coped   | Properly bounded                               | Runaway execution             |

## Phase 3: Implement

The implementation phase executes the plan step-by-step with verification. This should feel intentionally boring and mechanical. If it feels creative, something upstream is missing.

**In goose:**

```bash
/implement thoughts/plans/2025-12-23-remove-tool-selection-strategy.md
```

**AI's Process:**

1. Read the plan completely
2. Execute phases in order
3. Run verification after each phase
4. Update checkboxes directly in the plan file as you go

### Feedback loop options

Choose your control level based on confidence in the plan:

| Loop type                 | When to use               | Control level                           |
| ------------------------- | ------------------------- | --------------------------------------- |
| Task-by-task validation   | Maximum control needed    | High—validate after each atomic task    |
| Phase-by-phase validation | Balance speed and control | Medium—validate after completing phase  |
| Full plan validation      | High confidence in plan   | Low—execute everything, validate at the end |

### Verification gates

Every phase must pass quality gates:

- Tests must pass
- Builds must succeed
- Linters must pass
- No regressions introduced

If any gate fails, the implementation pauses. Fix the issue before proceeding.

### Recovery mechanism

If the context window fills mid-implementation, the checkboxes in the plan allow the AI to compact and pick up exactly where it left off. This is why atomic tasks and progress tracking matter—they enable graceful recovery.

## Optional: Iterate

Sometimes plans need adjustment after review or during implementation.

**In goose:**

```bash
/iterate "plan path" + feedback
```

**AI's Process:**

1. Read the existing plan
2. Research only what needs rethinking
3. Propose targeted updates
4. Edit the plan surgically (doesn't start over)

This enables refinement without discarding good work. Changed sections must pass FACTS validation again.

## File structure

All RPI outputs live in predictable locations:

```
thoughts/
├── research/
│   └── YYYY-MM-DD-HHmm-topic.md
└── plans/
    └── YYYY-MM-DD-HHmm-description.md
```

## A Real-world example

Let's walk through an actual RPI execution: removing the "Tool Selection Strategy" feature from a large codebase.

**Complexity:**

- Spans 32 files
- Touches Rust core code
- Affects TypeScript
- Changes configuration
- Modifies tests
- Updates documentation

### Research phase (9 minutes)

Started with `/research "LLM Tool Discovery"`. Realized scope was too broad—course corrected and reran: `/research "Tool Selection Strategy feature specifically"`.

Output: detailed technical map of the feature.

Human review: validated research accuracy before proceeding.

### Plan phase (4 minutes)

Ran `/plan a removal of the Tool Selection Strategy feature`.

AI asked clarifying questions:

- Full removal vs deprecation?
- How should config cleanup behave?
- Should artifacts be regenerated?
- Where do related tests live?

Presented design options. Generated 10-phase plan with atomic tasks.

Human review: validated plan feasibility.

### Implement phase (39 minutes)

Ran `/implement thoughts/plans/2025-12-23-remove-tool-selection-strategy.md`.

AI executed mechanically phase by phase. Context window filled mid-way—AI compacted and resumed from checkboxes.

Human activity during this phase: "I fell asleep." Intentionally boring and reliable.

### Results

- **Total time:** 52 minutes (including AI work, testing, human Q&A)
- **PR submitted:** Build passed on first try
- **Code review agent:** Zero comments
- **Quality:** Top-notch

**Comparison:**

| Approach       | Outcome                                                        |
| -------------- | -------------------------------------------------------------- |
| Without AI     | Several hours of manual work                                   |
| AI without RPI | Drift, bugs, rework cycles                                     |
| RPI            | Slower than direct implementation, but predictable and correct |

## When to use RPI

### Ideal scenarios

**Complex tasks spanning multiple files:**

- Refactors
- Migrations
- Feature additions
- Large upgrades
- Incident cleanup
- Documentation overhauls

**Characteristics that signal RPI is worth it:**

- Complex integration
- Multiple touchpoints
- High consequences of errors
- Need for systematic approach
- Require clear validation

### When to skip it

**Simple, basic tasks:**

- Single file changes
- Obvious bug fixes
- Simple feature additions
- Quick prototypes

RPI is deliberately slower. The validation overhead isn't worth it for trivial work.

## Why RPI works

### Prevents common AI failures

| Failure mode         | How RPI prevents it                                   |
| -------------------- | ----------------------------------------------------- |
| Context overflow     | Atomic tasks keep work focused and bounded            |
| Hallucination        | FAR validation requires factual evidence              |
| Wrong problem solved | Research validates relevance before planning          |
| Untestable code      | FACTS validation ensures clear success criteria       |
| Scope creep          | Atomic tasks and validation gates maintain boundaries |

### Leverages AI strengths

- **Pattern matching:** AI excels at finding similar code
- **Code generation:** AI writes boilerplate efficiently
- **Systematic execution:** AI follows checklists perfectly

### Preserves human judgment

- Humans handle strategy and validation
- Humans make architectural decisions
- Humans verify relevance and correctness
- AI doesn't make big decisions without validation

### Built-in quality gates

Every phase has checkpoints:

- Research: FAR validation
- Plan: FACTS validation
- Implement: Tests, builds, lints must pass

### Context management

- Fresh sessions per phase—LLM stays focused
- Explicit handoffs—plan has all context for implementation
- Checkpoint system—can resume after interruptions

## Integration with AI tools

### Tool agnostic

RPI works with any AI coding assistant:

- Claude
- GitHub Copilot
- Cursor
- OpenAI
- Gemini
- Any agent that can follow structured prompts

The framework is about structure, not specific tooling.

### goose implementation

Block's goose tool provides built-in RPI support with slash commands:

| Command                           | Purpose              |
| --------------------------------- | -------------------- |
| `/research "topic"`               | Research phase       |
| `/plan "feature/task"`            | Planning phase       |
| `/implement "plan path"`          | Implementation phase |
| `/iterate "plan path" + feedback` | Plan refinement      |

**Recipes used:**

- `rpi-codebase-locator` — Find relevant files
- `rpi-codebase-analyzer` — Analyze code
- `rpi-pattern-finder` — Find patterns
- `rpi-create-plan` — Generate plan
- `rpi-implement-plan` — Execute implementation
- `rpi-iterate-plan` — Refine plan

### Without goose

You can implement RPI manually:

1. Create `thoughts/research/` and `thoughts/plans/` directories
2. Use structured prompts for each phase
3. Manually validate with FAR and FACTS scales
4. Track progress with checkboxes in markdown

The tooling helps, but the framework works without it.

## Common patterns

### Feature addition

```bash
1. /research "current authentication system"
2. /plan "add OAuth2 support"
3. /implement [plan path]
```

### Bug fix

```bash
1. /research "payment processing error handling"
2. /plan "fix race condition in transaction commits"
3. /implement [plan path]
```

### Refactor

```bash
1. /research "current data access layer"
2. /plan "migrate from ORM to raw SQL"
3. /implement [plan path]
4. /iterate [plan path] "need to handle edge case in migrations"
```

### Migration

```bash
1. /research "React class components in codebase"
2. /plan "convert to functional components with hooks"
3. /implement [plan path]
```

## The skill shift

Traditional AI coding asks: "How do I get the perfect prompt?"

RPI asks: "How do I structure work so AI can execute reliably?"

You stop directing the AI step-by-step and start designing workflows that converge on correct solutions. The AI's job is systematic execution. Your job is defining what "done" looks like and validating at checkpoints.

**The mindset shift:**

- **From:** "AI, build this feature"
- **To:** "AI, help me understand what exists, plan the change systematically, then execute with validation"

## Resources

### Official

- READ: [Research → Plan → Implement Pattern | goose](https://block.github.io/goose/docs/tutorials/rpi/) — Official tutorial with demonstrations
- READ: [Introducing the RPI Strategy](https://patrickarobinson.com/blog/introducing-rpi-strategy/) — Creator's blog post explaining the approach

### Community

- LISTEN: [The RPI workflow - Build Wiz AI Show (Podcast)](https://open.spotify.com/episode/1OdIYj0SZzhyzFGGoVuELP) — Audio discussion on advanced AI coding

### Origins

Originally inspired by a YouTube video that sparked the idea for systematic AI development. Developed and popularized by HumanLayer (framework creators), Block's goose team (implementation and tooling), and Patrick Robinson (documentation and evangelism).

---

**Using RPI in production?** [Share your experience](/community/contributing/)—what worked, what didn't, and what you learned along the way.
