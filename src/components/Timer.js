import React, { Component } from 'react';

class Timer extends Component {
  constructor(props){
    super(props);
    this.state = {
      time: this.props.initTime
    }
    this.counter = this.counter.bind(this)
    this.reset = this.reset.bind(this)
  }
  counter() {
    this.setState({
      time: this.state.time + 1
    });
  }
  reset(){
    this.onPause();
    this.setState({
      time: 0
    });
    this.props.toggleReset();
  }
  onStart(){
    this.timerIntervalID = setInterval(this.counter, 1000);
  }
  onPause(){
    clearInterval(this.timerIntervalID);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.gameStage === "started" || nextProps.gameStage === "active") {
      this.onStart()
    } else {
      this.onPause()
    }
    if (nextProps.reset) {
      this.reset();
    }
  }
  render() {
    return <div id="timer">{this.state.time}</div>
  }
}

export default Timer;
