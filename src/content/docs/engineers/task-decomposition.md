---
title: Task Decomposition
description: Breaking problems into agent-sized pieces
sidebar:
  order: 2
---

The biggest mistake new agentic engineers make: asking for too much at once. Learning to decompose tasks is the core skill.

## Why decomposition matters

Agents work best with bounded, clear tasks. When you ask for too much:

- Context overflows and early details get lost
- Errors compound as later steps build on earlier mistakes
- It's harder to identify where things went wrong
- Recovery from failures wastes everything that came before

Small tasks mean faster feedback, easier debugging, and better results.

## The three-part rule

Before prompting, ask: Can I describe this task in three parts?

1. **What** - The specific outcome I want
2. **Where** - Which files/functions to touch
3. **Constraints** - What not to change

If you can't articulate all three clearly, the task is probably too big.

## Decomposition strategies

### Vertical slicing

Cut by feature path rather than technical layer.

**Instead of:**

- "Create the database schema"
- "Build the API endpoints"
- "Create the frontend forms"

**Try:**

- "Create the user creation flow: schema, endpoint, and basic form"
- "Add user editing: update endpoint and form"
- "Add user deletion: endpoint with confirmation"

Each slice is complete and testable.

### Horizontal layering (when appropriate)

Sometimes technical layers make sense:

- When the interface contract is well-defined
- When different layers have different complexities
- When you want to review one layer before building the next

### Dependency ordering

When tasks have dependencies, make them explicit:

1. Define the data model types (no external deps)
2. Build the storage layer (depends on types)
3. Create the API (depends on storage)
4. Build the UI (depends on API)

Each step should work in isolation before moving to the next.

## Sizing tasks

**Too small:** "Add a semicolon to line 47"
This is faster to do yourself.

**Too big:** "Build the authentication system"
This has too many decisions and integration points.

**Just right:** "Create a login form component that posts to /api/auth/login and stores the token in localStorage"
Clear scope, defined interface, testable result.

## The prompt template

A simple structure that works:

```
Task: [What you want done]

Context:
- [Relevant background]
- [Related files or patterns to follow]

Constraints:
- [What not to change]
- [Patterns to follow]
- [Things to avoid]

Success criteria:
- [How you'll know it's done]
```

## When tasks resist decomposition

Some tasks don't decompose cleanly:

- Exploratory work where you don't know the shape
- Tightly coupled changes across many files
- Architectural refactoring

For these, consider:

- Do the exploration manually, then use agents for implementation
- Accept that you'll need more oversight
- Build a throwaway prototype first to understand the shape

## Resources

### Essential

- [Embracing the parallel coding agent lifestyle](https://simonwillison.net/2025/Oct/5/parallel-coding-agents/) - Running multiple agents simultaneously on real projects
- [Spec-Driven Development – Al Harris, Amazon Kiro](https://www.youtube.com/watch?v=HY_JyxAZsiE) - How specs enable reproducible AI delivery
- [Spec Kit](https://github.com/github/spec-kit) - GitHub's framework for spec-driven development

### Deep dives

- [No Vibes Allowed – Dex Horthy, HumanLayer](https://www.youtube.com/watch?v=rmvDxxNubIg) - "Frequent intentional compaction" for large codebases
- [Research → Plan → Implement Framework](https://www.alexkurkin.com/guides/claude-code-framework) - Systematic Claude Code workflow

### Papers & research

- [Repository-Level Prompt Generation](https://arxiv.org/abs/2206.12839) - Techniques for repo-aware prompt generation
