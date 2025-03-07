import React from 'react'

export default function Chat3() {
    {/* <script src="//unpkg.com/alpinejs" defer></script> */}
  return (
     <div class="p-5 h-screen w-full bg-blue-600">
           <div class=" h-full bg-white overflow-hidden flex flex-col rounded-xl overflow-hidden shadow-xl"  >
        <div class=" border-b px-5 py-1 flex justify-between items-center">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="-149.1 -248.49675 1292.2 1490.9805">
                    <g transform="translate(-15 -11.5)">
                        <linearGradient y2="1005.5" x2="512" y1="11.5" x1="512" gradientUnits="userSpaceOnUse" id="a">
                            <stop offset="0" stop-color="#00b2ff" />
                            <stop offset="1" stop-color="#006aff" />
                        </linearGradient>
                        <path
                            d="M512 11.5c-280 0-497 205.1-497 482.1 0 144.9 59.4 270.1 156.1 356.6 8.1 7.3 13 17.4 13.4 28.3l2.7 88.4c.9 28.2 30 46.5 55.8 35.2l98.6-43.5c8.4-3.7 17.7-4.4 26.5-2 45.3 12.5 93.6 19.1 143.9 19.1 280 0 497-205.1 497-482.1S792 11.5 512 11.5z"
                            fill="url(#a)" fill-rule="evenodd" clip-rule="evenodd" />
                        <path
                            d="M213.6 634.6l146-231.6c23.2-36.8 73-46 107.8-19.9l116.1 87.1c10.7 8 25.3 7.9 35.9-.1l156.8-119c20.9-15.9 48.3 9.2 34.2 31.4L664.5 614c-23.2 36.8-73 46-107.8 19.9l-116.1-87.1c-10.7-8-25.3-7.9-35.9.1L247.8 666c-20.9 15.9-48.3-9.2-34.2-31.4z"
                            fill-rule="evenodd" clip-rule="evenodd" fill="#fff" />
                    </g>
                </svg></span>
            <div class=" w-1/2 relative focus-within:shadow-lg" x-data="{ search : false }">
                <div class="flex items-center w-full focus-within:border px-3 py-2  focus-within:border-b-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 stroke-slate-300 mr-5" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input type="text" x-on:click=" search =! search " placeholder="Search.."
                        class=" w-full outline-none placeholder:text-slate-300 font-semibold"/>
                </div>
                <div class="absolute w-full  border   bg-white    " x-data="alpineInstance()"
                    // @click.outside="search = false" x-show="search"
                    >
                    <div class="px-4 py-1 flex justify-between items-center border-b">
                        <p class="text-sm font-medium text-slate-600">Recent Search</p>
                        <p class="text-xs text-slate-400 cursor-pointer">Clear All</p>

                    </div>
                    <template x-for="user in users" 
                    // :key="user.id"
                    >
                        <div
                            class="w-full px-4 py-3 border-b last:border-b-0 flex items-start hover:bg-slate-50 cursor-pointer">
                            <img x-bind:src="user.image" class="h-12 w-12 border rounded-full" alt=""/>
                            <div class="ml-4">
                                <p x-text="user.name" class="text-md font-semibold text-slate-600 m-0 p-0"> </p>
                                <p class="text-xs text-slate-400 -mt-0.5" x-text="user.email"></p>
                            </div>

                        </div>
                    </template>
                </div>
            </div>
            <div class="flex space-x-4 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-slate-400 " fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <img src="https://source.unsplash.com/random/500x500/?face" class="h-10 w-10 rounded-full" alt=""/>

            </div>

        </div>
        <div class="h-full flex">
            <div class="h-full w-64 border-r pt-10 px-5">
                <p class="text-xs font-medium text-gray-400">MAIN</p>
                <div
                    class="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Dashboard
                </div>

                <p class="text-xs font-medium text-gray-400 mt-8">APPLICATIONS</p>
                <div
                    class="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">

                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />

                    </svg>
                    Calender
                </div>

                <div class="mt-4 py-1.5 text-sm font-medium  text-blue-500 group cursor-pointer flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5   mr-4  stroke-blue-500" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">

                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />

                    </svg>
                    Messages
                </div>

                <div
                    class="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">


                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />


                    </svg>
                    Contacts
                </div>

                <div
                    class="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">

                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />

                    </svg>
                    Team Members
                </div>

                <div
                    class="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">

                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    Projects
                </div>

                <div
                    class="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">

                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Job Listing
                </div>


            </div>
            <div class="h-full w-96 bg-slate-50 border-r flex flex-col">
                <div class="h-16 border-b px-4 flex items-center justify-center space-x-4">
                    <div class="px-4 py-4 border-b-4 border-b-blue-500">All</div>
                    <div class="px-4 py-4 ">Archived</div>
                </div>
                <div class="h-full">

                    <div
                        class="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                        <img src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500"
                            class="h-12 w-12 border-2 border-white rounded-full" alt=""/>
                        <div class="ml-4">
                            <p x-text="user.name" class="text-md font-semibold text-slate-600 m-0 p-0">Yaroslav Zubkp
                            </p>
                            <p class="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">is is long ipsum
                                avaliable...</p>
                        </div>
                    </div>

                    <div
                        class="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                        <img src="https://images.unsplash.com/photo-1499887142886-791eca5918cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500 "
                            class="h-12 w-12 border-2 border-white rounded-full" alt=""/>
                        <div class="ml-4">
                            <p x-text="user.name" class="text-md font-semibold text-slate-600 m-0 p-0"> Alison Alison
                            </p>
                            <p class="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">Hello</p>
                        </div>
                    </div>

                    <div
                        class="px-5 py-4   flex items-center bg-white cursor-pointer border-l-4 border-l-blue-500 border-t border-b">
                        <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500 "
                            class="h-12 w-12 border-2 border-white rounded-full" alt=""/>
                        <div class="ml-4">
                            <p x-text="user.name" class="text-md font-semibold text-slate-600 m-0 p-0"> Mircel Jones</p>
                            <p class="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">Ok, Thanks.</p>
                        </div>
                    </div>

                    <div
                        class="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                            class="h-12 w-12 border-2 border-white rounded-full" alt=""/>
                        <div class="ml-4">
                            <p x-text="user.name" class="text-md font-semibold text-slate-600 m-0 p-0">Uran Poland</p>
                            <p class="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">We own hidden
                                lake..</p>
                        </div>
                    </div>

                    <div
                        class="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                        <img src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500"
                            class="h-12 w-12 border-2 border-white rounded-full" alt=""/>
                        <div class="ml-4">
                            <p x-text="user.name" class="text-md font-semibold text-slate-600 m-0 p-0">Yaroslav Zubkp
                            </p>
                            <p class="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">is is long ipsum
                                avaliable...</p>
                        </div>
                    </div>

                    <div
                        class="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                        <img src="https://images.unsplash.com/photo-1499887142886-791eca5918cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500 "
                            class="h-12 w-12 border-2 border-white rounded-full" alt=""/>
                        <div class="ml-4">
                            <p x-text="user.name" class="text-md font-semibold text-slate-600 m-0 p-0"> Alison Alison
                            </p>
                            <p class="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">Hello</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full h-full flex flex-col">
                <div class="h-16 border-b flex justify-between items-center w-full px-5 py-2 shadow-sm">
                    <div class="flex items-center">
                        <img class="h-10 w-10 overflow-hidden rounded-full"
                            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                            alt=""/>
                        <p class="font-semibold ml-3 text-slate-600">Mircel Jones</p>
                    </div>
                    <div class="flex items-center space-x-5">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="h-9 bg-slate-50 rounded-full stroke-slate-400 p-2" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-slate-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>

                    </div>
                </div>
                <div class="h-full px-10 py-4">
                    <div class="text-center  my-5">
                        <hr class="-mb-3"/>
                        <span class="text-xs text-slate-300 font-medium bg-white px-3 -mt-3">Wednesday, Feburary
                            5</span>
                    </div>
                    <div class="w-full flex flex-start overflow-y-auto">
                        <div class="w-1/2">
                            <div class="flex items-center">
                                <img class="h-5 w-5 overflow-hidden rounded-full"
                                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                                    alt=""/>
                                <p class="font-semibold ml-3 text-sm text-slate-600">Mircel Jones <span
                                        class="text-slate-400 text-xs">3:21 PM</span></p>
                            </div>

                            <div class="mt-3 w-full bg-slate-50 p-4 rounded-b-xl rounded-tr-xl">
                                <p class=" text-sm text-slate-500">
                                    Hey all, <br/>
                                    There are many variation of passages of Lorem ipsum avaliable, but the jority have alternation in some form , by injected humor, or randomise words which don't look even slightly believable.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex justify-end mt-3">
                        <div class="w-1/2 ">
                            <div class="flex items-center justify-end">
                                <p class="font-semibold mr-3 text-sm text-slate-600">Me <span
                                    class="text-slate-400 text-xs">3:25 PM</span></p>

                                <img class="h-5 w-5 overflow-hidden rounded-full"
                                    src="https://source.unsplash.com/random/500x500/?face"
                                    alt=""/>
                             
                            </div>

                            <div class="mt-3 w-full bg-blue-500 p-4 rounded-b-xl rounded-tl-xl">
                                <p class=" text-sm text-white">
                                    Hey, <br/>
                                    we are own hidden lake forest which is netural lake are generaly found in mountain.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="text-center  my-5">
                        <hr class="-mb-3"/>
                        <span class="text-xs text-slate-300 font-medium bg-white px-3 -mt-3">Today, 2:15 AM
                            5</span>
                    </div>
                    <div class="w-full flex flex-start">
                        <div class="w-1/2">
                            <div class="flex items-center">
                                <img class="h-5 w-5 overflow-hidden rounded-full"
                                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                                    alt=""/>
                                <p class="font-semibold ml-3 text-sm text-slate-600">Mircel Jones <span
                                        class="text-slate-400 text-xs">3:21 PM</span></p>
                            </div>

                            <div class="mt-3  bg-slate-50 p-4 rounded-b-xl rounded-tr-xl">
                                <p class=" text-sm text-slate-500">
                                    ok, Thanks
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
                <div class="  w-full  px-5 py-3">
                    <div
                        class="h-12 flex justify-between px-3 items-center border border-transparent bg-slate-50 focus-within:border-slate-300 rounded-lg">
                        <input type="text" class="w-full px-3 bg-transparent outline-none placeholder:text-slate-400"
                            placeholder="Type your message"/>
                        <div class="flex items-center space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 stroke-slate-300" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 stroke-slate-300" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>

                        </div>
                    </div>



                </div>
            </div>
        </div>
    </div>
     </div>
   
  )
}
 {/* <script>
        function alpineInstance() {

            return {
                users: [
                    {
                        id: 1,
                        name: 'Marcel Jones ',
                        email: "atuny0@sohu.com",
                        phone: "+63 791 675 8914",
                        show: false,
                        image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500",
                    },
                    {
                        id: 2,
                        name: 'Sheldon Quigley ',
                        "email": "hbingley1@plala.or.jp",
                        "phone": "+7 813 117 7139",
                        show: false,
                        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500",
                    },
                    {
                        id: 3,
                        name: 'Leonard Leach ',
                        "email": "rshawe2@51.la",
                        "phone": "+63 739 292 7942",
                        show: true,
                        image: "https://images.unsplash.com/photo-1584999734482-0361aecad844?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500",
                    },


                ]

            }

        }
    </script> */}