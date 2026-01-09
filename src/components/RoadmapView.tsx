/**
 * RoadmapView is the main desktop component for the 3-column interactive learning roadmap.
 * It orchestrates the layout of main topics, detail nodes, section labels, and connection lines.
 */

import { type JSX } from "react";
import { useEffect, useState, useMemo } from "react";
import type { Persona, NodePositions, MainTopic, DetailNode as DetailNodeType } from "@/types";
import {
    calculateNodePositions,
    calculateCanvasHeight,
    calculateCanvasWidth,
    DEFAULT_LAYOUT_CONFIG,
} from "@/utils";

import { MainTopicNode } from "./MainTopicNode";
import { DetailNode } from "./DetailNode";
import { ConnectionLines } from "./ConnectionLines";
import { SectionLabel } from "./SectionLabel";

export interface RoadmapViewProps {
    /** The persona/roadmap data to display */
    persona: Persona;
    /** Callback when a node is clicked */
    onNodeClick: (nodeId: string) => void;
    /** Currently selected node ID */
    selectedNodeId?: string | null;
}

/**
 * Builds a lookup object from node ID to its data (MainTopic or DetailNode).
 */
function buildNodeLookup(
    persona: Persona
): Record<string, MainTopic | DetailNodeType> {
    const lookup: Record<string, MainTopic | DetailNodeType> = {};

    persona.sections.forEach((section) => {
        section.topics.forEach((topic) => {
            lookup[topic.id] = topic;
            topic.children.forEach((child) => {
                lookup[child.id] = child;
            });
        });
    });

    return lookup;
}

/**
 * Calculate section label positions based on actual node positions.
 * Each section label appears above its first topic, positioned to not overlap with nodes.
 * This uses the actual computed positions rather than trying to replicate the algorithm,
 * ensuring labels stay clear of nodes even when collision detection adjusts positions.
 */
function calculateSectionLabels(
    persona: Persona,
    positions: NodePositions,
    config = DEFAULT_LAYOUT_CONFIG
): Array<{ label: string; yPosition: number }> {
    const sectionLabels: Array<{ label: string; yPosition: number }> = [];

    // Build a lookup of topic ID to position
    const topicPositions: Record<string, number> = {};
    positions.center.forEach((pos) => {
        topicPositions[pos.id] = pos.y;
    });

    persona.sections.forEach((section) => {
        if (section.topics.length === 0) return;

        // Get the actual Y position of the first topic in this section
        const firstTopicId = section.topics[0].id;
        const firstTopicY = topicPositions[firstTopicId];

        if (firstTopicY !== undefined) {
            // Main topic nodes are centered on their Y position and can be ~80-100px tall
            // (multi-line titles). Place the label well above the node's top edge.
            // Using mainNodeHeight estimate plus extra margin for safety.
            const labelY = firstTopicY - config.mainNodeHeight - 35;

            sectionLabels.push({
                label: section.label,
                yPosition: labelY,
            });
        }
    });

    return sectionLabels;
}

export function RoadmapView({
    persona,
    onNodeClick,
    selectedNodeId = null,
}: RoadmapViewProps): JSX.Element {
    const [positions, setPositions] = useState<NodePositions>({
        left: [],
        center: [],
        right: [],
        connections: [],
    });

    // Build node lookup for rendering
    const nodeLookup = useMemo(() => buildNodeLookup(persona), [persona]);

    // Calculate canvas dimensions
    const canvasWidth = useMemo(() => calculateCanvasWidth(), []);
    const canvasHeight = useMemo(
        () => calculateCanvasHeight(persona),
        [persona]
    );

    // Calculate section labels based on actual node positions
    const sectionLabels = useMemo(
        () => calculateSectionLabels(persona, positions),
        [persona, positions]
    );

    // Calculate positions on persona change
    useEffect(() => {
        const calculated = calculateNodePositions(persona);
        setPositions(calculated);
    }, [persona]);

    return (
        <div
            className="roadmap-container"
            style={{
                position: "relative",
                width: `${canvasWidth}px`,
                height: `${canvasHeight}px`,
            }}
        >
            {/* Section Labels - rendered first (lowest z-index) */}
            {sectionLabels.map((item) => (
                <SectionLabel
                    key={item.label}
                    label={item.label}
                    yPosition={item.yPosition}
                />
            ))}

            {/* SVG Connection Lines - rendered before nodes so they appear behind */}
            <svg
                className="connection-lines-svg"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                    zIndex: 1,
                }}
                viewBox={`0 0 ${canvasWidth} ${canvasHeight}`}
                preserveAspectRatio="xMidYMid meet"
            >
                <ConnectionLines connections={positions.connections} />
            </svg>

            {/* Detail Nodes - Left Column */}
            {positions.left.map((pos) => {
                const node = nodeLookup[pos.id] as DetailNodeType | undefined;
                if (!node) return null;

                return (
                    <DetailNode
                        key={pos.id}
                        node={node}
                        position={pos}
                        onClick={() => onNodeClick(pos.id)}
                        isSelected={selectedNodeId === pos.id}
                    />
                );
            })}

            {/* Main Topic Nodes - Center Column */}
            {positions.center.map((pos) => {
                const topic = nodeLookup[pos.id] as MainTopic | undefined;
                if (!topic) return null;

                return (
                    <MainTopicNode
                        key={pos.id}
                        topic={topic}
                        position={pos}
                        onClick={() => onNodeClick(pos.id)}
                        isSelected={selectedNodeId === pos.id}
                    />
                );
            })}

            {/* Detail Nodes - Right Column */}
            {positions.right.map((pos) => {
                const node = nodeLookup[pos.id] as DetailNodeType | undefined;
                if (!node) return null;

                return (
                    <DetailNode
                        key={pos.id}
                        node={node}
                        position={pos}
                        onClick={() => onNodeClick(pos.id)}
                        isSelected={selectedNodeId === pos.id}
                    />
                );
            })}
        </div>
    );
}

export default RoadmapView;
