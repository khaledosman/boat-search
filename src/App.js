import React, { memo, Suspense, lazy } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
// import Search from './components/Search'
const Search = lazy(() => import(/* webpackChunkName: "Search", webpackPrefetch: true */ './components/Search'))

function App () {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <nav>
            <ul>
              <li>
                <Link to='/'> Home </Link>
              </li>
              <li>
                <Link to='/search'> Search </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path='/search'>
              <Search />
            </Route>
            <Route path='/'>
              <p> Home Component </p>
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  )
}

export default memo(App)
