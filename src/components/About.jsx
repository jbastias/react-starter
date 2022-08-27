import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="container">
      <h3>About</h3>
      <div className="info">
        <ul>
          <li>
            <span className="highlight">Vite</span> - Next Generation Frontend
            Tooling
          </li>
          <li>
            <span className="highlight">React</span> - A JavaScript library for
            building user interfaces
          </li>
          <li>
            <span className="highlight">React-Router</span> - React Router is a
            fully-featured client and server-side routing library for React
          </li>
          <li>
            <span className="highlight">Bootstrap</span> - Build fast,
            responsive sites with Bootstrap
          </li>
        </ul>
      </div>
      <div className="go-home">
        Go back to the <Link to="/">Home</Link> page
      </div>
    </div>
  );
}

export default About;
