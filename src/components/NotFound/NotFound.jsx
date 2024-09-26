import axios from 'axios'
import React from 'react'
import { NavLink, Router } from 'react-router-dom'
import error404Image from '../../assets/imgs/error.svg'

export default function NotFound() {
  return (<>
  <div className='flex my-28 w-4/5 mx-auto'>
    <img src={error404Image} className='mx-auto' alt="" />
  </div>
  
  
  </>
  )
}