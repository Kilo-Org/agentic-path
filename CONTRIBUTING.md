# Contributing to Agentic Engineering for Humans

First off—thanks for being here. This guide exists because people like you share what they've learned. Every contribution makes this resource better for the next person figuring out how to work with AI agents.

## The short version

1. **Small fixes** (typos, broken links, minor clarifications) — Just open a PR
2. **New content or major changes** — Open an issue first so we can discuss
3. **Not sure?** — Ask in [Discord](https://kilo.love/discord) or open a discussion

## What we're looking for

### High-value contributions

- **Real-world experience** — What actually worked (or didn't) when you tried it
- **Practical examples** — Code snippets, prompts, workflows that people can use
- **Updated information** — This field moves fast; help us keep up
- **Missing perspectives** — Different tools, languages, team sizes, industries
- **Better explanations** — If something confused you, it probably confuses others

### Content we probably won't merge

- **Marketing content** — No product pitches disguised as guides
- **Unverified claims** — "10x productivity" needs receipts
- **AI-generated filler** — Ironic, we know, but we want human insight
- **Duplicate content** — Check if we already cover it somewhere

## How to contribute

### For documentation changes

1. Fork the repo
2. Create a branch (`git checkout -b fix/typo-in-getting-started`)
3. Make your changes
4. Run `bun dev` to preview locally
5. Commit with a clear message
6. Open a PR

### For new pages or sections

1. **Open an issue first** — Describe what you want to add and why
2. Wait for feedback (usually within a few days)
3. Once approved, follow the steps above

### Writing style

Match the existing tone:

- **Direct and practical** — Get to the point
- **Second person** — "You" not "the developer"
- **Short paragraphs** — 3-5 sentences max
- **Real examples** — Show, don't just tell
- **No fluff** — Every sentence should earn its place

See existing pages for examples. When in doubt, read [Getting Started](/engineers/getting-started/) for the vibe we're going for.

### File structure

```
src/content/docs/
├── introduction/       # Core concepts
├── engineers/          # Individual contributor content
├── team-leads/         # Team management content
├── executives/         # Strategic content
├── use-cases/          # Phase-based guides
├── governance/         # Risk and compliance
├── appendices/         # Reference material
└── community/          # Contributing, community info
```

### Frontmatter

Every page needs frontmatter:

```yaml
---
title: Your Page Title
description: A one-sentence description for SEO and previews
sidebar:
  order: 1 # Position in sidebar (optional)
---
```

## Issue tracking

We use [GitHub Issues](https://github.com/Kilo-Org/agentic-path/issues) for tracking work. Before starting on something:

1. **Check existing issues** — Someone might already be working on it
2. **Open an issue for larger changes** — Let's discuss before you invest time
3. **Claim an issue** — Comment that you're working on it so others know

Browse [open issues](https://github.com/Kilo-Org/agentic-path/issues) to find something to work on, or create a new one if you've found a gap.

## Pull request process

1. **Keep PRs focused** — One logical change per PR
2. **Write a clear description** — What changed and why
3. **Link related issues** — Use "Fixes #123" or "Relates to #456"
4. **Be patient** — We review within a week, usually faster

### What we check

- Does it match our style and tone?
- Is the information accurate?
- Does it add value for readers?
- Does the build pass?

## Local development

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/agentic-path.git
cd agentic-path

# Install dependencies
bun install

# Start dev server
bun dev

# Build to check for errors
bun build
```

The site runs at `http://localhost:4321` by default.

## Community guidelines

### Be excellent to each other

- Assume good intent
- Respectful disagreement is welcome
- Personal attacks are not
- Help newcomers feel welcome

### When reviewing others' work

- Be constructive, not critical
- Suggest improvements, don't just point out problems
- Remember there's a human on the other end

### When receiving feedback

- Don't take it personally
- Ask clarifying questions if needed
- It's okay to disagree—discuss it

## Recognition

Contributors are recognized in several ways:

- Git history (your commits are permanent)
- GitHub contributors page
- Shoutouts in release notes for significant contributions

## Questions?

- **Quick questions** — [Discord](https://kilo.love/discord)
- **Longer discussions** — [GitHub Discussions](https://github.com/Kilo-Org/agentic-path/discussions)
- **Bug reports** — [GitHub Issues](https://github.com/Kilo-Org/agentic-path/issues)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thanks again for contributing. Every improvement helps someone work better with AI agents. That's pretty cool.
