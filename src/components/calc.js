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
      this.addLog(operation + `=${total}`)
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
            <input type="string" name="number" value={this.state.operation}/>
          </form>
          <Keypad onSubmit={this.handleSubmit} onClick={this.handleOperatorChange}/>
        </div>
      </>
    )
  }
}

export default Calc
