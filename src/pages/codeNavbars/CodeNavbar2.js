import React, { useEffect, useRef } from 'react'
import ClipBoard from '../../Components/ClipBoard';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-okaidia.css';
import '../prism-custom-theme.css';
import ClipboardJS from 'clipboard';
import { useAppContext } from '../../AppContext';
import Navbar2 from '../../Components/navbars/Navbar2';

export default function CodeNavbar2() {
    const codeRef = useRef(null);
    const { globalVariable, dark } = useAppContext();

    useEffect(() => {
        Prism.highlightAll();
        const clipboard = new ClipboardJS('.clipboard-btn', {
            target: function () {
                return codeRef.current;
            }
        });
        clipboard.on('success', function (e) {
            e.clearSelection();
        });

        clipboard.on('error', function (e) {
            console.error('Error copying text to clipboard:', e.action);
        });
        return () => {
            clipboard.destroy();
        };

    }, [globalVariable, dark]);

    const NavBar2 = ClipBoard(Navbar2);
    return (
        <div className='w-11/12 m-auto'>
            <NavBar2 />
            <pre className='mt-0'>
                <code ref={codeRef} className="language-html">{dark === false && globalVariable === 'HTML' ?
                    `<nav class="dark:bg-gray-900 dark:text-white">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div class="flex items-center space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor"
            stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 20 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"></path>
        </svg>
        <span class="self-center sm:text-2xl font-semibold whitespace-nowrap text-md">Code
            Snippet</span>
    </div>
    <button data-collapse-toggle="navbar-default" type="button"
        class="items-center p-2 w-10 h-10 justify-center text-sm text-gray-900 rounded-lg md:hidden sm:inline-flex hover:bg-white-100 focus:outline-none  focus:ring-white-200 dark:text-white dark:hover:bg-white-600 dark:focus:ring-white-600"
        aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
        </svg>
    </button>
    <div class="lg:w-auto w-full text-center" id="navbar-default">
        <ul class="font-medium flex flex-col p-3 md:p-0 mt-4 border-1 border-white-100 rounded-lg bg-white-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-50 md:dark:bg-white-900 dark:border-white">
            <li class='bg-green-600 lg:bg-gray-50 text-white dark:lg:bg-gray-900 sm:dark:bg-white dark:text-white sm:mt-3 mt-0 rounded'>
                <a href="#" class="block py-2 px-3 rounded md:bg-transparent md:p-0 dark:text-white lg:text-green-600 md:dark:text-green-600" aria-current="page">Home</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-white-600 dark:hover:text-gray-900 md:dark:hover:bg-transparent">About</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-white-600 dark:hover:text-gray-900 md:dark:hover:bg-transparent">Services</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-white-600 dark:hover:text-gray-900 md:dark:hover:bg-transparent">Pricing</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-white-600 dark:hover:text-gray-900 md:dark:hover:bg-transparent">Contact</a>
            </li>
        </ul>
    </div>
  </div>
</nav>`: dark === false && globalVariable === 'React' ?
                        `<nav className="dark:bg-gray-900 dark:text-white">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div className="flex items-center space-x-3">
        <svg
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 20 16">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
            ></path>
        </svg>
        <span className="self-center sm:text-2xl font-semibold whitespace-nowrap text-md">Code Snippet</span>
    </div>
    <button data-collapse-toggle="navbar-default" type="button" className="items-center p-2 w-10 h-10 justify-center text-sm text-gray-900 rounded-lg md:hidden sm:inline-flex hover:bg-white-100 focus:outline-none focus:ring-white-200 dark:text-white dark:hover:bg-white-600 dark:focus:ring-white-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
    </button>
    <div className="lg:w-auto w-full text-center" id="navbar-default">
        <ul className="font-medium flex flex-col p-3 md:p-0 mt-4 border-1 border-white rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:dark:bg-white-900 dark:border-white">
            <li className='bg-green-600 lg:bg-gray-50 text-white dark:lg:bg-gray-900 sm:dark:bg-white dark:text-white sm:mt-3 mt-0 rounded'>
                <Link to="#" className="block py-2 px-3 rounded md:bg-transparent md:p-0 dark:text-white lg:text-green-600 md:dark:text-green-600" aria-current="page">Home</Link>
            </li>
            <li>
                <Link to="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-white-600 dark:hover:text-gray-900 md:dark:hover:bg-transparent">About</Link>
            </li>
            <li>
                <Link to="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-white-600 dark:hover:text-gray-900 md:dark:hover:bg-transparent">Services</Link>
            </li>
            <li>
                <Link to="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-white-600 dark:hover:text-gray-900 md:dark:hover:bg-transparent">Pricing</Link>
            </li>
            <li>
                <Link to="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-white-600 dark:hover:text-gray-900 md:dark:hover:bg-transparent">Contact</Link>
            </li>
        </ul>
    </div>
  </div>
</nav>`
                        : dark === true && globalVariable === 'HTML' ?
                            `<nav class="bg-gray-900 text-white">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div class="flex items-center space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor"
            stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            class="w-10 h-10 p-2 bg-green-500 rounded-full" viewBox="0 0 20 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"></path>
        </svg>
        <span class="self-center sm:text-2xl font-semibold whitespace-nowrap text-md">Code
            Snippet</span>
    </div>
    <button data-collapse-toggle="navbar-default" type="button"
        class="items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden sm:inline-flex hover:bg-white-100 focus:outline-none  focus:ring-white-200 hover:bg-white-600 focus:ring-white-600"
        aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
        </svg>
    </button>
    <div class="lg:w-auto w-full text-center" id="navbar-default">
        <ul class="font-medium flex flex-col p-3 md:p-0 mt-4 border-1 border-white-100 rounded-lg bg-white-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-800  border-white">
            <li class='bg-green-600 md:bg-gray-800 lg:text-green-500 sm:mt-3 mt-0 rounded'>
                <a href="#" class="block py-2 px-3 rounded md:bg-transparent md:p-0 md:text-green-600"
                    aria-current="page">Home</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-3 rounded hover:bg-white-100 md:border-0 md:p-0 md:hover:text-green-600 hover:bg-white-600 hover:text-gray-900 md:hover:bg-transparent">About</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-3 rounded hover:bg-white-100  md:border-0 md:p-0 md:hover:text-green-600 hover:bg-white-600 hover:text-gray-900 md:hover:bg-transparent">Services</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-3 rounded hover:bg-white-100 md:border-0 md:p-0 md:hover:text-green-600 hover:bg-white-600 hover:text-gray-900 md:hover:bg-transparent">Pricing</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-3 rounded hover:bg-white-100 md:border-0 md:p-0 md:hover:text-green-600 hover:bg-white-600 hover:text-gray-900 md:hover:bg-transparent">Contact</a>
            </li>
        </ul>
    </div>
  </div>
</nav>`:
                            `<nav className="bg-gray-900 text-white">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div className="flex items-center space-x-3 ">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 p-2 bg-green-500 rounded-full" viewBox="0 0 20 16">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"></path>
        </svg>
        <span className="self-center sm:text-2xl font-semibold whitespace-nowrap text-md">Code Snippet</span>
    </div>
    <button data-collapse-toggle="navbar-default" type="button" className=" items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden sm:inline-flex hover:bg-white-100 focus:outline-none focus:ring-white-200 hover:bg-white-600 focus:ring-white-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
    </button>
    <div className="lg:w-auto w-full text-center" id="navbar-default">
        <ul className="font-medium flex flex-col p-3 md:p-0 mt-4 border-1 border-white-100 rounded-lg bg-white-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-800 border-white">
            <li className='bg-green-600 md:bg-gray-800 lg:text-green-500 sm:mt-3 mt-0 rounded'>
                <Link href="#" className="block py-2 px-3 rounded md:bg-transparent md:p-0 lg:text-green-600 md:text-green-600" aria-current="page">Home</Link>
            </li>
            <li>
                <Link to="#" className="block py-2 px-3 rounded hover:bg-white-100 md:border-0 md:p-0 md:hover:text-green-600 hover:bg-white-600 hover:text-gray-900 md:hover:bg-transparent">About</Link>
            </li>
            <li>
                <Link to="#" className="block py-2 px-3 rounded hover:bg-white-100 md:border-0 md:p-0 md:hover:text-green-600 hover:bg-white-600 hover:text-gray-900 md:hover:bg-transparent">Services</Link>
            </li>
            <li>
                <Link to="#" className="block py-2 px-3 rounded hover:bg-white-100 md:border-0 md:p-0 md:hover:text-green-600 hover:bg-white-600 hover:text-gray-900 md:hover:bg-transparent">Pricing</Link>
            </li>
            <li>
                <Link to="#" className="block py-2 px-3 rounded hover:bg-white-100 md:border-0 md:p-0 md:hover:text-green-600 hover:bg-white-600 hover:text-gray-900 md:hover:bg-transparent">Contact</Link>
            </li>
        </ul>
    </div>
  </div>
</nav>`}
                </code >
            </pre >
        </div >
    )
}

