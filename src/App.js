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
    this.changeStage = this.changeStage.bind(this);
  }
  changeStage(stage){
    this.setState({
      stage: stage
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Match Game</h1>
          <GameStatus handleStageChange={this.changeStage} gameStage={this.state.stage} />
        </header>
        <Board gameStage={this.state.stage} finish={this.changeStage} />
      </div>
    );
  }
}

export default App;
