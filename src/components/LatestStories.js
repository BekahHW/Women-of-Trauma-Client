import React from 'react';
import ReadMoreAndLess from 'react-read-more-less';
import NarrativeCard from './NarrativeCard'


const pStyle = {
  fontSize: '2em',
  textAlign: 'center',
  color: 'white',
  background: '#32353D',
  padding: '65px'
};

const LatestStories = () => (
  < NarrativeCard narrative={narrative}/>
  <div key={narrative.id} className="NarrativesCard">
    <h2>{narrative.title}</h2>
    <h3>{narrative.trauma}</h3>
    <h4>{narrative.tagline}</h4>
    <ReadMoreAndLess
      // ref={ReadMore}
      className="read-more-content"
      charLimit={250}
      readMoreText="Read more"
      readLessText="Read less"
    >
      {narrative.story}
    </ReadMoreAndLess>

  </div>
)

export default LatestStories
