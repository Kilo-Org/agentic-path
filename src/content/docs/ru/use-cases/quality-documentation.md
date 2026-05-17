---
title: Quality & Documentation
description: Testing, QA, and documentation with agent assistance
sidebar:
  order: 3
---

Testing and documentation are high-value agent use cases. Tests are self-validating—you immediately know if they work. Documentation is perpetually under-maintained—agents reduce the friction dramatically.

## Testing

### Where agents excel

**Unit test generation** — Given a function, agents generate comprehensive tests: happy path, edge cases (null, empty, boundaries), error conditions. This is probably the single highest-ROI application for most teams.

**Test case discovery** — "What test cases should I consider for this function? Focus on edge cases and error conditions." You'll often find cases you hadn't considered.

**Mock and fixture generation** — Test data structures, mock implementations, factory functions. Tedious setup is perfect for agents.

**Regression tests** — "Create a test that would have caught this bug: [describe bug]"

### What to watch for

- **Tests that pass for wrong reasons** — Tests that mock away the thing being tested, or have assertions that always pass
- **Hallucinated assertions** — Agents may assert behavior that doesn't match reality
- **Copy-paste tests** — Similar tests that don't add meaningful coverage

Always verify tests can fail when they should.

### Test-first workflow

1. **Write or generate tests first:** "Given this requirement [describe], write tests that would verify correct implementation."
2. **Review and refine:** Ensure tests capture what you actually want.
3. **Generate implementation:** "Here are the tests. Write code that makes them pass."
4. **Verify everything:** Run tests, review implementation, check for gaps.

This produces better results than implementation-first because tests define the contract.

### Prompt patterns

**Unit tests:**

```
Write unit tests for this function:
[paste function]

Cover:
- Normal operation
- Edge cases (empty input, null, boundaries)
- Error conditions

Use [test framework]. Follow conventions in [example file].
```

**Regression test:**

```
Bug fixed: [description]
Root cause: [explanation]
Fix: [summary]

Write a test that would catch this bug if it returns.
```

## Documentation

### Types and approaches

**Code documentation:** Inline comments (explain the _why_), function/method docs, class/module docs. Agents excel here because they read code and infer what needs documenting.

**API documentation:** Endpoints, SDKs, integration guides. Generate from code, OpenAPI specs, or examples.

**Architecture documentation:** System overviews, decision records, diagrams. More human guidance needed, but agents help with generation.

### What to watch for

- **Hallucinated features** — APIs that don't exist, parameters that don't work. Verify all claims against actual code.
- **Missing context** — Why decisions were made, gotchas, performance considerations. Add these manually—they're often most valuable.
- **Staleness risk** — Easy to generate ≠ easy to maintain. Build update processes, not just generation.

### Prompt patterns

**README bootstrap:**

```
Create a README for this project.

Project: [describe project]
Tech stack: [list technologies]
Target audience: [who will use this]

Include: installation, quick start, basic usage, contributing.
```

**API documentation:**

```
Generate API documentation for this endpoint:

[paste endpoint code or OpenAPI spec]

Include: description, parameters, request/response examples, error codes.
Format as Markdown.
```

**ADR:**

```
Help me write an ADR for choosing [option].

Context: [describe situation]
Decision: [what we decided]
Consequences: [what this means]

Include alternatives considered.
```

## Resources

### Testing

- [The 3 Pillars of Autonomy – Michele Catasta, Replit](https://www.youtube.com/watch?v=MLhAA9yguwM) - Automatic testing as foundation for agent autonomy

### Documentation

- [AGENTS.md](https://agents.md/) - The emerging standard for agent-readable project documentation
- [The New Code – Sean Grove, OpenAI](https://www.youtube.com/watch?v=8rABwKRsec4) - Specs as source of truth compiling to documentation
