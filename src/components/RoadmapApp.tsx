/**
 * RoadmapApp is the main Preact island component for the interactive learning roadmap.
 * It manages the selected persona, selected node state, detects viewport size, and orchestrates
 * the rendering of persona selector, desktop/mobile views, and the concept drawer.
 *
 * Features:
 * - View Transitions for smooth animations between states
 * - Persona cards minimize to top when one is selected
 * - Drawer opens with view transitions
 * - Vertical navigation controls for scrolling through the graph
 * - URL-based state management for deep linking and sharing
 */

import { useState, useEffect, useCallback, useRef } from "preact/hooks";
import type { JSX } from "preact";
import { allPersonas, personas, findNodeById } from "../data";
import { RoadmapView } from "./RoadmapView";
import { MobileRoadmapView } from "./MobileRoadmapView";
import { ConceptDrawer } from "./ConceptDrawer";
import { PersonaSelector } from "./PersonaSelector";
import { NavigationControls } from "./NavigationControls";
import { parseUrlHash, updateUrlHash, clearUrlHash } from "../utils/urlState";

export interface RoadmapAppProps {
    /** Optional initial selected node ID */
    initialNodeId?: string | null;
    /** Optional initial selected persona ID */
    initialPersonaId?: string;
}

/**
 * Utility to check if View Transitions API is supported
 */
const supportsViewTransitions = () => {
    return typeof document !== "undefined" && "startViewTransition" in document;
};

/**
 * Main application component that serves as the Preact island for the roadmap.
 * Handles:
 * - Persona selection state management
 * - Mobile/desktop viewport detection via matchMedia
 * - Selected node state management
 * - Conditional rendering of RoadmapView (desktop) or MobileRoadmapView (mobile)
 * - ConceptDrawer display when a node is selected
 * - View Transitions for smooth animations
 */
export function RoadmapApp({
    initialNodeId = null,
    initialPersonaId,
}: RoadmapAppProps): JSX.Element {
    // State for tracking selected persona (null = none selected, show full cards)
    const [selectedPersonaId, setSelectedPersonaId] = useState<string | null>(() => {
        // Initialize from URL hash if available, otherwise use prop
        if (typeof window !== "undefined") {
            const urlState = parseUrlHash();
            if (urlState.persona && urlState.persona in personas) {
                return urlState.persona;
            }
        }
        return initialPersonaId || null;
    });

    // State for tracking if the view is minimized (persona selected)
    const [isMinimized, setIsMinimized] = useState(() => {
        if (typeof window !== "undefined") {
            const urlState = parseUrlHash();
            if (urlState.persona && urlState.persona in personas) {
                return true;
            }
        }
        return !!initialPersonaId;
    });

    // State for tracking selected node
    const [selectedNodeId, setSelectedNodeId] = useState<string | null>(() => {
        // Initialize from URL hash if available
        if (typeof window !== "undefined") {
            const urlState = parseUrlHash();
            if (urlState.persona && urlState.topic) {
                // Validate the topic exists in this persona
                const persona = personas[urlState.persona as keyof typeof personas];
                if (persona && findNodeById(persona, urlState.topic)) {
                    return urlState.topic;
                }
            }
        }
        return initialNodeId;
    });

    // State for tracking viewport size (mobile vs desktop)
    const [isMobile, setIsMobile] = useState(false);

    // State for drawer visibility (separate from selectedNodeId for animation)
    const [isDrawerOpen, setIsDrawerOpen] = useState(() => {
        // Open drawer if URL has a topic
        if (typeof window !== "undefined") {
            const urlState = parseUrlHash();
            if (urlState.persona && urlState.topic) {
                const persona = personas[urlState.persona as keyof typeof personas];
                if (persona && findNodeById(persona, urlState.topic)) {
                    return true;
                }
            }
        }
        return false;
    });

    // Ref for the scroll container (used by NavigationControls)
    const scrollContainerRef = useRef<HTMLElement | null>(null);

    // Ref for the persona selector section (used for scrolling into view)
    const personaSelectorRef = useRef<HTMLElement | null>(null);

    // Flag to prevent URL update loops during popstate handling
    const isPopstateRef = useRef(false);

    // Sync URL when state changes (but not during popstate handling)
    useEffect(() => {
        if (typeof window === "undefined" || isPopstateRef.current) {
            isPopstateRef.current = false;
            return;
        }

        if (selectedPersonaId) {
            updateUrlHash({
                persona: selectedPersonaId,
                topic: selectedNodeId,
            });
        } else {
            clearUrlHash();
        }
    }, [selectedPersonaId, selectedNodeId]);

    // Handle browser back/forward navigation
    useEffect(() => {
        if (typeof window === "undefined") return;

        const handlePopstate = () => {
            isPopstateRef.current = true;
            const urlState = parseUrlHash();

            // Validate persona
            if (urlState.persona && urlState.persona in personas) {
                const persona = personas[urlState.persona as keyof typeof personas];
                setSelectedPersonaId(urlState.persona);
                setIsMinimized(true);

                // Validate topic
                if (urlState.topic && findNodeById(persona, urlState.topic)) {
                    setSelectedNodeId(urlState.topic);
                    setIsDrawerOpen(true);
                } else {
                    setSelectedNodeId(null);
                    setIsDrawerOpen(false);
                }
            } else {
                // No valid persona in URL, go back to full view
                setSelectedPersonaId(null);
                setIsMinimized(false);
                setSelectedNodeId(null);
                setIsDrawerOpen(false);
            }
        };

        window.addEventListener("popstate", handlePopstate);
        return () => window.removeEventListener("popstate", handlePopstate);
    }, []);

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

    // Get the currently selected persona data
    const selectedPersona = selectedPersonaId
        ? personas[selectedPersonaId as keyof typeof personas]
        : null;

    // Look up the full node data when a node is selected
    const selectedNode = selectedNodeId && selectedPersona
        ? findNodeById(selectedPersona, selectedNodeId)
        : null;

    /**
     * Handle persona selection with View Transition.
     * Minimizes the persona cards and shows the roadmap.
     */
    const handlePersonaSelect = useCallback((personaId: string) => {
        // If clicking the already selected persona, do nothing
        if (personaId === selectedPersonaId && isMinimized) {
            return;
        }

        const updateState = () => {
            setSelectedPersonaId(personaId);
            setIsMinimized(true);
            // Clear selected node when switching personas
            setSelectedNodeId(null);
            setIsDrawerOpen(false);
        };

        // Scroll to persona selector after state update
        const scrollToSelector = () => {
            // Use requestAnimationFrame to ensure DOM has updated
            requestAnimationFrame(() => {
                personaSelectorRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            });
        };

        // Use View Transitions API if available
        if (supportsViewTransitions()) {
            (document as any).startViewTransition(() => {
                updateState();
            }).finished.then(scrollToSelector);
        } else {
            updateState();
            scrollToSelector();
        }
    }, [selectedPersonaId, isMinimized]);

    /**
     * Handle going back to full persona view
     */
    const handleBackToPersonas = useCallback(() => {
        const updateState = () => {
            setIsMinimized(false);
            setSelectedPersonaId(null);
            setSelectedNodeId(null);
            setIsDrawerOpen(false);
        };

        // Use View Transitions API if available
        if (supportsViewTransitions()) {
            (document as any).startViewTransition(() => {
                updateState();
            });
        } else {
            updateState();
        }
    }, []);

    /**
     * Handle node click from either roadmap view.
     * Sets the selected node ID to trigger drawer opening with View Transition.
     */
    const handleNodeClick = useCallback((nodeId: string) => {
        const updateState = () => {
            setSelectedNodeId(nodeId);
            setIsDrawerOpen(true);
        };

        // Use View Transitions API if available
        if (supportsViewTransitions()) {
            (document as any).startViewTransition(() => {
                updateState();
            });
        } else {
            updateState();
        }
    }, []);

    /**
     * Handle drawer close with View Transition.
     * Clears the selected node ID to close the drawer.
     */
    const handleCloseDrawer = useCallback(() => {
        const updateState = () => {
            setIsDrawerOpen(false);
            // Small delay before clearing node to allow animation
            setTimeout(() => {
                setSelectedNodeId(null);
            }, 300);
        };

        // Use View Transitions API if available
        if (supportsViewTransitions()) {
            (document as any).startViewTransition(() => {
                setIsDrawerOpen(false);
            });
            setTimeout(() => {
                setSelectedNodeId(null);
            }, 350);
        } else {
            updateState();
        }
    }, []);

    return (
        <div className="roadmap-app">
            <PersonaSelector
                personas={allPersonas}
                selectedId={selectedPersonaId}
                onSelect={handlePersonaSelect}
                isMinimized={isMinimized}
                onBackToFull={handleBackToPersonas}
                sectionRef={personaSelectorRef}
            />

            {isMinimized && selectedPersona && (
                <div
                    className="roadmap-scroll-container"
                    ref={(el) => { scrollContainerRef.current = el; }}
                >
                    {isMobile ? (
                        <MobileRoadmapView
                            persona={selectedPersona}
                            onNodeClick={handleNodeClick}
                            selectedNodeId={selectedNodeId}
                        />
                    ) : (
                        <RoadmapView
                            persona={selectedPersona}
                            onNodeClick={handleNodeClick}
                            selectedNodeId={selectedNodeId}
                        />
                    )}
                </div>
            )}

            {/* Navigation controls for scrolling through the graph */}
            <NavigationControls
                scrollContainerRef={scrollContainerRef}
                isVisible={isMinimized && !isMobile && !!selectedPersona}
            />

            <ConceptDrawer
                node={selectedNode}
                isOpen={isDrawerOpen}
                onClose={handleCloseDrawer}
            />
        </div>
    );
}
