import logo from './logo.svg';
import './App.css';

import React from 'react';

import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import About from './pages/about';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Links from './components/Links';
import NavLinks from './components/NavLInks';

const isLogin = true;

function App() {
  return (
    <BrowserRouter>
      <Links />
      <NavLinks />
      <Switch>
        <Route 
          path="/login" 
          render={() => (isLogin ? <Redirect to='/' /> : <Login />)} 
        />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
