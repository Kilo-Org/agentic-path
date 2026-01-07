/**
 * RoadmapView is the main desktop component for the 3-column interactive learning roadmap.
 * It orchestrates the layout of main topics, detail nodes, section labels, and connection lines.
 */

import { type JSX } from "preact";
import { useEffect, useState, useMemo } from "preact/hooks";
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
 * Calculate section label positions based on the layout algorithm.
 * Each section label appears above its first topic.
 */
function calculateSectionLabels(
    persona: Persona,
    config = DEFAULT_LAYOUT_CONFIG
): Array<{ label: string; yPosition: number }> {
    const sectionLabels: Array<{ label: string; yPosition: number }> = [];
    let currentY = config.startY;

    persona.sections.forEach((section) => {
        // Section label positioned at the current Y with some offset
        sectionLabels.push({
            label: section.label,
            yPosition: currentY + config.sectionSpacing / 2,
        });

        // Advance past section spacing
        currentY += config.sectionSpacing;
        // Advance past all topics in this section
        currentY += section.topics.length * config.topicSpacing;
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

    // Calculate section labels
    const sectionLabels = useMemo(
        () => calculateSectionLabels(persona),
        [persona]
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
