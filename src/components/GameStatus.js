import React, { Component } from 'react';
import Timer from './Timer';
import Button from './Button';


class GameStatus extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <Button handleClick={this.props.startGame}/>
        <Timer />
      </div>
    );
  }
}

export default GameStatus;
