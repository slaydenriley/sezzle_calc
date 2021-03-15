import React from 'react'
import Logs from './logs'
import Keypad from './keypad'

class Calc extends React.Component {
  state = {
    operation: "",
    saved: []
  }

  handleSubmit = (e) => {
    e.preventDefault()
    try {
    let toSave = this.state.operation
    let total = eval(toSave)
    this.setState({
      saved: this.state.saved.concat(toSave + `=${total}`),
      operation: total})
    }
    catch {
      this.setState({
        operation: "Oops, error!"
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      operation: e.target.value
    })
  }

  handleOperatorChange = (e) => {
    if (e.target.name === "C") {
      this.setState({operation: "", total: ""})
    } else if (e.target.name === "CE") {
      this.setState({operation: ""})
    } else {
      this.setState({
        operation: this.state.operation + e.target.name,
      })
    }
  }

  render() {
    return(
      <>
        <div className="calculator">
          <h1>Calculate</h1>
          <hr/>
          <form>
            <input type="string" name="number" value={this.state.operation}/>
          </form>
          <Keypad onSubmit={this.handleSubmit} onClick={this.handleOperatorChange}/>
        </div>

        <div className="logs">
          <Logs saved={this.state.saved}/>
        </div>
      </>
    )
  }
}

export default Calc
