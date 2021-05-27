import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <h4 className={"card-title"} id={this.props.id}>{this.props.question}</h4>
      </div>
    );
  }
}