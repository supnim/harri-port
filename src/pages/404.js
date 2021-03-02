import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Background from "../../content/assets/heros/error.svg";

class NotFoundPage extends React.Component {
  state = {
    show: false
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 3000); //runs after 5sec
  }
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const style = {
      width: "100%",
      height: "100%",
      backgroundColor: "black",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column-reverse",
      alignItems: "center",
      justifyContent: "center"
    };
    const Pop = () => {
      return (
        <div
          style={{
            borderRadius: "4px",
            border: "5px solid white",
            backgroundColor: "white"
          }}
        >
          <div
            style={{
              borderRadius: "4px",
              border: "4px solid black",
              alignContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "2rem"
            }}
          >
            <h4 style={{ margin: "2rem" }}>Shall we go home?</h4>
            <Link to={`/`}>
              <button>okay then</button>
            </Link>
          </div>
        </div>
      );
    };

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />

        <div style={style}>
          <div style={{ position: "relative" }}>
            <Background width="100vw" height="100vh" />
          </div>
          <div style={{ position: "absolute" }}>
            {this.state.show && <Pop />}
          </div>
        </div>
      </Layout>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
