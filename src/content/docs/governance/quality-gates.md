---
title: Quality Gates
description: Where to require human approval in agentic workflows
sidebar:
  order: 2
---

**Quality gates define where human approval is required.** As agents become more capable, gates prevent automation from bypassing critical checkpoints.

## Types of gates

### Merge gates

Requirements before code merges to main/production branches.

**Standard:** Passing tests, code review approval, no conflicts, docs updated.

**AI-specific:** Different requirements for AI-heavy PRs? AI assist vs. replace review? Disclosure required?

### Deployment gates

Requirements before deploying to environments.

**Standard:** Pre-deployment tests pass, security scan clean, performance benchmarks met, production approval.

**AI-specific:** Extra scrutiny for first deploy of AI-generated code? Automated rollback triggers?

### Design gates

Approval required before significant architecture changes.

**Standard:** Design doc approved, security review for sensitive areas, architecture review.

**AI-specific:** AI can inform but not decide architecture. Human approval required for AI-suggested design changes.

### Data gates

Controls around data access and modification.

**Standard:** Database migration reviewed, data deletion requires approval, PII access controlled.

**AI-specific:** AI-generated migrations need extra review. No direct AI access to production data.

## Implementation

### Technical enforcement

**CI/CD checks:** Automated testing, coverage thresholds, security scanning, linting.

**Branch protection:** Required reviewers, status checks must pass, no direct pushes.

### Process enforcement

**Required reviewers:** Minimum approvals, specific approvers for specific paths, CODEOWNERS configuration.

**Checklists:** PR templates with required confirmations, security checkboxes, AI disclosure prompts.

### Human checkpoints

**Required human involvement:**

- Production deployments
- Database migrations
- Security-sensitive changes
- Customer-facing feature changes

**Cannot be automated:**

- Final deployment approval (critical systems)
- Architecture decisions
- Security exception approvals
- Compliance sign-off

## Gate configuration by risk

| Risk Level   | Examples                          | Gates                                                      |
| ------------ | --------------------------------- | ---------------------------------------------------------- |
| **Low**      | Docs, tests, style fixes          | Automated checks, single reviewer, auto-merge              |
| **Medium**   | Feature code, non-critical bugs   | Full automated checks, human review, standard approval     |
| **High**     | Security, payments, data handling | Enhanced checks, senior reviewer, security review          |
| **Critical** | Auth, encryption, compliance      | All gates + security team + lead approval + staged rollout |

## Agents and gates

**Agents can:** Run automated checks, flag issues, suggest reviewers, generate artifacts (changelogs, migration scripts).

**Agents shouldn't:** Approve their own output, bypass human checkpoints, deploy to production without human trigger, grant elevated permissions.

### Gate anti-patterns

- **Rubber-stamp gates:** Approval always granted without review
- **Gate proliferation:** So many gates people game them
- **Inconsistent enforcement:** Gates apply sometimes but not others
- **AI gate avoidance:** Routing AI code around tighter reviews

## Measuring effectiveness

| Metric          | Question                             |
| --------------- | ------------------------------------ |
| **Pass rate**   | Are legitimate changes passing?      |
| **Catch rate**  | Are issues caught before production? |
| **Latency**     | How much do gates slow the process?  |
| **Bypass rate** | How often are gates skipped?         |

Use these metrics to tune gates—neither too permissive nor too restrictive.

## Resources

### Videos

- [Agent Readiness – Eno Reyes, Factory AI](https://www.youtube.com/watch?v=example) - Preparing organizations for agentic workflows
