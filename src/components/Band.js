import React, { Component } from 'react';

export default class Band extends Component {
  render() {
    return(
      <div>
        <li>{this.props.band} <button onClick={() => this.props.deleteBand(this.props.id)}>DELETE</button></li> 
      </div>
    )
  }
}
