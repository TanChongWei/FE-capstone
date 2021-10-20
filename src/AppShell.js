import React from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
export function AppShell({children}) {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-2 mb-3">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Breaking Bad Characters</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/char'>Characters</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}