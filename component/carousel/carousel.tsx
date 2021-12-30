import React, {useState} from 'react'
import Slider from 'react-slick'

import {Box} from '../mui'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Carousel() {

    const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
    // removes default buttons
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
  }

  return (
    <>
    
    </>
  );
}

