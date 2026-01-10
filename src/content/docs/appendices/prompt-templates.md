---
title: Prompt Templates by Use Case
description: Ready-to-use prompt structures for common tasks
sidebar:
  order: 4
---

Copy and adapt these templates for your specific needs. Each template includes the key components that make prompts effective.

## Implementation prompts

### New feature

```
Implement [feature name].

## Requirements
- [Functional requirement 1]
- [Functional requirement 2]
- [Non-functional requirement]

## Technical context
- Language/Framework: [specify]
- Relevant files: [list files]
- Pattern to follow: [reference file or describe]

## Constraints
- Don't modify: [files/functions to preserve]
- Must maintain: [backward compatibility requirements]
- Performance requirement: [if any]

## Acceptance criteria
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]
```

### API endpoint

```
Create an API endpoint for [purpose].

## Endpoint specification
- Method: [GET/POST/PUT/DELETE]
- Path: [/api/v1/...]
- Authentication: [required/optional/none]

## Request
- Body: [describe structure or provide example]
- Parameters: [query params, path params]
- Headers: [required headers]

## Response
- Success (200): [describe/example]
- Error cases: [list with status codes]

## Implementation details
- Handler location: [file path]
- Service to use: [service name]
- Follow pattern in: [example file]
```

### Database migration

```
Create a database migration to [purpose].

## Changes needed
- [Change 1: add table/column/index]
- [Change 2]
- [Change 3]

## Schema details
[Describe tables, columns, types, constraints]

## Considerations
- Existing data: [how to handle]
- Reversibility: [rollback requirements]
- Performance: [large table considerations]

## Migration framework: [Prisma/Knex/etc.]
```

## Bug fix prompts

### With known cause

```
Fix bug: [one-line description]

## Reproduction
1. [Step 1]
2. [Step 2]
3. [Step 3]

## Current behavior
[What happens now]

## Expected behavior
[What should happen]

## Root cause
[Your analysis of why this happens]

## Constraints
- Minimize changes
- Don't modify [protected areas]
- Add regression test
```

### Investigation needed

```
Debug issue: [symptom description]

## Context
- When it occurs: [conditions]
- Error message: [if any]
- Relevant logs: [paste relevant logs]
- Recent changes: [what changed recently]

## What I've tried
- [Attempt 1 and result]
- [Attempt 2 and result]

## Questions
- What could cause this?
- How can I verify the root cause?
- What's the safest fix?
```

## Testing prompts

### Unit tests

```
Write unit tests for [function/class name] in [file].

## Test framework: [Jest/pytest/etc.]

## Coverage requirements
- Normal operation cases
- Edge cases:
  - Empty/null inputs
  - Boundary values
  - [Domain-specific edges]
- Error conditions:
  - [Error case 1]
  - [Error case 2]

## Style
- Follow patterns in [example test file]
- Use [describe/it or test naming convention]
- Mock [specify what to mock]
```

### Integration tests

```
Write integration tests for [component/feature].

## Test scope
- Test the interaction between [component A] and [component B]
- Use [real/mocked] [database/external service]

## Scenarios
1. [Happy path scenario]
2. [Error scenario]
3. [Edge case scenario]

## Setup requirements
- [Prerequisites]
- [Test data needed]

## Framework: [specify]
```

## Refactoring prompts

### Extract function/class

```
Refactor: Extract [description] into [function/class].

## Current code location: [file:lines]

## Desired outcome
- New [function/class] name: [name]
- New location: [file]
- Parameters: [what it should accept]
- Return value: [what it should return]

## Constraints
- Keep existing behavior unchanged
- Update all callers
- Maintain backward compatibility
```

### Pattern migration

```
Refactor [file/module] from [old pattern] to [new pattern].

## Current state
[Describe or show current implementation]

## Target state
[Describe or show example of new pattern]

## Migration rules
- [Rule 1]
- [Rule 2]
- [Rule 3]

## Files affected: [list]

## Constraints
- All tests must pass after change
- Don't change public interfaces
```

## Documentation prompts

### Function/class documentation

```
Document [function/class name] in [file].

## Documentation format: [JSDoc/docstrings/etc.]

## Include
- Purpose/description
- Parameters (name, type, description)
- Return value (type, description)
- Exceptions/errors thrown
- Usage example

## Style
- Follow conventions in [example file]
- [Additional style requirements]
```

### README generation

```
Create/update README for [project/module].

## Sections needed
- Overview/description
- Installation
- Quick start
- Configuration
- API reference (summary)
- Contributing
- License

## Target audience: [developers/users/both]

## Existing documentation: [what exists already]
```

## Code review prompts

### Pre-commit review

```
Review this code before I commit it.

## Code
[paste code]

## Context
- Purpose: [what this code does]
- Part of: [larger feature/PR]

## Specific concerns
- [Area 1 I'm uncertain about]
- [Area 2 I want feedback on]

## Check for
- Bugs and logic errors
- Security issues
- Performance concerns
- Code style
- Edge cases
```

### Architecture review

```
Review this proposed architecture.

## Proposal
[Describe or diagram the proposed architecture]

## Problem being solved
[What this architecture addresses]

## Constraints
- [Technical constraints]
- [Business constraints]
- [Timeline]

## Questions
- Does this approach make sense?
- What am I missing?
- What alternatives should I consider?
- What are the risks?
```

## Tips for using templates

1. **Fill in specifics** - Replace all bracketed placeholders
2. **Provide context** - More context = better output
3. **Be explicit about constraints** - What NOT to do is as important as what to do
4. **Include examples** - Show patterns to follow when possible
5. **Iterate** - First response rarely perfect; refine with follow-ups

## Resources

### Essential

- [Prompt Engineering Specialization – Vanderbilt University](https://www.coursera.org/specializations/prompt-engineering) - Comprehensive course on using LLMs as a "mind exoskeleton"

### Deep dives

- [Understanding Prompt Engineering – DataCamp](https://www.datacamp.com/courses/understanding-prompt-engineering) - Beginner course on prompt engineering fundamentals

---

_Have a useful template? Consider contributing it back._
