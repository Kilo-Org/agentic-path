---
title: Best Practices
description: Common failure modes and building AI-compatible codebases
sidebar:
  order: 3
---

Agents fail in predictable ways. Learning these patterns—and structuring your code to help agents succeed—makes agentic development reliable.

## Failure modes to watch

### Hallucinations

Agents use APIs, methods, or parameters that don't exist. Code looks right but fails at runtime.

**Triggers:** Less popular libraries, recently changed APIs, domain-specific tools.

**Catch it:** Be suspicious of unfamiliar method names. Verify imports exist. Run the code—don't just read it.

**Prevent it:** Include relevant docs in your prompt. Use well-known patterns. Ask the agent to explain its reasoning.

### Drift

The agent starts solving your problem but gradually shifts to a different, easier problem.

**Triggers:** Long prompts with multiple objectives. Ambiguous requirements.

**Catch it:** Re-read the original requirement after each iteration. Ask: "Does this still address my actual problem?"

**Prevent it:** Break into smaller, focused pieces. State success criteria explicitly.

### Looping

The agent tries the same failing approach repeatedly with minor variations.

**Triggers:** Errors the agent doesn't understand. Tasks beyond capability. Missing context.

**Catch it:** Track iterations—if you're past 3-4, something's wrong.

**Prevent it:** Provide error context. Break out manually and try a different approach.

### Overconfidence

The agent declares success when code doesn't work, or claims certainty about incorrect information.

**Catch it:** Never trust self-assessment. Run the code yourself. Write tests for actual requirements.

**Prevent it:** Ask how it verified correctness. Request specific edge case tests.

### Context overflow

Early context gets "forgotten" as conversations grow. Agent contradicts earlier decisions or ignores constraints.

**Triggers:** Long conversations. Large codebases in context. Complex multi-step tasks.

**Catch it:** Watch for inconsistencies. Notice when agent asks for info you already provided.

**Prevent it:** Keep conversations focused and short. Start fresh for new tasks. Re-state critical context.

### Plausible nonsense

Code looks sophisticated but fundamentally misunderstands the problem or domain.

**Catch it:** Trace logic mentally—does it make sense? Get domain expert review.

**Prevent it:** Provide domain context explicitly. Include examples of correct solutions.

## Building AI-compatible code

The same patterns that help new developers help agents: clear structure, explicit types, good documentation, consistent patterns.

### Structure

**Keep files focused.** One concept per file. Agents request specific files—make those requests useful.

**Use descriptive names.** `UserAuthenticationService.ts` beats `uas.ts`. Agents infer purpose from names.

**Flatten when possible.** Deep nesting forces agents to understand hierarchy.

**Keep functions short.** Under 50 lines. Single responsibility. Clear inputs and outputs.

### Types and contracts

**Use types generously.** TypeScript, Python type hints. Types are machine-readable documentation.

```typescript
// Harder for agents
function process(data) {
  /* what's data? */
}

// Easier for agents
function processOrder(order: Order): ProcessedResult {
  /* clear context */
}
```

**Define interfaces at boundaries.** Explicit interfaces prevent integration bugs.

**Avoid any/unknown.** More type information enables better inference.

### Documentation

**Document the "why," not the "what."** Agents read what code does. They can't read your mind.

```typescript
// Less useful
// This function calculates the discount
function calculateDiscount(order: Order): number;

// More useful
// Business rule: Premium customers get 10% off orders over $100
// This discount stacks with promotional codes
function calculateDiscount(order: Order): number;
```

**Keep READMEs current.** Agents often start by reading them. Outdated docs mislead.

**Document non-obvious constraints.** Rate limits, known limitations, things that "just work that way."

### Testing

**Write tests as specification.** Tests tell agents what code should do.

**Keep tests fast.** Agents run tests frequently. Slow tests break feedback loops.

**Test edge cases explicitly.** Tests covering edges tell agents about edges they might miss.

**Use descriptive names.** `test_user_creation_fails_with_duplicate_email` beats `test_user_3`.

### Patterns to avoid

- **Magic and metaprogramming** — Dynamic method generation, heavy reflection confuse agents
- **Implicit dependencies** — Service locators, ambient context hide needed information
- **Circular dependencies** — Confuse agents about what depends on what
- **Inconsistent patterns** — If you do the same thing three ways, agents won't know which to follow

## Incremental improvement

You don't need to rewrite everything. As you touch code:

- Improve the file you're modifying
- Add types where you add code
- Write a test when you fix a bug
- Update docs when you discover they're wrong

Over time, the codebase becomes more agent-friendly—and more human-friendly.

## Resources

### Essential

- [AGENTS.md](https://agents.md/) - Open format for guiding agents, used by 60k+ open-source projects
- ["I shipped code I don't understand" – Jake Nations, Netflix](https://www.youtube.com/watch?v=eIoohUmYpGI) - The "Infinite Software Crisis" and how to avoid it
- [Agent Readiness – Eno Reyes, Factory AI](https://www.youtube.com/watch?v=ShuJ_CN6zr4) - Eight categories for agent-ready codebases

### Deep dives

- [No Vibes Allowed – Dex Horthy, HumanLayer](https://www.youtube.com/watch?v=rmvDxxNubIg) - Making agents work in 300k LOC codebases
- [RepoCoder: Repository-Level Code Completion](https://arxiv.org/abs/2303.12570) - Framework for leveraging repository context
