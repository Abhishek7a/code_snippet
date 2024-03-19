import React from 'react'
import burgur from '../../assets/burgur-removebg-preview.png'
import { Link } from 'react-router-dom'

export default function Checkout1(props) {
  const Desktop = () => {
    return (
      <body className="bg-gray-100 dark:bg-gray-900 dark:text-gray-50">
        <div className="mx-auto">
          <div className="lg:flex shadow-md ">
            <div className="lg:w-3/4 bg-gray-50 dark:bg-gray-800 p-4 relative">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              </div>
              <div className="flex mt-10 mb-3">
                <h3 className="font-semibold text-gray-600 dark:text-gray-100 text-xs uppercase md:w-2/5 w-3/5">Product Details</h3>
                <h3 className="font-semibold text-gray-600 dark:text-gray-100 text-xs uppercase w-1/5 text-center">Quantity</h3>
                <h3 className="font-semibold text-gray-600 dark:text-gray-100 text-xs uppercase md:w-1/5 text-center md:block hidden">Price</h3>
                <h3 className="font-semibold text-gray-600 dark:text-gray-100 text-xs uppercase w-1/5 text-center">Total</h3>
              </div>
              <div className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-600 px-6 py-3" >
                <div className="flex md:w-2/5 w-3/5">
                  <div className="w-20">
                    <img className="h-24 " src={burgur} alt="burgur" />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold md:text-sm text-xs">Burgur</span>

                    <span className="text-green-500 text-xs">Veg</span>
                    <button className="font-semibold hover:text-red-600 text-red-500 text-xs">Remove</button>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <svg className="fill-current cursor-pointer text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                  <input className="mx-2 border dark:bg-gray-700 text-center w-8" type="text" value="1" />
                  <svg className="fill-current cursor-pointer text-gray-600 w-3" viewBox="0 0 448 512">
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </div>
                <span className="text-center w-1/5 md:block hidden font-semibold text-sm">₹30.00</span>
                <span className="text-center w-1/5 font-semibold text-sm">₹30.00</span>
              </div>
              <Link to='#' className="flex font-semibold text-indigo-600 text-sm  my-10 absolute bottom-0">
                <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                Add more Items
              </Link>
            </div>
            <div className="lg:w-1/4 px-8 lg:py-10 py-14">
              <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">Items</span>
                <span className="font-semibold text-sm">₹30.00</span>
              </div>
              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                <select className="block p-2 text-gray-600 dark:bg-gray-800 dark:text-gray-400 w-full text-sm outline-none">
                  <option className='p-3'>Standard shipping - ₹20.00</option>
                </select>
              </div>
              <div className="py-10">
                <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                <input type="text" id="promo" placeholder="Enter your code" className="p-2 dark:bg-gray-800 text-sm w-full outline-none" />
              </div>
              <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>₹50</span>
                </div>
                <button className="bg-green-500 font-semibold hover:bg-green-600 py-3 text-sm text-white uppercase w-full">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </body>
    )
  }
  const Mobile = () => {
    return <body className="bg-gray-100 dark:bg-gray-900 dark:text-gray-50">
      <div className="mx-auto">
        <div className="shadow-md ">
          <div className="bg-gray-50 dark:bg-gray-800 p-2 relative">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 dark:text-gray-100 text-xs uppercase md:w-2/5 w-3/5">Product Details</h3>
              <h3 className="font-semibold text-gray-600 dark:text-gray-100 text-xs uppercase w-1/5 text-center">Quantity</h3>
              <h3 className="font-semibold text-gray-600 dark:text-gray-100 text-xs uppercase md:w-1/5 text-center md:block hidden">Price</h3>
              <h3 className="font-semibold text-gray-600 dark:text-gray-100 text-xs uppercase w-1/5 text-center">Total</h3>
            </div>
            <div className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-600  px-6 py-3" >
              <div className="flex md:w-2/5 w-3/5">
                <div className="w-20">
                  <img className="h-24" src={burgur} alt="burgur" />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold md:text-sm text-xs">Burgur</span>

                  <span className="text-green-500 text-xs">Veg</span>
                  <button className="font-semibold hover:text-red-600 text-red-500 text-xs">Remove</button>
                </div>
              </div>
              <div className="flex justify-center w-1/5">
                <svg className="fill-current cursor-pointer text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
                <input className="mx-2 border dark:bg-gray-700 text-center w-8" type="text" value="1" />
                <svg className="fill-current cursor-pointer text-gray-600 w-3" viewBox="0 0 448 512">
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
              </div>
              <span className="text-center w-1/5 md:block hidden font-semibold text-sm">₹30.00</span>
              <span className="text-center w-1/5 font-semibold text-sm">₹30.00</span>
            </div>
            <a to='/' className="flex font-semibold text-indigo-600 text-sm my-5">
              <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
              Add more Items
            </a>
          </div>
          <div className="px-8 py-14">
            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Items</span>
              <span className="font-semibold text-sm">₹7.00</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
              <select className="block p-2 text-gray-600 dark:bg-gray-800 dark:text-gray-400 w-full text-sm outline-none">
                <option className='p-3'>Standard shipping - ₹20.00</option>
              </select>
            </div>
            <div className="py-10">
              <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
              <input type="text" id="promo" placeholder="Enter your code" className="p-2 dark:bg-gray-800 text-sm w-full outline-none" />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>₹50</span>
              </div>
              <button className="bg-green-500 font-semibold hover:bg-green-600 py-3 text-sm text-white uppercase w-full">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </body>
  }

  return (
    <>
      {props.state === 0 ? <Desktop /> : <Mobile />}
    </>
  )

}
