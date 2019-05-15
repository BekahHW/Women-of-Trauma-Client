import React, {Component} from 'react';
import { connect } from 'react-redux'
import NarrativeCard from '../components/NarrativeCard'
import NarrativeForm from './NarrativeForm'
import { getNarratives} from '../actions/narratives'
import './App.css'


class Narratives extends Component{

  componentDidMount(){
    this.props.getNarratives()
  }

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

const mapStateToProps = (state) => {
  return ({
    narratives: state.narratives
  })
}

export default connect(mapStateToProps, { getNarratives })(Narratives)
