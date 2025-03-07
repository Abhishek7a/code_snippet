import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer2(props) {
    const Desktop = () => {
        return <footer className="text-gray-600 body-font dark:text-gray-50 dark:bg-gray-800">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <Link className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-red-700 rounded-full" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"></path>
                        </svg>
                        <span className="ml-3 text-xl">Code Snippet</span>
                    </Link>
                    <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">First Link</Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">Second Link</Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">Third Link</Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">Fourth Link</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">First Link</Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">Second Link</Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">Third Link</Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">Fourth Link</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">First Link</Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">Second Link</Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">Third Link</Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">Fourth Link</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">First Link</Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">Second Link</Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">Third Link</Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">Fourth Link</Link>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-900">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 Code Snippet —
                        <Link to="#" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">codesnippett@gmail.com</Link>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <Link className="text-gray-500 hover:text-blue-700 cursor-pointer">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </Link>
                        <Link className="ml-3 text-gray-500 hover:text-black cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="w-5 h-5" fill="none" viewBox="0 0 512 512" id="twitter"><path fill="currentColor" d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"></path></svg>
                        </Link>
                        <Link className="ml-3 text-gray-500 hover:text-pink-700 cursor-pointer">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </Link>
                        <Link className="ml-3 text-gray-500 hover:text-blue-800 cursor-pointer">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </Link>
                    </span>
                </div>
            </div>
        </footer>
    }
    const Mobile = () => {
        return <footer className="text-gray-600 body-font dark:text-gray-50 dark:bg-gray-800">
            <div className="container py-10 px-2 w-3/4 mx-auto items-center flex-nowrap">
                <div className="flex-shrink-0  mx-auto">
                    <Link className="flex title-font font-medium items-center justify-start text-gray-900 dark:text-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-red-700 rounded-full" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"></path>
                        </svg>
                        <span className="ml-3 text-xl">Code Snippet</span>
                    </Link>
                    <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
                </div>
                <div className="flex-grow flex flex-wrap -mb-10 mt-10">
                    <div className="w-3/2 px-5 mx-auto">
                        <h2 className="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">First Link</Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">Second Link</Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">Third Link</Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">Fourth Link</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="w-3/2 px-5 mx-auto">
                        <h2 className="title-font font-medium text-gray-900 dark:text-gray-50 text-sm mb-3">CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">First Link</Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">Second Link</Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">Third Link</Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">Fourth Link</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="w-3/2 px-5 mx-auto">
                        <h2 className="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">First Link</Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">Second Link</Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">Third Link</Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">Fourth Link</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="w-3/2 px-5 mx-auto">
                        <h2 className="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">First Link</Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">Second Link</Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">Third Link</Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 dark:hover:text-gray-100">Fourth Link</Link>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-900">
                <div className="py-2 px-2 w-3/4 mx-auto">
                    <p className="text-gray-500 text-sm text-left">© 2024 Code Snippet —
                        <Link to="#" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">codesnippett@gmail.com</Link>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <Link className="text-gray-500 hover:text-blue-700 cursor-pointer">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </Link>
                        <Link className="ml-3 text-gray-500 hover:text-black cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="w-5 h-5" fill="none" viewBox="0 0 512 512" id="twitter"><path fill="currentColor" d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"></path></svg>
                        </Link>
                        <Link className="ml-3 text-gray-500 hover:text-pink-700 cursor-pointer">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </Link>
                        <Link className="ml-3 text-gray-500 hover:text-blue-800 cursor-pointer">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </Link>
                    </span>
                </div>
            </div>
        </footer>
    }

    return (<>
        {props.state === 0 ? <Desktop /> : <Mobile />}
    </>

    )

}
