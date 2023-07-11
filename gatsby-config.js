/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [{
  resolve: "@plasmicapp/loader-gatsby",
  options: {
    projects: [
      {
        id: "3wLrx1SLkAusmiSXseNr1R",
        token: "ytxfpYOWrHOd2dPjUMVHJQSbFkXBnrCcKfgqP6B1xUunUtmC6YF0630HTMb9Kfb4gBy3PvDEUDgrHKxIw",
      },
    ], // An array of project ids.
    preview: false,
    defaultPlasmicPage: require.resolve("./src/templates/defaultPlasmicPage.jsx"),
  },
},
{
  resolve: "gatsby-plugin-react-helmet",
}
]
}
