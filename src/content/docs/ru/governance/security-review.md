---
title: Security Review
description: Catching security issues in AI-generated code
sidebar:
  order: 3
---

**AI-generated code can introduce security vulnerabilities.** Some are bugs humans write too; some are unique to AI patterns.

## AI-specific security concerns

### Pattern-based vulnerabilities

AI learns from patterns—including vulnerable ones in training data.

**Common issues:**

- SQL/command injection
- Insecure deserialization
- Hardcoded credentials
- Missing auth checks
- Insecure defaults

**Why:** Models optimize for "code that looks right," not "code that's secure."

### Hallucinated security

AI may implement security incorrectly:

- Encryption using weak algorithms
- Authentication that doesn't actually validate
- Authorization checks that can be bypassed
- Input validation missing edge cases

Code _looks_ secure but isn't.

### Dependency risks

AI may suggest packages that:

- Don't exist (hallucinated—could be typosquatted)
- Have known vulnerabilities
- Are unmaintained

## Security review checklist

### Input handling

- [ ] All user inputs validated
- [ ] Input length limits enforced
- [ ] Paths sanitized (no traversal)
- [ ] URLs validated

### Authentication & authorization

- [ ] Auth properly implemented
- [ ] Tokens validated correctly
- [ ] Sessions managed securely
- [ ] Access controls on sensitive operations
- [ ] Authorization checked server-side

### Data protection

- [ ] Sensitive data encrypted at rest
- [ ] TLS enforced
- [ ] Secrets not hardcoded
- [ ] No sensitive data in logs

### Injection prevention

- [ ] Parameterized database queries
- [ ] Shell commands properly escaped
- [ ] No eval() with user input
- [ ] Template injection prevented

### Dependencies

- [ ] All dependencies verified to exist
- [ ] No known vulnerable versions
- [ ] Lock files committed

## Review by risk level

| Code Type          | Review Level                                          |
| ------------------ | ----------------------------------------------------- |
| Any AI change      | Skim for patterns, check inputs, verify deps exist    |
| Security-sensitive | Full checklist, manual testing of boundaries          |
| Auth/authz         | Line-by-line, threat modeling, senior security review |

## Automated tools

**Static analysis (SAST):** Run on all code. Won't catch all AI-specific issues, but catches common vulnerabilities.

**Dependency scanning:** Dependabot, Snyk. Check all deps exist before installing.

**Secret scanning:** Pre-commit hooks, repository scanning, CI/CD checks.

## Team training

**AI-specific:**

- Common patterns AI gets wrong
- How to spot hallucinated security
- When to be extra suspicious

**General security:**

- OWASP Top 10
- Language-specific issues
- Secure coding guidelines

## Incident response

When AI-generated code causes a security issue:

1. **Treat like any security incident**—don't minimize because "AI did it"
2. **Document AI involvement:** Tool, prompt, what review happened
3. **Root cause:** Was this AI-specific? Would human have caught it?
4. **Process improvement:** What would have caught this earlier?

**Post-incident:** Update checklists, share learnings, consider tool-specific mitigations.

## Resources

### Videos

- [Government Agents – Mark Myshatyn, Los Alamos](https://www.youtube.com/watch?v=example) - Security considerations for AI agents in government
