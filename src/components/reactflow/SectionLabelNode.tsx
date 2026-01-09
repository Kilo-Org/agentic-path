/**
 * SectionLabelNode - Custom React Flow node for section headers
 * Non-interactive labels like "GETTING STARTED", "DAILY PRACTICES"
 */

import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";

export interface SectionLabelNodeData {
    label: string;
}

/**
 * Section label node component for React Flow
 * These are non-interactive labels that group topics
 */
export const SectionLabelNode = memo(function SectionLabelNode({
    data,
}: NodeProps) {
    const nodeData = data as unknown as SectionLabelNodeData;

    return (
        <div className="rf-section-label-node">
            {/* Top handle for incoming connections from previous section */}
            <Handle
                type="target"
                position={Position.Top}
                id="top"
                style={{ opacity: 0 }}
            />

            <div className="rf-section-label-node__content">
                <span className="rf-section-label-node__text">{nodeData.label}</span>
            </div>

            {/* Bottom handle for outgoing connections to first topic */}
            <Handle
                type="source"
                position={Position.Bottom}
                id="bottom"
                style={{ opacity: 0 }}
            />
        </div>
    );
});

export default SectionLabelNode;