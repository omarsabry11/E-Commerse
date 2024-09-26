import axios from "axios";
import { createContext, useState } from "react";



export let CartContext = createContext();





export function CartContextProvider(props)
{

  
        let headers = {
            token:localStorage.getItem('userToken')
        
        }

    
   

    function getUserCart()
    {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
            headers
        })
        .then(res=>res)
        .catch(err=>err)
    }


    function addUserCart(productId)
    {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,
            {productId},
            {
                headers

            }
        )
        .then(res=>res)
        .catch(err=>err)
    }

    function updateUserCart(productId,count)
    {
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
            {count},
            {
                headers
            }
        )
        .then(res=>res)
        .catch(err=>err)
    }
    function deleteUserCart(productId)
    {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
         
            {
                headers
            }
        )
        .then(res=>res)
        .catch(err=>err)
    }

    
    return <CartContext.Provider value={{getUserCart,addUserCart,updateUserCart,deleteUserCart}}>
         {props.children}

    </CartContext.Provider>
}