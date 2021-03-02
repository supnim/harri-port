import React from "react";
import { graphql, StaticQuery } from "gatsby";
import SEO from "../components/seo";
import "../utils/css/screen.css";
import Layout from "../components/layout";
import VideoBox from "../components/videoBox";
import path from "../components/videoPaths.js";

// import ToolTip from "../components/toolTip"

const Video = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const videoUrl = path.map(video => (
    <VideoBox
      style={{
        backgroundColor: "whitesmoke",
        border: "8px solid black",
        boxShadow: "inset 0px 0px 0px 16px black",
        boxSizing: "border-box"
      }}
      description={video.description}
      url={video.url}
      id={video.id}
    />
  ));
  return (
    <div className="video-page">
      <Layout title={siteTitle}>
        <SEO
          title="videography"
          keywords={[`videography`, `film`, `director`, `editor`]}
        />
        <h3>videography</h3>
        <p style={{ paddingBottom: "8rem" }}>
          My second love - showed me the power of good storytelling.
          <br />
          Taught me; narration, sound-design, composition, tempo and much more.
          <br />
          <br />
          <div
            style={{
              backgroundColor: "#f4f4f4",
              color: "black",
              margin: "0 20%",
              borderRadius: "2px"
            }}
          >
            <p style={{ fontSize: "1.4rem" }}>
              some of the videos have copyright music and therefore won't play
              on-site; <br />
              <b className="">click the title beneath to go to youtube :)</b>
            </p>
          </div>
          {/* <div className="tooltip" style={{ width: "320px", margin: "0 auto" }}>
						<ToolTip toolTipText="some of the videos have copyright music and therefore won't play on-site; click the title beneath to go to youtube :)">
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle
									cx="10"
									cy="10"
									r="9"
									stroke="white"
									stroke-width="2"
									stroke-linejoin="round"
								/>
								<path d="M11.25 7.5V17.5H8.75V7.5H11.25Z" fill="white" />
								<circle cx="10" cy="5" r="1.25" fill="white" />
							</svg>
						</ToolTip>
					</div> */}
        </p>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>{videoUrl}</div>
      </Layout>
    </div>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => <Video location={props.location} data={data} {...props} />}
  />
);
