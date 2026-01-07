/**
 * SectionLabel component displays section headers (e.g., "FOUNDATIONS", "CORE SKILLS")
 * in the center column of the roadmap. Positioned absolutely based on y coordinate.
 */

import { type JSX } from "preact";

export interface SectionLabelProps {
    /** Section display label text */
    label: string;
    /** Y position for absolute positioning */
    yPosition: number;
}

export function SectionLabel({ label, yPosition }: SectionLabelProps): JSX.Element {
    return (
        <div
            className="section-label"
            style={{
                position: "absolute",
                top: `${yPosition}px`,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 0,
                opacity: 0.6,
            }}
        >
            {label}
        </div>
    );
}

export default SectionLabel;
