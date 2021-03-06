import React from "react"
import { Link } from "gatsby"
import Logo from "../../content/assets/logo.svg"
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
