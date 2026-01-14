---
title: AI Coding Trends & Patterns
description: Emerging patterns and techniques in AI-assisted development
sidebar:
  order: 5
---

A collection of emerging patterns, techniques, and methodologies in AI-assisted software development. These approaches represent evolving best practices from the community.

## Development Patterns

### Ralph Wiggum
A technique for running AI coding agents in continuous loops where the AI iterates on its own output repeatedly until tests pass and the code compiles. Uses "stop hooks" to prevent premature exit, forcing the AI to refine its work through multiple passes instead of attempting perfection on the first try.

**Key characteristics:**
- Deterministically bad failures (predictable and informative)
- Automatic retry logic
- Loop continues until completion criteria met
- Success depends on good prompt engineering

**Use cases:**
- Refactoring loops (duplicate code detection and cleanup)
- Linting loops (incremental error fixing)
- Entropy reduction (code smell removal)

### Spec-driven Development (spec-kit)
Intent-driven development where specifications define the "what" before the "how" using guardrails and organizational principles. Multi-step refinement rather than one-shot code generation from prompts, relying on advanced AI model capabilities for specification interpretation.

**Key characteristics:**
- Specifications defined upfront
- Structured process with guardrails
- Multi-step refinement
- Works with GitHub Copilot, Claude Code, Gemini CLI

**Benefits:**
- Clearer requirements before implementation
- Better alignment with business goals
- More maintainable code
- Reduced back-and-forth iterations

### Research, Plan, Implement (RPI)
A three-phase workflow where AI first researches the codebase and requirements, then creates a phased implementation plan with atomic tasks, and finally implements the solution. Emphasizes research before planning to avoid false assumptions.

**The three phases:**

1. **Research**: AI explores the codebase, understands patterns, discovers constraints
2. **Plan**: Create phased approach with atomic tasks (markdown checkboxes)
3. **Implement**: Execute the plan with context from research

**Key principle:** Planning without research leads to bad assumptions. RPI begins with research to ground plans in reality.

## Prompting Patterns

### Stepwise / Iterative Prompting
Breaking complex tasks into small, manageable chunks with feedback loops between each iteration, rather than requesting monolithic code blocks.

**Benefits:**
- Easier to debug and validate
- Better context management
- More control over direction
- Reduced cognitive load

**Example approach:**
1. "First, update the type definitions"
2. Review and approve
3. "Now update the implementation to match"
4. Review and approve
5. "Finally, add tests"

### Context Packing / Brain Dumps
The practice of frontloading all relevant context (codebase architecture, API docs, constraints, invariants) into prompts before coding.

**What to include:**
- Architecture overview
- API documentation
- Constraints and requirements
- Existing patterns and conventions
- Known gotchas or edge cases

**Benefit:** Reduces hallucinations and improves first-attempt accuracy.

### Chain-of-Thought Prompting
Asking AI to explain its reasoning step-by-step before providing code, similar to requiring a design doc.

**Example prompt structure:**
```
Before writing code, explain:
1. What problem you're solving
2. Your approach and why
3. Key design decisions
4. Potential trade-offs

Then provide the implementation.
```

**Benefits:**
- Catches logical errors early
- Makes reasoning auditable
- Helps humans understand approach
- Often improves code quality

## Development Styles

### Vibe Coding / Prompt-First Development
A style of AI-assisted development where developers describe what they want in natural language and iterate with the AI.

**Characteristics:**
- Natural language specifications
- Rapid iteration
- Learn by doing
- Less upfront planning

**When it works:**
- Prototyping and exploration
- Well-understood domains
- Individual developer projects

**Risks:**
- Accumulated technical debt
- Unclear requirements
- Harder to maintain long-term

### Objective-Validation Protocol
A systematic approach to defining clear success criteria and validation objectives for AI-generated code, establishing performance thresholds and tracking validation goals across iterations.

**Components:**
- Clear success criteria
- Performance thresholds
- Validation checkpoints
- Tracking across iterations

**Benefits:**
- Measurable progress
- Objective quality gates
- Easier debugging
- Better documentation

## Adoption Considerations

When evaluating these patterns:

- **Team maturity**: Some patterns require more AI experience
- **Project phase**: Different patterns suit exploration vs. production
- **Code criticality**: Safety-critical code needs more rigorous approaches
- **Team size**: Collaborative work may need more structured patterns

---

_This is a living document. Patterns will evolve as the community learns what works._
