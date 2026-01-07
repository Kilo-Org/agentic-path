/**
 * Roadmap data structure types for the 3-column interactive learning roadmap.
 * These types define the hierarchical structure: Persona > Section > MainTopic > DetailNode
 */

/**
 * A learning resource (article, video, exercise, etc.) linked to a topic.
 */
export interface Resource {
  /** Display title of the resource */
  title: string;
  /** URL to the resource */
  url: string;
  /** Type of resource for icon/styling purposes */
  type:
    | "article"
    | "video"
    | "twitter-thread"
    | "exercise"
    | "template"
    | "docs";
  /** Estimated time to complete (e.g., "5 min", "1 hour") */
  duration?: string;
  /** Author or creator of the resource */
  author?: string;
}

/**
 * A detail node representing a specific subtopic within a main topic.
 * These appear in the left or right columns of the roadmap.
 */
export interface DetailNode {
  /** Unique identifier for the detail node */
  id: string;
  /** Display title of the subtopic */
  title: string;
  /** Brief description (2-3 sentences) explaining the subtopic */
  summary: string;
  /** Categorized learning resources for this subtopic */
  resources: {
    /** Articles and reading materials */
    read: Resource[];
    /** Videos and visual content */
    watch: Resource[];
    /** Hands-on exercises and practice materials */
    do: Resource[];
  };
}

/**
 * A main topic that appears in the center column of the roadmap.
 * Contains child detail nodes that branch out to the left or right.
 */
export interface MainTopic {
  /** Unique identifier for the main topic */
  id: string;
  /** Display title of the topic */
  title: string;
  /** Higher-level overview of the topic */
  summary: string;
  /** Child detail nodes (max 6-7 recommended for visual clarity) */
  children: DetailNode[];
  /** Which side the children should appear on in the roadmap layout */
  childrenSide: "left" | "right";
  /** Categorized learning resources for this main topic */
  resources: {
    /** Articles and reading materials */
    read: Resource[];
    /** Videos and visual content */
    watch: Resource[];
    /** Hands-on exercises and practice materials */
    do: Resource[];
  };
}

/**
 * A section grouping related main topics together.
 * Represents a major milestone or category in the learning journey.
 */
export interface Section {
  /** Unique identifier for the section */
  id: string;
  /** Display label (e.g., "FOUNDATIONS", "CORE SKILLS") */
  label: string;
  /** Main topics contained in this section */
  topics: MainTopic[];
}

/**
 * A persona representing a specific learning path or role.
 * The top-level container for an entire roadmap.
 */
export interface Persona {
  /** Unique identifier for the persona */
  id: string;
  /** Display title (e.g., "AI Engineer") */
  title: string;
  /** Brief subtitle describing the persona */
  subtitle: string;
  /** Icon identifier for visual representation */
  icon: string;
  /** Ordered list of sections in the learning roadmap */
  sections: Section[];
}
