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
    time: 5,
    startOrStop: 'Start'
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
    setInterval(() => {
      if(this.state.time === 0) {
        clearInterval();
      }
      this.setState({ time: this.state.time - 1 });
      console.log(this.state.time);
    }, 1000);
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

      <Control startStopClick={this.startStopClick}/>
      
    </>
    );
  }
}