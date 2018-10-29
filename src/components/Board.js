import React, { Component } from 'react';
import Square from './Square';
import Leaderboard from './Leaderboard';
// import the images:
import ace from '../img/1_diamond.png';
import twoSpade from '../img/2_spade.png';
import fourHeart from '../img/4_heart.png';
import sevenSpade from '../img/7_spade.png';
import nineClub from '../img/9_club.png';
import jack from '../img/jack_diamond.png';
import king from '../img/king_club.png';
import queen from '../img/queen_diamond.png';

class Board extends Component {
  constructor(props){
    super(props);
    this.cardCollection = [{value: "ace", img: ace, flipped: false},
      {value: "ace", img: ace, flipped: false},
      {value: "deuce", img: twoSpade, flipped: false},
      {value: "deuce", img: twoSpade, flipped: false},
      {value: "four", img: fourHeart, flipped: false},
      {value: "four", img: fourHeart, flipped: false},
      {value: "seven", img: sevenSpade, flipped: false},
      {value: "seven", img: sevenSpade, flipped: false},
      {value: "nine", img: nineClub, flipped: false},
      {value: "nine", img: nineClub, flipped: false},
      {value: "jack", img: jack, flipped: false},
      {value: "jack", img: jack, flipped: false},
      {value: "queen", img: queen, flipped: false},
      {value: "queen", img: queen, flipped: false},
      {value: "king", img: king, flipped: false},
      {value: "king", img: king, flipped: false}]
    this.state = {
      squares: this.cardCollection,
      guess: null
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.gameStage === "started") {
      this.setupBoard();
    }
  }
  setupBoard(){
    let boardSize;
    switch (this.props.difficulty) {
      case "easy":
        boardSize = 8
        break;
      case "medium":
        boardSize = 12
        break;
      default:
        boardSize = 16
    }
    const squares = this.cardCollection.slice(0,boardSize);
    // hide and shuffle the cards:
    squares.forEach(square => {
      square.flipped = false;
    });
    for (let i = squares.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [squares[i], squares[j]] = [squares[j], squares[i]];
    }
    this.setState({squares: squares, guess: null});
  }
  squareClick(i){
    if (!this.state.squares[i].flipped) {
      this.handleGuess(i);
    }
  }
  handleGuess(i){
    const squares = this.state.squares;
    // flip the card, then check for matching guess:
    squares[i].flipped = true;
    this.setState({squares: squares});
    if (this.state.guess == null) {
      this.assignGuess(i);
    } else {
      this.checkGuessMatch(i);
    }
  }
  assignGuess(i){
    this.setState({guess: i});
  }
  checkGuessMatch(i){
    const squares = this.state.squares;
    if (squares[this.state.guess].value === squares[i].value) {
      // success, made a match, clear the guess and then check for finish:
      this.setState({guess: null});
      this.checkFinish();
    } else {
      // fail, not a match of guess; we need to flip both guesses:
      setTimeout(() => {
        if (this.state.guess == null) {
          return this.assignGuess(i);
        }
        squares[i].flipped = false;
        squares[this.state.guess].flipped = false;
        this.setState({squares: squares, guess: null});
      }, 1200);
    }
  }
  checkFinish(){
    if (this.state.squares.every(card => card.flipped === true)) {
      this.props.changeGame("stage","finished");
    };
  }
  render() {
    let main;
    switch (this.props.gameStage) {
      case "started":
      case "active":
        let squares = this.state.squares.map((card, i) =>
          <Square key={i}
               img={card.img}
               flip={card.flipped}
               handleClick={() => this.squareClick(i)} />
        )
        main = <main>{squares}</main>
        break;
      case "paused":
        main = (<div>
                  <h2>Game Paused.</h2>
                  <h3>Press "Resume Game" to continue.  Press "Reset" to Start Over.</h3>
                  <Leaderboard score={null} difficulty={this.props.difficulty}/>
                </div>
               );
        break;
      case "finished":
        main = (<div>
                  <Leaderboard score={this.props.score}
                               difficulty={this.props.difficulty}
                               difficultyMutable={this.props.difficultyMutable}
                               changeDifficultySelect={this.props.changeGame} />
                  <h2>Press "Play Again" to try for a better score.</h2>
                </div>
               );
        break;
      default:
        main = (<div>
                  <h2>Press "Start Game" to begin.</h2>
                  <Leaderboard score={null} difficulty={null}/>
                </div>
               );
    }
    return <div>{main}</div>
  }
}

export default Board;
