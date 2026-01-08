/**
 * ConnectionLines component renders SVG paths connecting main topics to their detail nodes.
 * Uses curved bezier paths for a smooth visual flow.
 * Also renders "spine" connections between main topics and from persona to first topic.
 */

import { type JSX } from "preact";
import type { Connection } from "@/types";
import { generateCurvedPath, generateVerticalCurvedPath, createPathAttributes } from "@/utils";

export interface ConnectionLinesProps {
    /** Array of connections to render */
    connections: Connection[];
}

/**
 * Renders all connection lines as SVG paths.
 * - "detail" connections: curved lines from main topics to detail nodes (dashed)
 * - "spine" connections: vertical curved lines between main topics (solid, highlighted)
 */
export function ConnectionLines({ connections }: ConnectionLinesProps): JSX.Element {
    // Separate connections by type for rendering order (spine first, then detail)
    const spineConnections = connections.filter(c => c.type === "spine");
    const detailConnections = connections.filter(c => c.type !== "spine");

    return (
        <>
            {/* Spine connections (main topic flow) - rendered first, solid line */}
            {spineConnections.map((connection) => {
                const pathData = generateVerticalCurvedPath(connection.from, connection.to);
                const attrs = createPathAttributes(pathData, {
                    strokeWidth: 2,
                    stroke: "var(--ctp-mauve)",
                });

                return (
                    <path
                        key={`spine-${connection.fromId}-${connection.toId}`}
                        d={attrs.d}
                        stroke={attrs.stroke}
                        fill={attrs.fill}
                        strokeWidth={attrs.strokeWidth}
                        className="connection-line connection-line--spine"
                    />
                );
            })}

            {/* Detail connections - rendered second, dashed line */}
            {detailConnections.map((connection) => {
                const pathData = generateCurvedPath(connection.from, connection.to);
                const attrs = createPathAttributes(pathData, {
                    strokeWidth: 2,
                    stroke: "var(--border)",
                });

                return (
                    <path
                        key={`detail-${connection.fromId}-${connection.toId}`}
                        d={attrs.d}
                        stroke={attrs.stroke}
                        fill={attrs.fill}
                        strokeWidth={attrs.strokeWidth}
                        className="connection-line"
                    />
                );
            })}
        </>
    );
}

export default ConnectionLines;
