// your ImageSlider code here!
import React, { Component } from "react";

export default class imageSlider extends Component {
  constructor() {
    super();
    this.state = {
      currentSlideIndex: 0,
    };
    //it tells you what to do in readme
  }
  render() {
    return <div>I am on slide {this.state.currentSlideIndex}</div>;
    //tells you how to put this in readme
  }
}
