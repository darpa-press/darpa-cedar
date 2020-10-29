import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Time from "../components/Time/Time"
import AboutText from "../components/AboutText/AboutText"

import cal from "calendrier-republicain"
import capitalize from "capitalize"

const TimeBar = styled(motion.div)`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
`

const TimeBox = styled(motion.div)`
    padding: 0.85rem 1rem;
    user-select: none;
`

const DayBox = styled(motion.div)`
    padding: 0.85rem 1rem;
    user-select: none;
    text-align: right;
`

const main = {
    visible: {
        transition: {
            duration: 0,
            when: "beforeChildren",
            staggerChildren: 0.3,
        },
    },
}

const list = {
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeIn",
        },
    },
    hidden: {
        opacity: 0,
    },
}

const item = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
            type: "spring",
            damping: 100,
            stiffness: 100,
        },
    },
    hidden: {
        opacity: 0,
        y: -100,
    },
}

const AboutPage = () => {
    const date = new Date()
    const day = capitalize(cal.dayOfYearNameEn(date))
    const [isHovering, setIsHovering] = useState(false)

    return (
        <>
            <SEO title="Darpa–Cedar ?" />
            <Layout isShowingAbout={true}>
                <TimeBar initial="hidden" animate="visible" variants={main}>
                    <TimeBox
                        variants={item}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        {!isHovering ? (
                            <>
                                The time is <Time />
                            </>
                        ) : (
                            <>
                                Something else in <Time showTimeToGo={true} />
                            </>
                        )}
                    </TimeBox>
                    <DayBox variants={item}>and today is {day}</DayBox>
                </TimeBar>
                <motion.div initial="hidden" animate="visible" variants={list}>
                    <AboutText />
                </motion.div>
            </Layout>
        </>
    )
}

export default AboutPage
