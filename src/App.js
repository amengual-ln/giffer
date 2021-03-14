import React, { Suspense, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";

import { GifsContextProvider } from "./context/GifsContext";
import { Link, Route, useLocation } from "wouter";
import SearchForm from "./components/SearchForm";

const Home = React.lazy(() => import("./pages/Home"));
const GifResults = React.lazy(() => import("./pages/GifResults"));
const GifInfo = React.lazy(() => import("./pages/GifInfo"));

function App() {
  const [, setLocation] = useLocation();

  const handleSubmit = useCallback(
    ({ keyword }) => {
      setLocation(`/${keyword}`);
    },
    [setLocation]
  );

  return (
    <div className="App">
      <Suspense fallback={null}>
        <section className="App-header">
          <Link to="/">
            <div>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </Link>
          <SearchForm onSubmit={handleSubmit} />
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={GifResults} path="/:keyword" />
            <Route component={GifInfo} path="/gif/:id" />
            <Route component={() => <h1>oops! 404</h1>} path="/oops/404" />
          </GifsContextProvider>
        </section>
      </Suspense>
    </div>
  );
}

export default App;
