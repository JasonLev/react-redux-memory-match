import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import GameStatus from './components/GameStatus';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: false
    }
    this.startGameChange = this.startGameChange.bind(this);
    this.stopGameChange = this.stopGameChange.bind(this);
  }
  startGameChange(){
    this.setState({
      active: true
    })
  }
  stopGameChange(){
    this.setState({
      active: false
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Match Game</h1>
          <GameStatus startGame={this.startGameChange} stopGame={this.stopGameChange} gameActive={this.state.active} />
        </header>
        <Board gameActive={this.state.active} />
      </div>
    );
  }
}

export default App;
