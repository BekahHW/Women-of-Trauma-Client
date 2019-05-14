import React from 'react'
import photo from '../images/photo.jpg'
import '../containers/App.css'





const Banner = () => (
    <div className="banner"
    style={{ width: "100%", height: "30%", margin: "auto", padding: "50px" }}
    >
    <img src={photo} alt="Girl in a jacket. Side profile in darkness; Credit: Photo by Fernando Brasil on Unsplash" />

    <p>You don't have to face your trauma alone.</p>
    </div>

  )


export default Banner
