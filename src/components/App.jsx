import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import bootstrapLogo from '../assets/bootstrap-logo.svg';
import reactRouterLogo from '../assets/react-router-logo.svg';

import './App.css';

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
      <h1>Vite + React + React Router + Bootstrap</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
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
