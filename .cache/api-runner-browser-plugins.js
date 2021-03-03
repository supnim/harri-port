module.exports = [
  {
    plugin: require("../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js"),
    options: {
      plugins: [],
      trackingId: "G-V3FKP51EL9",
      head: false,
      anonymize: false,
      respectDNT: false,
      exclude: [],
      pageTransitionDelay: 0
    }
  },
  {
    plugin: require("../node_modules/gatsby-plugin-manifest/gatsby-browser.js"),
    options: {
      plugins: [],
      name: "Nimesh",
      short_name: "Nimesh",
      start_url: "/",
      background_color: "#ffffff",
      theme_color: "#663399",
      display: "minimal-ui",
      icon: "content/assets/sup.png",
      legacy: true,
      theme_color_in_head: true,
      cache_busting_mode: "query",
      crossOrigin: "anonymous",
      include_favicon: true,
      cacheDigest: "7171e8fe2e0d39602229ccfe893e9db4"
    }
  },
  {
    plugin: require("../node_modules/gatsby-plugin-offline/gatsby-browser.js"),
    options: { plugins: [] }
  },
  {
    plugin: require("../node_modules/gatsby-plugin-smoothscroll/gatsby-browser.js"),
    options: { plugins: [] }
  },
  {
    plugin: require("../gatsby-browser.js"),
    options: { plugins: [] }
  }
];
