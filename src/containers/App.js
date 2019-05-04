import React, { Component} from 'react';
import './App.css'
import Disorders from './Disorders'

const disorders = [
  {name: "Medical Trauma",
  description: "This is the description for Medical Trauma"},
  {name: "Community Trauma",
  description: "This is the description for Community Trauma"}
]

class App extends Component {

  render() {
    return (
      <div className="App">
      <h1>Hello. This is the container.</h1>
      <Disorders disorders={disorders}/>

      </div>
    )
  }
}
  export default App
