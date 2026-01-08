/**
 * PersonaSelector - Container component showing all persona cards.
 * Displays a grid of persona cards for users to select their learning path.
 * Supports minimized state when a persona is selected.
 */

import type { JSX, RefObject } from "preact";
import type { Persona } from "../types";
import { PersonaCard } from "./PersonaCard";

export interface PersonaSelectorProps {
    /** Array of all available personas */
    personas: readonly Persona[];
    /** ID of the currently selected persona (null if none selected) */
    selectedId: string | null;
    /** Callback when a persona is selected */
    onSelect: (personaId: string) => void;
    /** Whether the selector is in minimized mode */
    isMinimized?: boolean;
    /** Callback to go back to full view */
    onBackToFull?: () => void;
    /** Ref for the section element (used for scrolling) */
    sectionRef?: RefObject<HTMLElement>;
    /** Whether to show the instruction hint (for when minimized and no topic selected) */
    showHint?: boolean;
}

/**
 * A container component that renders a grid of PersonaCard components.
 * Features:
 * - 3-column grid layout on desktop in full mode
 * - Horizontal compact strip in minimized mode
 * - Single column stack on mobile
 * - Centered layout with max-width
 * - Includes a header title (hidden in minimized mode)
 */
export function PersonaSelector({
    personas,
    selectedId,
    onSelect,
    isMinimized = false,
    onBackToFull,
    sectionRef,
    showHint = false,
}: PersonaSelectorProps): JSX.Element {
    const sectionClasses = [
        "persona-selector-section",
        isMinimized && "persona-selector-section--minimized",
    ]
        .filter(Boolean)
        .join(" ");

    const selectorClasses = [
        "persona-selector",
        isMinimized && "persona-selector--minimized",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <section
            ref={sectionRef}
            className={sectionClasses}
            aria-labelledby="persona-selector-title"
            style={{ viewTransitionName: "persona-section" }}
        >
            {!isMinimized && (
                <div className="persona-selector-hero">
                    <h1 id="persona-selector-title" className="persona-selector-title">
                        Agentic Engineering for Humans
                    </h1>
                    <p className="persona-selector-tagline">
                        An Interactive Learning Roadmap
                    </p>
                    <p className="persona-selector-description">
                        Navigate the world of <strong>agentic AI</strong> with confidence. This
                        roadmap guides you through the essential concepts of <strong>LLMs</strong>,{" "}
                        <strong>prompt engineering</strong>, and <strong>AI agents</strong> — from
                        foundational understanding to practical implementation.
                    </p>
                    <p className="persona-selector-subtitle">
                        Choose your learning path based on how you'll apply AI agents
                    </p>
                </div>
            )}

            {isMinimized && onBackToFull && (
                <button
                    type="button"
                    className="persona-selector-back"
                    onClick={onBackToFull}
                    aria-label="Go back to full persona selection"
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                    <span>All Paths</span>
                </button>
            )}

            <div className={selectorClasses} role="group" aria-label="Persona selection">
                {personas.map((persona) => (
                    <PersonaCard
                        key={persona.id}
                        persona={persona}
                        isSelected={persona.id === selectedId}
                        isMinimized={isMinimized}
                        onClick={() => onSelect(persona.id)}
                    />
                ))}
            </div>

            {showHint && (
                <p className="roadmap-instructions">
                    <span className="roadmap-instructions-icon">👇</span>
                    Click on any topic to explore resources!
                </p>
            )}
        </section>
    );
}
