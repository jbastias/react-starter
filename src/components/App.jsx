import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import bootstrapLogo from '../assets/bootstrap-logo.svg';
import reactRouterLogo from '../assets/react-router-logo.svg';

import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://reactrouter.com" target="_blank">
          <img
            src={reactRouterLogo}
            className="logo react-router"
            alt="React Router logo"
          />
        </a>
        <a href="https://getbootstrap.com" target="_blank">
          <img
            src={bootstrapLogo}
            className="logo bootstrap"
            alt="Bootstrap logo"
          />
        </a>
      </div>
      <div className="about-info">
        Go to the <Link to="/about">About</Link> page to get more info
      </div>
      <h1>Vite + React + React Router + Bootstrap</h1>
      <div className="main-card">
        <button
          className="move-count"
          onClick={() => setCount(count => count + 1)}
        >
          +
        </button>
        <button
          className="show-count"
          onClick={() => setCount(count => count + 1)}
        >
          count is {count}
        </button>
        <button
          className="move-count"
          onClick={() => setCount(count => count - 1)}
        >
          -
        </button>
        <p>
          Edit <code>src/components/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the <span className="highlight">Vite</span>,{' '}
        <span className="highlight">React</span>,{' '}
        <span className="highlight">React Router</span> and{' '}
        <span className="highlight">Bootstrap</span> logos to learn more
      </p>
    </div>
  );
}

export default App;
