import React, { Component} from 'react';
import './App.css'
import Disorders from './Disorders'
import Narratives from './Narratives'





class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
      <h1>Hello. This is the container.</h1>
      <Disorders />
      <Narratives />

      </div>
    )
  }
}

  export default App
