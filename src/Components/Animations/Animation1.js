import React from 'react'

export default function Animation1() {
    return (
        <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <div class="flex flex-col hidden md:block -space-y-72 items-center relative">

                <div class="relative shadow-2xl shadow-[#16192E] z-30 bg-transparent stroke-1 -rotate-[60deg] skew-y-[30deg] scale-75 border-gray-200 w-[650px] mx-auto h-[420px] rounded-3xl">
                    <div class="w-full h-full absolute top-0 left-0 rounded-3xl bg-cover bg-[url('https://products.ls.graphics/mesh-gradients/images/37.-Light-Sky-Blue_1.jpg')]">
                        <div class="p-12 flex flex-col justify-between h-full">
                            <img class="h-24 w-24" src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="" />
                            <div class="flex flex-col">
                                <p class="text-gray-500 text-lg font-mono">1253 8282 2588 23562</p>
                                <p class="font-bold text-lg text-stone-600">Robert</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative shadow-2xl shadow-[#16192E] z-20 bg-transparent stroke-1 -rotate-[60deg] skew-y-[30deg] scale-75 border-gray-200 w-[650px] mx-auto h-[420px] rounded-3xl">
                    <div class="w-full h-full absolute top-0 left-0 rounded-3xl bg-cover bg-[url('https://products.ls.graphics/mesh-gradients/images/35.-Ronchi.jpg')]">
                        <div class="p-12 flex flex-col justify-between h-full">
                            <img class="h-28 w-28" src="https://upload.wikimedia.org/wikipedia/commons/5/57/Discover_Card_logo.svg" alt="" />
                            <div class="flex flex-col">
                                <p class="text-gray-300 text-lg font-mono">1253 8282 2588 23562</p>
                                <p class="font-bold text-lg text-stone-300">Caroline Q.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative shadow-2xl shadow-[#16192E] z-10 bg-transparent stroke-1  -rotate-[60deg] skew-y-[30deg] scale-75 w-[650px] mx-auto h-[420px] rounded-3xl">
                    <div class="w-full h-full absolute top-0 left-0 rounded-3xl bg-cover bg-[url('https://products.ls.graphics/mesh-gradients/images/15.-Perfume_1.jpg')]">
                        <div class="p-12 flex flex-col justify-between h-full">
                            <img class="h-24 w-24" src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="" />
                            <div class="flex flex-col" />
                            <p class="text-gray-500 text-lg font-mono">1253 8282 2588 23562</p>
                            <p class="font-bold text-lg text-stone-600">Robert Lewonsky</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
