---
title: Contributing
description: How to contribute to Agentic Engineering for Humans—we want your help
sidebar:
  order: 1
---

This guide exists because people share what they've learned. Every contribution makes it better for the next person figuring out how to work with AI agents.

## Why contribute?

The field moves fast. What worked six months ago might be outdated. What you learned last week might help someone tomorrow.

**Your experience matters.** Whether you've been using AI tools for years or just started, you have perspective we don't. Different tools, different languages, different team sizes, different industries—all of it adds value.

## Ways to contribute

### Quick wins (no issue needed)

- **Fix typos or broken links** — Just open a PR
- **Add a resource** — Found a great article or video? Add it to the relevant page
- **Clarify confusing sections** — If something tripped you up, improve it
- **Update outdated info** — Tools change constantly

### Bigger contributions (open an issue first)

- **New pages or sections** — Have expertise we haven't covered? Let's talk
- **Case studies** — Real-world stories of what worked (or didn't)
- **Translations** — Help make this accessible to more people
- **Tooling improvements** — Better search, navigation, accessibility

## Getting started

### 1. Find something to work on

Check [open issues](https://github.com/Kilo-Org/agentic-path/issues) or look for pages that could use improvement. Not sure where to start? Ask in [Discord](https://kilo.love/discord).

When you find something you want to work on, comment on the issue to let others know you're tackling it.

### 2. Set up locally

```bash
# Fork and clone
git clone https://github.com/YOUR-USERNAME/agentic-path.git
cd agentic-path

# Install dependencies
bun install

# Start dev server
bun dev
```

The site runs at `http://localhost:4321`.

### 3. Make your changes

Create a branch, make your edits, preview locally.

### 4. Open a PR

Push your branch and open a pull request. Include:

- What you changed
- Why you changed it
- Any context reviewers need

## Writing guidelines

Match the existing tone:

- **Direct and practical** — Get to the point
- **Second person** — "You" not "the developer"
- **Short paragraphs** — 3-5 sentences max
- **Real examples** — Show, don't just tell
- **No fluff** — Every sentence should earn its place

### What we want

- Real-world experience over theory
- Practical examples people can use
- Honest assessments (including limitations)
- Clear, scannable structure

### What we don't want

- Marketing speak or product pitches
- Unverified "10x productivity" claims
- AI-generated filler content
- Duplicate coverage of existing topics

## Page structure

Every page needs frontmatter:

```yaml
---
title: Your Page Title
description: A one-sentence description for SEO and previews
sidebar:
  order: 1 # Position in sidebar (optional)
---
```

Use clear headings, short paragraphs, and include a Resources section at the bottom for further reading.

## Review process

1. **Automated checks** — Build must pass
2. **Human review** — Usually within a week
3. **Feedback** — We might suggest changes
4. **Merge** — Once approved, we'll merge it

We check for:

- Accuracy of information
- Match with existing style
- Value for readers
- No broken links or build errors

## Community

### Be excellent to each other

- Assume good intent
- Respectful disagreement is welcome
- Help newcomers feel welcome
- Remember there's a human on the other end

### When giving feedback

- Be constructive, not just critical
- Suggest improvements
- Acknowledge what works well

### When receiving feedback

- Don't take it personally
- Ask clarifying questions
- It's okay to disagree—discuss it

## Recognition

Your contributions are recognized through:

- Git history (permanent record)
- GitHub contributors page
- Release notes for significant contributions

## Questions?

- **Quick questions** — [Discord](https://kilo.love/discord)
- **Longer discussions** — [GitHub Discussions](https://github.com/Kilo-Org/agentic-path/discussions)
- **Bug reports** — [GitHub Issues](https://github.com/Kilo-Org/agentic-path/issues)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thanks for helping build this. Every improvement helps someone work better with AI agents.
