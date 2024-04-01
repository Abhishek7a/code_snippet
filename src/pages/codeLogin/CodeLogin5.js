import React, { useEffect, useRef } from 'react'
import ClipBoard from '../../Components/ClipBoard';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-okaidia.css';
import '../prism-custom-theme.css';
import ClipboardJS from 'clipboard';
import { useAppContext } from '../../AppContext';
import login5 from '../../Components/login/Login5';

export default function CodeCard1() {
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

  const Login5 = ClipBoard(login5);
  return (
    <div className='w-11/12 m-auto'>
      <Login5 />
      <pre className='mt-0'>
        <code ref={codeRef} className="language-html">{dark === false && globalVariable === 'HTML' ?
          `<body>
  <div class="bg-gray-200 dark:bg-gray-800 w-full min-h-screen flex items-center justify-center">
    <div class="w-full py-8">
      <div class="flex items-center justify-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="w-10 h-10" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;">
          <path style="fill:#E41F11;" d="M0,260.908l174.648-81.136v38.568l-132.08,57.848v0.728l132.08,57.848v38.568L0,292.212V260.908z"></path>
          <path style="fill:#111827;" d="M201.6,387.9l77.864-263.8h36.752L238.4,387.9H201.6z"></path>
          <path style="fill:#00008B;" d="M512,293.284L337.352,373.34v-38.568l134.992-57.848v-0.728L337.352,218.34v-38.568L512,259.828 V293.284z"></path>
        </svg>
        <h1 class="text-3xl font-bold text-red-600 tracking-wider">Code </h1>
        <h1 class="text-3xl font-bold text-blue-800 tracking-wider">Snippet</h1>
      </div>
      <div class="bg-gray-100 dark:bg-gray-900 sm:w-1/2 mt-8 mx-auto px-4 py-8 rounded-lg shadow-2xl">
        <h2 class="text-center text-2xl font-bold tracking-wide text-gray-800 dark:text-gray-100">Sign Up</h2>
        <p class="text-center text-sm text-gray-500 mt-2">Already have an account? <a href="#" class="text-blue-600 hover:text-blue-700 hover:underline" title="Sign In">Sign in here</a></p>
        <form class="my-8 text-sm">
          <div class="flex flex-col my-4">
            <label for="name" class="text-gray-700 dark:text-gray-400">Name</label>
            <input type="text" name="name" id="name" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 dark:bg-gray-800" placeholder="Enter your name"></input>
          </div>
          <div class="flex flex-col my-4">
            <label for="email" class="text-gray-700 dark:text-gray-400">Email Address</label>
            <input type="email" name="email" id="email" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 dark:bg-gray-800" placeholder="Enter your email"></input>
          </div>
          <div class="flex flex-col my-4">
            <label for="password" class="text-gray-700 dark:text-gray-400">Password</label>
            <div class="relative flex items-center mt-2">
              <input id="password" class="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 dark:bg-gray-800" placeholder="Enter your password" type="password"></input>
              <button type="button" class="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </button>
            </div>
          </div>
          <div class="flex flex-col my-4">
            <label for="password_confirmation" class="text-gray-700 dark:text-gray-400">Password Confirmation</label>
            <div class="relative flex items-center mt-2">
              <input
                name="password_confirmation" id="password_confirmation" class="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 dark:bg-gray-800" placeholder="Enter your password again" type="password"></input>
              <button
                type="button" class="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </button>
            </div>
          </div>
          <div class="flex items-center">
            <input type="checkbox" name="remember_me" id="remember_me" class="mr-2 focus:ring-0 rounded "></input>
            <label for="remember_me" class="text-gray-700">I accept the <a href="#" class="text-blue-600 hover:text-blue-700 hover:underline">terms</a> and <a href="#" class="text-blue-600 hover:text-blue-700 hover:underline">privacy policy</a></label>
          </div>
          <div class="my-4 flex items-center justify-end space-x-4">
            <button class="bg-blue-600 hover:bg-blue-700 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase">Sign Up</button>
          </div>
        </form>
        <div class="flex items-center justify-between">
          <div class="w-full h-[1px] bg-gray-300"></div>
          <span class="text-sm uppercase mx-6 text-gray-400">Or</span>
          <div class="w-full h-[1px] bg-gray-300"></div>
        </div>
        <div class="text-sm">
          <a href="#" class="flex items-center justify-center space-x-2 text-gray-500 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded dark:bg-gray-800">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326667 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z" fill="#4285f4"></path><path d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z" fill="#34a853"></path><path d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z" fill="#fbbc04"></path><path d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z" fill="#ea4335"></path></svg>
            <span>Sign up with Google</span>
          </a>
          <a href="#" class="flex items-center justify-center space-x-2 text-gray-500 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded dark:bg-gray-800">
            <svg fill="#1D4ED8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
            <span>Sign up with Facebook</span>
          </a>
          <a href="#" class="flex items-center justify-center space-x-2 text-gray-500 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded dark:bg-gray-800">
            <svg fill="#09244B" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
            <span>Sign up with LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</body>` : dark === false && globalVariable === 'React' ?
            `<body>
    <div className="bg-gray-200 dark:bg-gray-800 w-full min-h-screen flex items-center justify-center">
        <div className="w-full py-8">
            <div className="flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" className='w-10 h-10' viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve">
                    <path style={{ fill: "#E41F11" }} d="M0,260.908l174.648-81.136v38.568l-132.08,57.848v0.728l132.08,57.848v38.568L0,292.212V260.908z" />
                    <path style={{ fill: "#111827"}} d="M201.6,387.9l77.864-263.8h36.752L238.4,387.9H201.6z" />
                    <path style={{ fill: "#00008B"}} d="M512,293.284L337.352,373.34v-38.568l134.992-57.848v-0.728L337.352,218.34v-38.568L512,259.828 V293.284z" />
                </svg>
                <h1 className="text-3xl font-bold text-red-600 tracking-wider">Code </h1>
                <h1 className="text-3xl font-bold text-blue-800 tracking-wider">Snippet</h1>
            </div>
            <div className="bg-gray-100 dark:bg-gray-900 sm:w-1/2 mt-8 mx-auto px-4 py-8 rounded-lg shadow-2xl">
                <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800 dark:text-gray-100">Sign Up</h2>
                <p className="text-center text-sm text-gray-500 mt-2">Already have an account? <Link to="#" className="text-blue-600 hover:text-blue-700 hover:underline" title="Sign In">Sign in here</Link></p>
                <htmlForm className="my-8 text-sm">
                    <div className="flex flex-col my-4">
                        <label htmlFor="name" className="text-gray-700 dark:text-gray-400">Name</label>
                        <input type="text" name="name" id="name" className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 dark:bg-gray-800" placeholder="Enter your name" />
                    </div>
                    <div className="flex flex-col my-4">
                        <label htmlFor="email" className="text-gray-700 dark:text-gray-400">Email Address</label>
                        <input type="email" name="email" id="email" className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 dark:bg-gray-800" placeholder="Enter your email" />
                    </div>
                    <div className="flex flex-col my-4">
                        <label htmlFor="password" className="text-gray-700 dark:text-gray-400">Password</label>
                        <div className="relative flex items-center mt-2">
                            <input id="password" className="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 dark:bg-gray-800" placeholder="Enter your password" type="password" />
                            <button type="button" className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col my-4">
                        <label htmlFor="password_confirmation" className="text-gray-700 dark:text-gray-400">Password Confirmation</label>
                        <div className="relative flex items-center mt-2">
                            <input
                                name="password_confirmation" id="password_confirmation" className="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 dark:bg-gray-800" placeholder="Enter your password again" type="password" />
                            <button
                                type="button" className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" name="remember_me" id="remember_me" className="mr-2 focus:ring-0 rounded " />
                        <label htmlFor="remember_me" className="text-gray-700">I accept the <Link to="#" className="text-blue-600 hover:text-blue-700 hover:underline">terms</Link> and <Link to="#" className="text-blue-600 hover:text-blue-700 hover:underline">privacy policy</Link></label>
                    </div>
                    <div className="my-4 flex items-center justify-end space-x-4">
                        <button className="bg-blue-600 hover:bg-blue-700 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase">Sign Up</button>
                    </div>
                </htmlForm>
                <div className="flex items-center justify-between">
                    <div className="w-full h-[1px] bg-gray-300"></div>
                    <span className="text-sm uppercase mx-6 text-gray-400">Or</span>
                    <div className="w-full h-[1px] bg-gray-300"></div>
                </div>
                <div className="text-sm">
                    <Link to="#" className="flex items-center justify-center space-x-2 text-gray-500 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded dark:bg-gray-800">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326667 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z" fill="#4285f4"></path><path d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z" fill="#34a853"></path><path d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z" fill="#fbbc04"></path><path d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z" fill="#ea4335"></path></svg>
                        <span>Sign up with Google</span>
                    </Link>
                    <Link to="#" className="flex items-center justify-center space-x-2 text-gray-500 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded dark:bg-gray-800">
                        <svg fill="#1D4ED8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                        <span>Sign up with Facebook</span>
                    </Link>
                    <Link to="#" className="flex items-center justify-center space-x-2 text-gray-500 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded dark:bg-gray-800">
                        <svg fill="#09244B" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                        <span>Sign up with LinkedIn</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</body>` : dark === true && globalVariable === 'HTML' ?
              `<body>
  <div class="bg-gray-800 w-full min-h-screen flex items-center justify-center">
    <div class="w-full py-8">
      <div class="flex items-center justify-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="w-10 h-10" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;">
          <path style="fill:#E41F11;" d="M0,260.908l174.648-81.136v38.568l-132.08,57.848v0.728l132.08,57.848v38.568L0,292.212V260.908z"></path>
          <path style="fill:#111827;" d="M201.6,387.9l77.864-263.8h36.752L238.4,387.9H201.6z"></path>
          <path style="fill:#00008B;" d="M512,293.284L337.352,373.34v-38.568l134.992-57.848v-0.728L337.352,218.34v-38.568L512,259.828 V293.284z"></path>
        </svg>
        <h1 class="text-3xl font-bold text-red-600 tracking-wider">Code </h1>
        <h1 class="text-3xl font-bold text-blue-800 tracking-wider">Snippet</h1>
      </div>
      <div class="bg-gray-900 sm:w-1/2 mt-8 mx-auto px-4 py-8 rounded-lg shadow-2xl">
        <h2 class="text-center text-2xl font-bold tracking-wide text-gray-100">Sign Up</h2>
        <p class="text-center text-sm text-gray-500 mt-2">Already have an account? <a href="#" class="text-blue-600 hover:text-blue-700 hover:underline" title="Sign In">Sign in here</a></p>
        <form class="my-8 text-sm">
          <div class="flex flex-col my-4">
            <label for="name" class="text-gray-400">Name</label>
            <input type="text" name="name" id="name" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 bg-gray-800" placeholder="Enter your name"></input>
          </div>
          <div class="flex flex-col my-4">
            <label for="email" class="text-gray-400">Email Address</label>
            <input type="email" name="email" id="email" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 bg-gray-800" placeholder="Enter your email"></input>
          </div>
          <div class="flex flex-col my-4">
            <label for="password" class="text-gray-400">Password</label>
            <div class="relative flex items-center mt-2">
              <input id="password" class="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 bg-gray-800" placeholder="Enter your password" type="password"></input>
              <button type="button" class="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </button>
            </div>
          </div>
          <div class="flex flex-col my-4">
            <label for="password_confirmation" class="text-gray-400">Password Confirmation</label>
            <div class="relative flex items-center mt-2">
              <input
                name="password_confirmation" id="password_confirmation" class="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 bg-gray-800" placeholder="Enter your password again" type="password"></input>
              <button
                type="button" class="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </button>
            </div>
          </div>
          <div class="flex items-center">
            <input type="checkbox" name="remember_me" id="remember_me" class="mr-2 focus:ring-0 rounded "></input>
            <label for="remember_me" class="text-gray-700">I accept the <a href="#" class="text-blue-600 hover:text-blue-700 hover:underline">terms</a> and <a href="#" class="text-blue-600 hover:text-blue-700 hover:underline">privacy policy</a></label>
          </div>
          <div class="my-4 flex items-center justify-end space-x-4">
            <button class="bg-blue-600 hover:bg-blue-700 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase">Sign Up</button>
          </div>
        </form>
        <div class="flex items-center justify-between">
          <div class="w-full h-[1px] bg-gray-300"></div>
          <span class="text-sm uppercase mx-6 text-gray-400">Or</span>
          <div class="w-full h-[1px] bg-gray-300"></div>
        </div>
        <div class="text-sm">
          <a href="#" class="flex items-center justify-center space-x-2 text-gray-500 my-2 py-2 hover:bg-gray-200 rounded bg-gray-800">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326667 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z" fill="#4285f4"></path><path d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z" fill="#34a853"></path><path d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z" fill="#fbbc04"></path><path d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z" fill="#ea4335"></path></svg>
            <span>Sign up with Google</span>
          </a>
          <a href="#" class="flex items-center justify-center space-x-2 text-gray-500 my-2 py-2 hover:bg-gray-200 rounded bg-gray-800">
            <svg fill="#1D4ED8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
            <span>Sign up with Facebook</span>
          </a>
          <a href="#" class="flex items-center justify-center space-x-2 text-gray-500 my-2 py-2 hover:bg-gray-200 rounded bg-gray-800">
            <svg fill="#09244B" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
            <span>Sign up with LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</body>` :
              `<body>
  <div className="bg-gray-800 w-full min-h-screen flex items-center justify-center">
    <div className="w-full py-8">
      <div className="flex items-center justify-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" className='w-10 h-10' viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve">
          <path style={{ fill: "#E41F11" }} d="M0,260.908l174.648-81.136v38.568l-132.08,57.848v0.728l132.08,57.848v38.568L0,292.212V260.908z" />
          <path style={{ fill: "#111827" }} d="M201.6,387.9l77.864-263.8h36.752L238.4,387.9H201.6z" />
          <path style={{ fill: "#00008B" }} d="M512,293.284L337.352,373.34v-38.568l134.992-57.848v-0.728L337.352,218.34v-38.568L512,259.828 V293.284z" />
        </svg>
        <h1 className="text-3xl font-bold text-red-600 tracking-wider">Code </h1>
        <h1 className="text-3xl font-bold text-blue-800 tracking-wider">Snippet</h1>
      </div>
      <div className="bg-gray-900 sm:w-1/2 mt-8 mx-auto px-4 py-8 rounded-lg shadow-2xl">
        <h2 className="text-center text-2xl font-bold tracking-wide text-gray-100">Sign Up</h2>
        <p className="text-center text-sm text-gray-500 mt-2">Already have an account? <Link to="#" className="text-blue-600 hover:text-blue-700 hover:underline" title="Sign In">Sign in here</Link></p>
        <htmlForm className="my-8 text-sm">
          <div className="flex flex-col my-4">
            <label htmlFor="name" className="text-gray-400">Name</label>
            <input type="text" name="name" id="name" className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 bg-gray-800" placeholder="Enter your name" />
          </div>
          <div className="flex flex-col my-4">
            <label htmlFor="email" className="text-gray-400">Email Address</label>
            <input type="email" name="email" id="email" className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 bg-gray-800" placeholder="Enter your email" />
          </div>
          <div className="flex flex-col my-4">
            <label htmlFor="password" className="text-gray-400">Password</label>
            <div className="relative flex items-center mt-2">
              <input id="password" className="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 bg-gray-800" placeholder="Enter your password" type="password" />
              <button type="button" className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col my-4">
            <label htmlFor="password_confirmation" className="text-gray-400">Password Confirmation</label>
            <div className="relative flex items-center mt-2">
              <input
                name="password_confirmation" id="password_confirmation" className="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 bg-gray-800" placeholder="Enter your password again" type="password" />
              <button
                type="button" className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <input type="checkbox" name="remember_me" id="remember_me" className="mr-2 focus:ring-0 rounded " />
            <label htmlFor="remember_me" className="text-gray-700">I accept the <Link to="#" className="text-blue-600 hover:text-blue-700 hover:underline">terms</Link> and <Link to="#" className="text-blue-600 hover:text-blue-700 hover:underline">privacy policy</Link></label>
          </div>
          <div className="my-4 flex items-center justify-end space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase">Sign Up</button>
          </div>
        </htmlForm>
        <div className="flex items-center justify-between">
          <div className="w-full h-[1px] bg-gray-300"></div>
          <span className="text-sm uppercase mx-6 text-gray-400">Or</span>
          <div className="w-full h-[1px] bg-gray-300"></div>
        </div>
        <div className="text-sm">
          <Link to="#" className="flex items-center justify-center space-x-2 text-gray-500 my-2 py-2 hover:bg-gray-200 rounded bg-gray-800">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326667 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z" fill="#4285f4"></path><path d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z" fill="#34a853"></path><path d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z" fill="#fbbc04"></path><path d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z" fill="#ea4335"></path></svg>
            <span>Sign up with Google</span>
          </Link>
          <Link to="#" className="flex items-center justify-center space-x-2 text-gray-500 my-2 py-2 hover:bg-gray-200 rounded bg-gray-800">
            <svg fill="#1D4ED8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
            <span>Sign up with Facebook</span>
          </Link>
          <Link to="#" className="flex items-center justify-center space-x-2 text-gray-500 my-2 py-2 hover:bg-gray-200 rounded bg-gray-800">
            <svg fill="#09244B" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
            <span>Sign up with LinkedIn</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
</body>`}
        </code>
      </pre>
    </div>
  )
}


