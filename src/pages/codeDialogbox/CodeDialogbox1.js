import React, { useEffect, useRef } from 'react'
import ClipBoard from '../../Components/ClipBoard';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-okaidia.css';
import '../prism-custom-theme.css';
import ClipboardJS from 'clipboard';
import { useAppContext } from '../../AppContext';
import dialogbox from '../../Components/dialogBox/DialogBox1';

export default function CodeDialogbox1() {
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

  const Dialogbox = ClipBoard(dialogbox);
  return (
    <div className='w-11/12 m-auto'>
      <Dialogbox />
      <pre className='mt-0'>
        <code ref={codeRef} className="language-html">{dark === false && globalVariable === 'HTML' ?
          `<main id="content" role="main" class="w-full max-w-md mx-auto p-6">
  <div class="mt-7 bg-gray-50 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
    <div class="p-4 sm:p-7">
      <div class="text-center">
        <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Forgot password?</h1>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Remember your password?
          <a class="text-blue-600 decoration-2 ml-3 font-medium" href="#">
            Login here
          </a>
        </p>
      </div>
      <div class="mt-5">
        <form>
          <div class="grid gap-y-4">
            <div>
              <label for="email" class="block text-sm font-bold ml-1 mb-2 dark:text-white">Email address</label>
              <div class="relative">
                <input type="email" id="email" name="email" class="py-3 outline-blue-500 px-4 block w-full border-2 border-gray-200 dark:border-gray-500 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm dark:bg-gray-700" required aria-describedby="email-error"></input>
              </div>
              <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
            </div>
            <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md  border-transparent font-semibold bg-blue-500 text-gray-50 hover:bg-blue-600 focus:outline-none focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 ">Reset password</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <p class="mt-3 flex justify-center items-center text-center divide-x divide-gray-300 dark:divide-gray-700">
    <a class="pr-3.5 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200" href="#" target="_blank">
      <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
      View Github
    </a>
    <a class="pl-3 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2  hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200 " href="#">
      Contact us!
    </a>
  </p>
</main>` : dark === false && globalVariable === 'React' ?
            `<main id="content" role="main" className="w-full max-w-md mx-auto p-6">
  <div className="mt-7 bg-gray-50 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
    <div className="p-4 sm:p-7">
      <div className="text-center">
        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Forgot password?</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Remember your password?
          <Link className="text-blue-600 decoration-2 ml-3 font-medium" to="#">
            Login here
          </Link>
        </p>
      </div>
      <div className="mt-5">
        <form>
          <div className="grid gap-y-4">
            <div>
              <label for="email" className="block text-sm font-bold ml-1 mb-2 dark:text-white">Email address</label>
              <div className="relative">
                <input type="email" id="email" name="email" className="py-3 outline-blue-500 px-4 block w-full border-2 border-gray-200 dark:border-gray-500 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm dark:bg-gray-700" required aria-describedby="email-error" />
              </div>
              <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
            </div>
            <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md  border-transparent font-semibold bg-blue-500 text-gray-50 hover:bg-blue-600 focus:outline-none focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 ">Reset password</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <p className="mt-3 flex justify-center items-center text-center divide-x divide-gray-300 dark:divide-gray-700">
    <Link className="pr-3.5 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200" to="#" target="_blank">
      <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
      View Github
    </Link>
    <Link className="pl-3 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200 " to="#">
      Contact us!
    </Link>
  </p>
</main>` : dark === true && globalVariable === 'HTML' ?
              `<main id="content" role="main" class="w-full max-w-md mx-auto p-6">
  <div class="mt-7 rounded-xl shadow-lg bg-gray-800 border-gray-700">
    <div class="p-4 sm:p-7">
      <div class="text-center">
        <h1 class="block text-2xl font-bold text-white">Forgot password?</h1>
        <p class="mt-2 text-sm text-gray-400">
          Remember your password?
          <a class="text-blue-600 decoration-2 ml-3 font-medium" href="#">
            Login here
          </a>
        </p>
      </div>
      <div class="mt-5">
        <form>
          <div class="grid gap-y-4">
            <div>
              <label for="email" class="block text-sm font-bold ml-1 mb-2 text-white">Email address</label>
              <div class="relative">
                <input type="email" id="email" name="email" class="py-3 outline-blue-500 px-4 block w-full border-2 border-gray-500 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm bg-gray-700" required aria-describedby="email-error"></input>
              </div>
              <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
            </div>
            <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md  border-transparent font-semibold bg-blue-500 text-gray-50 hover:bg-blue-600 focus:outline-none focus:ring-offset-2 transition-all text-sm focus:ring-offset-gray-800 ">Reset password</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <p class="mt-3 flex justify-center items-center text-center divide-x divide-gray-700">
    <a class="pr-3.5 inline-flex items-center gap-x-2 text-sm decoration-2 text-gray-500 hover:text-gray-200" href="#" target="_blank">
      <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
      View Github
    </a>
    <a class="pl-3 inline-flex items-center gap-x-2 text-sm decoration-2 text-gray-500 hover:text-gray-200 " href="#">
      Contact us!
    </a>
  </p>
</main>` :
              `<main id="content" role="main" className="w-full max-w-md mx-auto p-6">
  <div className="mt-7 rounded-xl shadow-lg bg-gray-800 border-gray-700">
    <div className="p-4 sm:p-7">
      <div className="text-center">
        <h1 className="block text-2xl font-bold text-white">Forgot password?</h1>
        <p className="mt-2 text-sm text-gray-400">
          Remember your password?
          <Link className="text-blue-600 decoration-2 ml-3 font-medium" to="#">
            Login here
          </Link>
        </p>
      </div>
      <div className="mt-5">
        <form>
          <div className="grid gap-y-4">
            <div>
              <label for="email" className="block text-sm font-bold ml-1 mb-2 text-white">Email address</label>
              <div className="relative">
                <input type="email" id="email" name="email" className="py-3 outline-blue-500 px-4 block w-full border-2 border-gray-500 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm bg-gray-700" required aria-describedby="email-error" />
              </div>
              <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
            </div>
            <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md  border-transparent font-semibold bg-blue-500 text-gray-50 hover:bg-blue-600 focus:outline-none focus:ring-offset-2 transition-all text-sm focus:ring-offset-gray-800 ">Reset password</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <p className="mt-3 flex justify-center items-center text-center divide-x divide-gray-700">
    <Link className="pr-3.5 inline-flex items-center gap-x-2 text-sm decoration-2 text-gray-500 hover:text-gray-200" to="#" target="_blank">
      <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
      View Github
    </Link>
    <Link className="pl-3 inline-flex items-center gap-x-2 text-sm decoration-2 text-gray-500 hover:text-gray-200 " to="#">
      Contact us!
    </Link>
  </p>
</main>`}
        </code>
      </pre>
    </div>
  )
}


