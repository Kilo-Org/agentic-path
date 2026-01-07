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
 */
export function ResourceItem({ resource }: ResourceItemProps) {
    const icon = typeIcons[resource.type];
    const label = typeLabels[resource.type];

    return (
        <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            class="resource-item"
        >
            <div class="resource-item-header">
                <span class={`resource-type-badge resource-type-${resource.type}`}>
                    <span class="resource-type-icon">{icon}</span>
                    <span class="resource-type-label">{label}</span>
                </span>
                {resource.duration && (
                    <span class="resource-duration">{resource.duration}</span>
                )}
            </div>
            <h4 class="resource-title">{resource.title}</h4>
            {resource.author && (
                <span class="resource-author">by {resource.author}</span>
            )}
        </a>
    );
}
