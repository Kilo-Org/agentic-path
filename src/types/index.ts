/**
 * Central export for all type definitions.
 * Import types from this module for clean, consistent imports:
 *
 * @example
 * import type { Persona, MainTopic, NodePositions } from '@/types';
 */

// Roadmap data structure types
export type {
  Resource,
  DetailNode,
  MainTopic,
  Section,
  Persona,
} from "./roadmap";

// Position and layout types
export type { NodePosition, Connection, NodePositions } from "./position";
