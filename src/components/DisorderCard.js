import React from 'react'


const DisorderCard = ({disorder}) => (
    <div key={disorder.id}>
    <h2>{disorder.name}</h2>
    <p>{disorder.description}</p>
    </div>
  )


export default DisorderCard
