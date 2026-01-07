/**
 * ConnectionLines component renders SVG paths connecting main topics to their detail nodes.
 * Uses curved bezier paths for a smooth visual flow.
 */

import { type JSX } from "preact";
import type { Connection } from "@/types";
import { generateCurvedPath, createPathAttributes } from "@/utils";

export interface ConnectionLinesProps {
    /** Array of connections to render */
    connections: Connection[];
}

/**
 * Renders all connection lines as SVG paths.
 * Each connection is a curved line from a main topic to a detail node.
 */
export function ConnectionLines({ connections }: ConnectionLinesProps): JSX.Element {
    return (
        <>
            {connections.map((connection) => {
                const pathData = generateCurvedPath(connection.from, connection.to);
                const attrs = createPathAttributes(pathData, {
                    strokeWidth: 2,
                    stroke: "var(--border)",
                });

                return (
                    <path
                        key={`${connection.fromId}-${connection.toId}`}
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
