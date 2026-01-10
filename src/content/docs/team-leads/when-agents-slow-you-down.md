---
title: When Agents Help vs. Slow You Down
description: Recognizing situations where agents aren't the right choice
sidebar:
  order: 6
---

Agents aren't universally helpful. Sometimes they slow you down. Good team leads recognize the patterns and guide their teams accordingly.

## When agents genuinely help

### High-volume repetitive tasks

- Generating tests for multiple functions
- Updating documentation across files
- API endpoint boilerplate
- Data migration scripts

The pattern: same thing, many times. Agents thrive here.

### New territory exploration

- Unfamiliar framework? Agent can scaffold while you learn.
- New language? Get a working example to study.
- Unknown API? Generate integration code to understand the patterns.

The pattern: you know _what_ you want but not _how_ with this specific tech.

### Clear spec, straightforward implementation

- CRUD operations with defined schemas
- Form validation with known rules
- Utility functions with well-defined inputs/outputs

The pattern: low ambiguity, well-understood problem space.

### Tedious but necessary

- Writing mocks and fixtures
- Adding logging and error handling
- Applying consistent formatting
- Updating config in many places

The pattern: would take time but not thought.

## When agents slow you down

### High-context tasks

If understanding the task requires:

- Reading through complex business logic
- Understanding historical decisions
- Knowing unwritten team conventions

The agent will miss context you'd have to explain anyway. Often faster to just do it.

### Tasks faster done manually

Time estimate comparison:

- **Prompting + waiting + reviewing > manual coding:** Just code it.
- **Especially true for:** Single-line changes, familiar patterns, quick fixes.

The break-even point varies by person and task. Build intuition for yours.

### Novel algorithms

Agents pattern-match against training data. If your problem requires:

- New algorithmic approaches
- Domain-specific optimization
- Unusual data structures

You're better off solving it yourself and letting agents help with the boring parts around it.

### Highly coupled changes

Changes that touch many tightly-interdependent parts are hard for agents:

- They may not understand all the connections
- Errors compound across files
- Validation requires understanding the whole system

Break these apart or do them manually.

### Ambiguous requirements

"Make it better" or "improve performance" without specifics will waste cycles. Agents need:

- Clear success criteria
- Defined constraints
- Specific scope

If you can't articulate these, you're not ready to delegate.

## Team-level patterns

### Task assignment

Don't assign agent-hostile tasks with the expectation agents will help. Staff appropriately.

### Sprint planning

When estimating:

- Don't assume agent help for all tasks
- Call out which tasks are agent-friendly
- Account for validation overhead

### Retrospectives

Review where agents helped and hindered:

- What task types worked well?
- Where did we waste time prompting?
- Should we change how we approach certain work?

## Building team judgment

Help your team develop intuition:

**Share examples.** "This task would have been faster manually—here's why."

**Celebrate good choices.** When someone correctly decides _not_ to use an agent, acknowledge it.

**Create a reference.** Maintain a team guide of task types and recommended approaches.

**Review periodically.** As tools improve, patterns change. What's slow today might be fast next quarter.

---

## Further reading

_Links to external resources coming soon:_

- Task classification frameworks
- Time studies on agent efficiency
- Community discussions on when not to use agents
