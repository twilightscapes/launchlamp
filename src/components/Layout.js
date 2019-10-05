import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
// import Gallery1 from '../components/Gallery1'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import 'typeface-francois-one'
import "../css/index.scss"
// import ScrollAnimation from 'react-animate-on-scroll'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from "gatsby"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const TemplateWrapper = ({ children }) => {
  



  const { title, description } = useSiteMetadata()
  return (
    <><div id="topofpage" name="topofpage"></div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix("/")}img/og-image.jpg`} />
      </Helmet>
      
      
      <Navbar />
  
      <main>{children}</main>

      
     <Contact />
      
      <Footer />
      </>
    
  )
}

export default TemplateWrapper





