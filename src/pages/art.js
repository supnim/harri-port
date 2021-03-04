import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import Gallery from "../components/gallery"

const Photo = () => {
	const siteTitle = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<div className="hub-page">
			<Layout title={siteTitle}>
				<SEO
					title="art"
					keywords={[`photography`, `nightlife`, `fashion`, `band`, `supnim`]}
				/>
				<header
					style={{
						padding: "8rem 4rem 2rem 4rem",
					}}
				>
					<h1>/art</h1>
					<p style={{ maxWidth: "380px" }}>
						my first collection, the twisted ideas of beauty in the modern light
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in diam
						at interdum et. Amet tempor faucibus aenean magna. Ultricies sed
						eget iaculis aliquet mauris dolor. Sagittis et tempus semper
						porttitor ut at dui magna cursus. Venenatis et eget facilisis nisi.
					</p>
				</header>
				<section>
					<Gallery />
				</section>
			</Layout>
		</div>
	)
}

export default Photo
