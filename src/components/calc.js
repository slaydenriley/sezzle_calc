import React from 'react'
import Keypad from './keypad'

class Calc extends React.Component {
  state = {
    operation: "",
    last_op: [0]
  }

  handleSubmit = (e) => {
    e.preventDefault()
    try {
      let operation = this.state.operation
      let total = eval(operation)
      let formData = {logs: operation + `=${total}`}
      this.props.addLog(formData)
      this.setState({
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
      this.setState({operation: "", total: "", last_op: ""})
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
          <form>
            <input autoComplete="off" type="string" name="number" value={this.state.operation} onChange={this.handleChange}/>
          </form>
          <hr className="log-line"/>
          <Keypad onSubmit={this.handleSubmit} onClick={this.handleOperatorChange}/>
        </div>
      </>
    )
  }
}

export default Calc
