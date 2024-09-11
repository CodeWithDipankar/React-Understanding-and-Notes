import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div class= "container">
      <header class= "header">
        <nav class= "nav">
          <ul>
            <li><Link to="/">Profile</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>

        </nav>

      </header>
    </div>
    </Router>
  );
}

export default App;
