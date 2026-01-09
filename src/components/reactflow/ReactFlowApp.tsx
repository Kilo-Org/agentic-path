/**
 * ReactFlowApp - Main React island component for the React Flow roadmap page
 * Similar to RoadmapApp but uses React Flow for visualization
 */

import { useState, useCallback, useRef, useEffect } from "react";
import type { JSX } from "react";
import { allPersonas, personas } from "@/data";
import { PersonaSelector } from "../PersonaSelector";
import { ReactFlowRoadmap } from "./ReactFlowRoadmap";

export interface ReactFlowAppProps {
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
 * Main application component for the React Flow roadmap page
 */
export function ReactFlowApp({
    initialPersonaId,
}: ReactFlowAppProps): JSX.Element {
    // State for tracking selected persona
    const [selectedPersonaId, setSelectedPersonaId] = useState<string | null>(
        initialPersonaId || null
    );

    // State for tracking if the view is minimized (persona selected)
    const [isMinimized, setIsMinimized] = useState(!!initialPersonaId);

    // Ref for the persona selector section
    const personaSelectorRef = useRef<HTMLElement | null>(null);

    // Get the currently selected persona data
    const selectedPersona = selectedPersonaId
        ? personas[selectedPersonaId as keyof typeof personas]
        : null;

    /**
     * Handle persona selection with View Transition
     */
    const handlePersonaSelect = useCallback(
        (personaId: string) => {
            if (personaId === selectedPersonaId && isMinimized) {
                return;
            }

            const updateState = () => {
                setSelectedPersonaId(personaId);
                setIsMinimized(true);
            };

            const scrollToSelector = () => {
                requestAnimationFrame(() => {
                    personaSelectorRef.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                });
            };

            if (supportsViewTransitions()) {
                (document as any)
                    .startViewTransition(() => {
                        updateState();
                    })
                    .finished.then(scrollToSelector);
            } else {
                updateState();
                scrollToSelector();
            }
        },
        [selectedPersonaId, isMinimized]
    );

    /**
     * Handle going back to full persona view
     */
    const handleBackToPersonas = useCallback(() => {
        const updateState = () => {
            setIsMinimized(false);
            setSelectedPersonaId(null);
        };

        if (supportsViewTransitions()) {
            (document as any).startViewTransition(() => {
                updateState();
            });
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
                showHint={isMinimized && !!selectedPersona}
            />

            {isMinimized && selectedPersona && (
                <div className="reactflow-wrapper">
                    <ReactFlowRoadmap persona={selectedPersona} />
                </div>
            )}
        </div>
    );
}

export default ReactFlowApp;