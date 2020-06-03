import React from 'react'

class Games extends React.Component {
  constructor(props){
        super(props);
        this.state = { open: false };
  }
  toggle() {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    return (
      <div className="games">
				<div class="game-box">
					<div class="game-feature">
						{<img src={this.props.image} class="poster" height="150px" />}
					</div>
					<div class="game-info">
						<h2>{this.props.gameTitle}</h2>
            <p>{this.props.gameDesc}</p>
						<a href={this.props.gameUrl}>
							<img alt='Game Platform' src={this.props.gamePlatform} height='50px' />
            </a>
					</div>
				</div>
      </div>
      /**<div className="games2" onClick={this.toggle.bind(this)} style={{ cursor: "pointer" }}>
        <div className="gamebox">
          <img src={this.props.image} class="poster2" />
          <h2>{this.props.gameTitle}</h2>
          <h5>{this.props.gamePlatform}</h5>
        </div>
        <div id="demo" className={"collapse" + (this.state.open ? ' in' : '')}>
          <div>

              Anim pariatur cliche reprehenderit.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to make a type specimen book.
               It has survived not only five centuries, but also the leap into electronic typesetting,
               remaining essentially unchanged.
               It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
               and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          </div>
        </div>
      </div>**/
    );
  }
}

export default Games;
