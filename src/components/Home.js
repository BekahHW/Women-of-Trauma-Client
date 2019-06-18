import React from 'react';
import Welcome from '../components/Welcome'
import Banner from '../components/Banner'
import MainQuote from '../components/MainQuote'
// import NarrativeCard from '../components/NarrativeCard'




const Home = () => (
  <div>
    <Banner />
    <Welcome />
    {/* <NarrativeCard /> */}
    <MainQuote />
  </div>
)


  export default Home
