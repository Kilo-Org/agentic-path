---
title: How Agents Work
description: The technical foundations of AI agents - the ReAct loop, tool use, context windows, and common failure modes.
sidebar:
  order: 2
---

Understanding what's happening under the hood helps you work with agents more effectively. You don't need to be an ML engineer, but knowing the basics transforms how you collaborate with these systems.

## The ReAct Loop

Every AI agent follows the same core pattern: **Reason → Act → Observe**. This cycle, called ReAct (Reason + Act), is how agents turn your request into working code.

Here's what happens each iteration:

1. **Observe** — Read the current state (code, errors, file system)
2. **Reason** — Decide what action will move toward the goal
3. **Act** — Execute that action (write code, run a command, ask for clarification)
4. **Evaluate** — Check if it worked, then repeat

The quality of each step determines the quality of the output. When an agent seems stuck, it's usually failing at one specific step in this loop.

## What LLMs Can and Can't Do

The **Large Language Model (LLM)** is the "brain" of an agent—a neural network trained on massive amounts of text and code. Understanding its strengths and limitations helps you work with it, not against it.

**What LLMs do well:**

- Pattern recognition and code completion
- Following structured instructions
- Generating syntactically correct code
- Explaining concepts and reasoning through problems

**What LLMs struggle with:**

- No persistent memory between sessions—each conversation starts fresh
- No system access without tools—they can only generate text by default
- Probabilistic, not deterministic—same input may produce different output
- Limited long-horizon planning—they work best with clear, bounded tasks

## Closed vs Open Weight Models

The models powering AI agents come in two flavors: **closed** and **open weight**. Each has tradeoffs that affect how you build and deploy agents.

**Closed models** (Claude, GPT, Gemini, Grok, etc.) are accessed through APIs. You send requests to the provider's servers and pay per token.

- **Pros:** State-of-the-art performance, no infrastructure to manage, continuous improvements
- **Cons:** Data leaves your network, usage costs scale with volume, dependent on provider availability

**Open weight models** (Llama, Mistral, DeepSeek, Qwen) can be downloaded and run on your own hardware _or_ accessed through APIs.

- **Pros:** Full data control, predictable costs at scale, customizable through fine-tuning
- **Cons:** Requires GPU infrastructure, you manage updates and security, generally lower capability than frontier closed models

**Choosing between them:**

- **Start with closed models.** They're easier to integrate and currently more capable. Most teams should begin here.
- **Consider open weight when:** You have strict data residency requirements, predictable high-volume workloads where self-hosting is cheaper, or need to fine-tune for specialized domains.
- **Hybrid approaches work.** Use closed models for complex reasoning tasks and open weight for high-volume, simpler operations like code formatting or basic classification.

The gap between closed and open weight models continues to narrow. What requires a closed model today may be achievable with open weight next year. Design your systems to swap models as the landscape evolves.

## Tool Use

Raw LLMs can only generate text. **Tools** are what transform them into agents that can actually do things in the world.

Common tools include:

- **File operations** — Read, write, and search code files
- **Terminal commands** — Run builds, tests, linters, and deployments
- **API calls** — Interact with external services and databases
- **Code execution** — Run and verify generated code

Each tool extends what the agent can do. The quality of tool integration—how reliably tools work and how well the agent knows when to use them—matters as much as the underlying model.

## Context Windows

The **context window** is everything an agent can "see" at once: your instructions, the code, previous conversation, and tool results. It's measured in **tokens** (roughly 4 characters each).

Larger windows let agents work with more code simultaneously. But there's a tradeoff: more context means slower responses and higher costs.

When context fills up, older content gets **truncated**—the agent literally forgets it. Smart agents manage this by loading only what's relevant and summarizing when necessary. You can help by keeping tasks focused and providing only the context that matters.

## Common Failure Modes

Agents fail in predictable ways. Knowing these patterns helps you catch problems early:

- **Hallucination** — Generating plausible but incorrect information, like APIs or functions that don't exist
- **Context drift** — Gradually losing track of the original goal as steps accumulate
- **Infinite loops** — Getting stuck repeating the same failed approach without trying something new
- **Overconfidence** — Asserting that code works without actually verifying it runs

When you see these patterns, intervene. Reset the context, clarify the goal, or break the task into smaller pieces. The agent isn't being stubborn—it's hitting a limitation you can work around.
