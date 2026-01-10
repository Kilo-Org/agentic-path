---
title: Requirements & Planning
description: Using agents in the earliest phases of development
sidebar:
  order: 1
---

Agents can help before you write a single line of code. The requirements and planning phase offers unique opportunities.

## Where agents help

### Breaking down ambiguity

Got a vague requirement? Agents can help explore what it means:

- "What questions should we answer before implementing [feature]?"
- "What are the edge cases we should consider for [requirement]?"
- "Break down [epic] into implementable user stories"

Agents won't replace stakeholder conversations, but they can prepare you for them.

### Research and exploration

Need to understand a problem space?

- "What approaches exist for [problem]? Summarize pros and cons."
- "What similar systems exist? How do they handle [aspect]?"
- "What are common pitfalls when implementing [feature type]?"

Treat this as research assistance, not authoritative answers. Verify important claims.

### Specification drafting

Agents can generate first-draft specifications:

- API contract drafts based on requirements
- Data model proposals
- Interface definitions
- Acceptance criteria

These drafts need human refinement, but they accelerate the starting point.

### Estimation assistance

- "Based on this spec, what are the major implementation tasks?"
- "What complexity factors should we consider?"
- "What dependencies are implied?"

Agents can help decompose work, though estimation remains a human judgment call.

## Where agents struggle

### Stakeholder intent

Agents don't know your users, your business context, or what your stakeholders actually mean. They can help you organize thinking, but can't replace stakeholder engagement.

### Organizational context

Which team owns what? What's already been tried? What constraints exist? Agents lack this knowledge unless you provide it.

### Prioritization

Agents can help enumerate options. They can't tell you what matters most for your specific situation.

### Politics and constraints

Unwritten rules, relationship dynamics, resource constraints—humans navigate these.

## Practical applications

### User story refinement

**Input:** Vague requirement
**Prompt:** "Given this requirement: [paste requirement]. Generate user stories in standard format (As a... I want... So that...). Include acceptance criteria for each."
**Output:** First-draft stories to refine

### Risk identification

**Input:** Feature concept
**Prompt:** "We're planning to implement [feature]. What technical risks should we consider? What could go wrong?"
**Output:** Risk checklist to validate

### Sprint planning support

**Input:** Set of stories
**Prompt:** "Given these stories: [paste stories]. Suggest a logical implementation order considering dependencies."
**Output:** Sequencing recommendation to discuss

### Technical feasibility

**Input:** Proposed approach
**Prompt:** "Is this approach feasible? [describe approach]. What alternatives exist? What are the tradeoffs?"
**Output:** Analysis to inform decision

## Integration with planning processes

### In sprint planning

- Pre-generate story breakdowns
- Use agent analysis as planning input (not source of truth)
- Let agent help with task decomposition during meeting

### In backlog refinement

- Generate acceptance criteria drafts before refinement sessions
- Identify missing requirements or ambiguous areas
- Prepare questions for stakeholders

### In roadmap discussions

- Help articulate technical implications of roadmap choices
- Generate rough sizing for comparison
- Identify dependencies between initiatives

## Resources

### Essential

- [Spec-Driven Development – Al Harris, Amazon Kiro](https://www.youtube.com/watch?v=HY_JyxAZsiE) - How specs enable reproducible AI delivery
- [The New Code – Sean Grove, OpenAI](https://www.youtube.com/watch?v=8rABwKRsec4) - Why specifications are becoming the fundamental unit of programming
- [Spec Kit](https://github.com/github/spec-kit) - GitHub's spec-driven development framework

### Deep dives

- [AI in Product Development: Netflix, BMW, PepsiCo](https://www.virtasant.com/ai-today/ai-in-product-development-netflix-bmw) - Case studies of AI in product planning
- [AI Product Development: Why Founders Are Fascinated](https://www.techmagic.co/blog/ai-product-development) - AI reshaping ideation to launch
