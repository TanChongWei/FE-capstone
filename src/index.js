import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Char from './pages/CharactersPage'
import Home from './pages/HomePage'
import CharListingPage from './pages/CharListingPage'
import PageNotFound from './pages/PageNotFound'
import { AppShell } from './AppShell'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppShell>
        <Switch>
          <Route path='/char/:charId'>
            <CharListingPage />
          </Route>
          <Route path='/char' exact>
            <Char />
          </Route>
          <Route path='/' exact>
            <Home />
          </Route> 
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </AppShell>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

