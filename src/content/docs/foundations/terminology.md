---
title: Core Terminology
description: Key terms and concepts you'll encounter in agentic engineering
sidebar:
  order: 4
---

A quick reference for the vocabulary of agentic engineering. These terms appear throughout this guide and in the broader ecosystem.

## Agent concepts

**Agent** - An AI system that can take actions in an environment. Unlike a chatbot (which only generates text), agents interact with tools, files, and systems.

**Agentic workflow** - A development process where AI agents handle significant portions of implementation, with human oversight and direction.

**Autonomy** - The degree to which an agent operates independently. Higher autonomy = less human intervention required.

**Tool use** - An agent's ability to invoke external functions: reading files, running commands, searching code, browsing the web.

**ReAct (Reason + Act)** - A pattern where agents alternate between reasoning about what to do and taking actions. The foundation of most agentic systems.

## Language model terms

**LLM (Large Language Model)** - The neural network that powers most agents. Examples: GPT-4, Claude, Gemini.

**Context window** - The maximum amount of text a model can process at once. Measured in tokens.

**Token** - A chunk of text (roughly 4 characters in English). Models process and generate tokens, not characters.

**Inference** - The process of generating output from a model. "Running inference" = asking the model to respond.

**Fine-tuning** - Training a model on specific data to specialize its behavior. Distinct from prompting.

## Prompting terms

**Prompt** - The input you give to an agent or model. Includes instructions, context, and constraints.

**System prompt** - Background instructions that set an agent's behavior. Usually hidden from users.

**Few-shot prompting** - Including examples in your prompt to demonstrate desired output format.

**Chain-of-thought** - Asking the model to show its reasoning step by step. Often improves accuracy.

**Prompt engineering** - The practice of crafting effective prompts. A core skill in agentic engineering.

## Failure modes

**Hallucination** - When a model generates plausible-sounding but incorrect information. Common with APIs, function names, and facts.

**Drift** - Gradual deviation from the original task as an agent takes multiple steps.

**Looping** - When an agent gets stuck repeating the same failed approach.

**Context overflow** - When the information needed exceeds the context window, forcing the agent to "forget" earlier content.

## Development patterns

**Task decomposition** - Breaking a large task into smaller, agent-manageable pieces.

**Human-in-the-loop** - Design pattern where humans review and approve agent actions at key points.

**Scaffolding** - Providing structure, examples, or constraints to guide agent behavior.

**Guardrails** - Rules or checks that prevent agents from taking harmful or unauthorized actions.

## Metrics

**Acceptance rate** - Percentage of agent-generated code that's used without modification.

**Iteration count** - Number of prompt-response cycles needed to complete a task.

**Time to first useful output** - How quickly an agent produces something you can work with.

## Resources

### Essential

- [The Minimum Every Developer Must Know About AI Models](https://blog.kilo.ai/p/minimum-every-developer-must-know-about-ai-models) - Baseline knowledge every developer needs
- [What is a large language model (LLM)?](https://www.cloudflare.com/en-gb/learning/ai/what-is-large-language-model/) - Clear, accessible LLM definition
- [What is Model Context Protocol (MCP)](https://modelcontextprotocol.io/docs/getting-started/intro) - The standard for AI-external system connections

### Videos

- [How Large Language Models Work](https://www.youtube.com/watch?v=5sLYAQS9sWQ) - 5-minute explainer on LLM fundamentals
- [OpenAI Embeddings Explained in 5 Minutes](https://www.youtube.com/watch?v=8kJStTRuMcs) - Quick primer on embeddings for AI systems
- [Large Language Models – Everything You NEED To Know](https://www.youtube.com/watch?v=osKyvYJ3PRM) - Comprehensive beginner overview
