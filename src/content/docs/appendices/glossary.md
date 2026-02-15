---
title: Glossary
description: Key terms in agentic engineering
sidebar:
  order: 1
---

A reference for terminology used throughout this guide and in the broader agentic engineering ecosystem.

## A

**Agent**
An AI system capable of taking actions in an environment. Unlike chatbots that only generate text, agents can read/write files, execute commands, and interact with systems.

**Agentic engineering**
The discipline of building software primarily by orchestrating AI agents rather than writing code directly.

**Agentic workflow**
A development process where AI agents handle significant portions of implementation, with human oversight and direction.

**Autonomy**
The degree to which an agent operates independently. Higher autonomy means less human intervention required.

**Acceptance rate**
The percentage of agent-generated suggestions accepted without modification.

## C

**Chain-of-thought (CoT)**
A prompting technique where the model shows its reasoning step-by-step, often improving accuracy.

**Context engineering**
The discipline of providing AI agents with the right information at the right time. Goes beyond prompt engineering to encompass the entire system of what an agent knows when making decisions—including system instructions, codebase knowledge, conversation history, tool outputs, and external documentation.

**Context window**
The maximum amount of text (measured in tokens) that a model can process at once.

**Copilot**
A category of AI coding assistants that provide suggestions and completions within development environments. Originally a GitHub product name, now often used generically.

## D

**Decomposition**
Breaking a complex task into smaller, agent-manageable pieces.

**Drift**
When an agent gradually moves away from the original task objective during multi-step execution.

## F

**Few-shot prompting**
Including examples in a prompt to demonstrate the desired output format or behavior.

**Fine-tuning**
Training a model on specific data to specialize its behavior for particular tasks or domains.

## G

**Guardrails**
Rules or checks that prevent agents from taking harmful or unauthorized actions.

## H

**Hallucination**
When a model generates plausible-sounding but incorrect information, such as non-existent APIs or functions.

**Human-in-the-loop (HITL)**
A design pattern where humans review and approve agent actions at key points.

## I

**Inference**
The process of generating output from a model. Running inference = asking the model to respond.

**Iteration count**
The number of prompt-response cycles needed to complete a task.

## L

**Large Language Model (LLM)**
The neural network (like GPT-4, Claude, Gemini) that powers most AI agents. Trained on massive text corpora.

**Looping**
When an agent gets stuck repeating the same failed approach.

## M

**Multi-agent system**
Multiple specialized agents collaborating to complete complex tasks.

## O

**Outcome Engineering (o16g)**
A development philosophy that reorients work around outcomes rather than code. Core tenets: manage to cost (tokens) instead of capacity (engineer-hours), measure success by verified impact rather than lines written, and treat the backlog as a relic of human limitation. See the [o16g Manifesto](https://o16g.com/).

## P

**Prompt**
The input given to an agent or model, including instructions, context, and constraints.

**Prompt engineering**
The practice of crafting effective prompts to get desired outputs from AI models.

## R

**ReAct (Reason + Act)**
A pattern where agents alternate between reasoning about what to do and taking actions. Foundation of most agentic systems.

**RAG (Retrieval Augmented Generation)**
A technique where relevant information is retrieved and added to prompts to improve response accuracy.

## S

**Scaffolding**
Providing structure, examples, or constraints to guide agent behavior.

**System prompt**
Background instructions that set an agent's behavior, usually hidden from users.

## T

**Task decomposition**
Breaking a large task into smaller, independently completable subtasks.

**Token**
A chunk of text processed by a model. Roughly 4 characters in English. Models process tokens, not characters.

**Tool use**
An agent's ability to invoke external functions: reading files, running commands, accessing APIs.

## V

**Validation**
The process of verifying that agent output is correct, secure, and meets requirements.

## Z

**Zero-shot**
Prompting a model without providing examples of desired output.

---

_This glossary will be expanded as terminology evolves._
