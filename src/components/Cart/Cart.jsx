import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, Router } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext/CartContext';
import { CounterContext } from '../../contexts/CounterContext/CounterContext';



export default function Cart() {

  let { getUserCart ,updateUserCart,deleteUserCart} = useContext(CartContext);
  const [cartDetails, setCartDetails] = useState(null);

  let {itemsCount,setItemsCount} = useContext(CounterContext);



  let totalPrice;

  async function getCart() {
    let res = await getUserCart();
    setCartDetails(res.data.data);
    setItemsCount(res.data.numOfCartItems);


  }

  async function updateCart(productId,count) 
  {
    let res = await updateUserCart(productId,count);
    setCartDetails(res.data.data);
    setItemsCount(res.data.numOfCartItems);
  }
  async function deleteCart(productId) 
  {
    let res = await deleteUserCart(productId);
    setCartDetails(res.data.data);
    console.log(res.data);
    setItemsCount(res.data.numOfCartItems)
    
  }



  useEffect(() => {
    getCart();

  }, [])

  return (<>

    <div className='bg-gray-100 mt-20 w-[85%] mx-auto mb-10'>
      <h2 className='text-3xl py-3 ps-5'>Shop Cart</h2>
      <h3 className='text-[#08ac0a] ps-5'>Total Cart Price: {cartDetails?.totalCartPrice} EGP</h3>

      <div>
        {cartDetails?.products.map((product) =>
          <div key={product.product.id} className='px-5 border-b-2'>


            <div className='flex justify-between items-center py-2'>
              <div className=' w-[10%]'>
                <img src={product.product.imageCover} className='' />
              </div>
              <div className=' flex-grow ps-3'>
                <h3 className=''>{product.product.title}</h3>
                <h4 className='text-[#08ac0a] py-1'>Price: <span>{product.price*product.count}</span></h4>
                <button onClick={()=>deleteCart(product.product.id)}><i className="fa-regular fa-trash-can text-[#08ac0a]"></i> Remove</button>
              </div>
              <div className='flex items-center gap-3 w-[10%] justify-center'>
                <button onClick={()=>updateCart(product.product.id,product.count+1)} className='text-xs block'><i className="fa-solid fa-plus border border-[#08ac0a] py-2 px-1 rounded-md duration-300 hover:bg-[#08ac0a] hover:text-white"></i></button>
                <p className='block'>{product.count}</p>
                <button onClick={()=>updateCart(product.product.id,product.count - 1)} className='text-xs block'><i className="fa-solid fa-minus border border-[#08ac0a] py-2 px-1 rounded-md duration-300 hover:bg-[#08ac0a] hover:text-white"></i></button>
              </div>

            </div>


          </div>)}

      </div>



    </div>




  </>
  )
}
