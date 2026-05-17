---
title: Implementation
description: Writing code with agents—the core use case
sidebar:
  order: 2
---

Implementation is where most engineers first encounter agents. Success depends on approach, not just prompting.

## High-value tasks

**Boilerplate generation** — CRUD operations, API scaffolding, form components, DTOs, configs. Agents handle these quickly and reliably. This is where "10x" claims are almost true.

**Feature implementation** — Best when requirements are clear, patterns exist in your codebase to follow, and scope is bounded (single PR, few files).

**Bug fixes** — Clear bugs are excellent agent tasks. "User login fails with null pointer when email contains '+'" beats "fix the login flow."

**Refactoring** — Mechanical refactoring is ideal: rename across codebase, extract function/class, convert patterns. Complex restructuring is harder.

**Data transformations** — Migration scripts, format conversions, ETL logic. Well-defined inputs and outputs make these agent-friendly.

## The workflow

1. **Plan** — Know what files will change, the desired end state, and what should NOT change.

2. **Set context** — Provide relevant code, existing patterns to follow, and constraints.

3. **Generate** — For complex tasks, ask for the plan first: "Describe how you would implement [feature]. Don't write code yet."

4. **Validate** — Does it work? Handle edges? Follow conventions? Have security issues?

5. **Refine** — "This doesn't handle the case where..." or "Follow the pattern in [file] instead."

## What slows you down

- **Overcomplicated prompts** — Start simple, add detail as needed
- **Under-constrained asks** — "Build the feature" leaves too many decisions to the agent
- **Fighting the agent** — After 3+ reprompts without progress, re-think or do it yourself
- **Insufficient context** — Missing context leads to invalid output
- **Wrong tool** — Some code is faster to write manually

## Prompt patterns

**Feature implementation:**

```
Implement [feature] in [file/module].

Requirements:
- [Specific requirement 1]
- [Specific requirement 2]

Follow the pattern used in [existing example].
Don't modify [things to preserve].
```

**Bug fix:**

```
Bug: [description]
Reproduction: [steps or code]
Expected: [behavior]
Actual: [behavior]

Fix this in [file]. The root cause is [if known].
```

**Refactor:**

```
Refactor [module/function] to [desired change].

Keep the public API unchanged.
Maintain all existing functionality.
[Additional constraints]
```

## Resources

- [Embracing the parallel coding agent lifestyle](https://simonwillison.net/2025/Oct/5/parallel-coding-agents/) - Running multiple agents simultaneously
- [Code research projects with async coding agents](https://simonwillison.net/2025/Nov/6/async-code-research/) - Async research task patterns
