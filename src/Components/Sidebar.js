import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useAppContext } from '../AppContext';

const Sidebar = (WrappedComponent) => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);
    // const {  load,setload } = useAppContext();
    const loading = () => {
        // setload(0);
        setTimeout(() => {
            // setload(1);
        }, 0);
    }
    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };
    const closeSidebar = () => {
        setSidebarVisible(false);
    };

    const goToTop = () => {
        document.documentElement.scrollTop = 0;
        loading();
    }
    return function WithSidebar() {
        return (
            <>
                <div className='w-full lg:hidden fixed top-7 z-40'>
                    <button onClick={toggleSidebar} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 ms-3 text-sm text-gray-900 rounded-lg focus:outline-none focus:ring-2 border-2 border-gray-900 bg-gray-50 border-solid hover:bg-gray-900 focus:ring-gray-600">
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                    </button>
                </div>
                <aside className={`fixed top-20 left-0 z-40 w-64 h-[560px] hide-scrollbar overflow-y-scroll transition-transform ${isSidebarVisible ? '' : '-translate-x-full lg:translate-x-0'}`} aria-label="Sidebar">
                    <button className="absolute top-0 right-0 p-2 text-gray-900 focus:outline-none" onClick={closeSidebar}>
                        <svg className="sm:w-0 w-5 h-5 sm:h-0 mt-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M14.95 15.354a1 1 0 0 0 0-1.415L9.414 10l5.536-5.536a1 1 0 0 0-1.415-1.415L8 8.586 2.464 3.05a1 1 0 1 0-1.415 1.415L6.586 10l-5.537 5.536a1 1 0 0 0 1.415 1.415L8 11.414l5.536 5.536a1 1 0 0 0 1.415-1.415Z" />
                        </svg>
                    </button>
                    <div className="px-3 py-4 hide-scrollbar overflow-y-scroll h-full flex-row bg-gray-50">
                        <ul className="space-y-1 font-medium ">
                            <li>
                                <Link to="/" onClick={() => { closeSidebar(); goToTop() }} className={`${window.location.pathname === '/' ? "flex items-center p-2  rounded-lg text-white bg-gray-900 group" : "flex items-center p-2  hover:text-white rounded-lg text-gray-900  hover:bg-gray-900 group"}`}>
                                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                    </svg>
                                    <span className="ms-3">Navbar</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/sidebar" onClick={() => { closeSidebar(); goToTop() }} className={`${window.location.pathname === '/sidebar' ? "flex items-center p-2  rounded-lg text-white bg-gray-900 group" : "flex items-center p-2  hover:text-white rounded-lg text-gray-900  hover:bg-gray-900 group"}`}>
                                    <svg className='w-6 h-6' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Sidebar</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/footer" onClick={() => { closeSidebar(); goToTop() }} className={`${window.location.pathname === '/footer' ? "flex items-center p-2  rounded-lg text-white bg-gray-900 group" : "flex items-center p-2  hover:text-white rounded-lg text-gray-900  hover:bg-gray-900 group"}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                                        <line x1="6" y1="12" x2="18" y2="12"></line>
                                        <line x1="6" y1="16" x2="6.01" y2="16"></line>
                                        <line x1="18" y1="16" x2="18.01" y2="16"></line>
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Footer</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/accordions" onClick={() => { closeSidebar(); goToTop() }} className={`${window.location.pathname === '/accordions' ? "flex items-center p-2  rounded-lg text-white bg-gray-900 group" : "flex items-center p-2  hover:text-white rounded-lg text-gray-900  hover:bg-gray-900 group"}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Accordions</span>
                                </Link>
                            </li>
                            {/* <li>
                                <Link to="/ecommerce" onClick={() => { closeSidebar(); goToTop() }} className={`${window.location.pathname === '/ecommerce' ? "flex items-center p-2  rounded-lg text-white bg-gray-900 group" : "flex items-center p-2  hover:text-white rounded-lg text-gray-900  hover:bg-gray-900 group"}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="9" cy="21" r="1"></circle>
                                        <circle cx="20" cy="21" r="1"></circle>
                                        <path d="M1 1h4l3.5 12h10L20 6"></path>
                                    </svg>

                                    <span className="flex-1 ms-3 whitespace-nowrap">Ecommerce</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/checkout" onClick={() => { closeSidebar(); goToTop() }} className={`${window.location.pathname === '/checkout' ? "flex items-center p-2  rounded-lg text-white bg-gray-900 group" : "flex items-center p-2  hover:text-white rounded-lg text-gray-900  hover:bg-gray-900 group"}`}>
                                    <svg className='w-6 h-6' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                        <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Checkout</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/cards" onClick={() => { closeSidebar(); goToTop() }} className={`${window.location.pathname === '/cards' ? "flex items-center p-2  rounded-lg text-white bg-gray-900 group" : "flex items-center p-2  hover:text-white rounded-lg text-gray-900  hover:bg-gray-900 group"}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                        <line x1="1" y1="10" x2="23" y2="10"></line>
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Cards</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard" onClick={() => { closeSidebar(); goToTop() }} className={`${window.location.pathname === '/dashboard' ? "flex items-center p-2  rounded-lg text-white bg-gray-900 group" : "flex items-center p-2  hover:text-white rounded-lg text-gray-900  hover:bg-gray-900 group"}`}>
                                    <svg className='w-6 h-6' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" onClick={() => { closeSidebar(); goToTop() }} className={`${window.location.pathname === '/login' ? "flex items-center p-2  rounded-lg text-white bg-gray-900 group" : "flex items-center p-2  hover:text-white rounded-lg text-gray-900  hover:bg-gray-900 group"}`}>
                                    <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M14 10 8 5v3H1v4h7v3l6-5zm3 7H9v2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H9v2h8v14z"></path></svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Login/Sign up</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/email" onClick={() => { closeSidebar(); goToTop() }} className={`${window.location.pathname === '/email' ? "flex items-center p-2  rounded-lg text-white bg-gray-900 group" : "flex items-center p-2  hover:text-white rounded-lg text-gray-900  hover:bg-gray-900 group"}`}>
                                    <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 128 96"><g data-name="Layer 2"><path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></path></g></svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Email</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/forms" onClick={() => { closeSidebar(); goToTop() }} className={`${window.location.pathname === '/forms' ? "flex items-center p-2  rounded-lg text-white bg-gray-900 group" : "flex items-center p-2  hover:text-white rounded-lg text-gray-900  hover:bg-gray-900 group"}`}>
                                    <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 64 64" ><path d="M54 59.11H10a1 1 0 0 1-1-1V5.89a1 1 0 0 1 1-1h32.3a1 1 0 0 1 .7.31l11.7 12.12a1 1 0 0 1 .3.68v40.1a1 1 0 0 1-1 1.01Zm-43-2h42v-38.7L41.88 6.89H11Z"></path><path d="M42.3 19a1 1 0 0 1-1-1V5.89a1 1 0 0 1 2 0V18a1 1 0 0 1-1 1Z"></path><path d="M48 19h-5.7a1 1 0 0 1 0-2H48a1 1 0 0 1 0 2zm-18.91 6.86H17.18a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1h11.91a1 1 0 0 1 1 1v11.86a1 1 0 0 1-1 1zm-10.91-2h9.91V14h-9.91zM46.84 34H17.16a1 1 0 1 1 0-2h29.68a1 1 0 0 1 0 2zm0 7.85H17.16a1 1 0 0 1 0-2h29.68a1 1 0 0 1 0 2zm0 7.86H17.16a1 1 0 0 1 0-2h29.68a1 1 0 0 1 0 2z"></path></svg>

                                    <span className="flex-1 ms-3 whitespace-nowrap">Forms</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/pageNotFound" onClick={() => { closeSidebar(); goToTop() }} className={`${window.location.pathname === '/pageNotFound' ? "flex items-center p-2  rounded-lg text-white bg-gray-900 group" : "flex items-center p-2  hover:text-white rounded-lg text-gray-900  hover:bg-gray-900 group"}`}>
                                    <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="currentColor" enable-background="new 0 0 48 48" viewBox="0 0 48 48" id="404-error"><path d="M43,48H5c-2.757,0-5-2.243-5-5V5c0-2.757,2.243-5,5-5h38c2.757,0,5,2.243,5,5v38C48,45.757,45.757,48,43,48z M5,2 C3.346,2,2,3.346,2,5v38c0,1.654,1.346,3,3,3h38c1.654,0,3-1.346,3-3V5c0-1.654-1.346-3-3-3H5z"></path><path d="M47 10H1c-.552 0-1-.447-1-1s.448-1 1-1h46c.552 0 1 .447 1 1S47.552 10 47 10zM6 6C5.87 6 5.74 5.97 5.62 5.92 5.5 5.87 5.39 5.8 5.29 5.71 5.2 5.609 5.13 5.5 5.08 5.38 5.03 5.26 5 5.13 5 5s.03-.26.08-.38C5.13 4.5 5.2 4.39 5.29 4.29 5.39 4.2 5.5 4.13 5.62 4.08c.37-.16.81-.07 1.09.21C6.8 4.39 6.87 4.5 6.92 4.62 6.97 4.74 7 4.87 7 5S6.97 5.26 6.92 5.38C6.87 5.5 6.8 5.609 6.71 5.71 6.61 5.8 6.5 5.87 6.38 5.92S6.13 6 6 6zM10 6C9.87 6 9.74 5.97 9.62 5.92 9.5 5.87 9.39 5.8 9.29 5.71 9.2 5.609 9.13 5.5 9.08 5.38 9.03 5.26 9 5.13 9 5s.03-.26.08-.38C9.13 4.5 9.2 4.39 9.29 4.29 9.39 4.2 9.5 4.13 9.62 4.08c.37-.16.81-.07 1.09.21.09.1.16.21.21.33C10.97 4.74 11 4.87 11 5s-.03.26-.08.38c-.05.12-.12.229-.21.33-.1.09-.21.16-.33.21S10.13 6 10 6zM36 35H12c-.552 0-1-.447-1-1s.448-1 1-1h24c.552 0 1 .447 1 1S36.552 35 36 35zM33 39H15c-.552 0-1-.447-1-1s.448-1 1-1h18c.552 0 1 .447 1 1S33.552 39 33 39zM25 31h-2c-1.654 0-3-1.346-3-3v-8c0-1.654 1.346-3 3-3h2c1.654 0 3 1.346 3 3v8C28 29.654 26.654 31 25 31zM23 19c-.551 0-1 .448-1 1v8c0 .552.449 1 1 1h2c.551 0 1-.448 1-1v-8c0-.552-.449-1-1-1H23zM17 27h-6c-.328 0-.635-.161-.822-.431-.187-.27-.229-.613-.115-.921l3-8c.195-.517.771-.775 1.288-.585.517.194.779.771.585 1.288L12.443 25H17c.552 0 1 .447 1 1S17.552 27 17 27z"></path><path d="M16 31c-.552 0-1-.447-1-1v-8c0-.553.448-1 1-1s1 .447 1 1v8C17 30.553 16.552 31 16 31zM37 27h-6c-.328 0-.635-.161-.822-.431-.187-.27-.229-.613-.115-.921l3-8c.195-.517.771-.775 1.288-.585.517.194.779.771.585 1.288L32.443 25H37c.552 0 1 .447 1 1S37.552 27 37 27z"></path><path d="M36,31c-0.552,0-1-0.447-1-1v-8c0-0.553,0.448-1,1-1s1,0.447,1,1v8C37,30.553,36.552,31,36,31z"></path></svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Page Not Found</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/template" onClick={() => { closeSidebar(); goToTop() }} className={`${window.location.pathname === '/template' ? "flex items-center p-2  rounded-lg text-white bg-gray-900 group" : "flex items-center p-2  hover:text-white rounded-lg text-gray-900  hover:bg-gray-900 group"}`}>
                                    <svg
                                        className='w-6 h-6'
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M3 3V9H21V3H3ZM19 5H5V7H19V5Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M3 11V21H11V11H3ZM9 13H5V19H9V13Z"
                                            fill="currentColor"
                                        />
                                        <path d="M21 11H13V13H21V11Z" fill="currentColor" />
                                        <path d="M13 15H21V17H13V15Z" fill="currentColor" />
                                        <path d="M21 19H13V21H21V19Z" fill="currentColor" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Template</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dialogBox" onClick={() => { closeSidebar(); goToTop() }} className={`${window.location.pathname === '/dialogBox' ? "flex items-center p-2  rounded-lg text-white bg-gray-900 group" : "flex items-center p-2  hover:text-white rounded-lg text-gray-900  hover:bg-gray-900 group"}`}>
                                    <svg
                                        fill="currentColor"
                                        className='w-6 h-6'
                                        viewBox="0 0 16 16"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g fill="currentColor">
                                            <path d="M8 16a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8zm0-1a7 7 0 0 0 7-7 7 7 0 0 0-7-7 7 7 0 0 0-7 7 7 7 0 0 0 7 7z" />
                                            <path
                                                d="M8 3.75c-.386 0-.69.124-.914.373A1.27 1.27 0 0 0 6.75 5c0 .336.112.628.336.877.224.249.528.373.914.373s.69-.124.914-.373A1.27 1.27 0 0 0 9.25 5a1.27 1.27 0 0 0-.336-.877C8.69 3.874 8.386 3.75 8 3.75zM7 7v5h2V7z"
                                                style={{
                                                    lineHeight: "1000%",
                                                    InkscapeFontSpecification: "Ubuntu",
                                                }}
                                                fontWeight={400}
                                                fontFamily="Ubuntu"
                                                letterSpacing={0}
                                                wordSpacing={0}
                                            />
                                        </g>
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">DialogBox</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/animation" onClick={() => { closeSidebar(); goToTop() }} className={`${window.location.pathname === '/animation' ? "flex items-center p-2  rounded-lg text-white bg-gray-900 group" : "flex items-center p-2  hover:text-white rounded-lg text-gray-900  hover:bg-gray-900 group"}`}>
                                    <svg
                                        className='w-6 h-6'
                                        viewBox="0 0 15 15"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.30298 0.0404275C7.42875 -0.0134758 7.57112 -0.0134758 7.6969 0.0404275L14.5 2.95605L7.50002 5.95604L0.499949 2.95601L7.30298 0.0404275Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M-6.10352e-05 3.82969V11.5C-6.10352e-05 11.7 0.119137 11.8808 0.302979 11.9596L6.99994 14.8297V6.82969L-6.10352e-05 3.82969Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M7.99994 6.82976L14.9999 3.82976V11.5C14.9999 11.7 14.8807 11.8808 14.6969 11.9596L7.99994 14.8297V6.82976Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Animation</span>
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </aside>

                <div className="lg:ml-64 lg:px-4 px-2 ">
                    <WrappedComponent />
                </div>
            </>
        )
    }
}
export default Sidebar;
