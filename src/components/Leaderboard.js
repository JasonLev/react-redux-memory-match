import React, { Component } from 'react';
import LeaderForm from './LeaderForm';
import LeaderList from './LeaderList';

let highScores = [];
class Leaderboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      highScores: highScores,
      isHighScore: false,
      newHighScoreIndex: null,
      formSubmitted: false
    }
    this.submitForm = this.submitForm.bind(this);
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
    let scores = this.state.highScores;
    if (scores.some(leaderScore => score < leaderScore.score)) {
      for (let i = 0; i < scores.length; i++) {
        if (score < scores[i].score) {
          this.setState({
            newHighScoreIndex: i,
            isHighScore: true
          });
          break;
        }
      }
    } else if (scores.length < 10) {
      this.setState({
        isHighScore: true,
        newHighScoreIndex: scores.length
      });
    }
  }
  submitForm(data) {
    let scores = [...this.state.highScores];
    let top10;
    if (scores.length) {
      scores.splice(this.state.newHighScoreIndex,0,{score: this.props.score, name: data});
      top10 = scores.slice(0,10);
    } else {
      scores.push({score: this.props.score, name: data});
      top10 = scores;
    }
    this.setState({
      highScores: top10,
      isHighScore: false,
      formSubmitted: true
    });
  }
  render() {
    return (
      <div>
        {this.props.score && (this.state.isHighScore ?
          <LeaderForm onSubmit={this.submitForm} rank={this.state.newHighScoreIndex + 1} /> :
          this.state.formSubmitted ?
            <h3>Form submitted.  See yourself on the new leaderboard:</h3> :
            <h3>Your score wasn't fast enough for the leaderboard.  Good luck next time.</h3>
        )}
        {!this.state.isHighScore && (this.state.highScores.length ?
          <LeaderList score={this.props.score} highScores={this.state.highScores} /> :
          <h3>The Leaderboard is currently empty.  Join the Leaderboard by completing the game!</h3>
        )}
      </div>
    );
  }
}

export default Leaderboard;
