import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import LogoBox from "../components//logobox";

import "../utils/normalize.css";
import "../utils/css/screen.css";

import Skill from "../../content/assets/skill.svg";

const Contact = () => {
  const image = useStaticQuery(graphql`
    query {
      profilePic: file(relativePath: { eq: "profilePic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
      amazon: file(relativePath: { eq: "thumbnails/logos/amazon.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      swisscom: file(relativePath: { eq: "thumbnails/logos/swisscom.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      tes: file(relativePath: { eq: "thumbnails/logos/tes.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      virgin: file(relativePath: { eq: "thumbnails/logos/virgin.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const siteTitle = image.site.siteMetadata.title;

  return (
    <div
      style={{ color: "white", backgroundColor: " black" }}
      className="contactBox"
    >
      <Layout title={siteTitle}>
        <SEO
          title="contact"
          keywords={[`product`, `designer`, `london`, `nimesh`]}
        />

        <article className="page-template">
          <div className="post-content-body row contact">
            <div className="contactImg col-6">
              <Img
                className="aboutMePic"
                fluid={image.profilePic.childImageSharp.fluid}
              />
            </div>
            <div className="aboutMe col-6">
              <h3 className="aboutMeTitle">hi, i am nimesh</h3>
              <p>
                A creative and driven individual who enjoys developing
                user-focused products from concept through to completion.
                Empathy, understanding and learning is at the heart of
                everything I do and I am passionate about championing the user
                when solving design problems.
              </p>
              <p>
                Highly proficient in UX, UI, product design, interaction design,
                user research, AB testing, web development, video creation and
                branding, I have led and collaborated on projects for global
                brands such as Amazon, Swisscom and Virgin Money. In my current
                role as Product Designer at the global education company,{" "}
                <a href="https://www.tes.com">Tes</a>, I have developed new user
                experience architecture across the platform; helped develop and
                define the product direction through user research,
                experimentation and testing; and established the design
                direction for the new Tes brand.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <Skill width="400px" />
                <br />
              </div>
              <p>
                In my downtime I play with different mediums, including music,
                still and motion pictures, and the design and development of
                websites. Based in London, I was born in Kuwait and brought up
                in Kerala, India. I studied Interactive Media Designer (IMD) at
                Northumbria University in Newcastle.
              </p>
              <span className="contactSpan">––––––––––––––––––––––</span>
              <p>
                Hope you have enjoyed looking through my work. If you'd like to
                discuss new projects or opportunities; get in touch or find me
                on <a href="https://www.linkedin.com/in/nimeshnr">linkedin.</a>{" "}
              </p>
            </div>
          </div>
        </article>
        <article
          style={{
            alignItems: "center",
            textAlign: "center",
            padding: "0 4rem"
          }}
        >
          <h6>worked with</h6>
          <LogoBox
            one={image.amazon.childImageSharp.fixed}
            oneAlt="Amazon"
            two={image.swisscom.childImageSharp.fixed}
            twoAlt="Swisscom"
            three={image.tes.childImageSharp.fixed}
            threeAlt="Tes Global"
            four={image.virgin.childImageSharp.fixed}
            fourAlt="Virgin Money"
            five=" "
            fiveAlt=" "
          />
        </article>
      </Layout>
    </div>
  );
};

export default Contact;
