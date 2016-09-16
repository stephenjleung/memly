import React from 'react';
import Slider from 'react-slick';

const JourneyPlayer = ({journey}) => {

  const sliderSettings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    infinite: true,
    lazyLoad: true,
  }

  if (journey.pages) {
    var images = journey.pages.map((page, index)=>(
      <img src={page.imgUrl}/>
    ))
  } else {
    var images = (<div></div>)
  }

  return (
    <Slider {...sliderSettings}>
      {images}
    </Slider>
  )
};

export default JourneyPlayer;