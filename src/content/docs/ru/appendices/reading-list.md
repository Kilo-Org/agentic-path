---
title: Recommended Reading
description: Books, papers, and resources for deeper learning
sidebar:
  order: 2
---

Curated resources for going deeper on agentic engineering topics. This list will be updated as the field evolves.

## Books

### Foundations

_Foundational books on AI, machine learning systems, and data architecture._

- [Artificial Intelligence: A Modern Approach (4th ed.)](https://aima.cs.berkeley.edu/) – Stuart Russell & Peter Norvig (2020). The authoritative AI textbook covering intelligent agent principles, search algorithms, reasoning, and machine learning fundamentals.
- [Software Engineering at Google](https://abseil.io/resources/swe-book) – Titus Winters, Tom Manshreck & Hyrum Wright (2020). Practical engineering practices for sustaining large codebases—highly relevant for teams adopting AI-assisted workflows.
- [The Pragmatic Programmer (20th Anniversary Edition)](https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/) – Andrew Hunt & David Thomas (2019). Timeless advice on writing clean, flexible code that remains vital even as AI tools enter the mix.
- [Designing Machine Learning Systems](https://huyenchip.com/books/) – Chip Huyen (2022). Holistic guide to building reliable ML-powered applications, from data processing to deployment and monitoring.
- [AI Engineering](https://huyenchip.com/books/) – Chip Huyen (2025). Practical framework for building applications with foundation models, bridging traditional engineering and modern AI development.
- [Designing Data-Intensive Applications](https://martin.kleppmann.com/2017/03/27/designing-data-intensive-applications.html) – Martin Kleppmann (2017). Deep dive into reliable, scalable systems—crucial architectural knowledge before layering on AI features.

### Manifestos and philosophy

_Frameworks for thinking about AI-assisted development at a higher level._

- [The o16g Manifesto](https://o16g.com/) – Cory Ondrejka (2025). "Outcome Engineering" — 16 principles for reorienting development around outcomes rather than code. Argues for managing to cost (tokens) instead of capacity (engineer-hours), measuring success by verified impact, and treating the backlog as a relic of human limitation. From the CTO of Onebrief, co-creator of Second Life, and former engineering leader at Google and Meta.

### Context engineering

_The emerging discipline of providing agents with the right information at the right time._

- [Context Engineering for AI Agents – Tobi Lutke](https://x.com/tolobi/status/1935533391175041359) - Shopify CEO on why context engineering is the new skill
- [Context Engineering – Andrej Karpathy](https://x.com/karpathy/status/1937902205765607626) - "Prompt engineering is dead, context engineering is king"
- [AGENTS.md](https://agents.md/) - Open format for persistent agent context, used by 60k+ open-source projects

### Prompt engineering

_Guides to effective prompting and AI interaction._

- [Google Cloud Prompt Engineering Guide](https://cloud.google.com/discover/what-is-prompt-engineering) – Comprehensive official guide covering prompt format, examples, multi-turn interactions, and best practices.
- [DAIR Prompt Engineering Guide](https://www.promptingguide.ai/) – Mostafa Samir et al. Extensive open-source guide aggregating the latest techniques, from basic design to advanced strategies like multi-step reasoning and tool use.
- [Learn Prompting](https://learnprompting.org/docs/introduction) – Sander Schulhoff et al. (2024). Free course covering fundamentals to advanced techniques, used by 3M+ users including Fortune 500 teams.
- [The Ultimate Guide to Prompt Engineering](https://www.lakera.ai/blog/prompt-engineering-guide) – Lakera (2025). Modern best practices with focus on real-world usage and security, including defense against prompt injections.
- **Prompt Engineering for Generative AI** – James Phoenix & Mike Taylor (2023). Practical book on principles and patterns across domains—NLP, image generation, and code generation.
- **Prompt Engineering for LLMs** – John Berryman & Albert Ziegler (2024). Advanced strategies from GitHub Copilot developers covering token management, few-shot prompting, and workflow patterns.

### Software engineering

_Classic and modern software engineering texts relevant to AI-assisted development._

- [Clean Code](https://gerlacdt.github.io/blog/posts/clean_code/) – Robert C. Martin (2008). Classic manual on maintainable code—crucial for recognizing and refactoring AI-generated code into well-structured designs.
- [Refactoring (2nd ed.)](https://martinfowler.com/tags/refactoring.html) – Martin Fowler (2018). Seminal guide to systematically restructuring code, invaluable for continuously improving AI-written code.
- [Accelerate](https://itrevolution.com/product/accelerate/) – Nicole Forsgren, Jez Humble & Gene Kim (2018). Data-driven research on high-performing teams, introducing DORA metrics—essential baseline when integrating AI into workflows.
- [Agentic AI Engineering](https://mitpressbookstore.mit.edu/book/9798989357789) – Yi Zhou (2025). Forward-looking guide reframing software engineering for AI agents, covering the Agentic Stack and maturity models for scaling agents to production.
- **The LLM Engineering Handbook** – Paul Iusztin & Maxime Labonne (2024). Operations guide covering prompt engineering, fine-tuning, RAG, and patterns for putting LLMs into production.
- [A Philosophy of Software Design (2nd ed.)](https://web.stanford.edu/~ouster/cgi-bin/book.php) – John Ousterhout (2021). Concise essays on managing complexity—lessons that complement AI tools by helping developers shape architecture and keep complexity under control.

## Research papers

### Key papers on agents

_Academic papers defining agentic systems and patterns._

- [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629) – Yao et al. (2022). Introduced the paradigm of interleaving reasoning traces with actions, enabling LLMs to gather information and adjust plans mid-stream. Foundation for many agent frameworks.
- [HuggingGPT: Solving AI Tasks with ChatGPT and its Friends](https://arxiv.org/abs/2303.17580) – Shen et al. (2023). LLM-powered controller that orchestrates specialized models for complex multi-modal tasks, using natural language as the glue between tools.
- [Toolformer: Language Models Can Teach Themselves to Use Tools](https://arxiv.org/abs/2302.04761) – Schick et al. (2023). Meta AI's method for LLMs to self-train on API usage, learning when and how to call external tools strategically.
- [Generative Agents: Interactive Simulacra of Human Behavior](https://arxiv.org/abs/2304.03442) – Park et al. (2023). Architecture for believable simulated agents with long-term memory and planning, demonstrating human-like behavior over extended periods.
- [Voyager: An Open-Ended Embodied Agent with Large Language Models](https://arxiv.org/abs/2305.16291) – Wang et al. (2023). First LLM-driven lifelong learning agent in Minecraft, continuously exploring and accumulating skills without human intervention.
- [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366) – Shinn et al. (2023). Framework enabling agents to learn from mistakes through self-reflection in natural language, without formal fine-tuning.

### Language models for code

_Research on code generation, understanding, and synthesis._

- [StarCoder: may the source be with you!](https://arxiv.org/abs/2305.06161) - Open-source Code LLM with 8K context and infilling capabilities

### Human-AI collaboration

_Studies on how humans and AI systems work together effectively._

- [Experimental Evidence on the Productivity Effects of Generative AI](https://www.science.org/doi/10.1126/science.adh2586) – Noy & Zhang (2023, Science). Landmark study showing ChatGPT users completed tasks ~40% faster with 18% higher quality—lower-skilled participants benefited most.
- [The Productivity Effects of Generative AI: Evidence from GitHub Copilot](https://mit-genai.pubpub.org/pub/v5iixksv/release/2) – Cui et al. (2024). Field experiment at Microsoft/Accenture showing 12–22% more PRs completed per week with Copilot access.
- [When Humans and AI Work Best Together](https://mitsloan.mit.edu/ideas-made-to-matter/when-humans-and-ai-work-best-together-and-when-each-better-alone) – MIT Sloan (2025). Meta-analysis finding collaboration shines when humans are individually better than AI—success requires calibrating when to trust AI.
- [Coding on Copilot: Data Suggests Downward Pressure on Code Quality](https://www.gitclear.com/coding_on_copilot_data_shows_ais_downward_pressure_on_code_quality) – GitClear (2023). Analysis of 153M lines showing code churn doubled with AI use—teams need practices to keep quality in check.
- [GitHub Copilot: Asset or Liability?](https://www.sciencedirect.com/science/article/abs/pii/S0164121223001292) – Moradi Dakhel et al. (2023). Copilot valuable for experts who can vet output, but potential liability for novices who accept faulty suggestions.

## Online resources

### Blogs and newsletters

_Regular sources of insight on AI and development._

- [2025: The year in LLMs – Simon Willison](https://simonwillison.net/2025/Dec/31/the-year-in-llms/) - Comprehensive annual review of LLM developments

### Podcasts

_Audio content covering agentic development._

- [The RPI workflow - Build Wiz AI Show (Podcast)](https://open.spotify.com/episode/1OdIYj0SZzhyzFGGoVuELP) - Audio discussion on advanced AI coding

### Video content

_Tutorials, talks, and demonstrations._

- [The Complete AI Coding Course (2025)](https://www.udemy.com/course/the-complete-ai-coding-course-2025-cursor-ai-v0-vercel/) - Hands-on course covering Cursor and Claude Code

### Communities

_Places to connect with others working in this space._

- [Kilo Code Discord](https://kilo.love/discord) - Our community for discussing agentic engineering
- [GitHub Discussions](https://github.com/Kilo-Org/agentic-path/discussions) - Longer-form conversations about this guide

---

## Contributing resources

Know a great resource we should include? This list grows through community contributions.

**How to add a resource:**

1. [Open a PR](/community/contributing/) with your addition
2. Include a brief description of why it's valuable
3. Place it in the appropriate section

We're especially looking for:

- Books and papers that shaped your understanding
- Tutorials that actually helped you get started
- Communities where you've found good discussions
- Case studies from real implementations

[Join the conversation on Discord](https://kilo.love/discord) if you want to discuss what should be included.

---

_This list is actively maintained by the community. Your recommendations help others learn faster._
