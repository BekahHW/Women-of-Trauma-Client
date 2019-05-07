import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisorderCard from '../components/DisorderCard'
import { getDisorders} from '../actions/disorders'

class Disorders extends Component {

  componentDidMount(){
    this.props.getDisorders()
  }

  render(){
    return (
      <div className="App-header">
      <h1>Disorders</h1>
      {this.props.disorders.map(disorder => < DisorderCard key={disorder.id} disorder={disorder} />
      )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    disorders: state.disorders
  })
}
export default connect(mapStateToProps, { getDisorders })(Disorders)
