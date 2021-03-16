const Logs = (props) => {
    return (
      <div className="logs">
        <h1>Previous Logs</h1>
        <hr className="log-line"/>
        {props.logs.map((log, index) =>
          <div key={index}>
            <p>{index + 1}. {log}</p>
          </div>
        )}
      </div>)
}


export default Logs
