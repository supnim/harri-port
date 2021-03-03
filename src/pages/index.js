// Base
import React from "react"
import { graphql, StaticQuery } from "gatsby"
import "../utils/normalize.css"
import "../utils/css/screen.css"

// Skelton
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard" // article card
import { Link } from "gatsby"

// Component + theme
import "../utils/css/components/theme.scss"

//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const Index = ({ data }, location) => {
	const siteTitle = data.site.siteMetadata.title

	const posts = data.allMarkdownRemark.edges
	let postCounter = 0

	return (
		<Layout title={siteTitle}>
			<SEO
				title="Product Designer"
				keywords={[`product`, `designer`, `london`, `nimesh`, `reghunandanan`]}
			/>
			<header
				className="page-head"
				style={{
					display: "flex",
					flexDirection: "row",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						width: "100%",
						height: "100%",
						justifyContent: "space-between",
					}}
				>
					<div>
						<h1 className="page-head-title">Harriet</h1>
						<h2 className="page-head-sub">Product Manager</h2>
					</div>
					<div style={{ paddingRight: "2rem" }}>
						<p
							className="page-head-sub"
							style={{
								fontSize: "2rem",
								margin: "0",
							}}
						>
							About me
						</p>
						<p>
							background in tech, currently in product management and my hearts
							in art. click around and see whats what.
						</p>
					</div>
				</div>
				<div
					style={{
						backgroundColor: "white",
						width: "100%",
						height: "100%",
					}}
				></div>
			</header>

			<section>
				<div className="post-feed">
					{posts.map(({ node }) => {
						postCounter++
						return (
							<PostCard
								key={node.fields.slug}
								count={postCounter}
								node={node}
								postClass={`post`}
							/>
						)
					})}
				</div>
			</section>
		</Layout>
	)
}

const indexQuery = graphql`
	query {
		site {
			siteMetadata {
				title
				description
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						description
						thumbnail {
							childImageSharp {
								fluid(maxWidth: 1360) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
	}
`

export default (props) => (
	<StaticQuery
		query={indexQuery}
		render={(data) => (
			<Index location={props.location} props data={data} {...props} />
		)}
	/>
)
