---
title: Measuring Productivity Without Gaming Metrics
description: Understanding what agent adoption actually changes
sidebar:
  order: 4
---

Everyone wants to measure agent impact. Most measurements are wrong. Here's how to think about it clearly.

## The measurement trap

When you measure the wrong things, people optimize for metrics, not outcomes.

**Bad metric:** Lines of code generated.
**Gaming behavior:** More verbose, less clean code. Copy-paste proliferation.

**Bad metric:** Tasks completed per sprint.
**Gaming behavior:** Task inflation. Breaking work into tiny pieces.

**Bad metric:** Time spent using AI tools.
**Gaming behavior:** Running agents on things faster done manually.

## What to actually measure

### Leading indicators

Signs that adoption is working, measurable early:

**Acceptance rate.** What percentage of agent suggestions are accepted vs. rejected? Lower rates suggest poor fit or skills gaps.

**Iteration count.** How many prompt cycles before useful output? Decreasing iterations indicate improving skills.

**Task scope.** Are engineers taking on larger tasks with agent help? This suggests growing confidence.

**Code review feedback.** Are reviewers catching fewer issues in agent-assisted PRs over time?

### Lagging indicators

Outcomes that take longer to manifest:

**Velocity.** Careful here—sprint velocity is notoriously gameable. Look at trends, not absolute numbers. Compare to similar teams not using agents.

**Bug rates.** Are bugs per feature (or per line) changing? Account for code attribution.

**Time to production.** How long from feature start to production deploy? This is harder to game.

**Developer satisfaction.** Survey your team. Happy developers are productive developers.

### What not to measure

**Lines of code.** Irrelevant and gameable.

**Tool usage time.** Usage doesn't equal value.

**Cost of AI tools.** This matters for ROI but says nothing about effectiveness.

**Prompt count.** More prompts might mean learning, not failure.

## The attribution problem

When code is AI-generated vs. human-modified, who gets credit? Who takes blame?

**Don't solve this.** Treat agent-assisted code like any other code. The human who committed it owns it.

This simplifies everything:

- No separate metrics for AI code
- Normal accountability applies
- No need to track percentages

## Qualitative signals

Numbers don't tell the whole story. Pay attention to:

**Team sentiment.** Are people excited or frustrated? Do they talk positively about agents?

**Adoption patterns.** Are senior engineers using agents? That's a quality signal.

**Knowledge sharing.** Is the team sharing prompts and techniques? Organic sharing indicates value.

**Problem selection.** Are engineers tackling harder problems? More exploration? This is often the real win.

## Running an experiment

If you want rigorous measurement:

1. **Control group.** Some work happens without agents (where ethical/practical)
2. **Clear metrics.** Define what you're measuring before you start
3. **Time bound.** Run for 4-6 weeks to account for learning curves
4. **Survey participants.** Qualitative data matters

But honestly? Most teams don't need rigorous experiments. They need signals that adoption is working, not academic proof.

## The real question

Don't ask "Are agents making us more productive?"

Ask "Are we building what we need to build, at the quality we need, without burning out?"

If yes, your approach is working. Whether agents contribute 10% or 30% to that outcome matters less than the outcome itself.

## Resources

### Essential

- [Does AI Actually Boost Developer Productivity? – Yegor Denisov-Blanch, Stanford](https://www.youtube.com/watch?v=tbDDYKRFjhk) - 100k developer study: ~20% average boost, significant variance
- [Stop Looking for AI Coding Spending Caps](https://blog.kilo.ai/p/stop-looking-for-ai-coding-spending) - Why caps cost more than they save
- [ML-Enhanced Code Completion – Google Research](https://research.google/blog/ml-enhanced-code-completion-improves-developer-productivity/) - Google's productivity impact research

### Deep dives

- [The reality of AI-Assisted software engineering productivity](https://addyo.substack.com/p/the-reality-of-ai-assisted-software) - Balanced take on productivity claims
