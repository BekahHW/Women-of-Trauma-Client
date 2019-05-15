import React from 'react'
import TextTruncate from 'react-text-truncate';


const NarrativeCard = ({narrative}) => (
    <div key={narrative.id} className="NarrativesCard">
      <h2>{narrative.title}</h2>
      <h3>{narrative.trauma}</h3>
      <h4>{narrative.tagline}</h4>
      <TextTruncate
          line={4}
          truncateText="…"
          text={narrative.story}
          textTruncateChild={<a href="http://localhost:3000/narratives/{{narrative.id}}">Read on</a>}
      />
    </div>
  )


export default NarrativeCard
