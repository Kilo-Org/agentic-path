---
title: Categories of Agentic Tools
description: Understanding the landscape of AI development tools
sidebar:
  order: 1
---

The tool landscape is evolving rapidly. Rather than reviewing specific products (which date quickly), let's understand the categories and what to look for.

## IDE-integrated assistants

**What they do:** Code completion, generation, and chat within your development environment.

**Examples of the category:** GitHub Copilot, Cursor, Cody, Continue, Amazon Q Developer, Tabnine.

**Characteristics:**

- Tight integration with editing workflow
- Real-time suggestions as you type
- Chat interface for longer interactions
- Context from open files and project

**Good for:**

- Day-to-day coding productivity
- In-flow assistance
- Low friction for individual developers

**Considerations:**

- IDE lock-in (some are editor-specific)
- Varying quality by language/framework
- Privacy model differs by vendor

## Standalone agents

**What they do:** Execute multi-step tasks with greater autonomy than IDE assistants.

**Examples of the category:** Kilo Code, Aider, Claude Code, Devin-style systems.

**Characteristics:**

- Task-level operation (not just completion)
- File system access and modification
- Command execution capability
- Can work across multiple files

**Good for:**

- Feature implementation
- Larger refactoring
- Bug fixes with clear repro
- Exploration of unfamiliar codebases

**Considerations:**

- Requires more skill to use effectively
- Higher risk of unwanted changes
- May need more oversight

## API and platform access

**What they do:** Provide model access for custom applications and integrations.

**Examples of the category:** OpenAI API, Anthropic API, Google AI, Azure OpenAI, AWS Bedrock.

**Characteristics:**

- Programmatic access to models
- Build custom tooling on top
- Pay-per-use pricing typically
- Various model options

**Good for:**

- Custom agent development
- Integration into internal tools
- Specialized use cases
- High-volume automation

**Considerations:**

- Requires development effort
- Need to build your own UX
- Direct cost accountability

## Specialized tools

**What they do:** Focus on specific development tasks or domains.

**Categories include:**

**Testing tools:** AI-powered test generation, coverage analysis.

**Security tools:** AI-assisted vulnerability detection, code scanning.

**Documentation tools:** Automated doc generation, maintenance.

**Code review tools:** AI pre-review, style checking, bug detection.

**Debugging tools:** Intelligent error analysis, fix suggestions.

**Good for:**

- Deep capability in specific area
- Integration into existing workflows
- Automation of specific tasks

**Considerations:**

- May overlap with general tools
- Integration burden
- Varying maturity

## Infrastructure and orchestration

**What they do:** Provide infrastructure for running and managing agents.

**Examples of the category:** LangChain, LlamaIndex, custom orchestration, agent frameworks.

**Characteristics:**

- Building blocks for agent systems
- Memory and state management
- Tool integration frameworks
- Multi-agent coordination

**Good for:**

- Building custom agent solutions
- Complex workflow automation
- Research and experimentation

**Considerations:**

- Requires engineering investment
- Evolving rapidly (breaking changes)
- Overkill for simple use cases

## Self-hosted vs. cloud

**Cloud-hosted:**

- Immediate start
- No infrastructure management
- Ongoing subscription cost
- Data leaves your network

**Self-hosted:**

- Data stays internal
- More control
- Infrastructure overhead
- May trail in capability

**Hybrid options:**

- API access with data handling agreements
- Enterprise plans with isolation
- Edge deployment of some models

## Resources

### Essential

- [Claude Code & the evolution of agentic coding – Boris Cherny, Anthropic](https://www.youtube.com/watch?v=Lue8K2jqfKk) - Overview of the coding tools landscape

### Deep dives

- [Cursor just changed forever](https://www.youtube.com/watch?v=VgtfpTGJmHQ) - Cursor 2.0's agent-centric design
- [Defying Gravity – Kevin Hou, Google DeepMind](https://www.youtube.com/watch?v=HN-F-OQe6j0) - Google's agentic IDE vision
- [The State of AI Coding 2025](https://www.greptile.com/state-of-ai-coding-2025) - Survey of AI coding tools
