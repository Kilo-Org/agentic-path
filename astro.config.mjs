// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://path.kilo.ai",
  integrations: [
    starlight({
      head: [
        {
          tag: "script",
          attrs: {
            src: "/posthog.js",
            defer: true,
          },
        },
      ],
      title: "Agentic Engineering",
      editLink: {
        baseUrl: "https://github.com/Kilo-Org/agentic-path/edit/main/",
      },
      components: {
        Footer: "./src/components/Footer.astro",
        Header: "./src/components/Header.astro",
      },
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
              label: "How Agents Work",
              slug: "introduction/how-agents-work",
            },
            {
              label: "Working with Agents",
              slug: "introduction/working-with-agents",
            },
            {
              label: "Trends & Patterns",
              slug: "introduction/trends-patterns",
            },
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
            { label: "Best Practices", slug: "engineers/best-practices" },
          ],
        },
         {
           label: "For Team Leads",
           items: [
             {
               label: "Adopting Agentic Tools",
               slug: "team-leads/adopting-agentic-tools",
             },
             {
               label: "Measuring Impact",
               slug: "team-leads/measuring-impact",
             },
             {
               label: "Quality Assurance",
               slug: "team-leads/quality-assurance",
             },
             {
               label: "The 1-Pizza Team",
               slug: "team-leads/1-pizza-teams",
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
             {
               label: "Security & Compliance",
               slug: "executives/security-compliance",
             },
             {
               label: "AI-Native Economics",
               slug: "executives/ai-native-economics",
             },
           ],
         },
        {
          label: "Use Cases by Phase",
          items: [
            {
              label: "Planning & Design",
              slug: "use-cases/planning-design",
            },
            { label: "Implementation", slug: "use-cases/implementation" },
            {
              label: "Deployment & Operations",
              slug: "use-cases/deployment-operations",
            },
            {
              label: "Quality & Documentation",
              slug: "use-cases/quality-documentation",
            },
          ],
        },
        {
          label: "Governance & Risk",
          items: [
            { label: "Security Review", slug: "governance/security-review" },
            { label: "Accountability", slug: "governance/accountability" },
            { label: "Quality Gates", slug: "governance/quality-gates" },
          ],
        },
        {
          label: "Appendices",
          items: [
            { label: "Glossary", slug: "appendices/glossary" },
            { label: "Recommended Reading", slug: "appendices/reading-list" },
            { label: "Prompt Templates", slug: "appendices/prompt-templates" },
          ],
        },
        {
          label: "Community",
          items: [
            { label: "Join the Community", slug: "community" },
            { label: "Contributing", slug: "community/contributing" },
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
    sitemap(),
  ],
});
