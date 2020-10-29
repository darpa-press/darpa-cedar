import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Content from "../components/Content/Content"

const IndexPage = ({
    data: {
        file: {
            name,
            childMarkdownRemark: {
                frontmatter: { title, author },
                html,
            },
        },
    },
}) => (
    <>
        <SEO title={`Darpa–Cedar ${name}`} />
        <Layout number={name} title={title} author={author}>
            <Content>{html}</Content>
        </Layout>
    </>
)

export default IndexPage

export const pageQuery = graphql`
    query($name: String!) {
        file(name: { eq: $name }) {
            name
            childMarkdownRemark {
                frontmatter {
                    title
                    author
                }
                html
            }
        }
    }
`
