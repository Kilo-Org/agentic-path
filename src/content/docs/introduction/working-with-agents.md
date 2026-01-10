---
title: Working with Agents
description: Practical patterns for human-AI collaboration - when to intervene, how to review, and structuring code for agent effectiveness.
sidebar:
  order: 3
---

## The Collaboration Spectrum

Effective agentic engineering isn't about maximizing AI involvement—it's about finding the right balance for each task. Neither doing everything yourself nor delegating everything works well.

**Hands-off** works best for well-defined tasks: boilerplate generation, test writing, documentation, and refactoring established patterns. **Hands-on** is essential for architecture decisions, security-sensitive code, requirements clarification, and domain-specific logic.

Most real work falls somewhere in between. Feature implementation, debugging, and API design benefit from active collaboration where you guide while the agent executes.

## When to Intervene

Watch for these signals that it's time to step in:

- **Agent looping** - repeating similar attempts without progress
- **Quality declining** - output getting worse, not better
- **Scope creeping** - drifting beyond the original task boundaries
- **Irreversible actions** - about to delete data, push to production, or make breaking changes

When the agent is making steady progress and errors are getting corrected, let it continue. Intervene when you see circular patterns or diminishing returns after 2-3 reprompts.

## The Review Mindset

Reviewing agent output differs fundamentally from reviewing human code. Focus on **intent and correctness**, not style preferences—the agent won't learn from your feedback anyway.

**Always verify:**

- Does it actually solve the stated problem?
- Are edge cases and error conditions handled?
- Is the approach reasonable, not just functional?
- Any security implications?

Don't assume passing tests mean correctness or that confident explanations reflect accuracy. Treat agent output like code from a skilled contractor: technically competent but unfamiliar with your specific context.

## Building AI-Ready Codebases

The Unix philosophy—small tools, clear interfaces, composability—is exactly what agents need to work effectively. Structure your code with agents in mind.

- **Small, focused functions** - A 20-line function is far easier for an agent to understand and modify correctly than a 200-line one. Smaller scope means fewer errors.
- **Clear interfaces** - Explicit inputs and outputs help agents reason about dependencies and chain operations together. Ambiguous interfaces cause integration bugs.
- **Consistent patterns** - Predictable structure reduces agent errors. When similar problems are solved similarly, agents can apply patterns reliably.
- **Good naming** - `getUserById(id)` beats `get(x)`. Descriptive names are context that helps agents understand code without extensive exploration.

You don't need to rewrite everything. As you touch code, nudge it toward these patterns—the benefits compound over time.

## Effective Feedback

When course-correcting, be specific about what's wrong and what you want instead. "The error handling is missing—add try/catch blocks that log failures and return graceful fallbacks" beats "fix the error handling."

Keep corrections focused. A single clear direction works better than multiple vague complaints.
