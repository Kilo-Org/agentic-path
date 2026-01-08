/**
 * URL State Management utilities for deep linking support.
 * Manages state synchronization with URL hash parameters for:
 * - Persona selection (#persona=for-myself)
 * - Topic/concept selection (#persona=for-myself&topic=ai-basics)
 *
 * Uses hash-based URLs to avoid server-side routing complexity in Astro.
 */

/**
 * State that can be serialized to/from the URL hash
 */
export interface UrlState {
  /** Currently selected persona ID, or null if none */
  persona: string | null;
  /** Currently selected topic/node ID, or null if none */
  topic: string | null;
}

/**
 * Parse the current URL hash into a state object.
 * Handles formats like:
 * - #persona=for-myself
 * - #persona=for-myself&topic=ai-basics
 *
 * @returns The parsed URL state
 */
export function parseUrlHash(): UrlState {
  if (typeof window === "undefined") {
    return { persona: null, topic: null };
  }

  const hash = window.location.hash.slice(1); // Remove leading #
  if (!hash) {
    return { persona: null, topic: null };
  }

  const params = new URLSearchParams(hash);
  return {
    persona: params.get("persona"),
    topic: params.get("topic"),
  };
}

/**
 * Build a hash string from the given state.
 * Only includes non-null values.
 *
 * @param state - The state to serialize
 * @returns The hash string (without leading #)
 */
export function buildHashString(state: UrlState): string {
  const params = new URLSearchParams();

  if (state.persona) {
    params.set("persona", state.persona);
  }
  if (state.topic) {
    params.set("topic", state.topic);
  }

  return params.toString();
}

/**
 * Update the URL hash without triggering a page reload.
 * Uses pushState when the state changes to enable back/forward navigation.
 * Uses replaceState for the initial state to avoid extra history entries.
 *
 * @param state - The state to set in the URL
 * @param replace - If true, replace current history entry instead of pushing
 */
export function updateUrlHash(state: UrlState, replace: boolean = false): void {
  if (typeof window === "undefined") {
    return;
  }

  const hashString = buildHashString(state);
  const newUrl = hashString ? `#${hashString}` : window.location.pathname;

  // Avoid unnecessary updates if hash hasn't changed
  const currentHash = window.location.hash.slice(1);
  if (currentHash === hashString) {
    return;
  }

  if (replace) {
    window.history.replaceState(null, "", newUrl);
  } else {
    window.history.pushState(null, "", newUrl);
  }
}

/**
 * Clear the URL hash entirely.
 * Used when navigating back to the persona selection screen.
 *
 * @param replace - If true, replace current history entry instead of pushing
 */
export function clearUrlHash(replace: boolean = false): void {
  if (typeof window === "undefined") {
    return;
  }

  // Avoid unnecessary updates if already no hash
  if (!window.location.hash) {
    return;
  }

  const newUrl = window.location.pathname + window.location.search;

  if (replace) {
    window.history.replaceState(null, "", newUrl);
  } else {
    window.history.pushState(null, "", newUrl);
  }
}
