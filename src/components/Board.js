import React, { Component } from 'react';
import Square from './Square';
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
    this.state = {
      solved: false,
      squares: [{value: "ace", img: ace, flipped: false},
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
        {value: "king", img: king, flipped: false}],
      guess: null
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.gameStage === "started") {
      // hide and shuffle the cards:
      const squares = this.state.squares.slice();
      squares.forEach(square => {
        square.flipped = false;
      });
      for (let i = squares.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [squares[i], squares[j]] = [squares[j], squares[i]];
      }
      this.setState({squares: squares, guess: null});
    }
  }
  squareClick(i){
    const squares = this.state.squares.slice();
    if (!squares[i].flipped) {
      // flip the card, then check for matching guess:
      squares[i].flipped = true;
      if (this.state.guess) {
        if (this.state.guess === squares[i].value) {
          // success, made a match, clear the guess and then check for finish:
          this.setState({squares: squares, guess: null});
          this.checkFinish();
        } else {
          // fail, not a match of guess; we need to flip both guesses:
          this.setState({squares: squares});
          setTimeout(() => {
            squares[i].flipped = false;
            for (let guess of squares) {
              if (guess.value === this.state.guess) {
                guess.flipped = false;
              }
            }
            this.setState({squares: squares, guess: null});
          }, 1200);
        }
      } else {
        this.setState({squares: squares, guess: squares[i].value});
      }
    }
  }
  checkFinish(){
    if (this.state.squares.every(card => card.flipped === true)) {
      this.props.finish();
    };
  }
  render() {
    let squares;
    switch (this.props.gameStage) {
      case "started":
      case "active":
        squares = this.state.squares.map((card, i) =>
          <Square key={i}
               img={card.img}
               flip={card.flipped}
               handleClick={() => this.squareClick(i)} />
        )
        break;
      case "paused":
        squares = 'Game Paused.  Press "Resume Game" to continue.  Press "Reset" to Start Over.';
        break;
      case "finished":
        squares = 'Congratulations!  You won.  Press "Play Again" to try for a better score.';
        break;
      default:
        squares = 'Press "Start Game" to begin.';
    }
    return <main>{squares}</main>
  }
}

export default Board;
