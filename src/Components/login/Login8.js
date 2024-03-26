import React from 'react'
import { Link } from 'react-router-dom'

export default function Login8(props) {
  const Desktop = () => {
    return <div className="flex flex-wrap flex-col min-h-screen w-full content-center justify-center bg-gray-200 dark:bg-gray-800 md:py-8" >
      <div className="lg:flex-row shadow-md md:flex-col sm:flex flex-col">
        <div className="flex flex-col item-center flex-wrap content-center justify-center lg:rounded-l-md w-full rounded-t-md px-5 bg-gray-50 dark:bg-gray-900 md:object-none">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" className='w-25 h-25 ml-7 dark:text-gray-50 text-gray-900' viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve">
            <path style={{ fill: "#E41F11" }} d="M0,260.908l174.648-81.136v38.568l-132.08,57.848v0.728l132.08,57.848v38.568L0,292.212V260.908z" />
            <path style={{ fill: "currentcolor", }} d="M201.6,387.9l77.864-263.8h36.752L238.4,387.9H201.6z" />
            <path style={{ fill: "#00008B", }} d="M512,293.284L337.352,373.34v-38.568l134.992-57.848v-0.728L337.352,218.34v-38.568L512,259.828 V293.284z" />
          </svg>
          <span class="text-2xl dark:text-gray-50">Code Snippet</span>
        </div>
        <div className="flex flex-wrap content-center justify-center lg:rounded-r-md rounded-b-md bg-gray-50 dark:bg-gray-900 lg:p-10 md:pt-5 py-5">
          <div className="md:w-80">
            <h1 className="text-xl font-semibold dark:text-gray-100">Welcome back</h1>
            <small className="text-gray-400">Welcome back! Please enter your details</small>
            <form className="mt-4">
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold text-gray-500">Email</label>
                <input type="email" id='email' placeholder="Enter your email" className="dark:bg-gray-800 block w-full rounded-md border border-gray-300  focus:outline-none focus:ring-1 focus:ring-red-700 py-1 px-1.5 text-gray-500" />
              </div>
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold text-gray-500">Password</label>
                <input type="password" id='password' placeholder="*****" className="dark:bg-gray-800 block w-full rounded-md border border-gray-300  focus:outline-none focus:ring-1 focus:ring-red-700 py-1 px-1.5 text-gray-500" />
              </div>
              <div className="mb-3 flex flex-wrap content-center ">
                <input id="remember" type="checkbox" className="mr-1 checked:bg-red-700" /> <label htmlFor="remember" className="mr-auto text-xs font-semibold">Remember for 30 days </label>
                <Link to="#" className="text-xs font-semibold text-red-700 ml-2">Forgot password?</Link>
              </div>
              <div className="mb-3">
                <button className="mb-1.5 block w-full text-center text-white bg-red-600 hover:bg-red-700 px-2 py-1.5 rounded-md">Sign in</button>
                <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 text-gray-500 px-2 py-1.5 rounded-md">
                  <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326667 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z" fill="#4285f4"></path><path d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z" fill="#34a853"></path><path d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z" fill="#fbbc04"></path><path d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z" fill="#ea4335"></path></svg>
                  Log in with Google
                </button>
              </div>
            </form>
            <div className="text-center">
              <span className="text-xs text-gray-400 font-semibold">Don't have account?</span>
              <Link to="/signUp" className="text-xs font-semibold text-green-700 ml-2">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
      <p class='mt-2 text-gray-500'>Made by Code Snippet.</p>
    </div>
  }
  const Mobile = () => {
    return <div className="flex flex-wrap flex-col min-h-screen w-full content-center justify-center bg-gray-200 dark:bg-gray-800" >
      <div className="shadow-md flex-col">
        <div className="flex flex-col item-center flex-wrap content-center justify-center  w-full rounded-t-md px-5 bg-gray-50 dark:bg-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" className='w-25 h-25 ml-7 dark:text-gray-50 text-gray-900' viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve">
            <path style={{ fill: "#E41F11" }} d="M0,260.908l174.648-81.136v38.568l-132.08,57.848v0.728l132.08,57.848v38.568L0,292.212V260.908z" />
            <path style={{ fill: "currentcolor", }} d="M201.6,387.9l77.864-263.8h36.752L238.4,387.9H201.6z" />
            <path style={{ fill: "#00008B", }} d="M512,293.284L337.352,373.34v-38.568l134.992-57.848v-0.728L337.352,218.34v-38.568L512,259.828 V293.284z" />
          </svg>
          <span class="text-2xl dark:text-gray-50">Code Snippet</span>
        </div>
        <div className="flex flex-wrap content-center justify-center  rounded-b-md bg-gray-50 dark:bg-gray-900  py-5">
          <div className="">
            <h1 className="text-xl font-semibold dark:text-gray-100">Welcome back</h1>
            <small className="text-gray-400">Welcome back! Please enter your details</small>
            <form className="mt-4">
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold text-gray-500">Email</label>
                <input type="email" id='email' placeholder="Enter your email" className="dark:bg-gray-800 block w-full rounded-md border border-gray-300  focus:outline-none focus:ring-1 focus:ring-red-700 py-1 px-1.5 text-gray-500" />
              </div>
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold text-gray-500">Password</label>
                <input type="password" id='password' placeholder="*****" className="dark:bg-gray-800 block w-full rounded-md border border-gray-300  focus:outline-none focus:ring-1 focus:ring-red-700 py-1 px-1.5 text-gray-500" />
              </div>
              <div className="mb-3 flex flex-wrap content-center ">
                <input id="remember" type="checkbox" className="mr-1 checked:bg-red-700" /> <label htmlFor="remember" className="mr-auto text-xs font-semibold">Remember for 30 days </label>
                <Link to="#" className="text-xs font-semibold text-red-700 ml-2">Forgot password?</Link>
              </div>
              <div className="mb-3">
                <button className="mb-1.5 block w-full text-center text-white bg-red-600 hover:bg-red-700 px-2 py-1.5 rounded-md">Sign in</button>
                <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 text-gray-500 px-2 py-1.5 rounded-md">
                  <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326667 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z" fill="#4285f4"></path><path d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z" fill="#34a853"></path><path d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z" fill="#fbbc04"></path><path d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z" fill="#ea4335"></path></svg>
                  Log in with Google
                </button>
              </div>
            </form>
            <div className="text-center">
              <span className="text-xs text-gray-400 font-semibold">Don't have account?</span>
              <Link to="/signUp" className="text-xs font-semibold text-green-700 ml-2">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
      <p class='mt-2 text-gray-500'>Made by Code Snippet.</p>
    </div>
  }

  return (
    <>
      {props.state === 0 ? <Desktop /> : <Mobile />}
    </>
  )
}
