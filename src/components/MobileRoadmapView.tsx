/**
 * MobileRoadmapView is a mobile-optimized version of the roadmap.
 * It displays a stacked single-column card layout matching desktop styling.
 * - Main topics shown as yellow cards
 * - Detail nodes shown as bordered cards indented below their parent
 * - Clicking any card opens the drawer (same as desktop)
 * - No accordion behavior
 */

import { type JSX } from "preact";
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
 * Mobile main topic card component.
 * Styled as a yellow card matching desktop main-topic-node styling.
 */
function MobileMainTopicCard({
    topic,
    onClick,
    isSelected,
}: {
    topic: MainTopic;
    onClick: () => void;
    isSelected: boolean;
}): JSX.Element {
    return (
        <button
            type="button"
            className={`mobile-main-topic-card ${isSelected ? "mobile-main-topic-card--selected" : ""}`}
            onClick={onClick}
            aria-pressed={isSelected}
        >
            <span className="mobile-main-topic-card__title">{topic.title}</span>
        </button>
    );
}

/**
 * Mobile detail node card component.
 * Styled as a bordered card matching desktop detail-node styling.
 */
function MobileDetailCard({
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
            className={`mobile-detail-card ${isSelected ? "mobile-detail-card--selected" : ""}`}
            onClick={onClick}
            aria-pressed={isSelected}
        >
            <span className="mobile-detail-card__title">{node.title}</span>
        </button>
    );
}

/**
 * MobileRoadmapView displays a single-column stacked card layout optimized for mobile.
 * Each main topic is a yellow card with its detail nodes displayed as bordered cards below.
 */
export function MobileRoadmapView({
    persona,
    onNodeClick,
    selectedNodeId = null,
}: MobileRoadmapViewProps): JSX.Element {
    return (
        <div className="mobile-roadmap">
            {persona.sections.map((section) => (
                <div key={section.id} className="mobile-section">
                    <h3 className="mobile-section__label">{section.label}</h3>

                    <div className="mobile-cards-list">
                        {section.topics.map((topic) => (
                            <div key={topic.id} className="mobile-topic-group">
                                {/* Main Topic Card */}
                                <MobileMainTopicCard
                                    topic={topic}
                                    onClick={() => onNodeClick(topic.id)}
                                    isSelected={selectedNodeId === topic.id}
                                />

                                {/* Detail Node Cards (indented below main topic) */}
                                {topic.children.length > 0 && (
                                    <div className="mobile-detail-cards">
                                        {topic.children.map((child) => (
                                            <MobileDetailCard
                                                key={child.id}
                                                node={child}
                                                onClick={() => onNodeClick(child.id)}
                                                isSelected={selectedNodeId === child.id}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MobileRoadmapView;
