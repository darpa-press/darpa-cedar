import { useStaticQuery, graphql } from "gatsby"
import { getCurrentPieceNumber } from "../../helpers/getCurrentPieceNumber"

export default () => {
    const {
        allFile: { nodes },
    } = useStaticQuery(graphql`
        query CountQuery {
            allFile(
                limit: 1000
                filter: { sourceInstanceName: { eq: "texts" } }
            ) {
                nodes {
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
        }
    `)
    const totalPieces = parseInt(nodes.length)
    const pieceToGet = getCurrentPieceNumber(totalPieces)
    const filename = pieceToGet.toString().padStart(3, "0")
    const piece = nodes.filter(node => node.name === filename)[0]
    return piece
}
