/**
 * ResourceList component renders a list of resources for a selected tab.
 * Displays an empty state when no resources are available.
 */

import type { Resource } from "../types/roadmap";
import { ResourceItem } from "./ResourceItem";

export interface ResourceListProps {
    /** Array of resources to display */
    resources: Resource[];
    /** Current tab category for empty state messaging */
    category: "read" | "watch" | "do";
}

/**
 * Maps category to empty state messages.
 */
const emptyMessages: Record<ResourceListProps["category"], string> = {
    read: "No reading materials available yet.",
    watch: "No videos available yet.",
    do: "No exercises available yet.",
};

/**
 * Renders a list of ResourceItem components or an empty state.
 */
export function ResourceList({ resources, category }: ResourceListProps) {
    if (resources.length === 0) {
        return (
            <div className="resource-list-empty">
                <span className="resource-list-empty-icon">📭</span>
                <p className="resource-list-empty-text">{emptyMessages[category]}</p>
            </div>
        );
    }

    return (
        <div className="resource-list">
            {resources.map((resource, index) => (
                <ResourceItem key={`${resource.url}-${index}`} resource={resource} />
            ))}
        </div>
    );
}
