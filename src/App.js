import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './pages/home'
import GifInfo from './pages/GifInfo'
import GifList from './components/GifList'
import { Route, useLocation } from 'wouter'

function App() {
  const [keyword, setKeyword] = useState("")
  const [location, setLocation] = useLocation()

  const handleSubmit = e => {
    e.preventDefault()
    setLocation(keyword)
  }

  const handleChange = e => {
    setKeyword(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={keyword} />
        </form>
        <Route
          component={Home} 
          path="/"
        />
        <Route
          component={GifList} 
          path="/:keyword"
        />
        <Route
          component={GifInfo} 
          path="/:keyword/:id"
        />
      </header>
    </div>
  );
}

export default App;
