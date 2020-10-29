import React from "react"
import styled from "styled-components"

import useMousePosition from "@react-hook/mouse-position"
import { useWindowWidth } from "@react-hook/window-size"

const CIRCLE_RADIUS = 160

const AboutFixedContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
`

const AboutContainer = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    overflow: auto;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1rem;
    user-select: none;
    z-index: -3;
`

const AboutTextContainer = styled.div`
    font-family: "1890";
    font-variant-ligatures: none;
    max-width: 50rem;
    width: 100%;
    font-size: ${props => (props.isLargeSize ? "2.375rem" : "1.6rem")};
    line-height: 1;
    text-align: center;
    p {
        margin: 0 0 1.1875rem;
    }
    /*br {
        ${props => (props.isLargeSize ? "" : "display: none")};
    }*/
    @media screen and (max-width: 1024px) {
        br { display: none; }
    }
`

const AboutContainerOverlay = styled(AboutContainer)`
    clip-path: circle(${CIRCLE_RADIUS}px at -${CIRCLE_RADIUS * 2}px);
    z-index: -1;
    ${AboutTextContainer} {
        font-family: var(--main-sans-font);
        letter-spacing: 0.5px;
        font-size: 1.5625rem;
        line-height: 2.375rem;
        margin-top: -0.25rem;
        position: relative;
    }
`
const AboutCircle = styled.div`
    width: ${CIRCLE_RADIUS * 2}px;
    height: ${CIRCLE_RADIUS * 2}px;
    background: #fafaf9; //#f9f9f8;
    border-radius: 50%;
    position: absolute;
    left: -${CIRCLE_RADIUS * 2}px;
    top: -${CIRCLE_RADIUS * 2}px;
    z-index: -2;
`

const AboutTextContent = () => (
    <>
        <p>Darpa–Cedar</p>
        <p>
            is an anthology of proposed lost causes, published by Darpa.&nbsp;
            <br />
            New entries are added, now and then, in order to&nbsp;
            <br />
            gather all the world’s lost causes.
        </p>
        <p>
            The displayed entry changes on the decimal hour.&nbsp;
            <br />
            The colours change once daily, according to the&nbsp;
            <br />
            animals, tools, grain, pasture, trees, roots, flowers,&nbsp;
            <br />
            fruits, and minerals of the revolutionary calendar.
        </p>
        <p>
            If you’d like to receive a digest,&nbsp;
            <br />
            replace this text with your email address,&nbsp;
            <br />
            and send »
        </p>
    </>
)

const AboutText = () => {
    const width = useWindowWidth()
    const [mousePosition, ref] = useMousePosition(
        0, // enterDelay
        0, // leaveDelay
        30 // fps
    )

    const isDesktop = width >= 1024

    return (
        <AboutFixedContainer ref={ref}>
            <AboutContainer>
                <AboutTextContainer isLargeSize={isDesktop}>
                    <AboutTextContent />
                </AboutTextContainer>
            </AboutContainer>
            {isDesktop && (
                <>
                    <AboutCircle
                        style={{
                            left: mousePosition
                                ? mousePosition.x - CIRCLE_RADIUS
                                : -CIRCLE_RADIUS * 2,
                            top: mousePosition
                                ? mousePosition.y - CIRCLE_RADIUS
                                : -CIRCLE_RADIUS * 2,
                            opacity:
                                mousePosition && mousePosition.x > 0 ? 1 : 0,
                        }}
                    />
                    <AboutContainerOverlay
                        style={{
                            clipPath: `circle(${CIRCLE_RADIUS}px at ${
                                mousePosition
                                    ? `${mousePosition.x}px ${mousePosition.y}px`
                                    : `-${CIRCLE_RADIUS * 2}px`
                            })`,
                            opacity:
                                mousePosition && mousePosition.x > 0 ? 1 : 0,
                        }}
                    >
                        <AboutTextContainer isLargeSize={isDesktop}>
                            <AboutTextContent />
                        </AboutTextContainer>
                    </AboutContainerOverlay>
                </>
            )}
        </AboutFixedContainer>
    )
}

export default AboutText
