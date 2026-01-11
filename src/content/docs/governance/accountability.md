---
title: Accountability & Provenance
description: Who owns AI-generated code, and how to track it
sidebar:
  order: 1
---

**Humans are accountable for the code they commit.** This remains true regardless of how code was generated. "The AI did it" is not a defense.

## Accountability by role

### Individual contributor

**Responsible for:**

- Quality of code they commit (regardless of origin)
- Appropriate use of AI tools per policy
- Validating AI output before committing
- Understanding code they submit

### Code reviewer

**Responsible for:**

- Reviewing to established standards
- Catching issues regardless of origin
- Raising concerns about quality or patterns

### Team lead

**Responsible for:**

- Team practices around AI use
- Ensuring appropriate training
- Addressing patterns of issues

### Engineering leadership

**Responsible for:**

- Organizational AI policy
- Tool decisions and procurement
- Risk acceptance at org level

## When things go wrong

### Production incident from AI code

1. Treat like any incident—resolution first
2. Post-mortem includes AI involvement as context
3. Process improvements may involve AI practices

**Don't:** Blame the AI, create special "AI incident" categories, or exempt individuals from accountability.

### Security vulnerability from AI code

1. Standard security response
2. Document AI involvement for learning
3. Review: would our process have caught this?

**Accountability flows to:** Developer who committed it, reviewers who approved it—NOT the AI tool.

## Code provenance

Where does AI-generated code come from? Models train on vast public code with various licenses. Output is statistically influenced by training data but typically isn't direct copying. **Legal uncertainty exists**—courts haven't fully resolved how copyright applies to AI output.

### What we know

- **Training legality:** Ongoing lawsuits testing fair use; no resolution yet
- **Output ownership:** Person/org prompting is treated as author practically, but not legally settled
- **Verbatim reproduction:** If AI outputs exact copies, original copyright likely applies

### Risk management

**Low-risk scenarios:**

- Boilerplate code anyone would write the same way
- Internal tools with no external distribution
- Code you heavily modify after generation

**Higher-risk scenarios:**

- Distributing generated code in products
- Open-source contributions with copyleft licenses
- Unique or distinctive algorithms

## Tracking AI involvement

### What to track

- Which files/commits involved AI assistance
- Which tool was used
- Human review performed

### How to track

- **Git commit conventions:** Tags in commit messages
- **Code review annotations:** Note AI involvement in review
- **Tooling:** Some tools log AI interactions

### Why track

- Future legal compliance may require it
- Incident response if issues arise
- Regulatory compliance in some industries

## Edge cases

**Automated AI changes (CI/CD, bots):** Person who configured automation owns the output. Don't automate consequential changes without human approval.

**Multi-person AI sessions:** Committer takes responsibility. Should review/understand before committing.

**AI-assisted review:** Human reviewer still accountable. AI findings must be human-validated.

## Policy checklist

1. **Scope:** What activities are covered
2. **Roles:** Who has what accountability
3. **Requirements:** What must happen before commit/merge
4. **Documentation:** What must be recorded
5. **Exceptions:** How to handle special cases
6. **Enforcement:** What happens when policy is violated

## Resources

### Essential

- [Your job is to deliver code you have proven to work](https://simonwillison.net/2025/Dec/18/code-proven-to-work/) - Accountability for AI-generated code
