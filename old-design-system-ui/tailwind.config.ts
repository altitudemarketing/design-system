import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'var(--color-brand)',
          hover: 'var(--color-brand-hover)',
          text: 'var(--color-text-on-brand)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          hover: 'var(--color-secondary-hover)',
          text: 'var(--color-text-on-secondary)',
        },
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        muted: 'var(--color-muted)',
        card: {
          DEFAULT: 'var(--color-card)',
          border: 'var(--color-card-border)',
          text: 'var(--color-foreground)', // mapped from token
        },
        border: 'var(--color-border)',
        base: 'var(--color-base)',
      },
      borderRadius: {
        button: 'var(--radius-button)',
        card: 'var(--radius-card)',
        input: 'var(--radius-input)',
        badge: 'var(--radius-badge)',
        modal: 'var(--radius-modal)',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        button: 'var(--shadow-button)',
        dropdown: 'var(--shadow-dropdown)',
        modal: 'var(--shadow-modal)',
      },
      fontFamily: {
        // If there were font families defined, I'd add them here. 
        // The CSS doesn't define font-family variables, assuming inherited.
      },
      fontSize: {
        // Semantic typography
        caption: 'var(--font-size-caption)',
        label: 'var(--font-size-label)',
        'body-small': 'var(--font-size-body-small)',
        body: 'var(--font-size-body)',
        lead: 'var(--font-size-lead)',
        h6: 'var(--font-size-h6)',
        h5: 'var(--font-size-h5)',
        h4: 'var(--font-size-h4)',
        h3: 'var(--font-size-h3)',
        h2: 'var(--font-size-h2)',
        h1: 'var(--font-size-h1)',
      }
    },
  },
  plugins: [],
};
export default config;

