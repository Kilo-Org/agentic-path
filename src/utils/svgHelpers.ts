/**
 * SVG path generation helpers for the roadmap visualization.
 * Creates path strings for connections between nodes.
 */

/**
 * A point in 2D space.
 */
export interface Point {
  x: number;
  y: number;
}

/**
 * Generates a curved bezier path between two points.
 * Uses a cubic bezier curve with control points at the horizontal midpoint.
 * This creates a smooth S-curve connecting the main topic to detail nodes.
 *
 * @param from - Starting point (typically the main topic position)
 * @param to - Ending point (typically the detail node position)
 * @returns SVG path data string for use in <path d="...">
 *
 * @example
 * ```typescript
 * import { generateCurvedPath } from '@/utils';
 *
 * const path = generateCurvedPath({ x: 400, y: 200 }, { x: 50, y: 180 });
 * // Result: "M 400 200 C 225 200, 225 180, 50 180"
 *
 * // In SVG:
 * // <path d={path} stroke="currentColor" fill="none" />
 * ```
 */
export function generateCurvedPath(from: Point, to: Point): string {
  // Calculate horizontal midpoint for control points
  const midX = (from.x + to.x) / 2;

  // Determine direction and add offset to stop line before the card edge
  // Card width is approximately 160-260px, so use 90px offset from center
  const cardOffset = 90;
  const direction = to.x > from.x ? -1 : 1; // -1 for right, +1 for left
  const adjustedToX = to.x + direction * cardOffset;

  // Create a cubic bezier curve:
  // - M: Move to starting point
  // - C: Cubic bezier with two control points and end point
  //   - First control point is at (midX, from.y) - horizontal from start
  //   - Second control point is at (midX, to.y) - horizontal from end
  //   - End point is adjusted to stop before the card
  return `M ${from.x} ${from.y} C ${midX} ${from.y}, ${midX} ${to.y}, ${adjustedToX} ${to.y}`;
}

/**
 * Generates a straight line path between two points.
 * Useful for simpler visualizations or as a fallback.
 *
 * @param from - Starting point
 * @param to - Ending point
 * @returns SVG path data string for use in <path d="...">
 *
 * @example
 * ```typescript
 * import { generateStraightPath } from '@/utils';
 *
 * const path = generateStraightPath({ x: 400, y: 200 }, { x: 50, y: 180 });
 * // Result: "M 400 200 L 50 180"
 *
 * // In SVG:
 * // <path d={path} stroke="currentColor" fill="none" />
 * ```
 */
export function generateStraightPath(from: Point, to: Point): string {
  return `M ${from.x} ${from.y} L ${to.x} ${to.y}`;
}

/**
 * Generates a path with a right-angle elbow between two points.
 * First moves horizontally to the midpoint, then vertically to align,
 * then horizontally to the endpoint.
 *
 * @param from - Starting point
 * @param to - Ending point
 * @returns SVG path data string for use in <path d="...">
 *
 * @example
 * ```typescript
 * import { generateElbowPath } from '@/utils';
 *
 * const path = generateElbowPath({ x: 400, y: 200 }, { x: 50, y: 180 });
 * // Result: "M 400 200 L 225 200 L 225 180 L 50 180"
 * ```
 */
export function generateElbowPath(from: Point, to: Point): string {
  const midX = (from.x + to.x) / 2;
  return `M ${from.x} ${from.y} L ${midX} ${from.y} L ${midX} ${to.y} L ${to.x} ${to.y}`;
}

/**
 * Generates a smooth quadratic curve path between two points.
 * Uses a single control point at the midpoint, resulting in a gentler curve
 * compared to the cubic bezier.
 *
 * @param from - Starting point
 * @param to - Ending point
 * @returns SVG path data string for use in <path d="...">
 *
 * @example
 * ```typescript
 * import { generateQuadraticPath } from '@/utils';
 *
 * const path = generateQuadraticPath({ x: 400, y: 200 }, { x: 50, y: 180 });
 * // Result: "M 400 200 Q 225 190, 50 180"
 * ```
 */
export function generateQuadraticPath(from: Point, to: Point): string {
  // Control point at horizontal midpoint, vertical midpoint
  const controlX = (from.x + to.x) / 2;
  const controlY = (from.y + to.y) / 2;
  return `M ${from.x} ${from.y} Q ${controlX} ${controlY}, ${to.x} ${to.y}`;
}

/**
 * Helper to generate SVG path attributes with common styling defaults.
 * Useful for creating consistent connection line styling.
 *
 * @param pathData - The SVG path data string (from generate*Path functions)
 * @param options - Optional styling overrides
 * @returns Object with path data and styling attributes
 *
 * @example
 * ```typescript
 * import { generateCurvedPath, createPathAttributes } from '@/utils';
 *
 * const path = generateCurvedPath(from, to);
 * const attrs = createPathAttributes(path, { strokeWidth: 2 });
 * // { d: "M ...", stroke: "currentColor", fill: "none", strokeWidth: 2 }
 * ```
 */
export function createPathAttributes(
  pathData: string,
  options: {
    stroke?: string;
    strokeWidth?: number;
    fill?: string;
    strokeDasharray?: string;
    strokeLinecap?: "butt" | "round" | "square";
  } = {}
): {
  d: string;
  stroke: string;
  fill: string;
  strokeWidth: number;
  strokeLinecap?: "butt" | "round" | "square";
  strokeDasharray?: string;
} {
  return {
    d: pathData,
    stroke: options.stroke ?? "currentColor",
    fill: options.fill ?? "none",
    strokeWidth: options.strokeWidth ?? 2,
    ...(options.strokeLinecap && { strokeLinecap: options.strokeLinecap }),
    ...(options.strokeDasharray && {
      strokeDasharray: options.strokeDasharray,
    }),
  };
}
