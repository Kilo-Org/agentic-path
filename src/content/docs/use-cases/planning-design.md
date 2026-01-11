---
title: Planning & Design
description: Using agents for requirements, architecture, and system design
sidebar:
  order: 1
---

Agents accelerate planning by exploring options, surfacing patterns, and drafting specifications—without replacing stakeholder judgment.

## Requirements & Planning

### Where agents help

**Breaking down ambiguity**

- "What questions should we answer before implementing [feature]?"
- "What edge cases should we consider for [requirement]?"
- "Break down [epic] into implementable user stories"

**Research and exploration**

- "What approaches exist for [problem]? Summarize pros and cons."
- "What are common pitfalls when implementing [feature type]?"

Treat this as research assistance, not authoritative answers.

**Specification drafting:** API contracts, data models, interface definitions, acceptance criteria. These drafts need human refinement, but they accelerate the starting point.

**Estimation support:** "Based on this spec, what are the major implementation tasks?" Agents decompose work; estimation remains human judgment.

### Where agents struggle

- **Stakeholder intent** — They can't replace stakeholder conversations
- **Organizational context** — Team ownership, historical decisions, constraints
- **Prioritization** — They enumerate options, but can't tell you what matters most

### Prompt patterns

**User story refinement:**
"Given this requirement: [paste requirement]. Generate user stories in standard format (As a... I want... So that...). Include acceptance criteria for each."

**Risk identification:**
"We're planning to implement [feature]. What technical risks should we consider? What could go wrong?"

## Architecture & Design

### What agents offer

**Broad pattern knowledge:** Common approaches for your problem type, pattern variations and tradeoffs, anti-patterns to avoid. Doesn't replace experience, but accelerates exploration.

**Articulation:** Generate diagrams from descriptions, document decisions, create viewpoints for different audiences.

**Challenge and critique:** "What could go wrong with this design?" "What am I not considering?" They surface considerations you might miss.

### What agents can't do

- **Make decisions** — They lack context about your team, constraints, and what you're optimizing for
- **Understand evolution** — They see a snapshot, not trajectory (why things are the way they are)
- **Navigate tradeoffs** — They enumerate options, not which tradeoff fits your situation

### Prompt patterns

**Design exploration:**
"I need to design [type of system]. What architectural patterns are commonly used? For each, what are the key tradeoffs?"

**Design critique:**
"Here's my proposed architecture for [system]: [description]. What potential issues should I consider? What am I missing?"

**ADR drafting:**
"Help me write an ADR for deciding to use [approach] instead of [alternative]. Context: [provide context]."

**Diagram generation:**
"Create a [type] diagram showing [components and relationships]. Use [format, e.g., Mermaid syntax]."

## Resources

### Specifications & Planning

- [Spec-Driven Development – Al Harris, Amazon Kiro](https://www.youtube.com/watch?v=HY_JyxAZsiE) - How specs enable reproducible AI delivery
- [The New Code – Sean Grove, OpenAI](https://www.youtube.com/watch?v=8rABwKRsec4) - Why specifications are becoming the fundamental unit of programming
- [Spec Kit](https://github.com/github/spec-kit) - GitHub's spec-driven development framework

### Case studies

- [AI in Product Development: Netflix, BMW, PepsiCo](https://www.virtasant.com/ai-today/ai-in-product-development-netflix-bmw) - Case studies of AI in product planning
