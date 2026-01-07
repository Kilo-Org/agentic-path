/**
 * RoadmapApp is the main Preact island component for the interactive learning roadmap.
 * It manages the selected node state, detects viewport size, and orchestrates
 * the rendering of desktop/mobile views and the concept drawer.
 */

import { useState, useEffect } from "preact/hooks";
import type { JSX } from "preact";
import { forMyselfPersona, findNodeById } from "../data";
import { RoadmapView } from "./RoadmapView";
import { MobileRoadmapView } from "./MobileRoadmapView";
import { ConceptDrawer } from "./ConceptDrawer";

export interface RoadmapAppProps {
    /** Optional initial selected node ID */
    initialNodeId?: string | null;
}

/**
 * Main application component that serves as the Preact island for the roadmap.
 * Handles:
 * - Mobile/desktop viewport detection via matchMedia
 * - Selected node state management
 * - Conditional rendering of RoadmapView (desktop) or MobileRoadmapView (mobile)
 * - ConceptDrawer display when a node is selected
 */
export function RoadmapApp({ initialNodeId = null }: RoadmapAppProps): JSX.Element {
    // State for tracking selected node
    const [selectedNodeId, setSelectedNodeId] = useState<string | null>(initialNodeId);

    // State for tracking viewport size (mobile vs desktop)
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile viewport on mount and listen for changes
    useEffect(() => {
        // Check if running in browser (for SSR compatibility)
        if (typeof window === "undefined") return;

        const mediaQuery = window.matchMedia("(max-width: 768px)");

        // Set initial value
        setIsMobile(mediaQuery.matches);

        // Handler for media query changes
        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        };

        // Add listener for viewport changes
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Cleanup listener on unmount
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    // Look up the full node data when a node is selected
    const selectedNode = selectedNodeId
        ? findNodeById(forMyselfPersona, selectedNodeId)
        : null;

    /**
     * Handle node click from either roadmap view.
     * Sets the selected node ID to trigger drawer opening.
     */
    const handleNodeClick = (nodeId: string) => {
        setSelectedNodeId(nodeId);
    };

    /**
     * Handle drawer close.
     * Clears the selected node ID to close the drawer.
     */
    const handleCloseDrawer = () => {
        setSelectedNodeId(null);
    };

    return (
        <>
            {isMobile ? (
                <MobileRoadmapView
                    persona={forMyselfPersona}
                    onNodeClick={handleNodeClick}
                    selectedNodeId={selectedNodeId}
                />
            ) : (
                <RoadmapView
                    persona={forMyselfPersona}
                    onNodeClick={handleNodeClick}
                    selectedNodeId={selectedNodeId}
                />
            )}
            <ConceptDrawer
                node={selectedNode}
                isOpen={selectedNodeId !== null}
                onClose={handleCloseDrawer}
            />
        </>
    );
}
