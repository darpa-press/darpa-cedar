/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import SiteStyle from "../SiteStyle/SiteStyle"
import Toolbar from "../Toolbar/Toolbar"

// import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children, title, author, number, isShowingAbout }) => {
    return (
        <>
            <SiteStyle />
            {children}
            <Toolbar
                isShowingAbout={isShowingAbout}
                title={title}
                author={author}
                number={number}
            />
        </>
    )
}

export default Layout
