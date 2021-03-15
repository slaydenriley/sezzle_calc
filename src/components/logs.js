const Logs = (props) => {
  return (
    <>
    <h1>Previous Logs</h1>
    <hr/>
    {props.saved.map(op =>
      <>
        <div className="log-text" key={op}>{op}</div><br/>
      </>
    )}
  </>
)
}

export default Logs
