import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
  coordinatesArray = (event) => {
    let coordinate = [];
    coordinate.push(event.clientX);
    coordinate.push(event.clientX);
    console.log(coordinate);
  }
    render() {
        return (
            <div>
                <button onClick={this.coordinatesArray} ></button>
            </div>
        )
    }
}
