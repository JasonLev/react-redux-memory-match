import React, { Component } from 'react';

class Timer extends Component {
  constructor(props){
    super(props);
    this.state = {
      time: this.props.currentTime
    }
    this.counter = this.counter.bind(this)
  }
  counter() {
    this.setState({
      time: this.state.time + 1
    });
  }
  onStart(){
    this.timerIntervalID = setInterval(this.counter, 1000);
  }
  onPause(){
    clearInterval(this.timerIntervalID);
  }
  componentWillReceiveProps(nextProps) {
    console.log("new props");
    if (nextProps.gameActive) {
      this.onStart()
    } else {
      this.onPause()
    }
  }
  render() {
    return <div>{this.state.time}</div>
  }
}

export default Timer;
