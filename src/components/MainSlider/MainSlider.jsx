import axios from 'axios'
import React, { useEffect } from 'react'
import { NavLink, Router } from 'react-router-dom'
import mainSlide1 from '../../assets/imgs/slider-image-1.jpeg'
import mainSlide2 from '../../assets/imgs/slider-image-3.jpeg'
import mainSlide3 from '../../assets/imgs/slider-image-2.jpeg'
import Slider from "react-slick";
import { motion } from 'framer-motion'







export default function MainSlider() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false  

  };

  useEffect(()=>{
  
  },[])


  return (
    <>

    <motion.div initial={{x:150,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.7}} className='flex mt-28'>
      <div className='w-3/4 max-lg:w-full'>
      <Slider {...settings}>
            <img className='h-[400px] w-full' src={mainSlide1} />
            <img className='h-[400px] w-full' src={mainSlide2}  />
            <img className='h-[400px] w-full' src={mainSlide3} />
      </Slider>

      </div>


      <div className='w-1/4 max-lg:flex '>
      <img className='h-[200px]' src={mainSlide1}/>
      <img className='h-[200px] ' src={mainSlide2}/>
      </div>

    </motion.div>
    
    
    
    </>
  )
}
