import React, { Component } from 'react';
import Timer from './Timer';
import Button from './Button';
import ResetButton from './ResetButton';


class GameStatus extends Component {
  constructor(props){
    super(props);
    this.state = {
      reset: false,
    }
    this.toggleReset = this.toggleReset.bind(this);
    this.toggleGame = this.toggleGame.bind(this);
  }
  toggleReset(){
    this.setState({
      reset: !this.state.reset
    });
    this.props.stopGame();
  }
  toggleGame(){
    if (this.props.gameActive) {
      this.props.stopGame();
    } else {
      this.props.startGame();
    }
  }
  render() {
    return (
      <div>
        <Button handleClick={this.toggleGame} gameActive={this.props.gameActive} />
        <ResetButton handleReset={this.toggleReset}  />
        <Timer initTime={0}
               gameActive={this.props.gameActive}
               reset={this.state.reset}
               toggleReset={this.toggleReset} />
      </div>
    );
  }
}

export default GameStatus;
