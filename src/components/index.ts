/**
 * Central export for all Preact components.
 * Import components from this module for clean, consistent imports:
 *
 * @example
 * ```typescript
 * import { RoadmapView, MainTopicNode, DetailNode } from '@/components';
 * ```
 */

// Main roadmap view components
export { RoadmapView } from "./RoadmapView";
export type { RoadmapViewProps } from "./RoadmapView";

export { MobileRoadmapView } from "./MobileRoadmapView";
export type { MobileRoadmapViewProps } from "./MobileRoadmapView";

// Node components
export { MainTopicNode } from "./MainTopicNode";
export type { MainTopicNodeProps } from "./MainTopicNode";

export { DetailNode } from "./DetailNode";
export type { DetailNodeProps } from "./DetailNode";

// SVG connection lines
export { ConnectionLines } from "./ConnectionLines";
export type { ConnectionLinesProps } from "./ConnectionLines";

// Section label component
export { SectionLabel } from "./SectionLabel";
export type { SectionLabelProps } from "./SectionLabel";

// Drawer components
export { ConceptDrawer } from "./ConceptDrawer";
export type { ConceptDrawerProps } from "./ConceptDrawer";

export { ResourceList } from "./ResourceList";
export type { ResourceListProps } from "./ResourceList";

export { ResourceItem } from "./ResourceItem";
export type { ResourceItemProps } from "./ResourceItem";

// Main roadmap island app
export { RoadmapApp } from "./RoadmapApp";
export type { RoadmapAppProps } from "./RoadmapApp";
