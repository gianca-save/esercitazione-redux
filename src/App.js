import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import setChangeColor from './Store/actions';


function App() {
  
  const current_color = useSelector(state => state.colore);

  const dispatch = useDispatch();
  
  return (
    <div style={{backgroundColor: current_color }} className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => dispatch(setChangeColor('green'))}>Sfondo verde</button>
        <button onClick={() => dispatch(setChangeColor('red'))}>Sfondo rosso</button>
        <button onClick={() => dispatch(setChangeColor('yellow'))}>Sfondo giallo</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
