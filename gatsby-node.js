const path = require(`path`)

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    // const basicPagetemplate = path.resolve(`./src/templates/aboutPage.js`)
    const serviceResidentialTemplate = path.resolve(`./src/templates/serviceResidential.js`)
    const serviceCommercialTemplate = path.resolve(`./src/templates/serviceCommercial.js`)
    const basicPageTemplate = path.resolve(`./src/templates/basicPage.js`)
    const newsArticletemplate = path.resolve(`./src/templates/newsArticle.js`)

    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(`
        {
          allDatoCmsNewsArticle {
            edges {
              node {
                slug
              }
            }
          }
          allDatoCmsServiceResidential {
            edges {
              node {
                slug
              }
            }
          }
          allDatoCmsServiceCommercial {
            edges {
              node {
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // result.data.allDatoCmsAboutPage.edges.forEach(({ node: page }) => {
        //   createPage({
        //     path: page.slug,
        //     component: basicPagetemplate,
        //     context: {
        //       slug: page.slug,
        //     },
        //   })
        // })

        result.data.allDatoCmsNewsArticle.edges.forEach(({ node: page }) => {
          createPage({
            path: `news/${page.slug}`,
            component: newsArticletemplate,
            context: {
              slug: page.slug,
            },
          })
        })

        result.data.allDatoCmsServiceResidential.edges.forEach(({ node: page }) => {
          createPage({
            path: `residential/${page.slug}`,
            component: serviceResidentialTemplate,
            context: {
              slug: page.slug,
            },
          })
        })

        result.data.allDatoCmsServiceCommercial.edges.forEach(({ node: page }) => {
          createPage({
            path: `commercial/${page.slug}`,
            component: serviceCommercialTemplate,
            context: {
              slug: page.slug,
            },
          })
        })
      })
    )
  })
}
