# Project: Agentic Engineering for Humans

## Simplified 3-Column Custom Layout

Build a single-page interactive learning roadmap using **Astro** at **path.kilo.ai**. The site teaches agentic engineering — working effectively with AI coding agents.

## Core Concept: 3-Column Visual Roadmap

**Inspiration:** roadmap.sh visual language, but dramatically simplified with a custom-built 3-column layout instead of React Flow.

**Layout Structure:**

- **Left Column:** Detail nodes (when main topic has children on the left)
- **Center Column:** Main topic nodes (the vertical spine)
- **Right Column:** Detail nodes (when main topic has children on the right)

**Key Simplifications:**

- No complex graph library needed
- Maximum 6-7 detail nodes per main topic
- Automatic left/right placement based on child count
- Simple curved SVG lines connecting main topics to their details
- Both node types are clickable to show full content in a drawer

## Technical Approach: Custom CSS Grid + SVG

**No external graph libraries.** Build a simple, maintainable layout using:

1. **CSS Grid** for the 3-column structure
2. **SVG overlay** for curved connecting lines
3. **React/Preact** (as Astro island) for interactivity
4. **Vanilla positioning** with calculated coordinates

**Why Custom Instead of React Flow:**

- Simpler codebase, easier to maintain
- Better mobile responsiveness control
- No learning curve for graph libraries
- Predictable layout behavior
- Smaller bundle size

## Layout Algorithm

### Main Topic Placement

Main topics are placed vertically in the center column with consistent spacing:

```typescript
// Main topics stack vertically in center
const mainTopicSpacing = 200; // pixels between topics
const mainTopicY = index * mainTopicSpacing + 100; // starting offset
```

### Detail Node Placement (Automatic Left/Right)

Each main topic's detail nodes are placed either **all left** or **all right** based on a simple alternating pattern:

```typescript
// Alternate sides for visual balance
const placeOnLeft = index % 2 === 0;

// Or use child count for more control
const placeOnLeft = mainTopic.children.length <= 3;
```

Detail nodes stack vertically near their parent main topic:

```typescript
const detailSpacing = 80; // pixels between detail nodes
const detailStartY = mainTopicY - ((children.length - 1) * detailSpacing) / 2;

children.forEach((child, i) => {
  const y = detailStartY + i * detailSpacing;
  const x = placeOnLeft ? leftColumnX : rightColumnX;
});
```

### Constraints

- **Maximum 6-7 detail nodes** per main topic (enforced in data structure)
- If more concepts needed, split into multiple main topics
- This keeps the layout clean and prevents overcrowding

## Information Architecture

Each persona has a hierarchical structure:

```
Persona
├─ Section 1 (e.g., "FOUNDATIONS")
│  ├─ Main Topic 1
│  │  ├─ Detail Node 1 (left)
│  │  ├─ Detail Node 2 (left)
│  │  └─ Detail Node 3 (left)
│  │
│  └─ Main Topic 2
│     ├─ Detail Node 1 (right)
│     ├─ Detail Node 2 (right)
│     └─ Detail Node 3 (right)
│
└─ Section 2 (e.g., "CORE SKILLS")
   └─ Main Topic 3
      ├─ Detail Node 1 (left)
      └─ Detail Node 2 (left)
```

### Example: For Myself (Individual Engineer)

```
FOUNDATIONS
│
├─ The Agentic Engineering Mindset (main topic, center)
│  ├─ What is Agentic Engineering? (detail, right)
│  ├─ The 2023 → 2028 Shift (detail, right)
│  └─ End-to-End Ownership (detail, right)
│
├─ Your Development Environment (main topic, center)
│  ├─ Choosing Your AI Coding Tool (detail, left)
│  ├─ Setting Up for Success (detail, left)
│  └─ Model Selection Strategy (detail, left)

CORE SKILLS
│
├─ Professional Prompting (main topic, center)
│  ├─ Prompt Structure & Clarity (detail, right)
│  ├─ Iterative Refinement (detail, right)
│  ├─ When to Be Specific vs. Abstract (detail, right)
│  └─ Multi-turn Conversations (detail, right)
│
├─ Context Engineering (main topic, center)
│  ├─ What Context Matters (detail, left)
│  ├─ Managing Context Windows (detail, left)
│  ├─ Project Documentation for AI (detail, left)
│  └─ Rules & System Prompts (detail, left)

ADVANCED
│
├─ Working with Multiple Agents (main topic, center)
│  ├─ Agent Orchestration Patterns (detail, right)
│  ├─ Parallel vs. Sequential Workflows (detail, right)
│  └─ Managing Agent Fleets (detail, right)
│
└─ Quality & Velocity (main topic, center)
   ├─ When to Code vs. Delegate (detail, left)
   ├─ Reviewing AI-Generated Code (detail, left)
   └─ Debugging with AI (detail, left)
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

interface DetailNode {
  id: string;
  title: string;
  summary: string; // 2-3 sentences
  resources: {
    read: Resource[];
    watch: Resource[];
    do: Resource[];
  };
}

interface MainTopic {
  id: string;
  title: string;
  summary: string; // Higher-level overview
  children: DetailNode[]; // Max 6-7 children
  childrenSide: "left" | "right"; // Explicit or auto-calculated
  resources: {
    read: Resource[];
    watch: Resource[];
    do: Resource[];
  };
}

interface Section {
  id: string;
  label: string; // e.g., "FOUNDATIONS", "CORE SKILLS"
  topics: MainTopic[];
}

interface Persona {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  sections: Section[];
}
```

## Component Architecture

### RoadmapView Component (React/Preact Island)

```tsx
interface RoadmapViewProps {
  persona: Persona;
}

function RoadmapView({ persona }: RoadmapViewProps) {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [positions, setPositions] = useState<NodePositions>({});

  useEffect(() => {
    // Calculate all node positions
    const calculated = calculateNodePositions(persona);
    setPositions(calculated);
  }, [persona]);

  return (
    <div className="roadmap-container">
      <div className="roadmap-grid">
        {/* Left Column */}
        <div className="column column-left">
          {renderDetailNodes(positions.left)}
        </div>

        {/* Center Column */}
        <div className="column column-center">
          {renderMainTopics(positions.center)}
        </div>

        {/* Right Column */}
        <div className="column column-right">
          {renderDetailNodes(positions.right)}
        </div>
      </div>

      {/* SVG Overlay for Connection Lines */}
      <svg className="connection-lines">{renderConnections(positions)}</svg>

      {/* Drawer */}
      {selectedNode && (
        <ConceptDrawer
          node={getNodeById(selectedNode)}
          onClose={() => setSelectedNode(null)}
        />
      )}
    </div>
  );
}
```

### Position Calculation

```typescript
interface NodePosition {
  id: string;
  x: number;
  y: number;
  type: "main" | "detail";
}

interface NodePositions {
  left: NodePosition[];
  center: NodePosition[];
  right: NodePosition[];
  connections: Connection[];
}

interface Connection {
  from: { x: number; y: number };
  to: { x: number; y: number };
  fromId: string;
  toId: string;
}

function calculateNodePositions(persona: Persona): NodePositions {
  const positions: NodePositions = {
    left: [],
    center: [],
    right: [],
    connections: [],
  };

  const columnWidth = 300;
  const leftX = 50;
  const centerX = 400;
  const rightX = 750;

  let currentY = 100;

  persona.sections.forEach((section) => {
    // Add section label (not a node, just spacing)
    currentY += 60;

    section.topics.forEach((topic, topicIndex) => {
      // Place main topic in center
      const mainTopicPos = {
        id: topic.id,
        x: centerX,
        y: currentY,
        type: "main" as const,
      };
      positions.center.push(mainTopicPos);

      // Determine side for children (alternate or based on count)
      const placeOnLeft = topicIndex % 2 === 0;
      const targetColumn = placeOnLeft ? positions.left : positions.right;
      const targetX = placeOnLeft ? leftX : rightX;

      // Place detail nodes
      const detailSpacing = 80;
      const detailStartY =
        currentY - ((topic.children.length - 1) * detailSpacing) / 2;

      topic.children.forEach((child, childIndex) => {
        const detailPos = {
          id: child.id,
          x: targetX,
          y: detailStartY + childIndex * detailSpacing,
          type: "detail" as const,
        };
        targetColumn.push(detailPos);

        // Add connection
        positions.connections.push({
          from: { x: centerX, y: currentY },
          to: { x: targetX, y: detailPos.y },
          fromId: topic.id,
          toId: child.id,
        });
      });

      // Space for next main topic
      currentY += 200;
    });
  });

  return positions;
}
```

### SVG Connection Lines

```typescript
function renderConnections(positions: NodePositions) {
  return positions.connections.map((conn) => {
    // Create curved path from main topic to detail
    const midX = (conn.from.x + conn.to.x) / 2;
    const path = `M ${conn.from.x} ${conn.from.y} 
                  C ${midX} ${conn.from.y}, 
                    ${midX} ${conn.to.y}, 
                    ${conn.to.x} ${conn.to.y}`;

    return (
      <path
        key={`${conn.fromId}-${conn.toId}`}
        d={path}
        stroke="#4a4a4a"
        strokeWidth="2"
        strokeDasharray="5,5"
        fill="none"
        className="connection-line"
      />
    );
  });
}
```

## Responsive Design

### Desktop (>1024px)

Full 3-column layout as described above.

```css
.roadmap-grid {
  display: grid;
  grid-template-columns: 300px 300px 300px;
  gap: 50px;
  justify-content: center;
  position: relative;
}
```

### Tablet (768-1024px)

Maintain 3 columns but reduce spacing:

```css
.roadmap-grid {
  grid-template-columns: 250px 250px 250px;
  gap: 30px;
}
```

### Mobile (<768px)

**Collapse to hierarchical view** - one main topic at a time:

```css
.roadmap-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.main-topic {
  /* Full width */
}

.detail-nodes {
  /* Stack below main topic, indented */
  padding-left: 20px;
}
```

**Mobile Interaction:**

- Show one main topic expanded at a time
- Tap main topic to expand/collapse its detail nodes
- Detail nodes appear below (not to the side)
- No SVG lines on mobile (too cluttered)
- Swipe between main topics or use navigation dots

```tsx
// Mobile-specific component
function MobileRoadmapView({ persona }: RoadmapViewProps) {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  return (
    <div className="mobile-roadmap">
      {persona.sections.map((section) => (
        <div key={section.id} className="mobile-section">
          <h3 className="section-label">{section.label}</h3>
          {section.topics.map((topic) => (
            <div key={topic.id} className="mobile-topic">
              <button
                className="main-topic-button"
                onClick={() =>
                  setExpandedTopic(expandedTopic === topic.id ? null : topic.id)
                }
              >
                {topic.title}
              </button>

              {expandedTopic === topic.id && (
                <div className="detail-nodes">
                  {topic.children.map((child) => (
                    <button
                      key={child.id}
                      className="detail-node-button"
                      onClick={() => openDrawer(child.id)}
                    >
                      {child.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
```

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
--connection-line: #4a4a4a;
```

### Main Topic Node Styling

```css
.main-topic-node {
  background: var(--accent-yellow);
  color: #1a1a1a;
  font-weight: 600;
  font-size: 18px;
  padding: 20px 28px;
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.main-topic-node:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(229, 192, 123, 0.3);
  border-color: var(--accent-blue);
}

.main-topic-node.selected {
  border-color: var(--accent-blue);
  box-shadow: 0 0 0 3px rgba(74, 168, 216, 0.2);
}
```

### Detail Node Styling

```css
.detail-node {
  background: var(--accent-yellow-muted);
  color: #1a1a1a;
  font-weight: 500;
  font-size: 15px;
  padding: 14px 20px;
  border-radius: 6px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}

.detail-node:hover {
  background: var(--accent-yellow);
  transform: translateX(4px); /* Subtle shift toward center */
  box-shadow: 0 2px 8px rgba(229, 192, 123, 0.2);
}
```

### Section Label Styling

```css
.section-label {
  color: var(--text-muted);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  margin: 40px 0 20px;
}
```

### Connection Lines

```css
.connection-line {
  stroke: var(--connection-line);
  stroke-width: 2;
  stroke-dasharray: 5, 5;
  fill: none;
  opacity: 0.6;
  transition: opacity 0.2s ease;
}

.connection-line.highlighted {
  stroke: var(--accent-blue);
  opacity: 1;
  stroke-width: 3;
}
```

## User Flow

1. **Land** → See title "Agentic Engineering for Humans" + 3 persona cards
2. **Click persona** → Smooth scroll to that persona's 3-column roadmap
3. **See roadmap** → Visual layout with main topics in center, details on sides
4. **Hover connections** → Lines highlight to show relationships
5. **Click any node** → Side drawer slides in with:
   - Node title
   - 2-3 sentence explanation
   - Resources grouped by Read / Watch / Do
6. **Close drawer** → Click ✕ or outside, continue exploring
7. **URL updates** → Hash-based routing (`#for-myself/context-engineering`)
8. **Mobile** → Collapse to one main topic at a time with expandable details

## Drawer Component

Same as original plan - slides in from right with concept details and resources.

```tsx
interface ConceptDrawerProps {
  node: MainTopic | DetailNode;
  onClose: () => void;
}

function ConceptDrawer({ node, onClose }: ConceptDrawerProps) {
  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
        <button className="drawer-close" onClick={onClose}>
          ✕
        </button>

        <h2 className="drawer-title">{node.title}</h2>
        <p className="drawer-summary">{node.summary}</p>

        <div className="drawer-resources">
          {node.resources.read.length > 0 && (
            <ResourceSection title="Read" resources={node.resources.read} />
          )}
          {node.resources.watch.length > 0 && (
            <ResourceSection title="Watch" resources={node.resources.watch} />
          )}
          {node.resources.do.length > 0 && (
            <ResourceSection title="Do" resources={node.resources.do} />
          )}
        </div>
      </div>
    </div>
  );
}
```

## File Structure

```
src/
├── data/
│   └── content.ts              # All personas, sections, topics, details
├── components/
│   ├── PersonaCard.astro
│   ├── RoadmapView.tsx         # Main 3-column layout component
│   ├── MobileRoadmapView.tsx   # Mobile collapsed view
│   ├── MainTopicNode.tsx       # Center column nodes
│   ├── DetailNode.tsx          # Left/right column nodes
│   ├── ConnectionLines.tsx     # SVG overlay component
│   ├── ConceptDrawer.tsx       # Slide-in drawer
│   └── ResourceList.tsx        # Resource display
├── lib/
│   ├── calculatePositions.ts   # Position calculation logic
│   └── routing.ts              # Hash-based routing utilities
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
└── styles/
    ├── global.css
    ├── roadmap.css             # 3-column layout styles
    └── mobile.css              # Mobile-specific styles
```

## Implementation Steps

1. **Set up Astro project** with React/Preact integration
2. **Create data structure** with all three personas and their hierarchies
3. **Build position calculation logic** for 3-column layout
4. **Implement desktop RoadmapView** with CSS Grid
5. **Add SVG connection lines** with curved paths
6. **Create node components** (MainTopicNode, DetailNode)
7. **Build ConceptDrawer** component
8. **Implement mobile view** with collapse/expand behavior
9. **Add hash-based routing** for deep linking
10. **Style everything** according to design specs
11. **Add placeholder content** for all personas
12. **Test responsive behavior** across breakpoints

## Advantages of This Approach

✅ **Simpler codebase** - No complex graph library to learn or maintain  
✅ **Predictable layout** - Explicit positioning, no auto-layout surprises  
✅ **Better mobile UX** - Natural collapse to hierarchical view  
✅ **Smaller bundle** - No React Flow dependency (~200KB saved)  
✅ **Easier customization** - Direct control over positioning and styling  
✅ **Enforced constraints** - Max 6-7 children keeps content focused  
✅ **Performance** - Simple DOM, no canvas rendering

## Constraints & Limitations

⚠️ **Max 6-7 detail nodes per main topic** - Enforced by design  
⚠️ **No free-form positioning** - Structured 3-column layout only  
⚠️ **No zoom/pan** - Fixed layout (but responsive)  
⚠️ **Manual side assignment** - Left/right must be specified or calculated

These constraints are **features, not bugs** - they keep the roadmap focused and maintainable.

## What to Deliver

1. Complete Astro project with React/Preact integration
2. Custom 3-column layout components
3. Position calculation utilities
4. SVG connection line rendering
5. Fully typed data structure with realistic placeholder content
6. Working drawer with concept details and resources
7. Hash-based routing for deep linking
8. Responsive design with mobile collapse behavior
9. Clear comments for customization points

## Philosophy Context

This site embodies "Kilo Speed" — a way of working where engineers own features end-to-end, AI agents handle execution, and no one is blocked. The content teaches this philosophy. It's education first — the goal is to genuinely help people become agentic engineers, not to sell them Kilo.

The simplified 3-column layout reflects this philosophy: **clear structure, focused content, no unnecessary complexity.**
