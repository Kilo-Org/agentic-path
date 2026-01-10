---
title: When to Delegate vs. Code Yourself
description: Making smart choices about what to hand to agents
sidebar:
  order: 6
---

Not every task should go to an agent. Knowing when to delegate and when to code yourself is what makes you effective.

## The delegation decision

Ask yourself:

1. **How clear is the task?** Vague tasks fail with agents. Clear tasks succeed.
2. **How much context is needed?** Tasks requiring deep domain knowledge are risky to delegate.
3. **What's the blast radius?** Mistakes in critical code paths cost more to fix.
4. **How long would I take?** If it's 5 minutes manually, prompting might not be worth it.

## Good candidates for delegation

### Boilerplate and glue code

- CRUD implementations
- Data transfer objects
- Configuration files
- API client wrappers

These are repetitive, well-defined, and low-risk. Perfect for agents.

### Tests

- Unit tests for existing code
- Test case generation
- Mock setup

Agents excel here. Tests are self-validating—you know immediately if they work.

### Documentation

- Function and class documentation
- README updates
- Code comments

Agents write decent docs. You can quickly verify accuracy.

### Refactoring with clear patterns

- Renaming across files
- Extracting functions
- Converting to new syntax patterns

When the transformation is mechanical, agents nail it.

### Bug fixes with clear repro

"When X happens, Y occurs, but it should be Z."

Clear problem statements make great agent tasks.

## Tasks to keep for yourself

### Architectural decisions

Agents don't understand your system's history, constraints, or future direction. Architecture is human work.

### Security-sensitive code

Authentication, authorization, encryption, input validation. The cost of subtle errors is too high.

### Performance-critical paths

Agents optimize for correctness, not performance. Hot paths need human attention.

### Novel algorithms

Agents pattern-match against training data. Genuinely new algorithmic problems need human creativity.

### Ambiguous requirements

"Make it better" or "improve the UX" are human problems. Clarify before delegating.

## The gray zone

Many tasks live in between. For these, consider:

**Start with the agent, prepare to take over.** Get the initial structure from the agent, then refine manually.

**Pair on complex tasks.** Use the agent for ideas and drafts while you make final decisions.

**Iterate with feedback.** Give the agent a shot, provide specific feedback on what's wrong, see if it improves.

## The time tradeoff

Effective delegation isn't about minimizing your coding time. It's about maximizing total productivity.

Sometimes the "slower" approach of coding yourself is actually faster when you account for:

- Time spent prompting and reprompting
- Time reviewing and validating
- Time fixing agent mistakes
- Context switching overhead

Build intuition for when delegation pays off in your specific context.

## Track your patterns

Notice what works:

- Which task types succeed consistently?
- Where do you often take over?
- What prompts get good results?

Your patterns may differ from someone else's. Learn your own.

---

## Further reading

_Links to external resources coming soon:_

- Delegation frameworks
- Time tracking studies
- Community experiences and patterns
