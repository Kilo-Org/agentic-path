---
title: Accountability Frameworks
description: Who's responsible when AI is involved?
sidebar:
  order: 3
---

When code is AI-generated, modified by AI, or reviewed with AI assistance, who's accountable? Clear frameworks prevent confusion and blame-shifting.

## The core principle

**Humans are accountable for the code they commit.**

This remains true regardless of how the code was generated. The developer who commits the code takes responsibility for it. "The AI did it" is not a defense.

This simplifies everything:

- No special exception handling for AI code
- Standard accountability models apply
- Clear ownership regardless of origin

## Levels of accountability

### Individual contributor

**Responsible for:**

- Quality of code they commit (regardless of origin)
- Appropriate use of AI tools per policy
- Validating AI output before committing
- Understanding code they submit

**Not responsible for:**

- AI tool quality or behavior
- Others' use of AI
- Organizational policy decisions

### Code reviewer

**Responsible for:**

- Reviewing code to established standards
- Catching issues regardless of code origin
- Applying appropriate scrutiny to AI-generated code
- Raising concerns about code quality or patterns

**Not responsible for:**

- Original code quality
- Exhaustively finding every issue
- Tool selection decisions

### Team lead / Manager

**Responsible for:**

- Setting team practices around AI use
- Ensuring team has appropriate training
- Creating environment for quality output
- Addressing patterns of issues

**Not responsible for:**

- Every individual commit
- Organizational policy setting
- Tool procurement decisions (usually)

### Engineering leadership

**Responsible for:**

- Organizational policy for AI use
- Tool decisions and procurement
- Risk acceptance at organizational level
- Ensuring appropriate governance

**Not responsible for:**

- Day-to-day tool usage
- Individual code decisions
- Implementation of policies (delegate to managers)

## When things go wrong

### Production incident from AI code

**Response:**

1. Treat like any incident—focus on resolution first
2. Standard incident management applies
3. Post-mortem includes AI involvement as context
4. Process improvements may involve AI practices

**Don't do:**

- Blame the AI (it's a tool)
- Create special "AI incident" category
- Exempt individuals from accountability

### Security vulnerability from AI code

**Response:**

1. Standard security response
2. Document AI involvement for learning
3. Review: would our process have caught this?
4. Improve review processes if needed

**Accountability:**

- Developer who committed it
- Reviewers who approved it
- NOT transferable to AI tool

### Quality issues pattern

**Response:**

1. Identify pattern—is this tool-specific? User-specific? Task-specific?
2. Address through training, process, or tool adjustment
3. Don't punish AI use; improve AI practices

## Accountability documentation

### What to document

**At commit level:**

- AI assistance involved (optional, depends on policy)
- What tool used (if required)
- Human who authored/approved

**At review level:**

- Reviewer identity
- Review completed date
- Any AI assistance in review

**At project level:**

- AI tools authorized for use
- Policies in effect
- Training completed by team

### Why documentation matters

- **Incident investigation:** Understand how code entered codebase
- **Legal/compliance:** Demonstrate human oversight
- **Improvement:** Learn from patterns over time
- **Audit:** Show governance is in place

## Edge cases

### Automated AI changes

What if AI makes changes through automation (CI/CD, bots)?

**Accountability model:**

- Person who configured automation owns the output
- Automation should have review checkpoints
- Don't automate consequential changes without human approval

### Multi-person AI sessions

What if one person prompts and another commits?

**Accountability model:**

- Committer takes responsibility
- Should review/understand before committing
- Original prompter may share context but not primary accountability

### AI-assisted review

What if AI helps with code review?

**Accountability model:**

- Human reviewer still accountable for review
- AI assistance is a tool, not a replacement
- AI findings must be human-validated

## Building the framework

### Policy elements needed

1. **Scope:** What activities are covered
2. **Roles:** Who has what accountability
3. **Requirements:** What must happen before commit/merge
4. **Documentation:** What must be recorded
5. **Exceptions:** How to handle special cases
6. **Enforcement:** What happens when policy is violated

### Implementation steps

1. Draft framework (can start simple)
2. Socialize with engineering leadership
3. Review with legal/compliance
4. Communicate to all engineers
5. Train on expectations
6. Monitor and adjust

---

## Further reading

_Links to external resources coming soon:_

- Sample accountability policies
- Legal perspectives on AI liability
- Case studies of AI-related incidents
