---
title: Validating Agent Output
description: How to review AI-generated code effectively
sidebar:
  order: 3
---

Agent output looks plausible. That's the danger. Learning to validate effectively is what separates productive agentic engineers from those who ship bugs faster.

## The validation mindset

Treat agent code like code from a talented junior developer:

- Probably works for the happy path
- Might miss edge cases
- Could have subtle logic errors
- May not follow your conventions

Never assume correctness because it compiled or tests pass.

## The validation checklist

### 1. Does it actually solve the problem?

Read the code. Don't just run it.

- Does it address the actual requirement, not just the prompt?
- Would this solution work in production, not just in a demo?
- Are the assumptions it made reasonable?

### 2. Check the edges

Agents often nail the main path and miss the edges:

- Empty inputs
- Null/undefined values
- Boundary conditions (off-by-one, max values)
- Error cases
- Concurrent access

Write a quick mental test case for each edge before accepting.

### 3. Look for hallucinations

Agents invent things that don't exist:

- API methods that aren't real
- Parameters that don't work as assumed
- Libraries imported but not installed
- Functions called with wrong signatures

If code references something unfamiliar, verify it exists.

### 4. Security review

Even basic security checking catches most agent mistakes:

- Input validation present?
- No SQL/command injection?
- Authentication/authorization checked?
- Sensitive data not logged or exposed?
- No hardcoded secrets?

### 5. Style and conventions

Less critical but worth checking:

- Follows existing patterns in your codebase?
- Names are clear and consistent?
- No unnecessary complexity?
- Error messages are helpful?

## Validation tools

Use tooling to catch what humans miss:

**Run tests** - Even if they pass, add tests for edges you identified.

**Static analysis** - Let the linter catch style issues and common bugs.

**Type checking** - TypeScript, mypy, etc. catch type mismatches.

**Manual testing** - Actually run the code. Click through the UI. Hit the API.

## When to reject output

Reject when:

- The approach is fundamentally wrong (even if it works)
- Too much refactoring needed to bring it up to standard
- Security issues that need redesign
- It would confuse future developers

Accept with modifications when:

- Logic is sound but style needs adjustment
- Minor edge case handling needed
- Some test cases missing

Accept as-is when:

- Meets requirements
- Handles edges reasonably
- Follows conventions
- Passes security sniff test

## Building validation skills

Like code review, validation improves with practice:

- Keep a mental catalog of agent failure patterns
- Review your own rejections—were they valid?
- Notice what you miss that causes bugs later
- Share patterns with your team

---

## Further reading

_Links to external resources coming soon:_

- Code review checklist for AI code
- Common hallucination patterns by model
- Security review guides
