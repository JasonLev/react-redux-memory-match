import React, { Component } from 'react';

class Leaderboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      highScores: []
    }
    this.compareScore = this.compareScore.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.score) {
      this.compareScore(nextProps.score);
    }
  }
  compareScore(score){
    let scores = [...this.state.highScores];
    if (scores.some(leaderScore => score < leaderScore)) {
      for (let i = 0; i < scores.length; i++) {
        console.log("testing... " + scores[i]);
        if (score < scores[i]) {
          scores.splice(i,0,score);
          break;
        }
      }
      console.log("on the leaderboard");
    } else {
      scores.push(score);
      console.log("new score");
    }
    console.log("scores are ", scores);
    let top10 = scores.slice(11);
    this.setState({
      highScores: top10
    });
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
