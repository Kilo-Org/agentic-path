/**
 * ConceptDrawer component displays node content in a slide-in side panel.
 * Shows the node title, summary, and resources organized in tabs (Read/Watch/Do).
 */

import { useState, useEffect, useCallback } from "preact/hooks";
import type { MainTopic, DetailNode } from "../types/roadmap";
import { ResourceList } from "./ResourceList";

export interface ConceptDrawerProps {
    /** The node to display (MainTopic or DetailNode), or null when closed */
    node: MainTopic | DetailNode | null;
    /** Callback function when the drawer should close */
    onClose: () => void;
    /** Whether the drawer is currently open */
    isOpen: boolean;
}

/** Available resource tab categories */
type TabType = "read" | "watch" | "do";

/** Tab configuration for display */
const tabs: { key: TabType; label: string; icon: string }[] = [
    { key: "read", label: "Read", icon: "📖" },
    { key: "watch", label: "Watch", icon: "🎥" },
    { key: "do", label: "Do", icon: "🛠️" },
];

/**
 * ConceptDrawer slides in from the right side of the screen
 * and displays detailed information about a node including
 * its summary and categorized resources.
 */
export function ConceptDrawer({ node, onClose, isOpen }: ConceptDrawerProps) {
    const [activeTab, setActiveTab] = useState<TabType>("read");

    // Handle ESC key to close drawer
    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === "Escape" && isOpen) {
                onClose();
            }
        },
        [isOpen, onClose]
    );

    // Add/remove ESC key listener
    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown]);

    // Prevent body scroll when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Handle backdrop click
    const handleBackdropClick = (event: MouseEvent) => {
        // Only close if clicking the backdrop itself, not the drawer content
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    // Don't render anything if no node
    if (!node) {
        return null;
    }

    // Get resources for current tab
    const currentResources = node.resources[activeTab];

    return (
        <>
            {/* Backdrop overlay */}
            <div
                class={`drawer-backdrop ${isOpen ? "drawer-backdrop-visible" : ""}`}
                onClick={handleBackdropClick}
                aria-hidden="true"
            />

            {/* Drawer panel */}
            <aside
                class={`concept-drawer ${isOpen ? "concept-drawer-open" : ""}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="drawer-title"
            >
                {/* Header with title and close button */}
                <header class="drawer-header">
                    <h2 id="drawer-title" class="drawer-title">
                        {node.title}
                    </h2>
                    <button
                        type="button"
                        class="drawer-close-btn"
                        onClick={onClose}
                        aria-label="Close drawer"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </header>

                {/* Scrollable content area */}
                <div class="drawer-content">
                    {/* Summary section */}
                    <section class="drawer-summary">
                        <p>{node.summary}</p>
                    </section>

                    {/* Resource tabs */}
                    <nav class="resource-tabs" role="tablist" aria-label="Resource types">
                        {tabs.map((tab) => {
                            const count = node.resources[tab.key].length;
                            return (
                                <button
                                    key={tab.key}
                                    type="button"
                                    role="tab"
                                    class={`resource-tab ${activeTab === tab.key ? "resource-tab-active" : ""
                                        }`}
                                    onClick={() => setActiveTab(tab.key)}
                                    aria-selected={activeTab === tab.key}
                                    aria-controls={`tabpanel-${tab.key}`}
                                >
                                    <span class="resource-tab-icon">{tab.icon}</span>
                                    <span class="resource-tab-label">{tab.label}</span>
                                    <span class="resource-tab-count">{count}</span>
                                </button>
                            );
                        })}
                    </nav>

                    {/* Resource list panel */}
                    <div
                        id={`tabpanel-${activeTab}`}
                        role="tabpanel"
                        class="resource-panel"
                        aria-labelledby={`tab-${activeTab}`}
                    >
                        <ResourceList resources={currentResources} category={activeTab} />
                    </div>
                </div>
            </aside>

            {/* Inline styles for the drawer */}
            <style>{`
        /* CSS Variables for drawer colors */
        :root {
          --bg-drawer: #1a1a1a;
          --accent-yellow: #e5c07b;
          --accent-blue: #4aa8d8;
          --text-primary: #e5e5e5;
          --text-muted: #9ca3af;
          --border: #2a2a2a;
        }

        /* Backdrop overlay */
        .drawer-backdrop {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0);
          z-index: 998;
          pointer-events: none;
          transition: background-color 0.3s ease;
        }

        .drawer-backdrop-visible {
          background-color: rgba(0, 0, 0, 0.5);
          pointer-events: auto;
        }

        /* Main drawer container */
        .concept-drawer {
          position: fixed;
          top: 0;
          right: 0;
          height: 100vh;
          width: 100%;
          max-width: 480px;
          background-color: var(--bg-drawer);
          z-index: 999;
          transform: translateX(100%);
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
          box-shadow: -4px 0 20px rgba(0, 0, 0, 0.3);
        }

        .concept-drawer-open {
          transform: translateX(0);
        }

        /* Drawer header */
        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--border);
          flex-shrink: 0;
        }

        .drawer-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
          line-height: 1.3;
        }

        .drawer-close-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: transparent;
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
          margin-left: 1rem;
        }

        .drawer-close-btn:hover {
          background-color: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
          border-color: var(--text-muted);
        }

        /* Scrollable content area */
        .drawer-content {
          flex: 1;
          overflow-y: auto;
          padding: 1.5rem;
        }

        /* Summary section */
        .drawer-summary {
          margin-bottom: 1.5rem;
        }

        .drawer-summary p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.7;
          margin: 0;
        }

        /* Resource tabs */
        .resource-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--border);
          padding-bottom: 0.75rem;
        }

        .resource-tab {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1rem;
          background: transparent;
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.875rem;
        }

        .resource-tab:hover {
          background-color: rgba(255, 255, 255, 0.05);
          border-color: var(--text-muted);
        }

        .resource-tab-active {
          background-color: rgba(229, 192, 123, 0.15);
          border-color: var(--accent-yellow);
          color: var(--accent-yellow);
        }

        .resource-tab-icon {
          font-size: 1rem;
        }

        .resource-tab-label {
          font-weight: 500;
        }

        .resource-tab-count {
          background-color: rgba(255, 255, 255, 0.1);
          padding: 0.125rem 0.5rem;
          border-radius: 12px;
          font-size: 0.75rem;
        }

        .resource-tab-active .resource-tab-count {
          background-color: rgba(229, 192, 123, 0.3);
        }

        /* Resource panel */
        .resource-panel {
          min-height: 200px;
        }

        /* Resource list */
        .resource-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .resource-list-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 1rem;
          text-align: center;
        }

        .resource-list-empty-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          opacity: 0.6;
        }

        .resource-list-empty-text {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin: 0;
        }

        /* Individual resource item */
        .resource-item {
          display: block;
          padding: 1rem;
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border);
          border-radius: 10px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .resource-item:hover {
          background-color: rgba(255, 255, 255, 0.06);
          border-color: var(--accent-blue);
          transform: translateY(-1px);
        }

        .resource-item-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .resource-type-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.25rem 0.625rem;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 500;
          background-color: rgba(255, 255, 255, 0.08);
          color: var(--text-muted);
        }

        .resource-type-icon {
          font-size: 0.875rem;
        }

        /* Type-specific badge colors */
        .resource-type-article {
          background-color: rgba(74, 168, 216, 0.15);
          color: var(--accent-blue);
        }

        .resource-type-video {
          background-color: rgba(229, 113, 113, 0.15);
          color: #e57171;
        }

        .resource-type-twitter-thread {
          background-color: rgba(29, 161, 242, 0.15);
          color: #1da1f2;
        }

        .resource-type-exercise {
          background-color: rgba(152, 195, 121, 0.15);
          color: #98c379;
        }

        .resource-type-template {
          background-color: rgba(198, 120, 221, 0.15);
          color: #c678dd;
        }

        .resource-type-docs {
          background-color: rgba(229, 192, 123, 0.15);
          color: var(--accent-yellow);
        }

        .resource-duration {
          font-size: 0.75rem;
          color: var(--text-muted);
          padding: 0.25rem 0.5rem;
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }

        .resource-title {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-primary);
          margin: 0 0 0.25rem 0;
          line-height: 1.4;
        }

        .resource-author {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        /* Mobile responsiveness */
        @media (max-width: 520px) {
          .concept-drawer {
            max-width: 100%;
          }

          .resource-tabs {
            flex-wrap: wrap;
          }

          .resource-tab {
            flex: 1;
            justify-content: center;
            min-width: calc(33% - 0.5rem);
          }

          .resource-tab-label {
            display: none;
          }
        }
      `}</style>
        </>
    );
}
