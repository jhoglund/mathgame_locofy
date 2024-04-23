/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: "#333",
        dimgray: {
          "100": "#666",
          "200": "rgba(102, 102, 102, 0.8)",
          "300": "rgba(102, 102, 102, 0.35)",
          "400": "rgba(102, 102, 102, 0.25)",
        },
        gray: "#111",
        crimson: "#ee1d52",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        poppins: "Poppins",
      },
      borderRadius: {
        "21xl": "40px",
      },
    },
    fontSize: {
      base: "1rem",
      lg: "1.125rem",
      "5xl": "1.5rem",
      lgi: "1.188rem",
      inherit: "inherit",
    },
    screens: {
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
