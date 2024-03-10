import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import '../App.css';

export default function Header() {
    const [load, setload] = useState(1);
    const loading = () => {
        setload(0);
        setTimeout(() => {
            setload(1);
        }, 0);
    }
    const goToTop = () => {
        document.documentElement.scrollTop = 0;
        loading();
    }
    return (
        <>
            <div className={`${load === 0 ? 'w-0' : 'load w-full'} bg-gray-900 h-1 z-50 top-0 fixed`}></div>
            <header class="text-gray-600 body-font top-0 fixed bg-gray-50 w-full mb-10 z-40">
                <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
                    <div class="flex title-font font-medium items-center text-gray-900 ">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-yellow-400 rounded-full" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"></path>
                        </svg> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            className='w-10 h-10'
                            viewBox="0 0 512 512"
                            style={{
                                enableBackground: "new 0 0 512 512",
                            }}
                            xmlSpace="preserve"
                        >
                            <path
                                style={{
                                    fill: "#E41F11",
                                }}
                                d="M0,260.908l174.648-81.136v38.568l-132.08,57.848v0.728l132.08,57.848v38.568L0,292.212V260.908z"
                                />
                            <path
                                style={{
                                    fill: "#111827",
                                }}
                                d="M201.6,387.9l77.864-263.8h36.752L238.4,387.9H201.6z"
                                />
                            <path
                                style={{
                                    fill: "#00008B",
                                    // fill: "#0E76A8",
                                }}
                                d="M512,293.284L337.352,373.34v-38.568l134.992-57.848v-0.728L337.352,218.34v-38.568L512,259.828 V293.284z"
                            />
                        </svg>
                        <span class="ml-3 text-xl">Code Snippet</span>
                    </div>
                    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <Link to='/' onClick={goToTop} className={`${window.location.pathname === '/' ? 'text-black' : ''} mr-5 hover:text-gray-900 cursor-pointer`}>Home</Link>
                        <Link to='/feedback' onClick={goToTop} className={`${window.location.pathname === '/feedback' ? 'text-black' : ''} mr-5 hover:text-gray-900 cursor-pointer`}>Feedback </Link>
                        <Link to='/contribute' onClick={goToTop} className={`${window.location.pathname === '/contribute' ? 'text-black' : ''} mr-5 hover:text-gray-900 cursor-pointer`}> Contribute</Link>
                    </nav>

                </div>
            </header>
        </>
    )
}