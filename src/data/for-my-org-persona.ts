/**
 * Roadmap data for the "For My Organization" (Strategic) persona.
 * This roadmap guides organizational leaders through building the case for AI adoption,
 * managing cultural transformation, and scaling AI-assisted development across the enterprise.
 */

import type { Persona } from "@/types";

export const forMyOrgPersona: Persona = {
  id: "for-my-org",
  title: "For My Organization",
  subtitle: "Strategic",
  icon: "🏢",
  sections: [
    // ========================================================================
    // BUILDING THE CASE
    // ========================================================================
    {
      id: "building-the-case",
      label: "BUILDING THE CASE",
      topics: [
        // --------------------------------------------------------------------
        // ROI and Business Case (children on RIGHT)
        // --------------------------------------------------------------------
        {
          id: "roi-and-business-case",
          title: "ROI and Business Case",
          summary:
            "Building a compelling business case for AI adoption requires quantifying both direct and indirect benefits. You need to demonstrate productivity gains, calculate total cost of ownership, and communicate value in terms executives understand. A strong business case accelerates approval and secures ongoing investment.",
          childrenSide: "right",
          resources: {
            read: [
              {
                title: "Building the AI Business Case",
                url: "#",
                type: "article",
                duration: "15 min",
              },
              {
                title: "Executive Guide to AI Development Tools",
                url: "#",
                type: "article",
                duration: "12 min",
              },
            ],
            watch: [
              {
                title: "Presenting AI ROI to the C-Suite",
                url: "#",
                type: "video",
                duration: "25 min",
              },
            ],
            do: [
              {
                title: "ROI Calculator Template",
                url: "#",
                type: "template",
                duration: "30 min",
              },
            ],
          },
          children: [
            {
              id: "calculating-productivity-gains",
              title: "Calculating Productivity Gains",
              summary:
                "Measuring AI productivity gains requires establishing clear baselines and tracking meaningful metrics. Focus on cycle time reduction, output volume, and quality improvements rather than lines of code. Use controlled studies and A/B testing to generate credible data that survives executive scrutiny.",
              resources: {
                read: [
                  {
                    title: "Productivity Metrics That Matter",
                    url: "#",
                    type: "article",
                    duration: "10 min",
                  },
                  {
                    title: "Setting Up Productivity Baselines",
                    url: "#",
                    type: "docs",
                    duration: "8 min",
                  },
                ],
                watch: [
                  {
                    title: "Measuring AI Impact on Development Velocity",
                    url: "#",
                    type: "video",
                    duration: "18 min",
                  },
                ],
                do: [
                  {
                    title: "Productivity Baseline Assessment",
                    url: "#",
                    type: "template",
                    duration: "45 min",
                  },
                ],
              },
            },
            {
              id: "cost-analysis-tools-time",
              title: "Cost Analysis: Tools + Time",
              summary:
                "A comprehensive cost analysis includes licensing fees, infrastructure costs, training time, and productivity dips during adoption. Balance these against time savings, quality improvements, and competitive advantages. Present a realistic 3-year total cost of ownership that accounts for scaling.",
              resources: {
                read: [
                  {
                    title: "Total Cost of AI Tool Ownership",
                    url: "#",
                    type: "article",
                    duration: "12 min",
                  },
                  {
                    title: "Hidden Costs of AI Adoption",
                    url: "#",
                    type: "article",
                    duration: "7 min",
                  },
                ],
                watch: [
                  {
                    title: "Building a Complete Cost Model",
                    url: "#",
                    type: "video",
                    duration: "20 min",
                  },
                ],
                do: [
                  {
                    title: "Cost-Benefit Analysis Spreadsheet",
                    url: "#",
                    type: "template",
                    duration: "40 min",
                  },
                ],
              },
            },
            {
              id: "executive-communication",
              title: "Executive Communication",
              summary:
                "Executives care about business outcomes, not technical details. Frame AI adoption in terms of competitive advantage, market responsiveness, and talent retention. Prepare for common objections around security, reliability, and job displacement with data-backed responses.",
              resources: {
                read: [
                  {
                    title: "Speaking Executive: AI Edition",
                    url: "#",
                    type: "article",
                    duration: "8 min",
                  },
                  {
                    title: "Handling C-Suite Objections",
                    url: "#",
                    type: "article",
                    duration: "10 min",
                  },
                ],
                watch: [
                  {
                    title: "AI Pitch Strategies That Work",
                    url: "#",
                    type: "video",
                    duration: "15 min",
                  },
                ],
                do: [
                  {
                    title: "Executive Presentation Template",
                    url: "#",
                    type: "template",
                    duration: "35 min",
                  },
                ],
              },
            },
          ],
        },
        // --------------------------------------------------------------------
        // Security & Compliance (children on LEFT)
        // --------------------------------------------------------------------
        {
          id: "security-compliance",
          title: "Security & Compliance",
          summary:
            "Security and compliance considerations are critical gates for enterprise AI adoption. You need to understand data exposure risks, establish code ownership policies, and align with existing compliance frameworks. Proactive security planning prevents costly delays and builds organizational trust.",
          childrenSide: "left",
          resources: {
            read: [
              {
                title: "Enterprise AI Security Playbook",
                url: "#",
                type: "article",
                duration: "20 min",
              },
              {
                title: "AI Compliance Landscape Overview",
                url: "#",
                type: "docs",
                duration: "15 min",
              },
            ],
            watch: [
              {
                title: "Securing AI Development Workflows",
                url: "#",
                type: "video",
                duration: "30 min",
              },
            ],
            do: [
              {
                title: "Security Risk Assessment Template",
                url: "#",
                type: "template",
                duration: "45 min",
              },
            ],
          },
          children: [
            {
              id: "data-exposure-risks",
              title: "Data Exposure Risks",
              summary:
                "AI coding tools process code and context that may contain sensitive information. Understand what data is transmitted, how it's stored, and what controls exist. Implement guardrails for sensitive repositories and establish clear policies for what can and cannot be shared with AI services.",
              resources: {
                read: [
                  {
                    title: "Understanding AI Data Flows",
                    url: "#",
                    type: "article",
                    duration: "12 min",
                  },
                  {
                    title: "Sensitive Data Classification for AI",
                    url: "#",
                    type: "docs",
                    duration: "10 min",
                  },
                ],
                watch: [
                  {
                    title: "Data Exposure Risk Assessment",
                    url: "#",
                    type: "video",
                    duration: "18 min",
                  },
                ],
                do: [
                  {
                    title: "Data Sensitivity Mapping Exercise",
                    url: "#",
                    type: "exercise",
                    duration: "40 min",
                  },
                ],
              },
            },
            {
              id: "code-ownership-ip",
              title: "Code Ownership & IP",
              summary:
                "AI-generated code raises questions about intellectual property ownership and licensing. Understand the legal landscape, review vendor terms of service, and establish clear policies for AI-generated code attribution and ownership. Work with legal to create comprehensive IP guidelines.",
              resources: {
                read: [
                  {
                    title: "IP Implications of AI-Generated Code",
                    url: "#",
                    type: "article",
                    duration: "15 min",
                  },
                  {
                    title: "Vendor Terms Comparison Guide",
                    url: "#",
                    type: "article",
                    duration: "10 min",
                  },
                ],
                watch: [
                  {
                    title: "Legal Perspectives on AI Code",
                    url: "#",
                    type: "video",
                    duration: "22 min",
                  },
                ],
                do: [
                  {
                    title: "IP Policy Template",
                    url: "#",
                    type: "template",
                    duration: "30 min",
                  },
                ],
              },
            },
            {
              id: "compliance-frameworks",
              title: "Compliance Frameworks",
              summary:
                "Different industries have specific compliance requirements that affect AI tool usage. Map your AI adoption strategy to SOC 2, HIPAA, PCI-DSS, or other relevant frameworks. Document controls, maintain audit trails, and prepare for compliance reviews with AI-specific evidence.",
              resources: {
                read: [
                  {
                    title: "AI Tools and Compliance Frameworks",
                    url: "#",
                    type: "article",
                    duration: "14 min",
                  },
                  {
                    title: "SOC 2 Considerations for AI Development",
                    url: "#",
                    type: "docs",
                    duration: "12 min",
                  },
                ],
                watch: [
                  {
                    title: "Compliance Mapping for AI Adoption",
                    url: "#",
                    type: "video",
                    duration: "25 min",
                  },
                ],
                do: [
                  {
                    title: "Compliance Gap Analysis Template",
                    url: "#",
                    type: "template",
                    duration: "50 min",
                  },
                ],
              },
            },
          ],
        },
      ],
    },

    // ========================================================================
    // CULTURAL TRANSFORMATION
    // ========================================================================
    {
      id: "cultural-transformation",
      label: "CULTURAL TRANSFORMATION",
      topics: [
        // --------------------------------------------------------------------
        // The Cultural Shift (children on RIGHT)
        // --------------------------------------------------------------------
        {
          id: "the-cultural-shift",
          title: "The Cultural Shift",
          summary:
            "AI adoption represents more than a tooling change—it's a fundamental shift in how software is developed. Success requires intentionally shaping culture around new collaboration models, evolving role definitions, and creating psychological safety for experimentation. Cultural transformation enables sustainable AI adoption.",
          childrenSide: "right",
          resources: {
            read: [
              {
                title: "Cultural Dimensions of AI Adoption",
                url: "#",
                type: "article",
                duration: "18 min",
              },
              {
                title: "Shaping Culture for AI Success",
                url: "#",
                type: "article",
                duration: "12 min",
              },
            ],
            watch: [
              {
                title: "Leading Cultural Change in Tech Organizations",
                url: "#",
                type: "video",
                duration: "28 min",
              },
            ],
            do: [
              {
                title: "Cultural Assessment Survey",
                url: "#",
                type: "template",
                duration: "25 min",
              },
            ],
          },
          children: [
            {
              id: "collaboration-to-ownership-first",
              title: "From Collaboration-First to Ownership-First",
              summary:
                "AI enables individual engineers to tackle larger scope independently. This shift from collaboration-first to ownership-first models changes team dynamics, communication patterns, and project allocation. Guide your organization through this transition while preserving valuable collaborative practices.",
              resources: {
                read: [
                  {
                    title: "The Ownership-First Paradigm",
                    url: "#",
                    type: "article",
                    duration: "10 min",
                  },
                  {
                    title: "Balancing Independence and Collaboration",
                    url: "#",
                    type: "article",
                    duration: "8 min",
                  },
                ],
                watch: [
                  {
                    title: "Team Dynamics in the AI Era",
                    url: "#",
                    type: "video",
                    duration: "20 min",
                  },
                ],
                do: [
                  {
                    title: "Collaboration Model Assessment",
                    url: "#",
                    type: "exercise",
                    duration: "35 min",
                  },
                ],
              },
            },
            {
              id: "redefining-senior-engineer",
              title: "Redefining 'Senior Engineer'",
              summary:
                "Traditional markers of seniority—coding speed, syntax mastery, framework knowledge—matter less in an AI-augmented world. The new senior engineer excels at problem decomposition, AI orchestration, quality judgment, and system thinking. Update career ladders and expectations accordingly.",
              resources: {
                read: [
                  {
                    title: "The New Senior Engineer Competencies",
                    url: "#",
                    type: "article",
                    duration: "12 min",
                  },
                  {
                    title: "Updating Career Ladders for AI",
                    url: "#",
                    type: "docs",
                    duration: "15 min",
                  },
                ],
                watch: [
                  {
                    title: "Engineering Excellence in the AI Age",
                    url: "#",
                    type: "video",
                    duration: "22 min",
                  },
                ],
                do: [
                  {
                    title: "Career Ladder Review Exercise",
                    url: "#",
                    type: "template",
                    duration: "45 min",
                  },
                ],
              },
            },
            {
              id: "psychological-safety-with-ai",
              title: "Psychological Safety with AI",
              summary:
                "Engineers may feel threatened by AI capabilities or judged for relying on AI assistance. Create psychological safety by normalizing AI use, celebrating effective AI collaboration, and explicitly valuing judgment over typing speed. Fear of replacement hinders adoption and innovation.",
              resources: {
                read: [
                  {
                    title: "Building Safety for AI Experimentation",
                    url: "#",
                    type: "article",
                    duration: "9 min",
                  },
                  {
                    title: "Addressing AI Anxiety in Teams",
                    url: "#",
                    type: "article",
                    duration: "11 min",
                  },
                ],
                watch: [
                  {
                    title: "Creating Safe Spaces for AI Adoption",
                    url: "#",
                    type: "video",
                    duration: "17 min",
                  },
                ],
                do: [
                  {
                    title: "Psychological Safety Workshop Guide",
                    url: "#",
                    type: "template",
                    duration: "60 min",
                  },
                ],
              },
            },
          ],
        },
        // --------------------------------------------------------------------
        // Organizational Change Management (children on LEFT)
        // --------------------------------------------------------------------
        {
          id: "organizational-change-management",
          title: "Organizational Change Management",
          summary:
            "Successful organization-wide AI adoption requires structured change management. Move beyond ad-hoc experimentation to planned rollouts with clear milestones, comprehensive training, and change champions who accelerate adoption. A systematic approach minimizes disruption and maximizes adoption rates.",
          childrenSide: "left",
          resources: {
            read: [
              {
                title: "Change Management for AI Transformation",
                url: "#",
                type: "article",
                duration: "16 min",
              },
              {
                title: "The AI Adoption Journey Framework",
                url: "#",
                type: "docs",
                duration: "14 min",
              },
            ],
            watch: [
              {
                title: "Orchestrating Organization-Wide AI Rollout",
                url: "#",
                type: "video",
                duration: "32 min",
              },
            ],
            do: [
              {
                title: "Change Management Plan Template",
                url: "#",
                type: "template",
                duration: "40 min",
              },
            ],
          },
          children: [
            {
              id: "phased-rollout-strategies",
              title: "Phased Rollout Strategies",
              summary:
                "Phased rollouts reduce risk and build organizational learning. Start with enthusiastic early adopters, expand to mainstream teams, then address laggards with targeted support. Each phase generates lessons that improve subsequent phases and builds internal proof points.",
              resources: {
                read: [
                  {
                    title: "Designing Effective Rollout Phases",
                    url: "#",
                    type: "article",
                    duration: "11 min",
                  },
                  {
                    title: "Rollout Phase Success Criteria",
                    url: "#",
                    type: "docs",
                    duration: "8 min",
                  },
                ],
                watch: [
                  {
                    title: "Case Study: Enterprise AI Rollout",
                    url: "#",
                    type: "video",
                    duration: "24 min",
                  },
                ],
                do: [
                  {
                    title: "Rollout Phase Planning Template",
                    url: "#",
                    type: "template",
                    duration: "35 min",
                  },
                ],
              },
            },
            {
              id: "training-programs",
              title: "Training Programs",
              summary:
                "Effective training programs address different learning styles and experience levels. Combine self-paced learning, instructor-led workshops, and hands-on practice. Measure training effectiveness and iterate on content based on real-world adoption challenges.",
              resources: {
                read: [
                  {
                    title: "Designing AI Training Curricula",
                    url: "#",
                    type: "article",
                    duration: "13 min",
                  },
                  {
                    title: "Training Effectiveness Metrics",
                    url: "#",
                    type: "docs",
                    duration: "9 min",
                  },
                ],
                watch: [
                  {
                    title: "Building Internal AI Training Programs",
                    url: "#",
                    type: "video",
                    duration: "26 min",
                  },
                ],
                do: [
                  {
                    title: "Training Program Design Template",
                    url: "#",
                    type: "template",
                    duration: "50 min",
                  },
                ],
              },
            },
            {
              id: "champions-communities-practice",
              title: "Champions & Communities of Practice",
              summary:
                "Change champions accelerate adoption by providing peer support and demonstrating success. Communities of practice enable knowledge sharing and collective problem-solving. Invest in identifying and empowering these multipliers to extend your change management capacity.",
              resources: {
                read: [
                  {
                    title: "Building AI Champion Networks",
                    url: "#",
                    type: "article",
                    duration: "10 min",
                  },
                  {
                    title: "Communities of Practice Playbook",
                    url: "#",
                    type: "docs",
                    duration: "12 min",
                  },
                ],
                watch: [
                  {
                    title: "Empowering Change Champions",
                    url: "#",
                    type: "video",
                    duration: "19 min",
                  },
                ],
                do: [
                  {
                    title: "Champion Program Launch Guide",
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
    // SCALING
    // ========================================================================
    {
      id: "scaling",
      label: "SCALING",
      topics: [
        // --------------------------------------------------------------------
        // Hiring for the AI Era (children on RIGHT)
        // --------------------------------------------------------------------
        {
          id: "hiring-for-ai-era",
          title: "Hiring for the AI Era",
          summary:
            "The skills that made great engineers in the past aren't necessarily the same skills needed for AI-augmented development. Update job descriptions, interview processes, and onboarding to identify and develop candidates who can thrive in an AI-augmented environment.",
          childrenSide: "right",
          resources: {
            read: [
              {
                title: "Hiring Engineers for the AI Age",
                url: "#",
                type: "article",
                duration: "14 min",
              },
              {
                title: "Rethinking Technical Interviews",
                url: "#",
                type: "article",
                duration: "11 min",
              },
            ],
            watch: [
              {
                title: "Building AI-Ready Engineering Teams",
                url: "#",
                type: "video",
                duration: "25 min",
              },
            ],
            do: [
              {
                title: "Hiring Process Audit Template",
                url: "#",
                type: "template",
                duration: "35 min",
              },
            ],
          },
          children: [
            {
              id: "updated-job-descriptions",
              title: "Updated Job Descriptions",
              summary:
                "Traditional job descriptions may filter out excellent AI-augmented developers or attract candidates with outdated skill profiles. Update role requirements to emphasize problem decomposition, AI collaboration, and judgment skills while de-emphasizing rote memorization.",
              resources: {
                read: [
                  {
                    title: "Job Description Templates for AI Era",
                    url: "#",
                    type: "article",
                    duration: "8 min",
                  },
                  {
                    title: "Skills That Matter in AI Development",
                    url: "#",
                    type: "docs",
                    duration: "10 min",
                  },
                ],
                watch: [
                  {
                    title: "Rewriting Engineering JDs",
                    url: "#",
                    type: "video",
                    duration: "15 min",
                  },
                ],
                do: [
                  {
                    title: "Job Description Update Exercise",
                    url: "#",
                    type: "exercise",
                    duration: "30 min",
                  },
                ],
              },
            },
            {
              id: "interview-questions-matter",
              title: "Interview Questions That Matter",
              summary:
                "Live coding interviews testing syntax recall are less relevant when AI handles implementation details. Design interviews that assess problem decomposition, AI interaction skills, code review judgment, and system thinking. The best candidates excel at directing AI, not competing with it.",
              resources: {
                read: [
                  {
                    title: "Interview Questions for AI-Era Engineers",
                    url: "#",
                    type: "article",
                    duration: "12 min",
                  },
                  {
                    title: "Assessing AI Collaboration Skills",
                    url: "#",
                    type: "docs",
                    duration: "9 min",
                  },
                ],
                watch: [
                  {
                    title: "Modernizing Technical Interviews",
                    url: "#",
                    type: "video",
                    duration: "20 min",
                  },
                ],
                do: [
                  {
                    title: "Interview Question Bank Template",
                    url: "#",
                    type: "template",
                    duration: "40 min",
                  },
                ],
              },
            },
            {
              id: "onboarding-with-ai-tools",
              title: "Onboarding with AI Tools",
              summary:
                "New hire onboarding should include AI tool training from day one. Help new engineers understand organizational norms around AI use, access your prompt libraries, and learn from experienced AI users. Effective AI onboarding accelerates time-to-productivity.",
              resources: {
                read: [
                  {
                    title: "AI-Inclusive Onboarding Programs",
                    url: "#",
                    type: "article",
                    duration: "10 min",
                  },
                  {
                    title: "First-Week AI Training Guide",
                    url: "#",
                    type: "docs",
                    duration: "8 min",
                  },
                ],
                watch: [
                  {
                    title: "Onboarding Engineers with AI Tools",
                    url: "#",
                    type: "video",
                    duration: "18 min",
                  },
                ],
                do: [
                  {
                    title: "AI Onboarding Checklist Template",
                    url: "#",
                    type: "template",
                    duration: "25 min",
                  },
                ],
              },
            },
          ],
        },
        // --------------------------------------------------------------------
        // Infrastructure & Tooling (children on LEFT)
        // --------------------------------------------------------------------
        {
          id: "infrastructure-tooling",
          title: "Infrastructure & Tooling",
          summary:
            "Scaling AI adoption requires infrastructure that supports consistent tool deployment, usage visibility, and governance controls. Move from individual experiments to enterprise-grade platforms that enable productivity while maintaining security and compliance requirements.",
          childrenSide: "left",
          resources: {
            read: [
              {
                title: "Enterprise AI Infrastructure Guide",
                url: "#",
                type: "article",
                duration: "18 min",
              },
              {
                title: "AI Platform Requirements Checklist",
                url: "#",
                type: "docs",
                duration: "12 min",
              },
            ],
            watch: [
              {
                title: "Building Enterprise AI Platforms",
                url: "#",
                type: "video",
                duration: "30 min",
              },
            ],
            do: [
              {
                title: "Infrastructure Assessment Template",
                url: "#",
                type: "template",
                duration: "45 min",
              },
            ],
          },
          children: [
            {
              id: "standardizing-on-tools",
              title: "Standardizing on Tools",
              summary:
                "Tool standardization enables shared learning, simplified procurement, and consistent policies. Evaluate tools against enterprise requirements, gather team input, and make principled decisions about primary vs. allowed tools. Balance standardization benefits against innovation needs.",
              resources: {
                read: [
                  {
                    title: "Tool Selection Framework",
                    url: "#",
                    type: "article",
                    duration: "11 min",
                  },
                  {
                    title: "Standardization vs. Innovation Balance",
                    url: "#",
                    type: "article",
                    duration: "8 min",
                  },
                ],
                watch: [
                  {
                    title: "Making Enterprise Tool Decisions",
                    url: "#",
                    type: "video",
                    duration: "16 min",
                  },
                ],
                do: [
                  {
                    title: "Tool Evaluation Matrix Template",
                    url: "#",
                    type: "template",
                    duration: "35 min",
                  },
                ],
              },
            },
            {
              id: "enterprise-deployment",
              title: "Enterprise Deployment",
              summary:
                "Enterprise deployment involves license management, SSO integration, access controls, and support channels. Work with IT and security to establish deployment standards, automate provisioning, and create self-service capabilities. A smooth deployment experience drives adoption.",
              resources: {
                read: [
                  {
                    title: "AI Tool Enterprise Deployment Guide",
                    url: "#",
                    type: "docs",
                    duration: "15 min",
                  },
                  {
                    title: "License and Access Management",
                    url: "#",
                    type: "article",
                    duration: "9 min",
                  },
                ],
                watch: [
                  {
                    title: "Enterprise AI Deployment Best Practices",
                    url: "#",
                    type: "video",
                    duration: "22 min",
                  },
                ],
                do: [
                  {
                    title: "Deployment Runbook Template",
                    url: "#",
                    type: "template",
                    duration: "40 min",
                  },
                ],
              },
            },
            {
              id: "usage-analytics-governance",
              title: "Usage Analytics & Governance",
              summary:
                "Visibility into AI tool usage enables optimization, cost management, and policy enforcement. Implement usage tracking, establish governance policies, and create feedback loops between usage data and strategy. Analytics transform AI adoption from hope to measurement.",
              resources: {
                read: [
                  {
                    title: "AI Usage Analytics Framework",
                    url: "#",
                    type: "article",
                    duration: "13 min",
                  },
                  {
                    title: "Governance Policies for AI Tools",
                    url: "#",
                    type: "docs",
                    duration: "10 min",
                  },
                ],
                watch: [
                  {
                    title: "Building AI Governance Programs",
                    url: "#",
                    type: "video",
                    duration: "24 min",
                  },
                ],
                do: [
                  {
                    title: "Governance Policy Template",
                    url: "#",
                    type: "template",
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
