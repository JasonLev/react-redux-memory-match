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
    if (nextProps.gameActive && nextProps.gameStarted) {
      console.log("game started = resume");
      this.shuffleCards()
    } else {
      console.log("gameActive or gameStarted was false");
    }
  }
  hideCards(){

  }
  shuffleCards(){
    for (let i = this.state.squares.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.state.squares[i], this.state.squares[j]] = [this.state.squares[j], this.state.squares[i]];
    }
  }
  squareClick(i){
    const squares = this.state.squares.slice();
    squares[i].flipped = true;
    this.setState({squares: squares});
  }
  render() {
    let squares = this.state.squares.map((card, i) =>
      <Square key={i}
              img={card.img}
              flip={card.flipped}
              handleClick={() => this.squareClick(i)} />
    );
    return <main>{squares}</main>
  }
}

export default Board;
