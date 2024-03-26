import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useAppContext } from '../AppContext';
import '../App.css';

const ResponsiveGrid = (WrappedComponent, name) => {
    const [mobile, setmobile] = useState(0);
    const { dark, setDark } = useAppContext();
    const updateTheme = () => {
        setDark(!dark);
    }
    const goToTop = () => {
        document.documentElement.scrollTop = 0;
    }
    useEffect(() => {
        document.body.classList.toggle('dark', dark);
    }, [dark]);

    return function ResponsiveGrid() {
        return <div className="lg:mt-28 mt-28">
            <div className="border border-gray-900 rounded-lg rounded-b-none bg-gray-900 dark:border-gray-800 dark:bg-gray-800">
                <div className="flex justify-between w-full grid-cols-3 p-4 rounded-lg sm:grid">
                    <div className="flex items-center space-x-3 text-lg font-medium text-gray-900 dark:text-gray-500">
                        <Link to={`/${name.name}`} onClick={goToTop}>
                            <button className="flex items-center px-3 py-3  h-9 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-gray-500 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 dark:text-gray-900 dark:border-gray-900 dark:hover:text-gray-500 dark:hover:bg-gray-500">
                                <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"></path></svg>
                                Show code</button>
                        </Link>
                    </div>
                    <div className="items-center hidden mx-auto space-x-3 sm:flex">
                        <button onClick={() => setmobile(0)} className={`${mobile == 0 ? "flex items-center justify-center p-2 text-xs font-medium   w-9 h-9 border-2  border-white rounded-lg toggle-dark-state-example  hover:text-gray-600  ring-gray-900 dark:bg-gray-800 focus:outline-none text-white dark:border-gray-900 dark:hover:text-gray-700  dark:hover:bg-gray-900" : "flex items-center justify-center p-2 text-xs font-medium text-gray-900 bg-white w-9 h-9 border-2 border-gray-900 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-gray-700"}`}>
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14v4m-4 1h8M1 10h18M2 1h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"></path></svg>
                        </button>
                        <button onClick={() => setmobile(1)} className={`${mobile == 1 ? "flex items-center justify-center p-2 text-xs font-medium   w-9 h-9 border-2  border-white rounded-lg toggle-dark-state-example hover:text-gray-600   ring-gary-900 dark:bg-gray-800 focus:outline-none text-white dark:border-gray-900 dark:hover:text-gray-700  dark:hover:bg-gray-900" : "flex items-center justify-center p-2 text-xs font-medium text-gray-900 bg-white w-9 h-9 border-2 border-gray-900 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-gray-700 "}`}><svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.5 16.5h3M2 1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"></path></svg>
                        </button>
                        <button onClick={() => setmobile(2)} className={`${mobile == 2 ? "flex items-center justify-center p-2 text-xs font-medium   w-9 h-9 border-2  border-white rounded-lg toggle-dark-state-example hover:text-gray-600 ring-gray-900 dark:bg-gray-800 focus:outline-none text-white dark:border-gray-900 dark:hover:text-gray-700  dark:hover:bg-gray-900" : "flex items-center justify-center p-2 text-xs font-medium text-gray-900 bg-white w-9 h-9 border-2 border-gray-900 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-gray-700"}`}>
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 14h12M1 4h12M6.5 16.5h1M2 1h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className='flex justify-end '>
                        <button onClick={() => updateTheme()} data-tooltip-target="default-navbar-example-toggle-dark-mode-tooltip" type="button" data-toggle-dark="light" className="toggle-dark-mode flex items-center  justify-center w-9 h-9  text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 focus:outline-none dark:text-gray-700 dark:border-gray-900 dark:hover:text-gray-400 dark:hover:bg-gray-900">
                            {dark === false ? <svg data-toggle-icon="moon" className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
                            </svg> :
                                <svg data-toggle-icon="sun" className=" w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
                                </svg>
                            }
                        </button>
                    </div>
                </div>
            </div>

            <div className={`p-0 border-2 border-gray-900 pr-96 rounded-b-lg max-h-[500px] min-h-96 hide-scrollbar overflow-y-scroll  ${dark ? 'bg-gray-900' : 'light'}`} >
                <header className={mobile === 2 ? "text-gray-600 body-font w-custom w-25 mx-auto border-x-2  border-gray-300 " : mobile === 1 ? "text-gray-600 body-font w-50 mx-auto border-x-2 border-gray-300" : "text-gray-600 body-font w-full "} >
                    <WrappedComponent state={mobile} />
                </header>
            </div>
        </div>
    }
}
export default ResponsiveGrid;
