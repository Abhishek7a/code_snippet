import React, { useEffect, useRef } from 'react'
import ClipBoard from '../../Components/ClipBoard';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-okaidia.css';
import '../prism-custom-theme.css';
import ClipboardJS from 'clipboard';
import { useAppContext } from '../../AppContext';
import email1 from '../../Components/email/Email1';

export default function CodeEmail1() {
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

    const Email1 = ClipBoard(email1);
    return (
        <div className='w-11/12 m-auto'>
            <Email1 />
            <pre className='mt-0'>
                <code ref={codeRef} className="language-html">{dark === false && globalVariable === 'HTML' ?
                    `<div class="w-full bg-gray-50 dark:bg-gray-900 shadow-xl rounded-lg flex overflow-x-auto custom-scrollbar">
    <div class="w-64 px-1 md:block hidden">
        <div class="h-16 flex items-center">
            <a href="#" class="w-48 mx-auto bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-gray-100 py-2 rounded space-x-2 transition duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <span>Compose</span>
            </a>
        </div>
        <div class="px-2 pt-4 pb-8 border-r border-gray-300">
            <ul class="space-y-2">
                <li>
                    <a class="bg-gray-300 dark:bg-gray-800 bg-opacity-30 text-blue-600 dark:text-gray-50  flex items-center justify-between py-1.5 px-4 rounded cursor-pointer">
                        <span class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                            </svg>
                            <span>Inbox</span>
                        </span>
                        <span class="bg-blue-600 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-full">3</span>
                    </a>
                </li>
                <li>
                    <a class="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700 dark:text-gray-400 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                        </svg>
                        <span>Starred</span>
                    </a>
                </li>
                <li>
                    <a class="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700 dark:text-gray-400 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>Snoozed</span>
                    </a>
                </li>
                <li>
                    <a class="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700 dark:text-gray-400 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                        </svg>
                        <span>Important</span>
                    </a>
                </li>
                <li>
                    <a class="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700 dark:text-gray-400 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                        <span>Sent</span>
                    </a>
                </li>
                <li>
                    <a class="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center justify-between text-gray-700 dark:text-gray-400 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                        <span class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                            <span>Drafts</span>
                        </span>
                        <span class="bg-blue-600 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-full">1</span>
                    </a>
                </li>
                <li>
                    <a class="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700 dark:text-gray-400 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                        <span>Spam</span>
                    </a>
                </li>
                <li>
                    <a class="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700 dark:text-gray-400 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                        <span>Trash</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="flex-1 px-3">
        <button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" class="inline-flex items-center mt-2 text-sm text-gray-500 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-900 md:hidden">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
        </button>
        <div class="h-16 flex items-center">
            <h4 class="text-lg font-bold dark:text-gray-100">New Message</h4>
        </div>
        <div class="mb-6 pr-2 dark:bg-gray-900">
            <div>
                <input type="text" name="to" id="to" class="dark:bg-gray-800 mt-1 px-3 py-2 w-full text-gray-700 dark:text-gray-400  border-b border-b-gray-300 focus:outline-none focus:ring-0 focus:border-transparent focus:border-b-gray-300 rounded-md" placeholder="To"></input>
            </div>
            <div>
                <input type="text" name="cc" id="cc" class="dark:bg-gray-800 mt-1 px-3 w-full text-gray-700 dark:text-gray-400 py-2 border-b border-b-gray-300 focus:outline-none focus:ring-0 focus:border-transparent focus:border-b-gray-300 rounded-md" placeholder="Cc"></input>
            </div>
            <div>
                <input type="text" name="bcc" id="bcc" class="dark:bg-gray-800 mt-1 px-3 w-full text-gray-700 dark:text-gray-400 py-2 border-b border-b-gray-300 focus:outline-none focus:ring-0 focus:border-transparent focus:border-b-gray-300 rounded-md" placeholder="Bcc"></input>
            </div>
            <div>
                <textarea id="body" class="dark:bg-gray-800 px-3 mt-1 w-full h-64 text-gray-700 dark:text-gray-400 border-b py-2 border-b-gray-300 focus:outline-none focus:ring-0 focus:border-transparent focus:border-b-gray-300 rounded-md" placeholder="Message..."></textarea>
            </div>
            <div class="flex flex-wrap items-center my-4 gap-2">
                <div class="w-40 flex items-center justify-between text-gray-500 dark:text-gray-50 px-2 py-1.5  border border-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
                    <div class="w-28 flex items-center space-x-1 ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                        </svg>
                        <span class="text-sm truncate">Review.zip</span>
                    </div>
                    <button class="hover:text-gray-900" title="Remove">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div class="w-40 flex items-center justify-between text-gray-500 dark:text-gray-50 px-2 py-1.5  border border-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
                    <div class="w-28 flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                        </svg>
                        <span class="text-sm truncate">Approve.zip</span>
                    </div>
                    <button class="hover:text-gray-900" title="Remove">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="flex items-center justify-between mt-4">
                <div class="flex items-center space-x-2 px-2">
                    <button class="bg-blue-600 hover:bg-blue-700 rounded-lg px-10 py-1.5 text-gray-100 hover:shadow-xl transition duration-150">Send</button>
                    <button title="Attach Files">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                        </svg>
                    </button>
                </div>
                <button class="mr-4 text-gray-700 dark:text-gray-400 hover:text-gray-900" title="Delete">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</div>`: dark === false && globalVariable === 'React' ?
                        `` : dark === true && globalVariable === 'HTML' ?
                            `` :
                            ``}
                </code>
            </pre>

        </div>
    )
}


