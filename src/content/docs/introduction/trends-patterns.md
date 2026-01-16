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

→ **[Read the full Ralph Wiggum guide](/introduction/patterns/ralph-wiggum/)**

**Key characteristics:**

- Deterministically bad failures (predictable and informative)
- Automatic retry logic
- Loop continues until completion criteria met
- Success depends on good prompt engineering

**Use cases:**

- Refactoring loops (duplicate code detection and cleanup)
- Linting loops (incremental error fixing)
- Entropy reduction (code smell removal)

**Resources:**

- [Ralph Wiggum as a Software Engineer](https://ghuntley.com/ralph/) - Original concept
- [Ralph Wiggum - AI Loop Technique for Claude Code](https://awesomeclaude.ai/ralph-wiggum) - Complete guide and examples
- [11 Tips For AI Coding With Ralph Wiggum](https://www.aihero.dev/tips-for-ai-coding-with-ralph-wiggum) - Practical tips for autonomous loops
- [The Ralph Wiggum Approach: Running AI Coding Agents for Hours](https://dev.to/sivarampg/the-ralph-wiggum-approach-running-ai-coding-agents-for-hours-not-minutes-57c1) - DEV Community tutorial
- [GitHub - vercel-labs/ralph-loop-agent](https://github.com/vercel-labs/ralph-loop-agent) - Open source implementation

### Spec-Driven Development (Spec Kit)

A methodology that treats specifications as executable, living artifacts that directly drive AI agent implementation. Instead of jumping straight to code, you define intent in a specification that becomes the source of truth—preventing the "vibe coding" trap where agents build something that compiles but doesn't match what you actually wanted.

→ **[Read the full Spec-Driven Development guide](/introduction/patterns/spec-driven-development/)**

**Key characteristics:**

- Specifications defined upfront as living documents
- Phased workflow: Constitution → Specify → Plan → Tasks → Implement
- Multi-variant exploration from same spec
- Works with GitHub Copilot, Claude Code, Gemini CLI, Cursor, and more

**Use cases:**

- Greenfield development with clear intent
- Feature work in complex existing codebases
- Legacy modernization
- High-stakes features (payments, healthcare, safety-critical)

**Resources:**

- [Spec-driven development with AI - GitHub Blog](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/) - Official announcement and overview
- [GitHub - github/spec-kit](https://github.com/github/spec-kit) - Official spec-kit repository
- [Spec-Driven Development Tutorial using GitHub Spec Kit](https://www.scalablepath.com/machine-learning/spec-driven-development-workflow) - Real-world tutorial with examples
- [Diving Into Spec-Driven Development With GitHub Spec Kit](https://developer.microsoft.com/blog/spec-driven-development-spec-kit) - Microsoft Developer Blog

### Research, Plan, Implement (RPI)

A three-phase framework for transforming chaotic AI interactions into predictable, high-quality software delivery. Instead of jumping straight to code generation, RPI breaks work into focused phases with built-in validation: research what exists, plan the change systematically, then execute mechanically.

→ **[Read the full RPI guide](/introduction/patterns/rpi/)**

**The three phases:**

1. **Research**: Document what exists today—no opinions, no suggestions, just facts
2. **Plan**: Design the change with atomic tasks, success criteria, and validation checkpoints
3. **Implement**: Execute mechanically, verify after each phase, update progress tracking

**Key principle:** Planning without research leads to bad assumptions. RPI uses FAR (Factual, Actionable, Relevant) and FACTS (Feasible, Atomic, Clear, Testable, Scoped) validation scales to ensure readiness before proceeding.

**Resources:**

- [Research → Plan → Implement Pattern | goose](https://block.github.io/goose/docs/tutorials/rpi/) - Official tutorial with demonstrations
- [Introducing the RPI Strategy](https://patrickarobinson.com/blog/introducing-rpi-strategy/) - Creator's blog post explaining the approach
- [The RPI workflow - Build Wiz AI Show (Podcast)](https://open.spotify.com/episode/1OdIYj0SZzhyzFGGoVuELP) - Audio discussion on advanced AI coding

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

**Resources:**

- [How to write better prompts for AI code generation](https://graphite.com/guides/better-prompts-ai-code) - Best practices guide
- [Iterative Prompt Refinement: Step-by-Step Guide](https://latitude-blog.ghost.io/blog/iterative-prompt-refinement-step-by-step-guide/) - Structured experimentation approach
- [What is Iterative Prompting? | IBM](https://www.ibm.com/think/topics/iterative-prompting) - Enterprise perspective on best practices

### Context Packing / Brain Dumps

The practice of frontloading all relevant context (codebase architecture, API docs, constraints, invariants) into prompts before coding.

**What to include:**

- Architecture overview
- API documentation
- Constraints and requirements
- Existing patterns and conventions
- Known gotchas or edge cases

**Benefit:** Reduces hallucinations and improves first-attempt accuracy.

**Resources:**

- [How to Manage Context in AI Coding Workflows](https://refactoring.fm/p/managing-context-for-ai-coding) - Context management strategies
- [16x Prompt - AI Coding with Advanced Context Management](https://prompt.16x.engineer/) - Tool and methodology
- [Context Engineering: Bringing Engineering Discipline to Prompts](https://addyo.substack.com/p/context-engineering-bringing-engineering) - Engineering approach to context

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

**Resources:**

- [Chain-of-Thought Prompting | Prompt Engineering Guide](https://www.promptingguide.ai/techniques/cot) - Comprehensive technique guide
- [Chain of Thought Prompting Explained | Codecademy](https://www.codecademy.com/article/chain-of-thought-cot-prompting) - Tutorial with examples
- [Chain-of-Thought Prompting: Techniques, Tips, and Code Examples](https://www.helicone.ai/blog/chain-of-thought-prompting) - Implementation guide with code

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

**Resources:**

- [Vibe Coding Prompts | VibeCodex](https://vibecodex.io/) - Curated prompt directory
- [The 50 Most Important Vibe Coding Prompts to Learn First](https://hexshift.medium.com/the-50-most-important-vibe-coding-prompts-to-learn-first-9a1e2a6d5623) - Essential prompt library
- [8 Vibe Coding Prompt Techniques for Web Development](https://strapi.io/blog/vibe-coding-prompt-techniques) - Practical techniques
- [Mastering prompting techniques for vibe coding](https://medium.com/@zahwahjameel26/mastering-prompting-techniques-for-vibe-coding-e140ad07603b) - Advanced prompting guide

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
