import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"

const FourContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100% - 3rem);
    position: fixed;
    top: 0;
    left: 0;

    p {
        max-width: calc(var(--main-content-width) / 1.5);
    }
`
const NotFoundPage = () => (
    <Layout>
        <SEO title="Nº 404" />
        <FourContent>
            <p>
                “I don’t even have a hunch about the Nº 404 fascination. And
                frankly I don’t give a damn. The sort of creativity that goes
                into Nº 404 response pages is fairly useless. The mythology is
                probably due to the irrationality, denial of evidence, and
                preference for the fairy tale over reality, [&hellip;]
                relatively innocent in the past, when individual influence was
                small and information spread slowly. Today, and in no small way
                due to the existence of the •••, these traits have gained a
                power that is dangerous.” — Robert Cailliau
            </p>
        </FourContent>
    </Layout>
)

export default NotFoundPage
