import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import DarkLayout from "../components/layout/DarkLayout";
import SEO from "../components/seo/seo";
import { PWD, GridTwo } from "../components/grid/grid";

import aboutStyles from "./pages.module.scss";
import "../styles/pages.scss";

const AboutPage = (props) => {
  return (
    <DarkLayout>
      <SEO title="About" />
      <PWD>
        <GridTwo>
          <div className="small about-block">
            <h4 className={aboutStyles.darkHeader}>About Me</h4>
            <p>Hello! I'm Alan, a designer based in San Francisco. My capabilities include art direction, design systems, UX research, motion design and front end development.</p>
            <p>I'm passionate about integrating technology with real world applications to better enrich and serve our lives.</p>
            <p>When I'm not designing, I'm ripping down mountains on my snowboard, making a mess in the kitchen and taking photos with my camera.</p>
          </div>
          <Img fluid={props.data.about4.childImageSharp.fluid} className="small left" alt="Steph Curry Photobomb" />
          <Img fluid={props.data.about2.childImageSharp.fluid} className="small" alt="Snowboarding Selfie" />
          <Img fluid={props.data.about1.childImageSharp.fluid} className="small right" alt="Color Factory Design Team Bonding" />
          <Img fluid={props.data.about3.childImageSharp.fluid} className="small right" alt="Sony Birthday Initiation" />
        </GridTwo>
      </PWD>
    </DarkLayout>
  )
}

export default AboutPage

export const query = graphql`
  query {
    about1: file(relativePath: { eq: "about1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    about2: file(relativePath: { eq: "about2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    about3: file(relativePath: { eq: "about3.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    about4: file(relativePath: { eq: "about4.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`