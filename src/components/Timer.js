import React, { Component } from 'react';

class Timer extends Component {
  constructor(props){
    super(props);
    this.state = {
      time: this.props.initTime,
      scoreUpdated: false
    }
    this.counter = this.counter.bind(this)
    this.reset = this.reset.bind(this)
    this.onFinish = this.onFinish.bind(this)
  }
  counter() {
    this.setState({
      time: this.state.time + 1
    });
  }
  onFinish() {
    if (!this.state.scoreUpdated) {
      this.props.changeScore(this.state.time);
      this.onPause();
      this.setState({
        scoreUpdated: true
      });
    }
  }
  reset(){
    this.onPause();
    this.setState({
      time: 0,
      scoreUpdated: false
    });
  }
  onStart(){
    this.reset();
    this.onResume();
  }
  onResume(){
    this.timerIntervalID = setInterval(this.counter, 1000);
  }
  onPause(){
    clearInterval(this.timerIntervalID);
  }
  componentWillReceiveProps(nextProps) {
    switch (nextProps.gameStage) {
      case "started":
        this.onStart();
        break;
      case "active":
        this.onResume();
        break;
      case "finished":
        this.onFinish();
        break;
      default:
        this.onPause();
    }
    if (nextProps.reset) {
      this.reset();
      this.props.toggleReset();
    }
  }
  render() {
    let seconds = this.state.time % 60;
    return <div id="timer">{Math.floor(this.state.time/60)}:{seconds < 10 ? "0" + seconds : seconds}</div>
  }
}

export default Timer;
