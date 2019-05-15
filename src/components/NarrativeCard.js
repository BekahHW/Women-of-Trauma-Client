import React from 'react'
import TextTruncate from 'react-text-truncate';


const NarrativeCard = ({narrative}) => (
    <div key={narrative.id} className="NarrativesCard">
      <h2>{narrative.title}</h2>
      <h3>{narrative.tagline}</h3>
      <TextTruncate
          line={1}
          truncateText="…"
          text={narrative.story}
          textTruncateChild={<a href="#">Read on</a>}
      />
    </div>
  )


export default NarrativeCard
