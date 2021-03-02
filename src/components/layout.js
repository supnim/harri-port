import React from "react"
import { Link } from "gatsby"
import Logo from "../../content/assets/supnimLogo.svg"
import scrollTo from "gatsby-plugin-smoothscroll"
import useSound from "use-sound"
import Switch from "../../content/assets/sounds/switch.mp3"
import Pop from "../../content/assets/sounds/pop.mp3"

const Layout = (props) => {
	const { children } = props
	const [toggleNav, setToggleNav] = React.useState(false)
	const [play] = useSound(Switch)
	const [close] = useSound(Pop)

	return (
		<div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
			<header className="site-head">
				<div className="site-head-container">
					<a
						className="nav-burger"
						href={`#`}
						onClick={() => setToggleNav(!toggleNav)}
					>
						<div
							onClick={play}
							className="hamburger hamburger--collapse"
							aria-label="nav"
							aria-controls="navigation"
						>
							<div className="hamburger-box">
								<div className="hamburger-inner" />
							</div>
						</div>
					</a>
					<nav className="site-head-left">
						<Link
							onClick={play}
							className="site-head-logo"
							aria-label="supnim logo"
							to={`/`}
						>
							<Logo />
						</Link>
					</nav>
					<div className="site-head-right" role="menu">
						<ul className="nav" aria-label="menu">
							<li>
								<Link to={`/photo`}>art</Link>
							</li>
							<li>
								<Link to={`/video`}>video</Link>
							</li>
							<li>
								<Link to={`/words`}>words</Link>
							</li>
							<li>
								<Link to={`/contact`}>contact</Link>
							</li>
						</ul>
					</div>
				</div>
			</header>
			<main id="site-main" className="site-main">
				<div>{children}</div>
			</main>
			<footer className="site-foot">
				<div className="footer-text">
					<div className="footer-links">
						<a href="/amazon">amazon</a>
						<p>•</p>
						<a href="/tes">tes</a>
						<p>•</p>
						<a href="/bookwise">bookwise</a>
						<p>•</p>
						<a href="/design-system">design system</a>
						<p>•</p>
						<a href="/knowhere">knowhere</a>
						<p>•</p>
						<a href="/one-card">onecard</a>
						<p>•</p>
						<a href="/pagebuilder">pagebuilder</a>
						<p>•</p>
						<a href="/primefitness">primefitness</a>
					</div>
					<div title="using ReactJS">
						<a></a>
						&copy; {new Date().getFullYear()} &mdash;{" "}
						<a style={{ color: "black" }} href="https://github.com/supnim">
							handmade{" "}
						</a>{" "}
						with {" ♥︎ "}
					</div>
				</div>
				<div className="footer-buttons">
					<div className="actions fit">
						<a
							onClick={play}
							href="https://www.dropbox.com/s/imn8mlg31tb2wig/Nimesh_CV.pdf?dl=0"
							target="_blank"
							rel="noopener noreferrer"
							className="cv button large primary"
						>
							CV
						</a>
						<a
							onClick={close}
							href="mailto:hello@supnim.com"
							className="button large footer"
						>
							Get in touch
						</a>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Layout
