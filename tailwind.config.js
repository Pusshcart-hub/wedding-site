export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        burgundy: "#6B1A2A",
        b1: "#600000",
        gold: "#C9A96E",
        cream: "#FAF5F0",
        blush:"#edb9bb",
        plum:"#3b1d3b",
        plum2:"#5c2d5c",
        lbrown:"#a76149",
      },
      fontFamily: {
        script:  ['"Amalfi Coast"', 'serif'],           // couple names, hero text
        elegant: ['"Champagne Limousines"', 'sans-serif'],   // headings, labels
        heading: ['"Cormorant Garamond"', 'serif'],     // subheadings, quotes
        body:    ['Jost', 'sans-serif'],                // body text, UI
      },
    }
  },
  plugins: [],
}