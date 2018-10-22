import React, { Component } from 'react';

class Leaderboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      highScores: []
    }
    //this.changeStage = this.changeStage.bind(this);
  }
  componentDidMount() {
    if (this.props.score) {
      this.compareScore(this.props.score);
    }
  }
  compareScore(score){
    console.log("compare score");
    let scores = [...this.state.highScores]
    if (scores.length) {
      console.log(score);
    } else {
      scores.push(score);
      this.setState({
        highScores: scores
      });
    }
  }
  render() {
    let leaderScores;
    if (this.state.highScores.length) {
      let leaderList = this.state.highScores.map((score, i) => <li key={i}>{score}</li>);
      leaderScores = <ul>{leaderList}</ul>;
    } else {
      leaderScores= <h3>The Leaderboard is currently empty.  Join the Leaderboard by completing the game!</h3>;
    }
    return (
      <div>
        <div>{leaderScores}</div>
      </div>
    );
  }
}

export default Leaderboard;
