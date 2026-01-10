---
title: The Autonomy Spectrum
description: From autocomplete to autonomous agents—understanding the levels of AI assistance
sidebar:
  order: 2
---

Not all AI assistance is created equal. Understanding where different tools fall on the autonomy spectrum helps you choose the right approach for each task.

## The five levels

### Level 1: Autocomplete

**What it does:** Predicts the next few characters or tokens as you type.

**Examples:** GitHub Copilot's inline suggestions, Tabnine, basic IDE autocomplete.

**You control:** Everything. You accept or reject each suggestion.

**Best for:** Boilerplate, syntax you know but don't want to type, reducing keystrokes.

### Level 2: Copilot

**What it does:** Generates larger code blocks based on context and comments. Can answer questions about code.

**Examples:** Copilot Chat, Cursor's composer, Cody.

**You control:** When to invoke it, what context to provide, what to accept.

**Best for:** Writing functions from descriptions, explaining unfamiliar code, generating tests.

### Level 3: Task agent

**What it does:** Takes a defined task and executes multiple steps to complete it. Makes decisions about _how_ to accomplish the goal.

**Examples:** Kilo Code, Aider, Claude Code, Cursor's agent mode.

**You control:** The goal, constraints, and validation criteria. The agent controls implementation steps.

**Best for:** Features that span multiple files, refactoring, bug fixes with clear reproduction steps.

### Level 4: Workflow agent

**What it does:** Handles entire workflows, including planning, implementation, testing, and iteration based on feedback.

**Examples:** Devin prototype, custom agent orchestration systems, experimental multi-agent setups.

**You control:** High-level objectives and guardrails. The agent controls most of the process.

**Best for:** Well-defined projects with clear acceptance criteria, prototypes, exploration.

### Level 5: Autonomous agent

**What it does:** Operates independently with minimal supervision. Sets its own subgoals, handles ambiguity, requests clarification when needed.

**Examples:** Mostly theoretical at this point. Early research systems.

**You control:** Strategic direction. The agent handles everything else.

**Best for:** Not ready for production use yet. Watch this space.

## Choosing the right level

Higher autonomy isn't always better. The right level depends on:

**Task clarity.** Ambiguous tasks fail at higher autonomy levels. If you can't explain it clearly to a junior developer, an agent won't do better.

**Risk tolerance.** Higher autonomy means more potential for compounding errors. Critical code paths deserve more human oversight.

**Your familiarity.** If you know the domain well, you can review agent output effectively. In unfamiliar territory, stick to lower autonomy levels.

**Iteration speed.** Sometimes it's faster to write it yourself than to prompt-debug-reprompt. Know when to drop down a level.

## The autonomy slider

Think of autonomy as a slider, not a fixed setting. Good agentic engineers constantly adjust:

- Start at Level 2-3 for exploration
- Drop to Level 1-2 when the agent struggles
- Move to Level 3-4 for well-understood tasks
- Always be ready to take manual control

The goal isn't maximum automation. It's maximum effectiveness.

## Where we are today

As of early 2025, most practical work happens at Levels 2-3. Level 4 tools exist but require significant oversight. Level 5 remains research territory.

This is changing fast. Tools that seemed futuristic six months ago are now standard practice. The fundamentals in this guide should remain useful regardless of which specific level becomes dominant.
