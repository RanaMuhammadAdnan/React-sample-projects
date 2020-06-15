import React, { Component } from 'react';


class Timer extends Component {

  componentDidMount(){
    this.timer = setInterval(this.ticker, 1000)
  }

  ticker(){
    this.setState({clock: new Date() - this.props.start})
  }

  ticker2(){
    this.setState({clock1: new Date() - this.props.start})
  }
  

  constructor(props){
    super(props);

    this.state ={
      clock:0,
      clock1:0
    };

    this.ticker = this.ticker.bind(this);
    this.ticker2 = this.ticker2.bind(this);

  }

  render() {
    var clock = Math.round(this.state.clock / 1000);
    var clock1 = Math.round(this.state.clock1 / 1000);

    return (
      <div>

        <p>Below is the time auto</p><br/>
        <span>{clock}</span>
        <p>Seconds.</p>


        <p>below is the time on click button</p><br/>
        <button onClick={this.ticker2}>clcik</button><br /><br />
        <span>{clock1}</span>
        <p>Seconds.</p>
      </div>
    );
  }
}

export default Timer;
