import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar4(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  const [isDropdownOpen, setIsDropdownOpen] = useState(true)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const Desktop = () => {
    return (
      <header className="dark:text-white dark:bg-gray-900 lg:h-[500px]">
        <nav className="mx-auto flex max-w-7xl items-start justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-60">
            <div className="flex lg:flex-1 ">
              <div className="-m-1.5 p-1.5 flex">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-orange-600 rounded-full" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"></path>
                </svg>
                <span className="self-center text-2xl font-semibold whitespace-nowrap ml-2">Code Snippet</span>
              </div>
            </div>
            <div className='flex gap-x-16'>
              {/* <div className="relative"> */}
              <li class="group relative list-none">
                <button id="dropdownNavbarLink" data-dropdown-placement="bottom" type="button"  className="flex items-center gap-x-1 text-sm font-semibold leading-6" aria-expanded="false">
                  Product
                  <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
                <div id="dropdownNavbar" className="group-hover:block  -left-8 absolute top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl dark:bg-gray-800 shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4 " aria-labelledby="dropdownLargeButton">
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-gray-700 ">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <svg className="h-6 w-6 text-gray-600 group-hover:text-orange-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                        </svg>
                      </div>
                      <div className="flex-auto">
                        <a href="#" className="block font-semibold hover:text-gray-600 dark:text-white">
                          Analytics
                          <span className="absolute inset-0"></span>
                        </a>
                        <p className="mt-1 text-gray-500">Get a better understanding of your traffic</p>
                      </div>
                    </div>
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-gray-700 ">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <svg className="h-6 w-6 text-gray-600 group-hover:text-orange-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                        </svg>
                      </div>
                      <div className="flex-auto">
                        <a href="#" className="block font-semibold hover:text-gray-600 dark:text-white">
                          Engagement
                          <span className="absolute inset-0"></span>
                        </a>
                        <p className="mt-1 text-gray-500">Speak directly to your customers</p>
                      </div>
                    </div>
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <svg className="h-6 w-6 text-gray-600 group-hover:text-orange-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                        </svg>
                      </div>
                      <div className="flex-auto">
                        <a href="#" className="block font-semibold hover:text-gray-600 dark:text-white">
                          Security
                          <span className="absolute inset-0"></span>
                        </a>
                        <p className="mt-1 text-gray-500">Your customers’ data will be safe and secure</p>
                      </div>
                    </div>
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <svg className="h-6 w-6 text-gray-600 group-hover:text-orange-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                      </div>
                      <div className="flex-auto">
                        <a href="#" className="block font-semibold hover:text-gray-600 dark:text-white">
                          Integrations
                          <span className="absolute inset-0"></span>
                        </a>
                        <p className="mt-1 text-gray-500">Connect with third-party tools</p>
                      </div>
                    </div>
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <svg className="h-6 w-6 text-gray-600 group-hover:text-orange-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                      </div>
                      <div className="flex-auto">
                        <a href="#" className="block font-semibold hover:text-gray-600 dark:text-white">
                          Automations
                          <span className="absolute inset-0"></span>
                        </a>
                        <p className="mt-1 text-gray-500">Build strategic funnels that will convert</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 dark:bg-gray-700">
                    <a href="#" className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 hover:bg-gray-100 dark:hover:bg-gray-800">
                      <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z" clipRule="evenodd" />
                      </svg>
                      Watch demo
                    </a>
                    <a href="#" className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 hover:bg-gray-100 dark:hover:bg-gray-800">
                      <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                      </svg>
                      Contact sales
                    </a>
                  </div>
                </div>
              </li>
              {/* </div> */}
              <a href="#" className="text-sm  font-semibold leading-6 ">Features</a>
              <a href="#" className="text-sm font-semibold leading-6 ">Marketplace</a>
              <a href="#" className="text-sm font-semibold leading-6 ">Company</a>
            </div>
            <div className="hidden lg:flex lg:flex-1">
              <a href="#" className="text-sm font-semibold leading-6">Log in<span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
        </nav>
        <div className="lg:hidden relative h-96 item-center" role="dialog" aria-modal="true">
          <div className="absolute inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <span className="self-center text-2xl font-semibold whitespace-nowrap">Code Snippet</span>
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-orange-600 rounded-full" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"></path>
              </svg>
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-2">
                  <div className="-mx-3">
                    <button type="button" className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false">
                      <svg className="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <div className="mt-2 space-y-2" id="disclosure-1">
                      <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50">Analytics</a>
                      <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50">Engagement</a>
                      <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50">Security</a>
                      <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50">Integrations</a>
                      <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50">Automations</a>
                      <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50">Watch demo</a>
                      <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50">Contact sales</a>
                    </div>
                  </div>
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50">Features</a>
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50">Marketplace</a>
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50">Company</a>
                </div>
                <div className="py-6">
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50">Log in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
  const Mobile = () => {
    return <header className="">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 dark:text-white dark:bg-gray-900" aria-label="Global">
        <div className="hidden">
          <div className="-m-1.5 p-1.5">
            <span className="sr-only">Code Snippet</span>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-orange-600 rounded-full" viewBox="0 0 20 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"></path>
            </svg>
          </div>
        </div>
        <div className="flex">
          <button onClick={toggleMenu} type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <svg className="h-6 w-6 dark:text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="flex flex-1 justify-end">
          <a href="#" className="text-sm font-semibold leading-6 ">Log in <span aria-hidden="true">&rarr;</span></a>
        </div>
      </nav>
      <div className="dark:text-white dark:bg-gray-900" role="dialog" aria-modal="true">

        <div className={` ${isMenuOpen ? 'block' : 'hidden'} mt-0 flow-root `}>
          <div className="inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 max-w-sm ring-1 dark:ring-1 ring-gray-900/10  dark:ring-white">
            <div className="flex items-center justify-between">
              <div className="-m-1.5 p-1.5 flex">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 p-2 bg-orange-600 rounded-full text-white" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"></path>
                </svg>
                <span className="self-center text-xl ml-2 font-semibold whitespace-nowrap">Code Snippet</span>
              </div>
              <button onClick={toggleMenu} type="button" className="-m-2.5 rounded-md p-2.5">
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="-my-6 divide-y divide-gray-500/10 mt-0">
              <div className="space-y-2 py-6">
                <div className="-mx-3">
                  <button onClick={toggleDropdown} type="button" className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:text-gray-900 hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false">
                    Product
                    <svg className="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className={`${isDropdownOpen ? 'block' : 'hidden'} mt-2 space-y-2"`} id="disclosure-1">
                    <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:text-gray-900 hover:bg-gray-50">Analytics</a>
                    <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:text-gray-900 hover:bg-gray-50">Engagement</a>
                    <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:text-gray-900 hover:bg-gray-50">Security</a>
                    <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:text-gray-900 hover:bg-gray-50">Integrations</a>
                    <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:text-gray-900 hover:bg-gray-50">Automations</a>
                    <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:text-gray-900 hover:bg-gray-50">Watch demo</a>
                    <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:text-gray-900 hover:bg-gray-50">Contact sales</a>
                  </div>
                </div>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-gray-900 hover:bg-gray-50">Features</a>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-gray-900 hover:bg-gray-50">Marketplace</a>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-gray-900 hover:bg-gray-50">Company</a>
              </div>
              <div className="py-6">
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:text-gray-900 hover:bg-gray-50">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  }

  return (<>
    {props.state === 0 ? <Desktop /> : <Mobile />}
  </>

  )
}
