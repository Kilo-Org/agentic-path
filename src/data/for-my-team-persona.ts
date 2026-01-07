/**
 * Roadmap data for the "For My Team" (Team Lead) persona.
 * This roadmap guides team leads through introducing AI agents to their team,
 * establishing effective practices, and measuring adoption success.
 */

import type { Persona } from "@/types";

export const forMyTeamPersona: Persona = {
  id: "for-my-team",
  title: "For My Team",
  subtitle: "Team Lead",
  icon: "👥",
  sections: [
    // ========================================================================
    // GETTING STARTED
    // ========================================================================
    {
      id: "getting-started",
      label: "GETTING STARTED",
      topics: [
        // --------------------------------------------------------------------
        // Introducing AI Agents to Your Team (children on RIGHT)
        // --------------------------------------------------------------------
        {
          id: "introducing-ai-agents-to-your-team",
          title: "Introducing AI Agents to Your Team",
          summary:
            "Successfully introducing AI agents to your team requires thoughtful planning and clear communication. You need to understand your team's current skill levels, address concerns about job security, and create an environment where experimentation is encouraged. The key is positioning AI as a force multiplier, not a replacement.",
          childrenSide: "right",
          resources: {
            read: [
              {
                title: "Leading Your Team into the AI Era",
                url: "#",
                type: "article",
                duration: "15 min",
              },
              {
                title: "Change Management for AI Adoption",
                url: "#",
                type: "article",
                duration: "12 min",
              },
            ],
            watch: [
              {
                title: "How Top Teams Adopted AI Coding Tools",
                url: "#",
                type: "video",
                duration: "25 min",
              },
            ],
            do: [
              {
                title: "Team AI Readiness Assessment",
                url: "#",
                type: "template",
                duration: "20 min",
              },
            ],
          },
          children: [
            {
              id: "making-the-case-to-your-team",
              title: "Making the Case to Your Team",
              summary:
                "Your team needs to understand why AI adoption matters and what's in it for them individually. Focus on concrete benefits: faster code reviews, less boilerplate, more time for creative problem-solving. Address skepticism directly and share success stories from similar teams.",
              resources: {
                read: [
                  {
                    title: "Communicating AI Benefits to Engineers",
                    url: "#",
                    type: "article",
                    duration: "8 min",
                  },
                  {
                    title: "Addressing AI Adoption Resistance",
                    url: "#",
                    type: "article",
                    duration: "10 min",
                  },
                ],
                watch: [
                  {
                    title: "Team Buy-In Strategies That Work",
                    url: "#",
                    type: "video",
                    duration: "18 min",
                  },
                ],
                do: [
                  {
                    title: "Create Your AI Adoption Pitch Deck",
                    url: "#",
                    type: "exercise",
                    duration: "45 min",
                  },
                ],
              },
            },
            {
              id: "starting-small-pilot-projects",
              title: "Starting Small: Pilot Projects",
              summary:
                "Rather than a sweeping mandate, start with willing volunteers and low-stakes projects. Choose pilot projects that are visible enough to demonstrate value but contained enough to limit risk. Document learnings systematically and celebrate early wins to build momentum.",
              resources: {
                read: [
                  {
                    title: "Selecting the Right Pilot Projects",
                    url: "#",
                    type: "article",
                    duration: "7 min",
                  },
                  {
                    title: "Pilot Program Playbook",
                    url: "#",
                    type: "docs",
                    duration: "15 min",
                  },
                ],
                watch: [
                  {
                    title: "From Pilot to Production: A Case Study",
                    url: "#",
                    type: "video",
                    duration: "20 min",
                  },
                ],
                do: [
                  {
                    title: "Design Your AI Pilot Program",
                    url: "#",
                    type: "template",
                    duration: "30 min",
                  },
                ],
              },
            },
            {
              id: "setting-realistic-expectations",
              title: "Setting Realistic Expectations",
              summary:
                "AI tools are powerful but not magic. Help your team understand the learning curve, common pitfalls, and realistic productivity gains. Setting accurate expectations prevents disillusionment and helps team members persist through the initial adjustment period.",
              resources: {
                read: [
                  {
                    title: "The AI Productivity Curve",
                    url: "#",
                    type: "article",
                    duration: "6 min",
                  },
                  {
                    title: "Common AI Adoption Pitfalls",
                    url: "#",
                    type: "article",
                    duration: "9 min",
                  },
                ],
                watch: [
                  {
                    title: "Real Talk: What AI Can and Can't Do",
                    url: "#",
                    type: "video",
                    duration: "15 min",
                  },
                ],
                do: [
                  {
                    title: "Create Team Expectations Document",
                    url: "#",
                    type: "exercise",
                    duration: "25 min",
                  },
                ],
              },
            },
          ],
        },
      ],
    },

    // ========================================================================
    // DAILY PRACTICES
    // ========================================================================
    {
      id: "daily-practices",
      label: "DAILY PRACTICES",
      topics: [
        // --------------------------------------------------------------------
        // Code Review in an AI World (children on LEFT)
        // --------------------------------------------------------------------
        {
          id: "code-review-in-an-ai-world",
          title: "Code Review in an AI World",
          summary:
            "Code review practices need to evolve when a significant portion of code is AI-generated. Reviewers must develop new instincts for spotting AI patterns, potential issues, and areas that need human judgment. The goal shifts from catching typos to verifying intent alignment and architectural soundness.",
          childrenSide: "left",
          resources: {
            read: [
              {
                title: "Evolving Code Review for AI Age",
                url: "#",
                type: "article",
                duration: "12 min",
              },
              {
                title: "The New Code Review Checklist",
                url: "#",
                type: "docs",
                duration: "8 min",
              },
            ],
            watch: [
              {
                title: "Code Review Patterns for AI-Generated Code",
                url: "#",
                type: "video",
                duration: "22 min",
              },
            ],
            do: [
              {
                title: "AI Code Review Workshop",
                url: "#",
                type: "exercise",
                duration: "45 min",
              },
            ],
          },
          children: [
            {
              id: "what-changes-with-ai-generated-code",
              title: "What Changes with AI-Generated Code",
              summary:
                "AI-generated code has distinct characteristics: it often follows patterns seen in training data, may use older idioms, and can introduce subtle inconsistencies. Understanding these patterns helps reviewers focus their attention on the areas most likely to need human judgment.",
              resources: {
                read: [
                  {
                    title: "Recognizing AI Code Patterns",
                    url: "#",
                    type: "article",
                    duration: "10 min",
                  },
                  {
                    title: "AI Code Anti-Patterns to Watch For",
                    url: "#",
                    type: "article",
                    duration: "8 min",
                  },
                ],
                watch: [
                  {
                    title: "Spotting AI-Generated Code Issues",
                    url: "#",
                    type: "video",
                    duration: "16 min",
                  },
                ],
                do: [
                  {
                    title: "AI Pattern Recognition Exercise",
                    url: "#",
                    type: "exercise",
                    duration: "30 min",
                  },
                ],
              },
            },
            {
              id: "review-checklists-for-ai-code",
              title: "Review Checklists for AI Code",
              summary:
                "Standard code review checklists need AI-specific additions. These include verifying security implications, checking for hallucinated dependencies, validating business logic alignment, and ensuring consistency with existing codebase patterns. A good checklist helps reviewers maintain quality without becoming bottlenecks.",
              resources: {
                read: [
                  {
                    title: "The AI Code Review Checklist",
                    url: "#",
                    type: "template",
                    duration: "5 min",
                  },
                  {
                    title: "Building Your Team's Review Standards",
                    url: "#",
                    type: "article",
                    duration: "11 min",
                  },
                ],
                watch: [
                  {
                    title: "Implementing AI Review Guidelines",
                    url: "#",
                    type: "video",
                    duration: "18 min",
                  },
                ],
                do: [
                  {
                    title: "Customize Your Team's AI Checklist",
                    url: "#",
                    type: "template",
                    duration: "35 min",
                  },
                ],
              },
            },
            {
              id: "maintaining-code-standards",
              title: "Maintaining Code Standards",
              summary:
                "As AI generates more code, maintaining consistent standards becomes both easier and harder. AI can enforce formatting automatically, but may introduce stylistic drift over time. Establish clear guidelines, use automated tooling, and periodically audit for standard adherence.",
              resources: {
                read: [
                  {
                    title: "Code Standards in the AI Era",
                    url: "#",
                    type: "article",
                    duration: "9 min",
                  },
                  {
                    title: "Automating Standard Enforcement",
                    url: "#",
                    type: "docs",
                    duration: "12 min",
                  },
                ],
                watch: [
                  {
                    title: "Keeping Codebases Consistent",
                    url: "#",
                    type: "video",
                    duration: "14 min",
                  },
                ],
                do: [
                  {
                    title: "Standards Audit Exercise",
                    url: "#",
                    type: "exercise",
                    duration: "40 min",
                  },
                ],
              },
            },
          ],
        },
        // --------------------------------------------------------------------
        // Pair Programming with Agents (children on RIGHT)
        // --------------------------------------------------------------------
        {
          id: "pair-programming-with-agents",
          title: "Pair Programming with Agents",
          summary:
            "Pair programming takes on new dimensions when AI agents join the collaboration. Teams can experiment with human-AI pairing, AI-assisted human pairing, and even autonomous agent work. Understanding when each model excels helps teams maximize productivity while maintaining quality.",
          childrenSide: "right",
          resources: {
            read: [
              {
                title: "The New Pair Programming Landscape",
                url: "#",
                type: "article",
                duration: "14 min",
              },
              {
                title: "Human-AI Collaboration Models",
                url: "#",
                type: "article",
                duration: "10 min",
              },
            ],
            watch: [
              {
                title: "Effective Human-AI Pairing Sessions",
                url: "#",
                type: "video",
                duration: "28 min",
              },
            ],
            do: [
              {
                title: "Try Each Pairing Model",
                url: "#",
                type: "exercise",
                duration: "2 hours",
              },
            ],
          },
          children: [
            {
              id: "human-ai-pairing-models",
              title: "Human + AI Pairing Models",
              summary:
                "Several effective models have emerged: driver-navigator with AI as navigator, AI as junior pair, and AI as domain expert consultant. Each model suits different situations and skill levels. Understanding when to apply each model helps teams get the most from AI assistance.",
              resources: {
                read: [
                  {
                    title: "The 5 Human-AI Pairing Models",
                    url: "#",
                    type: "article",
                    duration: "11 min",
                  },
                  {
                    title: "Choosing the Right Pairing Model",
                    url: "#",
                    type: "article",
                    duration: "7 min",
                  },
                ],
                watch: [
                  {
                    title: "Human-AI Pairing in Practice",
                    url: "#",
                    type: "video",
                    duration: "20 min",
                  },
                ],
                do: [
                  {
                    title: "Pairing Model Selection Exercise",
                    url: "#",
                    type: "exercise",
                    duration: "25 min",
                  },
                ],
              },
            },
            {
              id: "when-ai-pairs-beat-human-pairs",
              title: "When AI Pairs Beat Human Pairs",
              summary:
                "Human-AI pairs excel in specific scenarios: exploring unfamiliar domains, rapid prototyping, and tedious refactoring tasks. They're available 24/7 and never judge silly questions. Recognizing these strengths helps teams deploy AI pairing strategically for maximum impact.",
              resources: {
                read: [
                  {
                    title: "AI Pair Advantages Analysis",
                    url: "#",
                    type: "article",
                    duration: "8 min",
                  },
                  {
                    title: "When to Choose AI Over Human Pairs",
                    url: "#",
                    type: "article",
                    duration: "6 min",
                  },
                ],
                watch: [
                  {
                    title: "AI Pairing Success Stories",
                    url: "#",
                    type: "video",
                    duration: "15 min",
                  },
                ],
                do: [
                  {
                    title: "AI vs Human Pairing Comparison",
                    url: "#",
                    type: "exercise",
                    duration: "45 min",
                  },
                ],
              },
            },
            {
              id: "sharing-prompts-and-patterns",
              title: "Sharing Prompts & Patterns",
              summary:
                "Successful teams build shared libraries of effective prompts and interaction patterns. When one team member discovers an effective approach, sharing it multiplies the benefit. Create mechanisms for capturing, curating, and distributing successful AI interaction patterns.",
              resources: {
                read: [
                  {
                    title: "Building a Team Prompt Library",
                    url: "#",
                    type: "article",
                    duration: "9 min",
                  },
                  {
                    title: "Pattern Sharing Best Practices",
                    url: "#",
                    type: "docs",
                    duration: "7 min",
                  },
                ],
                watch: [
                  {
                    title: "Creating a Prompt Knowledge Base",
                    url: "#",
                    type: "video",
                    duration: "17 min",
                  },
                ],
                do: [
                  {
                    title: "Start Your Team's Prompt Library",
                    url: "#",
                    type: "template",
                    duration: "40 min",
                  },
                ],
              },
            },
          ],
        },
      ],
    },

    // ========================================================================
    // MEASUREMENT & GROWTH
    // ========================================================================
    {
      id: "measurement-and-growth",
      label: "MEASUREMENT & GROWTH",
      topics: [
        // --------------------------------------------------------------------
        // Measuring AI Adoption (children on LEFT)
        // --------------------------------------------------------------------
        {
          id: "measuring-ai-adoption",
          title: "Measuring AI Adoption",
          summary:
            "What gets measured gets managed. Tracking AI adoption requires thoughtful metrics that capture genuine value creation, not just tool usage. Good measurement helps identify what's working, where support is needed, and how to communicate success to stakeholders.",
          childrenSide: "left",
          resources: {
            read: [
              {
                title: "Metrics That Matter for AI Adoption",
                url: "#",
                type: "article",
                duration: "13 min",
              },
              {
                title: "Measuring Developer Productivity with AI",
                url: "#",
                type: "article",
                duration: "16 min",
              },
            ],
            watch: [
              {
                title: "Building AI Adoption Dashboards",
                url: "#",
                type: "video",
                duration: "24 min",
              },
            ],
            do: [
              {
                title: "Design Your Metrics Framework",
                url: "#",
                type: "template",
                duration: "35 min",
              },
            ],
          },
          children: [
            {
              id: "leading-vs-lagging-indicators",
              title: "Leading vs. Lagging Indicators",
              summary:
                "Leading indicators predict future success: tool engagement, prompt quality scores, and team sentiment. Lagging indicators confirm value: cycle time improvements, bug rates, and developer satisfaction. A balanced scorecard uses both to tell the complete adoption story.",
              resources: {
                read: [
                  {
                    title: "AI Adoption Indicator Framework",
                    url: "#",
                    type: "article",
                    duration: "10 min",
                  },
                  {
                    title: "Early Warning Signs to Track",
                    url: "#",
                    type: "article",
                    duration: "7 min",
                  },
                ],
                watch: [
                  {
                    title: "Building a Balanced AI Scorecard",
                    url: "#",
                    type: "video",
                    duration: "19 min",
                  },
                ],
                do: [
                  {
                    title: "Identify Your Key Indicators",
                    url: "#",
                    type: "exercise",
                    duration: "25 min",
                  },
                ],
              },
            },
            {
              id: "avoiding-vanity-metrics",
              title: "Avoiding Vanity Metrics",
              summary:
                "Lines of AI-generated code and prompt count look impressive but don't indicate value. Avoid metrics that can be gamed or that measure activity without outcomes. Focus instead on metrics that correlate with actual business and developer experience improvements.",
              resources: {
                read: [
                  {
                    title: "The Vanity Metrics Trap",
                    url: "#",
                    type: "article",
                    duration: "8 min",
                  },
                  {
                    title: "From Vanity to Value Metrics",
                    url: "#",
                    type: "article",
                    duration: "11 min",
                  },
                ],
                watch: [
                  {
                    title: "Metrics That Actually Matter",
                    url: "#",
                    type: "video",
                    duration: "14 min",
                  },
                ],
                do: [
                  {
                    title: "Audit Your Current Metrics",
                    url: "#",
                    type: "exercise",
                    duration: "30 min",
                  },
                ],
              },
            },
            {
              id: "team-dashboards",
              title: "Team Dashboards",
              summary:
                "Effective dashboards make AI adoption visible and actionable. They should show trends over time, highlight areas needing attention, and celebrate wins. Good dashboards serve multiple audiences: team members, leadership, and stakeholders with different information needs.",
              resources: {
                read: [
                  {
                    title: "Designing AI Adoption Dashboards",
                    url: "#",
                    type: "article",
                    duration: "12 min",
                  },
                  {
                    title: "Dashboard Best Practices",
                    url: "#",
                    type: "docs",
                    duration: "9 min",
                  },
                ],
                watch: [
                  {
                    title: "Building Your Team's AI Dashboard",
                    url: "#",
                    type: "video",
                    duration: "21 min",
                  },
                ],
                do: [
                  {
                    title: "Create Your Dashboard Prototype",
                    url: "#",
                    type: "template",
                    duration: "45 min",
                  },
                ],
              },
            },
          ],
        },
        // --------------------------------------------------------------------
        // Scaling What Works (children on RIGHT)
        // --------------------------------------------------------------------
        {
          id: "scaling-what-works",
          title: "Scaling What Works",
          summary:
            "Once your team finds effective AI practices, the challenge becomes spreading them systematically. This requires identifying and empowering champions, documenting successful patterns, and creating channels for knowledge to flow across team boundaries.",
          childrenSide: "right",
          resources: {
            read: [
              {
                title: "Scaling AI Best Practices",
                url: "#",
                type: "article",
                duration: "14 min",
              },
              {
                title: "The AI Champions Playbook",
                url: "#",
                type: "docs",
                duration: "18 min",
              },
            ],
            watch: [
              {
                title: "From Pockets of Excellence to Team-Wide Success",
                url: "#",
                type: "video",
                duration: "26 min",
              },
            ],
            do: [
              {
                title: "Create Your Scaling Strategy",
                url: "#",
                type: "template",
                duration: "40 min",
              },
            ],
          },
          children: [
            {
              id: "identifying-power-users",
              title: "Identifying Power Users",
              summary:
                "Every team has members who naturally gravitate toward new tools and extract maximum value quickly. These power users are your force multipliers. Identify them early, understand their approaches, and create opportunities for them to share knowledge with teammates.",
              resources: {
                read: [
                  {
                    title: "Spotting AI Power Users",
                    url: "#",
                    type: "article",
                    duration: "7 min",
                  },
                  {
                    title: "Nurturing Internal Champions",
                    url: "#",
                    type: "article",
                    duration: "10 min",
                  },
                ],
                watch: [
                  {
                    title: "Building a Champion Network",
                    url: "#",
                    type: "video",
                    duration: "16 min",
                  },
                ],
                do: [
                  {
                    title: "Map Your Team's AI Champions",
                    url: "#",
                    type: "exercise",
                    duration: "20 min",
                  },
                ],
              },
            },
            {
              id: "creating-team-playbooks",
              title: "Creating Team Playbooks",
              summary:
                "Playbooks codify what works into repeatable guidance. They should cover common scenarios, recommended approaches, and lessons learned. Good playbooks evolve continuously as the team discovers new patterns and as AI tools themselves improve.",
              resources: {
                read: [
                  {
                    title: "The AI Team Playbook Template",
                    url: "#",
                    type: "template",
                    duration: "10 min",
                  },
                  {
                    title: "Writing Effective Playbooks",
                    url: "#",
                    type: "article",
                    duration: "12 min",
                  },
                ],
                watch: [
                  {
                    title: "Playbook Development Workshop",
                    url: "#",
                    type: "video",
                    duration: "22 min",
                  },
                ],
                do: [
                  {
                    title: "Draft Your First AI Playbook",
                    url: "#",
                    type: "exercise",
                    duration: "1 hour",
                  },
                ],
              },
            },
            {
              id: "cross-team-learning",
              title: "Cross-Team Learning",
              summary:
                "AI learnings shouldn't stay siloed in individual teams. Create mechanisms for cross-pollination: regular show-and-tells, shared documentation repositories, and internal communities of practice. What works in one context often transfers with minor adaptation.",
              resources: {
                read: [
                  {
                    title: "Cross-Team Knowledge Sharing Models",
                    url: "#",
                    type: "article",
                    duration: "9 min",
                  },
                  {
                    title: "Building Communities of Practice",
                    url: "#",
                    type: "docs",
                    duration: "13 min",
                  },
                ],
                watch: [
                  {
                    title: "Effective Cross-Team AI Learning",
                    url: "#",
                    type: "video",
                    duration: "18 min",
                  },
                ],
                do: [
                  {
                    title: "Plan Your Cross-Team Initiative",
                    url: "#",
                    type: "template",
                    duration: "35 min",
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
