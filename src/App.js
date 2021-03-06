import './App.css';
import Calc from './components/calc'
import Logs from './components/logs'
import React from 'react'
import Moment from 'moment'
import { JumpCircleLoading } from 'react-loadingg';

class App extends React.Component {

  state = {
    logs: [],
    loading: true,
    time: Moment().format("MMM D, YYYY | h:mm:ss a")
  }

  logUrl = 'https://slayden-sezzle-backend.herokuapp.com/logs'

  componentDidMount() {
    this.fetchLogs()
  }

  fetchLogs = () => {
    let logs = []
    fetch(this.logUrl)
      .then(res => res.json())
      .then((log) => {
        logs.push(log.map(log => log.logs))
        this.setState({logs: logs, loading: false, time: Moment().format("MMM D, YYYY | h:mm:ss a")})
    })
  }

  addLog = (formData) => {
    let logs = []
    fetch(this.logUrl, {
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
      this.setState({logs: logs, loading: false, time: Moment().format("MMM D, YYYY | h:mm:ss a")})
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    this.fetchLogs()
  }

  handleLoading = () => {
    if (this.state.loading === true) {
      return <JumpCircleLoading />
    } else {
      return (
        <div className="app">
          <Calc addLog={this.addLog}/>
          <Logs logs={this.state.logs[0]} clicked={this.handleClick} time={this.state.time}/>
        </div>
      )
    }
  }

  render() {
  return (
    <>
      <div className="sezzle-head">
        <img alt="sezzle" src="https://media.sezzle.com/branding/2.0/Sezzle_Logo_FullColor.svg"/>
        <h1><em>Code Challenge built by <a target="blank" href="https://linkedin.com/in/rileyslayden">Riley Slayden</a></em></h1>
        <hr className="sezzle-line"/>
      </div>

      {this.handleLoading()}
    </>
  );
}
}

export default App;
