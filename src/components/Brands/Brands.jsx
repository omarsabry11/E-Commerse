import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'


export default function Brands() {
  function getBrands() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`);
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["brands"],
    queryFn: getBrands,
    refetchInterval: 20000,
  });

  return (
    <>
      <div className='my-28 w-[85%] mx-auto'>
        <div className='mb-10'>
          <h2 className='text-4xl pb-3 font-semibold text-center'>Brands</h2>
          <p className='text-center text-[#858693]'>Discover top brands offering quality products across all categories.</p>

        </div>
        <div className='flex flex-wrap '>

          {data?.data?.data?.map((category, index) => (
            <div className='w-1/5 max-sm:w-full max-md:w-1/2 max-lg:w-1/3 p-5'>

              <div className=''>
                <div className=''>
                  <img className='w-full h-full rounded-xl shadow-lg' src={category.image} alt={category.name} />
                </div>
                <h3 className='text-center bg-[#0AAD0A] shadow-lg font-[500] text-white mt-5 w-fit mx-auto py-1 px-5 rounded-md'>{category?.name}</h3>



              </div>
            </div>

          ))}
        </div>

      </div>


    </>
  )
}
