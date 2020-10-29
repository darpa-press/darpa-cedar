module.exports = {
    siteMetadata: {
        title: `Darpa–Cedar`,
        description: `An anthology of lost causes`,
        author: `@darpa-press`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {},
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `texts`,
                path: `${__dirname}/src/texts/`,
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `darpa-cedar`,
                short_name: `darpa-cedar`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#333333`,
                display: `minimal-ui`,
                icon: `src/images/blank-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
                typekit: {
                    id: "tpa1she",
                },
            },
        },
    ],
}
