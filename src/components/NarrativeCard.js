import React from 'react'


const NarrativeCard = ({narrative}) => (
    <div key={narrative.id} className="NarrativesCard">
      <h2>{narrative.title}</h2>
      <h3>{narrative.tagline}</h3>
    </div>
  )


export default NarrativeCard
