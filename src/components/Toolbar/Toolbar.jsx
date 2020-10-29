import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from "gatsby"

const Toolbar = styled.div`
    align-items: flex-end;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    left: 0;
    padding: 1rem;
    position: fixed;
    user-select: none;
    width: 100%;
    @media screen and (max-width: 768px) {
        background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 1) 80%,
            rgba(255, 255, 255, 0) 100%
        );
    }
`

const ToolbarContent = styled(motion.div)`
    text-transform: none;
`

const ToolbarAbout = styled.div`
    display: flex;
    justify-content: flex-end;
    text-align: right;
    flex: 1 0 8rem;
`

export default ({ isShowingAbout, author, number }) => {
    return (
        <Toolbar>
            <ToolbarContent
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    show: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.2,
                            type: "spring",
                            damping: 100,
                            stiffness: 100,
                        },
                    },
                }}
                initial="hidden"
                animate="show"
            >
                {number} {author}
            </ToolbarContent>
            <ToolbarAbout>
                <Link to={isShowingAbout ? "/" : "/about"}>Qo ? Qo ? Qo ?</Link>
            </ToolbarAbout>
        </Toolbar>
    )
}
