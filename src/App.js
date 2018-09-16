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
    this.toggleGameChange = this.toggleGameChange.bind(this);
  }
  toggleGameChange(){
    this.setState({
      active: !this.state.active
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Match Game</h1>
        </header>
        <GameStatus toggleGame={this.toggleGameChange} gameActive={this.state.active} />
        <Board gameActive={this.state.active} />
      </div>
    );
  }
}

export default App;
