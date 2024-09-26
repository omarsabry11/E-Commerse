import React from 'react'
import model from "../../assets/imgs/model1.png"
import button from "../../assets/imgs/button.png"

export default function LandingPage() {
    return (<>
        <div className='bg-[#e3e6f3] min-h-lvh  landing relative overflow-hidden'>
            <div className='w-[85%] mx-auto relative flex justify-between items-center max-md:flex-col max-md:justify-center max-md:gap-7 max-md:text-center mt-[50px] h-full'>
                <div className=' max-md:order-2'>

                    <h2 className='text-[#20262d] text-xl font-semibold'>Trade-in-offer</h2>
                    <h1 className='text-5xl font-semibold my-3 flex flex-col gap-2'><span className='text-[#252223] '>Super value deals</span><span className='text-[#0AAD0A]'>On all products</span></h1>
                    <h3 className='text-[#858693]'>Save more with coupons & up to 70% off !</h3>

                    <a href="#products">
                        <button className='text-[#117f73] font-semibold relative mt-4'>
                            <img src={button} alt="" />
                            <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-0'>Shop Now</p>
                        </button>
                    </a>
                    
                </div>
                <div className='w-[35%] max-md:w-[80%] hero max-md:order-1'>
                    <img className='w-full' src={model} alt="" />
                </div>


            </div>



        </div>


    </>
    )
}
