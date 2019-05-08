require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Raben Glass`,
    description: `SEO description here.`,
    author: `@ovsw`,
    siteNav: [
      {
        title: 'Home',
        link: '/',
        children: [{ title: 'empty', url: '/' }],
      },
      {
        title: 'Residential',
        link: '/residential',
        children: [
          {
            title: 'Window Replacement',
            link: '/residential/single-dual-pane-window-replacement',
          },
          {
            title: 'Window Glass Repair',
            link: '/residential/window-glass-repair',
          },
          {
            title: 'Glass Tabletops',
            link: '/residential/glass-tabletops',
          },
          {
            title: 'Custom Mirrors',
            link: '/residential/custom-mirrors',
          },
          {
            title: 'Shower Enclosures',
            link: '/residential/shower-enclosures',
          },
        ],
      },
      {
        title: 'Commercial',
        link: '/commercial',
        children: [
          {
            title: 'Storefront Metal and Glass',
            link: '/commercial/storefront-metal-and-glass',
          },
          {
            title: 'Window/Doors Glass Replacement',
            link: '/commercial/window-doors-glass-replacement',
          },
          {
            title: 'Custom Glass Tabletops',
            link: '/commercial/custom-glass-tabletops',
          },
          {
            title: '1/2" Glass Walls & Entrances',
            link: '/commercial/half-inch-glass-walls-and-entrances',
          },
          {
            title: 'Commercial Doors',
            link: '/commercial/commercial-doors',
          },
          {
            title: 'Multi-Slide Doors / Partitions',
            link: '/commercial/multi-slide-doors-partitions',
          },
          {
            title: 'Closure / Hardware Replacement',
            link: '/commercial/closure-hardware-replacement',
          },
        ],
      },
      {
        title: 'Auto Glass',
        link: '/auto',
        children: [{ title: 'empty', url: '/' }],
      },
      {
        title: 'Reviews',
        link: '/reviews',
        children: [{ title: 'empty', url: '/' }],
      },
      {
        title: 'Blog',
        link: '/news',
        children: [{ title: 'empty', url: '/' }],
      },
      {
        title: 'Contact',
        link: '/contact',
        children: [{ title: 'empty', url: '/' }],
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        previewMode: true,
        disableLiveReload: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-tailwindcss`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
        purgeOnly: ['src/components/layout.css'],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
