import React from 'react'

export default function Footer1(props) {

    const Desktop = () => {
        return <footer className="bg-blue-100/80 font-sans dark:bg-gray-900">
            <div className="container md:px-6 px-3  py-12 mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Subscribe our newsletter to get an update.</h1>
                        <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                            <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />
                            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>
                        <div className="flex flex-col items-start lg:mt-5 mt-3 space-y-2">
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Home</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Who We Are</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Our Philosophy</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Industries</p>
                        <div className="flex flex-col items-start lg:mt-5 mt-3 space-y-2">
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Retail & E-Commerce</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Information Technology</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Finance & Insurance</p>
                        </div>
                    </div>
                </div>
                <div className="md:flex md:items-center md:justify-between mt-5">
                    <div className="sm:flex-row sm:flex hover:cursor-pointer md:gap-3">
                        <div className="bg-gray-900 text-gray-200 flex items-center border my-2 rounded-lg lg:p-2 p-3 mx-auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-7 md:w-8"
                                viewBox="0 0 511.999 511.999"
                                xmlSpace="preserve"
                            >
                                <g>
                                    <path
                                        style={{
                                            fill: "#32BBFF",
                                        }}
                                        d="M382.369,175.623C322.891,142.356,227.427,88.937,79.355,6.028 C69.372-0.565,57.886-1.429,47.962,1.93l254.05,254.05L382.369,175.623z"
                                    />
                                    <path
                                        style={{
                                            fill: "#32BBFF",
                                        }}
                                        d="M47.962,1.93c-1.86,0.63-3.67,1.39-5.401,2.308C31.602,10.166,23.549,21.573,23.549,36v439.96 c0,14.427,8.052,25.834,19.012,31.761c1.728,0.917,3.537,1.68,5.395,2.314L302.012,255.98L47.962,1.93z"
                                    />
                                    <path
                                        style={{
                                            fill: "#32BBFF",
                                        }}
                                        d="M302.012,255.98L47.956,510.035c9.927,3.384,21.413,2.586,31.399-4.103 c143.598-80.41,237.986-133.196,298.152-166.746c1.675-0.941,3.316-1.861,4.938-2.772L302.012,255.98z"
                                    />
                                </g>
                                <path
                                    style={{
                                        fill: "#2C9FD9",
                                    }}
                                    d="M23.549,255.98v219.98c0,14.427,8.052,25.834,19.012,31.761c1.728,0.917,3.537,1.68,5.395,2.314 L302.012,255.98H23.549z"
                                />
                                <path
                                    style={{
                                        fill: "#29CC5E",
                                    }}
                                    d="M79.355,6.028C67.5-1.8,53.52-1.577,42.561,4.239l255.595,255.596l84.212-84.212 C322.891,142.356,227.427,88.937,79.355,6.028z"
                                />
                                <path
                                    style={{
                                        fill: "#D93F21",
                                    }}
                                    d="M298.158,252.126L42.561,507.721c10.96,5.815,24.939,6.151,36.794-1.789 c143.598-80.41,237.986-133.196,298.152-166.746c1.675-0.941,3.316-1.861,4.938-2.772L298.158,252.126z"
                                />
                                <path
                                    style={{
                                        fill: "#FFD500",
                                    }}
                                    d="M488.45,255.98c0-12.19-6.151-24.492-18.342-31.314c0,0-22.799-12.721-92.682-51.809l-83.123,83.123 l83.204,83.205c69.116-38.807,92.6-51.892,92.6-51.892C482.299,280.472,488.45,268.17,488.45,255.98z"
                                />
                                <path
                                    style={{
                                        fill: "#FFAA00",
                                    }}
                                    d="M470.108,287.294c12.191-6.822,18.342-19.124,18.342-31.314H294.303l83.204,83.205 C446.624,300.379,470.108,287.294,470.108,287.294z"
                                />
                            </svg>
                            <div className="text-left ml-3">
                                <p className='text-xs'>Download on </p>
                                <p className="text-sm md:text-base"> Google Play Store </p>
                            </div>
                        </div>
                        <div className="bg-gray-900 text-gray-200 flex items-center border my-2 rounded-lg p-3 md:mx-2 mx-auto">
                            <svg
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-7 md:w-8"
                            >
                                <path
                                    d="M7.87456 2.93707C7.66756 2.93707 7.49956 2.77259 7.49956 2.56993C7.49956 1.1506 8.67554 0 10.1245 0C10.3323 0 10.4995 0.164476 10.4995 0.367133C10.4995 1.78647 9.32429 2.93707 7.87456 2.93707Z"
                                    fill="#fff"
                                />
                                <path
                                    d="M7.87456 2.93707C7.66756 2.93707 7.49956 2.77259 7.49956 2.56993C7.49956 1.1506 8.67554 0 10.1245 0C10.3323 0 10.4995 0.164476 10.4995 0.367133C10.4995 1.78647 9.32429 2.93707 7.87456 2.93707Z"
                                    fill="#fff"
                                />
                                <path
                                    d="M13.3498 10.6678C13.4946 10.7743 13.5418 10.9674 13.4601 11.126C12.1401 13.7121 11.0871 15 10.1249 15C9.67713 15 9.23689 14.8583 8.8079 14.5822C8.18316 14.1791 7.37692 14.1622 6.73493 14.5381C6.21518 14.8429 5.72019 15 5.24995 15C3.83472 15 1.5 10.7332 1.5 8.3916C1.5 5.89216 2.83873 3.986 4.87495 3.986C5.83269 3.986 6.65993 4.12405 7.35442 4.40454C7.64916 4.52349 7.98216 4.51468 8.2694 4.37957C8.8334 4.1145 9.57664 3.986 10.4999 3.986C11.6264 3.986 12.6081 4.53524 13.4248 5.60139C13.5486 5.76366 13.5156 5.99349 13.3498 6.11538C12.4386 6.78429 11.9999 7.53618 11.9999 8.3916C11.9999 9.24702 12.4386 9.99891 13.3498 10.6678Z"
                                    fill="#fff"
                                />
                                <path
                                    d="M13.3498 10.6678C13.4946 10.7743 13.5418 10.9674 13.4601 11.126C12.1401 13.7121 11.0871 15 10.1249 15C9.67713 15 9.23689 14.8583 8.8079 14.5822C8.18316 14.1791 7.37692 14.1622 6.73493 14.5381C6.21518 14.8429 5.72019 15 5.24995 15C3.83472 15 1.5 10.7332 1.5 8.3916C1.5 5.89216 2.83873 3.986 4.87495 3.986C5.83269 3.986 6.65993 4.12405 7.35442 4.40454C7.64916 4.52349 7.98216 4.51468 8.2694 4.37957C8.8334 4.1145 9.57664 3.986 10.4999 3.986C11.6264 3.986 12.6081 4.53524 13.4248 5.60139C13.5486 5.76366 13.5156 5.99349 13.3498 6.11538C12.4386 6.78429 11.9999 7.53618 11.9999 8.3916C11.9999 9.24702 12.4386 9.99891 13.3498 10.6678Z"
                                    fill="#fff"
                                />
                            </svg>

                            <div className="text-left ml-3">
                                <p className='text-xs'>Download on </p>
                                <p className="text-sm md:text-base"> Apple Store </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 sm:gap-0 hover:cursor-pointer">
                        <span className="inline-flex sm:ml-0 sm:mt-0 mt-5 lg:mt-2 sm:items-center justify-center sm:justify-start">
                            <a className="lg:ml-5 ml-2 w-8 h-8">
                                <svg
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                >
                                    <path
                                        fill="#1D9BF0"
                                        d="M13.567 5.144c.008.123.008.247.008.371 0 3.796-2.889 8.173-8.172 8.173v-.002A8.131 8.131 0 011 12.398a5.768 5.768 0 004.25-1.19 2.876 2.876 0 01-2.683-1.995c.431.083.875.066 1.297-.05A2.873 2.873 0 011.56 6.348v-.036c.4.222.847.345 1.304.36a2.876 2.876 0 01-.89-3.836 8.152 8.152 0 005.92 3 2.874 2.874 0 014.895-2.619 5.763 5.763 0 001.824-.697 2.883 2.883 0 01-1.262 1.588A5.712 5.712 0 0015 3.656a5.834 5.834 0 01-1.433 1.488z"
                                    />
                                </svg>
                            </a>
                            <a className="lg:ml-5 ml-2 w-8 h-8">
                                <svg
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <title>{"linkedin_fill"}</title>
                                    <g
                                        id="\u9875\u9762-1"
                                        stroke="none"
                                        strokeWidth={1}
                                        fill="none"
                                        fillRule="evenodd"
                                    >
                                        <g id="Brand" transform="translate(-336.000000, -48.000000)">
                                            <g id="linkedin_fill" transform="translate(336.000000, 48.000000)">
                                                <path
                                                    d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                                                    id="MingCute"
                                                    fillRule="nonzero"
                                                />
                                                <path
                                                    d="M18,3 C19.6569,3 21,4.34315 21,6 L21,18 C21,19.6569 19.6569,21 18,21 L6,21 C4.34315,21 3,19.6569 3,18 L3,6 C3,4.34315 4.34315,3 6,3 L18,3 Z M8,10 C7.44772,10 7,10.4477 7,11 L7,16 C7,16.5523 7.44772,17 8,17 C8.55228,17 9,16.5523 9,16 L9,11 C9,10.4477 8.55228,10 8,10 Z M11,9 C10.4477,9 10,9.44772 10,10 L10,16 C10,16.5523 10.4477,17 11,17 C11.5523,17 12,16.5523 12,16 L12,12.3398 C12.3049,11.9955 12.8207,11.5921 13.3933,11.3472 C13.7261,11.2048 14.2268,11.1479 14.5751,11.2574 C14.7274,11.3053 14.8143,11.3726 14.868,11.4451 C14.9201,11.5157 15,11.6707 15,12 L15,16 C15,16.5522 15.4477,17 16,17 C16.5523,17 17,16.5522 17,16 L17,12 C17,11.3292 16.8298,10.7342 16.4758,10.2556 C16.1232,9.77907 15.6476,9.4981 15.1749,9.34949 C14.2732,9.06594 13.2739,9.22295 12.6067,9.50837 C12.395,9.59892 12.1863,9.70435 11.9841,9.82128 C11.8998,9.35427 11.4913,9 11,9 Z M8,7 C7.44772,7 7,7.44772 7,8 C7,8.55228 7.44772,9 8,9 C8.55228,9 9,8.55228 9,8 C9,7.44772 8.55228,7 8,7 Z"
                                                    id="\u5F62\u72B6"
                                                    fill="#09244B"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                            <a className="lg:ml-5 ml-2 w-8 h-8 text-black">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.693 3.693 0 0 0-.151-1.028 1.832 1.832 0 0 0-.542-.875 8.014 8.014 0 0 0 2.038-.471 4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.77 6.77 0 0 0 .3-2.13 4.138 4.138 0 0 0-.26-1.476 3.892 3.892 0 0 0-.795-1.284 2.81 2.81 0 0 0 .162-.582c.033-.2.05-.402.05-.604 0-.26-.03-.52-.09-.773a5.309 5.309 0 0 0-.221-.763.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.34 5.34 0 0 0-.703.26 6.503 6.503 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0 13.507 13.507 0 0 0-.572-.362 6.022 6.022 0 0 0-.672-.342 4.516 4.516 0 0 0-.705-.261 2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02 5.844 5.844 0 0 0-.23.763c-.054.254-.08.513-.081.773 0 .202.017.404.051.604.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476 6.871 6.871 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633 2.99 2.99 0 0 0-.2.744 2.754 2.754 0 0 1-1.175.27 1.788 1.788 0 0 1-1.065-.3 2.904 2.904 0 0 1-.752-.824 3.1 3.1 0 0 0-.292-.382 2.693 2.693 0 0 0-.372-.343 1.841 1.841 0 0 0-.432-.24 1.2 1.2 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.649.649 0 0 0-.162.02.408.408 0 0 0-.13.06.116.116 0 0 0-.06.1.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333.112.098.213.209.3.33.09.119.168.246.231.381.073.134.15.288.231.463.188.474.522.875.954 1.145.453.243.961.364 1.476.351.174 0 .349-.01.522-.03.172-.028.343-.057.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005z" /></svg>
                            </a>
                            <a className="lg:ml-5 ml-2 w-8 h-8">
                                <svg
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <title>{"facebook_fill"}</title>
                                    <g
                                        id="\u9875\u9762-1"
                                        stroke="none"
                                        strokeWidth={1}
                                        fill="none"
                                        fillRule="evenodd"
                                    >
                                        <g
                                            id="Brand"
                                            transform="translate(-240.000000, -48.000000)"
                                            fillRule="nonzero"
                                        >
                                            <g id="facebook_fill" transform="translate(240.000000, 48.000000)">
                                                <path
                                                    d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                                                    id="MingCute"
                                                    fillRule="nonzero"
                                                />
                                                <path
                                                    d="M13.5,21.8883 C18.3113,21.1645 22,17.013 22,12 C22,6.47715 17.5228,2 12,2 C6.47715,2 2,6.47715 2,12 C2,17.013 5.68874,21.1645 10.5,21.8883 L10.5,15 L9,15 C8.17157,15 7.5,14.3284 7.5,13.5 C7.5,12.6716 8.17157,12 9,12 L10.5,12 L10.5,10 C10.5,8.067 12.067,6.5 14,6.5 L14.5,6.5 C15.3284,6.5 16,7.17157 16,8 C16,8.82843 15.3284,9.5 14.5,9.5 L14,9.5 C13.7239,9.5 13.5,9.72386 13.5,10 L13.5,12 L15,12 C15.8284,12 16.5,12.6716 16.5,13.5 C16.5,14.3284 15.8284,15 15,15 L13.5,15 L13.5,21.8883 Z"
                                                    id="\u8DEF\u5F84"
                                                    fill="#09244B"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                            <a className="lg:ml-5 ml-2 w-8 h-8">
                                <svg
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 551.034 551.034"
                                    style={{
                                        enableBackground: "new 0 0 551.034 551.034",
                                    }}
                                    xmlSpace="preserve"
                                >
                                    <g id="XMLID_13_">
                                        <linearGradient
                                            id="XMLID_2_"
                                            gradientUnits="userSpaceOnUse"
                                            x1={275.517}
                                            y1={4.5714}
                                            x2={275.517}
                                            y2={549.7202}
                                            gradientTransform="matrix(1 0 0 -1 0 554)"
                                        >
                                            <stop
                                                offset={0}
                                                style={{
                                                    stopColor: "#E09B3D",
                                                }}
                                            />
                                            <stop
                                                offset={0.3}
                                                style={{
                                                    stopColor: "#C74C4D",
                                                }}
                                            />
                                            <stop
                                                offset={0.6}
                                                style={{
                                                    stopColor: "#C21975",
                                                }}
                                            />
                                            <stop
                                                offset={1}
                                                style={{
                                                    stopColor: "#7024C4",
                                                }}
                                            />
                                        </linearGradient>
                                        <path
                                            id="XMLID_17_"
                                            style={{
                                                fill: "url(#XMLID_2_)",
                                            }}
                                            d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722 c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156 C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156 c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722 c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z"
                                        />
                                        <linearGradient
                                            id="XMLID_3_"
                                            gradientUnits="userSpaceOnUse"
                                            x1={275.517}
                                            y1={4.5714}
                                            x2={275.517}
                                            y2={549.7202}
                                            gradientTransform="matrix(1 0 0 -1 0 554)"
                                        >
                                            <stop
                                                offset={0}
                                                style={{
                                                    stopColor: "#E09B3D",
                                                }}
                                            />
                                            <stop
                                                offset={0.3}
                                                style={{
                                                    stopColor: "#C74C4D",
                                                }}
                                            />
                                            <stop
                                                offset={0.6}
                                                style={{
                                                    stopColor: "#C21975",
                                                }}
                                            />
                                            <stop
                                                offset={1}
                                                style={{
                                                    stopColor: "#7024C4",
                                                }}
                                            />
                                        </linearGradient>
                                        <path
                                            id="XMLID_81_"
                                            style={{
                                                fill: "url(#XMLID_3_)",
                                            }}
                                            d="M275.517,133C196.933,133,133,196.933,133,275.516 s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6 c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083 C362.6,323.611,323.611,362.6,275.517,362.6z"
                                        />
                                        <linearGradient
                                            id="XMLID_4_"
                                            gradientUnits="userSpaceOnUse"
                                            x1={418.306}
                                            y1={4.5714}
                                            x2={418.306}
                                            y2={549.7202}
                                            gradientTransform="matrix(1 0 0 -1 0 554)"
                                        >
                                            <stop
                                                offset={0}
                                                style={{
                                                    stopColor: "#E09B3D",
                                                }}
                                            />
                                            <stop
                                                offset={0.3}
                                                style={{
                                                    stopColor: "#C74C4D",
                                                }}
                                            />
                                            <stop
                                                offset={0.6}
                                                style={{
                                                    stopColor: "#C21975",
                                                }}
                                            />
                                            <stop
                                                offset={1}
                                                style={{
                                                    stopColor: "#7024C4",
                                                }}
                                            />
                                        </linearGradient>
                                        <circle
                                            id="XMLID_83_"
                                            style={{
                                                fill: "url(#XMLID_4_)",
                                            }}
                                            cx={418.306}
                                            cy={134.072}
                                            r={34.149}
                                        />
                                    </g>
                                </svg>
                            </a>
                            <a className="lg:ml-5 ml-2 w-8 h-8">
                                <svg
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 473.931 473.931"
                                    style={{
                                        enableBackground: "new 0 0 473.931 473.931",
                                    }}
                                    xmlSpace="preserve"
                                >
                                    <circle
                                        style={{
                                            fill: "#D42028",
                                        }}
                                        cx={236.966}
                                        cy={236.966}
                                        r={236.966}
                                    />
                                    <path
                                        style={{
                                            fill: "#C52232",
                                        }}
                                        d="M404.518,69.383c92.545,92.541,92.549,242.586,0,335.135 c-92.545,92.549-242.593,92.549-335.134,0.004L404.518,69.383z"
                                    />
                                    <path
                                        style={{
                                            fill: "#B21F2F",
                                        }}
                                        d="M471.54,270.32l-123.28-123.28l-32.43,32.43l-42.405-42.405l-13.096,13.096l-28.688-28.688 l-99.905,99.905l28.688,28.688l-35.55,35.547l42.409,42.405l-7.484,7.484l23.072,23.075l-20.58,20.583l93.933,93.929 C366.977,464.165,456.203,379.145,471.54,270.32z"
                                    />
                                    <path
                                        style={{
                                            fill: "#FFFFFF",
                                        }}
                                        d="M173.427,123.059c-35.622,14.11-59.816,41.29-66.577,77.903c-4.15,22.499-2.574,47.023,7.353,68.029 c2.215,4.666,4.868,9.164,8.026,13.321c1.53,2.028,3.173,3.966,4.954,5.807c3.162-1.13,6.211-2.537,9.122-4.183 c12.041-6.795,20.924-17.268,31.236-26.065c-34.469-39.932,2.058-89.409,47.749-100.44c42.536-10.252,100.186,7.442,113.087,51.21 c5.336,18.125,1.841,38.162-12.939,51.285c-7.727,6.87-17.541,11.409-27.914,13.257c-6.058,1.074-12.277,1.242-18.402,0.644 c-3.413-0.344-6.803-0.921-10.144-1.706c-5.658-1.332-10.69-1.137-10.69-7.24c0-15.944,0-31.895,0-47.85c0-7.966,0-15.947,0-23.929 c0-4.89,0.479-3.97-3.577-4.471c-3.203-0.393-6.398-0.703-9.605-0.958c-11.285-0.883-23.083-1.489-34.275,0.438 c-4.187,0.722-4.453,0.049-4.453,4.591c0,3.678,0,7.356,0,11.023c0,8.943,0,17.882,0,26.825c0,26.724,2.013,53.762,0.909,80.444 c-0.322,7.951-0.543,27.034-9.44,30.971c-10.312,4.561-19.431-5.085-28.946-7.094c1.31,13.396-7.072,39.932,8.542,46.693 c14.316,6.196,30.791,8.505,45.881,3.386c31.622-10.724,41.848-45.915,37.84-74.831c48.811,14.585,101.495-9.815,122.367-53.889 c14.866-31.386,8.587-70.368-13.792-97.054C317.821,109.173,232.745,99.587,173.427,123.059z"
                                    />
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
                <p className="font-sans text-start md:text-center text-sm md:text-lg md:p-4 mt-5">©2024 You Company Inc. All rights reserved.</p>
            </div>
        </footer>
    }
    const Mobile = () => {
        return <footer className="bg-blue-100/80 font-sans dark:bg-gray-900">
            <div className="container px-3 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-6 ">
                    <div className="">
                        <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Subscribe our newsletter to get an update.</h1>
                        <div className=" mt-6">
                            <input id="email" type="text" className="w-full px-2 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />

                            <button className="px-6 py-2.5 mt-3 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform w-full focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>
                        <div className="items-start mt-2 space-y-2">
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Home</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Who We Are</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Our Philosophy</p>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Industries</p>
                        <div className="flex flex-col items-start mt-2 space-y-2">
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Retail & E-Commerce</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Information Technology</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Finance & Insurance</p>
                        </div>
                    </div>
                </div>

                <div className="items-center mt-5">
                    <div className="hover:cursor-pointer">
                        <div className="my-2">
                            <div className="bg-gray-900 text-gray-200 flex items-center border rounded-lg p-3 md:mx-2 mx-auto">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-7 md:w-8"
                                    viewBox="0 0 511.999 511.999"
                                    xmlSpace="preserve"
                                >
                                    <g>
                                        <path
                                            style={{
                                                fill: "#32BBFF",
                                            }}
                                            d="M382.369,175.623C322.891,142.356,227.427,88.937,79.355,6.028 C69.372-0.565,57.886-1.429,47.962,1.93l254.05,254.05L382.369,175.623z"
                                        />
                                        <path
                                            style={{
                                                fill: "#32BBFF",
                                            }}
                                            d="M47.962,1.93c-1.86,0.63-3.67,1.39-5.401,2.308C31.602,10.166,23.549,21.573,23.549,36v439.96 c0,14.427,8.052,25.834,19.012,31.761c1.728,0.917,3.537,1.68,5.395,2.314L302.012,255.98L47.962,1.93z"
                                        />
                                        <path
                                            style={{
                                                fill: "#32BBFF",
                                            }}
                                            d="M302.012,255.98L47.956,510.035c9.927,3.384,21.413,2.586,31.399-4.103 c143.598-80.41,237.986-133.196,298.152-166.746c1.675-0.941,3.316-1.861,4.938-2.772L302.012,255.98z"
                                        />
                                    </g>
                                    <path
                                        style={{
                                            fill: "#2C9FD9",
                                        }}
                                        d="M23.549,255.98v219.98c0,14.427,8.052,25.834,19.012,31.761c1.728,0.917,3.537,1.68,5.395,2.314 L302.012,255.98H23.549z"
                                    />
                                    <path
                                        style={{
                                            fill: "#29CC5E",
                                        }}
                                        d="M79.355,6.028C67.5-1.8,53.52-1.577,42.561,4.239l255.595,255.596l84.212-84.212 C322.891,142.356,227.427,88.937,79.355,6.028z"
                                    />
                                    <path
                                        style={{
                                            fill: "#D93F21",
                                        }}
                                        d="M298.158,252.126L42.561,507.721c10.96,5.815,24.939,6.151,36.794-1.789 c143.598-80.41,237.986-133.196,298.152-166.746c1.675-0.941,3.316-1.861,4.938-2.772L298.158,252.126z"
                                    />
                                    <path
                                        style={{
                                            fill: "#FFD500",
                                        }}
                                        d="M488.45,255.98c0-12.19-6.151-24.492-18.342-31.314c0,0-22.799-12.721-92.682-51.809l-83.123,83.123 l83.204,83.205c69.116-38.807,92.6-51.892,92.6-51.892C482.299,280.472,488.45,268.17,488.45,255.98z"
                                    />
                                    <path
                                        style={{
                                            fill: "#FFAA00",
                                        }}
                                        d="M470.108,287.294c12.191-6.822,18.342-19.124,18.342-31.314H294.303l83.204,83.205 C446.624,300.379,470.108,287.294,470.108,287.294z"
                                    />
                                </svg>
                                <div className="text-left ml-3">
                                    <p className='text-xs'>Download on </p>
                                    <p className="text-sm md:text-base"> Google Play Store </p>
                                </div>
                            </div>
                            <div className="bg-gray-900 text-gray-200 flex items-center border mt-2 md:mt-0 rounded-lg p-3 md:mx-2 mx-auto">
                                <svg
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-7 md:w-8"
                                >
                                    <path
                                        d="M7.87456 2.93707C7.66756 2.93707 7.49956 2.77259 7.49956 2.56993C7.49956 1.1506 8.67554 0 10.1245 0C10.3323 0 10.4995 0.164476 10.4995 0.367133C10.4995 1.78647 9.32429 2.93707 7.87456 2.93707Z"
                                        fill="#fff"
                                    />
                                    <path
                                        d="M7.87456 2.93707C7.66756 2.93707 7.49956 2.77259 7.49956 2.56993C7.49956 1.1506 8.67554 0 10.1245 0C10.3323 0 10.4995 0.164476 10.4995 0.367133C10.4995 1.78647 9.32429 2.93707 7.87456 2.93707Z"
                                        fill="#fff"
                                    />
                                    <path
                                        d="M13.3498 10.6678C13.4946 10.7743 13.5418 10.9674 13.4601 11.126C12.1401 13.7121 11.0871 15 10.1249 15C9.67713 15 9.23689 14.8583 8.8079 14.5822C8.18316 14.1791 7.37692 14.1622 6.73493 14.5381C6.21518 14.8429 5.72019 15 5.24995 15C3.83472 15 1.5 10.7332 1.5 8.3916C1.5 5.89216 2.83873 3.986 4.87495 3.986C5.83269 3.986 6.65993 4.12405 7.35442 4.40454C7.64916 4.52349 7.98216 4.51468 8.2694 4.37957C8.8334 4.1145 9.57664 3.986 10.4999 3.986C11.6264 3.986 12.6081 4.53524 13.4248 5.60139C13.5486 5.76366 13.5156 5.99349 13.3498 6.11538C12.4386 6.78429 11.9999 7.53618 11.9999 8.3916C11.9999 9.24702 12.4386 9.99891 13.3498 10.6678Z"
                                        fill="#fff"
                                    />
                                    <path
                                        d="M13.3498 10.6678C13.4946 10.7743 13.5418 10.9674 13.4601 11.126C12.1401 13.7121 11.0871 15 10.1249 15C9.67713 15 9.23689 14.8583 8.8079 14.5822C8.18316 14.1791 7.37692 14.1622 6.73493 14.5381C6.21518 14.8429 5.72019 15 5.24995 15C3.83472 15 1.5 10.7332 1.5 8.3916C1.5 5.89216 2.83873 3.986 4.87495 3.986C5.83269 3.986 6.65993 4.12405 7.35442 4.40454C7.64916 4.52349 7.98216 4.51468 8.2694 4.37957C8.8334 4.1145 9.57664 3.986 10.4999 3.986C11.6264 3.986 12.6081 4.53524 13.4248 5.60139C13.5486 5.76366 13.5156 5.99349 13.3498 6.11538C12.4386 6.78429 11.9999 7.53618 11.9999 8.3916C11.9999 9.24702 12.4386 9.99891 13.3498 10.6678Z"
                                        fill="#fff"
                                    />
                                </svg>

                                <div className="text-left ml-3">
                                    <p className='text-xs'>Download on </p>
                                    <p className="text-sm md:text-base"> Apple Store </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 hover:cursor-pointer mt-4">
                        <span className="inline-flex ml-auto mt-0 justify-start">
                            <a className="ml-3 w-8 h-8">
                                <svg
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                >
                                    <path
                                        fill="#1D9BF0"
                                        d="M13.567 5.144c.008.123.008.247.008.371 0 3.796-2.889 8.173-8.172 8.173v-.002A8.131 8.131 0 011 12.398a5.768 5.768 0 004.25-1.19 2.876 2.876 0 01-2.683-1.995c.431.083.875.066 1.297-.05A2.873 2.873 0 011.56 6.348v-.036c.4.222.847.345 1.304.36a2.876 2.876 0 01-.89-3.836 8.152 8.152 0 005.92 3 2.874 2.874 0 014.895-2.619 5.763 5.763 0 001.824-.697 2.883 2.883 0 01-1.262 1.588A5.712 5.712 0 0015 3.656a5.834 5.834 0 01-1.433 1.488z"
                                    />
                                </svg>
                            </a>

                            <a className="ml-3 w-8 h-8">
                                <svg
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <title>{"linkedin_fill"}</title>
                                    <g
                                        id="\u9875\u9762-1"
                                        stroke="none"
                                        strokeWidth={1}
                                        fill="none"
                                        fillRule="evenodd"
                                    >
                                        <g id="Brand" transform="translate(-336.000000, -48.000000)">
                                            <g id="linkedin_fill" transform="translate(336.000000, 48.000000)">
                                                <path
                                                    d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                                                    id="MingCute"
                                                    fillRule="nonzero"
                                                />
                                                <path
                                                    d="M18,3 C19.6569,3 21,4.34315 21,6 L21,18 C21,19.6569 19.6569,21 18,21 L6,21 C4.34315,21 3,19.6569 3,18 L3,6 C3,4.34315 4.34315,3 6,3 L18,3 Z M8,10 C7.44772,10 7,10.4477 7,11 L7,16 C7,16.5523 7.44772,17 8,17 C8.55228,17 9,16.5523 9,16 L9,11 C9,10.4477 8.55228,10 8,10 Z M11,9 C10.4477,9 10,9.44772 10,10 L10,16 C10,16.5523 10.4477,17 11,17 C11.5523,17 12,16.5523 12,16 L12,12.3398 C12.3049,11.9955 12.8207,11.5921 13.3933,11.3472 C13.7261,11.2048 14.2268,11.1479 14.5751,11.2574 C14.7274,11.3053 14.8143,11.3726 14.868,11.4451 C14.9201,11.5157 15,11.6707 15,12 L15,16 C15,16.5522 15.4477,17 16,17 C16.5523,17 17,16.5522 17,16 L17,12 C17,11.3292 16.8298,10.7342 16.4758,10.2556 C16.1232,9.77907 15.6476,9.4981 15.1749,9.34949 C14.2732,9.06594 13.2739,9.22295 12.6067,9.50837 C12.395,9.59892 12.1863,9.70435 11.9841,9.82128 C11.8998,9.35427 11.4913,9 11,9 Z M8,7 C7.44772,7 7,7.44772 7,8 C7,8.55228 7.44772,9 8,9 C8.55228,9 9,8.55228 9,8 C9,7.44772 8.55228,7 8,7 Z"
                                                    id="\u5F62\u72B6"
                                                    fill="#09244B"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                            <a className="ml-3 w-8 h-8 text-black">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.693 3.693 0 0 0-.151-1.028 1.832 1.832 0 0 0-.542-.875 8.014 8.014 0 0 0 2.038-.471 4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.77 6.77 0 0 0 .3-2.13 4.138 4.138 0 0 0-.26-1.476 3.892 3.892 0 0 0-.795-1.284 2.81 2.81 0 0 0 .162-.582c.033-.2.05-.402.05-.604 0-.26-.03-.52-.09-.773a5.309 5.309 0 0 0-.221-.763.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.34 5.34 0 0 0-.703.26 6.503 6.503 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0 13.507 13.507 0 0 0-.572-.362 6.022 6.022 0 0 0-.672-.342 4.516 4.516 0 0 0-.705-.261 2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02 5.844 5.844 0 0 0-.23.763c-.054.254-.08.513-.081.773 0 .202.017.404.051.604.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476 6.871 6.871 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633 2.99 2.99 0 0 0-.2.744 2.754 2.754 0 0 1-1.175.27 1.788 1.788 0 0 1-1.065-.3 2.904 2.904 0 0 1-.752-.824 3.1 3.1 0 0 0-.292-.382 2.693 2.693 0 0 0-.372-.343 1.841 1.841 0 0 0-.432-.24 1.2 1.2 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.649.649 0 0 0-.162.02.408.408 0 0 0-.13.06.116.116 0 0 0-.06.1.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333.112.098.213.209.3.33.09.119.168.246.231.381.073.134.15.288.231.463.188.474.522.875.954 1.145.453.243.961.364 1.476.351.174 0 .349-.01.522-.03.172-.028.343-.057.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005z" /></svg>
                            </a>
                            <a className="ml-3 w-8 h-8">
                                <svg
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <title>{"facebook_fill"}</title>
                                    <g
                                        id="\u9875\u9762-1"
                                        stroke="none"
                                        strokeWidth={1}
                                        fill="none"
                                        fillRule="evenodd"
                                    >
                                        <g
                                            id="Brand"
                                            transform="translate(-240.000000, -48.000000)"
                                            fillRule="nonzero"
                                        >
                                            <g id="facebook_fill" transform="translate(240.000000, 48.000000)">
                                                <path
                                                    d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                                                    id="MingCute"
                                                    fillRule="nonzero"
                                                />
                                                <path
                                                    d="M13.5,21.8883 C18.3113,21.1645 22,17.013 22,12 C22,6.47715 17.5228,2 12,2 C6.47715,2 2,6.47715 2,12 C2,17.013 5.68874,21.1645 10.5,21.8883 L10.5,15 L9,15 C8.17157,15 7.5,14.3284 7.5,13.5 C7.5,12.6716 8.17157,12 9,12 L10.5,12 L10.5,10 C10.5,8.067 12.067,6.5 14,6.5 L14.5,6.5 C15.3284,6.5 16,7.17157 16,8 C16,8.82843 15.3284,9.5 14.5,9.5 L14,9.5 C13.7239,9.5 13.5,9.72386 13.5,10 L13.5,12 L15,12 C15.8284,12 16.5,12.6716 16.5,13.5 C16.5,14.3284 15.8284,15 15,15 L13.5,15 L13.5,21.8883 Z"
                                                    id="\u8DEF\u5F84"
                                                    fill="#09244B"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                            <a className="ml-3 w-8 h-8">
                                <svg
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 551.034 551.034"
                                    style={{
                                        enableBackground: "new 0 0 551.034 551.034",
                                    }}
                                    xmlSpace="preserve"
                                >
                                    <g id="XMLID_13_">
                                        <linearGradient
                                            id="XMLID_2_"
                                            gradientUnits="userSpaceOnUse"
                                            x1={275.517}
                                            y1={4.5714}
                                            x2={275.517}
                                            y2={549.7202}
                                            gradientTransform="matrix(1 0 0 -1 0 554)"
                                        >
                                            <stop
                                                offset={0}
                                                style={{
                                                    stopColor: "#E09B3D",
                                                }}
                                            />
                                            <stop
                                                offset={0.3}
                                                style={{
                                                    stopColor: "#C74C4D",
                                                }}
                                            />
                                            <stop
                                                offset={0.6}
                                                style={{
                                                    stopColor: "#C21975",
                                                }}
                                            />
                                            <stop
                                                offset={1}
                                                style={{
                                                    stopColor: "#7024C4",
                                                }}
                                            />
                                        </linearGradient>
                                        <path
                                            id="XMLID_17_"
                                            style={{
                                                fill: "url(#XMLID_2_)",
                                            }}
                                            d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722 c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156 C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156 c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722 c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z"
                                        />
                                        <linearGradient
                                            id="XMLID_3_"
                                            gradientUnits="userSpaceOnUse"
                                            x1={275.517}
                                            y1={4.5714}
                                            x2={275.517}
                                            y2={549.7202}
                                            gradientTransform="matrix(1 0 0 -1 0 554)"
                                        >
                                            <stop
                                                offset={0}
                                                style={{
                                                    stopColor: "#E09B3D",
                                                }}
                                            />
                                            <stop
                                                offset={0.3}
                                                style={{
                                                    stopColor: "#C74C4D",
                                                }}
                                            />
                                            <stop
                                                offset={0.6}
                                                style={{
                                                    stopColor: "#C21975",
                                                }}
                                            />
                                            <stop
                                                offset={1}
                                                style={{
                                                    stopColor: "#7024C4",
                                                }}
                                            />
                                        </linearGradient>
                                        <path
                                            id="XMLID_81_"
                                            style={{
                                                fill: "url(#XMLID_3_)",
                                            }}
                                            d="M275.517,133C196.933,133,133,196.933,133,275.516 s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6 c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083 C362.6,323.611,323.611,362.6,275.517,362.6z"
                                        />
                                        <linearGradient
                                            id="XMLID_4_"
                                            gradientUnits="userSpaceOnUse"
                                            x1={418.306}
                                            y1={4.5714}
                                            x2={418.306}
                                            y2={549.7202}
                                            gradientTransform="matrix(1 0 0 -1 0 554)"
                                        >
                                            <stop
                                                offset={0}
                                                style={{
                                                    stopColor: "#E09B3D",
                                                }}
                                            />
                                            <stop
                                                offset={0.3}
                                                style={{
                                                    stopColor: "#C74C4D",
                                                }}
                                            />
                                            <stop
                                                offset={0.6}
                                                style={{
                                                    stopColor: "#C21975",
                                                }}
                                            />
                                            <stop
                                                offset={1}
                                                style={{
                                                    stopColor: "#7024C4",
                                                }}
                                            />
                                        </linearGradient>
                                        <circle
                                            id="XMLID_83_"
                                            style={{
                                                fill: "url(#XMLID_4_)",
                                            }}
                                            cx={418.306}
                                            cy={134.072}
                                            r={34.149}
                                        />
                                    </g>
                                </svg>
                            </a>
                            <a className="ml-3 w-8 h-8">
                                <svg
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 473.931 473.931"
                                    style={{
                                        enableBackground: "new 0 0 473.931 473.931",
                                    }}
                                    xmlSpace="preserve"
                                >
                                    <circle
                                        style={{
                                            fill: "#D42028",
                                        }}
                                        cx={236.966}
                                        cy={236.966}
                                        r={236.966}
                                    />
                                    <path
                                        style={{
                                            fill: "#C52232",
                                        }}
                                        d="M404.518,69.383c92.545,92.541,92.549,242.586,0,335.135 c-92.545,92.549-242.593,92.549-335.134,0.004L404.518,69.383z"
                                    />
                                    <path
                                        style={{
                                            fill: "#B21F2F",
                                        }}
                                        d="M471.54,270.32l-123.28-123.28l-32.43,32.43l-42.405-42.405l-13.096,13.096l-28.688-28.688 l-99.905,99.905l28.688,28.688l-35.55,35.547l42.409,42.405l-7.484,7.484l23.072,23.075l-20.58,20.583l93.933,93.929 C366.977,464.165,456.203,379.145,471.54,270.32z"
                                    />
                                    <path
                                        style={{
                                            fill: "#FFFFFF",
                                        }}
                                        d="M173.427,123.059c-35.622,14.11-59.816,41.29-66.577,77.903c-4.15,22.499-2.574,47.023,7.353,68.029 c2.215,4.666,4.868,9.164,8.026,13.321c1.53,2.028,3.173,3.966,4.954,5.807c3.162-1.13,6.211-2.537,9.122-4.183 c12.041-6.795,20.924-17.268,31.236-26.065c-34.469-39.932,2.058-89.409,47.749-100.44c42.536-10.252,100.186,7.442,113.087,51.21 c5.336,18.125,1.841,38.162-12.939,51.285c-7.727,6.87-17.541,11.409-27.914,13.257c-6.058,1.074-12.277,1.242-18.402,0.644 c-3.413-0.344-6.803-0.921-10.144-1.706c-5.658-1.332-10.69-1.137-10.69-7.24c0-15.944,0-31.895,0-47.85c0-7.966,0-15.947,0-23.929 c0-4.89,0.479-3.97-3.577-4.471c-3.203-0.393-6.398-0.703-9.605-0.958c-11.285-0.883-23.083-1.489-34.275,0.438 c-4.187,0.722-4.453,0.049-4.453,4.591c0,3.678,0,7.356,0,11.023c0,8.943,0,17.882,0,26.825c0,26.724,2.013,53.762,0.909,80.444 c-0.322,7.951-0.543,27.034-9.44,30.971c-10.312,4.561-19.431-5.085-28.946-7.094c1.31,13.396-7.072,39.932,8.542,46.693 c14.316,6.196,30.791,8.505,45.881,3.386c31.622-10.724,41.848-45.915,37.84-74.831c48.811,14.585,101.495-9.815,122.367-53.889 c14.866-31.386,8.587-70.368-13.792-97.054C317.821,109.173,232.745,99.587,173.427,123.059z"
                                    />
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
                <p className="font-sans text-center text-sm mt-5">© 2023 You Company Inc. All rights reserved.</p>
            </div>
        </footer>
    }

    return (<>
        {props.state === 0 ? <Desktop /> : <Mobile />}
    </>

    )

}
