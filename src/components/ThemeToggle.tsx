/**
 * ThemeToggle component provides a button to switch between light and dark themes.
 * 
 * Features:
 * - Respects system preference by default
 * - Allows user override that persists in localStorage
 * - Smooth icon transitions
 * - Accessible with proper aria labels
 */

import { useState, useEffect, useCallback } from "react";
import type { JSX } from "react";

type Theme = "light" | "dark" | "system";

/**
 * Get the effective theme based on system preference
 */
const getSystemTheme = (): "light" | "dark" => {
    if (typeof window === "undefined") return "dark";
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
};

/**
 * Get the stored theme preference from localStorage
 */
const getStoredTheme = (): Theme | null => {
    if (typeof window === "undefined") return null;
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark" || stored === "system") {
        return stored;
    }
    return null;
};

/**
 * Apply theme to the document
 */
const applyTheme = (theme: Theme) => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;

    if (theme === "system") {
        // Remove data-theme attribute so CSS media query takes over
        root.removeAttribute("data-theme");
    } else {
        root.setAttribute("data-theme", theme);
    }
};

/**
 * Sun icon for light mode
 */
function SunIcon(): JSX.Element {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
    );
}

/**
 * Moon icon for dark mode
 */
function MoonIcon(): JSX.Element {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
    );
}

/**
 * Monitor icon for system preference
 */
function MonitorIcon(): JSX.Element {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
    );
}

export function ThemeToggle(): JSX.Element {
    // Current theme setting: "light", "dark", or "system"
    const [themeSetting, setThemeSetting] = useState<Theme>("system");
    // Effective theme being displayed
    const [effectiveTheme, setEffectiveTheme] = useState<"light" | "dark">("dark");
    // Has the component mounted (for SSR)
    const [mounted, setMounted] = useState(false);

    // Initialize theme on mount
    useEffect(() => {
        const stored = getStoredTheme();
        const setting = stored || "system";
        setThemeSetting(setting);

        const effective = setting === "system" ? getSystemTheme() : setting;
        setEffectiveTheme(effective);

        applyTheme(setting);
        setMounted(true);
    }, []);

    // Listen for system preference changes
    useEffect(() => {
        if (typeof window === "undefined") return;

        const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");

        const handleChange = () => {
            if (themeSetting === "system") {
                setEffectiveTheme(getSystemTheme());
            }
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [themeSetting]);

    /**
     * Cycle through themes: system -> light -> dark -> system
     */
    const cycleTheme = useCallback(() => {
        let nextSetting: Theme;

        if (themeSetting === "system") {
            nextSetting = "light";
        } else if (themeSetting === "light") {
            nextSetting = "dark";
        } else {
            nextSetting = "system";
        }

        setThemeSetting(nextSetting);
        localStorage.setItem("theme", nextSetting);

        const nextEffective = nextSetting === "system" ? getSystemTheme() : nextSetting;
        setEffectiveTheme(nextEffective);

        applyTheme(nextSetting);
    }, [themeSetting]);

    // Get the appropriate icon based on current setting
    const getIcon = () => {
        if (themeSetting === "system") {
            return <MonitorIcon />;
        }
        return effectiveTheme === "light" ? <SunIcon /> : <MoonIcon />;
    };

    // Get aria label based on current state
    const getAriaLabel = () => {
        if (themeSetting === "system") {
            return `Theme: System (${effectiveTheme}). Click to switch to light mode.`;
        }
        if (themeSetting === "light") {
            return "Theme: Light. Click to switch to dark mode.";
        }
        return "Theme: Dark. Click to switch to system preference.";
    };

    // Don't render anything meaningful until mounted to avoid hydration mismatch
    if (!mounted) {
        return (
            <button
                className="theme-toggle"
                aria-label="Toggle theme"
                disabled
            >
                <span className="theme-toggle-icon">
                    <MoonIcon />
                </span>
            </button>
        );
    }

    return (
        <button
            className="theme-toggle"
            onClick={cycleTheme}
            aria-label={getAriaLabel()}
            title={themeSetting === "system" ? `System (${effectiveTheme})` : themeSetting}
        >
            <span className="theme-toggle-icon">
                {getIcon()}
            </span>
        </button>
    );
}
