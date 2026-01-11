---
title: Deployment & Operations
description: CI/CD, monitoring, and maintenance with agent assistance
sidebar:
  order: 4
---

CI/CD pipelines are configuration-heavy and well-suited for agents. Monitoring and maintenance are ongoing concerns where agents help with setup, incident response, and routine tasks.

## CI/CD & Deployment

### Where agents help

**Pipeline configuration:** GitHub Actions, GitLab CI, Jenkins, CircleCI. Agents know common patterns and adapt to your stack.

**Infrastructure as Code:** Terraform, CloudFormation, Pulumi—generate resources, modify existing infrastructure, create reusable modules.

**Deployment automation:** Dockerfiles, Kubernetes manifests, Helm charts, deploy scripts, rollback procedures.

**Environment configuration:** Environment variables, secret management, configuration files.

### What to watch for

**Security** — CI/CD is security-critical. Agent-generated pipelines may expose secrets in logs, use overly permissive permissions, or skip security scanning. Always security-review CI/CD changes.

**Vendor quirks** — Each CI system has differences. Test generated pipelines thoroughly.

**Stateful resources** — Infrastructure changes can cause deletion, downtime, cost surprises, or data loss. Use plan/apply patterns.

### Prompt patterns

**Pipeline generation:**

```
Create a GitHub Actions workflow for a [language/framework] project.

Requirements:
- Run tests on PR
- Deploy to [environment] on merge to main
- Use [specific services/tools]

Follow security best practices.
```

**Infrastructure:**

```
Generate Terraform for [resource type] with:
- [Specific requirements]
- [Constraints]

Follow the patterns in [existing file/module].
```

**Dockerfile:**

```
Create a Dockerfile for [application type].

Requirements:
- Multi-stage build
- Minimal final image
- Run as non-root
- [Other requirements]
```

## Monitoring & Maintenance

### Monitoring setup

**Alert configuration:** Prometheus rules, CloudWatch alarms, Datadog monitors. Agents understand common patterns for what to monitor.

**Dashboard creation:** Grafana dashboards, Kibana visualizations. Describe what you want to see; get a starting configuration.

**Log aggregation:** Parsing rules, search queries, anomaly detection.

### Incident response

**Root cause analysis:** "Here's the error and recent changes. What could cause this? What should I check?"

**Debugging assistance:** Analyze logs, interpret stack traces, trace request flows, identify error patterns.

**Post-mortem drafting:** "Help me write a post-mortem for [incident]. Include: summary, timeline, root cause, impact, remediation, lessons learned."

### Maintenance tasks

- **Dependency updates** — Analyze versions, identify breaking changes, generate update PRs
- **Technical debt cleanup** — Identify improvement patterns, generate refactoring plans
- **Performance optimization** — Analyze issues, suggest approaches, generate benchmarks
- **Security maintenance** — Vulnerability remediation, patch application, configuration hardening

### What to watch for

- **Alert fatigue** — Generated alerts may be too sensitive or poorly calibrated. Tune based on real experience.
- **Dashboard overload** — More dashboards isn't better. Ask: What decision does each panel inform?
- **Maintenance scope creep** — Bound tasks to the actual problem being solved.

### Prompt patterns

**Alert rules:**

```
Create Prometheus alerting rules for a [service type].

Monitor:
- Error rate exceeding [threshold]
- Latency above [threshold]
- Resource utilization above [threshold]

Include appropriate severity levels and annotations.
```

**Incident investigation:**

```
I'm seeing [error/symptom] in production.

Relevant context:
- [Recent changes]
- [Error logs]
- [Metrics]

What could cause this? What should I check first?
```

**Runbook:**

```
Create a runbook for handling [type of incident].

Include:
- Detection (how we know it's happening)
- Triage (how to assess severity)
- Mitigation (immediate actions)
- Resolution (full fix)
- Follow-up (post-incident)
```
