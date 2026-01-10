---
title: Monitoring & Maintenance
description: Keeping systems healthy with agent assistance
sidebar:
  order: 6
---

Production systems need ongoing attention. Agents can help with monitoring, incident response, and routine maintenance.

## Monitoring setup

### Alert configuration

Agents can generate monitoring configurations:

- Prometheus alerting rules
- CloudWatch alarms
- Datadog monitors
- PagerDuty integration configs

They understand common patterns for what to monitor and when to alert.

### Dashboard creation

Visualization definitions:

- Grafana dashboards
- Kibana visualizations
- Custom dashboard configs

Describe what you want to see; get a starting configuration.

### Log aggregation

- Log parsing rules
- Search queries
- Aggregation patterns
- Anomaly detection rules

## Incident response

### Root cause analysis

When something breaks:

"Here's the error and recent changes [provide context]. What could cause this? What should I check?"

Agents can quickly surface likely causes and investigation paths.

### Debugging assistance

- Analyze log snippets
- Interpret stack traces
- Trace request flows
- Identify patterns in errors

### Remediation suggestions

"Given this issue [describe], what are my options for fixing it quickly? What about a longer-term fix?"

Agents can enumerate options and tradeoffs.

### Post-mortem drafting

After incidents:

"Help me write a post-mortem for [incident]. Include: summary, timeline, root cause, impact, remediation, lessons learned."

Gets you a draft to refine with specifics.

## Maintenance tasks

### Dependency updates

Agents can help plan and execute updates:

- Analyze current dependencies vs. latest versions
- Identify breaking changes to consider
- Generate update PRs with appropriate testing
- Create migration plans for major updates

### Technical debt cleanup

- Identify patterns that could be improved
- Generate refactoring plans
- Implement cleanup changes
- Update deprecated API usage

### Performance optimization

- Analyze code for performance issues
- Suggest optimization approaches
- Implement specific optimizations
- Generate benchmark tests

### Security maintenance

- Dependency vulnerability remediation
- Security patch application
- Configuration hardening
- Audit logging setup

## What to watch for

### Alert fatigue

Agent-generated alerts may be:

- Too sensitive (alert on noise)
- Poorly calibrated thresholds
- Missing context about your baseline

Review and tune alerts based on real experience.

### Dashboard overload

Easy to generate dashboards doesn't mean more dashboards are better. Consider:

- What decisions does each panel inform?
- Is anyone actually looking at this?
- Are there redundant views?

### Maintenance scope creep

Agents may suggest more changes than necessary. Bound maintenance tasks:

- What's the actual problem being solved?
- What's the minimum viable change?
- What can wait for later?

## Practical applications

### Alert rule creation

**Prompt:**

```
Create Prometheus alerting rules for a [service type].

Monitor:
- Error rate exceeding [threshold]
- Latency above [threshold]
- Resource utilization above [threshold]

Include appropriate severity levels and annotations.
```

### Incident investigation

**Prompt:**

```
I'm seeing [error/symptom] in production.

Relevant context:
- [Recent changes]
- [Error logs]
- [Metrics]

What could cause this? What should I check first?
```

### Dependency audit

**Prompt:**

```
Analyze our dependencies in [package file].

Identify:
- Outdated packages with security issues
- Major version updates that might have breaking changes
- Packages that could be removed

Prioritize by risk.
```

### Runbook generation

**Prompt:**

```
Create a runbook for handling [type of incident].

Include:
- Detection (how we know it's happening)
- Triage (how to assess severity)
- Mitigation (immediate actions)
- Resolution (full fix)
- Follow-up (post-incident)
```

---

## Further reading

_Links to external resources coming soon:_

- Monitoring best practices
- Incident management frameworks
- SRE resources
