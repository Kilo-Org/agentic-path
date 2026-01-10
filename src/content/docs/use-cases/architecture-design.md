---
title: Architecture & Design
description: Agents as thinking partners for system design
sidebar:
  order: 2
---

Architecture is fundamentally a human responsibility. But agents can be valuable thinking partners in the design process.

## What agents offer

### Broad pattern knowledge

Agents have seen many architectures. They can quickly surface:

- Common approaches to your type of problem
- Pattern variations and tradeoffs
- Anti-patterns to avoid

This doesn't replace experience, but it accelerates exploration.

### Articulation assistance

Architecture often lives in engineers' heads. Agents help externalize it:

- Generate diagrams from descriptions
- Document decisions and rationale
- Create viewpoints for different audiences

### Challenge and critique

Agents make decent rubber ducks:

- "What could go wrong with this design?"
- "What am I not considering?"
- "How would [alternative approach] compare?"

They'll surface considerations you might miss—though they'll also miss things obvious to you.

### Documentation generation

Architecture documentation is often neglected. Agents reduce the friction:

- ADR (Architecture Decision Record) drafting
- System diagrams
- API documentation
- Onboarding guides

## What agents can't do

### Make architectural decisions

Agents lack context:

- Your team's capabilities
- Your organization's constraints
- Historical decisions and their reasons
- What you're optimizing for

They can inform decisions. They can't make them.

### Understand system evolution

Architecture is about change over time. Agents see a snapshot, not a trajectory:

- Why things are the way they are
- What's being migrated from/to
- Technical debt that's strategic vs. accidental

### Navigate tradeoffs

Every architectural choice trades something for something else. Agents can enumerate tradeoffs. They can't tell you which tradeoff fits your situation.

## Practical applications

### Design exploration

**Scenario:** Starting a new service/system.

**Approach:**

1. Describe requirements and constraints to agent
2. Ask for 3-4 architectural approaches
3. For each, ask about tradeoffs
4. Use as input for design discussions

**Not:** Let agent pick the architecture.

### Design review prep

**Scenario:** Preparing for architecture review.

**Approach:**

1. Describe your proposed design
2. "What questions might reviewers ask?"
3. "What are the weaknesses in this design?"
4. Prepare responses before the review

### API design

**Scenario:** Designing a new API.

**Approach:**

1. Describe the domain and operations
2. Generate initial API contract
3. Ask for alternative approaches
4. Refine based on your constraints

### Migration planning

**Scenario:** Planning a significant refactor or migration.

**Approach:**

1. Describe current state and target state
2. "What are the steps to migrate safely?"
3. "What can go wrong at each step?"
4. Validate against your specific context

## Working prompts

**Pattern exploration:**
"I need to design [type of system]. What architectural patterns are commonly used? For each, what are the key tradeoffs?"

**Design critique:**
"Here's my proposed architecture for [system]: [description]. What potential issues should I consider? What am I missing?"

**Decision documentation:**
"Help me write an ADR for deciding to use [approach] instead of [alternative]. Context: [provide context]."

**Diagram generation:**
"Create a [type] diagram showing [components and relationships]. Use [format, e.g., Mermaid syntax]."

---

## Further reading

_Links to external resources coming soon:_

- Architecture decision records (ADRs)
- System design resources
- Pattern catalogs
