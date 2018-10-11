import React, { Component } from 'react';
import Timer from './Timer';
import Button from './Button';

class GameStatus extends Component {
  constructor(props){
    super(props);
    this.state = {
      reset: false,
    }
    this.toggleReset = this.toggleReset.bind(this);
    this.changeGame = this.changeGame.bind(this);
  }
  toggleReset(){
    this.setState({
      reset: !this.state.reset
    });
    this.props.resetGame();
  }
  changeGame(){
    if (this.props.gameStage === "started" || this.props.gameStage === "active") {
      this.props.pauseGame();
    } else if (this.props.gameStage === "paused") {
      this.props.resumeGame();
    } else {
      this.props.startGame();
    }
  }
  render() {
    return (
      <div>
        <Button handleClick={this.changeGame}
                gameStage={this.props.gameStage} />
        <Button handleReset={this.toggleReset} resetBtn={true} />
        <Timer initTime={0}
               gameStage={this.props.gameStage}
               reset={this.state.reset}
               toggleReset={this.toggleReset} />
      </div>
    );
  }
}

export default GameStatus;
