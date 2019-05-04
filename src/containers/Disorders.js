import React from 'react';

const Disorders = (props) => (

      <div className="App-header">
      <h1>Disorders</h1>
      {props.disorders.map(disorder =>
        <div>
        <h2>{disorder.name}</h2>
        <p>{disorder.description}</p>
        </div>
      )}
      </div>
)

export default Disorders
