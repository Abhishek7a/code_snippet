import React, { useState } from 'react'

export default function Navbar2(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(true)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const Desktop = () => {
        return (
            <nav className="dark:bg-gray-900 dark:text-white">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex items-center space-x-3 ">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"></path>
                        </svg>
                        <span className="self-center sm:text-2xl font-semibold whitespace-nowrap text-md">Code Snippet</span>
                    </div>
                    <button onClick={toggleMenu} data-collapse-toggle="navbar-default" type="button" className=" items-center p-2 w-10 h-10 justify-center text-sm text-gray-900-500 rounded-lg  md:hidden  sm:inline-flex  hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-white-200 dark:text-gray-900 dark:hover:bg-white-600 dark:focus:ring-white-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={` ${isMenuOpen ? 'block' : 'hidden'} lg:w-auto w-full text-center`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-3 md:p-0 mt-4 border-1 border-white rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-100 dark:border-white dark:bg-gray-800">
                            <li className='bg-green-600 lg:bg-gray-100 text-white dark:md:bg-gray-800 dark:text-white sm:mt-3 mt-0 rounded'>
                                <a href="#" className="block py-2 px-3 rounded md:bg-transparent md:p-0 dark:text-white lg:text-green-600 md:dark:text-green-600" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-white-600 dark:hover:text-gray-900 md:dark:hover:bg-transparent">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-white-600 dark:hover:text-gray-900 md:dark:hover:bg-transparent">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-white-600 dark:hover:text-gray-900 md:dark:hover:bg-transparent">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-white-600 dark:hover:text-gray-900 md:dark:hover:bg-transparent">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
    const Mobile = () => {
        return <nav className="border-white-200 dark:text-white ">
            <div className="max-w-screen-xl flex flex-wrap items-center dark:bg-gray-900 justify-between mx-auto p-4">
                <div className="flex items-center space-x-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"></path>
                    </svg>
                    <span className="self-center text-xl  font-semibold dark:text-white whitespace-nowrap ">Code Snippet</span>
                </div>
                <button onClick={toggleMenu} data-collapse-toggle="navbar-default" type="button" className=" items-center p-2 w-10 h-10 justify-center text-sm text-gray-900 rounded-lg hidden sm:inline-flex hover:bg-white-100 focus:outline-none  dark:text-white dark:hover:bg-white-600" aria-controls="navbar-default" aria-expanded={isMenuOpen}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full text-center`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-0 border-white-100 rounded-lg bg-white-50 space-x-8 rtl:space-x-reverse mt-0 border-0  dark:border-white-600">
                        <li></li>
                        <li className='bg-green-600 text-white  dark:bg-white mt-3 rounded'>
                            <a href="#" className="block py-2 px-3 rounded bg-transparent dark:text-green-600" aria-current="page">Home</a>
                        </li>
                        <li className='dark:hover:bg-white mt-2 rounded dark:hover:bg-transparent text-gray-900 dark:text-white hover:bg-green-600 hover:text-white'>
                            <a href="#" className="block py-2 px-3  hover:bg-white-100 hover:bg-transparent border-0  p-0  dark:hover:text-green-600 ">About</a>
                        </li>
                        <li className='dark:hover:bg-white mt-2 rounded dark:hover:bg-transparent text-gray-900 dark:text-white hover:bg-green-600 hover:text-white'>
                            <a href="#" className="block py-2 px-3  hover:bg-white-100 hover:bg-transparent border-0  p-0  dark:hover:text-green-600 ">Services</a>
                        </li>
                        <li className='dark:hover:bg-white mt-2 rounded dark:hover:bg-transparent text-gray-900 dark:text-white hover:bg-green-600 hover:text-white'>
                            <a href="#" className="block py-2 px-3  hover:bg-white-100 hover:bg-transparent border-0  p-0  dark:hover:text-green-600 ">Pricing</a>
                        </li>
                        <li className='dark:hover:bg-white mt-2 rounded dark:hover:bg-transparent text-gray-900 dark:text-white hover:bg-green-600 hover:text-white'>
                            <a href="#" className="block py-2 px-3  hover:bg-white-100 hover:bg-transparent border-0  p-0  dark:hover:text-green-600 ">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    }

    return (<>
        {props.state === 0 ? <Desktop /> : <Mobile />}
    </>

    )
}
