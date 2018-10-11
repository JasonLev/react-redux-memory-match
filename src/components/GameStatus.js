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
    if (this.props.gameActive) {
      this.props.pauseGame();
    } else if (this.props.gameStarted) {
      this.props.resumeGame();
    } else {
      this.props.startGame();
    }
  }
  render() {
    return (
      <div>
        <Button handleClick={this.changeGame}
                gameStarted={this.props.gameStarted}
                gameActive={this.props.gameActive} />
        <Button handleReset={this.toggleReset} resetBtn={true} />
        <Timer initTime={0}
               gameActive={this.props.gameActive}
               reset={this.state.reset}
               toggleReset={this.toggleReset} />
      </div>
    );
  }
}

export default GameStatus;
