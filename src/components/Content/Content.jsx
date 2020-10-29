import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

const ContentBox = styled(motion.div)`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    font-family: var(--main-serif-font);
    font-size: 1.5rem;
    width: 100%;
    height: 100%;

    position: fixed;
    top: 0;
    left: 0;

    > div {
        display: flex;
        align-items: center;
        flex-direction: column;
        overflow: auto;
        max-height: 100%;
        padding: 3rem 1rem 8rem;
        width: 100%;
    }

    > div > p,
    > div > div {
        max-width: var(--main-content-width);
        width: 100%;
    }

    > div > p {
        margin: 0 0 1.5rem;
    }

    ul,
    ol {
        padding: 0;
        margin: 0 1.7rem;
    }
    li {
        padding: 0 0 0 1rem;
        margin: 0;
    }

    .video-full {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: calc(100% - 3rem);
        object-fit: contain;
    }
`

export default ({ children }) => (
    <ContentBox
        variants={{
            hidden: { opacity: 0 },
            show: {
                opacity: 1,
                transition: {
                    duration: 1,
                    ease: "easeIn",
                },
            },
        }}
        initial="hidden"
        animate="show"
    >
        <div dangerouslySetInnerHTML={{ __html: children }} />
    </ContentBox>
)
