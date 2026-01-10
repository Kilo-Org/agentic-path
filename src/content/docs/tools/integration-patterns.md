---
title: Integration Patterns
description: How to fit agentic tools into your development workflow
sidebar:
  order: 3
---

Getting value from tools requires thoughtful integration. Here are patterns that work.

## Individual integration patterns

### Inline assistance

**Pattern:** Agent provides suggestions as you type, within your editor.

**When it works:**

- Writing boilerplate
- Completing well-known patterns
- Reducing keystrokes

**When it breaks down:**

- Novel or complex logic
- Domain-specific code
- When you want to think, not generate

**Best practice:** Learn to toggle assistance on/off. Use it when it helps; disable when it doesn't.

### Chat-driven exploration

**Pattern:** Separate chat interface for longer discussions about code.

**When it works:**

- Exploring unfamiliar code
- Discussing design options
- Debugging complex issues
- Learning new concepts

**When it breaks down:**

- Quick edits faster done directly
- When you need to stay in flow

**Best practice:** Use chat for exploration and planning; switch to inline for execution.

### Task-level delegation

**Pattern:** Define a task, let the agent execute multiple steps to complete it.

**When it works:**

- Clear, bounded tasks
- Multi-file changes with consistent pattern
- Repetitive operations across codebase

**When it breaks down:**

- Ambiguous requirements
- Tasks requiring deep context
- When you need to understand the result deeply

**Best practice:** Start small, validate results thoroughly, expand scope as trust builds.

## Team integration patterns

### Pre-commit assistance

**Pattern:** Engineers use agents before committing; output goes through normal review.

**Advantages:**

- Individual autonomy in tool usage
- Standard quality gates apply
- No process change required

**Considerations:**

- Inconsistent agent usage across team
- No visibility into what's agent-generated

### Labeled contributions

**Pattern:** AI contributions are explicitly labeled in commits or PRs.

**Advantages:**

- Transparency in code origin
- Can adjust review depth
- Data for future analysis

**Considerations:**

- Administrative overhead
- Potential for bias against AI code
- Difficulty enforcing consistently

### Pair programming with agents

**Pattern:** Engineers work alongside agents in real-time, similar to human pairing.

**Advantages:**

- Continuous human oversight
- Immediate feedback and correction
- Good learning environment

**Considerations:**

- Requires more focused time
- Less autonomous operation
- May reduce speed advantages

### Automated pipeline integration

**Pattern:** Agents run automatically as part of CI/CD or PR workflows.

**Advantages:**

- Consistent application
- No individual adoption required
- Scales automatically

**Considerations:**

- Must carefully scope automated actions
- Need robust failure handling
- Governance and approval concerns

## Workflow-specific patterns

### Test generation pipeline

1. PR created with code changes
2. Agent generates test suggestions
3. Human reviews and selects tests
4. Tests merged with original code

### Documentation sync

1. Code changes detected
2. Agent identifies documentation impact
3. Agent generates documentation updates
4. Human reviews and refines
5. Docs updated alongside code

### Code review augmentation

1. PR submitted for review
2. Automated agent pre-review (style, obvious issues)
3. Human reviewer sees agent findings
4. Human focuses on design, logic, edge cases

### Refactoring assistance

1. Technical debt identified
2. Agent generates refactoring plan
3. Human approves plan
4. Agent executes refactoring
5. Human reviews and tests results

## Anti-patterns to avoid

### Shadow AI

**What happens:** Engineers use AI tools without team knowledge.

**Problems:**

- Inconsistent practices
- Security/compliance blind spots
- No shared learning

### All-or-nothing mandates

**What happens:** Entire team must use tools the same way.

**Problems:**

- Doesn't fit all working styles
- Resistance and resentment
- Suboptimal usage

### Unreviewed automation

**What happens:** Automated agents push changes without human review.

**Problems:**

- Quality degradation
- Accountability gaps
- Trust erosion

### Tool hopping

**What happens:** Team constantly switches tools chasing latest features.

**Problems:**

- Never develop proficiency
- Workflow disruption
- Evaluation fatigue

## Resources

### Essential

- [What is Model Context Protocol (MCP)](https://modelcontextprotocol.io/docs/getting-started/intro) - The standard protocol for AI integrations
- [Toolformer: Language Models Can Teach Themselves to Use Tools](https://arxiv.org/abs/2302.04761) - How LLMs learn to use external tools

### Deep dives

- [How Claude Code Works – Jared Zoneraich, PromptLayer](https://www.youtube.com/watch?v=RFKCzGlAU6Q) - Architecture deep dive
- [AI Engineering at Jane Street – John Crepezzi](https://www.youtube.com/watch?v=0ML7ZLMdcl4) - Custom tool integration
- [MCP server: Step-by-step building guide](https://composio.dev/blog/mcp-server-step-by-step-guide-to-building-from-scrtch) - Building MCP servers

### Papers & research

- [RepoCoder: Repository-Level Code Completion](https://arxiv.org/abs/2303.12570) - Repository context integration
- [Repository-Level Prompt Generation](https://arxiv.org/abs/2206.12839) - Repo-aware prompt techniques
- [AI-assisted Code Authoring at Scale – Meta](https://arxiv.org/abs/2305.12050) - Enterprise integration patterns
