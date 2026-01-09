/**
 * ConceptDrawer component displays node content in a slide-in side panel.
 * Shows the node title, summary, and resources organized in tabs (Read/Watch/Do).
 * For MainTopics, also displays a list of subnodes that can be clicked.
 * Supports View Transitions for smooth animations.
 */

import { useState, useEffect, useCallback } from "react";
import type { MainTopic, DetailNode } from "../types/roadmap";
import { ResourceList } from "./ResourceList";

export interface ConceptDrawerProps {
  /** The node to display (MainTopic or DetailNode), or null when closed */
  node: MainTopic | DetailNode | null;
  /** Callback function when the drawer should close */
  onClose: () => void;
  /** Whether the drawer is currently open */
  isOpen: boolean;
  /** Optional callback when a subnode is clicked (for MainTopic nodes) */
  onSubnodeClick?: (nodeId: string) => void;
}

/**
 * Type guard to check if a node is a MainTopic (has children)
 */
function isMainTopic(node: MainTopic | DetailNode): node is MainTopic {
  return "children" in node && Array.isArray((node as MainTopic).children);
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
export function ConceptDrawer({ node, onClose, isOpen, onSubnodeClick }: ConceptDrawerProps) {
  const [activeTab, setActiveTab] = useState<TabType>("read");

  // Check if this node has subnodes (is a MainTopic)
  const hasSubnodes = node && isMainTopic(node) && node.children.length > 0;

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
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
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
        className={`drawer-backdrop ${isOpen ? "drawer-backdrop-visible" : ""}`}
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <aside
        className={`concept-drawer ${isOpen ? "concept-drawer-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        style={{ viewTransitionName: "concept-drawer" }}
      >
        {/* Header with title and close button */}
        <header className="drawer-header">
          <h2 id="drawer-title" className="drawer-title">
            {node.title}
          </h2>
          <button
            type="button"
            className="drawer-close-btn"
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
        <div className="drawer-content">
          {/* Summary section */}
          <section className="drawer-summary">
            <p>{node.summary}</p>
          </section>

          {/* Resource tabs */}
          <nav className="resource-tabs" role="tablist" aria-label="Resource types">
            {tabs.map((tab) => {
              const count = node.resources[tab.key].length;
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  className={`resource-tab ${activeTab === tab.key ? "resource-tab-active" : ""
                    }`}
                  onClick={() => setActiveTab(tab.key)}
                  aria-selected={activeTab === tab.key}
                  aria-controls={`tabpanel-${tab.key}`}
                >
                  <span className="resource-tab-icon">{tab.icon}</span>
                  <span className="resource-tab-label">{tab.label}</span>
                  <span className="resource-tab-count">{count}</span>
                </button>
              );
            })}
          </nav>

          {/* Resource list panel */}
          <div
            id={`tabpanel-${activeTab}`}
            role="tabpanel"
            className="resource-panel"
            aria-labelledby={`tab-${activeTab}`}
          >
            <ResourceList resources={currentResources} category={activeTab} />
          </div>

          {/* Subnodes section (only for MainTopics with children) - shown below resources */}
          {hasSubnodes && isMainTopic(node) && (
            <section className="drawer-subnodes">
              <h3 className="drawer-subnodes-title">
                <span className="drawer-subnodes-icon">📚</span>
                Subtopics
                <span className="drawer-subnodes-count">{node.children.length}</span>
              </h3>
              <ul className="drawer-subnodes-list">
                {node.children.map((child) => (
                  <li key={child.id}>
                    <button
                      type="button"
                      className="drawer-subnode-item"
                      onClick={() => onSubnodeClick?.(child.id)}
                    >
                      <span className="drawer-subnode-title">{child.title}</span>
                      <svg
                        className="drawer-subnode-arrow"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </aside>
    </>
  );
}
