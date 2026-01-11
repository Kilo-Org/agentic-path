---
title: Working with Agents
description: Task decomposition and validating output
sidebar:
  order: 2
---

The biggest mistake new agentic engineers make: asking for too much at once.

## Why decomposition matters

Agents work best with bounded, clear tasks. When you ask for too much:

- Context overflows and early details get lost
- Errors compound as later steps build on earlier mistakes
- Recovery from failures wastes everything before

Small tasks mean faster feedback, easier debugging, better results.

## The three-part rule

Before prompting, ask: Can I describe this in three parts?

1. **What** — The specific outcome I want
2. **Where** — Which files/functions to touch
3. **Constraints** — What not to change

If you can't articulate all three, the task is probably too big.

## Decomposition strategies

### Vertical slicing

Cut by feature path, not technical layer.

**Instead of:**

- "Create the database schema"
- "Build the API endpoints"
- "Create the frontend forms"

**Try:**

- "Create user creation flow: schema, endpoint, and basic form"
- "Add user editing: update endpoint and form"
- "Add user deletion: endpoint with confirmation"

Each slice is complete and testable.

### Dependency ordering

When tasks have dependencies, make them explicit:

1. Define the data model types (no external deps)
2. Build the storage layer (depends on types)
3. Create the API (depends on storage)
4. Build the UI (depends on API)

Each step should work in isolation before moving on.

## Sizing tasks

**Too small:** "Add a semicolon to line 47" — faster to do yourself

**Too big:** "Build the authentication system" — too many decisions

**Just right:** "Create a login form that posts to /api/auth/login and stores the token in localStorage" — clear scope, testable result

## The prompt template

```
Task: [What you want done]

Context:
- [Relevant background]
- [Related files or patterns to follow]

Constraints:
- [What not to change]
- [Patterns to follow]

Success criteria:
- [How you'll know it's done]
```

## Validating output

Agent output looks plausible. That's the danger. Treat agent code like code from a talented junior: probably works for the happy path, might miss edge cases, may not follow your conventions.

### Validation checklist

**1. Does it solve the problem?**
Read the code—don't just run it. Does it address the actual requirement, not just the prompt?

**2. Check the edges:**

- Empty inputs
- Null/undefined values
- Boundary conditions (off-by-one, max values)
- Error cases
- Concurrent access

**3. Look for hallucinations:**

- API methods that don't exist
- Parameters that don't work as assumed
- Functions called with wrong signatures

If something's unfamiliar, verify it exists.

**4. Security review:**

- Input validation present?
- No SQL/command injection?
- Auth/authorization checked?
- Sensitive data not logged?
- No hardcoded secrets?

**5. Style and conventions:**

- Follows existing patterns?
- Names clear and consistent?
- Error messages helpful?

### When to reject

**Reject when:**

- Approach is fundamentally wrong (even if it works)
- Too much refactoring needed to meet standards
- Security issues requiring redesign

**Accept with modifications when:**

- Logic sound but style needs adjustment
- Minor edge case handling needed

**Accept as-is when:**

- Meets requirements, handles edges, follows conventions, passes security check

## Resources

### Essential

- [Embracing the parallel coding agent lifestyle](https://simonwillison.net/2025/Oct/5/parallel-coding-agents/) - Running multiple agents simultaneously
- [Spec-Driven Development – Al Harris, Amazon Kiro](https://www.youtube.com/watch?v=HY_JyxAZsiE) - How specs enable reproducible AI delivery
- [Your job is to deliver code you have proven to work](https://simonwillison.net/2025/Dec/18/code-proven-to-work/) - Why testing AI code is non-negotiable

### Deep dives

- [Spec Kit](https://github.com/github/spec-kit) - GitHub's framework for spec-driven development
- ["I shipped code I don't understand" – Jake Nations, Netflix](https://www.youtube.com/watch?v=eIoohUmYpGI) - Three-phase methodology to avoid "vibecoding to disaster"
- [No Vibes Allowed – Dex Horthy, HumanLayer](https://www.youtube.com/watch?v=rmvDxxNubIg) - Frequent intentional compaction for large codebases
