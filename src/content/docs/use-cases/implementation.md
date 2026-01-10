---
title: Implementation
description: The core use case—writing code with agents
sidebar:
  order: 3
---

Implementation is where most engineers first encounter agents. It's the clearest use case, but success depends on approach.

## High-value implementation tasks

### Boilerplate generation

The classic sweet spot:

- CRUD operations
- API endpoint scaffolding
- Form components
- Data models and DTOs
- Configuration files

Agents handle these quickly and reliably. This is where "10x" claims are almost true.

### Feature implementation

Features vary widely, but agents help most when:

- Requirements are clear
- Patterns exist in your codebase to follow
- Scope is bounded (single PR, few files)

### Bug fixes

Clear bug fixes are excellent agent tasks:

- Specific repro steps
- Known root cause
- Bounded change required

"Fix the login flow" is bad. "User login fails with null pointer when email contains '+'" is good.

### Refactoring

Mechanical refactoring is ideal:

- Rename across codebase
- Extract function/class
- Change data structure
- Convert patterns (callbacks to promises, etc.)

Complex refactoring (restructuring a tangled module) is harder.

### Data transformations

- Migration scripts
- Format conversions
- ETL logic
- Data cleanup

Well-defined inputs and outputs make these agent-friendly.

## The implementation workflow

### Step 1: Plan the change

Before prompting, know:

- What files will change?
- What's the desired end state?
- What should NOT change?

### Step 2: Set context

Provide the agent with:

- Relevant code (or let it explore)
- Existing patterns to follow
- Constraints and requirements

### Step 3: Generate

Let the agent work. For complex tasks, ask for the plan first:

"Given [context], describe how you would implement [feature]. Don't write code yet."

Review the plan before proceeding.

### Step 4: Validate

Before accepting, verify:

- Does it work?
- Does it handle edges?
- Does it follow conventions?
- Are there security issues?

### Step 5: Refine

Common refinement needs:

- "This doesn't handle the case where..."
- "Follow the pattern used in [other file] instead"
- "Add error handling for..."

## What slows you down

### Overcomplicated prompts

Long, detailed prompts often confuse agents. Start simple, add detail as needed.

### Under-constrained asks

"Build the feature" leaves too many decisions to the agent. Break it down.

### Fighting the agent

If you've reprompted 3+ times without progress, stop. Re-think the approach or do it yourself.

### Insufficient context

Agents work with what you give them. Critical missing context leads to invalid output.

### Wrong tool for the job

Some code is faster to write manually. Recognize when and skip the agent.

## Prompt patterns that work

**Feature implementation:**

```
Implement [feature] in [file/module].

Requirements:
- [Specific requirement 1]
- [Specific requirement 2]

Follow the pattern used in [existing example].
Don't modify [things to preserve].
```

**Bug fix:**

```
Bug: [description]
Reproduction: [steps or code]
Expected: [behavior]
Actual: [behavior]

Fix this in [file]. The root cause is [if known].
```

**Refactor:**

```
Refactor [module/function] to [desired change].

Keep the public API unchanged.
Maintain all existing functionality.
[Additional constraints]
```

## Resources

### Essential

- [Embracing the parallel coding agent lifestyle](https://simonwillison.net/2025/Oct/5/parallel-coding-agents/) - Running multiple agents simultaneously
- [Code research projects with async coding agents](https://simonwillison.net/2025/Nov/6/async-code-research/) - Async research task patterns
