import React, { useContext, useState } from 'react'
import useProducts from '../../Hooks/useProducts'
import Products from '../Products/Products';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext/CartContext';
import { BounceLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CounterContext } from '../../contexts/CounterContext/CounterContext';
import { motion } from 'framer-motion';






export default function HomeProducts() {

    let { data, isLoading, isError } = useProducts();

    let [loading, setLoading] = useState(false);
    let { addUserCart } = useContext(CartContext);
    let [currentId, setCurrentId] = useState(null);

    let { setItemsCount } = useContext(CounterContext);



    if (isLoading) {
        return <div className='flex justify-center w-full'>
            <BounceLoader color='#08ac0a'></BounceLoader>
        </div>

    }
  
    async function addProductToCart(id) {

        setCurrentId(id);
        setLoading(true);
        let res = await addUserCart(id);


      
        if (res.data.status === "success") {
           
            toast.success(res.data.message);
            setLoading(false);
            console.log(res.data.numOfCartItems);
            setItemsCount(res.data.numOfCartItems);  
            
        }
        else {
   
      
            toast.error(res.data.message);
            setLoading(false);

        }
    }
 


    return (<>
        <div className='w-[85%] mx-auto'>



            <div id='products' className=' text-center mt-28'>
                <h2 className='text-4xl font-semibold pb-3'>Featured Products</h2>
                <p className='text-[#858693]'>Collection New Modern Design</p>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            ></ToastContainer>

            <motion.div initial={{y:150,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.7}} className='flex flex-wrap overflow-hidden my-10 py-4'>
                {data?.map((product, index) =>

                    <div key={index} className='p-2 w-1/5 max-md:w-1/2 max-lg:1/3 max-xl:w-1/4 max-sm:w-full duration-300  hover:scale-105'>
                        <div className='border border-[#A9C7A7] rounded-lg py-4'>
                            <Link to={`/productDetails/${product.id}`}>
                                <div className='w-[90%] mx-auto'>
                                    <div className='mb-3 rounded-lg'>
                                        <img className='w-full rounded-lg' src={product.imageCover} alt="" />
                                    </div>
                                    <span className='text-gray-400 font-semibold text-[12px] ps-2 block'>{product?.category.name}</span>
                                    <p className=' ps-2 text-center text-[#252424] font-semibold text-[1.2rem] py-2'>{(product?.title).split(" ", 2).join("")}</p>

                                    <div className='flex justify-between'>
                                        <p className='text-[#0d8174] font-medium ps-2 text-xl'>{product.price} EGP</p>
                                        <div className='ps-2'>
                                            <i className="fa-solid fa-star text-yellow-400 me-1"></i>
                                            <span>{product.ratingsAverage}</span>
                                        </div>

                                    </div>
                                </div>
                            </Link>
                            <button onClick={() => addProductToCart(product.id)} className='bg-[#0AAD0A] text-white w-[90%] mx-auto py-2 rounded-lg flex justify-center items-center mt-2'>

                                {currentId === product.id && loading ? "Loading.." : `Add To Cart`}

                            </button>

                        </div>


                    </div>
                )}

            </motion.div>


        </div>


    </>
    )
}
