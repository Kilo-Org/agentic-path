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

## Resources

### Essential

- [Research → Plan → Implement Framework](https://www.alexkurkin.com/guides/claude-code-framework) - Systematic approach to AI-assisted development
- [AGENTS.md](https://agents.md/) - Open format for guiding agents, used by 60k+ projects
- [The Minimum Every Developer Must Know About AI Models](https://blog.kilo.ai/p/minimum-every-developer-must-know-about-ai-models) - Baseline knowledge to avoid breaking things

### Deep dives

- [AI Engineering at Jane Street – John Crepezzi](https://www.youtube.com/watch?v=0ML7ZLMdcl4) - Building custom AI tools for specialized languages
- [What is Model Context Protocol (MCP)](https://modelcontextprotocol.io/docs/getting-started/intro) - The standard for AI integrations
- [OpenAI Embeddings Explained in 5 Minutes](https://www.youtube.com/watch?v=8kJStTRuMcs) - Quick primer on embeddings
- [MCP server: Step-by-step building guide](https://composio.dev/blog/mcp-server-step-by-step-guide-to-building-from-scrtch) - Building your own MCP servers

### Courses

- [Prompt Engineering Specialization – Vanderbilt University](https://www.coursera.org/specializations/prompt-engineering) - Comprehensive prompt engineering course
- [Understanding Prompt Engineering – DataCamp](https://www.datacamp.com/courses/understanding-prompt-engineering) - Beginner prompt engineering fundamentals
