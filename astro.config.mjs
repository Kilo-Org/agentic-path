// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Agentic Engineering",
      social: [
        {
          icon: "discord",
          label: "Discord",
          href: "https://kilo.love/discord",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Kilo-Org/agentic-path",
        },
      ],
      sidebar: [
        {
          label: "Introduction",
          items: [
            {
              label: "What is Agentic Engineering?",
              slug: "introduction/what-is-agentic-engineering",
            },
            {
              label: "The Autonomy Spectrum",
              slug: "introduction/autonomy-spectrum",
            },
            { label: "Why This Matters Now", slug: "introduction/why-now" },
          ],
        },
        {
          label: "Foundations",
          items: [
            { label: "How Agents Work", slug: "foundations/how-agents-work" },
            {
              label: "Human-AI Collaboration",
              slug: "foundations/human-ai-collaboration",
            },
            {
              label: "Unix Philosophy for AI",
              slug: "foundations/unix-philosophy",
            },
            { label: "Core Terminology", slug: "foundations/terminology" },
          ],
        },
        {
          label: "For Engineers",
          items: [
            { label: "Getting Started", slug: "engineers/getting-started" },
            {
              label: "Task Decomposition",
              slug: "engineers/task-decomposition",
            },
            { label: "Validating Output", slug: "engineers/validating-output" },
            { label: "Common Failure Modes", slug: "engineers/failure-modes" },
            {
              label: "AI-Compatible Codebases",
              slug: "engineers/ai-compatible-codebases",
            },
            { label: "When to Delegate", slug: "engineers/when-to-delegate" },
          ],
        },
        {
          label: "For Team Leads",
          items: [
            {
              label: "Workflow Integration",
              slug: "team-leads/workflow-integration",
            },
            {
              label: "Code Review Policies",
              slug: "team-leads/code-review-policies",
            },
            {
              label: "Testing Strategies",
              slug: "team-leads/testing-strategies",
            },
            {
              label: "Measuring Productivity",
              slug: "team-leads/measuring-productivity",
            },
            {
              label: "Training Your Team",
              slug: "team-leads/training-your-team",
            },
            {
              label: "When Agents Slow You Down",
              slug: "team-leads/when-agents-slow-you-down",
            },
          ],
        },
        {
          label: "For Executives",
          items: [
            { label: "Strategic Vision", slug: "executives/strategic-vision" },
            { label: "ROI Frameworks", slug: "executives/roi-frameworks" },
            {
              label: "Adoption Playbook",
              slug: "executives/adoption-playbook",
            },
            { label: "Build vs. Buy", slug: "executives/build-vs-buy" },
            {
              label: "Security & Compliance",
              slug: "executives/security-compliance",
            },
            {
              label: "Autonomous Agents",
              slug: "executives/autonomous-agents",
            },
          ],
        },
        {
          label: "Use Cases by Phase",
          items: [
            {
              label: "Requirements & Planning",
              slug: "use-cases/requirements-planning",
            },
            {
              label: "Architecture & Design",
              slug: "use-cases/architecture-design",
            },
            { label: "Implementation", slug: "use-cases/implementation" },
            { label: "Testing & QA", slug: "use-cases/testing-qa" },
            { label: "CI/CD & Deployment", slug: "use-cases/cicd-deployment" },
            {
              label: "Monitoring & Maintenance",
              slug: "use-cases/monitoring-maintenance",
            },
            { label: "Documentation", slug: "use-cases/documentation" },
          ],
        },
        {
          label: "Tool Landscape",
          items: [
            { label: "Categories of Tools", slug: "tools/categories" },
            { label: "Evaluation Criteria", slug: "tools/evaluation-criteria" },
            {
              label: "Integration Patterns",
              slug: "tools/integration-patterns",
            },
          ],
        },
        {
          label: "Governance & Risk",
          items: [
            { label: "Code Provenance", slug: "governance/code-provenance" },
            { label: "Security Review", slug: "governance/security-review" },
            { label: "Accountability", slug: "governance/accountability" },
            { label: "Quality Gates", slug: "governance/quality-gates" },
          ],
        },
        {
          label: "Building AI-Native Culture",
          items: [
            { label: "Change Management", slug: "culture/change-management" },
            { label: "Emerging Roles", slug: "culture/emerging-roles" },
            {
              label: "Continuous Learning",
              slug: "culture/continuous-learning",
            },
            {
              label: "Metrics That Matter",
              slug: "culture/metrics-that-matter",
            },
          ],
        },
        {
          label: "What's Next",
          items: [
            { label: "Autonomy Roadmap", slug: "whats-next/autonomy-roadmap" },
            {
              label: "Multi-Agent Systems",
              slug: "whats-next/multi-agent-systems",
            },
            {
              label: "Skills That Matter",
              slug: "whats-next/skills-that-matter",
            },
          ],
        },
        {
          label: "Appendices",
          items: [
            { label: "Glossary", slug: "appendices/glossary" },
            { label: "Recommended Reading", slug: "appendices/reading-list" },
            { label: "Sample Policies", slug: "appendices/sample-policies" },
            { label: "Prompt Templates", slug: "appendices/prompt-templates" },
          ],
        },
      ],
      plugins: [
        catppuccin({
          dark: { flavor: "mocha", accent: "yellow" },
          light: { flavor: "latte", accent: "peach" },
        }),
      ],
    }),
  ],
});
