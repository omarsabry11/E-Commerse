import React, { useContext, useEffect } from 'react'
import LandingPage from '../LandingPage/LandingPage'

import HomeProducts from '../HomeProducts/HomeProducts'
import HomeSlider from '../HomeSlider/HomeSlider'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSlider from '../../../src/components/MainSlider/MainSlider';
import { CartContext } from '../../contexts/CartContext/CartContext';
import { CounterContext } from '../../contexts/CounterContext/CounterContext';








export default function Home() {

  let { setItemsCount } = useContext(CounterContext)

  let { getUserCart } = useContext(CartContext);


  async function getCart() {
    let res = await getUserCart();
    setItemsCount(res.data.numOfCartItems);
  }

  useEffect(() => {
    getCart();

  }, [])







  return (<>

    {/* <LandingPage></LandingPage> */}
    <div className='w-[85%] mx-auto '>

      <MainSlider></MainSlider>
      <HomeSlider></HomeSlider>
      <HomeProducts></HomeProducts>
    </div>





  </>
  )
}
