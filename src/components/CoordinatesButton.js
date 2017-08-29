// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick = (event) => {
    let coordinatesArray = [event['clientX'], event['clientY']]
    this.props.onReceiveCoordinates(coordinatesArray)
  }


  render() {
    return (
      <button onClick={this.handleClick}>Click me!</button>
    );
  }
}
