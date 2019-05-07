import React, {Component} from 'react';
import { connect } from 'react-redux'
import NarrativeCard from '../components/NarrativeCard'
import NarrativeForm from './NarrativeForm'
import './App.css'

class Narratives extends Component{
  render() {
    return (
      <div className='NarrativeCard'>
        <h1>Narratives</h1>
        {this.props.narratives.map(narrative => <NarrativeCard key={narrative.id} narrative={narrative} />)}
        < NarrativeForm />
      </div>
    )
  }
}

export default Narratives
