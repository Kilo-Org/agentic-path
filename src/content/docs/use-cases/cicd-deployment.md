---
title: CI/CD & Deployment
description: Automating the pipeline with agent assistance
sidebar:
  order: 5
---

CI/CD pipelines are configuration-heavy and well-suited for agent assistance. The patterns are well-known, but the details are tedious.

## Where agents help

### Pipeline configuration

Agents can generate and modify CI/CD configuration:

- GitHub Actions workflows
- GitLab CI pipelines
- Jenkins pipelines
- CircleCI configuration
- Other CI systems with YAML/JSON configs

They know common patterns and can adapt to your stack.

### Infrastructure as Code

Terraform, CloudFormation, Pulumi—agents understand these formats:

- Generate resource definitions
- Modify existing infrastructure
- Add new components to existing setups
- Create modules and reusable components

### Deployment scripts

Deployment automation:

- Container builds (Dockerfiles)
- Kubernetes manifests
- Helm charts
- Deploy scripts
- Rollback procedures

### Environment configuration

- Environment variable setup
- Secret management configuration
- Configuration file generation
- Environment parity checks

## What to watch for

### Security in CI/CD

CI/CD is security-critical. Agent-generated pipelines may:

- Expose secrets in logs
- Use overly permissive permissions
- Skip security scanning steps
- Create vulnerable deployment paths

Always security-review CI/CD changes carefully.

### Vendor-specific syntax

Each CI system has quirks. Agents generally know common patterns but may:

- Confuse syntax between platforms
- Use deprecated features
- Miss platform-specific optimizations

Test generated pipelines thoroughly.

### Stateful resources

Infrastructure changes can have consequences:

- Accidental resource deletion
- Unintended downtime
- Cost implications
- Data loss risks

Review infrastructure changes carefully. Use plan/apply patterns.

## Practical applications

### New project pipeline setup

**Scenario:** Starting a new project, need CI/CD from scratch.

**Approach:**

1. Describe your stack and requirements
2. Generate initial pipeline configuration
3. Iterate on specifics (caching, parallelization, etc.)
4. Test thoroughly before relying on it

### Pipeline optimization

**Scenario:** CI is slow, want to optimize.

**Approach:**

1. Share current configuration with agent
2. Ask for optimization suggestions
3. Have agent implement specific optimizations
4. Measure impact

Common optimizations: caching, parallelization, minimal images, selective triggering.

### Adding pipeline stages

**Scenario:** Need to add security scanning, testing, or other stages.

**Approach:**

1. Describe what you want to add
2. Share existing pipeline for context
3. Generate new stages that integrate properly
4. Test integration

### Infrastructure additions

**Scenario:** Need new cloud resources.

**Approach:**

1. Describe the resource and requirements
2. Share existing IaC for patterns
3. Generate new resource definitions
4. Review for security and cost
5. Apply with appropriate caution

## Prompt patterns

**Pipeline generation:**

```
Create a GitHub Actions workflow for a [language/framework] project.

Requirements:
- Run tests on PR
- Deploy to [environment] on merge to main
- Use [specific services/tools]

Follow security best practices.
```

**Pipeline modification:**

```
Here's my current CI configuration:
[paste config]

Add [specific capability]. Keep existing functionality.
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

## Automation opportunities

### PR automation

Agents can help automate PR workflows:

- Auto-labeling based on changed files
- Automated reviewer assignment
- Status checks and gates
- Auto-merge when criteria met

### Deployment automation

- Automated canary deployments
- Progressive rollouts
- Automated rollback on failure
- Environment promotion

### Maintenance automation

- Dependency updates with testing
- Security patch automation
- Scheduled infrastructure updates
- Cost optimization automation

---

## Further reading

_Links to external resources coming soon:_

- CI/CD platform-specific guides
- Infrastructure as Code best practices
- DevOps automation patterns
