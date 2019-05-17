import React from 'react'
import photo from '../images/photo.jpg'
import '../containers/App.css'





const Banner = () => (
    <div className="banner"
    style={{ width: "100%"}}
    >
    <img src={photo} alt="Girl in a jacket. Side profile in darkness; Credit: Fernando Brasil on Unsplash" height= "200" />

    <p>You don't have to face your trauma alone.</p>
    </div>

  )


export default Banner
