import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, useStaticQuery } from "gatsby";
import "../../src/utils/css/project.scss";
import Img from "gatsby-image";

const Words = () => {
  const siteTitle = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      steps: file(relativePath: { eq: "thumbnails/writting/steps.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div className="audio-page">
      <Layout title={siteTitle}>
        <SEO
          title="discography"
          keywords={[`discography`, `music`, `producer`, `N1M`]}
        />
        <h3>writting</h3>
        <p style={{ paddingBottom: "8rem" }}>
          Practicing my hand at creating some design related content, earlier
          stages so keep that in mind.
        </p>
        <div className="discography row">
          <a href="https://www.notion.so/Process-0eec3b01c9a64cd192e219a8aa5583c3">
            <div style={{ width: "80vh" }}>
              <Img fluid={siteTitle.steps.childImageSharp.fluid} />
              <p style={{ color: "white", fontSize: "18px" }}>
                case study: tes.com redesign
              </p>
            </div>
          </a>
        </div>
        <div>
          <h4
            style={{
              color: "grey",
              textAlign: "center",
              padding: "18rem 0",
              margin: "0"
            }}
          >
            More soon...
          </h4>
        </div>
      </Layout>
    </div>
  );
};

export default Words;
