---
title: Unix Philosophy for AI
description: Why modularity and clean interfaces matter more than ever
sidebar:
  order: 3
---

The Unix philosophy—small tools, clear interfaces, composability—turns out to be exactly what you need for effective AI collaboration.

## The original principles

Doug McIlroy summarized Unix philosophy in 1978:

1. Make each program do one thing well
2. Expect the output of every program to become the input to another
3. Design and build software to be tried early
4. Use tools to lighten a programming task

These principles were about humans working with computers. They work even better for AI agents.

## Why this matters for agents

**Small, focused functions are easier to generate correctly.** A 20-line function is easier for an agent to get right than a 200-line function. Smaller scope means fewer opportunities for error.

**Clear interfaces enable composition.** When functions have obvious inputs and outputs, agents can chain them together. Ambiguous interfaces lead to integration bugs.

**Modular code is easier to modify.** Agents work best with surgical changes. Monolithic code requires understanding everything at once—a context window problem.

**Well-defined boundaries help agents stay on track.** When a task is "modify this one function," the agent can focus. When it's "change this interconnected mess," the agent wanders.

## Practical implications

**Write more, smaller files.** One concept per file. Agents handle multiple small files better than one large file.

**Keep functions short.** If a function doesn't fit on one screen, split it. This helps human readers too.

**Use explicit types.** TypeScript, Python type hints, whatever your language supports. Types are documentation that agents can read.

**Name things clearly.** `getUserById(id)` is better than `get(x)`. Obvious names reduce the context an agent needs.

**Separate concerns.** Keep business logic, data access, and presentation in different modules. Agents can modify one without touching others.

## The AI-ready codebase

Codebases that work well with agents share common traits:

- Clear folder structure
- Consistent naming conventions
- Minimal "magic" (dependency injection, metaprogramming)
- Good test coverage (agents can run tests to verify changes)
- Up-to-date documentation

You don't need to rewrite everything. But as you touch code, nudge it toward these patterns.

## The compounding benefit

A well-structured codebase makes agents more effective. Better agent output means faster iteration. Faster iteration means more opportunity to improve structure.

This is a virtuous cycle. Teams that invest in code quality get more from their AI tools, which lets them invest more in quality.

---

## Further reading

_Links to external resources coming soon:_

- The Unix Philosophy (original documents)
- Clean code principles for AI
- Architecture patterns that work with agents
