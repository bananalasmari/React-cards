import React, { Component } from "react";
import Card from "./Card";

export default class Cards extends Component {
  render() {
    const allCards = this.props.cards.map((ele, key)=> <Card question={ele} key={key}/>)

    return <div className="row">{allCards}</div>;
  }
}
