import logo from './logo.svg';
import './App.css';
import setChangeColor from './Store/actions';
import {MyContext} from './Context/colorProvider.js';
import {useContext} from 'react';


function App() {
  
  const {dispatch, state:{colore}} = useContext(MyContext);
  
  return (
    <div style={{backgroundColor: colore }} className="App">
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
