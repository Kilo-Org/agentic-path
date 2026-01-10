---
title: Testing & QA
description: Agents as testing force multipliers
sidebar:
  order: 4
---

Testing is one of the strongest agent use cases. Tests are self-validating—you immediately know if they work—and they're often tedious to write by hand.

## Where agents excel

### Unit test generation

Given a function, agents can generate comprehensive unit tests:

- Happy path cases
- Edge cases (null, empty, boundary values)
- Error conditions
- Type variations

This is probably the single highest-ROI application for most teams.

### Test case discovery

Agents are good at imagining scenarios you might miss:

"What test cases should I consider for this function? Focus on edge cases and error conditions."

Review the list—you'll often find cases you hadn't considered.

### Mock and fixture generation

Tedious fixture setup is perfect for agents:

- Generate test data structures
- Create mock implementations
- Set up test databases
- Build factory functions

### Regression test creation

When a bug is fixed:

"Create a test that would have caught this bug: [describe bug]"

Ensures the bug doesn't return.

### Property-based test generation

For functions with clear invariants:

"Generate property-based tests for this function. Test properties like [what should always be true]."

## What to watch for

### Tests that pass for wrong reasons

Agents may write tests that:

- Test implementation rather than behavior
- Have assertions that always pass
- Mock away the thing being tested

Always verify tests can fail when they should.

### Incomplete coverage

Generated tests often cover obvious cases. You may need to explicitly request:

- Concurrency scenarios
- Integration boundaries
- Error recovery
- Timeout handling

### Hallucinated assertions

Agents may assert behavior that doesn't match reality. Run tests, read them, understand them.

### Copy-paste tests

Tests that look similar but don't add coverage. Look for meaningful variation, not just data variation.

## Workflow: Test-first with agents

A powerful pattern:

1. **Write or generate tests first**
   "Given this requirement [describe], write tests that would verify correct implementation."

2. **Review and refine tests**
   Ensure tests capture what you actually want.

3. **Generate implementation**
   "Here are the tests. Write code that makes them pass."

4. **Verify everything**
   Run tests. Review implementation. Check for gaps.

This produces better results than implementation-first because tests define the contract.

## QA assistance

Beyond unit tests, agents help with broader QA:

### Test plan generation

"Create a test plan for [feature]. Include functional, integration, and edge case testing."

Gives you a starting point for manual testing and automation.

### Bug reproduction

"Given this bug report [paste], create a minimal reproduction."

Often faster than doing it yourself.

### Test data generation

"Generate realistic test data for [scenario]. Include [variations]."

Good for load testing, demo environments, manual testing.

### Exploratory testing guidance

"I'm about to test [feature]. What should I try to break? What unusual scenarios should I explore?"

Checklist for manual exploratory testing.

## Integration testing

Harder than unit tests, but still useful:

- Agent can scaffold integration test structure
- Generate API test cases from contract definitions
- Create database seeding for integration scenarios
- Write end-to-end test skeletons

Expect more refinement needed compared to unit tests.

## Prompt patterns

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

**Test cases discovery:**

```
What test cases should I consider for testing [feature/function]?

Focus on:
- Edge cases
- Error conditions
- Security considerations
- Performance implications
```

**Regression test:**

```
Bug fixed: [description]
Root cause: [explanation]
Fix: [summary]

Write a test that would catch this bug if it returns.
```

## Resources

### Essential

- [The 3 Pillars of Autonomy – Michele Catasta, Replit](https://www.youtube.com/watch?v=MLhAA9yguwM) - Automatic testing as foundation for agent autonomy
