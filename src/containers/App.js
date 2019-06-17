import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import Disorders from './Disorders'
import Narratives from './Narratives'
import getHelp from '../components/GetHelp'
import loginForm from './LoginForm'

const App = () => (
      <div className="App">

      <Router>
      <React.Fragment>
        <NavBar />
          <Route exact path="/" component={Home} />

        <Route exact path="/disorders" component={Disorders} />
        <Route exact path="/narratives" component={Narratives} />
        <Route exact path="/getHelp" component={getHelp} />
        <Route exact path="/loginForm" component={loginForm} />


        </React.Fragment>
        </Router>

      </div>
    )

export default App
