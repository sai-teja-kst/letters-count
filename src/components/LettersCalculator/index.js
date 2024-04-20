// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onInput = e => {
    this.setState({count: e.target.value.length})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="bg-card">
          <h1>
            Calculate the <br /> Letters you <br />
            enter
          </h1>
          <label>
            Enter the phrase
            <br />
            <input
              type="text"
              onChange={this.onInput}
              placeholder="Enter the phrase"
            />
          </label>
          <div className="bg-count">
            <p className="bg-text">No.of letters: {count}</p>
          </div>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="bg-img"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
