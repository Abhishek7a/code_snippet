import React, { useEffect, useRef } from 'react'
import ClipBoard from '../../Components/ClipBoard';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-okaidia.css';
import '../prism-custom-theme.css';
import ClipboardJS from 'clipboard';
import { useAppContext } from '../../AppContext';
import footer2 from '../../Components/footer/Footer2';

export default function CodeFooter1() {
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

    const Footer2 = ClipBoard(footer2);
    return (
        <div className='w-11/12 m-auto'>
            <Footer2 />
            <pre className='mt-0'>
                <code ref={codeRef} className="language-html">{dark === false && globalVariable === 'HTML' ?
                    `<footer class="text-gray-600 body-font dark:text-gray-50 dark:bg-gray-800">
 <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-red-700 rounded-full" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"></path>
            </svg>
            <span class="ml-3 text-xl">Code Snippet</span>
        </a>
        <p class="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav class="list-none mb-10">
                <li>
                    <a class="text-gray-600 dark:hover:text-gray-100">First Link</a>
                </li>
                <li>
                    <a class="text-gray-600 dark:hover:text-gray-100">Second Link</a>
                </li>
                <li>
                    <a class="text-gray-600 dark:hover:text-gray-100">Third Link</a>
                </li>
                <li>
                    <a class="text-gray-600 dark:hover:text-gray-100">Fourth Link</a>
                </li>
            </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav class="list-none mb-10">
                <li>
                    <a class="text-gray-600 dark:hover:text-gray-100">First Link</a>
                </li>
                <li>
                    <a class="text-gray-600 dark:hover:text-gray-100">Second Link</a>
                </li>
                <li>
                    <a class="text-gray-600 dark:hover:text-gray-100">Third Link</a>
                </li>
                <li>
                    <a class="text-gray-600 dark:hover:text-gray-100">Fourth Link</a>
                </li>
            </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav class="list-none mb-10">
                <li>
                    <a class="text-gray-600 dark:hover:text-gray-100">First Link</a>
                </li>
                <li>
                    <a class="text-gray-600 dark:hover:text-gray-100">Second Link</a>
                </li>
                <li>
                    <a class="text-gray-600 dark:hover:text-gray-100">Third Link</a>
                </li>
                <li>
                    <a class="text-gray-600 dark:hover:text-gray-100">Fourth Link</a>
                </li>
            </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav class="list-none mb-10">
                <li>
                    <a class="text-gray-600 dark:hover:text-gray-100">First Link</a>
                </li>
                <li>
                    <a class="text-gray-600 dark:hover:text-gray-100">Second Link</a>
                </li>
                <li>
                    <a class="text-gray-600 dark:hover:text-gray-100">Third Link</a>
                </li>
                <li>
                    <a class="text-gray-600 dark:hover:text-gray-100">Fourth Link</a>
                </li>
            </nav>
        </div>
    </div>
 </div>
 <div class="bg-gray-100 dark:bg-gray-900">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p class="text-gray-500 text-sm text-center sm:text-left">© 2024 Code Snippet —
            <a href="#" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">codesnippett@gmail.com</a>
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a class="text-gray-500 hover:text-red-700 cursor-pointer">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
            </a>
            <a class="ml-3 text-gray-500 hover:text-red-700 cursor-pointer">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
            </a>
            <a class="ml-3 text-gray-500 hover:text-red-700 cursor-pointer">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
            </a>
            <a class="ml-3 text-gray-500 hover:text-red-700 cursor-pointer">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
            </a>
        </span>
    </div>
 </div>
</footer>`: dark === false && globalVariable === 'React' ?
                        `<footer className="text-gray-600 body-font dark:text-gray-50 dark:bg-gray-800">
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
            <Link className="text-gray-500 hover:text-red-700 cursor-pointer">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
            </Link>
            <Link className="ml-3 text-gray-500 hover:text-red-700 cursor-pointer">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
            </Link>
            <Link className="ml-3 text-gray-500 hover:text-red-700 cursor-pointer">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
            </Link>
            <Link className="ml-3 text-gray-500 hover:text-red-700 cursor-pointer">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
            </Link>
        </span>
    </div>
 </div>
</footer>`
                        : dark === true && globalVariable === 'HTML' ?
                            `<footer class="body-font text-gray-50 bg-gray-800">
 <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
  <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-50">
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-red-700 rounded-full" viewBox="0 0 20 16">
        <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"></path>
      </svg>
      <span class="ml-3 text-xl">Code Snippet</span>
    </a>
    <p class="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
  </div>
  <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 class="title-font font-medium text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
      <nav class="list-none mb-10">
        <li>
          <a class="text-gray-600 hover:text-gray-100">First Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-100">Second Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-100">Third Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-100">Fourth Link</a>
        </li>
      </nav>
    </div>
    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 class="title-font font-medium text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
      <nav class="list-none mb-10">
        <li>
          <a class="text-gray-600 hover:text-gray-100">First Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-100">Second Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-100">Third Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-100">Fourth Link</a>
        </li>
      </nav>
    </div>
    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 class="title-font font-medium text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
      <nav class="list-none mb-10">
        <li>
          <a class="text-gray-600 hover:text-gray-100">First Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-100">Second Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-100">Third Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-100">Fourth Link</a>
        </li>
      </nav>
    </div>
    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 class="title-font font-medium text-gray-50 tracking-widest text-sm mb-3">CATEGORIES</h2>
      <nav class="list-none mb-10">
        <li>
          <a class="text-gray-600 hover:text-gray-100">First Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-100">Second Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-100">Third Link</a>
        </li>
        <li>
          <a class="text-gray-600 hover:text-gray-100">Fourth Link</a>
        </li>
      </nav>
    </div>
  </div>
 </div>
 <div class="bg-gray-900">
  <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
    <p class="text-gray-500 text-sm text-center sm:text-left">© 2024 Code Snippet —
      <a href="#" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">codesnippett@gmail.com</a>
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
      <a class="text-gray-500 hover:text-red-700 cursor-pointer">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500 hover:text-red-700 cursor-pointer">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500 hover:text-red-700 cursor-pointer">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500 hover:text-red-700 cursor-pointer">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
 </div>
</footer>` :
                            ``}
                </code >
            </pre >
        </div>
    )
}


