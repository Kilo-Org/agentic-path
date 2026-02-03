---
title: OpenClaw
description: An open-source AI agent runtime that connects to your existing tools and services
sidebar:
  order: 9
---

Most AI coding tools assume you're at a terminal, copying prompts and pasting responses. The agent exists in a browser tab, disconnected from everything else you use. You're the integration layer.

OpenClaw takes a different approach: the agent lives in your infrastructure. It connects to your messaging apps, calendar, email, filesystem, and whatever else you wire up. Instead of context-switching to AI, the AI has context about you.

## The core idea

OpenClaw is an open-source runtime that gives AI agents persistent access to your tools. It runs locally or on a VPS you control. Your data stays yours.

```bash
# Install
npm install -g openclaw

# Setup (interactive)
openclaw onboard

# Start the daemon
openclaw gateway start
```

Once running, you can reach your agent via Telegram, Discord, Signal, Slack, CLI, or web dashboard. One agent, multiple surfaces.

**The philosophy:** AI should adapt to your workflow, not the other way around. Persistent context beats fresh starts.

## How it works

OpenClaw connects three things:

```
┌─────────────────────────────────────────────────────┐
│ Channels (how you talk to it)                       │
│ Telegram, Discord, Signal, Slack, CLI, Web         │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│ Gateway (the runtime)                               │
│ Routes messages, manages sessions, runs tools       │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│ Tools & Skills                                      │
│ Shell, browser, files, MCP servers, custom skills   │
└─────────────────────────────────────────────────────┘
```

The agent maintains context through workspace files:

- `AGENTS.md` — How the agent should behave
- `SOUL.md` — Personality and tone  
- `USER.md` — Context about who it's helping
- `MEMORY.md` — Long-term curated memory
- `memory/YYYY-MM-DD.md` — Daily session notes

These files are injected into every conversation. The agent builds understanding over time, like a colleague who's been paying attention.

## Key capabilities

### Proactive behavior

Unlike chat-only tools, OpenClaw can reach out to you:

```markdown
# HEARTBEAT.md - checked every 30 minutes
- Check inbox for urgent emails
- Review calendar for upcoming meetings
- Monitor GitHub notifications
```

The agent polls on a schedule. When something needs attention, it messages you. No need to remember to ask.

### Background tasks

Spawn sub-agents for parallel work:

```
You: "Research competitors while I focus on the pitch deck"
Agent: [spawns research sub-agent, continues helping with deck]
Sub-agent: [works independently, reports back when done]
```

Long-running tasks don't block the conversation.

### Tool integration

Built-in tools cover common needs:

- **Shell execution** — Run commands, scripts, builds
- **Browser automation** — Navigate, scrape, interact with web apps
- **File operations** — Read, write, edit, organize
- **Web search** — Research without leaving the conversation

Extend with skills for specific workflows:

```bash
# Install a skill
clawhub install trello

# Now the agent can manage your boards
"Move the 'API redesign' card to Done"
```

### Multi-channel presence

Same agent, multiple ways to reach it:

- Quick question via Telegram while mobile
- Deep work session via CLI at your desk
- Team collaboration via Discord or Slack
- Dashboard for reviewing history

Context carries across channels. The agent knows what you discussed on Telegram when you continue on CLI.

## When to use it

OpenClaw works well for:

- **Personal AI assistant** — Inbox triage, calendar management, task tracking
- **Development workflows** — Code review, PR monitoring, CI/CD notifications  
- **Research and writing** — Web research, drafting, editing with persistent context
- **Automation** — Scheduled tasks, monitoring, proactive alerts

It's less suited for:

- One-off coding questions (just use ChatGPT)
- Team-wide deployment (designed for personal/small team use)
- Environments where local installation isn't possible

## Getting started

```bash
# Install globally
npm install -g openclaw

# Interactive setup - configures model, channels, workspace
openclaw onboard

# Start the gateway daemon
openclaw gateway start

# Check status
openclaw status
```

The onboarding wizard walks through:
1. Choosing an AI provider (OpenRouter, Anthropic, OpenAI, etc.)
2. Setting up channels (Telegram bot, Discord, etc.)
3. Configuring your workspace

## Resources

- [GitHub Repository](https://github.com/openclaw/openclaw) — Source code
- [Documentation](https://docs.openclaw.ai) — Full docs
- [ClawHub](https://clawhub.com) — Find and share skills
- [Discord Community](https://discord.com/invite/clawd) — Support and discussion

---

*OpenClaw is open source and actively developed. The project welcomes contributions.*
