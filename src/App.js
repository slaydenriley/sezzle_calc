import './App.css';
import Calc from './components/calc'
import Logs from './components/logs'
import React from 'react'

class App extends React.Component {

  state = {
    logs: [],
    loading: true
  }

  componentDidMount() {
    let logs = []
    fetch('http://localhost:3001/logs')
    .then(res => res.json())
    .then((log) => {
      logs.push(log.map(log => log.logs))
      this.setState({logs: logs, loading: false})
    })
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
  }

  componentDidUpdate(prevProps, newProps) {
    if (prevProps !== newProps) {
    let logs = []
    fetch('http://localhost:3001/logs')
      .then(res => res.json())
      .then((log) => {
        logs.push(log.map(log => log.logs))
        this.setState({logs: logs, loading: false})
      })
    }
  }

  addLog = (formData) => {
    let logs = []
    fetch(`http://localhost:3001/logs`, {
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
      method: 'POST',
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then((log) => {
      logs.push(log.map(log => log.logs))
      this.setState({logs: logs, loading: false})
    })
  }

  handleLoading = () => {
    if (this.state.loading === true) {
      return ("nothing")
    } else {
      return (
        <div className="app">
          <Calc addLog={this.addLog}/>
          <Logs logs={this.state.logs[0]}/>
        </div>
      )
    }
  }

  render() {
  return (
    <>
      <div className="sezzle-head">
        <img alt="sezzle" src="https://media.sezzle.com/branding/2.0/Sezzle_Logo_FullColor.svg"/>
        <h1><em>Code Challenge built by Riley Slayden</em></h1>
        <hr className="sezzle-line"/>
      </div>

      {this.handleLoading()}
    </>
  );
}
}

export default App;
