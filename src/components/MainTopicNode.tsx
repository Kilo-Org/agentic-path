/**
 * MainTopicNode component represents a primary topic in the center column.
 * These are emphasized nodes with yellow background that can also be clicked
 * to view topic-level resources.
 */

import { type JSX } from "preact";
import type { MainTopic, NodePosition } from "@/types";

export interface MainTopicNodeProps {
    /** The main topic data */
    topic: MainTopic;
    /** Calculated position for this node */
    position: NodePosition;
    /** Click handler when node is selected */
    onClick: () => void;
    /** Whether this node is currently selected */
    isSelected: boolean;
}

export function MainTopicNode({
    topic,
    position,
    onClick,
    isSelected,
}: MainTopicNodeProps): JSX.Element {
    return (
        <button
            type="button"
            className={`main-topic-node ${isSelected ? "main-topic-node--selected" : ""}`}
            style={{
                position: "absolute",
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: "translate(-50%, -50%)",
            }}
            onClick={onClick}
            aria-pressed={isSelected}
            aria-label={`${topic.title}${isSelected ? " (selected)" : ""}`}
        >
            {topic.title}
        </button>
    );
}

export default MainTopicNode;
