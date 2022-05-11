module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "wingu-primary": "#E6334C",
        "wingu-secondary": "#FEEBEC",
        "wingu-gray-800": "#323239",
        "wingu-gray-600": "#5A5A67",
        "wingu-gray-400": "#A3A3AF",
      },
      spacing: {
        4.5: "1.125rem",
      },
      dropShadow: {
        wingu: "0 8px 16px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
