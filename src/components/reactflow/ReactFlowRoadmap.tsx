/**
 * ReactFlowRoadmap - Main React Flow component for the roadmap visualization
 * Uses manual positioning for a clean 3-column layout matching the original design
 */

import { useCallback, useMemo, useState } from "react";
import {
    ReactFlow,
    Background,
    Controls,
    useNodesState,
    useEdgesState,
    type Node,
    type Edge,
    type NodeTypes,
    BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import type { Persona, MainTopic, DetailNode as DetailNodeType, Section } from "@/types";
import { MainTopicFlowNode } from "./MainTopicFlowNode";
import { DetailFlowNode } from "./DetailFlowNode";
import { SectionLabelNode } from "./SectionLabelNode";
import { ConceptDrawer } from "../ConceptDrawer";
import { findNodeById } from "@/data";

// Layout constants
const CENTER_X = 500; // Center column X position
const LEFT_X = 150; // Left column X position
const RIGHT_X = 850; // Right column X position
const SECTION_START_Y = 50;
const SECTION_GAP = 80; // Gap between section label and first topic
const TOPIC_GAP = 150; // Vertical gap between main topics
const CHILD_GAP = 70; // Vertical gap between child nodes
const NODE_WIDTH = 200;
const MAIN_NODE_HEIGHT = 80;
const DETAIL_NODE_HEIGHT = 60;

export interface ReactFlowRoadmapProps {
    persona: Persona;
}

// Custom node types
const nodeTypes: NodeTypes = {
    mainTopic: MainTopicFlowNode,
    detailNode: DetailFlowNode,
    sectionLabel: SectionLabelNode,
};

// Edge colors (hardcoded since CSS vars don't work well in SVG)
const EDGE_COLOR_DEFAULT = "#4a4a4a";
const EDGE_COLOR_LEFT = "#f8f676";
const EDGE_COLOR_RIGHT = "#60a5fa";

/**
 * Convert persona data to React Flow nodes and edges with manual 3-column layout
 */
function createNodesAndEdges(persona: Persona): { nodes: Node[]; edges: Edge[] } {
    const nodes: Node[] = [];
    const edges: Edge[] = [];

    let currentY = SECTION_START_Y;
    let prevMainTopicId: string | null = null;

    persona.sections.forEach((section: Section) => {
        // Add section label node
        const sectionNodeId = `section-${section.id}`;

        nodes.push({
            id: sectionNodeId,
            type: "sectionLabel",
            position: { x: CENTER_X - NODE_WIDTH, y: currentY },
            data: { label: section.label },
            draggable: false,
            selectable: false,
        });

        // Connect previous section's last topic to this section (vertical connection)
        if (prevMainTopicId) {
            edges.push({
                id: `edge-${prevMainTopicId}-${sectionNodeId}`,
                source: prevMainTopicId,
                target: sectionNodeId,
                style: { stroke: EDGE_COLOR_DEFAULT, strokeWidth: 2, strokeDasharray: "5 5" },
            });
        }

        currentY += SECTION_GAP;

        section.topics.forEach((topic: MainTopic, topicIndex: number) => {
            const topicY = currentY;

            // Add main topic node (center column)
            nodes.push({
                id: topic.id,
                type: "mainTopic",
                position: { x: CENTER_X - NODE_WIDTH / 2, y: topicY },
                data: {
                    label: topic.title,
                    topic,
                },
            });

            // Connect section to first topic (vertical connection)
            if (topicIndex === 0) {
                edges.push({
                    id: `edge-${sectionNodeId}-${topic.id}`,
                    source: sectionNodeId,
                    target: topic.id,
                    style: { stroke: EDGE_COLOR_DEFAULT, strokeWidth: 2, strokeDasharray: "5 5" },
                });
            }

            // Connect to previous topic (vertical connection)
            if (topicIndex > 0) {
                const prevTopic = section.topics[topicIndex - 1];
                edges.push({
                    id: `edge-${prevTopic.id}-${topic.id}`,
                    source: prevTopic.id,
                    target: topic.id,
                    style: { stroke: EDGE_COLOR_DEFAULT, strokeWidth: 2, strokeDasharray: "5 5" },
                });
            }

            // Add detail nodes (children) - positioned to left or right
            const isLeftSide = topic.childrenSide === "left";
            const childX = isLeftSide ? LEFT_X : RIGHT_X;
            const edgeColor = isLeftSide ? EDGE_COLOR_LEFT : EDGE_COLOR_RIGHT;

            // Calculate starting Y for children to center them around the topic
            const totalChildrenHeight = topic.children.length * CHILD_GAP;
            let childStartY = topicY + (MAIN_NODE_HEIGHT / 2) - (totalChildrenHeight / 2);

            topic.children.forEach((child: DetailNodeType, childIndex: number) => {
                const childY = childStartY + (childIndex * CHILD_GAP);

                nodes.push({
                    id: child.id,
                    type: "detailNode",
                    position: { x: childX - NODE_WIDTH / 2, y: childY },
                    data: {
                        label: child.title,
                        node: child,
                        side: topic.childrenSide,
                    },
                });

                // Connect child to parent topic (horizontal connection with handles)
                edges.push({
                    id: `edge-${topic.id}-${child.id}`,
                    source: topic.id,
                    target: child.id,
                    sourceHandle: isLeftSide ? "left" : "right",
                    targetHandle: isLeftSide ? "right" : "left",
                    style: {
                        stroke: edgeColor,
                        strokeWidth: 2,
                        strokeDasharray: "5 5",
                    },
                });
            });

            // Update currentY based on topic and its children
            const maxChildY = topic.children.length > 0
                ? childStartY + (topic.children.length - 1) * CHILD_GAP + DETAIL_NODE_HEIGHT
                : topicY + MAIN_NODE_HEIGHT;

            currentY = Math.max(topicY + MAIN_NODE_HEIGHT, maxChildY) + TOPIC_GAP;
            prevMainTopicId = topic.id;
        });

        // Add extra space between sections
        currentY += 30;
    });

    return { nodes, edges };
}

/**
 * Main React Flow Roadmap component
 */
export function ReactFlowRoadmap({ persona }: ReactFlowRoadmapProps) {
    // State for drawer
    const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Create nodes and edges from persona data
    const { nodes: initialNodes, edges: initialEdges } = useMemo(
        () => createNodesAndEdges(persona),
        [persona]
    );

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    // Get selected node data
    const selectedNode = selectedNodeId ? findNodeById(persona, selectedNodeId) : null;

    // Handle node click
    const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
        // Don't open drawer for section labels
        if (node.type === "sectionLabel") return;

        setSelectedNodeId(node.id);
        setIsDrawerOpen(true);
    }, []);

    // Handle drawer close
    const handleCloseDrawer = useCallback(() => {
        setIsDrawerOpen(false);
        setTimeout(() => {
            setSelectedNodeId(null);
        }, 300);
    }, []);

    // Handle subnode click from drawer
    const handleSubnodeClick = useCallback((nodeId: string) => {
        setSelectedNodeId(nodeId);
    }, []);

    return (
        <div className="reactflow-roadmap-container">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onNodeClick={onNodeClick}
                nodeTypes={nodeTypes}
                fitView
                fitViewOptions={{ padding: 0.2 }}
                minZoom={0.1}
                maxZoom={2}
                defaultEdgeOptions={{
                    style: { stroke: EDGE_COLOR_DEFAULT, strokeWidth: 2 },
                }}
            >
                <Background
                    variant={BackgroundVariant.Dots}
                    gap={20}
                    size={1}
                    color="#2a2a2a"
                />
                <Controls
                    showInteractive={false}
                    style={{
                        background: "#1c1c1c",
                        border: "1px solid #2a2a2a",
                        borderRadius: "8px",
                    }}
                />
            </ReactFlow>

            <ConceptDrawer
                node={selectedNode}
                isOpen={isDrawerOpen}
                onClose={handleCloseDrawer}
                onSubnodeClick={handleSubnodeClick}
            />
        </div>
    );
}

export default ReactFlowRoadmap;