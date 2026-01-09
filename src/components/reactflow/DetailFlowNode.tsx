/**
 * DetailFlowNode - Custom React Flow node for detail/child nodes (side columns)
 * Styled to match the existing gray secondary nodes
 */

import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import type { DetailNode } from "@/types";

export interface DetailFlowNodeData {
    label: string;
    node: DetailNode;
    side: "left" | "right";
}

/**
 * Detail node component for React Flow
 * These are the secondary nodes that appear on the left or right sides
 */
export const DetailFlowNode = memo(function DetailFlowNode({
    data,
    selected,
}: NodeProps) {
    const nodeData = data as unknown as DetailFlowNodeData;
    const isLeftSide = nodeData.side === "left";

    return (
        <div
            className={`rf-detail-node rf-detail-node--${nodeData.side} ${selected ? "rf-detail-node--selected" : ""}`}
        >
            {/* Handle on the side facing the main topic */}
            <Handle
                type="target"
                position={isLeftSide ? Position.Right : Position.Left}
                id={isLeftSide ? "right" : "left"}
                style={{ opacity: 0 }}
            />

            <div className="rf-detail-node__content">
                <span className="rf-detail-node__title">{nodeData.label}</span>
            </div>
        </div>
    );
});

export default DetailFlowNode;