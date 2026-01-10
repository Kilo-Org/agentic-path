---
title: Testing Strategies for Agentic Workflows
description: Shifting testing left and leveraging agents for quality
sidebar:
  order: 3
---

Testing needs to evolve when agents enter your workflow. The good news: agents are great at writing tests. The challenge: you need more tests to validate agent output.

## The Netflix lesson

Netflix learned this early: as they automated more of their deployment pipeline, they needed to shift testing left dramatically.

The same applies to agentic development. When agents generate code faster, your safety net needs to catch issues earlier, not later.

## Shift testing left

Traditional: Write code → Test → Review → Deploy

Agentic: Write spec → Generate tests → Generate code → Verify tests pass → Review → Deploy

Tests come _before_ implementation, not after.

### Why this works

- Tests define success criteria for the agent
- Agents can run tests to self-validate
- Fewer iterations when the goal is clear
- Tests document intent

### How to implement

**Write tests as part of task definition.** Before asking an agent to implement a feature, write (or generate) the tests that feature should pass.

**Use TDD prompting.** "Here are the tests. Write code that makes them pass."

**Treat test failures as agent feedback.** Instead of you catching bugs, the test suite catches them.

## Agents for test generation

Agents excel at writing tests. Use this.

**Unit test generation:** Give agent a function, get test cases back. Review for coverage gaps.

**Edge case discovery:** Agents are good at imagining edge cases you might miss.

**Integration tests:** More complex, but agents can generate the scaffolding.

### The test generation workflow

1. Point agent at a module
2. Request tests covering happy path, edges, and errors
3. Review for gaps and hallucinated behavior
4. Refine until coverage is meaningful

### Watch for

- Tests that pass for wrong reasons
- Mocked dependencies that hide real issues
- Tests that don't actually test the requirement
- Copy-paste tests with slight variations that don't add coverage

## Test coverage as guardrail

High test coverage makes agentic development safer. Establish baselines:

**Minimum coverage gates.** Don't let agent-generated code reduce coverage.

**Critical path requirements.** Some code paths need 100% coverage with meaningful tests.

**Coverage trends.** Track whether agent adoption correlates with coverage changes.

## Testing agent output

Not just testing code—testing agent behavior itself.

### Acceptance criteria

Define clear acceptance criteria for agent tasks:

- What should the code do?
- What should it not do?
- What are the edge cases?
- How do we verify it worked?

### Canary testing

For automated agent workflows:

- Run agent changes through extended test suites before merge
- Stage agent changes behind feature flags
- Monitor for anomalies after deployment

### Regression tracking

Notice patterns:

- Do certain types of agent tasks introduce more bugs?
- Are there codepath patterns where agent output is problematic?
- How often does agent output need post-review fixing?

## The test pyramid for agents

**Unit tests (foundation):** Fast, focused, run constantly. Agent-generated with human review.

**Integration tests (middle):** Verify components work together. Human-guided generation.

**E2E tests (top):** Verify full user flows. Fewer but critical. Often still human-written.

**Contract tests (boundaries):** Verify API contracts. Especially important when agents modify interfaces.

## Resources

### Essential

- [Agent Readiness – Eno Reyes, Factory AI](https://www.youtube.com/watch?v=ShuJ_CN6zr4) - How testing infrastructure affects agent reliability
