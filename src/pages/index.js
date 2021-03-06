import React from "react"
import { graphql, StaticQuery } from "gatsby"
import "../utils/normalize.css"
import "../utils/css/screen.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import "../utils/css/components/theme.css"
import PostCard from "../components/postCard" // article card

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
						textAlign: "right",
						padding: "4rem",
					}}
				>
					<div>
						<h1 className="page-head-title">Harriet F. New</h1>
					</div>
					<div>
						<Link
							to="/"
							style={{
								fontSize: "3rem",
							}}
						>
							research/
						</Link>
						<br />
						<Link
							to="/"
							style={{
								fontSize: "3rem",
							}}
						>
							product/
						</Link>
						<br />
						<Link
							to="/writing"
							style={{
								fontSize: "3rem",
							}}
						>
							writing/
						</Link>
						<br />
						<Link
							to="/art"
							style={{
								fontSize: "3rem",
							}}
						>
							art/
						</Link>
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
