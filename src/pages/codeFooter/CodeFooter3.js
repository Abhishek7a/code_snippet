import React, { useEffect, useRef } from 'react'
import ClipBoard from '../../Components/ClipBoard';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-okaidia.css';
import '../prism-custom-theme.css';
import ClipboardJS from 'clipboard';
import { useAppContext } from '../../AppContext';
import footer3 from '../../Components/footer/Footer3';

export default function CodeFooter3() {
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

    const Footer3 = ClipBoard(footer3);
    return (
        <div className='w-11/12 m-auto'>
            <Footer3 />
            <pre className='mt-0'>
                <code ref={codeRef} className="language-html">{dark === false && globalVariable === 'HTML' ?
                    `<footer class="text-gray-600 body-font dark:bg-gray-900 dark:text-gray-50">
 <div class="container px-5 py-10 mx-auto dark:bg-gray-800">
    <div class="flex flex-wrap md:text-left text-center -mb-10 -mx-4 ">
        <div class="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav class="list-none mb-10">
                <li>
                    <a class="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">First Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Second Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Third Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Fourth Link</a>
                </li>
            </nav>
        </div>
        <div class="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav class="list-none mb-10">
                <li>
                    <a class="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">First Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Second Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Third Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Fourth Link</a>
                </li>
            </nav>
        </div>
        <div class="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav class="list-none mb-10">
                <li>
                    <a class="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">First Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Second Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Third Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Fourth Link</a>
                </li>
            </nav>
        </div>
        <div class="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav class="list-none mb-10">
                <li>
                    <a class="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">First Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Second Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Third Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Fourth Link</a>
                </li>
            </nav>
        </div>
        <div class="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav class="list-none mb-10">
                <li>
                    <a class="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">First Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Second Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Third Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Fourth Link</a>
                </li>
            </nav>
        </div>
        <div class="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav class="list-none mb-10">
                <li>
                    <a class="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">First Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Second Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Third Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Fourth Link</a>
                </li>
            </nav>
        </div>
    </div>
 </div>
 <div class="border-t border-gray-200 dark:bg-gray-800">
    <div class="container px-5 py-8 flex flex-wrap mx-auto items-center">
        <div class="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
            <div class="relative sm:w-64 w-40 sm:mr-4 mr-2">
                <label for="footer-field" class="leading-7 text-sm text-gray-600 dark:text-gray-50">Placeholder</label>
                <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-100 dark:bg-gray-700 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-blue-500 focus:border-blue-700 text-base outline-none text-gray-700 dark:text-gray-50 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
            </div>
            <button class="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-00 rounded">Submit</button>
            <p class="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Bitters chicharrones fanny pack
                <br class="lg:block hidden" />waistcoat green juice
            </p>
        </div>
        <span class="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
            <a class="text-gray-500 hover:text-blue-700 cursor-pointer">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
            </a>
            <a class="ml-3 text-gray-500 hover:text-blue-700 cursor-pointer">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
            </a>
            <a class="ml-3 text-gray-500 hover:text-blue-700 cursor-pointer">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
            </a>
            <a class="ml-3 text-gray-500 hover:text-blue-700 cursor-pointer">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
            </a>
        </span>
    </div>
 </div>
 <div class="bg-gray-100 dark:bg-gray-900">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p class="text-gray-500 dark:text-gray-50 text-sm text-center sm:text-left">© 2024 Code Snippet —
            <a href="#" class="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">codesnippett@gmail.com</a>
        </p>
        <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Enamel pin tousled raclette tacos irony</span>
    </div>
 </div>
</footer>`: dark === false && globalVariable === 'React' ?
                        `<footer className="text-gray-600 body-font dark:bg-gray-900 dark:text-gray-50">
 <div className="container px-5 py-10 mx-auto dark:bg-gray-800">
    <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4 ">
        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
                <li>
                    <Link className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">First Link</Link>
                </li>
                <li>
                    <Link className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Second Link</Link>
                </li>
                <li>
                    <Link className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Third Link</Link>
                </li>
                <li>
                    <Link className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Fourth Link</Link>
                </li>
            </nav>
        </div>
        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
                <li>
                    <Link className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">First Link</Link>
                </li>
                <li>
                    <Link className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Second Link</Link>
                </li>
                <li>
                    <Link className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Third Link</Link>
                </li>
                <li>
                    <Link className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Fourth Link</Link>
                </li>
            </nav>
        </div>
        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
                <li>
                    <Link className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">First Link</Link>
                </li>
                <li>
                    <Link className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Second Link</Link>
                </li>
                <li>
                    <Link className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Third Link</Link>
                </li>
                <li>
                    <Link className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Fourth Link</Link>
                </li>
            </nav>
        </div>
        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
                <li>
                    <Link className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">First Link</Link>
                </li>
                <li>
                    <Link className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Second Link</Link>
                </li>
                <li>
                    <Link className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Third Link</Link>
                </li>
                <li>
                    <Link className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Fourth Link</Link>
                </li>
            </nav>
        </div>
        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
                <li>
                    <Link className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">First Link</Link>
                </li>
                <li>
                    <Link className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Second Link</Link>
                </li>
                <li>
                    <Link className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Third Link</Link>
                </li>
                <li>
                    <Link className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Fourth Link</Link>
                </li>
            </nav>
        </div>
        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
                <li>
                    <Link className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">First Link</Link>
                </li>
                <li>
                    <Link className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Second Link</Link>
                </li>
                <li>
                    <Link className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Third Link</Link>
                </li>
                <li>
                    <Link className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-50">Fourth Link</Link>
                </li>
            </nav>
        </div>
    </div>
 </div>
 <div className="border-t border-gray-200 dark:bg-gray-800">
    <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
        <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                <label for="footer-field" className="leading-7 text-sm text-gray-600 dark:text-gray-50">Placeholder</label>
                <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 dark:bg-gray-700 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-blue-500 focus:border-blue-700 text-base outline-none text-gray-700 dark:text-gray-50 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-00 rounded">Submit</button>
            <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Bitters chicharrones fanny pack
                <br className="lg:block hidden" />waistcoat green juice
            </p>
        </div>
        <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
            <Link className="text-gray-500 hover:text-blue-700 cursor-pointer">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
            </Link>
            <Link className="ml-3 text-gray-500 hover:text-blue-700 cursor-pointer">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
            </Link>
            <Link className="ml-3 text-gray-500 hover:text-blue-700 cursor-pointer">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
            </Link>
            <Link className="ml-3 text-gray-500 hover:text-blue-700 cursor-pointer">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
            </Link>
        </span>
    </div>
 </div>
 <div className="bg-gray-100 dark:bg-gray-900">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-500 dark:text-gray-50 text-sm text-center sm:text-left">© 2024 Code Snippet —
            <Link href="#" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">codesnippett@gmail.com</Link>
        </p>
        <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Enamel pin tousled raclette tacos irony</span>
    </div>
 </div>
</footer>`
                        : dark === true && globalVariable === 'HTML' ?
                            `<footer class="body-font bg-gray-900 text-gray-50">
 <div class="container px-5 py-10 mx-auto bg-gray-800">
  <div class="flex flex-wrap md:text-left text-center -mb-10 -mx-4 ">
    <div class="lg:w-1/6 md:w-1/2 w-full px-4">
      <h2 class="title-font font-medium text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
      <nav class="list-none mb-10">
        <li>
          <a class="text-gray-600 hover:text-gray-50">First Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-50">Second Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-50">Third Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-50">Fourth Link</a>
        </li>
      </nav>
    </div>
    <div class="lg:w-1/6 md:w-1/2 w-full px-4">
      <h2 class="title-font font-medium text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
      <nav class="list-none mb-10">
        <li>
          <a class="text-gray-600 hover:text-gray-50">First Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-50">Second Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-50">Third Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-50">Fourth Link</a>
        </li>
      </nav>
    </div>
    <div class="lg:w-1/6 md:w-1/2 w-full px-4">
      <h2 class="title-font font-medium text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
      <nav class="list-none mb-10">
        <li>
          <a class="text-gray-600 hover:text-gray-50">First Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-50">Second Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-50">Third Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-50">Fourth Link</a>
        </li>
      </nav>
    </div>
    <div class="lg:w-1/6 md:w-1/2 w-full px-4">
      <h2 class="title-font font-medium text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
      <nav class="list-none mb-10">
        <li>
          <a class="text-gray-600 hover:text-gray-50">First Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-50">Second Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-50">Third Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-50">Fourth Link</a>
        </li>
      </nav>
    </div>
    <div class="lg:w-1/6 md:w-1/2 w-full px-4">
      <h2 class="title-font font-medium text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
      <nav class="list-none mb-10">
        <li>
          <a class="text-gray-600 hover:text-gray-50">First Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-50">Second Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-50">Third Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-50">Fourth Link</a>
        </li>
      </nav>
    </div>
    <div class="lg:w-1/6 md:w-1/2 w-full px-4">
      <h2 class="title-font font-medium text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
      <nav class="list-none mb-10">
        <li>
          <a class="text-gray-600 hover:text-gray-50">First Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-50">Second Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-50">Third Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-50">Fourth Link</a>
        </li>
      </nav>
    </div>
  </div>
 </div>
 <div class="border-t border-gray-200 bg-gray-800">
  <div class="container px-5 py-8 flex flex-wrap mx-auto items-center">
    <div class="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
      <div class="relative sm:w-64 w-40 sm:mr-4 mr-2">
        <label for="footer-field" class="leading-7 text-sm text-gray-50">Placeholder</label>
        <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-700 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-blue-500 focus:border-blue-700 text-base outline-none text-gray-50 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
      </div>
      <button class="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-00 rounded">Submit</button>
      <p class="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Bitters chicharrones fanny pack
        <br class="lg:block hidden" />waistcoat green juice
      </p>
    </div>
    <span class="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
      <a class="text-gray-500 hover:text-blue-700 cursor-pointer">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500 hover:text-blue-700 cursor-pointer">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500 hover:text-blue-700 cursor-pointer">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500 hover:text-blue-700 cursor-pointer">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
 </div>
 <div class="bg-gray-900">
  <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
    <p class="text-gray-50 text-sm text-center sm:text-left">© 2024 Code Snippet —
      <a href="#" class="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">codesnippett@gmail.com</a>
    </p>
    <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Enamel pin tousled raclette tacos irony</span>
  </div>
 </div>
</footer>` :
                            `<footer className="body-font bg-gray-900 text-gray-50">
 <div className="container px-5 py-10 mx-auto bg-gray-800">
  <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4 ">
    <div className="lg:w-1/6 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
      <nav className="list-none mb-10">
        <li>
          <Link className="text-gray-600 hover:text-gray-50">First Link</Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-50">Second Link</Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-50">Third Link</Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-50">Fourth Link</Link>
        </li>
      </nav>
    </div>
    <div className="lg:w-1/6 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
      <nav className="list-none mb-10">
        <li>
          <Link className="text-gray-600 hover:text-gray-50">First Link</Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-50">Second Link</Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-50">Third Link</Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-50">Fourth Link</Link>
        </li>
      </nav>
    </div>
    <div className="lg:w-1/6 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
      <nav className="list-none mb-10">
        <li>
          <Link className="text-gray-600 hover:text-gray-50">First Link</Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-50">Second Link</Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-50">Third Link</Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-50">Fourth Link</Link>
        </li>
      </nav>
    </div>
    <div className="lg:w-1/6 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
      <nav className="list-none mb-10">
        <li>
          <Link className="text-gray-600 hover:text-gray-50">First Link</Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-50">Second Link</Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-50">Third Link</Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-50">Fourth Link</Link>
        </li>
      </nav>
    </div>
    <div className="lg:w-1/6 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
      <nav className="list-none mb-10">
        <li>
          <Link className="text-gray-600 hover:text-gray-50">First Link</Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-50">Second Link</Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-50">Third Link</Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-50">Fourth Link</Link>
        </li>
      </nav>
    </div>
    <div className="lg:w-1/6 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
      <nav className="list-none mb-10">
        <li>
          <Link className="text-gray-600 hover:text-gray-50">First Link</Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-50">Second Link</Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-50">Third Link</Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-50">Fourth Link</Link>
        </li>
      </nav>
    </div>
  </div>
 </div>
 <div className="border-t border-gray-200 bg-gray-800">
  <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
    <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
      <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
        <label for="footer-field" className="leading-7 text-sm text-gray-50">Placeholder</label>
        <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-gray-700 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-blue-500 focus:border-blue-700 text-base outline-none text-gray-50 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <button className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-00 rounded">Submit</button>
      <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Bitters chicharrones fanny pack
        <br className="lg:block hidden" />waistcoat green juice
      </p>
    </div>
    <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
      <Link className="text-gray-500 hover:text-blue-700 cursor-pointer">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </Link>
      <Link className="ml-3 text-gray-500 hover:text-blue-700 cursor-pointer">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </Link>
      <Link className="ml-3 text-gray-500 hover:text-blue-700 cursor-pointer">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </Link>
      <Link className="ml-3 text-gray-500 hover:text-blue-700 cursor-pointer">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </Link>
    </span>
  </div>
 </div>
 <div className="bg-gray-900">
  <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
    <p className="text-gray-50 text-sm text-center sm:text-left">© 2024 Code Snippet —
      <Link href="#" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">codesnippett@gmail.com</Link>
    </p>
    <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Enamel pin tousled raclette tacos irony</span>
  </div>
 </div>
</footer>`}
                </code >
            </pre >
        </div>
    )
}


