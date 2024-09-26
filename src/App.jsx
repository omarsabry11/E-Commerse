import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "@fortawesome/fontawesome-free"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import LayOut from './components/LayOut/LayOut'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Categories from './components/Categories/Categories'
import NotFound from './components/NotFound/NotFound'
import Brands from './components/Brands/Brands'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import { UserTokenContext, UserTokenContextProvider } from './contexts/UserTokenContext/UserTokenContext'
import Cart from './components/Cart/Cart'
import { CartContextProvider } from './contexts/CartContext/CartContext'
import { CounterContext, CounterContextProvider } from './contexts/CounterContext/CounterContext'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'




function App() {

  let queryClient = new QueryClient();

  let routing = createBrowserRouter([
    {


      path: "",
      element: <LayOut />,
      children: [
        { index: true, element: <ProtectedRoute><Home></Home></ProtectedRoute>   },
        { path: "/productDetails/:id", element: <ProtectedRoute><ProductDetails></ProductDetails></ProtectedRoute>  },
        { path: "/products", element: <ProtectedRoute><Products></Products></ProtectedRoute>  },
        { path: "/categories", element: <ProtectedRoute><Categories></Categories></ProtectedRoute>  },
        { path: "/brands", element: <ProtectedRoute><Brands></Brands></ProtectedRoute>  },
        { path: "/register", element: <Register></Register>  },
        { path: "/login", element: <Login></Login>  },
        { path: "/cart", element: <ProtectedRoute><Cart></Cart> </ProtectedRoute> },
        { path: "*", element: <ProtectedRoute><NotFound></NotFound></ProtectedRoute>  },

      ]
    }
  ])



  return (
    <>

      <QueryClientProvider client={queryClient}>



        <UserTokenContextProvider>
          <CounterContextProvider>


            <CartContextProvider>
              <RouterProvider router={routing}>
              </RouterProvider>
            </CartContextProvider>
          </CounterContextProvider>
        </UserTokenContextProvider>

        <ReactQueryDevtools></ReactQueryDevtools>


      </QueryClientProvider>


    </>
  )

}
export default App;


