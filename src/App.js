import './App.css';
import Calc from './components/calc'
import Logs from './components/logs'

function App() {
  return (
    <>
      <div className="sezzle-head">
        <img alt="sezzle" src="https://media.sezzle.com/branding/2.0/Sezzle_Logo_FullColor.svg"/>
        <h1><em>Code Challenge built by Riley Slayden</em></h1>
        <hr className="sezzle-line"/>
      </div>

      <div className="app">
        <Calc />
        <Logs />
      </div>
    </>
  );
}

export default App;
