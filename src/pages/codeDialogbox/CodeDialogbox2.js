import React, { useEffect, useRef } from 'react'
import ClipBoard from '../../Components/ClipBoard';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-okaidia.css';
import '../prism-custom-theme.css';
import ClipboardJS from 'clipboard';
import { useAppContext } from '../../AppContext';
import dialogbox from '../../Components/dialogBox/DialogBox2';

export default function CodeDialogbox2() {
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

  const Dialogbox2 = ClipBoard(dialogbox);
  return (
    <div className='w-11/12 m-auto'>
      <Dialogbox2 />
      <pre className='mt-0'>
        <code ref={codeRef} className="language-html">{dark === false && globalVariable === 'HTML' ?
          `<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 dark:bg-gray-900 ">
  <div class="relative bg-gray-50 dark:bg-gray-800 px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
    <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
      <div class="flex flex-col items-center justify-center text-center space-y-2">
        <div class="font-semibold text-3xl dark:text-gray-100">
          <p>Email Verification</p>
        </div>
        <div class="flex flex-row text-sm font-medium text-gray-400 ">
          <p>We have sent a code to your email co**snippett@gmail.com</p>
        </div>
      </div>
      <div>
        <form action="" method="post">
          <div class="flex flex-col space-y-16">
            <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
              <div class="w-16 h-16 ">
                <input class="w-full h-full flex flex-col items-center justify-center text-center px-4 outline-none rounded-xl border-2 dark:border-0 border-gray-200 dark:border-gray-500  text-lg bg-gray-50 focus:bg-gray-50 focus:ring-1 ring-orange-500 dark:bg-gray-700" type="text" name="" id=""></input>
              </div>
              <div class="w-16 h-16 ">
                <input class="w-full h-full flex flex-col items-center justify-center text-center px-4 outline-none rounded-xl border-2 dark:border-0 border-gray-200 dark:border-gray-500 ml-1 text-lg bg-gray-50 focus:bg-gray-50 focus:ring-1 ring-orange-500 dark:bg-gray-700" type="text" name="" id=""></input>
              </div>
              <div class="w-16 h-16 ">
                <input class="w-full h-full flex flex-col items-center justify-center text-center px-4 outline-none rounded-xl border-2 dark:border-0 border-gray-200 dark:border-gray-500 ml-2 text-lg bg-gray-50 focus:bg-gray-50 focus:ring-1 ring-orange-500 dark:bg-gray-700" type="text" name="" id=""></input>
              </div>
              <div class="w-16 h-16 ">
                <input class="w-full h-full flex flex-col items-center ml-3 justify-center text-center px-4 outline-none rounded-xl border-2 dark:border-0 border-gray-200 dark:border-gray-500 text-lg bg-gray-50 focus:bg-gray-50 focus:ring-1 ring-orange-500 dark:bg-gray-700" type="text" name="" id=""></input>
              </div>
            </div>
            <div class="flex flex-col space-y-5">
              <div>
                <button class="flex flex-row items-center justify-center text-center w-full rounded-md outline-none py-3 bg-orange-500 border-none text-white text-sm shadow-sm">
                  Verify Account
                </button>
              </div>
              <div class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                <p>Didn't recieve code?</p> <a class="flex flex-row items-center text-orange-600" href="#" target="_blank" rel="noopener noreferrer">Resend</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>` : dark === false && globalVariable === 'React' ?
            `<div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 dark:bg-gray-900 ">
  <div className="relative bg-gray-50 dark:bg-gray-800 px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
    <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
      <div className="flex flex-col items-center justify-center text-center space-y-2">
        <div className="font-semibold text-3xl dark:text-gray-100">
          <p>Email Verification</p>
        </div>
        <div className="flex flex-row text-sm font-medium text-gray-400 ">
          <p>We have sent a code to your email co**@snippett.com</p>
        </div>
      </div>
      <div>
        <form action="" method="post">
          <div className="flex flex-col space-y-16">
            <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
              <div className="w-16 h-16">
                <input className="w-full h-full flex flex-col items-center justify-center text-center px-4 outline-none rounded-xl border-2 dark:border-0 border-gray-200 dark:border-gray-500  text-lg bg-gray-50 focus:bg-gray-50 focus:ring-1 ring-orange-500 dark:bg-gray-700" type="text" name="" id=""/>
              </div>
              <div className="w-16 h-16">
                <input className="w-full h-full flex flex-col items-center justify-center text-center px-4 outline-none rounded-xl border-2 dark:border-0 border-gray-200 dark:border-gray-500 ml-1 text-lg bg-gray-50 focus:bg-gray-50 focus:ring-1 ring-orange-500 dark:bg-gray-700" type="text" name="" id="" />
              </div>
              <div className="w-16 h-16">
                <input className="w-full h-full flex flex-col items-center justify-center text-center px-4 outline-none rounded-xl border-2 dark:border-0 border-gray-200 dark:border-gray-500 ml-2 text-lg bg-gray-50 focus:bg-gray-50 focus:ring-1 ring-orange-500 dark:bg-gray-700" type="text" name="" id="" />
              </div>
              <div className="w-16 h-16 ">
                <input className="w-full h-full flex flex-col items-center ml-3 justify-center text-center px-4 outline-none rounded-xl border-2 dark:border-0 border-gray-200 dark:border-gray-500 text-lg bg-gray-50 focus:bg-gray-50 focus:ring-1 ring-orange-500 dark:bg-gray-700" type="text" name="" id="" />
              </div>
            </div>
            <div className="flex flex-col space-y-5">
              <div>
                <button className="flex flex-row items-center justify-center text-center w-full rounded-md outline-none py-3 bg-orange-500 border-none text-white text-sm shadow-sm">
                  Verify Account
                </button>
              </div>
              <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                <p>Didn't recieve code?</p> <Link className="flex flex-row items-center text-orange-600" to="#" target="_blank" rel="noopener noreferrer">Resend</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>` : dark === true && globalVariable === 'HTML' ?
              `<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-900 ">
  <div class="relativebg-gray-800 px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
    <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
      <div class="flex flex-col items-center justify-center text-center space-y-2">
        <div class="font-semibold text-3xl text-gray-100">
          <p>Email Verification</p>
        </div>
        <div class="flex flex-row text-sm font-medium text-gray-400 ">
          <p>We have sent a code to your email co**snippett@gmail.com</p>
        </div>
      </div>
      <div>
        <form action="" method="post">
          <div class="flex flex-col space-y-16">
            <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
              <div class="w-16 h-16 ">
                <input class="w-full h-full flex flex-col items-center justify-center text-center px-4 outline-none rounded-xl border-0 border-gray-500  text-lg focus:bg-gray-50 focus:ring-1 ring-orange-500 bg-gray-700" type="text" name="" id=""></input>
              </div>
              <div class="w-16 h-16 ">
                <input class="w-full h-full flex flex-col items-center justify-center text-center px-4 outline-none rounded-xl border-0 border-gray-500 ml-1 text-lg focus:bg-gray-50 focus:ring-1 ring-orange-500 bg-gray-700" type="text" name="" id=""></input>
              </div>
              <div class="w-16 h-16 ">
                <input class="w-full h-full flex flex-col items-center justify-center text-center px-4 outline-none rounded-xl border-0 border-gray-500 ml-2 text-lg focus:bg-gray-50 focus:ring-1 ring-orange-500 bg-gray-700" type="text" name="" id=""></input>
              </div>
              <div class="w-16 h-16 ">
                <input class="w-full h-full flex flex-col items-center ml-3 justify-center text-center px-4 outline-none rounded-xl border-0 border-gray-500 text-lg focus:bg-gray-50 focus:ring-1 ring-orange-500 bg-gray-700" type="text" name="" id=""></input>
              </div>
            </div>
            <div class="flex flex-col space-y-5">
              <div>
                <button class="flex flex-row items-center justify-center text-center w-full rounded-md outline-none py-3 bg-orange-500 border-none text-white text-sm shadow-sm">
                  Verify Account
                </button>
              </div>
              <div class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                <p>Didn't recieve code?</p> <a class="flex flex-row items-center text-orange-600" href="#" target="_blank" rel="noopener noreferrer">Resend</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>` :
              `<div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-900 ">
  <div className="relative bg-gray-800 px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
    <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
      <div className="flex flex-col items-center justify-center text-center space-y-2">
        <div className="font-semibold text-3xl text-gray-100">
          <p>Email Verification</p>
        </div>
        <div className="flex flex-row text-sm font-medium text-gray-400 ">
          <p>We have sent a code to your email co**@snippett.com</p>
        </div>
      </div>
      <div>
        <form action="" method="post">
          <div className="flex flex-col space-y-16">
            <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
              <div className="w-16 h-16">
                <input className="w-full h-full flex flex-col items-center justify-center text-center px-4 outline-none rounded-xl border-0 border-gray-500  text-lg focus:bg-gray-50 focus:ring-1 ring-orange-500 bg-gray-700" type="text" name="" id="" />
              </div>
              <div className="w-16 h-16">
                <input className="w-full h-full flex flex-col items-center justify-center text-center px-4 outline-none rounded-xl border-0 border-gray-500 ml-1 text-lg focus:bg-gray-50 focus:ring-1 ring-orange-500 bg-gray-700" type="text" name="" id="" />
              </div>
              <div className="w-16 h-16">
                <input className="w-full h-full flex flex-col items-center justify-center text-center px-4 outline-none rounded-xl border-0 border-gray-500 ml-2 text-lg focus:bg-gray-50 focus:ring-1 ring-orange-500 bg-gray-700" type="text" name="" id="" />
              </div>
              <div className="w-16 h-16 ">
                <input className="w-full h-full flex flex-col items-center ml-3 justify-center text-center px-4 outline-none rounded-xl border-0 border-gray-500 text-lg focus:bg-gray-50 focus:ring-1 ring-orange-500 bg-gray-700" type="text" name="" id="" />
              </div>
            </div>
            <div className="flex flex-col space-y-5">
              <div>
                <button className="flex flex-row items-center justify-center text-center w-full rounded-md outline-none py-3 bg-orange-500 border-none text-white text-sm shadow-sm">
                  Verify Account
                </button>
              </div>
              <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                <p>Didn't recieve code?</p> <Link className="flex flex-row items-center text-orange-600" to="#" target="_blank" rel="noopener noreferrer">Resend</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>`}
        </code>
      </pre>
    </div>
  )
}


