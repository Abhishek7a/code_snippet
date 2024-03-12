import React, { useEffect, useRef } from 'react'
import ClipBoard from '../../Components/ClipBoard';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-okaidia.css';
import '../prism-custom-theme.css';
import ClipboardJS from 'clipboard';
import { useAppContext } from '../../AppContext';
import Navbar3 from '../../Components/navbars/Navbar3';

export default function CodeNavbar3() {
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

    const NavBar3 = ClipBoard(Navbar3);
    return (
        <div className='w-11/12 m-auto'>
            <NavBar3 />
            <pre className='mt-0'>
                <code ref={codeRef} className="language-html">{dark === false && globalVariable === 'HTML' ?
                    `<nav class="dark:border-gray-900 dark:text-white">
 <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <div class="flex items-center space-x-3 rtl:space-x-reverse">
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-red-600 rounded-full" viewBox="0 0 20 16">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"></path>
      </svg>
      <span class="self-center md:text-xl font-semibold whitespace-nowrap text-md">Code Snippet</span>
  </div>
  <div class="flex md:order-2">
      <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
          <svg class="w-5 h-5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
          <span class="sr-only ml-5">Search</span>
      </button>
      <div class="relative hidden md:block">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span class="sr-only">Search icon</span>
          </div>
          <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="        Search..."></input>
      </div>
      <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden bg-gray-100 outline-none ring-2 ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
      </button>
  </div>
  <div class="items-center justify-between w-full md:flex md:w-auto" id="navbar-search">
      <div class="relative mt-3 md:hidden">
          <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Search..."/></input>
      </div>
      <ul class="flex-col md:flex-row flex p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse text-white md:mt-0 md:border-0 dark:bg-gray-800 dark:border-gray-700">
          <li>
              <a href="#" class="block py-2 px-3 bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 md:dark:text-red-500" aria-current="page">Home</a>
          </li>
          <li>
              <a href="#" class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-900 md:dark:hover:bg-transparent dark:border-gray-700">About</a>
          </li>
          <li>
              <a href="#" class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 text-gray-900 md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-gray-900 md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
          </li>
      </ul>
  </div>
 </div>
</nav>
`: dark === false && globalVariable === 'React' ?
                        `<nav className="dark:border-gray-900 dark:text-white">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-red-600 rounded-full" viewBox="0 0 20 16">
            <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"></path>
        </svg>
        <span className="self-center md:text-xl font-semibold whitespace-nowrap text-md">Code Snippet</span>
    </div>
    <div className="flex md:order-2">
        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400  dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
            <svg className="w-5 h-5 ml-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span className="sr-only ml-5">Search</span>
        </button>
        <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="        Search..." />
        </div>
        <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden bg-gray-100 outline-none ring-2 ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
        </button>
    </div>
    <div className="items-center justify-between w-full md:flex md:w-auto" id="navbar-search">
        <div className="relative mt-3 md:hidden">
            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Search..." />
        </div>
        <ul className="flex-col md:flex-row flex p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50  md:space-x-8 rtl:space-x-reverse text-white md:mt-0 md:border-0 dark:bg-gray-800 dark:border-gray-700">
            <li>
                <Link to="#" className="block py-2 px-3 bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 md:dark:text-red-500" aria-current="page">Home</Link>
            </li>
            <li>
                <Link to="#" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-900 md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
            </li>
            <li>
                <Link to="#" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 text-gray-900 md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-gray-900 md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
            </li>
        </ul>
    </div>
  </div>
</nav>`
                        : dark === true && globalVariable === 'HTML' ?
                            `<nav class="border-gray-900 bg-gray-900 text-white">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div class="flex items-center space-x-3 rtl:space-x-reverse">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-red-600 rounded-full" viewBox="0 0 20 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"></path>
        </svg>
        <span class="self-center md:text-xl font-semibold whitespace-nowrap text-md">Code Snippet</span>
    </div>
    <div class="flex md:order-2">
        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
            <svg class="w-5 h-5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span class="sr-only ml-5">Search</span>
        </button>
        <div class="relative hidden md:block">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span class="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-gray-800  focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="        Search..."></input>
        </div>
        <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden bg-gray-800 outline-none ring-2 ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
        </button>
    </div>
    <div class="items-center justify-between w-full md:flex md:w-auto" id="navbar-search">
        <div class="relative mt-3 md:hidden">
            <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-800  focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Search..."></input>
        </div>
        <ul class="flex-col md:flex-row flex p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-800 md:space-x-8 rtl:space-x-reverse text-white md:mt-0 md:border-0 dark:bg-gray-800 dark:border-gray-700">
            <li>
                <a href="#" class="block py-2 px-3 bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 md:dark:text-red-500" aria-current="page">Home</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-gray-900 md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0  md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-gray-900 md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
        </ul>
    </div>
  </div>
</nav>` :
                            `<nav className="border-gray-900 bg-gray-900 text-white">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-red-600 rounded-full" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"></path>
            </svg>
            <span className="self-center md:text-xl font-semibold whitespace-nowrap text-md">Code Snippet</span>
        </div>
        <div className="flex md:order-2">
            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                <svg className="w-5 h-5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only ml-5">Search</span>
            </button>
            <div className="relative hidden md:block">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span className="sr-only">Search icon</span>
                </div>
                <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-gray-800  focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="        Search..." />
            </div>
            <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden bg-gray-800 outline-none ring-2 ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
        </div>
        <div className="items-center justify-between w-full md:flex md:w-auto" id="navbar-search">
            <div className="relative mt-3 md:hidden">
                <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-800  focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Search..." />
            </div>
            <ul className="flex-col md:flex-row flex p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-800 md:space-x-8 rtl:space-x-reverse text-white md:mt-0 md:border-0 dark:bg-gray-800 dark:border-gray-700">
                <li>
                    <Link to="#" className="block py-2 px-3 bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 md:dark:text-red-500" aria-current="page">Home</Link>
                </li>
                <li>
                    <Link to="#" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-gray-900 md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                </li>
                <li>
                    <Link to="#" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0  md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-gray-900 md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>`}
                </code >
            </pre >
        </div>
    )
}


