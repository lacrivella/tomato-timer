import React, { Component } from 'react';
import Header from '../components/header/Header';
import SetTimer from '../components/timer/SetTimer';
import Timer from '../components/timer/Timer';
// import Controls from '../components/controls'


export default class TomatoTimer extends Component {
  state = {
    type: 'session',
    break: 5,
    session: 25,
    minuteAmount: 5,
    time: 0,
    startOrStop: 'Start'
  };

  //functions needed for onclicks
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
          time={this.state[this.state.type]}
          mode={this.state.type} />
    </>
    );
  }
}