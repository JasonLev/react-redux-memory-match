import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import GameStatus from './components/GameStatus';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: false,
      started: false
    }
    this.startGame = this.startGame.bind(this);
    this.resumeGame = this.resumeGame.bind(this);
    this.pauseGame = this.pauseGame.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }
  startGame(){
    this.setState({
      active: true,
      started: true
    })
  }
  resumeGame(){
    this.setState({
      active: true
    })
  }
  pauseGame(){
    this.setState({
      active: false
    })
  }
  resetGame(){
    this.setState({
      active: false,
      started: false
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Match Game</h1>
          <GameStatus startGame={this.startGame}
                      pauseGame={this.pauseGame}
                      resumeGame={this.resumeGame}
                      resetGame={this.resetGame}
                      gameStarted={this.state.started}
                      gameActive={this.state.active} />
        </header>
        <Board gameActive={this.state.active} gameStarted={this.state.started} />
      </div>
    );
  }
}

export default App;
