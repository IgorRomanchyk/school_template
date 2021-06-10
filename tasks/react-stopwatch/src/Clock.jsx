import React from 'react';
	
export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      milliseconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 0
    };
    this.timerId = null
  }

  tick = () => {
    const milliseconds = this.state.milliseconds + 1
    const seconds = this.state.seconds + 1
    const minutes = this.state.minutes + 1
    const hours = this.state.hours + 1
    if (milliseconds > 99) {
        if (seconds > 59) {
          this.setState({minutes, seconds: 0});
          if (minutes > 59) {
            this.setState({hours, minutes: 0});
          }
        } else {
          this.setState({seconds, milliseconds: 0});
        }
    } else {
      this.setState({milliseconds});
    }
    
  }

  onStartClick = () => {
    clearInterval(this.timerId);
    this.timerId = setInterval(this.tick, 10);
  }

  onStopClick = () => {
    clearInterval(this.timerId)
    this.timerId = null 
  }

  onReset = () => {
    clearInterval(this.timerId)
    this.setState({
      milliseconds: 0,
      seconds: 0,
      mins: 0
    })
  }

  render() {
    return (
      <div>
        <h1>{(this.state.hours >= 10)? this.state.hours: "0" + this.state.hours}:
            {(this.state.minutes >= 10)? this.state.minutes: "0" + this.state.minutes}:
            {(this.state.seconds >= 10)? this.state.seconds: "0" + this.state.seconds}:
            {(this.state.milliseconds >= 10)? this.state.milliseconds: "0" + this.state.milliseconds}
        </h1>
        <div style={{ display: "flex" }}>
            <button onClick={this.onStartClick}>Start</button>
            <button onClick={this.onStopClick}>Stop</button>
            <button onClick={this.onReset}>Reset</button>
        </div>
      </div>
    );
  }
}
