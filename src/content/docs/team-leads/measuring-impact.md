---
title: Measuring Impact
description: What to measure, what not to measure, and when to pull back
sidebar:
  order: 3
---

Everyone wants to measure agent impact. Most measurements are wrong. And sometimes agents slow you down.

## The Measurement Trap

When you measure wrong things, people optimize for metrics, not outcomes.

| Bad metric                 | Gaming behavior                               |
| -------------------------- | --------------------------------------------- |
| Lines of code generated    | Verbose, less clean code                      |
| Tasks completed per sprint | Task inflation, tiny pieces                   |
| Time using AI tools        | Running agents on things faster done manually |

## What to Actually Measure

### Leading Indicators (early signals)

- **Acceptance rate:** What % of suggestions accepted vs. rejected? Low rates suggest poor fit or skill gaps.
- **Iteration count:** How many prompt cycles before useful output? Decreasing = improving skills.
- **Task scope:** Are engineers tackling larger tasks with agent help? Growing confidence.
- **Review feedback:** Are reviewers catching fewer issues in agent-assisted PRs over time?

### Lagging Indicators (outcomes)

- **Velocity:** Look at trends, not absolutes. Compare to teams not using agents. (Careful—gameable.)
- **Bug rates:** Bugs per feature changing? Account for code attribution.
- **Time to production:** Feature start to deploy. Harder to game.
- **Developer satisfaction:** Survey your team. Happy devs are productive devs.

### What Not to Measure

- **Lines of code**—irrelevant and gameable
- **Tool usage time**—usage ≠ value
- **Cost of AI tools**—matters for ROI, not effectiveness
- **Prompt count**—more prompts might mean learning

## The Attribution Problem

Who gets credit for AI-generated code? Who takes blame?

**Don't solve this.** Treat agent-assisted code like any other. The human who committed it owns it.

This simplifies everything: no separate metrics, normal accountability, no need to track percentages.

## Qualitative Signals

Numbers don't tell the whole story. Watch for:

- **Team sentiment:** Excitement or frustration? Positive talk about agents?
- **Adoption patterns:** Senior engineers using agents is a quality signal
- **Knowledge sharing:** Organic prompt sharing indicates value
- **Problem selection:** Engineers tackling harder problems is often the real win

## Running an Experiment

If you need rigorous measurement:

1. **Control group:** Some work happens without agents
2. **Clear metrics:** Define before you start
3. **Time bound:** 4-6 weeks to account for learning curves
4. **Survey participants:** Qualitative data matters

But most teams don't need academic proof—just signals that adoption is working.

## The Real Question

Don't ask "Are agents making us more productive?"

Ask **"Are we building what we need, at the quality we need, without burning out?"**

If yes, your approach is working.

---

## When Agents Help

### High-volume repetitive tasks

Tests for multiple functions, docs across files, API boilerplate, migration scripts. Same thing, many times—agents thrive.

### New territory exploration

Unfamiliar framework? Agent scaffolds while you learn. New language? Get working examples. Unknown API? Generate integration code to understand patterns.

### Clear spec, straightforward implementation

CRUD with defined schemas, form validation with known rules, utilities with well-defined I/O. Low ambiguity, well-understood problem space.

### Tedious but necessary

Mocks and fixtures, logging and error handling, consistent formatting, config updates across many places. Takes time but not thought.

## When Agents Slow You Down

### High-context tasks

If understanding requires reading complex business logic, historical decisions, or unwritten conventions—you'd have to explain it all anyway. Often faster to just do it.

### Tasks faster done manually

**Prompting + waiting + reviewing > manual coding?** Just code it. Especially true for single-line changes, familiar patterns, quick fixes.

Build intuition for your personal break-even point.

### Novel algorithms

Agents pattern-match training data. New algorithmic approaches, domain-specific optimization, unusual data structures—solve it yourself, let agents help with boring parts around it.

### Highly coupled changes

Changes touching many tightly-interdependent parts are hard for agents. They may not understand connections, errors compound, validation requires whole-system understanding. Break these apart or do manually.

### Ambiguous requirements

"Make it better" or "improve performance" without specifics wastes cycles. Agents need clear success criteria, defined constraints, specific scope. If you can't articulate these, you're not ready to delegate.

## Team-Level Patterns

**Task assignment:** Don't assign agent-hostile tasks expecting agents will help.

**Sprint planning:** Don't assume agent help for all tasks. Call out which are agent-friendly. Account for validation overhead.

**Retrospectives:** Review where agents helped and hindered. What task types worked? Where did you waste time prompting?

## Building Team Judgment

- **Share examples:** "This task would have been faster manually—here's why."
- **Celebrate good choices:** Acknowledge when someone correctly decides _not_ to use an agent.
- **Create a reference:** Maintain a guide of task types and recommended approaches.
- **Review periodically:** As tools improve, patterns change.

## Resources

### Essential

- [Does AI Actually Boost Developer Productivity? – Yegor Denisov-Blanch, Stanford](https://www.youtube.com/watch?v=tbDDYKRFjhk) - 100k developer study: ~20% average boost, significant variance
- [Stop Looking for AI Coding Spending Caps](https://blog.kilo.ai/p/stop-looking-for-ai-coding-spending) - Why caps cost more than they save
- [ML-Enhanced Code Completion – Google Research](https://research.google/blog/ml-enhanced-code-completion-improves-developer-productivity/) - Google's productivity impact research

### Deep dives

- [The reality of AI-Assisted software engineering productivity](https://addyo.substack.com/p/the-reality-of-ai-assisted-software) - Balanced take on productivity claims
- [Vibe coding is already dead](https://www.youtube.com/watch?v=tKPtZtsLgUA) - Critical perspective on when AI tools backfire
