---
title: Security, IP, and Compliance
description: Managing risk in AI-assisted development
sidebar:
  order: 5
---

AI tools introduce new risk vectors. Understanding and managing them is essential for responsible adoption.

## Data flow risks

### What data goes where?

When developers use AI tools, code and context flow to external services:

**Prompts include:**

- Code snippets (sometimes entire files)
- Error messages and stack traces
- File names and structure
- Comments (which may contain sensitive info)

**Know your data flow:**

- What leaves your network?
- Where is it processed?
- Is it stored? For how long?
- Is it used for model training?

### Mitigation strategies

**Enterprise agreements:** Most vendors offer enterprise plans with data handling guarantees. Review them carefully.

**Data classification:** Define what can/cannot be shared with external AI services.

**Local models:** For highly sensitive work, consider local or self-hosted models.

**Code filtering:** Some tools allow excluding sensitive paths/patterns.

## Intellectual property considerations

### The training data question

AI models were trained on public code. This raises questions:

**License contamination:** Could AI-generated code introduce license obligations?

**Copyright status:** Who owns AI-generated code?

**Patent implications:** Could AI output infringe patents?

**Current legal status:** Uncertain and evolving. Courts are still deciding.

### Practical approach

**Document AI usage:** Know where AI was involved in your codebase.

**Review for obvious copying:** Reject output that looks like verbatim reproduction.

**Legal consultation:** For high-stakes situations, involve legal counsel.

**Watch the legal landscape:** Precedents are being set now.

### Your proprietary code

**The concern:** Code you share with AI tools could influence model training, potentially benefiting competitors.

**Mitigations:**

- Enterprise agreements with training opt-out
- Self-hosted models for sensitive code
- Limiting what context is shared

## Compliance requirements

### Regulated industries

Healthcare, finance, government, and other regulated sectors have specific requirements:

**Data residency:** Where can code/data be processed?

**Audit trails:** Can you demonstrate what AI was used for?

**Access controls:** Who can use AI tools? On what data?

**Incident response:** What if AI exposes sensitive data?

### Compliance checklist

- [ ] Data handling agreements reviewed with legal
- [ ] Data residency requirements checked
- [ ] Audit logging in place for AI tool usage
- [ ] Access controls appropriate for data sensitivity
- [ ] Incident response plan updated for AI scenarios
- [ ] Employee training on AI data handling

## Security of AI-generated code

### New attack vectors

AI-generated code can introduce vulnerabilities:

**Insecure patterns:** Models may generate code with known vulnerabilities.

**Dependency confusion:** Agents may suggest packages that don't exist (or malicious ones that do).

**Logic vulnerabilities:** Subtle security bugs in plausible-looking code.

### Mitigation

**Security scanning:** Run SAST/DAST on all code, regardless of origin.

**Dependency verification:** Verify all packages suggested by AI exist and are legitimate.

**Human review for security-sensitive code:** Don't let AI generate auth, encryption, or input validation unreviewed.

**Penetration testing:** Include AI-generated code in security assessments.

## Governance structures

### Policy requirements

At minimum, define:

**Usage policy:** Who can use what tools, on what code.

**Data handling policy:** What can be shared with external AI.

**Review requirements:** How is AI code reviewed and approved.

**Incident handling:** What to do if AI causes a security issue.

### Accountability

**Clear ownership:** Humans own the code they commit, regardless of AI involvement.

**Audit capability:** Be able to identify AI involvement in code if needed.

**No blame-shifting:** "The AI did it" is not an excuse.

## Resources

### Essential

- [Government Agents – Mark Myshatyn, Los Alamos](https://www.youtube.com/watch?v=TnSGx36Ly0Q) - AI agents in high-security regulated environments
