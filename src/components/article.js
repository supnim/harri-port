import React from "react"
import "../utils/css/components/card.scss"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Card = ({ label, image, title, description }) => {
	return (
		<div>
			<div className="col-6">
				{image && <Img className="img" fluid={image} />}
			</div>
			<div
				className="content col-6"
				style={{ display: "flex", flexDirection: "column" }}
			>
				<p style={{ color: "#666", margin: "0" }}>
					<b>{label}</b>
				</p>
				<p className="titleAlt">{title}</p>
				<p className="paragraphAlt">{description}</p>
				<Link to="/" style={{ textAlign: "right", fontStyle: "italic" }}>
					/continue reading
				</Link>
			</div>
		</div>
	)
}
export default Card
