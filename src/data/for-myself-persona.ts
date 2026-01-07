/**
 * Roadmap data for the "For Myself" (Individual Engineer) persona.
 * This roadmap guides engineers through their personal journey to becoming
 * proficient with AI-assisted development tools and practices.
 */

import type { Persona } from "@/types";

export const forMyselfPersona: Persona = {
  id: "for-myself",
  title: "For Myself",
  subtitle: "Individual Engineer",
  icon: "user",
  sections: [
    // ========================================================================
    // FOUNDATIONS
    // ========================================================================
    {
      id: "foundations",
      label: "FOUNDATIONS",
      topics: [
        // --------------------------------------------------------------------
        // The Agentic Engineering Mindset (children on RIGHT)
        // --------------------------------------------------------------------
        {
          id: "agentic-engineering-mindset",
          title: "The Agentic Engineering Mindset",
          summary:
            "Agentic engineering represents a fundamental shift in how developers approach their craft. Rather than writing every line of code manually, you learn to orchestrate AI agents that can handle implementation details while you focus on architecture, requirements, and quality. This mindset prioritizes clear communication, strategic thinking, and effective collaboration with AI tools.",
          childrenSide: "right",
          resources: {
            read: [
              {
                title: "The Rise of the AI-Augmented Developer",
                url: "#",
                type: "article",
                duration: "12 min",
              },
              {
                title: "From Coding to Orchestrating: A New Paradigm",
                url: "#",
                type: "article",
                duration: "8 min",
              },
            ],
            watch: [
              {
                title: "Introduction to Agentic Engineering",
                url: "#",
                type: "video",
                duration: "20 min",
              },
            ],
            do: [
              {
                title: "Self-Assessment: Your AI Readiness",
                url: "#",
                type: "exercise",
                duration: "15 min",
              },
            ],
          },
          children: [
            {
              id: "what-is-agentic-engineering",
              title: "What is Agentic Engineering?",
              summary:
                "Agentic engineering is the practice of leveraging AI coding assistants as capable collaborators rather than simple autocomplete tools. It involves understanding AI capabilities and limitations, structuring work for AI consumption, and maintaining oversight of AI-generated outputs. The goal is amplifying your productivity while maintaining code quality and ownership.",
              resources: {
                read: [
                  {
                    title: "Defining Agentic Engineering",
                    url: "#",
                    type: "article",
                    duration: "6 min",
                  },
                  {
                    title: "The AI Coding Assistant Landscape",
                    url: "#",
                    type: "docs",
                    duration: "10 min",
                  },
                ],
                watch: [
                  {
                    title: "Agentic Engineering Explained",
                    url: "#",
                    type: "video",
                    duration: "12 min",
                  },
                ],
                do: [
                  {
                    title: "Map Your Current Workflow",
                    url: "#",
                    type: "exercise",
                    duration: "20 min",
                  },
                ],
              },
            },
            {
              id: "the-2023-2028-shift",
              title: "The 2023 → 2028 Shift",
              summary:
                "The software development landscape is undergoing rapid transformation. What began as GitHub Copilot suggestions has evolved into sophisticated AI agents capable of implementing entire features. Understanding this trajectory helps you prepare for and adapt to changes in how code is written, reviewed, and maintained across the industry.",
              resources: {
                read: [
                  {
                    title: "Timeline: AI in Software Development",
                    url: "#",
                    type: "article",
                    duration: "8 min",
                  },
                  {
                    title: "Industry Trends in AI-Assisted Coding",
                    url: "#",
                    type: "article",
                    duration: "15 min",
                  },
                ],
                watch: [
                  {
                    title: "The Future of Programming",
                    url: "#",
                    type: "video",
                    duration: "25 min",
                  },
                ],
                do: [
                  {
                    title: "Compare: Manual vs. AI-Assisted Development",
                    url: "#",
                    type: "exercise",
                    duration: "30 min",
                  },
                ],
              },
            },
            {
              id: "end-to-end-ownership",
              title: "End-to-End Ownership",
              summary:
                "While AI handles more implementation details, engineers must maintain complete ownership of their code. This means understanding every line that ships, being able to debug and extend AI-generated code, and taking responsibility for quality and security. Delegation doesn't mean abdication—it means smarter allocation of your attention.",
              resources: {
                read: [
                  {
                    title: "Ownership in the Age of AI",
                    url: "#",
                    type: "article",
                    duration: "7 min",
                  },
                  {
                    title: "The Accountability Framework",
                    url: "#",
                    type: "article",
                    duration: "10 min",
                  },
                ],
                watch: [
                  {
                    title: "Maintaining Code Ownership with AI",
                    url: "#",
                    type: "video",
                    duration: "15 min",
                  },
                ],
                do: [
                  {
                    title: "Code Review: AI-Generated Feature",
                    url: "#",
                    type: "exercise",
                    duration: "45 min",
                  },
                ],
              },
            },
          ],
        },
        // --------------------------------------------------------------------
        // Your Development Environment (children on LEFT)
        // --------------------------------------------------------------------
        {
          id: "your-development-environment",
          title: "Your Development Environment",
          summary:
            "Your development environment is the foundation for effective AI-assisted coding. The right setup amplifies your productivity while the wrong one creates friction at every step. This section covers selecting, configuring, and optimizing your AI coding tools for maximum effectiveness in your daily workflow.",
          childrenSide: "left",
          resources: {
            read: [
              {
                title: "The AI-Ready Development Environment",
                url: "#",
                type: "article",
                duration: "10 min",
              },
              {
                title: "Comparing AI Coding Tools in 2025",
                url: "#",
                type: "article",
                duration: "20 min",
              },
            ],
            watch: [
              {
                title: "Setting Up Your AI Coding Workspace",
                url: "#",
                type: "video",
                duration: "30 min",
              },
            ],
            do: [
              {
                title: "Environment Setup Checklist",
                url: "#",
                type: "template",
                duration: "15 min",
              },
            ],
          },
          children: [
            {
              id: "choosing-your-ai-coding-tool",
              title: "Choosing Your AI Coding Tool",
              summary:
                "The market offers numerous AI coding assistants, from GitHub Copilot to Cursor to Claude. Each has distinct strengths: some excel at inline completions, others at multi-file refactoring, and others at conversational problem-solving. Understanding these differences helps you select the right tool for your workflow and potentially combine multiple tools for maximum effectiveness.",
              resources: {
                read: [
                  {
                    title: "AI Coding Tools Comparison Matrix",
                    url: "#",
                    type: "article",
                    duration: "15 min",
                  },
                  {
                    title: "Copilot vs. Cursor vs. Claude",
                    url: "#",
                    type: "article",
                    duration: "12 min",
                  },
                ],
                watch: [
                  {
                    title: "Tool Demo: Top 5 AI Coding Assistants",
                    url: "#",
                    type: "video",
                    duration: "35 min",
                  },
                ],
                do: [
                  {
                    title: "Try 3 Tools on the Same Task",
                    url: "#",
                    type: "exercise",
                    duration: "1 hour",
                  },
                ],
              },
            },
            {
              id: "setting-up-for-success",
              title: "Setting Up for Success",
              summary:
                "Proper configuration transforms a good AI tool into a great one. This includes setting up API keys, configuring context preferences, customizing keybindings, and integrating with your existing workflow. Small optimizations in setup compound into significant productivity gains over time.",
              resources: {
                read: [
                  {
                    title: "The Complete Setup Guide",
                    url: "#",
                    type: "docs",
                    duration: "20 min",
                  },
                  {
                    title: "Configuration Best Practices",
                    url: "#",
                    type: "article",
                    duration: "8 min",
                  },
                ],
                watch: [
                  {
                    title: "Optimizing Your AI Coding Setup",
                    url: "#",
                    type: "video",
                    duration: "18 min",
                  },
                ],
                do: [
                  {
                    title: "Configure Your Primary AI Tool",
                    url: "#",
                    type: "exercise",
                    duration: "30 min",
                  },
                ],
              },
            },
            {
              id: "model-selection-strategy",
              title: "Model Selection Strategy",
              summary:
                "Different AI models have different capabilities, speeds, and costs. GPT-4 excels at complex reasoning, Claude at nuanced explanations, and faster models at quick completions. Knowing when to use which model—and how to switch between them—lets you optimize for both quality and efficiency.",
              resources: {
                read: [
                  {
                    title: "Understanding AI Model Capabilities",
                    url: "#",
                    type: "article",
                    duration: "12 min",
                  },
                  {
                    title: "Model Selection Decision Tree",
                    url: "#",
                    type: "template",
                    duration: "5 min",
                  },
                ],
                watch: [
                  {
                    title: "When to Use Which Model",
                    url: "#",
                    type: "video",
                    duration: "20 min",
                  },
                ],
                do: [
                  {
                    title: "Model Comparison Exercise",
                    url: "#",
                    type: "exercise",
                    duration: "45 min",
                  },
                ],
              },
            },
          ],
        },
      ],
    },

    // ========================================================================
    // CORE SKILLS
    // ========================================================================
    {
      id: "core-skills",
      label: "CORE SKILLS",
      topics: [
        // --------------------------------------------------------------------
        // Professional Prompting (children on RIGHT)
        // --------------------------------------------------------------------
        {
          id: "professional-prompting",
          title: "Professional Prompting",
          summary:
            "Professional prompting is the skill of communicating effectively with AI systems to get consistently high-quality outputs. Unlike casual chatting, professional prompting involves structured approaches, clear specifications, and iterative refinement. Mastering this skill is essential for reliable AI-assisted development.",
          childrenSide: "right",
          resources: {
            read: [
              {
                title: "The Prompt Engineering Handbook",
                url: "#",
                type: "article",
                duration: "25 min",
              },
              {
                title: "Prompting Best Practices for Code",
                url: "#",
                type: "docs",
                duration: "15 min",
              },
            ],
            watch: [
              {
                title: "Professional Prompting Masterclass",
                url: "#",
                type: "video",
                duration: "40 min",
              },
            ],
            do: [
              {
                title: "Prompt Template Library",
                url: "#",
                type: "template",
                duration: "10 min",
              },
            ],
          },
          children: [
            {
              id: "prompt-structure-clarity",
              title: "Prompt Structure & Clarity",
              summary:
                "Well-structured prompts consistently produce better results than vague requests. Learn to organize prompts with clear objectives, relevant context, specific constraints, and desired output format. A good prompt structure becomes second nature with practice and dramatically improves AI output quality.",
              resources: {
                read: [
                  {
                    title: "Anatomy of an Effective Prompt",
                    url: "#",
                    type: "article",
                    duration: "10 min",
                  },
                  {
                    title: "The CRAFT Prompting Framework",
                    url: "#",
                    type: "article",
                    duration: "8 min",
                  },
                ],
                watch: [
                  {
                    title: "Structuring Prompts for Code Generation",
                    url: "#",
                    type: "video",
                    duration: "15 min",
                  },
                ],
                do: [
                  {
                    title: "Restructure 5 Vague Prompts",
                    url: "#",
                    type: "exercise",
                    duration: "25 min",
                  },
                ],
              },
            },
            {
              id: "iterative-refinement",
              title: "Iterative Refinement",
              summary:
                "Getting perfect output on the first try is rare. Iterative refinement involves systematically improving AI outputs through targeted follow-up prompts. Learn to identify what's wrong, communicate corrections clearly, and guide the AI toward your desired result without starting over.",
              resources: {
                read: [
                  {
                    title: "The Refinement Loop",
                    url: "#",
                    type: "article",
                    duration: "7 min",
                  },
                  {
                    title: "Common Refinement Patterns",
                    url: "#",
                    type: "article",
                    duration: "12 min",
                  },
                ],
                watch: [
                  {
                    title: "Refining AI Code Through Conversation",
                    url: "#",
                    type: "video",
                    duration: "22 min",
                  },
                ],
                do: [
                  {
                    title: "Refinement Practice: API Implementation",
                    url: "#",
                    type: "exercise",
                    duration: "35 min",
                  },
                ],
              },
            },
            {
              id: "when-to-be-specific-vs-abstract",
              title: "When to Be Specific vs. Abstract",
              summary:
                "Knowing when to provide detailed specifications versus high-level direction is crucial. Over-specifying constrains creativity and wastes effort; under-specifying leads to misaligned outputs. Learn to calibrate your prompt specificity based on task complexity, your confidence, and the AI's strengths.",
              resources: {
                read: [
                  {
                    title: "The Specificity Spectrum",
                    url: "#",
                    type: "article",
                    duration: "9 min",
                  },
                  {
                    title: "When Less Is More in Prompting",
                    url: "#",
                    type: "article",
                    duration: "6 min",
                  },
                ],
                watch: [
                  {
                    title: "Calibrating Prompt Detail",
                    url: "#",
                    type: "video",
                    duration: "14 min",
                  },
                ],
                do: [
                  {
                    title: "Specificity Calibration Exercise",
                    url: "#",
                    type: "exercise",
                    duration: "30 min",
                  },
                ],
              },
            },
            {
              id: "multi-turn-conversations",
              title: "Multi-turn Conversations",
              summary:
                "Complex tasks require sustained dialogue with AI across multiple exchanges. Managing context, building on previous outputs, and knowing when to reset the conversation are key skills. Multi-turn mastery enables tackling larger, more complex development tasks with AI assistance.",
              resources: {
                read: [
                  {
                    title: "Managing Long AI Conversations",
                    url: "#",
                    type: "article",
                    duration: "11 min",
                  },
                  {
                    title: "Context Continuity Strategies",
                    url: "#",
                    type: "article",
                    duration: "8 min",
                  },
                ],
                watch: [
                  {
                    title: "Multi-turn Development Sessions",
                    url: "#",
                    type: "video",
                    duration: "28 min",
                  },
                ],
                do: [
                  {
                    title: "Build a Feature in 10+ Turns",
                    url: "#",
                    type: "exercise",
                    duration: "1 hour",
                  },
                ],
              },
            },
          ],
        },
        // --------------------------------------------------------------------
        // Context Engineering (children on LEFT)
        // --------------------------------------------------------------------
        {
          id: "context-engineering",
          title: "Context Engineering",
          summary:
            "Context engineering is the art of providing AI with the right information to produce accurate, relevant outputs. It encompasses understanding what context matters, managing limited context windows, structuring project documentation, and crafting effective system prompts. Great context engineering is often the difference between mediocre and excellent AI assistance.",
          childrenSide: "left",
          resources: {
            read: [
              {
                title: "The Context Engineering Playbook",
                url: "#",
                type: "article",
                duration: "18 min",
              },
              {
                title: "Context Windows Explained",
                url: "#",
                type: "docs",
                duration: "12 min",
              },
            ],
            watch: [
              {
                title: "Mastering Context for AI Coding",
                url: "#",
                type: "video",
                duration: "35 min",
              },
            ],
            do: [
              {
                title: "Context Audit Template",
                url: "#",
                type: "template",
                duration: "15 min",
              },
            ],
          },
          children: [
            {
              id: "what-context-matters",
              title: "What Context Matters",
              summary:
                "Not all context is equally valuable. Learn to identify which files, documentation, and background information most impact AI output quality. Understanding relevance helps you prioritize what to include when context space is limited, leading to more accurate and useful AI responses.",
              resources: {
                read: [
                  {
                    title: "Identifying High-Value Context",
                    url: "#",
                    type: "article",
                    duration: "10 min",
                  },
                  {
                    title: "The Context Relevance Framework",
                    url: "#",
                    type: "article",
                    duration: "8 min",
                  },
                ],
                watch: [
                  {
                    title: "Prioritizing Context for Better Results",
                    url: "#",
                    type: "video",
                    duration: "16 min",
                  },
                ],
                do: [
                  {
                    title: "Context Prioritization Exercise",
                    url: "#",
                    type: "exercise",
                    duration: "20 min",
                  },
                ],
              },
            },
            {
              id: "managing-context-windows",
              title: "Managing Context Windows",
              summary:
                "Every AI model has a limited context window—the maximum amount of information it can consider at once. Learn strategies for maximizing the value of this limited space: chunking large files, summarizing key points, rotating context as conversations progress, and knowing when to start fresh.",
              resources: {
                read: [
                  {
                    title: "Context Window Management Strategies",
                    url: "#",
                    type: "article",
                    duration: "14 min",
                  },
                  {
                    title: "Working Within Token Limits",
                    url: "#",
                    type: "docs",
                    duration: "10 min",
                  },
                ],
                watch: [
                  {
                    title: "Efficient Context Usage",
                    url: "#",
                    type: "video",
                    duration: "20 min",
                  },
                ],
                do: [
                  {
                    title: "Context Chunking Practice",
                    url: "#",
                    type: "exercise",
                    duration: "30 min",
                  },
                ],
              },
            },
            {
              id: "project-documentation-for-ai",
              title: "Project Documentation for AI",
              summary:
                "Traditional documentation serves humans; AI-optimized documentation serves both humans and AI assistants. Learn to structure README files, architecture docs, and inline comments in ways that help AI understand your project quickly and generate code that fits your patterns.",
              resources: {
                read: [
                  {
                    title: "Writing AI-Friendly Documentation",
                    url: "#",
                    type: "article",
                    duration: "12 min",
                  },
                  {
                    title: "The AI-Ready README Template",
                    url: "#",
                    type: "template",
                    duration: "5 min",
                  },
                ],
                watch: [
                  {
                    title: "Documentation That AI Understands",
                    url: "#",
                    type: "video",
                    duration: "18 min",
                  },
                ],
                do: [
                  {
                    title: "Refactor Your README for AI",
                    url: "#",
                    type: "exercise",
                    duration: "40 min",
                  },
                ],
              },
            },
            {
              id: "rules-and-system-prompts",
              title: "Rules & System Prompts",
              summary:
                "System prompts and custom rules shape AI behavior before conversation begins. Learn to craft effective custom instructions that enforce your coding standards, preferred patterns, and project conventions. Well-designed rules create consistent, high-quality outputs with minimal per-prompt effort.",
              resources: {
                read: [
                  {
                    title: "Crafting Effective System Prompts",
                    url: "#",
                    type: "article",
                    duration: "15 min",
                  },
                  {
                    title: "Custom Rules Best Practices",
                    url: "#",
                    type: "article",
                    duration: "10 min",
                  },
                ],
                watch: [
                  {
                    title: "System Prompts Deep Dive",
                    url: "#",
                    type: "video",
                    duration: "25 min",
                  },
                ],
                do: [
                  {
                    title: "Create Your Custom Rule Set",
                    url: "#",
                    type: "exercise",
                    duration: "45 min",
                  },
                ],
              },
            },
          ],
        },
      ],
    },

    // ========================================================================
    // ADVANCED
    // ========================================================================
    {
      id: "advanced",
      label: "ADVANCED",
      topics: [
        // --------------------------------------------------------------------
        // Working with Multiple Agents (children on RIGHT)
        // --------------------------------------------------------------------
        {
          id: "working-with-multiple-agents",
          title: "Working with Multiple Agents",
          summary:
            "As you scale AI-assisted development, you'll move from single-agent interactions to orchestrating multiple specialized agents. This advanced skill involves coordinating agents with different capabilities, managing complex workflows, and maintaining coherence across parallel work streams.",
          childrenSide: "right",
          resources: {
            read: [
              {
                title: "Introduction to Multi-Agent Systems",
                url: "#",
                type: "article",
                duration: "15 min",
              },
              {
                title: "Agent Coordination Patterns",
                url: "#",
                type: "docs",
                duration: "20 min",
              },
            ],
            watch: [
              {
                title: "Multi-Agent Development Workflows",
                url: "#",
                type: "video",
                duration: "45 min",
              },
            ],
            do: [
              {
                title: "Multi-Agent Setup Exercise",
                url: "#",
                type: "exercise",
                duration: "1 hour",
              },
            ],
          },
          children: [
            {
              id: "agent-orchestration-patterns",
              title: "Agent Orchestration Patterns",
              summary:
                "Different tasks call for different agent coordination patterns. Learn common patterns like supervisor-worker, peer collaboration, and specialist routing. Understanding these patterns helps you design effective multi-agent workflows for complex development tasks.",
              resources: {
                read: [
                  {
                    title: "The Orchestration Pattern Library",
                    url: "#",
                    type: "article",
                    duration: "18 min",
                  },
                  {
                    title: "Choosing the Right Pattern",
                    url: "#",
                    type: "article",
                    duration: "10 min",
                  },
                ],
                watch: [
                  {
                    title: "Agent Patterns in Practice",
                    url: "#",
                    type: "video",
                    duration: "30 min",
                  },
                ],
                do: [
                  {
                    title: "Implement a Supervisor Pattern",
                    url: "#",
                    type: "exercise",
                    duration: "45 min",
                  },
                ],
              },
            },
            {
              id: "parallel-vs-sequential-workflows",
              title: "Parallel vs. Sequential Workflows",
              summary:
                "Some tasks benefit from parallel agent execution while others require sequential handoffs. Learn to analyze dependencies, identify parallelization opportunities, and design workflows that maximize throughput without sacrificing quality or coherence.",
              resources: {
                read: [
                  {
                    title: "Parallel vs. Sequential: A Decision Guide",
                    url: "#",
                    type: "article",
                    duration: "12 min",
                  },
                  {
                    title: "Dependency Analysis for Workflows",
                    url: "#",
                    type: "article",
                    duration: "9 min",
                  },
                ],
                watch: [
                  {
                    title: "Workflow Design Strategies",
                    url: "#",
                    type: "video",
                    duration: "22 min",
                  },
                ],
                do: [
                  {
                    title: "Design a Parallel Workflow",
                    url: "#",
                    type: "exercise",
                    duration: "40 min",
                  },
                ],
              },
            },
            {
              id: "managing-agent-fleets",
              title: "Managing Agent Fleets",
              summary:
                "At scale, you may run multiple AI agents simultaneously on different aspects of a project. Fleet management involves resource allocation, output integration, conflict resolution, and maintaining consistent quality across all agent outputs.",
              resources: {
                read: [
                  {
                    title: "Agent Fleet Management Essentials",
                    url: "#",
                    type: "article",
                    duration: "16 min",
                  },
                  {
                    title: "Scaling AI Development Teams",
                    url: "#",
                    type: "twitter-thread",
                    duration: "8 min",
                    author: "@aidevops",
                  },
                ],
                watch: [
                  {
                    title: "Managing Multiple AI Agents",
                    url: "#",
                    type: "video",
                    duration: "35 min",
                  },
                ],
                do: [
                  {
                    title: "Fleet Coordination Exercise",
                    url: "#",
                    type: "exercise",
                    duration: "1 hour",
                  },
                ],
              },
            },
          ],
        },
        // --------------------------------------------------------------------
        // Quality & Velocity (children on LEFT)
        // --------------------------------------------------------------------
        {
          id: "quality-and-velocity",
          title: "Quality & Velocity",
          summary:
            "The ultimate goal of agentic engineering is delivering higher quality code faster than traditional development. This requires knowing when to delegate versus code yourself, developing efficient review processes for AI output, and leveraging AI effectively for debugging. Mastering these skills brings together everything you've learned.",
          childrenSide: "left",
          resources: {
            read: [
              {
                title: "Balancing Speed and Quality with AI",
                url: "#",
                type: "article",
                duration: "14 min",
              },
              {
                title: "The High-Velocity Development Playbook",
                url: "#",
                type: "article",
                duration: "20 min",
              },
            ],
            watch: [
              {
                title: "Quality at Speed: AI Development Practices",
                url: "#",
                type: "video",
                duration: "38 min",
              },
            ],
            do: [
              {
                title: "Velocity Metrics Template",
                url: "#",
                type: "template",
                duration: "10 min",
              },
            ],
          },
          children: [
            {
              id: "when-to-code-vs-delegate",
              title: "When to Code vs. Delegate",
              summary:
                "Not every task is suitable for AI delegation. Learn to quickly assess task characteristics—complexity, novelty, risk level—and decide whether to code manually, delegate fully, or collaborate with AI. This judgment is central to maximizing your effectiveness as an agentic engineer.",
              resources: {
                read: [
                  {
                    title: "The Delegation Decision Matrix",
                    url: "#",
                    type: "article",
                    duration: "11 min",
                  },
                  {
                    title: "Tasks Best Suited for AI",
                    url: "#",
                    type: "article",
                    duration: "8 min",
                  },
                ],
                watch: [
                  {
                    title: "Making Delegation Decisions",
                    url: "#",
                    type: "video",
                    duration: "18 min",
                  },
                ],
                do: [
                  {
                    title: "Delegation Assessment Practice",
                    url: "#",
                    type: "exercise",
                    duration: "25 min",
                  },
                ],
              },
            },
            {
              id: "reviewing-ai-generated-code",
              title: "Reviewing AI-Generated Code",
              summary:
                "AI-generated code requires different review approaches than human-written code. Learn to spot common AI mistakes, validate logic and edge cases, check for security issues, and ensure consistency with your codebase. Efficient review is essential for maintaining quality at high velocity.",
              resources: {
                read: [
                  {
                    title: "AI Code Review Checklist",
                    url: "#",
                    type: "template",
                    duration: "5 min",
                  },
                  {
                    title: "Common AI Coding Mistakes",
                    url: "#",
                    type: "article",
                    duration: "12 min",
                  },
                ],
                watch: [
                  {
                    title: "Reviewing AI Code Effectively",
                    url: "#",
                    type: "video",
                    duration: "24 min",
                  },
                ],
                do: [
                  {
                    title: "Review Practice: Spot the Issues",
                    url: "#",
                    type: "exercise",
                    duration: "35 min",
                  },
                ],
              },
            },
            {
              id: "debugging-with-ai",
              title: "Debugging with AI",
              summary:
                "AI assistants excel at debugging when given proper context. Learn to present bugs effectively, guide AI through your codebase, interpret AI debugging suggestions, and use AI to generate test cases that expose issues. AI-assisted debugging can dramatically reduce time spent on difficult bugs.",
              resources: {
                read: [
                  {
                    title: "The AI Debugging Workflow",
                    url: "#",
                    type: "article",
                    duration: "13 min",
                  },
                  {
                    title: "Presenting Bugs to AI Effectively",
                    url: "#",
                    type: "article",
                    duration: "9 min",
                  },
                ],
                watch: [
                  {
                    title: "AI-Assisted Debugging Session",
                    url: "#",
                    type: "video",
                    duration: "40 min",
                  },
                ],
                do: [
                  {
                    title: "Debug a Complex Bug with AI",
                    url: "#",
                    type: "exercise",
                    duration: "45 min",
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
};
