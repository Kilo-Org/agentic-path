/**
 * SpotifyApp - Main component for the Spotify-style learning path interface
 * Three-column layout: Sidebar (personas) | Main (topics) | Drawer (details)
 */

import { useState, useCallback } from "react";
import type { JSX } from "react";
import { allPersonas, findNodeById } from "../../data";
import type { Persona, MainTopic, DetailNode, Section } from "../../types/roadmap";

/** Resource tab types */
type TabType = "read" | "watch" | "do";

/** Tab configuration */
const tabs: { key: TabType; label: string; icon: string }[] = [
    { key: "read", label: "Read", icon: "📖" },
    { key: "watch", label: "Watch", icon: "🎥" },
    { key: "do", label: "Do", icon: "🛠️" },
];

/** Type guard to check if a node is a MainTopic */
function isMainTopic(node: MainTopic | DetailNode): node is MainTopic {
    return "children" in node && Array.isArray((node as MainTopic).children);
}

/** Get icon for resource type */
function getResourceIcon(type: string): string {
    switch (type) {
        case "article":
            return "📄";
        case "video":
            return "🎬";
        case "twitter-thread":
            return "🐦";
        case "exercise":
            return "💪";
        case "template":
            return "📋";
        case "docs":
            return "📚";
        default:
            return "📎";
    }
}

/** Get topic icon based on index */
function getTopicIcon(index: number): string {
    const icons = ["🎯", "⚡", "🔧", "📊", "🚀", "💡", "🔍", "🎨", "🔐", "📈"];
    return icons[index % icons.length];
}

/**
 * Main Spotify-style app component
 */
export function SpotifyApp(): JSX.Element {
    // State
    const [selectedPersonaId, setSelectedPersonaId] = useState<string | null>(null);
    const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<TabType>("read");

    // Get selected persona
    const selectedPersona = selectedPersonaId
        ? allPersonas.find((p) => p.id === selectedPersonaId) || null
        : null;

    // Get selected node
    const selectedNode = selectedPersona && selectedNodeId
        ? findNodeById(selectedPersona, selectedNodeId)
        : null;

    // Handlers
    const handlePersonaSelect = useCallback((personaId: string) => {
        setSelectedPersonaId(personaId);
        setSelectedNodeId(null);
        setActiveTab("read");
    }, []);

    const handleNodeSelect = useCallback((nodeId: string) => {
        setSelectedNodeId(nodeId);
        setActiveTab("read");
    }, []);

    const handleDrawerClose = useCallback(() => {
        setSelectedNodeId(null);
    }, []);

    const handleSubnodeClick = useCallback((nodeId: string) => {
        setSelectedNodeId(nodeId);
        setActiveTab("read");
    }, []);

    // Count total topics for a persona
    const getTotalTopics = (persona: Persona): number => {
        return persona.sections.reduce((acc, section) => {
            return acc + section.topics.length + section.topics.reduce((childAcc, topic) => childAcc + topic.children.length, 0);
        }, 0);
    };

    return (
        <div className="spotify-app">
            {/* Left Sidebar - Personas/Playlists */}
            <aside className="spotify-sidebar">
                <header className="spotify-sidebar-header">
                    <div className="spotify-sidebar-logo">
                        <span className="spotify-sidebar-logo-icon">🎓</span>
                        <span>Learning Paths</span>
                    </div>
                </header>
                <h2 className="spotify-sidebar-title">Your Playlists</h2>
                <nav className="spotify-playlist-list">
                    {allPersonas.map((persona) => (
                        <button
                            key={persona.id}
                            type="button"
                            className={`spotify-playlist-item ${selectedPersonaId === persona.id ? "spotify-playlist-item--active" : ""}`}
                            onClick={() => handlePersonaSelect(persona.id)}
                        >
                            <span className="spotify-playlist-icon">{persona.icon}</span>
                            <div className="spotify-playlist-info">
                                <div className="spotify-playlist-name">{persona.title}</div>
                                <div className="spotify-playlist-subtitle">{persona.subtitle}</div>
                            </div>
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Main Content - Tracklist */}
            <main className="spotify-main">
                {selectedPersona ? (
                    <>
                        <header className="spotify-main-header">
                            <h1 className="spotify-main-title">
                                <span className="spotify-main-title-icon">{selectedPersona.icon}</span>
                                {selectedPersona.title}
                            </h1>
                            <p className="spotify-main-subtitle">{selectedPersona.subtitle}</p>
                            <div className="spotify-main-meta">
                                <span className="spotify-main-meta-item">
                                    <span>📚</span>
                                    <span>{selectedPersona.sections.length} sections</span>
                                </span>
                                <span className="spotify-main-meta-item">
                                    <span>🎯</span>
                                    <span>{getTotalTopics(selectedPersona)} topics</span>
                                </span>
                            </div>
                        </header>
                        <div className="spotify-tracklist">
                            {selectedPersona.sections.map((section, sectionIndex) => (
                                <SectionBlock
                                    key={section.id}
                                    section={section}
                                    sectionIndex={sectionIndex}
                                    selectedNodeId={selectedNodeId}
                                    onNodeSelect={handleNodeSelect}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="spotify-empty-state">
                        <span className="spotify-empty-icon">🎵</span>
                        <h2 className="spotify-empty-title">Select a Learning Path</h2>
                        <p className="spotify-empty-text">
                            Choose a persona from the sidebar to explore curated learning topics and resources.
                        </p>
                    </div>
                )}
            </main>

            {/* Right Drawer - Details */}
            <div className={`spotify-drawer-container ${selectedNode ? "spotify-drawer-container--open" : ""}`}>
                <aside className={`spotify-drawer ${selectedNode ? "spotify-drawer--open" : ""}`}>
                    {selectedNode && (
                        <>
                            <header className="spotify-drawer-header">
                                <h2 className="spotify-drawer-title">{selectedNode.title}</h2>
                                <button
                                    type="button"
                                    className="spotify-drawer-close"
                                    onClick={handleDrawerClose}
                                    aria-label="Close drawer"
                                >
                                    <svg
                                        width="20"
                                        height="20"
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
                            <div className="spotify-drawer-content">
                                <div className="spotify-drawer-summary">
                                    <p>{selectedNode.summary}</p>
                                </div>

                                {/* Resource Tabs */}
                                <div className="spotify-drawer-tabs">
                                    {tabs.map((tab) => {
                                        const count = selectedNode.resources[tab.key].length;
                                        return (
                                            <button
                                                key={tab.key}
                                                type="button"
                                                className={`spotify-drawer-tab ${activeTab === tab.key ? "spotify-drawer-tab--active" : ""}`}
                                                onClick={() => setActiveTab(tab.key)}
                                            >
                                                <span className="spotify-drawer-tab-icon">{tab.icon}</span>
                                                <span>{tab.label}</span>
                                                <span className="spotify-drawer-tab-count">{count}</span>
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Resource List */}
                                <div className="spotify-drawer-resources">
                                    {selectedNode.resources[activeTab].length > 0 ? (
                                        selectedNode.resources[activeTab].map((resource, index) => (
                                            <a
                                                key={index}
                                                href={resource.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="spotify-drawer-resource"
                                            >
                                                <span className="spotify-drawer-resource-icon">
                                                    {getResourceIcon(resource.type)}
                                                </span>
                                                <div className="spotify-drawer-resource-info">
                                                    <h4 className="spotify-drawer-resource-title">{resource.title}</h4>
                                                    <div className="spotify-drawer-resource-meta">
                                                        {resource.duration && (
                                                            <span className="spotify-drawer-resource-duration">
                                                                <span>⏱️</span>
                                                                <span>{resource.duration}</span>
                                                            </span>
                                                        )}
                                                        {resource.author && <span>{resource.author}</span>}
                                                    </div>
                                                </div>
                                                <svg
                                                    className="spotify-drawer-resource-arrow"
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
                                            </a>
                                        ))
                                    ) : (
                                        <div className="spotify-drawer-empty">
                                            <span className="spotify-drawer-empty-icon">📭</span>
                                            <p className="spotify-drawer-empty-text">No {activeTab} resources yet</p>
                                        </div>
                                    )}
                                </div>

                                {/* Subtopics (for MainTopics) */}
                                {isMainTopic(selectedNode) && selectedNode.children.length > 0 && (
                                    <div className="spotify-drawer-subtopics">
                                        <h3 className="spotify-drawer-subtopics-title">
                                            <span>📚</span>
                                            <span>Subtopics</span>
                                            <span className="spotify-drawer-subtopics-count">{selectedNode.children.length}</span>
                                        </h3>
                                        <div className="spotify-drawer-subtopics-list">
                                            {selectedNode.children.map((child) => (
                                                <button
                                                    key={child.id}
                                                    type="button"
                                                    className="spotify-drawer-subtopic"
                                                    onClick={() => handleSubnodeClick(child.id)}
                                                >
                                                    <span>{child.title}</span>
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
                                                        <polyline points="9 18 15 12 9 6" />
                                                    </svg>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </aside>
            </div>
        </div>
    );
}

/**
 * Section block component - displays a section with its topics
 */
interface SectionBlockProps {
    section: Section;
    sectionIndex: number;
    selectedNodeId: string | null;
    onNodeSelect: (nodeId: string) => void;
}

function SectionBlock({ section, sectionIndex, selectedNodeId, onNodeSelect }: SectionBlockProps): JSX.Element {
    let trackNumber = sectionIndex * 10 + 1;

    return (
        <section className="spotify-section">
            <header className="spotify-section-header">
                <span className="spotify-section-label">{section.label}</span>
                <span className="spotify-section-count">{section.topics.length} topics</span>
            </header>
            <div className="spotify-track-list">
                {section.topics.map((topic, topicIndex) => {
                    const currentTrackNumber = trackNumber++;
                    const readCount = topic.resources.read.length;
                    const watchCount = topic.resources.watch.length;
                    const doCount = topic.resources.do.length;

                    return (
                        <div key={topic.id}>
                            <button
                                type="button"
                                className={`spotify-track ${selectedNodeId === topic.id ? "spotify-track--active" : ""}`}
                                onClick={() => onNodeSelect(topic.id)}
                            >
                                <span className="spotify-track-number">{currentTrackNumber}</span>
                                <span className="spotify-track-icon">{getTopicIcon(topicIndex)}</span>
                                <div className="spotify-track-info">
                                    <h3 className="spotify-track-title">{topic.title}</h3>
                                    <p className="spotify-track-description">{topic.summary}</p>
                                </div>
                                <div className="spotify-track-meta">
                                    <div className="spotify-track-resources">
                                        {readCount > 0 && (
                                            <span className="spotify-resource-badge">
                                                <span className="spotify-resource-badge-icon">📖</span>
                                                <span>{readCount}</span>
                                            </span>
                                        )}
                                        {watchCount > 0 && (
                                            <span className="spotify-resource-badge">
                                                <span className="spotify-resource-badge-icon">🎥</span>
                                                <span>{watchCount}</span>
                                            </span>
                                        )}
                                        {doCount > 0 && (
                                            <span className="spotify-resource-badge">
                                                <span className="spotify-resource-badge-icon">🛠️</span>
                                                <span>{doCount}</span>
                                            </span>
                                        )}
                                    </div>
                                    <svg
                                        className="spotify-track-arrow"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </div>
                            </button>

                            {/* Subtopics */}
                            {topic.children.length > 0 && (
                                <div className="spotify-subtopic">
                                    {topic.children.map((child, childIndex) => {
                                        const childReadCount = child.resources.read.length;
                                        const childWatchCount = child.resources.watch.length;
                                        const childDoCount = child.resources.do.length;

                                        return (
                                            <button
                                                key={child.id}
                                                type="button"
                                                className={`spotify-track spotify-track--secondary ${selectedNodeId === child.id ? "spotify-track--active" : ""}`}
                                                onClick={() => onNodeSelect(child.id)}
                                            >
                                                <span className="spotify-track-icon">📄</span>
                                                <div className="spotify-track-info">
                                                    <h4 className="spotify-track-title">{child.title}</h4>
                                                </div>
                                                <div className="spotify-track-meta">
                                                    <div className="spotify-track-resources">
                                                        {childReadCount > 0 && (
                                                            <span className="spotify-resource-badge">
                                                                <span className="spotify-resource-badge-icon">📖</span>
                                                                <span>{childReadCount}</span>
                                                            </span>
                                                        )}
                                                        {childWatchCount > 0 && (
                                                            <span className="spotify-resource-badge">
                                                                <span className="spotify-resource-badge-icon">🎥</span>
                                                                <span>{childWatchCount}</span>
                                                            </span>
                                                        )}
                                                        {childDoCount > 0 && (
                                                            <span className="spotify-resource-badge">
                                                                <span className="spotify-resource-badge-icon">🛠️</span>
                                                                <span>{childDoCount}</span>
                                                            </span>
                                                        )}
                                                    </div>
                                                    <svg
                                                        className="spotify-track-arrow"
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
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default SpotifyApp;