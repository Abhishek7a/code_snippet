import React from 'react'

export default function Otp() {
  return (
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 dark:bg-gray-900 py-12">
      <div class="relative bg-gray-50 dark:bg-gray-800 px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div class="flex flex-col items-center justify-center text-center space-y-2">
            <div class="font-semibold text-3xl dark:text-gray-100">
              <p>Email Verification</p>
            </div>
            <div class="flex flex-row text-sm font-medium text-gray-400 ">
              <p>We have sent a code to your email co**@snippett.com</p>
            </div>
          </div>
          <div>
            <form action="" method="post">
              <div class="flex flex-col space-y-16">
                <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                  <div class="w-16 h-16 ">
                    <input class="w-full h-full flex flex-col items-center justify-center text-center px-4 outline-none rounded-xl border-2 dark:border-0 border-gray-200 dark:border-gray-500  text-lg bg-gray-50 focus:bg-gray-50 focus:ring-1 ring-orange-500 dark:bg-gray-700" type="text" name="" id="" />
                  </div>
                  <div class="w-16 h-16 ">
                    <input class="w-full h-full flex flex-col items-center justify-center text-center px-4 outline-none rounded-xl border-2 dark:border-0 border-gray-200 dark:border-gray-500 ml-1 text-lg bg-gray-50 focus:bg-gray-50 focus:ring-1 ring-orange-500 dark:bg-gray-700" type="text" name="" id="" />
                  </div>
                  <div class="w-16 h-16 ">
                    <input class="w-full h-full flex flex-col items-center justify-center text-center px-4 outline-none rounded-xl border-2 dark:border-0 border-gray-200 dark:border-gray-500 ml-2 text-lg bg-gray-50 focus:bg-gray-50 focus:ring-1 ring-orange-500 dark:bg-gray-700" type="text" name="" id="" />
                  </div>
                  <div class="w-16 h-16 ">
                    <input class="w-full h-full flex flex-col items-center ml-3 justify-center text-center px-4 outline-none rounded-xl border-2 dark:border-0 border-gray-200 dark:border-gray-500 text-lg bg-gray-50 focus:bg-gray-50 focus:ring-1 ring-orange-500 dark:bg-gray-700" type="text" name="" id="" />
                  </div>
                </div>
                <div class="flex flex-col space-y-5">
                  <div>
                    <button class="flex flex-row items-center justify-center text-center w-full rounded-md outline-none py-3 bg-orange-500 border-none text-white text-sm shadow-sm">
                      Verify Account
                    </button>
                  </div>

                  <div class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Didn't recieve code?</p> <a class="flex flex-row items-center text-orange-600" href="http://" target="_blank" rel="noopener noreferrer">Resend</a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}
