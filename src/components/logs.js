import React from 'react'

class Logs extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="logs">
        <h1>Previous Logs</h1>
        <hr className="log-line"/>
      </div>)
  }
}


export default Logs


// {props.saved.map(op =>
//   <>
//     <div className="log-text" key={op}>{op}</div><br/>
//   </>
// )}
