import React, { Component } from 'react';
import LeaderForm from './LeaderForm';

let highScores = [];
class Leaderboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      highScores: highScores,
      newHighScore: false
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
    } else if (scores.length < 10) {
      scores.push(score);
    } else {
      return
    }
    let top10 = scores.slice(0,10);
    this.setState({
      highScores: top10,
      newHighScore: true
    });
  }
  submitForm(data) {
    console.log("data", data);
    this.setState({
      newHighScore: false 
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
        {this.props.score && (this.state.newHighScore ?
          <LeaderForm onSubmit={this.submitForm}/> :
          <h3>Your score wasn't fast enough for the leaderboard.  Good luck next time.</h3>
        )}
        {leaderScores}
      </div>
    );
  }
}

export default Leaderboard;
