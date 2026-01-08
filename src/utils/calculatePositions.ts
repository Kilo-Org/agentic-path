/**
 * Position calculation utilities for the 3-column roadmap layout.
 * Computes the x,y coordinates for all nodes and their connections.
 */

import type {
  Persona,
  NodePositions,
  NodePosition,
  Connection,
} from "../types";

/**
 * Configuration options for the layout algorithm.
 */
export interface LayoutConfig {
  /** Width of each column in pixels */
  columnWidth: number;
  /** X position of the left column center */
  leftX: number;
  /** X position of the center column center */
  centerX: number;
  /** X position of the right column center */
  rightX: number;
  /** Starting Y position for the first section */
  startY: number;
  /** Vertical space added for section labels */
  sectionSpacing: number;
  /** Vertical spacing between detail nodes */
  detailSpacing: number;
  /** Vertical spacing between main topics */
  topicSpacing: number;
  /** Minimum vertical gap between any two nodes (prevents overlap) */
  minNodeGap: number;
  /** Estimated height of detail nodes for collision detection */
  detailNodeHeight: number;
  /** Estimated height of main topic nodes for collision detection */
  mainNodeHeight: number;
}

/**
 * Default layout configuration values.
 * These can be overridden when calling calculateNodePositions.
 */
export const DEFAULT_LAYOUT_CONFIG: LayoutConfig = {
  columnWidth: 300,
  leftX: 50,
  centerX: 400,
  rightX: 750,
  startY: 100,
  sectionSpacing: 60,
  detailSpacing: 90,
  topicSpacing: 200,
  /** Minimum 20px gap between nodes to ensure they never touch */
  minNodeGap: 20,
  /** Estimated detail node height based on CSS (padding 12px*2 + 2 lines of text ~48px + borders) */
  detailNodeHeight: 76,
  /** Estimated main node height based on CSS (padding 20px*2 + line height ~24px) */
  mainNodeHeight: 64,
};

/**
 * Calculates the positions of all nodes in a persona's roadmap.
 * Organizes nodes into left, center, and right columns with connections.
 *
 * @param persona - The persona/roadmap data to calculate positions for
 * @param config - Optional layout configuration overrides
 * @returns NodePositions object with all column positions and connections
 *
 * @example
 * ```typescript
 * import { calculateNodePositions, DEFAULT_LAYOUT_CONFIG } from '@/utils';
 * import { forMyselfPersona } from '@/data';
 *
 * // Using default configuration
 * const positions = calculateNodePositions(forMyselfPersona);
 *
 * // With custom configuration
 * const customPositions = calculateNodePositions(forMyselfPersona, {
 *   ...DEFAULT_LAYOUT_CONFIG,
 *   topicSpacing: 250,
 * });
 * ```
 */
export function calculateNodePositions(
  persona: Persona,
  config: Partial<LayoutConfig> = {}
): NodePositions {
  const {
    leftX,
    centerX,
    rightX,
    startY,
    sectionSpacing,
    detailSpacing,
    topicSpacing,
    minNodeGap,
    detailNodeHeight,
    mainNodeHeight,
  } = { ...DEFAULT_LAYOUT_CONFIG, ...config };

  // Calculate minimum spacing that ensures nodes don't overlap
  // This is the node height plus the minimum gap
  const effectiveDetailSpacing = Math.max(
    detailSpacing,
    detailNodeHeight + minNodeGap
  );
  const effectiveTopicSpacing = Math.max(
    topicSpacing,
    mainNodeHeight + minNodeGap
  );

  const positions: NodePositions = {
    left: [],
    center: [],
    right: [],
    connections: [],
  };

  let currentY = startY;

  persona.sections.forEach((section) => {
    // Add section label spacing (not a node, just vertical space)
    currentY += sectionSpacing;

    section.topics.forEach((topic) => {
      // Place main topic in center column
      const mainTopicPos: NodePosition = {
        id: topic.id,
        x: centerX,
        y: currentY,
        type: "main" as const,
      };
      positions.center.push(mainTopicPos);

      // Determine which side children go based on topic data
      const placeOnLeft = topic.childrenSide === "left";
      const targetColumn = placeOnLeft ? positions.left : positions.right;
      const targetX = placeOnLeft ? leftX : rightX;

      // Calculate starting Y to center detail nodes around the main topic
      // Using effectiveDetailSpacing to ensure minimum gap between nodes
      const detailStartY =
        currentY - ((topic.children.length - 1) * effectiveDetailSpacing) / 2;

      // Place detail nodes with collision-checked spacing
      topic.children.forEach((child, childIndex) => {
        let proposedY = detailStartY + childIndex * effectiveDetailSpacing;

        // Check for collision with previous nodes in the same column
        // and adjust position if necessary
        const lastNodeInColumn = targetColumn[targetColumn.length - 1];
        if (lastNodeInColumn) {
          const minY =
            lastNodeInColumn.y +
            detailNodeHeight / 2 +
            minNodeGap +
            detailNodeHeight / 2;
          if (proposedY < minY) {
            proposedY = minY;
          }
        }

        const detailPos: NodePosition = {
          id: child.id,
          x: targetX,
          y: proposedY,
          type: "detail" as const,
        };
        targetColumn.push(detailPos);

        // Add connection from main topic to detail node
        const connection: Connection = {
          from: { x: centerX, y: currentY },
          to: { x: targetX, y: detailPos.y },
          fromId: topic.id,
          toId: child.id,
        };
        positions.connections.push(connection);
      });

      // Space for next main topic using effective spacing
      currentY += effectiveTopicSpacing;
    });
  });

  return positions;
}

/**
 * Calculates the total canvas height needed to display the entire roadmap.
 * Useful for setting SVG viewBox or container dimensions.
 *
 * @param persona - The persona/roadmap data to calculate height for
 * @param config - Optional layout configuration overrides
 * @returns Total height in pixels needed for the canvas
 *
 * @example
 * ```typescript
 * import { calculateCanvasHeight } from '@/utils';
 * import { forMyselfPersona } from '@/data';
 *
 * const height = calculateCanvasHeight(forMyselfPersona);
 * // Use in SVG: <svg viewBox={`0 0 850 ${height}`}>
 * ```
 */
export function calculateCanvasHeight(
  persona: Persona,
  config: Partial<LayoutConfig> = {}
): number {
  const { startY, sectionSpacing, topicSpacing } = {
    ...DEFAULT_LAYOUT_CONFIG,
    ...config,
  };

  let totalHeight = startY;

  persona.sections.forEach((section) => {
    totalHeight += sectionSpacing;
    totalHeight += section.topics.length * topicSpacing;
  });

  // Add some bottom padding
  totalHeight += 100;

  return totalHeight;
}

/**
 * Calculates the total canvas width based on the layout configuration.
 * Useful for setting SVG viewBox or container dimensions.
 *
 * @param config - Optional layout configuration overrides
 * @returns Total width in pixels needed for the canvas
 *
 * @example
 * ```typescript
 * import { calculateCanvasWidth, DEFAULT_LAYOUT_CONFIG } from '@/utils';
 *
 * const width = calculateCanvasWidth();
 * // Use in SVG: <svg viewBox={`0 0 ${width} ${height}`}>
 * ```
 */
export function calculateCanvasWidth(
  config: Partial<LayoutConfig> = {}
): number {
  const { rightX, columnWidth } = { ...DEFAULT_LAYOUT_CONFIG, ...config };
  // Right edge of the rightmost column plus some padding
  return rightX + columnWidth / 2 + 50;
}
