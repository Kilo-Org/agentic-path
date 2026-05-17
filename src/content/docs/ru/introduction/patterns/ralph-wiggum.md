---
title: Ralph Wiggum
description: A technique for running AI agents in continuous loops until the job is actually done
sidebar:
  order: 6
---

You've probably been here: you ask an AI agent to implement a feature, it writes some code, declares victory, and... the tests fail. You prompt again. It tries a different approach. Still broken. Three iterations later, you're doing it yourself.

Ralph Wiggum flips this dynamic. Instead of hoping for first-try perfection, you design for iteration. The agent keeps running until the work is actually complete—tests pass, types check, linting clears. No premature exits. No false victories.

## The core idea

At its simplest, Ralph is a bash loop:

```bash
while :; do cat PROMPT.md | claude ; done
```

That's it. Feed the agent the same task repeatedly. Each iteration builds on the last through git history and progress tracking. The agent doesn't need to be perfect—it just needs to be persistent.

**The philosophy:** Iteration beats perfection. Deterministic failures are data. Keep trying until success.

## How it works

Ralph wraps the standard AI tool loop with an outer verification layer:

```
┌──────────────────────────────────────────────────────┐
│ Ralph Loop (outer)                                    │
│ ┌────────────────────────────────────────────────┐   │
│ │ AI SDK Tool Loop (inner)                       │   │
│ │ LLM ↔ tools ↔ LLM ↔ tools ... until done      │   │
│ └────────────────────────────────────────────────┘   │
│ ↓                                                     │
│ verifyCompletion: "Is the TASK actually complete?"   │
│ ↓                                                     │
│ No? → Inject feedback → Run another iteration        │
│ Yes? → Return final result                           │
└──────────────────────────────────────────────────────┘
```

The key mechanisms:

- **Stop hook**: This intercepts exit attempts and checks completion criteria before allowing the agent to stop.
- **Progress tracking**: A `progress.txt` file tracks what's been done, decisions made, and blockers encountered.
- **Git commits**: Each iteration commits work, creating context for future iterations.
- **Feedback loops**: Types, tests, and linting verify quality before continuing.
- **Verification**: Custom completion criteria determine when the task is truly done.

## Two operating modes

### HITL (Human-In-The-Loop)

Run one iteration at a time. Watch the agent work. Intervene when needed.

This is pair programming with AI. You see every decision, catch mistakes early, and guide the direction. 

Best for: 

- Learning the technique 
- Refining prompts 
- Working on risky tasks where you want eyes on every change

### AFK (Away From Keyboard)

Set a maximum iteration count and let it run. Come back to results.

This is overnight work. You define clear success criteria, cap the iterations, and let the agent grind through mechanical tasks while you sleep. 

Best for well-defined work like: 

- Test migrations
- Coverage improvements
- Large refactors with clear patterns

**Critical for AFK mode:** Use Docker sandboxes. You're giving an agent autonomous access to your system. Contain it.

```bash
docker sandbox run claude
```

## When Ralph works

Ralph excels at tasks with clear completion criteria:

| Task type                | Why it works                                             |
| ------------------------ | -------------------------------------------------------- |
| **Large refactors**      | Converting class components to hooks, Jest to Vitest     |
| **Framework migrations** | Test suite conversions with clear before/after states    |
| **TDD workflows**        | Implement features until tests pass                      |
| **Test coverage**        | Add tests to uncovered code until coverage threshold met |
| **Greenfield builds**    | REST APIs, complete features with defined specs          |
| **Mechanical cleanup**   | Linting fixes, duplicate removal, code smell elimination |

## When Ralph doesn't work

Some tasks resist iteration:

- **Ambiguous requirements**: If you can't define "done," the loop can't verify completion.
- **Architectural decisions**: These need human judgment, not persistence.
- **Security-sensitive code**: Auth, payments, and crypto require human review regardless of test results.
- **Exploration tasks**: "Figure out why the app is slow" has no clear stopping point.
- **One-shot operations**: If you need immediate results, the loop overhead isn't worth it.

## Practical tips

### Define clear scope

Use structured completion criteria:

```json
{
  "category": "functional",
  "description": "New chat button creates conversation",
  "steps": ["Click button", "Verify conversation", "Check welcome state"],
  "passes": false
}
```

The agent knows exactly what "done" means.

### Track progress

Maintain a `progress.txt` with:

- Tasks completed
- Decisions made and why
- Blockers encountered
- Files changed

This gives future iterations context about past work.

### Use feedback loops

Block commits unless ALL feedback loops pass:

- TypeScript type checking
- Unit tests
- E2E tests (Playwright, Cypress)
- Linting
- Pre-commit hooks

If any check fails, the iteration isn't complete.

### Take small steps

Keep it to one logical change per commit. Break large tasks into subtasks, and run feedback loops after each change. You want quality over speed.

### Cap iterations

- **HITL:** Watch every iteration
- **AFK:** Set max-iterations (10-20 for small tasks, 30-50 for large)
- **Never use unlimited iterations**

A 50-iteration loop on a large codebase can cost $50-100+ in API credits. Start with 10-20 iterations to understand token consumption before scaling up.

### Commit after each feature

Good git hygiene creates a clean git history and clear rollback points. If iteration 15 breaks something, you can revert to iteration 14.

## Getting started

### Claude Code Plugin

```bash
/plugin install ralph-loop@claude-plugins-official
/ralph-loop "Add JSDoc comments to all exported functions" --max-iterations 10
```

### NPM Package

```bash
npm install ralph-loop-agent ai zod
```

```javascript
const agent = new RalphLoopAgent({
  model: "anthropic/claude-opus-4.5",
  instructions: "You are a helpful coding assistant.",
  stopWhen: iterationCountIs(10),
  verifyCompletion: async ({ result }) => ({
    complete: result.text.includes("DONE"),
    reason: "Task completed successfully",
  }),
});
```

## The skill shift

Traditional AI coding asks: "How do I get the perfect prompt?"

Ralph asks: "How do I design conditions where iteration leads to success?"

You stop directing the AI step-by-step and start designing loops that converge on solutions. The agent's job is persistence. Your job is defining what "done" looks like and ensuring the feedback loops catch failures.

This is continuous autonomy—the agent works until the job is actually done, not just until the LLM stops calling tools.

## Resources

### Official

- [Ralph Wiggum as a Software Engineer](https://ghuntley.com/ralph/)
- [GitHub - vercel-labs/ralph-loop-agent](https://github.com/vercel-labs/ralph-loop-agent) — Core NPM package
- [Ralph Wiggum - AI Loop Technique for Claude Code](https://awesomeclaude.ai/ralph-wiggum) — Complete guide and examples

### Tutorials

- [11 Tips For AI Coding With Ralph Wiggum](https://www.aihero.dev/tips-for-ai-coding-with-ralph-wiggum) — Practical tips for autonomous loops
- [The Ralph Wiggum Approach: Running AI Coding Agents for Hours](https://dev.to/sivarampg/the-ralph-wiggum-approach-running-ai-coding-agents-for-hours-not-minutes-57c1) — DEV Community tutorial

### Community tools

- **ralph-claude-code** — Rate limiting, tmux dashboards, circuit breakers
- **ralph-orchestrator** — Token tracking, spending limits, checkpointing

---

**Using Ralph in production?** [Share your experience](/community/contributing/)—what worked, what didn't, and what you learned along the way.
