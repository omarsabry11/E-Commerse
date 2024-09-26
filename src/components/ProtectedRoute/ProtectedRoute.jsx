import axios from 'axios'
import React from 'react'
import { Navigate, NavLink, Router } from 'react-router-dom'



export default function ProtectedRoute(props) {

  if (localStorage.getItem('userToken') !== null) {
    return props.children;

  }
  else {

    return <Navigate to={'/'} />

  }
}
