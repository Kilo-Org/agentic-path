---
title: Getting Started with Agentic Tools
description: Your first steps into AI-assisted development
sidebar:
  order: 1
---

Ready to start working with agents? Here's a practical path from zero to productive.

## Choose your first tool

Don't try everything at once. Pick one tool and learn it well.

**If you're new to AI coding:**
Start with GitHub Copilot or a similar copilot-style tool. Low risk, immediate value, gentle learning curve.

**If you're ready for more autonomy:**
Try a task-level agent like Cursor, Cline, or Kilo Code. These handle multi-file changes with more independence.

**If you're exploring:**
Most tools offer free tiers or trials. Try a few, but commit to one for deep learning.

## Your first session

Start small. Don't try to generate your whole project.

**Good first tasks:**

- Generate a single function from a clear description
- Write tests for existing code
- Add documentation to a confusing function
- Refactor a small, messy piece of code

**Watch how it works:**

- Notice what context it picks up
- See how it handles ambiguity
- Observe where it makes mistakes

## Build your prompting intuition

Effective prompting is a skill. It develops with practice.

**Start explicit:**
Instead of "fix this bug," try "The function `calculateTotal` returns NaN when the items array is empty. Add a check for empty arrays that returns 0."

**Provide context:**
"This is a React component using TypeScript. It should follow the existing pattern in other components in this folder."

**Set constraints:**
"Don't modify the public API. Keep backward compatibility with existing callers."

## Learn from failures

You'll hit frustrating moments. Use them.

When the agent fails, ask:

- Was my prompt clear enough?
- Did it have the context it needed?
- Am I asking for something it's bad at?
- Should I break this into smaller steps?

## Build habits

Integrate agents into your workflow gradually:

**Week 1:** Use for boilerplate and tests only
**Week 2:** Add documentation and refactoring tasks
**Week 3:** Try feature implementation with clear specs
**Week 4:** Experiment with more complex, multi-step tasks

## Know when to stop

Signs you should code it yourself:

- You've reprompted 3+ times without progress
- The task requires deep context the agent doesn't have
- You could finish manually in the time spent prompting

There's no shame in manual coding. The goal is productivity, not agent usage.

---

## Further reading

_Links to external resources coming soon:_

- Tool-specific getting started guides
- Video tutorials for beginners
- Community tips and tricks
