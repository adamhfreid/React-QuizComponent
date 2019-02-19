import React, { Component } from 'react'

class QuizEnd extends Component {
  handleRestClick() {
    console.log(this.props);
    this.props.resetClickHandler()
  }
  render() {
    return (
      <div>
        <p>Thanks for playing!</p>
        <a href='#' onClick={this.handleRestClick.bind(this)}>Reset Quiz</a>
      </div>
    )
  }
}

export default QuizEnd;