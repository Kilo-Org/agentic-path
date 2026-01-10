---
title: Preparing for Autonomous Agents
description: What's coming and how to position your organization
sidebar:
  order: 6
---

Current agents require significant human oversight. That's changing. Preparing now positions you for what's next.

## What autonomous agents look like

### Today's agents (Level 3)

- Execute defined tasks with occasional human guidance
- Require clear, decomposed instructions
- Make mistakes that humans catch
- Human reviews every significant output

### Emerging agents (Level 4)

- Handle entire workflows with checkpoints
- Self-decompose larger tasks
- Catch and correct more of their own errors
- Human oversight at milestones, not every step

### Future agents (Level 5)

- Operate independently on high-level objectives
- Request help when genuinely stuck
- Learn from organizational feedback
- Human sets direction, evaluates outcomes

## The timeline question

Honest assessment:

**Level 4 (workflow agents):** Emerging now. Usable for some tasks within 12-24 months.

**Level 5 (autonomous agents):** 3-5+ years for general reliability. Possibly longer for safety-critical domains.

**Nobody knows for sure.** Progress has been faster than expected. But "demo impressive" and "production reliable" are different things.

## What to do now

### Build foundations

**Clean codebases:** Autonomous agents need clear, well-structured code to work with.

**Strong test coverage:** Self-checking agents need tests to verify their work.

**Clear documentation:** Agents need context they can consume.

**Modular architecture:** Bounded changes are safer to automate.

These investments pay off whether autonomous agents arrive in 2 years or 10.

### Develop skills

**Orchestration thinking:** Managing agents is different from using tools. Start learning now.

**Specification precision:** Autonomous agents execute what you say, not what you mean. Specification becomes critical.

**System-level oversight:** Less reviewing individual code, more reviewing system behavior.

### Build organizational muscle

**Trust verification systems:** How will you verify autonomous agent output at scale?

**Governance frameworks:** What decisions require human approval, regardless of agent capability?

**Incident response for agents:** What happens when an autonomous agent breaks something?

## The Devin lesson

Devin (and similar systems) demonstrated both possibility and limitation:

**What worked:**

- End-to-end task completion is possible
- Significant capability on well-defined tasks
- Impressive demos showing autonomous flow

**What didn't:**

- Reliability on complex, ambiguous tasks
- Performance in unfamiliar territory
- Speed compared to expert humans (for now)

**The takeaway:** Autonomous agents are coming but aren't here yet. The gap between demo and production is real.

## Risks of autonomous agents

### Quality risks

- Errors at scale (many bad changes, quickly)
- Subtle bugs that pass automated checks
- Technical debt from non-optimal solutions

### Security risks

- Larger attack surface
- Agents as vectors for supply chain attacks
- Autonomous actions with security implications

### Organizational risks

- Skill atrophy if humans stop understanding the code
- Loss of institutional knowledge
- Accountability gaps

## Positioning strategy

### Conservative approach

Wait for proven reliability. Adopt only when industry norms establish safety.

**Pros:** Avoid early mistakes. Learn from others' failures.
**Cons:** Competitive disadvantage. Late skill building.

### Progressive approach

Engage early. Build expertise. Accept some risk for positioning.

**Pros:** Competitive advantage. Deep expertise. Shape best practices.
**Cons:** Higher risk. Learning costs. Potential dead ends.

### Recommended: Progressive with guardrails

- Actively experiment with emerging autonomous agents
- Keep humans in the loop for anything consequential
- Build the monitoring and verification systems now
- Develop organizational expertise before full reliance

## Questions for your team

- What would change if agents could handle entire features autonomously?
- What decisions can _never_ be fully automated in our context?
- How would we verify work we don't manually review?
- What skills do we need our humans to keep sharp?

## Resources

### Deep dives

- [Self Coding Agents – Colin Flaherty, Augment Code](https://www.youtube.com/watch?v=Iw_3cRf3lnM) - What supervising AI agents at scale looks like
