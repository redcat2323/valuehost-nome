import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#13E881',
          foreground: '#000000'
        },
        secondary: {
          DEFAULT: '#FFFFFF',
          foreground: '#000000'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "shimmer": {
          "0%": {
            backgroundPosition: "200% 0",
            transform: "scale(1)"
          },
          "50%": {
            backgroundPosition: "-200% 0",
            transform: "scale(1.01)"
          },
          "100%": {
            backgroundPosition: "200% 0",
            transform: "scale(1)"
          }
        },
        "gradient-shift": {
          "0%, 100%": {
            transform: "rotate(-3deg) scale(1.05)",
            opacity: "0.7"
          },
          "50%": {
            transform: "rotate(3deg) scale(1.15)",
            opacity: "0.4"
          }
        }
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "shimmer": "shimmer 8s ease-in-out infinite",
        "gradient-shift": "gradient-shift 10s ease-in-out infinite"
      },
      backgroundSize: {
        "200%": "200% auto"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;