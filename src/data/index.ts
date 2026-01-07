/**
 * Central export for all roadmap data.
 * Import persona data from this module for clean, consistent imports:
 *
 * @example
 * import { forMyselfPersona, findNodeById } from '@/data';
 */

import type { Persona, MainTopic, DetailNode } from "@/types";

// Persona data exports
export { forMyselfPersona } from "./for-myself-persona";

// Re-export for convenience when you need all personas
import { forMyselfPersona } from "./for-myself-persona";

/**
 * All available personas, keyed by their ID for easy lookup.
 */
export const personas = {
  "for-myself": forMyselfPersona,
} as const;

/**
 * Array of all personas for iteration/display purposes.
 */
export const allPersonas = [forMyselfPersona] as const;

/**
 * Find a node (MainTopic or DetailNode) by its ID within a persona.
 * Searches through all sections and their topics, including child detail nodes.
 *
 * @param persona - The persona to search within
 * @param nodeId - The ID of the node to find
 * @returns The matching MainTopic or DetailNode, or null if not found
 *
 * @example
 * const node = findNodeById(forMyselfPersona, "prompting-basics");
 * if (node) {
 *   console.log(node.title, node.summary);
 * }
 */
export function findNodeById(
  persona: Persona,
  nodeId: string
): MainTopic | DetailNode | null {
  for (const section of persona.sections) {
    for (const topic of section.topics) {
      // Check if it's a main topic
      if (topic.id === nodeId) {
        return topic;
      }
      // Check child detail nodes
      for (const child of topic.children) {
        if (child.id === nodeId) {
          return child;
        }
      }
    }
  }
  return null;
}
