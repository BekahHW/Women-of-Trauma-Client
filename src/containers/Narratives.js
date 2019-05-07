import React from 'react';

const Narratives = (narratives) => (
  <div>
      <h1>Narratives</h1>
      {props.narratives.map(narrative => <NarrativeCard key={narrative.id} narrative={narrative} />)}
    </div>
)

export default Narratives
