import React from 'react';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";


const Welcome = () => (

    <div
      className="App"
      style={{ width: "600px", margin: "auto", padding: "50px" }}
    >
      <Carousel
        autoPlay={5000}
        animationSpeed={2000}
        arrows infinite>
        <h1> Approximately one half of all individuals will be exposed to at least one traumatic event in their lifetime. </h1>
        <h1> Research indicates that women are twice as likely to develop PTSD, experience a longer duration of posttraumatic symptoms and display more sensitivity to stimuli that remind them of the trauma. </h1>
        <h1> Untreated posttraumatic symptoms not only have tremendous mental health implications, but can also lead to adverse effects on physical health.  </h1>
      </Carousel>
    </div>
  );



export default Welcome
