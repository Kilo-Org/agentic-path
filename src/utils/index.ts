/**
 * Central export for all utility functions.
 * Import utilities from this module for clean, consistent imports:
 *
 * @example
 * ```typescript
 * import {
 *   calculateNodePositions,
 *   calculateCanvasHeight,
 *   generateCurvedPath,
 *   DEFAULT_LAYOUT_CONFIG,
 * } from '@/utils';
 * ```
 */

// Position calculation utilities
export {
  calculateNodePositions,
  calculateCanvasHeight,
  calculateCanvasWidth,
  DEFAULT_LAYOUT_CONFIG,
} from "./calculatePositions";

export type { LayoutConfig } from "./calculatePositions";

// SVG path generation helpers
export {
  generateCurvedPath,
  generateStraightPath,
  generateElbowPath,
  generateQuadraticPath,
  createPathAttributes,
} from "./svgHelpers";

export type { Point } from "./svgHelpers";
