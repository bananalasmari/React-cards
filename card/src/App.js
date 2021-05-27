import React, { Component } from "react";
import Cards from "./components/Cards";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      question: '',
      cards: [],
      displayCard: false
    };
  }

  handleChange(e){
    this.setState({
      question: e.target.value
    })
  }
  handleSubmit(event){
    this.setState({displayCard: true})
    event.preventDefault();
    this.state.cards.push(this.state.question)
  }
  render() {
    return (
      <section id="add-card" className="container">
        <div className="row">
          <h1>What's your question?</h1>
          <form name="add-card">
            <input
              type="text"
              className="question"
              name="question"
              placeholder="Type a question here!"
              value={this.state.question}
              onChange={(e) => this.handleChange(e)}
            />
            <input
              type="submit"
              className="btn-submit"
              value="Submit"
              onClick={(e) => this.handleSubmit(e)}
            />
          </form>
        </div>
        {this.state.cards.length !== 0 ? <Cards cards={this.state.cards}/> : <h1>Loading cards...</h1>}
      </section>
    );
  }
}

export default App;