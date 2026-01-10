---
title: Building AI-Compatible Codebases
description: Structure your code so agents can work with it effectively
sidebar:
  order: 5
---

The better your codebase is organized, the more effectively agents can work with it. This isn't about compromising for AI—these practices make code better for humans too.

## What makes code AI-compatible

Agents need to understand code quickly with limited context. The same patterns that help new developers help agents:

- Clear structure and naming
- Explicit types and contracts
- Good documentation
- Modular design
- Consistent patterns

## Structure and organization

### File organization

**Keep files focused.** One concept per file. Agents can request specific files—make those requests useful.

**Use descriptive names.** `UserAuthenticationService.ts` beats `uas.ts`. Agents infer purpose from names.

**Flatten when possible.** Deep nesting forces agents to understand hierarchy. Flatter structures are easier to navigate.

### Function design

**Keep functions short.** Under 50 lines is ideal. Agents can read and modify short functions reliably.

**Single responsibility.** A function that does one thing is easier to explain, easier to generate, and easier to replace.

**Clear inputs and outputs.** Explicit parameters beat implicit state. Return values beat side effects.

## Types and contracts

**Use types generously.** TypeScript, Python type hints, etc. Types are machine-readable documentation.

```typescript
// Harder for agents
function process(data) {
  // what's data?
}

// Easier for agents
function processOrder(order: Order): ProcessedResult {
  // clear context
}
```

**Define interfaces at boundaries.** When modules interact, explicit interfaces prevent integration bugs.

**Avoid any/unknown.** The more type information available, the better agents can infer correct behavior.

## Documentation that helps

**Document the "why," not the "what."** Agents can read what code does. They can't read your mind.

```typescript
// Less useful
// This function calculates the discount
function calculateDiscount(order: Order): number;

// More useful
// Business rule: Premium customers get 10% off orders over $100
// This discount stacks with promotional codes
function calculateDiscount(order: Order): number;
```

**Keep README files current.** Agents often start by reading the README. Outdated docs mislead them.

**Document non-obvious constraints.** Rate limits, known limitations, things that "just work that way."

## Testing for agents

**Write tests as specification.** Tests tell agents what the code should do. Good test coverage enables confident modification.

**Keep tests fast.** Agents run tests frequently. Slow tests break the feedback loop.

**Test edge cases explicitly.** Tests that cover edges tell agents about edges they might miss.

**Use descriptive test names.** `test_user_creation_fails_with_duplicate_email` beats `test_user_3`.

## Patterns to avoid

**Magic and metaprogramming.** Dynamic method generation, heavy reflection, and decorator magic confuse agents.

**Implicit dependencies.** Service locators, ambient context, and global state hide information agents need.

**Circular dependencies.** These confuse agents (and humans) about what depends on what.

**Inconsistent patterns.** If you do the same thing three different ways, agents won't know which to follow.

## Incremental improvement

You don't need to rewrite everything. As you touch code:

- Improve the file you're modifying
- Add types where you add code
- Write a test when you fix a bug
- Update docs when you discover they're wrong

Over time, the codebase becomes more agent-friendly—and more human-friendly too.

## Resources

### Essential

- [AGENTS.md](https://agents.md/) - Open format for guiding agents, used by 60k+ open-source projects
- [No Vibes Allowed – Dex Horthy, HumanLayer](https://www.youtube.com/watch?v=rmvDxxNubIg) - Making agents work in 300k LOC codebases
- [Agent Readiness – Eno Reyes, Factory AI](https://www.youtube.com/watch?v=ShuJ_CN6zr4) - Eight categories that determine if your codebase is agent-ready

### Papers & research

- [RepoCoder: Repository-Level Code Completion](https://arxiv.org/abs/2303.12570) - Framework for leveraging repository context
