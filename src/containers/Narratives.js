import React from 'react';

const Narratives = (props) => (

      <div className="App-header">
      <h1>Narratives</h1>
      {props.narratives.map(narrative =>
        <div>
        <h2>{narrative.title}</h2>
        <h3>{narrative.tagline}</h3>
        <p>{narrative.story}</p>
        // # need to truncate the card (React-Truncate-Text???)

        </div>
      )}
      </div>
)

export default Narratives
