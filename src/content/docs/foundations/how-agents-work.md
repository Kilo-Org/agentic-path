---
title: How Agents Work
description: The architecture behind LLMs, tool use, and planning loops
sidebar:
  order: 1
---

Understanding what's happening under the hood helps you work with agents more effectively. You don't need to be an ML engineer, but you should know the basics.

## The core loop

Every agentic system follows a similar pattern:

1. **Observe** - Read the current state (code, errors, file system)
2. **Think** - Decide what to do next
3. **Act** - Execute an action (write code, run command, ask for clarification)
4. **Evaluate** - Check if the action succeeded
5. **Repeat** until done

This is called the "ReAct" pattern (Reason + Act). The quality of each step determines the quality of the output.

## Large Language Models (LLMs)

The "brain" of an agent is typically an LLM—a neural network trained on massive amounts of text and code.

**What LLMs do well:**

- Pattern recognition and completion
- Following structured instructions
- Generating syntactically correct code
- Explaining concepts and code

**What LLMs struggle with:**

- Novel algorithmic problems
- Precise numerical computation
- Long-horizon planning (many steps ahead)
- Knowing what they don't know

## Tool use

Raw LLMs can only generate text. Agents gain power by using tools:

- **File system access** - Read and write code files
- **Command execution** - Run builds, tests, linters
- **Web browsing** - Look up documentation
- **Code search** - Find relevant files and functions

Each tool extends what the agent can do. The quality of tool integration matters as much as the underlying model.

## Context windows

Context is everything an agent can "see" at once—the code, your instructions, previous conversation, tool results.

Larger context windows let agents work with more code simultaneously. But there's a tradeoff: more context means slower inference and higher costs.

Smart agents manage context carefully, loading only what's relevant and summarizing when necessary.

## Planning and decomposition

Complex tasks require planning. Better agents break problems into steps:

1. Understand the goal
2. Identify what files/code are relevant
3. Plan the sequence of changes
4. Execute each change
5. Verify the result

You can help by providing clear goals and explicit constraints. The better your prompt, the better the plan.

## Failure modes

Agents fail in predictable ways:

- **Hallucination** - Making up APIs, functions, or syntax that don't exist
- **Drift** - Gradually moving away from the original goal
- **Loops** - Getting stuck repeating the same failed approach
- **Overconfidence** - Declaring success when the code doesn't actually work

Knowing these patterns helps you catch problems early.

---

## Further reading

_Links to external resources coming soon:_

- How transformers work (conceptual overview)
- ReAct paper and explanation
- Context window strategies
- Tool use in practice
