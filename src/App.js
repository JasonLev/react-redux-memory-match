import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import GameStatus from './components/GameStatus';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      stage: null
    }
    this.startGame = this.startGame.bind(this);
    this.resumeGame = this.resumeGame.bind(this);
    this.pauseGame = this.pauseGame.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.finishGame = this.finishGame.bind(this);
  }
  startGame(){
    this.setState({
      stage: "started"
    })
  }
  resumeGame(){
    this.setState({
      stage: "active"
    })
  }
  pauseGame(){
    this.setState({
      stage: "paused"
    })
  }
  resetGame(){
    this.setState({
      stage: null
    })
  }
  finishGame(){
    this.setState({
      stage: "finished"
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
                      gameStage={this.state.stage} />
        </header>
        <Board gameStage={this.state.stage} />
      </div>
    );
  }
}

export default App;
