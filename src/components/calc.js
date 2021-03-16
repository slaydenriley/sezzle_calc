import React from 'react'
import Keypad from './keypad'

class Calc extends React.Component {
  state = {
    operation: "",
    last_op: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    try {
      let operation = this.state.operation
      let total = eval(operation)
      let formData = {logs: operation + `=${total}`}
      console.log(formData)
      this.addLog(formData)
      this.setState({
        operation: total})
    }
    catch {
      this.setState({
        operation: "Oops, error!"
      })
    }
  }

  addLog = (formData) => {
    fetch(`http://localhost:3001/logs`, {
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
      method: 'POST',
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(res => console.log(res))
  }

  handleChange = (e) => {
    this.setState({
      operation: e.target.value
    })
  }

  handleOperatorChange = (e) => {
    if (e.target.name === "C") {
      this.setState({operation: "", total: "", last_op: ""})
    } else if (e.target.name === "CE") {
      this.setState({operation: this.state.last_op})
    } else {
      this.setState({
        last_op: this.state.operation,
        operation: this.state.operation + e.target.name,
      })
    }
  }

  render() {
    return(
      <>
        <div className="calculator">
          <form>
            <input autoComplete="off" type="string" name="number" value={this.state.operation} onChange={this.handleChange}/>
          </form>
          <Keypad onSubmit={this.handleSubmit} onClick={this.handleOperatorChange}/>
        </div>
      </>
    )
  }
}

export default Calc
