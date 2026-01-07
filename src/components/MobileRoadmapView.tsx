/**
 * MobileRoadmapView is a mobile-optimized version of the roadmap.
 * It displays a collapsible hierarchical view using an accordion pattern.
 * - One main topic expanded at a time
 * - Detail nodes appear vertically stacked below main topics
 * - No SVG connection lines (too cluttered for mobile)
 */

import { type JSX } from "preact";
import { useState } from "preact/hooks";
import type { Persona, MainTopic, DetailNode as DetailNodeType } from "@/types";

export interface MobileRoadmapViewProps {
    /** The persona/roadmap data to display */
    persona: Persona;
    /** Callback when a node is clicked */
    onNodeClick: (nodeId: string) => void;
    /** Currently selected node ID */
    selectedNodeId?: string | null;
}

/**
 * Chevron icon component for expand/collapse indication.
 */
function ChevronIcon({ expanded }: { expanded: boolean }): JSX.Element {
    return (
        <svg
            className={`chevron-icon ${expanded ? "chevron-expanded" : ""}`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M6 8L10 12L14 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

/**
 * Mobile detail node button component.
 */
function MobileDetailNodeButton({
    node,
    onClick,
    isSelected,
}: {
    node: DetailNodeType;
    onClick: () => void;
    isSelected: boolean;
}): JSX.Element {
    return (
        <button
            type="button"
            className={`detail-node-button ${isSelected ? "detail-node-selected" : ""}`}
            onClick={onClick}
            aria-pressed={isSelected}
        >
            <span className="detail-node-title">{node.title}</span>
        </button>
    );
}

/**
 * Mobile main topic component with expandable detail nodes.
 */
function MobileMainTopic({
    topic,
    isExpanded,
    onToggle,
    onTopicClick,
    onDetailClick,
    selectedNodeId,
}: {
    topic: MainTopic;
    isExpanded: boolean;
    onToggle: () => void;
    onTopicClick: () => void;
    onDetailClick: (nodeId: string) => void;
    selectedNodeId?: string | null;
}): JSX.Element {
    const hasChildren = topic.children.length > 0;
    const isTopicSelected = selectedNodeId === topic.id;

    return (
        <div className={`mobile-topic ${isExpanded ? "mobile-topic-expanded" : ""}`}>
            <div className="main-topic-row">
                {/* Expand/collapse button for topics with children */}
                {hasChildren && (
                    <button
                        type="button"
                        className="expand-toggle-button"
                        onClick={onToggle}
                        aria-expanded={isExpanded}
                        aria-label={isExpanded ? "Collapse topic" : "Expand topic"}
                    >
                        <ChevronIcon expanded={isExpanded} />
                    </button>
                )}

                {/* Main topic title button */}
                <button
                    type="button"
                    className={`main-topic-button ${isTopicSelected ? "main-topic-selected" : ""} ${!hasChildren ? "main-topic-no-children" : ""}`}
                    onClick={onTopicClick}
                    aria-pressed={isTopicSelected}
                >
                    <span className="main-topic-title">{topic.title}</span>
                </button>
            </div>

            {/* Detail nodes container with animation */}
            {hasChildren && (
                <div
                    className={`detail-nodes ${isExpanded ? "detail-nodes-expanded" : "detail-nodes-collapsed"}`}
                    aria-hidden={!isExpanded}
                >
                    <div className="detail-nodes-inner">
                        {topic.children.map((child) => (
                            <MobileDetailNodeButton
                                key={child.id}
                                node={child}
                                onClick={() => onDetailClick(child.id)}
                                isSelected={selectedNodeId === child.id}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

/**
 * MobileRoadmapView displays a collapsible hierarchical view optimized for mobile.
 * Uses an accordion pattern where only one main topic can be expanded at a time.
 */
export function MobileRoadmapView({
    persona,
    onNodeClick,
    selectedNodeId = null,
}: MobileRoadmapViewProps): JSX.Element {
    // Track which topic is currently expanded (null means none)
    const [expandedTopicId, setExpandedTopicId] = useState<string | null>(null);

    /**
     * Toggle expansion of a main topic.
     * Collapses if already expanded, expands if not (closing any other open topic).
     */
    const handleToggle = (topicId: string): void => {
        setExpandedTopicId((current) => (current === topicId ? null : topicId));
    };

    /**
     * Handle click on a main topic title to view its content.
     */
    const handleTopicClick = (topicId: string): void => {
        onNodeClick(topicId);
    };

    /**
     * Handle click on a detail node to view its content.
     */
    const handleDetailClick = (nodeId: string): void => {
        onNodeClick(nodeId);
    };

    return (
        <div className="mobile-roadmap">
            {persona.sections.map((section) => (
                <div key={section.id} className="mobile-section">
                    <h3 className="section-label">{section.label}</h3>

                    <div className="mobile-topics-list">
                        {section.topics.map((topic) => (
                            <MobileMainTopic
                                key={topic.id}
                                topic={topic}
                                isExpanded={expandedTopicId === topic.id}
                                onToggle={() => handleToggle(topic.id)}
                                onTopicClick={() => handleTopicClick(topic.id)}
                                onDetailClick={handleDetailClick}
                                selectedNodeId={selectedNodeId}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MobileRoadmapView;
