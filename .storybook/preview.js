import "../src/App.css";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "wingu-background",
    values: [{ name: "wingu-background", value: "#F0F0F2" }],
  },
};
