/**
 * Position and layout types for the 3-column roadmap visualization.
 * These types define the spatial arrangement of nodes and their connections.
 */

/**
 * The position of a single node in the roadmap layout.
 */
export interface NodePosition {
  /** Reference to the node's unique identifier */
  id: string;
  /** Horizontal position (pixels or relative units) */
  x: number;
  /** Vertical position (pixels or relative units) */
  y: number;
  /** Type of node: "main" for center column, "detail" for side columns */
  type: "main" | "detail";
}

/**
 * Type of connection line in the roadmap.
 * - "detail": Connection from main topic to detail node (horizontal curve)
 * - "spine": Connection between main topics or from persona to first topic (vertical curve)
 */
export type ConnectionType = "detail" | "spine";

/**
 * A visual connection (line/curve) between two nodes in the roadmap.
 */
export interface Connection {
  /** Starting point coordinates */
  from: { x: number; y: number };
  /** Ending point coordinates */
  to: { x: number; y: number };
  /** ID of the source node (typically a main topic) */
  fromId: string;
  /** ID of the destination node (typically a detail node) */
  toId: string;
  /** Type of connection (defaults to "detail" for backward compatibility) */
  type?: ConnectionType;
}

/**
 * Complete layout state for all nodes organized by column.
 * Used to render the 3-column roadmap visualization.
 */
export interface NodePositions {
  /** Positions of detail nodes in the left column */
  left: NodePosition[];
  /** Positions of main topic nodes in the center column */
  center: NodePosition[];
  /** Positions of detail nodes in the right column */
  right: NodePosition[];
  /** Visual connections between main topics and their detail nodes */
  connections: Connection[];
}
