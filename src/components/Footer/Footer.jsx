import axios from 'axios'
import React from 'react'
import { NavLink, Router } from 'react-router-dom'
import americanExpressLogo from '../../assets/imgs/american express.png'
import amazonLogo from '../../assets/imgs/amazon.png'
import paypalLogo from '../../assets/imgs/paypal.png'
import mastercardLogo from '../../assets/imgs/master card.png'
import googlePlayLogo from '../../assets/imgs/Google play.png'
import appleStoreLogo from '../../assets/imgs/Apple store.png'

export default function Footer() {
  return (
    <>
    
      <div className='footer bg-[#f0f3f2] w-full pt-6 pb-16'>
        <div className='w-11/12 mx-auto'>
          <h2 className='py-4 text-xl pb-1'>Get The FreshCart app</h2>
          <h3 className='text-lg text-[#6c757d]'>We will send you alink, open it on your phone to download the app</h3>
          <form className='flex flex-col lg:flex-row justify-between my-6 max-lg:gap-4' action="">
            <input type="email" name="" id="" placeholder='Email ..' className='lg:w-[85%] ms-3 rounded-md py-2 ps-2 border-2 border-[#dee2e6] focus:outline-[#08ac0a]' />
            <button className='btn bg-[#08ac0a] text-white lg:w-[12%] max-lg:ms-3 py-2 rounded-md'>Share App Link</button>

          </form>
          <div>
            <div className='flex justify-between max-lg:flex-col max-lg:items-center border-y border-[#dee2e6] py-4 max-md:gap-2'>
              <div className='flex items-center ms-3 max-md:flex-col'>
                <h4 className='me-2'>Payment Partners</h4>
                <div className='logos flex gap-4'>
                  <img className=' h-8' src={amazonLogo} alt="" />
                  <img className=' h-8' src={americanExpressLogo} alt="" />
                  <img className=' h-8' src={mastercardLogo} alt="" />
                  <img className=' h-8' src={paypalLogo} alt="" />

                </div>

              </div>

              <div className='flex me-3 space-x-2 items-center max-md:flex-col'>
                <h4>Get deliveries with FreshCart</h4>
                <div className='flex'>
                <img className='h-8' src={appleStoreLogo} alt="" />
                <img className='h-8' src={googlePlayLogo} alt="" />
                </div>
              

              </div>

            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}
