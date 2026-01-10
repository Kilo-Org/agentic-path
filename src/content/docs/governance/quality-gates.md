---
title: Quality Gates and Human Checkpoints
description: Where to require human approval in agentic workflows
sidebar:
  order: 4
---

Not all code changes are equal. Quality gates define where human approval is required, preventing automation from bypassing critical checkpoints.

## Why quality gates matter

As agents become more capable, the temptation grows to automate more approvals. Quality gates are the backstop that prevents:

- Consequential changes without human oversight
- Security issues reaching production
- Quality erosion over time
- Loss of human understanding of the codebase

## Types of quality gates

### Merge gates

**What:** Requirements before code merges to main/production branches.

**Standard gates:**

- Passing tests
- Code review approval
- No merge conflicts
- Documentation updated

**AI-specific considerations:**

- Are there different requirements for AI-heavy PRs?
- Should AI assist or fully replace human review?
- What disclosure is required?

### Deployment gates

**What:** Requirements before deploying to environments.

**Standard gates:**

- All pre-deployment tests pass
- Security scan clean
- Performance benchmarks met
- Approval for production

**AI-specific considerations:**

- Extra scrutiny for first deploy of AI-generated code?
- Automated rollback triggers?
- Monitoring requirements?

### Design gates

**What:** Approval required before significant architecture changes.

**Standard gates:**

- Design document approved
- Security review for sensitive areas
- Architecture review for significant changes

**AI-specific considerations:**

- Can AI propose architecture? (Inform but not decide)
- Human approval required for AI-suggested design changes

### Data gates

**What:** Controls around data access and modification.

**Standard gates:**

- Database migration reviewed
- Data deletion requires approval
- PII access controlled

**AI-specific considerations:**

- AI-generated data migrations need extra review
- No direct AI access to production data
- Data transformation logic requires validation

## Implementing gates

### Technical enforcement

**CI/CD checks:**

- Automated testing requirements
- Coverage thresholds
- Security scanning
- Linting and formatting

**Branch protection:**

- Required reviewers
- Status checks must pass
- No direct pushes

### Process enforcement

**Required reviewers:**

- Minimum approvals
- Specific approvers for specific paths
- CODEOWNERS configuration

**Checklists:**

- PR templates with required confirmations
- Security consideration checkboxes
- AI disclosure prompts

### Human checkpoints

**Required human involvement:**

- Production deployments
- Database migrations
- Security-sensitive changes
- Customer-facing feature changes

**Cannot be automated:**

- Final deployment approval (for critical systems)
- Architecture decisions
- Security exception approvals
- Compliance sign-off

## Gate configuration by risk

### Low-risk changes

**Examples:** Documentation, test additions, style fixes

**Gates:**

- Automated checks
- Single reviewer
- Auto-merge if checks pass

### Medium-risk changes

**Examples:** Feature code, non-critical bug fixes

**Gates:**

- Full automated checks
- Human code review
- Standard approval flow

### High-risk changes

**Examples:** Security code, payment processing, data handling

**Gates:**

- Enhanced automated checks
- Senior reviewer required
- Security review if applicable
- Additional approval for production

### Critical changes

**Examples:** Authentication system, encryption, compliance-related

**Gates:**

- All previous gates
- Security team review
- Lead/architect approval
- Staged rollout required
- Enhanced monitoring

## Agents and gates

### What agents can do

- Run automated checks
- Flag potential issues
- Suggest reviewers
- Generate gate artifacts (changelogs, migration scripts)

### What agents shouldn't do

- Approve their own output
- Bypass human checkpoints
- Deploy to production without human trigger
- Grant elevated permissions

### Gate anti-patterns

**Rubber-stamp gates:** Human approval that's always granted without review.

**Gate proliferation:** So many gates that people game them to ship.

**Inconsistent enforcement:** Gates that apply sometimes but not others.

**AI gate avoidance:** Routing AI code around tighter reviews.

## Measuring gate effectiveness

**Gate pass rate:** Are legitimate changes passing?

**Gate catch rate:** Are issues caught at gates before production?

**Gate latency:** How much do gates slow the process?

**Gate bypass rate:** How often are gates skipped or overridden?

Use these metrics to tune gates—neither too permissive nor too restrictive.

---

## Further reading

_Links to external resources coming soon:_

- CI/CD gate configuration guides
- Branch protection best practices
- Approval workflow patterns
