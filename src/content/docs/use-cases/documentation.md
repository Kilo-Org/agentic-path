---
title: Documentation
description: Fighting documentation rot with agent assistance
sidebar:
  order: 7
---

Documentation is perpetually under-maintained. Agents lower the friction dramatically—both for initial creation and ongoing updates.

## Types of documentation

### Code documentation

**Inline comments:** Explain the _why_, not the _what_.

**Function/method docs:** Parameters, return values, exceptions, examples.

**Class/module docs:** Purpose, usage patterns, relationships.

Agents excel here because they can read the code and infer what needs documenting.

### API documentation

**Endpoint documentation:** Request/response formats, authentication, errors.

**SDK documentation:** Setup, common operations, examples.

**Integration guides:** How to connect with other systems.

Agents can generate from code, OpenAPI specs, or examples.

### Architecture documentation

**System overviews:** Components and relationships.

**Decision records:** Why things are the way they are.

**Diagrams:** Visual representations of architecture.

More human guidance needed, but agents help with generation and formatting.

### User-facing documentation

**README files:** Getting started, installation, basic usage.

**Tutorials:** Step-by-step guides for common tasks.

**Reference documentation:** Complete API/feature reference.

**Troubleshooting guides:** Common problems and solutions.

## Documentation workflows

### Generate from code

Point agent at code, get documentation:

"Document this function/class/module. Include purpose, parameters, return values, and usage examples."

Review for accuracy—agents may miss nuances or invent details.

### Generate from usage

If you have examples of usage:

"Based on these examples of using [system], create documentation explaining how to use it."

Produces documentation grounded in actual usage patterns.

### Update existing docs

When code changes:

"The implementation has changed from [old] to [new]. Update the documentation to reflect this."

Helps keep docs in sync with code.

### Fill documentation gaps

Analyze existing docs for gaps:

"Review this documentation. What's missing? What questions would a new user have that aren't answered?"

Then generate the missing pieces.

## What to watch for

### Hallucinated features

Agents may document:

- APIs that don't exist
- Parameters that don't work
- Behavior that's incorrect

Verify all technical claims against actual code.

### Missing context

Agent-generated docs may miss:

- Why decisions were made
- Historical context
- Gotchas and edge cases
- Performance considerations

Add these manually—they're often the most valuable parts.

### Wrong audience

Generated docs may be:

- Too technical for beginners
- Too basic for experts
- Missing role-specific information

Know your audience and adjust accordingly.

### Staleness risk

Easy to generate ≠ easy to maintain. Without process:

- Docs and code diverge
- Generated docs become misleading
- Trust in docs erodes

Build update processes, not just generation.

## Practical applications

### README bootstrap

**Prompt:**

```
Create a README for this project.

Project: [describe project]
Tech stack: [list technologies]
Target audience: [who will use this]

Include: installation, quick start, basic usage, contributing.
```

### API documentation

**Prompt:**

```
Generate API documentation for this endpoint:

[paste endpoint code or OpenAPI spec]

Include: description, parameters, request/response examples, error codes.
Format as Markdown.
```

### Inline code documentation

**Prompt:**

```
Add documentation comments to functions in this file:

[paste code]

Follow [language] conventions. Focus on non-obvious behavior and the "why" behind decisions.
```

### Architecture Decision Record (ADR)

**Prompt:**

```
Help me write an ADR for choosing [option].

Context: [describe situation]
Decision: [what we decided]
Consequences: [what this means]

Include alternatives considered.
```

## Keeping docs fresh

### Documentation CI

- Lint documentation for broken links
- Generate API docs from code
- Verify examples actually work
- Flag docs that haven't been updated with related code

### Documentation as code

- Version docs with code
- Review doc changes in PRs
- Test documentation examples
- Generate from authoritative sources

### Regular audits

- Schedule documentation reviews
- Identify stale content
- Prioritize high-traffic docs
- Remove obsolete content

---

## Further reading

_Links to external resources coming soon:_

- Documentation standards and tools
- Docs-as-code practices
- API documentation examples
