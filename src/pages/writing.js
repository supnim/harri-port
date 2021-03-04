import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import "../../src/utils/css/project.scss"
import Article from "../components/article"

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
	`)
	return (
		<div className="hub-page">
			<Layout title={siteTitle}>
				<SEO
					title="writing"
					keywords={[`writing`, `literature`, `essays`, `research`]}
				/>
				<header
					style={{
						padding: "8rem 4rem 2rem 4rem",
					}}
				>
					<h1>/writting</h1>
				</header>
				<section>
					<Article
						title="title goes here"
						byline="byline"
						description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
					/>
					<Article
						label="label"
						title="title goes here"
						byline="byline"
						description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
					/>
					<div>
						<h4
							style={{
								color: "black",
								textAlign: "center",
								padding: "18rem 0",
								margin: "0",
							}}
						>
							More soon...
						</h4>
					</div>
				</section>
			</Layout>
		</div>
	)
}

export default Words
