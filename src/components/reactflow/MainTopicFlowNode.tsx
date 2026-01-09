/**
 * MainTopicFlowNode - Custom React Flow node for main topics (center column)
 * Styled to match the existing yellow/highlighted primary path nodes
 */

import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import type { MainTopic } from "@/types";

export interface MainTopicFlowNodeData {
    label: string;
    topic: MainTopic;
}

/**
 * Main topic node component for React Flow
 * These are the primary path nodes that appear in the center
 */
export const MainTopicFlowNode = memo(function MainTopicFlowNode({
    data,
    selected,
}: NodeProps) {
    const nodeData = data as unknown as MainTopicFlowNodeData;

    return (
        <div
            className={`rf-main-topic-node ${selected ? "rf-main-topic-node--selected" : ""}`}
        >
            {/* Left handle for left-side children */}
            <Handle
                type="source"
                position={Position.Left}
                id="left"
                style={{ opacity: 0 }}
            />

            {/* Top handle for incoming connections */}
            <Handle
                type="target"
                position={Position.Top}
                id="top"
                style={{ opacity: 0 }}
            />

            <div className="rf-main-topic-node__content">
                <span className="rf-main-topic-node__title">{nodeData.label}</span>
            </div>

            {/* Bottom handle for outgoing connections */}
            <Handle
                type="source"
                position={Position.Bottom}
                id="bottom"
                style={{ opacity: 0 }}
            />

            {/* Right handle for right-side children */}
            <Handle
                type="source"
                position={Position.Right}
                id="right"
                style={{ opacity: 0 }}
            />
        </div>
    );
});

export default MainTopicFlowNode;