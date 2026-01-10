---
title: Security Review for AI-Generated Code
description: Catching security issues in agent output
sidebar:
  order: 2
---

AI-generated code can introduce security vulnerabilities. Some are the same bugs humans write; some are unique to AI patterns. Here's how to address them.

## AI-specific security concerns

### Pattern-based vulnerabilities

AI learns from patterns. Some patterns in training data include vulnerabilities:

**Common issues:**

- SQL injection in database queries
- Command injection in shell operations
- Insecure deserialization patterns
- Hardcoded credentials or keys
- Missing authentication/authorization checks
- Insecure defaults

**Why it happens:** Models optimize for "code that looks right," not "code that's secure."

### Hallucinated security

AI may implement security incorrectly:

- Encryption that uses weak algorithms
- Authentication that doesn't actually validate
- Authorization checks that can be bypassed
- Input validation that misses edge cases

Code _looks_ secure but isn't.

### Dependency risks

AI may suggest dependencies that:

- Don't exist (hallucinated packages that could be typosquatted)
- Have known vulnerabilities
- Are unmaintained
- Have inappropriate licenses

## Security review checklist

### Input handling

- [ ] All user inputs validated
- [ ] Input length limits enforced
- [ ] Character encoding handled correctly
- [ ] Paths sanitized (no traversal)
- [ ] URLs validated and sanitized

### Authentication

- [ ] Authentication properly implemented
- [ ] Tokens validated correctly
- [ ] Sessions managed securely
- [ ] Password handling follows best practices
- [ ] Multi-factor where appropriate

### Authorization

- [ ] Access controls on all sensitive operations
- [ ] Authorization checked on server side
- [ ] No authorization bypass through parameter manipulation
- [ ] Privilege escalation prevented

### Data protection

- [ ] Sensitive data encrypted at rest
- [ ] Secure transport (TLS) enforced
- [ ] Secrets not hardcoded
- [ ] No sensitive data in logs
- [ ] Appropriate data retention

### Injection prevention

- [ ] Parameterized database queries
- [ ] Shell commands properly escaped
- [ ] No eval() with user input
- [ ] Template injection prevented
- [ ] XML/JSON parsing secured

### Dependency security

- [ ] All dependencies verified to exist
- [ ] No known vulnerable versions
- [ ] Dependencies from trusted sources
- [ ] Lock files committed

## Review process

### For every AI-generated change

**Minimum review:**

1. Skim for obvious security patterns
2. Check any input handling
3. Verify dependencies are real

### For security-sensitive code

**Enhanced review:**

1. Full security checklist walkthrough
2. Manual testing of security boundaries
3. Consider security-focused code review

### For authentication/authorization

**Maximum scrutiny:**

1. Line-by-line review
2. Threat modeling
3. Penetration testing consideration
4. Senior security review

## Automated tools

### Static analysis (SAST)

Run on all code, including AI-generated:

- Language-specific security scanners
- Custom rules for your patterns
- Integration in CI/CD

**Note:** SAST won't catch all AI-specific issues, but catches common vulnerabilities.

### Dependency scanning

- Check all dependencies exist before installing
- Scan for known vulnerabilities (Dependabot, Snyk, etc.)
- Verify sources

### Secret scanning

- Pre-commit hooks for secrets
- Repository scanning
- CI/CD checks

## Training your team

### What to teach

**AI-specific:**

- Common patterns AI gets wrong
- How to spot hallucinated security
- When to be extra suspicious

**General security:**

- OWASP Top 10
- Language-specific security issues
- Secure coding guidelines

### Practice patterns

- Include security scenarios in agent usage training
- Share examples of AI security failures
- Build review habits specifically for AI code

## Incident response

### When AI-generated code causes security issue

1. **Treat like any security incident:** Don't minimize because "AI did it"
2. **Document AI involvement:** Note which tool, what prompt, what review happened
3. **Root cause:** Was this AI-specific? Would human have caught it?
4. **Process improvement:** What would have caught this earlier?

### Post-incident

- Update review checklists
- Share learnings (appropriately)
- Consider tool-specific mitigations

---

## Further reading

_Links to external resources coming soon:_

- OWASP resources
- Security scanning tools
- AI-specific security research
- Secure coding guidelines by language
