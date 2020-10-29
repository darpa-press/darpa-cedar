const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const lcTemplate = path.resolve(`src/templates/lcTemplate.jsx`)
    const result = await graphql(`
        {
            allFile(
                sort: { order: ASC, fields: [name] }
                filter: { sourceInstanceName: { eq: "texts" } }
                limit: 1000
            ) {
                edges {
                    node {
                        name
                    }
                }
            }
        }
    `)
    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    result.data.allFile.edges.forEach(({ node }) => {
        createPage({
            path: `secretly-view/${node.name}`,
            component: lcTemplate,
            context: {
                name: node.name,
            }, // additional data can be passed via context
        })
    })
}
