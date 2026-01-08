/**
 * DetailNode component represents a subtopic in the left or right columns.
 * These are clickable items that open the resource drawer when selected.
 */

import { type JSX } from "react";
import type { DetailNode as DetailNodeType, NodePosition } from "@/types";

export interface DetailNodeProps {
    /** The detail node data */
    node: DetailNodeType;
    /** Calculated position for this node */
    position: NodePosition;
    /** Click handler when node is selected */
    onClick: () => void;
    /** Whether this node is currently selected */
    isSelected: boolean;
}

export function DetailNode({
    node,
    position,
    onClick,
    isSelected,
}: DetailNodeProps): JSX.Element {
    return (
        <button
            type="button"
            className={`detail-node ${isSelected ? "detail-node--selected" : ""}`}
            style={{
                position: "absolute",
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: "translate(-50%, -50%)",
                zIndex: 10,
            }}
            onClick={onClick}
            aria-pressed={isSelected}
            aria-label={`${node.title}${isSelected ? " (selected)" : ""}`}
        >
            {node.title}
        </button>
    );
}

export default DetailNode;
