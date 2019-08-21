import React, { Component } from 'react';
import Header from '../components/header/Header';
import SetTimer from '../components/timer/SetTimer';
import Timer from '../components/timer/Timer';
import Control from '../components/controls/Control';


export default class TomatoTimer extends Component {
  state = {
    type: 'session',
    break: 5,
    session: 25,
    minuteAmount: 5,
    time: 25,
    startOrStop: 'Start',
    interval: null
  };

  //resetClick, startStopClick,
  addMinutesHandle = ({ target }) => {
    this.setState(state => {
      return {
        [target.name]: state[target.name] + 1,
        time: state.time + 1
      };
    });
  }

  subMinutesHandle = ({ target }) => {
    this.setState(state => {
      return {
        [target.name]: state[target.name] - 1,
        time: state.time - 1,
      };
    });
  }

  startStopClick = event => {
    if(this.state.interval) {
      clearInterval(this.state.interval);
      this.setState({ interval: null });
    } else {
      const timer = setInterval(() => {
        if(this.state.time === 1) {
          clearInterval(this.state.interval);
          this.setState({ interval: null });
        }
        this.setState({ time: this.state.time - 1 });
      }, 1000);
      this.setState({ interval: timer });
    }
  }

  resetClick = event => {
    
}

  render() {
    return (
      <>
      <Header title="Tomato Timer" />
      <SetTimer 
        type="break"
        minuteAmount={this.state.break}
        addMinutes={this.addMinutesHandle} 
        subMinutes={this.subMinutesHandle} />

      <SetTimer 
        type="session"
        minuteAmount={this.state.session}
        addMinutes={this.addMinutesHandle} 
        subMinutes={this.subMinutesHandle} />

      <Timer 
        time={this.state.time}
        mode={this.state.type} />

      <Control 
        startStopClick={this.startStopClick}
        startOrStop={this.state.startOrStop}
        resetClick={this.resetClick} />
      
    </>
    );
  }
}