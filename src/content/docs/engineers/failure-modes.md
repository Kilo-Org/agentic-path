---
title: Common Failure Modes
description: How agents fail and how to catch it early
sidebar:
  order: 4
---

Agents fail in predictable ways. Learning these patterns helps you catch problems before they compound.

## Hallucinations

**What it looks like:** The agent uses APIs, methods, or parameters that don't exist. The code looks right but fails at runtime.

**Common triggers:**

- Less popular libraries or older versions
- Recently changed APIs
- Domain-specific tools the model wasn't heavily trained on

**How to catch it:**

- Be suspicious of unfamiliar method names
- Verify imports actually exist in your packages
- Run the code—don't just read it

**How to prevent it:**

- Include relevant docs or examples in your prompt
- Use well-known patterns the model has seen often
- Ask the agent to cite its sources or explain its reasoning

## Drift

**What it looks like:** The agent starts solving your problem but gradually shifts to solving a different, easier, or more interesting problem.

**Common triggers:**

- Long prompts with multiple objectives
- Ambiguous requirements
- Complex tasks without clear milestones

**How to catch it:**

- Re-read the original requirement after each iteration
- Check intermediate outputs, not just final results
- Ask yourself: "Does this still address my actual problem?"

**How to prevent it:**

- Break tasks into smaller, focused pieces
- State success criteria explicitly
- Review progress frequently

## Looping

**What it looks like:** The agent tries the same failing approach repeatedly, sometimes with minor variations that don't address the root cause.

**Common triggers:**

- Errors the agent doesn't understand
- Tasks beyond the agent's capability
- Missing context that would enable a different approach

**How to catch it:**

- Notice repetitive patterns in agent responses
- Track iterations—if you're past 3-4, something's wrong
- Watch for superficial changes that don't address the real issue

**How to prevent it:**

- Provide error context and potential causes
- Break out of the loop manually and try a different approach
- Give hints if you know what direction to go

## Overconfidence

**What it looks like:** The agent declares success when the code doesn't actually work, or claims certainty about incorrect information.

**Common triggers:**

- Syntactically correct but logically wrong code
- Tests that pass for wrong reasons
- Complex requirements that are hard to fully verify

**How to catch it:**

- Never trust the agent's self-assessment
- Run the code yourself
- Write tests that exercise actual requirements, not just coverage

**How to prevent it:**

- Ask the agent to explain how it verified correctness
- Request specific test cases for edge conditions
- Build a habit of skepticism

## Context overflow

**What it looks like:** Early context gets "forgotten" as the conversation grows. The agent contradicts earlier decisions or loses track of constraints.

**Common triggers:**

- Long conversations
- Large codebases included in context
- Complex multi-step tasks

**How to catch it:**

- Watch for inconsistencies with earlier parts of the conversation
- Notice when the agent asks for information you already provided
- Check if constraints you specified are being ignored

**How to prevent it:**

- Keep conversations focused and relatively short
- Start fresh sessions for new tasks
- Re-state critical context periodically

## Plausible nonsense

**What it looks like:** Code that looks sophisticated and professional but fundamentally misunderstands the problem or domain.

**Common triggers:**

- Domain-specific problems the model lacks expertise in
- Tasks requiring nuanced understanding of business logic
- Anything involving real-world constraints the model doesn't know

**How to catch it:**

- Trace the logic mentally—does it actually make sense?
- Ask the agent to explain its approach
- Get domain expert review on specialized code

**How to prevent it:**

- Provide domain context explicitly
- Include examples of correct solutions
- Stay skeptical of impressive-looking code

---

## Further reading

_Links to external resources coming soon:_

- Failure mode case studies
- Recovery strategies for each failure type
- Tool-specific failure patterns
