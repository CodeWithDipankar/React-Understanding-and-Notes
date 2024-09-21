import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div class= "container">
      <header class= "header">
        <nav class= "nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Porfolio</Link></li>
            <li><Link to="/">Projects</Link></li>
            <li><Link to="/">Contacts</Link></li>
          </ul>

        </nav>

      </header>
    </div>
    </Router>
  );
}

export default App;
