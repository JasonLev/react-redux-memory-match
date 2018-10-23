import React, { Component } from 'react';

let highScores = [];
class Leaderboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      highScores: highScores
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.score) {
      this.compareScore(nextProps.score);
    }
  }
  componentWillUnmount() {
    highScores = this.state.highScores;
  }
  compareScore(score){
    let scores = [...this.state.highScores];
    if (scores.some(leaderScore => score < leaderScore)) {
      for (let i = 0; i < scores.length; i++) {
        if (score < scores[i]) {
          scores.splice(i,0,score);
          break;
        }
      }
    } else {
      scores.push(score);
    }
    let top10 = scores.slice(0,10);
    this.setState({
      highScores: top10
    });
  }
  render() {
    let leaderScores;
    if (this.state.highScores.length) {
      let leaderList = this.state.highScores.map(
        (score, i) => {
          return (<li key={i} className={score === this.props.score ? "leader-highlight":"leader-LI"}>
                    <span>{i + 1}.</span><span className="leader-score">{score}</span>
                  </li>);
        }
      );
      leaderScores = (<ul className="leaderlist">
                        <h3>Leaderboard:</h3>
                        {leaderList}
                      </ul>);
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
