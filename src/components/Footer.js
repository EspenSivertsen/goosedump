import React from 'react'

export class Footer extends React.Component {
  render() {
    return (
      <div id="footer">

			<div className="footer-wrap">
				<ul class="footer-navbar">
					<a href="index.html#games"><li title="Blog">Blog</li></a>
					<a href="index.html#games"><li title="Contact">Contact</li></a>
					<a href="index.html#games"><li title="Games">Espen</li></a>
				</ul>
			</div>
			<div class="footer-wrap">
				<ul class="footer-navbar">
					<a href="#" class="social-icons github">
						<li title="@">&#64;</li>
					</a>
					<a href="#" class="social-icons twitter">
						<li title="@">&#64;</li>
					</a>
					<a href="#" class="social-icons youtube">
						<li title="@">&#64;</li>
					</a>
				</ul>
			</div>

		</div>
    );
  }
}

export default Footer;
