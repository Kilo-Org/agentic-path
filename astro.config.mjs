// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";
import sitemap from "@astrojs/sitemap";

const enSidebar = [
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
];

const ruSidebar = [
  {
    label: "Введение",
    items: [
      {
        label: "Что такое агентная инженерия?",
        slug: "introduction/what-is-agentic-engineering",
      },
      {
        label: "Как работают агенты",
        slug: "introduction/how-agents-work",
      },
      {
        label: "Работа с агентами",
        slug: "introduction/working-with-agents",
      },
      {
        label: "Тенденции и закономерности",
        slug: "introduction/trends-patterns",
      },
    ],
  },
  {
    label: "Для инженеров",
    items: [
      { label: "Начало работы", slug: "engineers/getting-started" },
      {
        label: "Декомпозиция задач",
        slug: "engineers/task-decomposition",
      },
      { label: "Лучшие практики", slug: "engineers/best-practices" },
    ],
  },
  {
    label: "Для тимлидов",
    items: [
      {
        label: "Внедрение агентных инструментов",
        slug: "team-leads/adopting-agentic-tools",
      },
      {
        label: "Измерение влияния",
        slug: "team-leads/measuring-impact",
      },
      {
        label: "Обеспечение качества",
        slug: "team-leads/quality-assurance",
      },
      {
        label: "Команда из одной пиццы",
        slug: "team-leads/1-pizza-teams",
      },
    ],
  },
  {
    label: "Для руководителей",
    items: [
      { label: "Стратегическая visión", slug: "executives/strategic-vision" },
      { label: "Фреймворки ROI", slug: "executives/roi-frameworks" },
      {
        label: "Плейбук внедрения",
        slug: "executives/adoption-playbook",
      },
      {
        label: "Безопасность и соблюдение норм",
        slug: "executives/security-compliance",
      },
      {
        label: "Искусственный интеллект в нативной экономике",
        slug: "executives/ai-native-economics",
      },
    ],
  },
  {
    label: "Прецеденты использования по этапам",
    items: [
      {
        label: "Планирование и дизайн",
        slug: "use-cases/planning-design",
      },
      { label: "Реализация", slug: "use-cases/implementation" },
      {
        label: "Развертывание и эксплуатация",
        slug: "use-cases/deployment-operations",
      },
      {
        label: "Качество и документация",
        slug: "use-cases/quality-documentation",
      },
    ],
  },
  {
    label: "Управление и риски",
    items: [
      { label: "Проверка безопасности", slug: "governance/security-review" },
      { label: "Ответственность", slug: "governance/accountability" },
      { label: "Качество контрольных точек", slug: "governance/quality-gates" },
    ],
  },
  {
    label: "Приложения",
    items: [
      { label: "Глоссарий", slug: "appendices/glossary" },
      { label: "Рекомендуемая литература", slug: "appendices/reading-list" },
      { label: "Шаблоны запросов", slug: "appendices/prompt-templates" },
    ],
  },
  {
    label: "Сообщество",
    items: [
      { label: "Присоединиться к сообществу", slug: "community" },
      { label: "Вклад в проект", slug: "community/contributing" },
    ],
  },
];

export default defineConfig({
  site: "https://path.kilo.ai",
  integrations: [
    starlight({
      title: "Agentic Engineering",
      head: [
        {
          tag: "script",
          attrs: {
            src: "/posthog.js",
            defer: true,
          },
        },
      ],
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
      customCss: ["./src/styles/custom.css"],
      plugins: [
        catppuccin({
          dark: { flavor: "mocha", accent: "yellow" },
          light: { flavor: "latte", accent: "peach" },
        }),
      ],
      locales: {
        en: {
          label: "English",
          title: "Agentic Engineering",
          editLink: {
            baseUrl: "https://github.com/Kilo-Org/agentic-path/edit/main/",
          },
          sidebar: enSidebar,
        },
        ru: {
          label: "Русский",
          title: "Агентная инженерия",
          editLink: {
            baseUrl: "https://github.com/Kilo-Org/agentic-path/edit/main/ru/",
          },
          sidebar: ruSidebar,
        },
      },
    }),
    sitemap(),
  ],
});