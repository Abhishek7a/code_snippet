import React, { useState } from 'react'
import logo from '../../assets/Logo.png'

export default function Navbar1(props) {
    const Desktop = () => {
        return <div className="container mx-auto flex flex-wrap p-5 pt-4 flex-col md:flex-row items-center dark:bg-gray-900 bg-gray-50 dark:text-white">
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
            <div className='flex'>
                {/* <div className='relative'>
                    <span class="inline-flex items-center justify-center w-3 h-3 p-2  text-sm font-medium rounded-full bg-red-800 text-gray-50 absolute right-0 ">10</span>
                    <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 128 96"><g data-name="Layer 2"><path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></path></g></svg>
                </div>
                <div className='relative '>
                    <svg version="1.1" className='w-6 h-6 dark:text-gray-100 text-gray-900' id="collecticon-" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" enable-background="new 0 0 16 16" >
                        <rect id="svgGrid" y="0" fill="currentColor" width="16" height="16" />
                        <path d="M13,9V6.5c0-2.306-1.759-4.222-4-4.472V1.5c0-0.553-0.447-1-1-1s-1,0.447-1,1v0.528C4.759,2.278,3,4.194,3,6.5V9 c0,1.103-0.897,2-2,2v2h14v-2C13.897,11,13,10.103,13,9z M8,15.5c0.931,0,1.716-0.638,1.938-1.5H6.062 C6.284,14.862,7.069,15.5,8,15.5z" />
                    </svg>
                </div>
                <div className='relative dark:text-gray-100'>
                    <svg fill="currentColor"  className='w-6 h-6' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.1353075,2.27592318 C10.2402118,2.0052531 10.405725,1.75363521 10.6305147,1.54243008 C11.4002733,0.819189975 12.5997267,0.819189975 13.3694853,1.54243008 C13.5947695,1.75409979 13.7605161,2.00636024 13.8653839,2.27770959 C16.7616088,3.1234978 19,5.9408248 19,10 C19,12.6246407 19.5316915,14.1023939 20.5153799,15.1769385 C20.7591805,15.4432571 21.6159553,16.2145106 21.7120353,16.3119441 L22,16.6039656 L22,20.0140878 L15.8743256,20.0140878 C15.6241439,20.9988638 15.0074832,21.861375 14.0878016,22.4226016 C12.8058555,23.2048965 11.1941445,23.2048965 9.91219841,22.4226016 C8.87009269,21.7866669 8.29383594,21.076125 8.08797645,20.0140878 L2,20.0140878 L2,16.6039656 L2.2879647,16.3119441 C2.39205094,16.2070827 3.24384208,15.442761 3.48595854,15.1793313 C4.46898326,14.1097716 5,12.6338939 5,10 C5,5.92919283 7.23535296,3.11802713 10.1353075,2.27592318 Z M10.1786171,20.0140878 C10.3199018,20.276911 10.5607105,20.4753661 10.9540156,20.7153766 C11.596268,21.1073049 12.403732,21.1073049 13.0459844,20.7153766 C13.3433933,20.5338858 13.5757865,20.2937382 13.7367218,20.0140878 L10.1786171,20.0140878 Z M20,17.4519264 C19.701613,17.1774463 19.2506046,16.7572744 19.0401756,16.5274096 C17.7059972,15.0700027 17,13.1077943 17,10 C17,6.23128941 14.6597092,4.01238167 12,4.01238167 C9.33276935,4.01238167 7,6.21989471 7,10 C7,13.1178011 6.29422173,15.0794011 4.95848591,16.5327208 C4.74843403,16.7612633 4.29607181,17.181102 4,17.45237 L4,18.0140878 L20,18.0140878 L20,17.4519264 Z" />
                    </svg>
                </div> */}
                <button className="inline-flex items-center text-white dark:bg-blue-600 hover:dark:bg-blue-700 bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0">Log In
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </div>
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
