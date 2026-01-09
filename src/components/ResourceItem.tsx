/**
 * ResourceItem component displays an individual resource with its metadata.
 * Shows title (as link), type badge, duration, and author if available.
 */

import type { Resource } from "../types/roadmap";

export interface ResourceItemProps {
    /** The resource data to display */
    resource: Resource;
}

/**
 * Maps resource types to their display icons/emojis.
 */
const typeIcons: Record<Resource["type"], string> = {
    article: "📄",
    video: "🎬",
    "twitter-thread": "🐦",
    exercise: "💪",
    template: "📋",
    docs: "📚",
};

/**
 * Maps resource types to human-readable labels.
 */
const typeLabels: Record<Resource["type"], string> = {
    article: "Article",
    video: "Video",
    "twitter-thread": "Thread",
    exercise: "Exercise",
    template: "Template",
    docs: "Docs",
};

/**
 * Renders a single resource item as a card with metadata.
 * Uses a 3-column grid layout:
 * - Column 1: Type badge (left)
 * - Column 2: Title and author (center)
 * - Column 3: Duration (right)
 */
export function ResourceItem({ resource }: ResourceItemProps) {
    const icon = typeIcons[resource.type];
    const label = typeLabels[resource.type];

    return (
        <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="resource-item resource-item-grid"
        >
            <span className={`resource-type-badge resource-type-${resource.type}`}>
                <span className="resource-type-icon">{icon}</span>
                <span className="resource-type-label">{label}</span>
            </span>
            <div className="resource-item-title-container">
                <h4 className="resource-title">{resource.title}</h4>
                {resource.author && (
                    <span className="resource-author">by {resource.author}</span>
                )}
            </div>
            {resource.duration && (
                <span className="resource-duration">{resource.duration}</span>
            )}
        </a>
    );
}
