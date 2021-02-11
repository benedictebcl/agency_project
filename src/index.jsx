import React, { useState } from "react";
import ReactDOM from "react-dom";
import ThemeContext from "./ThemeContext";
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Works from './pages/works/works';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';




function App() {
  const [theme, setTheme] = useState("light");

  const contextValue = {
    theme,
    updateTheme: setTheme
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={theme}>
      <Router>
        <Navbar />
        <main>
            <Switch>

                <Route path="/" exact>
                    <Home />
                </Route>

                <Route path="/about">
                    <About />
                </Route>

                <Route path="/works">
                    <Works />
                </Route>

            </Switch>
        </main>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);