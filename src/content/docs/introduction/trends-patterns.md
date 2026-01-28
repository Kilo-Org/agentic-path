---
title: AI Coding Trends & Patterns
description: Emerging patterns and techniques in AI-assisted development
sidebar:
  order: 5
---

A collection of emerging patterns, techniques, and methodologies in AI-assisted software development. These approaches represent evolving best practices from the community.

## Development Patterns

### Ralph Wiggum

An AI loop technique for running coding agents in continuous loops where the AI iterates on its own output repeatedly until tests pass and the code compiles. This approach uses "stop hooks" to prevent premature exit, forcing the AI to refine its work through multiple passes instead of attempting perfection on the first try.

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

- READ: [Ralph Wiggum as a Software Engineer](https://ghuntley.com/ralph/) - Original concept
- READ: [Ralph Wiggum - AI Loop Technique for Claude Code](https://awesomeclaude.ai/ralph-wiggum) - Complete guide and examples
- READ: [11 Tips For AI Coding With Ralph Wiggum](https://www.aihero.dev/tips-for-ai-coding-with-ralph-wiggum) - Practical tips for autonomous loops
- READ: [The Ralph Wiggum Approach: Running AI Coding Agents for Hours](https://dev.to/sivarampg/the-ralph-wiggum-approach-running-ai-coding-agents-for-hours-not-minutes-57c1) - DEV Community tutorial
- TRY: [GitHub - vercel-labs/ralph-loop-agent](https://github.com/vercel-labs/ralph-loop-agent) - Open source implementation

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

- READ: [Spec-driven development with AI - GitHub Blog](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/) - Official announcement and overview
- TRY: [GitHub - github/spec-kit](https://github.com/github/spec-kit) - Official spec-kit repository
- READ: [Spec-Driven Development Tutorial using GitHub Spec Kit](https://www.scalablepath.com/machine-learning/spec-driven-development-workflow) - Real-world tutorial with examples
- READ: [Diving Into Spec-Driven Development With GitHub Spec Kit](https://developer.microsoft.com/blog/spec-driven-development-spec-kit) - Microsoft Developer Blog

### Research, Plan, Implement (RPI)

A three-phase framework for transforming chaotic AI interactions into predictable, high-quality software delivery. Instead of jumping straight to code generation, RPI breaks work into focused phases with built-in validation: research what exists, plan the change systematically, then execute mechanically.

→ **[Read the full RPI guide](/introduction/patterns/rpi/)**

**The three phases:**

1. **Research**: Document what exists today—no opinions, no suggestions, just facts.
2. **Plan**: Design the change with atomic tasks, success criteria, and validation checkpoints.
3. **Implement**: Execute mechanically, verify after each phase, and update progress tracking.

**Key principle:** Planning without research leads to bad assumptions. RPI uses FAR (Factual, Actionable, Relevant) and FACTS (Feasible, Atomic, Clear, Testable, Scoped) validation scales to ensure readiness before proceeding.

**Resources:**

- READ: [Research → Plan → Implement Pattern | goose](https://block.github.io/goose/docs/tutorials/rpi/) - Official tutorial with demonstrations
- READ: [Introducing the RPI Strategy](https://patrickarobinson.com/blog/introducing-rpi-strategy/) - Creator's blog post explaining the approach
- WATCH: [The RPI workflow - Build Wiz AI Show (Podcast)](https://open.spotify.com/episode/1OdIYj0SZzhyzFGGoVuELP) - Audio discussion on advanced AI coding

## Prompting Patterns

### Stepwise / Iterative Prompting

In this pattern, you break complex tasks into small, manageable chunks with feedback loops between each iteration, rather than requesting monolithic code blocks.

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

- READ: [How to write better prompts for AI code generation](https://graphite.com/guides/better-prompts-ai-code) - Best practices guide
- READ: [Iterative Prompt Refinement: Step-by-Step Guide](https://latitude-blog.ghost.io/blog/iterative-prompt-refinement-step-by-step-guide/) - Structured experimentation approach
- READ: [What is Iterative Prompting? | IBM](https://www.ibm.com/think/topics/iterative-prompting) - Enterprise perspective on best practices

### Context Packing / Brain Dumps

This is the practice of frontloading all relevant context (codebase architecture, API docs, constraints, invariants) into prompts before coding.

**What to include:**

- Architecture overview
- API documentation
- Constraints and requirements
- Existing patterns and conventions
- Known gotchas or edge cases

**Benefit:** Reduces hallucinations and improves first-attempt accuracy.

**Resources:**

- READ: [How to Manage Context in AI Coding Workflows](https://refactoring.fm/p/managing-context-for-ai-coding) - Context management strategies
- READ: [16x Prompt - AI Coding with Advanced Context Management](https://prompt.16x.engineer/) - Tool and methodology
- READ: [Context Engineering: Bringing Engineering Discipline to Prompts](https://addyo.substack.com/p/context-engineering-bringing-engineering) - Engineering approach to context

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

- READ: [Chain-of-Thought Prompting | Prompt Engineering Guide](https://www.promptingguide.ai/techniques/cot) - Comprehensive technique guide
- READ: [Chain of Thought Prompting Explained | Codecademy](https://www.codecademy.com/article/chain-of-thought-cot-prompting) - Tutorial with examples
- READ: [Chain-of-Thought Prompting: Techniques, Tips, and Code Examples](https://www.helicone.ai/blog/chain-of-thought-prompting) - Implementation guide with code

## Development Styles

### Vibe Coding / Prompt-First Development

In this style of AI-assisted development, developers describe what they want in natural language and iterate with the AI.

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

- TRY: [Vibe Coding Prompts | VibeCodex](https://vibecodex.io/) - Curated prompt directory
- READ: [The 50 Most Important Vibe Coding Prompts to Learn First](https://hexshift.medium.com/the-50-most-important-vibe-coding-prompts-to-learn-first-9a1e2a6d5623) - Essential prompt library
- READ: [8 Vibe Coding Prompt Techniques for Web Development](https://strapi.io/blog/vibe-coding-prompt-techniques) - Practical techniques
- READ: [Mastering prompting techniques for vibe coding](https://medium.com/@zahwahjameel26/mastering-prompting-techniques-for-vibe-coding-e140ad07603b) - Advanced prompting guide

### Objective-Validation Protocol

This is a systematic approach to defining clear success criteria and validation objectives for AI-generated code, establishing performance thresholds and tracking validation goals across iterations.

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

## Agentic Tooling

### Moltbot (formerly Clawdbot)

An open-source tool that brings Claude AI capabilities directly into Slack, enabling team-wide AI assistance for collaborative workflows. Moltbot exemplifies the trend of embedding agentic AI into existing team communication platforms rather than requiring context switches to separate tools.

**Key characteristics:**

- Native Slack integration for seamless team adoption
- Claude-powered responses for coding questions, documentation, and problem-solving
- Configurable with [Kilo Gateway](https://kilo.ai) for enhanced capabilities and usage management
- Open-source and self-hostable for enterprise control

**Use cases:**

- Team-wide AI assistance without leaving Slack
- Quick code reviews and explanations in channel discussions
- Documentation lookups and technical Q&A
- Onboarding support for new team members

**Resources:**

- READ: [Kilo Gateway Supercharges Moltbot](https://blog.kilo.ai/p/kilo-gateway-supercharges-moltbot-fka-clawdbot) - Integration guide with Kilo Gateway
- TRY: [GitHub - kiloai/moltbot](https://github.com/kiloai/moltbot) - Open source repository

## Adoption Considerations

When evaluating these patterns, consider:

- **Team maturity**: Some patterns require more AI experience.
- **Project phase**: Different patterns suit exploration vs. production.
- **Code criticality**: Safety-critical code needs more rigorous approaches.
- **Team size**: Collaborative work may need more structured patterns.

---

_This is a living document. Patterns will evolve as the community learns what works._