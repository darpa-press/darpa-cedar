import React, { useState } from "react"
import useTimeout from "use-timeout"
import useCurrentPiece from "../components/useCurrentPiece/useCurrentPiece"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Content from "../components/Content/Content"

const IndexPage = () => {
    const {
        name: number,
        childMarkdownRemark: {
            frontmatter: { title, author },
            html,
        },
    } = useCurrentPiece()

    const [loaded, setLoaded] = useState(0)
    useTimeout(() => setLoaded(loaded => loaded + 1), 100)

    return (
        <>
            <SEO title={`Darpa–Cedar ${loaded ? number : ""}`} />
            <Layout
                number={loaded ? number : ""}
                title={loaded ? title : ""}
                author={loaded ? author : ""}
            >
                <Content>{loaded > 0 ? html : ""}</Content>
            </Layout>
        </>
    )
}

export default IndexPage
