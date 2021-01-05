// your Bomb code here!
import React, { Component } from "react";

export default class Bomb extends Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount,
    };
    //set secondsLeft look at readMe
  }
  render() {
    //make an if statement or a teranary to switch between if the seconds equl 0 or not.
    if (this.state.secondsLeft !== 0)
      return <div>{this.state.secondsLeft} seconds left before I go boom!</div>;
    else return <div>Boom!</div>;
  }
}
