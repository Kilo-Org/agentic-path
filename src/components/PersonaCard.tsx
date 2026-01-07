/**
 * PersonaCard - Individual clickable card for persona selection.
 * Displays persona icon, title, and subtitle with hover/selected states.
 * Supports minimized state when displayed in the compact top bar.
 */

import type { JSX } from "preact";
import type { Persona } from "../types";

export interface PersonaCardProps {
    /** The persona data to display */
    persona: Persona;
    /** Whether this persona is currently selected */
    isSelected: boolean;
    /** Whether the card is in minimized mode */
    isMinimized?: boolean;
    /** Callback when the card is clicked */
    onClick: () => void;
}

/**
 * A clickable card component that displays a persona option.
 * Features:
 * - Visual icon representation
 * - Title and subtitle text (subtitle hidden in minimized mode)
 * - Hover effect with accent border
 * - Selected state with highlighted background
 * - Minimized compact mode for top bar display
 * - View transition name for smooth animations
 */
export function PersonaCard({
    persona,
    isSelected,
    isMinimized = false,
    onClick
}: PersonaCardProps): JSX.Element {
    const cardClasses = [
        "persona-card",
        isSelected && "persona-card--selected",
        isMinimized && "persona-card--minimized",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <button
            type="button"
            className={cardClasses}
            onClick={onClick}
            aria-pressed={isSelected}
            aria-label={`Select ${persona.title} persona`}
            style={{ viewTransitionName: `persona-card-${persona.id}` }}
        >
            <div className="persona-icon" aria-hidden="true">
                {persona.icon}
            </div>
            <h3 className="persona-title">{persona.title}</h3>
            {!isMinimized && (
                <p className="persona-subtitle">{persona.subtitle}</p>
            )}
        </button>
    );
}
