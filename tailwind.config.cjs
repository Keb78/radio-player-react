module.exports = {
  darkMode: "class", // Enable class-based dark mode
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: "#1e293b", // Example custom dark mode color
        darkText: "#e2e8f0", // Example custom text color for dark mode
      },
    },
  },
  plugins: [],
};