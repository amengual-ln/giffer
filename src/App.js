import React, { useState, Suspense } from 'react'
import logo from './logo.svg'
import './App.css'

import {GifsContextProvider} from './context/GifsContext'
import { Link, Route, useLocation } from 'wouter'

const Home = React.lazy(() => import('./pages/Home'))
const GifResults = React.lazy(() => import('./pages/GifResults'))
const GifInfo = React.lazy(() => import('./pages/GifInfo'))

function App() {
  const [keyword, setKeyword] = useState("")
  const [, setLocation] = useLocation()

  const handleSubmit = e => {
    e.preventDefault()
    setLocation(`/${keyword}`)
  }

  const handleChange = e => {
    setKeyword(e.target.value)
  }

  return (
    <div className="App">
      <Suspense fallback={null}>
        <section className="App-header">
          <Link to="/">
            <div>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </Link>
          <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={keyword} />
          </form>
          <GifsContextProvider>
            <Route
              component={Home} 
              path="/"
            />
            <Route
              component={GifResults} 
              path="/:keyword"
            />
            <Route
              component={GifInfo} 
              path="/gif/:id"
            />
          </GifsContextProvider>
        </section>
      </Suspense>
    </div>
  );
}

export default App;