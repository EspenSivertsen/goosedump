import React from 'react'
import "./Footer.css";

export class Footer extends React.Component {
  render() {
    return (
      <div id="footer">

			<div className="footer-wrap">
				<ul className="footer-navbar">
					<a href="index.html#games"><li title="Blog">Blog</li></a>
					<a href="mailto:goosedumpgames@gmail.com"><li title="Contact">Contact</li></a>
					<a href="https://espensivertsen.me"><li title="Games">Espen</li></a>
				</ul>
			</div>
			<div className="footer-wrap">
				<ul className="footer-navbar">
					<a href="https://github.com/EspenSivertsen" className="social-icons github">
						<li title="@ github"><span className="atSymbol">&#64;</span> <span className="TextGit">git</span><span className="TextHub">hub</span></li>
					</a>
					<a href="https://twitter.com/Goosedump" className="social-icons twitter">
						<li title="@ twitter"><span className="atSymbol">&#64;</span> <span className="TextTwitter">twitter</span></li>
					</a>
					<a href="https://www.youtube.com/channel/UCD5ArqgEjbnAN4djLcJVEIA?view_as=public" className="social-icons youtube">
						<li title="@ youtube"><span className="atSymbol">&#64;</span> <span className="TextYou">you</span><span className="TextTube">tube</span></li>
					</a>
				</ul>
			</div>

		</div>
    );
  }
}

export default Footer;
