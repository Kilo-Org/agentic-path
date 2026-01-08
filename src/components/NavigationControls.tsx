/**
 * NavigationControls provides vertical navigation buttons for the roadmap.
 * Includes up/down scroll buttons and keyboard navigation support.
 */

import { type JSX } from "preact";
import { useEffect, useCallback, useRef } from "preact/hooks";

export interface NavigationControlsProps {
    /** Reference to the scrollable container element */
    scrollContainerRef: { current: HTMLElement | null };
    /** Whether the navigation controls should be visible */
    isVisible: boolean;
}

// Scroll amount for each navigation action (in pixels)
const SCROLL_AMOUNT = 300;

// Icons as SVG components
const ChevronUpIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="18 15 12 9 6 15" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="6 9 12 15 18 9" />
    </svg>
);

const DoubleChevronUpIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="18 11 12 5 6 11" />
        <polyline points="18 18 12 12 6 18" />
    </svg>
);

const DoubleChevronDownIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="18 6 12 12 6 6" />
        <polyline points="18 13 12 19 6 13" />
    </svg>
);

export function NavigationControls({
    scrollContainerRef,
    isVisible,
}: NavigationControlsProps): JSX.Element | null {
    const lastScrollPosition = useRef(0);

    // Check if an element is scrollable (has overflow set to scroll/auto and content exceeds viewport)
    const isScrollable = useCallback((element: HTMLElement): boolean => {
        const style = window.getComputedStyle(element);
        const overflowY = style.overflowY;
        const isScrollableOverflow = overflowY === "auto" || overflowY === "scroll";
        const hasScrollableContent = element.scrollHeight > element.clientHeight;
        return isScrollableOverflow && hasScrollableContent;
    }, []);

    // Smooth scroll function - scrolls the container if it's scrollable, otherwise scrolls the window
    const smoothScroll = useCallback((amount: number) => {
        const container = scrollContainerRef.current;

        // If container exists and is scrollable, scroll it; otherwise scroll the window
        if (container && isScrollable(container)) {
            container.scrollBy({
                top: amount,
                behavior: "smooth",
            });
        } else {
            window.scrollBy({
                top: amount,
                behavior: "smooth",
            });
        }
    }, [scrollContainerRef, isScrollable]);

    // Scroll to top
    const scrollToTop = useCallback(() => {
        const container = scrollContainerRef.current;

        // If container exists and is scrollable, scroll it; otherwise scroll the window
        if (container && isScrollable(container)) {
            container.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }, [scrollContainerRef, isScrollable]);

    // Scroll to bottom
    const scrollToBottom = useCallback(() => {
        const container = scrollContainerRef.current;

        // If container exists and is scrollable, scroll it; otherwise scroll the window
        if (container && isScrollable(container)) {
            container.scrollTo({
                top: container.scrollHeight,
                behavior: "smooth",
            });
        } else {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [scrollContainerRef, isScrollable]);

    // Keyboard navigation handler
    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        // Don't handle if user is typing in an input
        if (
            event.target instanceof HTMLInputElement ||
            event.target instanceof HTMLTextAreaElement
        ) {
            return;
        }

        switch (event.key) {
            case "ArrowUp":
                event.preventDefault();
                smoothScroll(-SCROLL_AMOUNT);
                break;
            case "ArrowDown":
                event.preventDefault();
                smoothScroll(SCROLL_AMOUNT);
                break;
            case "PageUp":
                event.preventDefault();
                smoothScroll(-SCROLL_AMOUNT * 2);
                break;
            case "PageDown":
                event.preventDefault();
                smoothScroll(SCROLL_AMOUNT * 2);
                break;
            case "Home":
                event.preventDefault();
                scrollToTop();
                break;
            case "End":
                event.preventDefault();
                scrollToBottom();
                break;
        }
    }, [smoothScroll, scrollToTop, scrollToBottom]);

    // Set up keyboard event listeners
    useEffect(() => {
        if (!isVisible) return;

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isVisible, handleKeyDown]);

    // Save scroll position before unmounting (for potential future use)
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const saveScrollPosition = () => {
            lastScrollPosition.current = container.scrollTop;
        };

        container.addEventListener("scroll", saveScrollPosition);
        return () => {
            container.removeEventListener("scroll", saveScrollPosition);
        };
    }, [scrollContainerRef]);

    if (!isVisible) {
        return null;
    }

    return (
        <div className="navigation-controls" role="navigation" aria-label="Graph navigation">
            <button
                className="nav-button nav-button--top"
                onClick={scrollToTop}
                title="Scroll to top (Home)"
                aria-label="Scroll to top"
            >
                <DoubleChevronUpIcon />
            </button>
            <button
                className="nav-button nav-button--up"
                onClick={() => smoothScroll(-SCROLL_AMOUNT)}
                title="Scroll up (↑)"
                aria-label="Scroll up"
            >
                <ChevronUpIcon />
            </button>
            <button
                className="nav-button nav-button--down"
                onClick={() => smoothScroll(SCROLL_AMOUNT)}
                title="Scroll down (↓)"
                aria-label="Scroll down"
            >
                <ChevronDownIcon />
            </button>
            <button
                className="nav-button nav-button--bottom"
                onClick={scrollToBottom}
                title="Scroll to bottom (End)"
                aria-label="Scroll to bottom"
            >
                <DoubleChevronDownIcon />
            </button>
        </div>
    );
}

export default NavigationControls;
