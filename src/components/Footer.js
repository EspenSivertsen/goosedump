import React from 'react'
import "../styles/Footer.css";

export class Footer extends React.Component {
  render() {
    return (
      <section id="footer">

			<div className="footer-wrap">
				<ul className="footer-navbar">
					{/* <a href="index.html#games"><li title="Blog">Blog</li></a>
					<a href="mailto:goosedumpgames@gmail.com"><li title="Contact">Contact</li></a> */}
					<a href="https://espensivertsen.no" className='espen-homepage hover-effect-links'><li> Espen Sivertsen</li></a>
				</ul>
			</div>
			<div className="footer-wrap">
				<ul className="footer-navbar">
					<a href="https://github.com/EspenSivertsen" className="social-icons github">
						<li title="@ github"><span><span className="at-symbol-text hover-effect-links">&#64;</span> <span className='social-icons-text hover-effect-links'>github</span></span></li>
					</a>
					{/* <a href="https://twitter.com/Goosedump" className="social-icons twitter">
						<li title="@ twitter"><span className="atSymbol">&#64;</span> <span className="TextTwitter">twitter</span></li>
					</a> */}
					<a href="https://www.youtube.com/channel/UCD5ArqgEjbnAN4djLcJVEIA?view_as=public" className="social-icons youtube">
						<li title="@ youtube"><span><span className="at-symbol-text hover-effect-links">&#64;</span> <span className='social-icons-text hover-effect-links'>youtube</span></span></li>
					</a>
				</ul>
			</div>

		</section>
    );
  }
}

export default Footer;
