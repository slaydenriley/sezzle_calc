import React from 'react'

class Logs extends React.Component {
  state = {
    logs: ""
  }

  componentDidMount() {
    fetch('http://localhost:3001/logs')
    .then(res => res.json())
    .then((res) => {
      res.map(log => this.setState({logs: this.state.logs + log.logs}))
    })
  }

  render() {
    return (
      <div className="logs">
        <h1>Previous Logs</h1>
        <hr className="log-line"/>
        {this.state.logs}
      </div>)
  }
}


export default Logs


// {props.saved.map(op =>
//   <>
//     <div className="log-text" key={op}>{op}</div><br/>
//   </>
// )}

// .then(log => function(log) {
//   console.log("here")
//   this.setState({logs: this.state.logs.push(log)})
//   console.log(this.state.logs)
// })
