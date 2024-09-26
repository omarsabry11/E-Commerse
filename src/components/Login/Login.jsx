import React from 'react'
import patternBackgound from "../../assets/imgs/light-patten.svg"
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'





export default function Login() {

    let navigate = useNavigate();

    let validation = Yup.object().shape({
       
        email: Yup.string().email('Email is invalid').required('Email is required'),
        password: Yup.string().matches(/^[a-zA-Z]{8,12}$/, 'Password must contain only letters ,more than 8 and less than 13').required('Password is required'),
       
    })

    async function handleRegister(formValues) {
        console.log(formValues);
        let { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', formValues);
        console.log(data);
        if (data.message === "success") {
            navigate('/');
            localStorage.setItem('userToken',data.token);

        }


    }
    let formik = useFormik({
        initialValues: {

            email: "",
            password: "",

        },
        validationSchema: validation,
        onSubmit: handleRegister

    })
    return (<>

        <div className="register min-h-lvh relative overflow-hidden z-10 flex justify-center items-center">
            <div className='w-[35%] max-lg:w-[90%] py-10 rounded-2xl mx-auto  bg-white border border-[#0AAD0A] '>
                <h2 className='text-center text-[#0AAD0A] text-3xl font-semibold'>Login</h2>

                <form onSubmit={formik.handleSubmit} className=" w-[90%] mx-auto mt-10 flex  flex-col gap-5 ">


                  

                    <div className="relative">
                        <input type="email" value={formik.values.email} name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} id="email" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-[2px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#0AAD0A] peer" placeholder=" " />
                        <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#0AAD0A] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email</label>
                    </div>
                    {formik.errors.email && formik.touched.email ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                        <p  className='font-normal'> <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>{formik.errors.email}</p>
                    </div> : null}


                    <div className="relative">
                        <input type="password" value={formik.values.password} name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} id="password" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-[2px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#0AAD0A] peer" placeholder="" />
                        <label htmlFor="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#0AAD0A] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password</label>
                    </div>
                    {formik.errors.password && formik.touched.password ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                        <p className='font-normal'> <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>{formik.errors.password}</p>
                    </div> : null}

                    <div className='flex flex-col gap-2'>
                    <button type="submit" className="block w-full text-white bg-[#0AAD0A] hover:bg-[#259225] focus:ring-4 focus:outline-none duration-300 focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                    <p className='text-center '>Don't have an account? <Link to="/register" className='underline'>Sign up</Link></p>

                        
                    </div>

                </form>


            </div>

        </div>


    </>
    )
}
