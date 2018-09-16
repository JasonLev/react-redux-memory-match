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
        <Button handleClick={this.props.toggleGame} gameActive={this.props.gameActive} />
        <Timer currentTime={0} gameActive={this.props.gameActive}/>
      </div>
    );
  }
}

export default GameStatus;
