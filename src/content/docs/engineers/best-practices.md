---
title: Best Practices
description: Context engineering, common failure modes, and building AI-compatible codebases
sidebar:
  order: 3
---

The difference between agents that reliably ship code and agents that spin their wheels? Context. Learning to engineer context—and structure your code to help agents succeed—makes agentic development predictable.

## Context engineering

Context engineering is the discipline of providing AI agents with the right information at the right time. It's not just prompt engineering—it's the entire system of what an agent knows when it makes decisions.

Think of it this way: an agent's context window is its entire working memory. Everything it can "see" at once—your instructions, the code, conversation history, tool outputs—shapes every decision it makes. Engineer that context poorly, and even the smartest model produces garbage.

### Why context matters more than prompts

A perfect prompt with bad context fails. A mediocre prompt with excellent context often succeeds.

**Context includes:**

- **System instructions** — The agent's baseline behavior and constraints
- **Codebase knowledge** — Files, patterns, conventions the agent can reference
- **Conversation history** — What's been discussed and decided
- **Tool outputs** — Results from file reads, command execution, searches
- **External documentation** — API docs, specs, requirements

**Prompts are just one piece.** The agent's entire context window determines output quality.

### The context engineering workflow

**1. Curate what goes in**

Not everything belongs in context. More isn't better—it's often worse. Irrelevant context dilutes signal and wastes tokens.

Ask: What does the agent _need_ to complete this task? Include that. Exclude everything else.

**2. Structure for retrieval**

Agents scan context looking for relevant information. Make it findable:

- Use clear headings and sections
- Put critical constraints early
- Group related information together
- Use consistent formatting

**3. Manage context lifecycle**

Context windows fill up. When they do, older content gets truncated—the agent literally forgets it.

- Start fresh conversations for new tasks
- Summarize long discussions before continuing
- Re-state critical constraints when context is getting full
- Use tools like AGENTS.md to persist important context across sessions

### Practical context techniques

**Include relevant code, not all code.** If you're modifying a function, include that function and its direct dependencies. Don't dump the entire codebase.

**Provide examples of desired output.** Show the agent what good looks like. A single example often beats paragraphs of description.

**State constraints explicitly.** "Don't modify the public API" is context. "Follow the error handling pattern in auth.ts" is context. Make implicit knowledge explicit.

**Use documentation as context.** When working with unfamiliar APIs, paste relevant docs into the conversation. The agent can't hallucinate what's right in front of it.

**Leverage persistent context files.** AGENTS.md, README files, and similar documents provide context that persists across sessions. Keep them current.

### Context anti-patterns

**Kitchen sink context** — Dumping everything "just in case." Dilutes signal, wastes tokens, confuses the agent.

**Stale context** — Outdated documentation or code that contradicts current state. Leads to hallucinations and wrong assumptions.

**Implicit context** — Assuming the agent knows things you haven't told it. Your mental model isn't in the context window.

**Context fragmentation** — Spreading related information across many messages. Group related context together.

## Failure modes to watch

Agents fail in predictable ways. Learning these patterns helps you catch problems early.

### Hallucinations

Agents use APIs, methods, or parameters that don't exist. Code looks right but fails at runtime.

**Triggers:** Less popular libraries, recently changed APIs, domain-specific tools.

**Catch it:** Be suspicious of unfamiliar method names. Verify imports exist. Run the code—don't just read it.

**Prevent it:** Include relevant docs in your context. Use well-known patterns. Ask the agent to explain its reasoning.

### Drift

The agent starts solving your problem but gradually shifts to a different, easier problem.

**Triggers:** Long prompts with multiple objectives. Ambiguous requirements.

**Catch it:** Re-read the original requirement after each iteration. Ask: "Does this still address my actual problem?"

**Prevent it:** Break into smaller, focused pieces. State success criteria explicitly.

### Looping

The agent tries the same failing approach repeatedly with minor variations.

**Triggers:** Errors the agent doesn't understand. Tasks beyond capability. Missing context.

**Catch it:** Track iterations—if you're past 3-4, something's wrong.

**Prevent it:** Provide error context. Break out manually and try a different approach.

### Overconfidence

The agent declares success when code doesn't work, or claims certainty about incorrect information.

**Catch it:** Never trust self-assessment. Run the code yourself. Write tests for actual requirements.

**Prevent it:** Ask how it verified correctness. Request specific edge case tests.

### Context overflow

Early context gets "forgotten" as conversations grow. Agent contradicts earlier decisions or ignores constraints.

**Triggers:** Long conversations. Large codebases in context. Complex multi-step tasks.

**Catch it:** Watch for inconsistencies. Notice when agent asks for info you already provided.

**Prevent it:** Keep conversations focused and short. Start fresh for new tasks. Re-state critical context.

### Plausible nonsense

Code looks sophisticated but fundamentally misunderstands the problem or domain.

**Catch it:** Trace logic mentally—does it make sense? Get domain expert review.

**Prevent it:** Provide domain context explicitly. Include examples of correct solutions.

## Building AI-compatible code

The same patterns that help new developers help agents: clear structure, explicit types, good documentation, consistent patterns.

### Structure

**Keep files focused.** One concept per file. Agents request specific files—make those requests useful.

**Use descriptive names.** `UserAuthenticationService.ts` beats `uas.ts`. Agents infer purpose from names.

**Flatten when possible.** Deep nesting forces agents to understand hierarchy.

**Keep functions short.** Under 50 lines. Single responsibility. Clear inputs and outputs.

### Types and contracts

**Use types generously.** TypeScript, Python type hints. Types are machine-readable documentation.

```typescript
// Harder for agents
function process(data) {
  /* what's data? */
}

// Easier for agents
function processOrder(order: Order): ProcessedResult {
  /* clear context */
}
```

**Define interfaces at boundaries.** Explicit interfaces prevent integration bugs.

**Avoid any/unknown.** More type information enables better inference.

### Documentation

**Document the "why," not the "what."** Agents read what code does. They can't read your mind.

```typescript
// Less useful
// This function calculates the discount
function calculateDiscount(order: Order): number;

// More useful
// Business rule: Premium customers get 10% off orders over $100
// This discount stacks with promotional codes
function calculateDiscount(order: Order): number;
```

**Keep READMEs current.** Agents often start by reading them. Outdated docs mislead.

**Document non-obvious constraints.** Rate limits, known limitations, things that "just work that way."

### Testing

**Write tests as specification.** Tests tell agents what code should do.

**Keep tests fast.** Agents run tests frequently. Slow tests break feedback loops.

**Test edge cases explicitly.** Tests covering edges tell agents about edges they might miss.

**Use descriptive names.** `test_user_creation_fails_with_duplicate_email` beats `test_user_3`.

### Patterns to avoid

- **Magic and metaprogramming** — Dynamic method generation, heavy reflection confuse agents
- **Implicit dependencies** — Service locators, ambient context hide needed information
- **Circular dependencies** — Confuse agents about what depends on what
- **Inconsistent patterns** — If you do the same thing three ways, agents won't know which to follow

## Incremental improvement

You don't need to rewrite everything. As you touch code:

- Improve the file you're modifying
- Add types where you add code
- Write a test when you fix a bug
- Update docs when you discover they're wrong

Over time, the codebase becomes more agent-friendly—and more human-friendly.

## Resources

### Context engineering

- [Context Engineering for AI Agents – Tobi Lutke](https://x.com/tolobi/status/1935533391175041359) - Shopify CEO on why context engineering is the new skill
- [Context Engineering – Andrej Karpathy](https://x.com/karpathy/status/1937902205765607626) - "Prompt engineering is dead, context engineering is king"
- [AGENTS.md](https://agents.md/) - Open format for persistent agent context, used by 60k+ open-source projects

### Failure modes and recovery

- ["I shipped code I don't understand" – Jake Nations, Netflix](https://www.youtube.com/watch?v=eIoohUmYpGI) - The "Infinite Software Crisis" and how to avoid it
- [Agent Readiness – Eno Reyes, Factory AI](https://www.youtube.com/watch?v=ShuJ_CN6zr4) - Eight categories for agent-ready codebases

### Deep dives

- [No Vibes Allowed – Dex Horthy, HumanLayer](https://www.youtube.com/watch?v=rmvDxxNubIg) - Making agents work in 300k LOC codebases
- [RepoCoder: Repository-Level Code Completion](https://arxiv.org/abs/2303.12570) - Framework for leveraging repository context
