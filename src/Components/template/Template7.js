import React from 'react'

export default function Template7() {
  return (
<div class="flex h-screen flex-col items-center justify-center bg-white">
  <div>
    <img class="h-[89px] w-[273px]" src="https://ppc.co/wp-content/uploads/2021/01/Google.png" alt="google Logo" />
  </div>
  <div class="md:w-[584px] mx-auto mt-7 flex w-[92%] items-center rounded-full border hover:shadow-md">
    <div class="pl-5">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    <input type="text" class="w-full bg-transparent rounded-full py-[14px] pl-4 outline-none" />
    <div class="pr-5">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    </div>
  </div>
  <div class="mt-3 flex space-x-12">
    <div class="bg-[#f8f9fa] px-2 py-1">Google Search</div>
    <div class="bg-[#f8f9fa] px-2 py-1">I'm Feeling Lucky</div>
  </div>
</div>
  )
}
