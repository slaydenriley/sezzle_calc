const Logs = (props) => {
    return (
      <div className="logs">
        <h1>Previous User Logs</h1>
        <hr className="log-line"/>
        <button className="refresh-button" onClick={props.clicked}>Refresh Logs</button>
        <p><em>Last Updated: {props.time}</em></p>
        {props.logs.map((log, index) =>
          <div key={index}>
            <p>{index + 1}. {log}</p>
          </div>
        )}
      </div>)
}


export default Logs
