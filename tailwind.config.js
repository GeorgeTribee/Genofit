/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))",
                },
                // Brand-book aligned palette (source: Tamar_BrandBook_GenofIT)
                // Use semantic tokens (brand.*) on web; legacy `sa.*` kept for back-compat
                brand: {
                    navy: "#00263E",   // primary surface
                    blue: "#3B7DBF",   // services / B2B accent
                    cyan: "#3FC4E2",   // secondary accent (sparingly)
                    orange: "#F05A26", // academy / B2C accent
                    purple: "#8E66AB", // social/marketing only
                    teal: "#57C1B3",   // social/marketing only
                    peach: "#FBBD8D",  // social/marketing only
                    white: "#FFFFFF",
                },
                sa: {
                    dark: "#00263E",
                    light: "#FFFFFF",
                    blue: "#3B7DBF",
                    purple: "#8E66AB",
                    green: "#57C1B3",
                    cyan: "#3FC4E2",
                    orange: "#F05A26",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                // Latin: Inter (geometric sans, matches GenofIT wordmark)
                // Georgian: Noto Sans Georgian (free Google Font; BPG Glaho can replace via self-host later)
                sans: ['Inter', '"Noto Sans Georgian"', 'system-ui', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
            },
            spacing: {
                // Blueprint 8/16/24/48/96 grid (semantic aliases over Tailwind defaults)
                'gx-1': '8px',
                'gx-2': '16px',
                'gx-3': '24px',
                'gx-4': '48px',
                'gx-5': '96px',
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}
