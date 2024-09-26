import axios from 'axios'
import { Link, Navigate, NavLink, Router, useNavigate } from 'react-router-dom'
import logo from "../../assets/imgs/freshcart-logo.svg"
import { useContext } from 'react'
import { CounterContext } from '../../contexts/CounterContext/CounterContext'

// import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'








export default function NavBar() {


  let { itemsCount, setItemsCount } = useContext(CounterContext);

  function logout()
  {
    localStorage.removeItem('userToken');
    <Navigate to="/login"></Navigate>

    

  }








  return (
    <>
      <nav className='bg-[#e3e6f3] py-5 shadow-lg fixed z-50 top-0 left-0 right-0'>

        <div className='w-[85%] mx-auto flex items-center justify-between'>



          <div className='flex items-center gap-4'>
            <div>
              <img src={logo} alt="" />
            </div>

            <ul className='flex gap-4'>
              {localStorage.getItem('userToken') ? <>
                <li>
                <NavLink to="">Home</NavLink>
              </li>
              <li>
                <NavLink to="products">Products</NavLink>
              </li>
              <li>
                <NavLink to="categories">Categories</NavLink>
              </li>
              <li>
                <NavLink to="brands">Brands</NavLink>
              </li>
              </> :null} 
             

            </ul>
          </div>

          <div>
            <ul className='flex gap-4'>
              <li>
                <a target='_blank' href=""><i className="fa-brands fa-instagram"></i></a>
              </li>
              <li>
                <a target='_blank' href=""><i className="fa-brands fa-facebook"></i></a>

              </li>
              <li>
                <a target='_blank' href=""><i className="fa-brands fa-tiktok"></i></a>

              </li>
              <li>
                <a target='_blank' href=""><i className="fa-brands fa-twitter"></i></a>

              </li>
              <li>
                <a target='_blank' href=""><i className="fa-brands fa-linkedin"></i></a>

              </li>
              <li>
                <a target='_blank' href=""><i className="fa-brands fa-youtube"></i></a>

              </li>
              <li className='relative'>
                <Link to="/cart" className='relative'>
                  <i class="fa-solid fa-cart-shopping text-2xl"></i>
                  <p className='absolute -top-4 left-1 bg-[#08ac0a] text-white px-2 rounded-md'>{itemsCount}</p>
                </Link>
              </li>
              {!localStorage.getItem('userToken') ? <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </> : <li>
                <Link to="/login" onClick={logout}>Logout</Link>
                
              </li>}

            </ul>

          </div>




        </div>

      </nav>



    </>
  )
}
