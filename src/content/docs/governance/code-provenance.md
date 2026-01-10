---
title: Code Provenance and Licensing
description: Managing the origin and legal status of AI-generated code
sidebar:
  order: 1
---

AI-generated code raises new questions about origin, ownership, and licensing. Here's how to think about it.

## The provenance question

Where does AI-generated code come from? It's not straightforward.

**Training data:** Models were trained on vast amounts of public code with various licenses.

**Generation:** Output is statistically influenced by training data but isn't (usually) direct copying.

**Legal uncertainty:** Courts haven't fully resolved how copyright applies to AI output.

This uncertainty doesn't mean paralysis—it means thoughtful risk management.

## Current legal landscape

### What we know

**Training legality:** Ongoing lawsuits are testing whether training on copyrighted code is fair use. No definitive resolution yet.

**Output ownership:** Generally, the person/organization prompting the AI is treated as the author for practical purposes. But this isn't legally settled.

**Verbatim reproduction:** If AI outputs exact copies of training data, original copyright likely applies.

### What we don't know

- Will training on copyrighted code require licensing?
- Who owns truly "creative" AI output?
- How will courts handle "substantially similar" AI code?
- Will new legislation change the landscape?

## Practical risk management

### Low-risk scenarios

- Boilerplate code anyone would write the same way
- Standard patterns with obvious implementations
- Code you heavily modify after generation
- Internal tools with no external distribution

### Higher-risk scenarios

- Distributing generated code in products
- Open-source contributions with copyleft licenses
- Unique or distinctive algorithms
- Code in regulated or litigious industries

### Risk mitigation strategies

**Attribution tracking:** Know where AI was involved.

**Review for copying:** Check if generated code matches known projects.

**License compatibility:** Understand your distribution model and license implications.

**Legal consultation:** For high-stakes decisions, involve legal counsel.

## Organizational policies

### Minimum recommended policy

1. **Track AI involvement:** Know which code was AI-assisted.
2. **Review before committing:** Human should understand and verify code.
3. **Avoid obvious copying:** Reject code that looks like verbatim reproduction.
4. **Legal review on distribution:** Extra scrutiny for externally distributed code.

### Enhanced policy elements

**Code scanning:** Tools to detect potential copying.

**Documentation requirements:** Record AI tool used and prompt context.

**Distribution restrictions:** Different rules for internal vs. external code.

**Regular review:** Update policies as legal landscape evolves.

## Open source considerations

### Contributing AI code to open source

Most projects haven't explicitly addressed AI contributions. Consider:

- Check project stance on AI-generated contributions
- Be transparent about AI involvement
- Ensure you can make the licensing assertions required
- Understand you're taking on legal responsibility

### Using AI on open source codebases

Be aware of training contamination:

- Models trained on GPL code might generate GPL-influenced output
- Mixing AI output with permissively licensed projects could introduce complications
- Conservative approach: treat AI output as potentially encumbered

## Tracking provenance

### What to track

- Which files/commits involved AI assistance
- Which tool was used
- General nature of the AI contribution
- Human review performed

### How to track

**Git commit conventions:** Tags or flags in commit messages.

**Documentation:** README or CONTRIBUTING notes.

**Tooling:** Some tools provide logging of AI interactions.

**Code review annotations:** Note AI involvement in review process.

### Why track it

- Future legal compliance may require it
- Incident response if issues arise
- Understanding of AI impact on codebase
- Regulatory compliance in some industries

## Resources

### Essential

- [Your job is to deliver code you have proven to work](https://simonwillison.net/2025/Dec/18/code-proven-to-work/) - Accountability for AI-generated code
