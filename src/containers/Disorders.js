import React from 'react';
import DisorderCard from '../components/DisorderCard'

const Disorders = (props) => (

      <div className="App-header">
      <h1>Disorders</h1>
      {props.disorders.map(disorder => < DisorderCard disorder={disorder} />
      )}
      </div>
)

export default Disorders
