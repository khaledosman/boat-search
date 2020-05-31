import React from 'react';
import './App.css';
import Search from './components/Search'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/search"> Search </Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <p> Home Component </p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
