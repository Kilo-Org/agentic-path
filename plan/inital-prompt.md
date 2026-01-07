# Project: Agentic Engineering for Humans

Build a single-page interactive learning roadmap using **Astro** at **path.kilo.ai**. The site teaches agentic engineering — working effectively with AI coding agents.

## Core Concept: Visual Roadmap with Concept Popups

**Inspiration:** roadmap.sh — specifically the visual language of:

- A main vertical "spine" with major topic nodes
- Sub-concepts branching off to left and right in clusters
- Dotted connecting lines showing relationships
- Clicking any node opens an on-page popup with explanation + resources

**Key difference from roadmap.sh:** Ours is simpler and curated (~15-25 nodes per persona, not hundreds), but should feel similarly rich and explorable.

## Technical Approach: React Flow

Use **React Flow** (@xyflow/react) as an Astro React island for rendering the roadmap visualization.

```bash
npm install @xyflow/react
```

````

**Why React Flow:**

- Handles node positioning and edge rendering
- Built-in click handlers for opening the drawer
- Custom node components for our styling
- Smooth panning (optional) and responsive behavior

**Configuration:**

- Disable node dragging (`nodesDraggable={false}`)
- Disable user selection (`nodesConnectable={false}`)
- Enable fit view (`fitView`)
- Use `smoothstep` or `default` edge type with animated dotted lines
- Custom node component matching our yellow/gold design

## Information Architecture

Each persona has a **main spine** of major topics, with **sub-concepts branching off** each topic. This creates the roadmap.sh-style visual hierarchy.

```
For Myself (Individual Engineer)
│
├─ FOUNDATIONS (section label)
│  │
│  ├─● The Agentic Engineering Mindset ←─ main spine node
│  │    ├── What is Agentic Engineering? (branch right)
│  │    ├── The 2023 → 2028 Shift (branch right)
│  │    └── End-to-End Ownership (branch right)
│  │
│  ├─● Your Development Environment ←─ main spine node
│       ├── Choosing Your AI Coding Tool (branch left)
│       ├── Setting Up for Success (branch left)
│       └── Model Selection Strategy (branch left)
│
├─ CORE SKILLS (section label)
│  │
│  ├─● Professional Prompting ←─ main spine node
│  │    ├── Prompt Structure & Clarity (branch right)
│  │    ├── Iterative Refinement (branch right)
│  │    ├── When to Be Specific vs. Abstract (branch right)
│  │    └── Multi-turn Conversations (branch right)
│  │
│  ├─● Context Engineering ←─ main spine node
│       ├── What Context Matters (branch left)
│       ├── Managing Context Windows (branch left)
│       ├── Project Documentation for AI (branch left)
│       └── Rules & System Prompts (branch left)
│
├─ ADVANCED (section label)
│  │
│  ├─● Working with Multiple Agents ←─ main spine node
│  │    ├── Agent Orchestration Patterns (branch right)
│  │    ├── Parallel vs. Sequential Workflows (branch right)
│  │    └── Managing Agent Fleets (branch right)
│  │
│  ├─● Quality & Velocity ←─ main spine node
│       ├── When to Code vs. Delegate (branch left)
│       ├── Reviewing AI-Generated Code (branch left)
│       └── Debugging with AI (branch left)


For My Team (Team Lead)
│
├─ GETTING STARTED
│  ├─● Introducing AI Agents to Your Team
│       ├── Making the Case to Your Team
│       ├── Starting Small: Pilot Projects
│       └── Setting Realistic Expectations
│
├─ DAILY PRACTICES
│  ├─● Code Review in an AI World
│  │    ├── What Changes with AI-Generated Code
│  │    ├── Review Checklists for AI Code
│  │    └── Maintaining Code Standards
│  │
│  ├─● Pair Programming with Agents
│       ├── Human + AI Pairing Models
│       ├── When AI Pairs Beat Human Pairs
│       └── Sharing Prompts & Patterns
│
├─ MEASUREMENT & GROWTH
│  ├─● Measuring AI Adoption
│  │    ├── Leading vs. Lagging Indicators
│  │    ├── Avoiding Vanity Metrics
│  │    └── Team Dashboards
│  │
│  ├─● Scaling What Works
│       ├── Identifying Power Users
│       ├── Creating Team Playbooks
│       └── Cross-Team Learning


For My Organization (Strategic)
│
├─ BUILDING THE CASE
│  ├─● ROI and Business Case
│  │    ├── Calculating Productivity Gains
│  │    ├── Cost Analysis: Tools + Time
│  │    └── Executive Communication
│  │
│  ├─● Security & Compliance
│       ├── Data Exposure Risks
│       ├── Code Ownership & IP
│       └── Compliance Frameworks
│
├─ CULTURAL TRANSFORMATION
│  ├─● The Cultural Shift
│  │    ├── From Collaboration-First to Ownership-First
│  │    ├── Redefining "Senior Engineer"
│  │    └── Psychological Safety with AI
│  │
│  ├─● Organizational Change Management
│       ├── Phased Rollout Strategies
│       ├── Training Programs
│       └── Champions & Communities of Practice
│
├─ SCALING
│  ├─● Hiring for the AI Era
│  │    ├── Updated Job Descriptions
│  │    ├── Interview Questions That Matter
│  │    └── Onboarding with AI Tools
│  │
│  ├─● Infrastructure & Tooling
│       ├── Standardizing on Tools
│       ├── Enterprise Deployment
│       └── Usage Analytics & Governance
```

## React Flow Implementation

### Node Types

Define two custom node types:

**1. SpineNode** — The main topic nodes on the vertical spine

- Larger, more prominent
- Yellow/gold background
- Bold text
- Connected to section labels above

**2. BranchNode** — Sub-concepts branching off

- Smaller, secondary styling
- Yellow/gold background (slightly muted or outlined variant)
- Connected to spine node via dotted line

**3. SectionLabel** — Non-interactive section headers

- Text only, no background
- Uppercase, muted color
- e.g., "FOUNDATIONS", "CORE SKILLS"

### Edge Styling

```typescript
const edgeDefaults = {
  type: "smoothstep",
  animated: false,
  style: {
    stroke: "#4a4a4a",
    strokeWidth: 2,
    strokeDasharray: "5,5", // dotted line
  },
};
```

### Layout Strategy

Position nodes programmatically:

- Spine nodes: centered (x: 400), spaced vertically (y increments of ~200)
- Left branches: x: 100-200, clustered near their parent spine node
- Right branches: x: 600-700, clustered near their parent spine node
- Section labels: centered above each section's first spine node

Consider using **Dagre** for auto-layout if manual positioning is tedious:

```bash
npm install dagre
```

## Data Structure

```typescript
interface Resource {
  title: string;
  url: string;
  type:
    | "article"
    | "video"
    | "twitter-thread"
    | "exercise"
    | "template"
    | "docs";
  duration?: string;
  author?: string;
}

interface Concept {
  id: string;
  title: string;
  summary: string; // 2-3 sentences explaining the concept
  nodeType: "spine" | "branch" | "section-label";
  parentId?: string; // for branch nodes, which spine node they connect to
  section: string;
  resources: {
    read: Resource[];
    watch: Resource[];
    do: Resource[];
  };
}

interface Persona {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  concepts: Concept[];
}

// React Flow will transform this into nodes[] and edges[]
```

## User Flow

1. **Land** → See title "Agentic Engineering for Humans" + 3 persona cards
2. **Click persona** → Smooth scroll to that persona's React Flow roadmap
3. **See roadmap** → Visual node graph with spine + branches (like roadmap.sh)
4. **Click any node** → Side drawer slides in with:
   - Concept title
   - 2-3 sentence explanation
   - Resources grouped by Read / Watch / Do
5. **Close drawer** → Click ✕ or outside, continue exploring the roadmap
6. **URL updates** → Hash-based routing (`#for-myself/context-engineering`)

## Drawer Component

Create a `<ConceptDrawer>` component:

- Slides in from the right (~450px width)
- Shows: title, summary, then resources grouped by Read/Watch/Do
- Each resource shows: type badge, title, duration, author
- Close button (✕) top right
- Click outside or ESC to close
- URL hash updates when open

## Design Specifications

### Colors

```css
--bg-primary: #0a0a0a;
--bg-secondary: #141414;
--bg-drawer: #1a1a1a;
--accent-yellow: #e5c07b;
--accent-yellow-muted: #c9a961;
--accent-blue: #4aa8d8;
--text-primary: #e5e5e5;
--text-muted: #9ca3af;
--border: #2a2a2a;
--edge-color: #4a4a4a;
```

### Spine Node Styling

- Background: `--accent-yellow`
- Text: #1a1a1a (dark)
- Font-weight: 600
- Padding: 16px 24px
- Border-radius: 8px
- Border: 2px solid transparent
- Hover: slight glow, cursor pointer
- Selected: border-color: `--accent-blue`

### Branch Node Styling

- Background: `--accent-yellow` (or outlined variant)
- Text: #1a1a1a
- Font-weight: 500
- Padding: 12px 18px
- Border-radius: 6px
- Slightly smaller than spine nodes

### Section Label Styling

- No background
- Text: `--text-muted`
- Font-size: 12px
- Letter-spacing: 2px
- Text-transform: uppercase

## React Flow Config

```tsx
<ReactFlow
  nodes={nodes}
  edges={edges}
  nodeTypes={{ spine: SpineNode, branch: BranchNode, label: SectionLabel }}
  onNodeClick={(_, node) => {
    if (node.type !== "label") openDrawer(node.id);
  }}
  nodesDraggable={false}
  nodesConnectable={false}
  elementsSelectable={true}
  fitView
  fitViewOptions={{ padding: 0.2 }}
  minZoom={0.5}
  maxZoom={1.5}
>
  <Background color="#1a1a1a" gap={20} />
</ReactFlow>
```

## File Structure

```
src/
├── data/
│   └── content.ts              # All personas, concepts, resources
├── components/
│   ├── PersonaCard.astro
│   ├── RoadmapFlow.tsx         # React Flow island
│   ├── nodes/
│   │   ├── SpineNode.tsx
│   │   ├── BranchNode.tsx
│   │   └── SectionLabel.tsx
│   ├── ConceptDrawer.tsx
│   └── ResourceList.tsx
├── lib/
│   └── transformToFlow.ts      # Convert content.ts → React Flow nodes/edges
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
```

## Placeholder Content

Generate complete placeholder content for all three personas with the full branching structure shown above. Each branch concept needs:

- Realistic title
- 2-3 sentence summary that actually teaches something
- 1-2 Read resources (articles, threads)
- 1 Watch resource (video)
- 1 Do resource (exercise, template)

Spine nodes can have a higher-level summary that introduces the cluster of branch concepts below them.

## Responsive Behavior

- **Desktop (>1024px):** Full React Flow roadmap with branching
- **Tablet (768-1024px):** Simplified layout, branches stack vertically
- **Mobile (<768px):** Linear list view of concepts (no React Flow), drawer becomes bottom sheet

## What to Deliver

1. Complete Astro project with React Flow integration
2. Custom node components (SpineNode, BranchNode, SectionLabel)
3. Transformation utility to convert content data → React Flow format
4. Fully typed data structure with realistic placeholder content
5. Working drawer with concept details and resources
6. Hash-based routing for deep linking
7. Responsive design with mobile fallback
8. Clear comments for customization points

## Philosophy Context

This site embodies "Kilo Speed" — a way of working where engineers own features end-to-end, AI agents handle execution, and no one is blocked. The content teaches this philosophy. It's education first — the goal is to genuinely help people become agentic engineers, not to sell them Kilo.
````
