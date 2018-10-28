import React, { Component } from 'react';
import LeaderForm from './LeaderForm';
import LeaderList from './LeaderList';

let highScores = [];
class Leaderboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      highScores: highScores,
      renderForm: false,
      newHighScoreIndex: null,
      formSubmitted: false
    }
    this.submitForm = this.submitForm.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.score !== this.props.score) {
      this.compareScore(this.props.score);
    }
  }
  componentWillUnmount() {
    highScores = this.state.highScores;
  }
  compareScore(score){
    let leaderScores = this.state.highScores;
    if (leaderScores.some(leaderScore => score < leaderScore.score)) {
      for (let i = 0; i < leaderScores.length; i++) {
        if (score < leaderScores[i].score) {
          this.setState({
            newHighScoreIndex: i,
            renderForm: true
          });
          break;
        }
      }
    } else if (leaderScores.length < 10) {
      this.setState({
        renderForm: true,
        newHighScoreIndex: leaderScores.length
      });
    }
    // else {
    //
    // }
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
      renderForm: false,
      formSubmitted: true
    });
  }
  renderForm(){
    if (this.state.renderForm) {
      return <LeaderForm onSubmit={this.submitForm} rank={this.state.newHighScoreIndex + 1} />;
    } else {
      return (this.state.formSubmitted ?
        <h3>Here's the new leaderboard:</h3> :
        <h3>Your score wasn't fast enough for the leaderboard.  Good luck next time.</h3>
      );
    }
  }
  render() {
    return (
      <div>
        {this.props.score && (this.renderForm())}
        {!this.state.renderForm && (this.state.highScores.length ?
          <LeaderList index={this.state.newHighScoreIndex} highScores={this.state.highScores} /> :
          <h3>The Leaderboard is currently empty.  Join the Leaderboard by completing the game!</h3>
        )}
      </div>
    );
  }
}

export default Leaderboard;
