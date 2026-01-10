---
title: Sample Policies
description: Templates for AI usage guidelines and code review policies
sidebar:
  order: 3
---

Starting points for organizational policies around AI-assisted development. Adapt these to your specific context.

## AI Usage Policy Template

### Purpose

This policy establishes guidelines for the use of AI coding assistants and agents in software development at [Organization].

### Scope

This policy applies to all engineering staff using AI tools for work-related activities.

### Approved tools

**Approved for general use:**

- [List approved tools]

**Approved with restrictions:**

- [List tools with specific restrictions]

**Not approved:**

- [List prohibited tools and reasons]

### Acceptable use

**Permitted uses:**

- Code generation and completion
- Test generation
- Documentation assistance
- Code explanation and learning
- Debugging assistance
- Refactoring suggestions

**Prohibited uses:**

- Sharing proprietary code with unapproved tools
- Using AI for code in [restricted areas, e.g., security-critical paths]
- Automated commits without human review
- Replacing required security reviews

### Data handling

- Do not share customer data with AI tools
- Do not share credentials, keys, or secrets
- Do not share code from [restricted repositories]
- Be aware that prompts may be stored/processed externally

### Quality requirements

- All AI-generated code must be reviewed before commit
- AI assistance does not reduce code review requirements
- Developers are responsible for code they commit regardless of origin

### Disclosure

- [Optional: Disclosure requirements for AI-assisted code]

### Updates

This policy will be reviewed [quarterly/annually] and updated as tools and practices evolve.

---

## Code Review Policy Addendum: AI-Generated Code

### Purpose

Guidelines for reviewing code that was generated or significantly modified by AI assistants.

### Applicability

These guidelines apply when AI tools contributed substantially to the code being reviewed.

### Reviewer responsibilities

**Standard review requirements still apply:**

- Functionality meets requirements
- Code follows style guidelines
- Tests are adequate
- Documentation is updated
- No security vulnerabilities

**Additional considerations for AI code:**

- [ ] Verify all APIs/methods actually exist
- [ ] Check for hallucinated functionality
- [ ] Ensure consistency with project patterns
- [ ] Watch for overly complex solutions
- [ ] Verify error handling is complete
- [ ] Check edge case coverage
- [ ] Confirm no hardcoded values that should be configurable

### Author responsibilities

When submitting AI-assisted code:

- Review the code yourself first
- Understand what the code does
- Verify it compiles/runs
- Run existing tests
- Be prepared to explain any part of it
- [Optional: Disclose AI involvement]

### Escalation

If reviewer suspects quality issues with AI-generated code:

- Request additional testing
- Require senior review
- Flag patterns for team discussion

---

## AI Incident Response Addendum

### Definition

An AI-related incident is any production issue where AI-generated code was a contributing factor.

### Response process

Follow standard incident response, with additions:

1. **During incident**

   - Note if AI-generated code is involved
   - Don't delay resolution for attribution

2. **Post-incident**

   - Document AI involvement in post-mortem
   - Analyze whether review process should have caught issue
   - Identify if this is a pattern

3. **Follow-up**
   - Update review checklists if needed
   - Share learnings (without blame)
   - Adjust tooling/training as appropriate

### Tracking

Track AI involvement in incidents for pattern analysis:

- Tool used
- Type of issue
- Could it have been caught in review?
- Process improvements identified

---

## Prompt Template Library

### Feature implementation

```
Implement [feature name] in [file/module].

Requirements:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

Context:
- This is part of [larger feature/system]
- Follow patterns in [example file/module]
- Use [specific libraries/frameworks]

Constraints:
- Don't modify [protected areas]
- Maintain backward compatibility with [existing code]
- Follow [coding standards/style guide]

Acceptance criteria:
- [Criterion 1]
- [Criterion 2]
```

### Bug fix

```
Fix bug: [Bug description]

Reproduction:
[Steps to reproduce]

Expected behavior:
[What should happen]

Actual behavior:
[What currently happens]

Root cause (if known):
[Analysis]

Constraints:
- Fix should be minimal
- Don't change [unrelated areas]
- Add test to prevent regression
```

### Test generation

```
Generate tests for [function/class/module].

Test framework: [framework name]
Test style: [describe style expectations]

Coverage requirements:
- Happy path scenarios
- Edge cases: [list specific edges]
- Error conditions: [list error scenarios]
- [Additional requirements]

Follow patterns in [example test file].
```

### Code review request

```
Review this code for:
- Correctness
- Security issues
- Performance concerns
- Code style
- Edge case handling

Context:
[What this code does]

Specific concerns:
[Areas you want extra attention on]
```

---

_These templates are starting points. Customize for your organization's specific needs, tools, and compliance requirements._
