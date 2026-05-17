---
title: Outcome Engineering (o16g)
description: A manifesto for moving beyond code to outcomes in the age of AI agents
sidebar:
  order: 8
---

Software engineering has always been about outcomes, not code. Code is just the incantation that transforms computation into magic—the mechanism that delivers an idea. With AI agents removing the constraints of time and human bandwidth, we can finally treat code as what it is: a means to an end, not the end itself.

**Outcome Engineering** (o16g) is a framework for reorienting development around delivered impact rather than lines written. It's a set of principles for making agentic development vastly more capable, faster, and trustworthy than either vibe coding or hand-coding alone.

## The core insight

> "It was never about the code."

The traditional backlog exists because human bandwidth was the limiting factor. You rejected ideas for lack of time, not lack of value. With agents, creation is limited only by the cost of compute, not capacity.

This changes everything:

- **Creation, not code** — Focus on what you're building, not how you're typing it.
- **Cost, not time** — Manage to budget, not capacity. If the outcome is worth the tokens, it gets built.
- **Capacity, not backlog** — Never reject an idea for lack of time, only for lack of budget.
- **Certainty, not vibes** — The only truth is the rate of positive change delivered to the customer.

## The 16 principles

O16g starts with 16 principles that guide agentic development.

### Human Intent

> Agents explore paths; humans choose the destination.

Do not abdicate vision to the machine. Create with mission, goals, and authorial intent. You decide where you're going; agents get you there.

### Verified Reality is the Only Truth

> Code is a vanity metric; vibes are not tests.

The only truth is the rate of positive change delivered to the customer. Grade agents not on the lines they write, but on the binary reality they verify. If you cannot predict, measure, and prove it worked, you failed.

### No More Single Player Mode

> Chat is a bottleneck, not an API.

Whether humans or agents, outcome engineering is a team sport. Define the protocol for debate, decision, and delivery. Ambiguity in coordination is a system failure. Surface all the debates formerly hidden by the backlog.

### The Backlog is Dead

> The backlog is a relic of human limitation.

Never reject an idea for lack of time, only for lack of budget. If the outcome is worth the tokens, it gets built.

### Unleash the Builders

> We are architects of reality, not typewriters.

Write code only when it brings joy. Delegate the toil. Never let implementation details, integration, or time block exploration and creation.

### No Wandering in the Dark

> Never dispatch an agent without context.

Map the territory before building. If you don't know where you stand, you cannot calculate the path to the destination.

### Build It All

> In an agentic world, code is the cheapest resource.

Build to answer questions. Build to test hypotheses. Build to inform debates openly. Build the things you used to buy so you can prove they work perfectly for you. Take every opportunity to get better at knowing you can deliver the outcomes you want.

### Failures are Artifacts

> Opinions are conjecture; outcomes are data.

When an outcome fails, do not simply rollback. Dissect the failure. Understand why the hypothesis was wrong. Debug the decision, not just the code.

### Agentic Coordination is a New Org

> Scaling agents mirrors scaling people, but faster, weirder, and harder.

Design the organization chart and employee handbook for the swarm. Engineer against the infinite spins of indecision and the echo chambers of model groupthink. Build the structures that keep a massive, tireless workforce aligned, decisive, and sane.

### Code the Constitution

> Don't fall victim to decision fatigue.

Don't paper over poor architecture with checkpoints. Encode laws into the environment. Codify mission, vision, and goals. If the agent cannot parse the intent, it cannot provably deliver the outcome. Ambiguity is the enemy of alignment.

### All the Context, Everywhere

> Agents cannot reason in a vacuum.

Embed context into the infrastructure, not just the prompt. Build the knowledge graph so the agent understands the world before it attempts to change it.

### Priorities Drive Compute

> No matter how scalable, compute is still a cost.

Always know the next most important task, what would most benefit from compute and attention. Do the hard work to align. Optimize for outcomes. Everything you learn informs your priorities.

### Show Your Work

> Code is the what; reasoning is the why.

Do not accept a black box. Agents must record their discoveries, their rejected paths, and their logic. Pay the compute cost to understand the machine.

### Continuous Improvement

> Repeating a mistake is a system failure.

Spend compute on the post-mortem. Automate the analysis of what went wrong. Inoculate the system so the error never happens again.

### Risk Stops the Line

> Speed is dangerous without brakes.

Make risk a blocking function. If the risk is unknown or unmitigated, the line stops. Do not hide danger in a report; encode it as a gate.

### Audit the Outcomes

> Trust is a vulnerability.

Models drift. Prompts break. Capabilities change overnight. Continuously audit the agent against the domain. Verify the tool is sharp before you use it.

## Applying o16g in practice

### Managing to cost, not capacity

The traditional question: "Do we have bandwidth for this feature?"

The o16g question: "Is this feature worth the compute cost?"

This reframing has practical implications:

- **Exploration becomes cheap** — Spin up variants to test hypotheses rather than debating in meetings.
- **Technical debt becomes a budget line** — Instead of accumulating debt because "we don't have time," you decide whether paying it down is worth the tokens.
- **Prioritization becomes economics** — Stack rank by expected value per token, not by available engineer-hours.

### Encoding intent as infrastructure

O16g emphasizes codifying intent where agents can actually use it:

- **Constitutions** — Non-negotiable principles encoded as guardrails (similar to [Spec-Driven Development's](/introduction/patterns/spec-driven-development/) constitution phase).
- **Knowledge graphs** — Context embedded in infrastructure, not scattered across prompts.
- **Verification gates** — Risk encoded as blocking functions, not post-hoc reports.

### Treating failures as data

When an agent fails, o16g prescribes:

1. Don't just rollback — dissect the failure.
2. Debug the decision, not just the code.
3. Automate the post-mortem analysis.
4. Inoculate the system against repeat failures.

This mirrors the [RPI pattern's](/introduction/patterns/rpi/) emphasis on research before implementation, but extends it to continuous learning from production outcomes.

## Relationship to other patterns

O16g is a philosophical framework that complements tactical patterns:

| Pattern | Focus | O16g connection |
|---------|-------|-----------------|
| [Spec-Driven Development](/introduction/patterns/spec-driven-development/) | Capturing intent before code | "Code the Constitution" — encode laws into the environment |
| [RPI](/introduction/patterns/rpi/) | Research → Plan → Implement | "No Wandering in the Dark" — map territory before building |
| [Ralph Wiggum](/introduction/patterns/ralph-wiggum/) | Autonomous iteration loops | "Build It All" — let agents iterate until outcomes are verified |

While these patterns provide the *how*, o16g provides the *why*: measuring success by outcomes delivered, not code written.

## Who this is for

O16g emerged from practitioners building real systems with agents. The author, Cory Ondrejka, was CTO of Onebrief, co-creator of Second Life, an engineering leader at Google, and is credited with [saving Meta](https://www.businessinsider.com/meet-the-engineer-who-saved-facebook-2013-1) during a critical period.

The framework is particularly relevant for:

- **Teams scaling agentic workflows** — The "Agentic Coordination is a New Org" principle addresses the organizational challenges of agent swarms.
- **Leaders setting strategy** — Cost-based prioritization changes how you think about roadmaps.
- **Engineers questioning fundamentals** — If you sense that vibe coding isn't enough but aren't sure what comes next.

## Resources

### Official

- READ: [The o16g Manifesto](https://o16g.com/) — The complete manifesto with all 16 principles

### Author

- Cory Ondrejka — CTO of Onebrief, co-creator of Second Life, former engineering leader at Google and Meta

---

**Practicing outcome engineering?** [Share your experience](/community/contributing/)—how measuring outcomes instead of output has changed your team's approach.
