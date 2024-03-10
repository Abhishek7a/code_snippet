import React, { useEffect, useState, useRef } from 'react'
import ClipBoard from '../../Components/ClipBoard';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-okaidia.css';
import '../prism-custom-theme.css';
import ClipboardJS from 'clipboard';
import { useAppContext } from '../../AppContext';
import Navbar5 from '../../Components/navbars/Navbar5';

export default function CodeNavbar5() {
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

    const NavBar5 = ClipBoard(Navbar5);
    return (
        <div className='w-11/12 m-auto'>
            <NavBar5 />
            <pre className='mt-0'>
                <code ref={codeRef} className="language-html">{dark === false && globalVariable === 'HTML' ?
                    `<nav class="border-gray-200 dark:bg-gray-900">
 <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <div class="flex items-center space-x-3 rtl:space-x-reverse">
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 20 16">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"></path>
    </svg>
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Code Snippet</span>
  </div>
  <div class="flex items-center md:order-2 mt-3 space-x-3 md:space-x-0 rtl:space-x-reverse group relative">
    <button id="dropdownNavbarLink" class="flex text-sm bg-gray-800 rounded-full md:me-0 dark:focus:ring-gray-600" data-dropdown-placement="bottom">
      <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF" stroke-width="2.242">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.036"></g>
        <g id="SVGRepo_iconCarrier">
          <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#FFFFFF"></path>
          <path d="M16.807 19.0112C15.4398 19.9504 13.7841 20.5 12 20.5C10.2159 20.5 8.56023 19.9503 7.193 19.0111C6.58915 18.5963 6.33109 17.8062 6.68219 17.1632C7.41001 15.8302 8.90973 15 12 15C15.0903 15 16.59 15.8303 17.3178 17.1632C17.6689 17.8062 17.4108 18.5964 16.807 19.0112Z" fill="#FFFFFF"></path>
          <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3432 6 9.00004 7.34315 9.00004 9C9.00004 10.6569 10.3432 12 12 12Z" fill="#FFFFFF"></path>
        </g>
      </svg>
      <div id="dropdownNavbar" class="group-hover:block z-10 absolute hidden mt-10 right-0 font-normal divide-y divide-gray-100 shadow w-44 dark:bg-gray-800 dark:divide-gray-600">
        <div class="px-4 py-3 rounded-t dark:bg-gray-800">
          <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span class="block text-sm text-gray-900 truncate dark:text-gray-400">name@email.com</span>
        </div>
        <ul class="py-2 rounded-b text-sm text-gray-900 dark:bg-gray-800" aria-labelledby="user-menu-button">
          <li>
            <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>
    </button>
    <button data-collapse-toggle="navbar-default" type="button" class="items-center p-2 w-10 h-10 justify-center text-sm text-gray-900-500 rounded-lg md:hidden sm:inline-flex hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-white-200 dark:text-gray-900 dark:hover:bg-white-600 dark:focus:ring-white-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
  </div>
  <div class="items-center justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white text-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 px-3 md:text-yellow-500 bg-yellow-500 rounded md:bg-transparent md:p-0 md:dark:text-yellow-500" aria-current="page">Home</a>
      </li>
      <li class="group relative">
        <button id="dropdownNavbarLink" class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-0 md:w-auto dark:text-white md:dark:hover:text-yellow-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown
          <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>
        <div id="dropdownNavbar" class="group-hover:block hidden z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:divide-gray-600 ">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-400 dark:bg-gray-800" aria-labelledby="dropdownLargeButton">
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
            </li>
          </ul>
          <div class="py-1 dark:bg-gray-800">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </div>
        </div>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
 </div>
</nav>
` : dark === false && globalVariable === 'React' ?
                        `<nav className="border-gray-200 dark:bg-gray-900">
 <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <div className="flex items-center space-x-3 rtl:space-x-reverse">
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 20 16">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"></path>
    </svg>
    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Code Snippet</span>
  </div>
  <div className="flex items-center md:order-2 mt-3 space-x-3 md:space-x-0 rtl:space-x-reverse group relative">
    <button id="dropdownNavbarLink" className="flex text-sm bg-gray-800 rounded-full md:me-0 dark:focus:ring-gray-600" data-dropdown-placement="bottom">
      <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF" strokeWidth="2.242">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.036"></g>
        <g id="SVGRepo_iconCarrier">
          <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#FFFFFF"></path>
          <path d="M16.807 19.0112C15.4398 19.9504 13.7841 20.5 12 20.5C10.2159 20.5 8.56023 19.9503 7.193 19.0111C6.58915 18.5963 6.33109 17.8062 6.68219 17.1632C7.41001 15.8302 8.90973 15 12 15C15.0903 15 16.59 15.8303 17.3178 17.1632C17.6689 17.8062 17.4108 18.5964 16.807 19.0112Z" fill="#FFFFFF"></path>
          <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3432 6 9.00004 7.34315 9.00004 9C9.00004 10.6569 10.3432 12 12 12Z" fill="#FFFFFF"></path>
        </g>
      </svg>
      <div id="dropdownNavbar" className="group-hover:block z-10 absolute hidden mt-10 right-0 font-normal divide-y divide-gray-100  shadow w-44 dark:bg-gray-800 dark:divide-gray-600">
        <div className="px-4 py-3 rounded-t dark:bg-gray-800">
          <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span className="block text-sm text-gray-900 truncate dark:text-gray-400">name@email.com</span>
        </div>
        <ul className="py-2 rounded-b text-sm text-gray-900 dark:bg-gray-800" aria-labelledby="user-menu-button">
          <li>
            <Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link>
          </li>
          <li>
            <Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</Link>
          </li>
          <li>
            <Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</Link>
          </li>
          <li>
            <Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
          </li>
        </ul>
      </div>
    </button>
    <button data-collapse-toggle="navbar-default" type="button" className=" items-center p-2 w-10 h-10 justify-center text-sm text-gray-900-500 rounded-lg md:hidden sm:inline-flex hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-white-200 dark:text-gray-900 dark:hover:bg-white-600 dark:focus:ring-white-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
  </div>
  <div className="items-center justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white text-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link href="#" className="block py-2 px-3 md:text-yellow-500 bg-yellow-500 rounded md:bg-transparent md:p-0 md:dark:text-yellow-500" aria-current="page">Home</Link>
      </li>
      <li className="group relative">
        <button id="dropdownNavbarLink" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-0 md:w-auto dark:text-white md:dark:hover:text-yellow-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown
          <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>
        <div id="dropdownNavbar" className="group-hover:block hidden z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:divide-gray-600 ">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-400 dark:bg-gray-800" aria-labelledby="dropdownLargeButton">
            <li>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
            </li>
          </ul>
          <div className="py-1 dark:bg-gray-800">
            <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
          </div>
        </div>
      </li>
      <li>
        <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
      </li>
      <li>
        <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
      </li>
      <li>
        <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</Link>
      </li>
      <li>
        <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
      </li>
    </ul>
  </div>
 </div>
</nav>`
                        : dark === true && globalVariable === 'HTML' ?
                            `<nav class="border-gray-200 bg-gray-900">
 <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <div class="flex items-center space-x-3 rtl:space-x-reverse">
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 20 16">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"></path>
    </svg>
    <span class="self-center text-xl font-semibold whitespace-nowrap text-white">Code Snippet</span>
  </div>
  <div class="flex items-center md:order-2 mt-3 space-x-3 md:space-x-0 rtl:space-x-reverse group relative">
    <button id="dropdownNavbarLink" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-gray-600" data-dropdown-placement="bottom">
      <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF" stroke-width="2.242">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.036"></g>
        <g id="SVGRepo_iconCarrier">
          <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#FFFFFF"></path>
          <path d="M16.807 19.0112C15.4398 19.9504 13.7841 20.5 12 20.5C10.2159 20.5 8.56023 19.9503 7.193 19.0111C6.58915 18.5963 6.33109 17.8062 6.68219 17.1632C7.41001 15.8302 8.90973 15 12 15C15.0903 15 16.59 15.8303 17.3178 17.1632C17.6689 17.8062 17.4108 18.5964 16.807 19.0112Z" fill="#FFFFFF"></path>
          <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3432 6 9.00004 7.34315 9.00004 9C9.00004 10.6569 10.3432 12 12 12Z" fill="#FFFFFF"></path>
        </g>
      </svg>
      <div id="dropdownNavbar" class="group-hover:block z-10 absolute hidden mt-10 right-0 font-normal divide-y shadow w-44 bg-gray-800 divide-gray-600">
        <div class="px-4 py-3 rounded-t bg-gray-800">
          <span class="block text-sm text-white">Bonnie Green</span>
          <span class="block text-sm truncate text-gray-400">name@email.com</span>
        </div>
        <ul class="py-2 rounded-b text-sm bg-gray-800" aria-labelledby="user-menu-button">
          <li>
            <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>
    </button>
    <button data-collapse-toggle="navbar-default" type="button" class="items-center p-2 w-10 h-10 justify-center text-sm text-gray-900-500 rounded-lg md:hidden sm:inline-flex hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-white-200 text-gray-900 hover:bg-white-600 focus:ring-white-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
  </div>
  <div class="items-center justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white bg-gray-800 md:bg-gray-900 border-gray-700">
      <li>
        <a href="#" class="block py-2 px-3 bg-yellow-500 rounded md:bg-transparent md:p-0 md:text-yellow-500" aria-current="page">Home</a>
      </li>
      <li class="group relative">
        <button id="dropdownNavbarLink" class="flex items-center justify-between w-full py-2 px-3 rounded hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-0 md:w-auto text-white hover:text-yellow-500 focus:text-white border-gray-700 hover:bg-gray-700 md:hover:bg-transparent">Dropdown
          <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>
        <div id="dropdownNavbar" class="group-hover:block hidden z-10 absolute font-normal bg-white divide-y rounded-lg shadow w-44 divide-gray-600 ">
          <ul class="py-2 text-sm text-gray-400 bg-gray-800" aria-labelledby="dropdownLargeButton">
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-600 hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-600 hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-600 hover:text-white">Earnings</a>
            </li>
          </ul>
          <div class="py-1 bg-gray-800">
            <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white">Sign out</a>
          </div>
        </div>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 rounded md:p-0 text-white md:hover:text-yellow-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 rounded md:p-0 text-white md:hover:text-yellow-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 rounded md:p-0 text-white md:hover:text-yellow-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Pricing</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 rounded md:p-0 text-white md:hover:text-yellow-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
 </div>
</nav>` :
                            `<nav className="border-gray-200 bg-gray-900">
 <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <div className="flex items-center space-x-3 rtl:space-x-reverse">
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 20 16">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"></path>
    </svg>
    <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Code Snippet</span>
  </div>
  <div className="flex items-center md:order-2 mt-3 space-x-3 md:space-x-0 rtl:space-x-reverse group relative">
    <button id="dropdownNavbarLink" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-gray-600" data-dropdown-placement="bottom">
      <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF" strokeWidth="2.242">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.036"></g>
        <g id="SVGRepo_iconCarrier">
          <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#FFFFFF"></path>
          <path d="M16.807 19.0112C15.4398 19.9504 13.7841 20.5 12 20.5C10.2159 20.5 8.56023 19.9503 7.193 19.0111C6.58915 18.5963 6.33109 17.8062 6.68219 17.1632C7.41001 15.8302 8.90973 15 12 15C15.0903 15 16.59 15.8303 17.3178 17.1632C17.6689 17.8062 17.4108 18.5964 16.807 19.0112Z" fill="#FFFFFF"></path>
          <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3432 6 9.00004 7.34315 9.00004 9C9.00004 10.6569 10.3432 12 12 12Z" fill="#FFFFFF"></path>
        </g>
      </svg>
      <div id="dropdownNavbar" className="group-hover:block z-10 absolute hidden mt-10 right-0 font-normal divide-y shadow w-44 bg-gray-800 divide-gray-600">
        <div className="px-4 py-3 rounded-t bg-gray-800">
          <span className="block text-sm text-white">Bonnie Green</span>
          <span className="block text-sm truncate text-gray-400">name@email.com</span>
        </div>
        <ul className="py-2 rounded-b text-sm bg-gray-800" aria-labelledby="user-menu-button">
          <li>
            <Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white">Dashboard</Link>
          </li>
          <li>
            <Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white">Settings</Link>
          </li>
          <li>
            <Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white">Earnings</Link>
          </li>
          <li>
            <Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white">Sign out</Link>
          </li>
        </ul>
      </div>
    </button>
    <button data-collapse-toggle="navbar-default" type="button" className="items-center p-2 w-10 h-10 justify-center text-sm text-gray-900-500 rounded-lg md:hidden sm:inline-flex hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-white-200 text-gray-900 hover:bg-white-600 focus:ring-white-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
  </div>
  <div className="items-center justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white bg-gray-800 md:bg-gray-900 border-gray-700">
      <li>
        <Link href="#" className="block py-2 px-3 bg-yellow-500 rounded md:bg-transparent md:p-0 md:text-yellow-500" aria-current="page">Home</Link>
      </li>
      <li className="group relative">
        <button id="dropdownNavbarLink" className="flex items-center justify-between w-full py-2 px-3 rounded hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-0 md:w-auto text-white hover:text-yellow-500 focus:text-white border-gray-700 hover:bg-gray-700 md:hover:bg-transparent">Dropdown
          <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>
        <div id="dropdownNavbar" className="group-hover:block hidden z-10 absolute font-normal bg-white divide-y rounded-lg shadow w-44 divide-gray-600 ">
          <ul className="py-2 text-sm text-gray-400 bg-gray-800" aria-labelledby="dropdownLargeButton">
            <li>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">Dashboard</Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">Settings</Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">Earnings</Link>
            </li>
          </ul>
          <div className="py-1 bg-gray-800">
            <Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white">Sign out</Link>
          </div>
        </div>
      </li>
      <li>
        <Link href="#" className="block py-2 px-3 rounded md:p-0 text-white md:hover:text-yellow-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">About</Link>
      </li>
      <li>
        <Link href="#" className="block py-2 px-3 rounded md:p-0 text-white md:hover:text-yellow-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Services</Link>
      </li>
      <li>
        <Link href="#" className="block py-2 px-3 rounded md:p-0 text-white md:hover:text-yellow-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Pricing</Link>
      </li>
      <li>
        <Link href="#" className="block py-2 px-3 rounded md:p-0 text-white md:hover:text-yellow-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Contact</Link>
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


