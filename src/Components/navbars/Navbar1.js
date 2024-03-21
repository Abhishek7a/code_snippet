import React, { useState } from 'react'
import logo from '../../assets/Logo.png'

export default function Navbar1(props) {
    const Desktop = () => {
        return (<div className="container mx-auto flex flex-wrap p-5  pt-4 flex-col md:flex-row items-center dark:bg-gray-900 bg-gray-50 dark:text-white">
            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"></path>
                </svg>
                {/* <img src={logo} alt="logo" className="w-10 h-10 text-white rounded-full -rotate-12" /> */}
             

                <span className="ml-3 text-xl dark:text-white">Code Snippet</span>
            </div>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                <a className="mr-5 dark:text-white cursor-pointer">Home</a>
                <a className="mr-5 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white cursor-pointer">About Us</a>
                <a className="mr-5 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white cursor-pointer">Contact Us</a>
                <a className="mr-5 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white cursor-pointer">Services</a>
            </nav>
            <button className="inline-flex items-center text-white dark:bg-blue-600 hover:dark:bg-blue-700 bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0">Log In
                <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
        )
    }
    const Mobile = () => {
        return <div className="container mx-auto flex flex-wrap p-5  pt-4 flex-row items-center dark:bg-gray-900 dark:text-white bg-gray-50">
            <div className="flex title-font font-medium items-center text-gray-900 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"></path>
                </svg>
                <span className="ml-3 dark:text-white text-xl">Code Snippet</span>
            </div>
            <nav className="mr-auto ml-4 py-1 pl-4 border-l border-gray-400 flex flex-wrap items-center text-base justify-center ">
                <a className="mr-5  dark:text-white cursor-pointer">Home</a>
                <a className="mr-5 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white cursor-pointer">About Us</a>
                <a className="mr-5 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white cursor-pointer">Contact Us</a>
                <a className="mr-5 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white cursor-pointer">Services</a>
            </nav>
            <button className="dark:bg-blue-500 mt-3 hover:dark:bg-blue-600 m-auto inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base ">Log In
                <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
    }

    return (
        <>
            {props.state === 0 ? <Desktop /> : <Mobile />}
        </>
    )
}
