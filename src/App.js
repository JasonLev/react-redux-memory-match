import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import GameStatus from './components/GameStatus';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      stage: null,
      currentScore: null
    }
    this.changeStage = this.changeStage.bind(this);
    this.changeScore = this.changeScore.bind(this);
  }
  changeStage(stage){
    this.setState({
      stage: stage
    })
  }
  changeScore(score){
    this.setState({
      currentScore: score
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Match Game</h1>
          <GameStatus handleStageChange={this.changeStage}
                      handleScoreChange={this.changeScore}
                      gameStage={this.state.stage} />
        </header>
        <Board gameStage={this.state.stage}
               score={this.state.currentScore}
               finish={this.changeStage} />
      </div>
    );
  }
}

export default App;
