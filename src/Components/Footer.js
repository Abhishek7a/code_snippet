import React from 'react'

export default function Footer() {
    return (
        <footer className="text-gray-600 body-font z-50 bg-gray-50 px-4">
            <div className="container px-2 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <div className="flex title-font font-medium items-center text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" className='w-10 h-10' viewBox="0 0 512 512" style={{
                                enableBackground: "new 0 0 512 512",
                            }}
                            xmlSpace="preserve"
                        >
                            <path
                                style={{ fill: "#E41F11", }}
                                d="M0,260.908l174.648-81.136v38.568l-132.08,57.848v0.728l132.08,57.848v38.568L0,292.212V260.908z"
                            />
                            <path
                                style={{ fill: "#111827",  }}
                                d="M201.6,387.9l77.864-263.8h36.752L238.4,387.9H201.6z"
                            />
                            <path
                                style={{
                                    fill: "#00008B",
                                    // fill: "#0E76A8",
                                }}
                                d="M512,293.284L337.352,373.34v-38.568l134.992-57.848v-0.728L337.352,218.34v-38.568L512,259.828 V293.284z"
                            />
                        </svg>
                        <span className="ml-3 text-xl">Code Snippet</span>
                    </div>
                </div>
                <span className="inline-flex sm:ml-auto sm:mt-0 justify-center sm:justify-start">
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-2 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-2">©2024 Code Snippet —
                        <a href="#" className="text-gray-600" rel="noopener noreferrer" target="_blank"> codesnippett@gmail.com</a>
                    </p>

                </span>
            </div>
        </footer>
    )
}
