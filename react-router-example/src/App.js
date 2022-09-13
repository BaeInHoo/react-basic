import logo from './logo.svg';
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import About from './pages/about';
import NotFound from './pages/NotFound';
import Links from './components/Links';

function App() {
  return (
    <BrowserRouter>
    <Links />
      <Switch>
        <Route path="/profile/:id" component={Profile} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;