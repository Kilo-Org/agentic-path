---
title: What is Agentic Engineering?
description: The practice of orchestrating AI agents to accomplish software development tasks with varying degrees of autonomy.
sidebar:
  order: 1
---

**Agentic engineering** is the practice of orchestrating AI agents to accomplish software development tasks—shifting your role from writing every line to directing a team of intelligent assistants.

## The core concept

With agentic engineering, you become a general contractor, not a bricklayer. Instead of typing all the code yourself, you define requirements, coordinate AI agents, and ensure the final result meets spec. The best practitioners know _how_ to do the work—they choose to delegate most of it.

**Your job shifts from production to direction.** You spend less time typing and more time on:

- Defining clear requirements
- Breaking problems into agent-sized tasks
- Reviewing and validating output
- Catching what agents miss

**Communication becomes your primary skill.** Agents do what you tell them, not what you mean (just like computers!). Precision in task definition determines output quality.

## What hasn't changed

You still need to understand code deeply. Agents make mistakes—sometimes subtle ones. If you can't read code critically, you'll ship bugs faster than ever. AI is the ultimate force multiplier—and that includes multiplying all your mistakes.

You still own the architecture. Agents excel at local changes but struggle with system-level thinking.

You still need domain knowledge. Agents don't know your users, constraints, or business logic. You bring the context they lack.

## The autonomy spectrum

**Choose your level of AI involvement based on the clarity of your task and risk.** Not all AI assistance is equal—the right level depends on how well-defined your task is and how much oversight you need.

### AI as Copilot

At this level, AI suggests, and you approve every change.

- **What it does:** Generates code blocks based on context and comments
- **You control:** When to invoke, what context to provide, what to accept
- **Best for:** Writing functions from descriptions, explaining code, generating tests

### AI as Task Agent

At this level, AI executes defined tasks autonomously, and you review the results.

- **What it does:** Takes a defined task and executes multiple steps to complete it
- **You control:** The goal, constraints, and validation criteria
- **Best for:** Features spanning multiple files, refactoring, bug fixes with clear repro steps

### AI as Workflow Agent

At the far end of the spectrum, AI manages multi-step workflows, while you set goals and constraints.

- **What it does:** Handles entire workflows including planning, implementation, testing, and iteration
- **You control:** High-level objectives and guardrails
- **Best for:** Well-defined projects with clear acceptance criteria, prototypes, exploration

### Choosing the right level

Higher autonomy doesn't necessarily mean better, so you want to match the level to your situation. Here are some factors to consider:

- **Task clarity:** Ambiguous tasks fail at higher autonomy levels.
- **Risk tolerance:** Critical code paths deserve more human oversight.
- **Your familiarity:** In unfamiliar territory, stick to lower autonomy.
- **Iteration speed:** Sometimes writing it yourself is faster than going through the prompt-debug-reprompt loop.

Think of autonomy as a slider, not a fixed setting. Start at Copilot for exploration, move to Task Agent for well-understood work, and always be ready to take manual control.

## Why now?

**AI coding tools crossed a usefulness threshold in 2023-2024.** Three capabilities converged: context windows expanded to handle entire codebases, tool use became reliable enough for agents to read files and run commands, and reasoning improved enough for multi-step planning. Models stopped being chatbots and became actors.

## Who this guide is for

Different roles have different concerns. Jump to what matters most for your role, or read through for the complete picture.

- **Engineers:** Learn how to work effectively with agents without losing your edge. See the [Getting Started](/engineers/getting-started/) guide for practical workflows.
- **Team leads:** Learn how to integrate these tools into existing workflows and train your teams. Start with [Adopting Agentic Tools](/team-leads/adopting-agentic-tools/).
- **Executives:** Learn how to make strategic decisions about AI adoption, budget, and risk. The [Strategic Vision](/executives/strategic-vision/) section covers the business case.

**This guide is community-driven.** We're all learning together. If you have experience to share or gaps to fill, [join us](/community/).

## Resources

### Essential

- READ: [The Space Between AI Hype and AI Denial](https://blog.kilo.ai/p/between-ai-hype-and-ai-denial) - Finding the productive middle ground for AI adoption
- WATCH: [The 3 Pillars of Autonomy – Michele Catasta, Replit](https://www.youtube.com/watch?v=MLhAA9yguwM) - Core framework for agent autonomy
- READ: [The o16g Manifesto](https://o16g.com/) - "Outcome Engineering" — reframing development around outcomes, not code

### Deep dives

- WATCH: [From Vibe Coding To Vibe Engineering – Kitze, Sizzy](https://www.youtube.com/watch?v=JV-wY5pxXLo) - How AI collaboration redefines development
- READ: [Vibe engineering](https://simonwillison.net/2025/Oct/7/vibe-engineering/) - Defining responsible AI-assisted development