import React, { useEffect, useRef } from 'react'
import ClipBoard from '../../Components/ClipBoard';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-okaidia.css';
import '../prism-custom-theme.css';
import ClipboardJS from 'clipboard';
import { useAppContext } from '../../AppContext';
import dialogbox from '../../Components/dialogBox/DialogBox3';

export default function CodeDialogbox3() {
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

  const DialogBox3 = ClipBoard(dialogbox);
  return (
    <div className='w-11/12 m-auto'>
      <DialogBox3 />
      <pre className='mt-0'>
        <code ref={codeRef} className="language-html">{dark === false && globalVariable === 'HTML' ?
          `<body class="antialiased bg-slate-200 dark:bg-gray-800">
  <div class="max-w-lg mx-auto bg-gray-50 p-8 px-4 rounded-xl shadow shadow-slate-300 dark:bg-gray-900">
    <h1 class="text-4xl font-medium dark:text-gray-50 text-gray-900">Reset password</h1>
    <p class="text-slate-500 mt-2">Fill up the form to reset the password</p>
    <form action="" class="my-10">
      <div class="flex flex-col space-y-5">
        <label for="password">
          <p class="font-medium text-slate-700 pb-2 dark:text-gray-300">Password</p>
          <input id="password" name="password" type="password" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-800" placeholder="*******"></input>
        </label>
        <label for="password">
          <p class="font-medium text-slate-700 pb-2 dark:text-gray-300">Conform Password</p>
          <input id="password" name="password" type="password" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-800" placeholder="*******"></input>
        </label>
        <button class="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"></path>
          </svg>
          <span>Reset password</span>
        </button>
        <p class="text-center dark:text-gray-500">Not registered yet? <a href="#" class="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Register now </span><span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
        </svg></span></a></p>
      </div>
    </form>
  </div>
</body>` : dark === false && globalVariable === 'React' ?
            `<body className="antialiased bg-slate-200 dark:bg-gray-800">
  <div className="max-w-lg mx-auto bg-gray-50 p-8 px-4 rounded-xl shadow shadow-slate-300 dark:bg-gray-900">
    <h1 className="text-4xl font-medium dark:text-gray-50 text-gray-900">Reset password</h1>
    <p className="text-slate-500 mt-2">Fill up the form to reset the password</p>
    <form action="" className="my-10">
      <div className="flex flex-col space-y-5">
        <label for="password">
          <p className="font-medium text-slate-700 pb-2 dark:text-gray-300">Password</p>
          <input id="password" name="password" type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-800" placeholder="*******" />
        </label>
        <label for="password">
          <p className="font-medium text-slate-700 pb-2 dark:text-gray-300">Conform Password</p>
          <input id="password" name="password" type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-800" placeholder="*******" />
        </label>
        <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
          </svg>
          <span>Reset password</span>
        </button>
        <p className="text-center dark:text-gray-500">Not registered yet? <Link to="#" className="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Register now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg></span></Link></p>
      </div>
    </form>
  </div>
</body>` : dark === true && globalVariable === 'HTML' ?
              `<body class="antialiased bg-gray-800">
  <div class="max-w-lg mx-auto p-8 px-4 rounded-xl shadow shadow-slate-300 bg-gray-900">
    <h1 class="text-4xl font-medium text-gray-50">Reset password</h1>
    <p class="text-slate-500 mt-2">Fill up the form to reset the password</p>
    <form action="" class="my-10">
      <div class="flex flex-col space-y-5">
        <label for="password">
          <p class="font-medium pb-2 text-gray-300">Password</p>
          <input id="password" name="password" type="password" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-800" placeholder="*******"></input>
        </label>
        <label for="password">
          <p class="font-medium pb-2 text-gray-300">Conform Password</p>
          <input id="password" name="password" type="password" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-800" placeholder="*******"></input>
        </label>
        <button class="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"></path>
          </svg>
          <span>Reset password</span>
        </button>
        <p class="text-center text-gray-500">Not registered yet? <a href="#" class="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Register now </span><span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
        </svg></span></a></p>
      </div>
    </form>
  </div>
</body>` :
              `<body className="antialiased bg-gray-800">
  <div className="max-w-lg mx-auto p-8 px-4 rounded-xl shadow shadow-slate-300 bg-gray-900">
    <h1 className="text-4xl font-medium text-gray-50">Reset password</h1>
    <p className="text-slate-500 mt-2">Fill up the form to reset the password</p>
    <form action="" className="my-10">
      <div className="flex flex-col space-y-5">
        <label for="password">
          <p className="font-medium pb-2 text-gray-300">Password</p>
          <input id="password" name="password" type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-800" placeholder="*******" />
        </label>
        <label for="password">
          <p className="font-medium pb-2 text-gray-300">Conform Password</p>
          <input id="password" name="password" type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-800" placeholder="*******" />
        </label>
        <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
          </svg>
          <span>Reset password</span>
        </button>
        <p className="text-center text-gray-500">Not registered yet? <Link to="#" className="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Register now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg></span></Link></p>
      </div>
    </form>
  </div>
</body>`}
        </code>
      </pre>
    </div>
  )
}


