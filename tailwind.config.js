export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        burgundy: "#6B1A2A",
        gold: "#C9A96E",
        cream: "#FAF5F0"
      },
      fontFamily: {
        script:  ['"Amalfi Coast"', 'serif'],           // couple names, hero text
        elegant: ['"Champagne Limousines"', 'serif'],   // headings, labels
        heading: ['"Cormorant Garamond"', 'serif'],     // subheadings, quotes
        body:    ['Jost', 'sans-serif'],                // body text, UI
      },
    }
  },
  plugins: [],
}