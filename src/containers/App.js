import React, { Component} from 'react';
import './App.css'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar'
import Disorders from './Disorders'
import Narratives from './Narratives'
import getHelp from '../components/GetHelp'
import Welcome from '../components/Welcome'





class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">

      <Router>
      <React.Fragment>
        <NavBar />
        <Route exact path="/disorders" component={Disorders} />
        <Route exact path="/narratives" component={Narratives} />
        <Route exact path="/getHelp" component={getHelp} />

        </React.Fragment>
        </Router>
        <Welcome />
      <h1>Hello. This is the container.</h1>


      </div>
    )
  }
}

  export default App
