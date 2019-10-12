import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import PopNewsletter from '../components/PopNewsletter'
import Layout from '../components/Layout'
import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'
import ScrollAnimation from 'react-animate-on-scroll'
import { IoIosArrowDropdownCircle } from 'react-icons/io'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  
  <div className="outer intro media">
  
  
  
    <div
      className="full-width-image margin-top-0"
      style={{display: 'block',
	      position: 'relative',
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `bottom right`,
        width: '100%',
        backgroundSize: 'cover',
        height: '100vh',
        
      }}
    >
    
    <div style={{
          display: 'block',
          lineHeight: '1',
          flexDirection: 'column',
          padding: '2rem 0',
          position: 'relative',
          width: '100%',
          height: '100vh',
          
        }}
        className="media"
      >
      
        <ScrollAnimation animateIn="bounceInDown"  delay={1000}>
        <h1
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '4.2rem',
           position: 'relative',
//            top: '100px',
           right: '3%',
//            backgroundColor: '#ff0000',
            textAlign: 'right',  
          }}
        >
          Precision Parts
        </h1>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="bounceInRight" delay={1000}>
        <h3
          className="narrow txtshadow mobile-txt"
          style={{
           fontSize:'3rem',
           color: 'white',
           position: 'relative',
        right: '3.4%',
            textAlign: 'right', 
            paddingTop: '1rem',
          }}
        >
          Quality Manufacturing
        </h3>
        </ScrollAnimation>
        
        
        <ScrollAnimation animateIn="bounceInUp" delay={1000}>
        <h3
          className="black txtshadow mobile-txt"
          style={{
           fontSize:'2.2rem',
           color: 'white',
           position: 'relative',
		   paddingTop: '1rem',
           right: '5%',
            textAlign: 'right', 
          }}
        >
          Done right AND on time
        </h3>
        </ScrollAnimation>
        
        
        
        <ScrollAnimation animateIn="fadeIn" duration={3} delay={1000} animateOnce={false}>
        <PopNewsletter />
        </ScrollAnimation>
        
        
  
        <ScrollAnimation animateOut="fadeOut" initiallyVisible={true} animateOnce={true} animatePreScroll={false} style={{position:'absolute', width: '100%', textAlign: 'center', bottom:'14%', fontSize: '80%', color: '#fff',}}>
        <div className="scrolldown txtshadow-header">SCROLL <IoIosArrowDropdownCircle /> MORE</div></ScrollAnimation>
        
        
        </div>
      </div>
      
      
      
      
      
    
    
    <section className="section section--gradient">
      <div className="container">
     
                <Features gridItems={intro.blurbs} />

      </div>
    </section>
    
    
                      
                    
                 
                 
                
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1800, quality: 64) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 540, quality: 44) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`