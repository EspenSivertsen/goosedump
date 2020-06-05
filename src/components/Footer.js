import React from 'react'

export class Footer extends React.Component {
  render() {
    return (
      <div id="footer">

			<div class="footer-wrap">
				<ul class="footer-navbar">
					<a href="index.html#games"><li title="Blog">Blog</li></a>
					<a href="mailto:goosedumpgames@gmail.com"><li title="Contact">Contact</li></a>
					<a href="https://espensivertsen.me"><li title="Games">Espen</li></a>
				</ul>
			</div>
			<div class="footer-wrap">
				<ul class="footer-navbar">
					<a href="https://github.com/EspenSivertsen" class="social-icons github">
						<li title="@ github"><span class="atSymbol">&#64;</span> <span class="TextGit">git</span><span class="TextHub">hub</span></li>
					</a>
					<a href="https://twitter.com/Goosedump" class="social-icons twitter">
						<li title="@ twitter"><span class="atSymbol">&#64;</span> <span class="TextTwitter">twitter</span></li>
					</a>
					<a href="https://www.youtube.com/channel/UCD5ArqgEjbnAN4djLcJVEIA?view_as=public" class="social-icons youtube">
						<li title="@ youtube"><span class="atSymbol">&#64;</span> <span class="TextYou">you</span><span class="TextTube">tube</span></li>
					</a>
				</ul>
			</div>

		</div>
    );
  }
}

export default Footer;
