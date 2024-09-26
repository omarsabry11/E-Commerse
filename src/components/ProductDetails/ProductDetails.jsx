import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, Router, useParams } from 'react-router-dom'
import Slider from "react-slick";
import { BounceLoader } from 'react-spinners';
import { CartContext } from '../../contexts/CartContext/CartContext';
import { CounterContext } from '../../contexts/CounterContext/CounterContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





export default function ProductDetails() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false 
    };


    let { id, category } = useParams();
    const [productDetails, setProductDetails] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let { addUserCart } = useContext(CartContext);
    let [loading, setLoading] = useState(false);


    async function addProductToCart(productId) {
        setLoading(true);
        let res = await addUserCart(productId);
        if (res.data.status === "success") {
            setLoading(false);
            toast.success(res.data.message);
            setItemsCount(res.data.numOfCartItems);
        }
        else {
            toast.success(res.data.message);
        }
    }

    let { setItemsCount } = useContext(CounterContext);




    function getProductDetails(id) {
        axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
            .then(({ data }) => {
                setIsLoading(false);
                setProductDetails(data.data);

            })

    }
    function getRelatedProducts(category) {
        axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
            .then(({ data }) => {

                let allProducts = data.data;
                let related = allProducts.filter((product) => product.category.name == category);
                setRelatedProducts(related);

            })

    }




    useEffect(() => {

        getProductDetails(id);
        getRelatedProducts(category);

    }, [id, category])
    return (
        <>

            <div className='w-[85%] mx-auto mt-28'>

                {isLoading ? <>
                    <div className='flex justify-center w-full mt-28'>
                        <BounceLoader color='#08ac0a'></BounceLoader>


                    </div>
                </> : <>
                    <div>
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


                        <div className='flex max-lg:flex-col items-center mb-8'>



                            <div className='w-1/4'>
                                <Slider {...settings}>
                                    {productDetails?.images.map((sr) => <img className='w-full' src={sr} alt="product image" />)}
                                </Slider>

                            </div>

                            <div className=' px-5 flex flex-col flex-1'>
                                <h2 className='text-2xl mb-5 font-semibold'>{productDetails?.title}</h2>
                                <p className='text-md ps-2 text-[#798187]'>{productDetails?.description}</p>
                                <span className='block mt-4 text-sm text-[#08AC0A] font-semibold'>{productDetails?.category.name}</span>
                                <div className='flex items-center justify-between mt-2'>
                                    <h4 className='text-lg'>{productDetails?.price} EGP </h4>
                                    <p className='text-[#9fa5aa]'><i class="fa-solid fa-star text-[#ffc907]"></i> {productDetails?.ratingsAverage}</p>
                                </div>

                                <button onClick={() => addProductToCart(productDetails.id)} className='btn bg-[#08ac0a] hover:bg-green-600 duration-300 w-full text-white rounded-lg py-1 mt-2'>
                                    {loading ? "Loading.." : " Add To Cart"}
                                </button>
                            </div>

                        </div>


                        <div className='flex flex-row flex-wrap mt-24'>

                            {relatedProducts.map((product) => <div key={product.id} className='w-1/6 max-sm:w-full sm:max-md:w-1/2 max-lg:w-1/3 max-xl:w-1/4 px-3 py-4'>

                                <div className='product'>

                                    <Link to={`/productDetails/${product.id}/${product.category.name}`}>

                                        <img src={product.imageCover} className='w-full' alt={product.category.name} />
                                        <span className='block text-[#08ac0a] mt-2'>{product.category.name}</span>
                                        <h3 className='text-lg'>{product.title.split(' ', 2).join(" ")}</h3>
                                        <div className='flex items-center justify-between mt-4'>
                                            <h4 className=''>{product.price} EGP </h4>
                                            <p className='text-[#9fa5aa]'><i class="fa-solid fa-star text-[#ffc907]"></i> {product.ratingsAverage}</p>
                                        </div>
                                    </Link>

                                    <button onClick={() => addProductToCart(productDetails.id)} className='btn bg-[#08ac0a] w-full text-white rounded-lg py-1 mt-2'>Add To Cart</button>

                                </div>


                            </div>

                            )
                            }


                        </div>

                    </div>


                </>}
            </div>

        </>

    )
}
