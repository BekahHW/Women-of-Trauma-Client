import React from 'react';

const Narratives = (props) => (
<div>
      <h1>Narratives</h1>

      {props.narratives.map(narrative =>
        <div className="NarrativesCard">

        <h2>{narrative.title}</h2>
        <h3>{narrative.tagline}</h3>

        </div>


      )}
      </div>
)

export default Narratives
