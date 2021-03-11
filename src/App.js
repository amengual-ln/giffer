import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './pages/Home'
import GifInfo from './pages/GifInfo'
import GifResults from './pages/GifResults'
import {GifsContextProvider} from './context/GifsContext'
import { Link, Route, useLocation } from 'wouter'

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
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;