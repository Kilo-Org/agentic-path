---
title: Getting Started with Agentic Tools
description: Your first steps into AI-assisted development and when to delegate
sidebar:
  order: 1
---

Pick one tool and learn it well before trying everything.

## Choose your first tool

**New to AI coding?** Start with GitHub Copilot or similar. Low risk, immediate value.

**Ready for more autonomy?** Try a task-level agent like Cursor, Cline, or Kilo Code for multi-file changes.

**Exploring?** Most tools have free tiers. Try a few, commit to one for deep learning.

## Your first session

Start small—don't generate your whole project.

**Good first tasks:**

- Generate a single function from a clear description
- Write tests for existing code
- Add documentation to confusing code
- Refactor a small, messy piece

**Watch how it works:** Notice what context it uses, how it handles ambiguity, where it makes mistakes.

## Build prompting intuition

**Be explicit:** Instead of "fix this bug," try "The function `calculateTotal` returns NaN when items array is empty. Add a check that returns 0."

**Provide context:** "This is a React component using TypeScript. Follow the pattern in other components in this folder."

**Set constraints:** "Don't modify the public API. Keep backward compatibility."

## When to delegate

Not every task should go to an agent. Ask yourself:

1. **How clear is the task?** Vague tasks fail. Clear tasks succeed.
2. **How much context is needed?** Deep domain knowledge is risky to delegate.
3. **What's the blast radius?** Mistakes in critical paths cost more to fix.
4. **How long would I take?** If it's 5 minutes manually, prompting might not be worth it.

### Good candidates

| Task type                            | Why it works                                       |
| ------------------------------------ | -------------------------------------------------- |
| **Boilerplate** (CRUD, DTOs, config) | Repetitive, well-defined, low-risk                 |
| **Tests**                            | Self-validating—you know immediately if they work  |
| **Documentation**                    | Easy to verify accuracy                            |
| **Mechanical refactoring**           | Renaming, extracting functions, syntax conversions |
| **Bug fixes with clear repro**       | "When X happens, Y occurs, but should be Z"        |

### Keep for yourself

- **Architectural decisions** — Agents don't understand your system's history or future
- **Security-sensitive code** — Cost of subtle errors is too high
- **Performance-critical paths** — Agents optimize for correctness, not speed
- **Novel algorithms** — Agents pattern-match; new problems need human creativity
- **Ambiguous requirements** — Clarify before delegating

### The gray zone

For tasks that don't fit cleanly: **start with the agent, prepare to take over.** Get initial structure from the agent, then refine manually.

## Build habits

**Week 1:** Boilerplate and tests only  
**Week 2:** Add documentation and refactoring  
**Week 3:** Feature implementation with clear specs  
**Week 4:** Complex, multi-step tasks

## Know when to stop

Signs you should code it yourself:

- You've reprompted 3+ times without progress
- The task requires deep context the agent doesn't have
- You could finish manually in the time spent prompting

There's no shame in manual coding. The goal is productivity, not agent usage.

## Resources

### Essential

- [Research → Plan → Implement Framework](https://www.alexkurkin.com/guides/claude-code-framework) - Systematic approach to AI-assisted development
- [AGENTS.md](https://agents.md/) - Open format for guiding agents, used by 60k+ projects
- [The Minimum Every Developer Must Know About AI Models](https://blog.kilo.ai/p/minimum-every-developer-must-know-about-ai-models) - Baseline knowledge to avoid breaking things

### Deep dives

- [AI Engineering at Jane Street – John Crepezzi](https://www.youtube.com/watch?v=0ML7ZLMdcl4) - Building custom AI tools for specialized languages
- [What is Model Context Protocol (MCP)](https://modelcontextprotocol.io/docs/getting-started/intro) - The standard for AI integrations
- [Code research projects with async coding agents](https://simonwillison.net/2025/Nov/6/async-code-research/) - Practical pattern for asynchronous agent research

### Courses

- [Prompt Engineering Specialization – Vanderbilt University](https://www.coursera.org/specializations/prompt-engineering) - Comprehensive prompt engineering course
- [Understanding Prompt Engineering – DataCamp](https://www.datacamp.com/courses/understanding-prompt-engineering) - Beginner prompt engineering fundamentals

---

**Found a resource that helped you get started?** [Add it to this page](/community/contributing/)—your recommendation might be exactly what someone else needs.
