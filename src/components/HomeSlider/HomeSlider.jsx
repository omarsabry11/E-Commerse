import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { motion } from 'framer-motion';
import React from 'react'
import Slider from "react-slick";




export default function HomeSlider() {

    function getCategories() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
    }

    let { data, isLoading, isError } = useQuery({
        queryKey: ["categoriesSlider"],
        queryFn: getCategories,
        refetchInterval: 20000,
        select: (data) => data.data.data

    })
    

    let settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }
        ]

    };

    return (<>


        <motion.div initial={{x:-150,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.7}} className='py-20'>


            <Slider {...settings}>


                {data?.map((category, index) =>



                    <div key={index} className='border py-5 rounded-lg'>
                        <div className='w-[85%] mx-auto text-center flex flex-col items-center justify-center gap-4'>
                            <div className='h-[140px] w-[90%]'>
                                <img src={category?.image} className='h-full w-full rounded-lg' alt="" />
                            </div>

                            <h3 className='bg-[#0AAD0A] text-white font-medium py-1 px-3 rounded-md text-sm'>{category?.name}</h3>
                        </div>

                        {/* <div
                            className="w-[300px] h-[300px] bg-center bg-cover rounded-full"
                            style={{ backgroundImage: `url(${category?.image}) `}}>
                       
                        </div> */}
                    </div>


                )}




            </Slider>
        </motion.div>

    </>
    );
}
