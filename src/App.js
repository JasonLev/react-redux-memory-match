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
    this.handleStart = this.handleStart.bind(this);
  }
  handleStart(){
    this.setState({
      active: true
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Match Game</h1>
        </header>
        <GameStatus startGame={this.handleStart}/>
        <Board />
      </div>
    );
  }
}

export default App;
