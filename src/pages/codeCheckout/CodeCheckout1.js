import React, { useEffect, useRef } from 'react'
import ClipBoard from '../../Components/ClipBoard';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-okaidia.css';
import '../prism-custom-theme.css';
import ClipboardJS from 'clipboard';
import { useAppContext } from '../../AppContext';
import checkout1 from '../../Components/checkout/Checkout1';

export default function CodeCheckout1() {
  const codeRef = useRef(null);
  const { globalVariable, dark } = useAppContext();

  useEffect(() => {
    Prism.highlightAll();
    const clipboard = new ClipboardJS('.clipboard-btn', {
      target: function () {
        return codeRef.current;
      }
    });
    clipboard.on('success', function (e) {
      e.clearSelection();
    });

    clipboard.on('error', function (e) {
      console.error('Error copying text to clipboard:', e.action);
    });
    return () => {
      clipboard.destroy();
    };

  }, [globalVariable, dark]);

  const Checkout1 = ClipBoard(checkout1);
  return (
    <div className='w-11/12 m-auto'>
      <Checkout1 />
      <pre className='mt-0'>
        <code ref={codeRef} className="language-html">{dark === false && globalVariable === 'HTML' ?
          `<body class="bg-gray-100 dark:bg-gray-900 dark:text-gray-50">
 <div class="mx-auto">
  <div class="lg:flex shadow-md">
    <div class="lg:w-3/4 bg-gray-50 dark:bg-gray-800 p-4 relative">
      <div class="flex justify-between border-b pb-8">
        <h1 class="font-semibold text-2xl">Shopping Cart</h1>
      </div>
      <div class="flex mt-10 mb-3">
        <h3 class="font-semibold text-gray-600 dark:text-gray-100 text-xs uppercase md:w-2/5 w-3/5">Product Details</h3>
        <h3 class="font-semibold text-gray-600 dark:text-gray-100 text-xs uppercase w-1/5 text-center">Quantity</h3>
        <h3 class="font-semibold text-gray-600 dark:text-gray-100 text-xs uppercase md:w-1/5 text-center md:block hidden">Price</h3>
        <h3 class="font-semibold text-gray-600 dark:text-gray-100 text-xs uppercase w-1/5 text-center">Total</h3>
      </div>
      <div class="flex items-center hover:bg-gray-100 dark:hover:bg-gray-600 px-6 py-3">
        <div class="flex md:w-2/5 w-3/5">
          <div class="w-20">
            <img class="h-24" src="#" alt="burgur"></img>
          </div>
          <div class="flex flex-col justify-between ml-4 flex-grow">
            <span class="font-bold md:text-sm text-xs">Burgur</span>
            <span class="text-green-500 text-xs">Veg</span>
            <button class="font-semibold hover:text-red-600 text-red-500 text-xs">Remove</button>
          </div>
        </div>
        <div class="flex justify-center w-1/5">
          <svg class="fill-current cursor-pointer text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
          <input class="mx-2 border dark:bg-gray-700 text-center w-8" type="text" value="1"></input>
          <svg class="fill-current cursor-pointer text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
        </div>
        <span class="text-center w-1/5 md:block hidden font-semibold text-sm">₹30.00</span>
        <span class="text-center w-1/5 font-semibold text-sm">₹30.00</span>
      </div>
      <a href="#" class="flex font-semibold text-indigo-600 text-sm my-10 absolute bottom-0">
        <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"></path></svg>
        Add more Items
      </a>
    </div>
    <div class="lg:w-1/4 px-8 lg:py-10 py-14">
      <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div class="flex justify-between mt-10 mb-5">
        <span class="font-semibold text-sm uppercase">Items</span>
        <span class="font-semibold text-sm">₹30.00</span>
      </div>
      <div>
        <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
        <select class="block p-2 text-gray-600 dark:bg-gray-800 dark:text-gray-400 w-full text-sm outline-none">
          <option class="p-3">Standard shipping - ₹20.00</option>
        </select>
      </div>
      <div class="py-10">
        <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
        <input type="text" id="promo" placeholder="Enter your code" class="p-2 dark:bg-gray-800 text-sm w-full outline-none"></input>
      </div>
      <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
      <div class="border-t mt-8">
        <div class="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>₹50</span>
        </div>
        <button class="bg-green-500 font-semibold hover:bg-green-600 py-3 text-sm text-white uppercase w-full">Buy Now</button>
      </div>
    </div>
  </div>
 </div>
</body>` : dark === false && globalVariable === 'React' ?
            `<body className="bg-gray-100 dark:bg-gray-900 dark:text-gray-50">
 <div className="mx-auto">
  <div className="lg:flex shadow-md ">
    <div className="lg:w-3/4 bg-gray-50 dark:bg-gray-800 p-4 relative">
      <div className="flex justify-between border-b pb-8">
        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
      </div>
      <div className="flex mt-10 mb-3">
        <h3 className="font-semibold text-gray-600 dark:text-gray-100 text-xs uppercase md:w-2/5 w-3/5">Product Details</h3>
        <h3 className="font-semibold text-gray-600 dark:text-gray-100 text-xs uppercase w-1/5 text-center">Quantity</h3>
        <h3 className="font-semibold text-gray-600 dark:text-gray-100 text-xs uppercase md:w-1/5 text-center md:block hidden">Price</h3>
        <h3 className="font-semibold text-gray-600 dark:text-gray-100 text-xs uppercase w-1/5 text-center">Total</h3>
      </div>
      <div className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-600 px-6 py-3" >
        <div className="flex md:w-2/5 w-3/5">
          <div className="w-20">
            <img className="h-24 " src={burgur} alt="burgur" />
          </div>
          <div className="flex flex-col justify-between ml-4 flex-grow">
            <span className="font-bold md:text-sm text-xs">Burgur</span>

            <span className="text-green-500 text-xs">Veg</span>
            <button className="font-semibold hover:text-red-600 text-red-500 text-xs">Remove</button>
          </div>
        </div>
        <div className="flex justify-center w-1/5">
          <svg className="fill-current cursor-pointer text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
          <input className="mx-2 border dark:bg-gray-700 text-center w-8" type="text" value="1" />
          <svg className="fill-current cursor-pointer text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </div>
        <span className="text-center w-1/5 md:block hidden font-semibold text-sm">₹30.00</span>
        <span className="text-center w-1/5 font-semibold text-sm">₹30.00</span>
      </div>
      <Link to='#' className="flex font-semibold text-indigo-600 text-sm  my-10 absolute bottom-0">
        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
        Add more Items
      </Link>
    </div>
    <div className="lg:w-1/4 px-8 lg:py-10 py-14">
      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">Items</span>
        <span className="font-semibold text-sm">₹30.00</span>
      </div>
      <div>
        <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
        <select className="block p-2 text-gray-600 dark:bg-gray-800 dark:text-gray-400 w-full text-sm outline-none">
          <option className='p-3'>Standard shipping - ₹20.00</option>
        </select>
      </div>
      <div className="py-10">
        <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
        <input type="text" id="promo" placeholder="Enter your code" className="p-2 dark:bg-gray-800 text-sm w-full outline-none" />
      </div>
      <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>₹50</span>
        </div>
        <button className="bg-green-500 font-semibold hover:bg-green-600 py-3 text-sm text-white uppercase w-full">Buy Now</button>
      </div>
    </div>
  </div>
 </div>
</body>` : dark === true && globalVariable === 'HTML' ?
              `<body class="bg-gray-900 text-gray-50">
 <div class="mx-auto">
  <div class="lg:flex shadow-md">
    <div class="lg:w-3/4 bg-gray-800 p-4 relative">
      <div class="flex justify-between border-b pb-8">
        <h1 class="font-semibold text-2xl">Shopping Cart</h1>
      </div>
      <div class="flex mt-10 mb-3">
        <h3 class="font-semibold text-gray-100 text-xs uppercase md:w-2/5 w-3/5">Product Details</h3>
        <h3 class="font-semibold text-gray-100 text-xs uppercase w-1/5 text-center">Quantity</h3>
        <h3 class="font-semibold text-gray-100 text-xs uppercase md:w-1/5 text-center md:block hidden">Price</h3>
        <h3 class="font-semibold text-gray-100 text-xs uppercase w-1/5 text-center">Total</h3>
      </div>
      <div class="flex items-center hover:bg-gray-600 px-6 py-3">
        <div class="flex md:w-2/5 w-3/5">
          <div class="w-20">
            <img class="h-24" src="#" alt="burgur"></img>
          </div>
          <div class="flex flex-col justify-between ml-4 flex-grow">
            <span class="font-bold md:text-sm text-xs">Burgur</span>
            <span class="text-green-500 text-xs">Veg</span>
            <button class="font-semibold hover:text-red-600 text-red-500 text-xs">Remove</button>
          </div>
        </div>
        <div class="flex justify-center w-1/5">
          <svg class="fill-current cursor-pointer text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
          <input class="mx-2 border bg-gray-700 text-center w-8" type="text" value="1"></input>
          <svg class="fill-current cursor-pointer text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
        </div>
        <span class="text-center w-1/5 md:block hidden font-semibold text-sm">₹30.00</span>
        <span class="text-center w-1/5 font-semibold text-sm">₹30.00</span>
      </div>
      <a href="#" class="flex font-semibold text-indigo-600 text-sm my-10 absolute bottom-0">
        <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"></path></svg>
        Add more Items
      </a>
    </div>
    <div class="lg:w-1/4 px-8 lg:py-10 py-14">
      <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div class="flex justify-between mt-10 mb-5">
        <span class="font-semibold text-sm uppercase">Items</span>
        <span class="font-semibold text-sm">₹30.00</span>
      </div>
      <div>
        <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
        <select class="block p-2 bg-gray-800 text-gray-400 w-full text-sm outline-none">
          <option class="p-3">Standard shipping - ₹20.00</option>
        </select>
      </div>
      <div class="py-10">
        <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
        <input type="text" id="promo" placeholder="Enter your code" class="p-2 bg-gray-800 text-sm w-full outline-none"></input>
      </div>
      <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
      <div class="border-t mt-8">
        <div class="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>₹50</span>
        </div>
        <button class="bg-green-500 font-semibold hover:bg-green-600 py-3 text-sm text-white uppercase w-full">Buy Now</button>
      </div>
    </div>
  </div>
 </div>
</body>` :
              `<body className="bg-gray-900 text-gray-50">
 <div className="mx-auto">
  <div className="lg:flex shadow-md ">
    <div className="lg:w-3/4 bg-gray-800 p-4 relative">
      <div className="flex justify-between border-b pb-8">
        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
      </div>
      <div className="flex mt-10 mb-3">
        <h3 className="font-semibold text-gray-100 text-xs uppercase md:w-2/5 w-3/5">Product Details</h3>
        <h3 className="font-semibold text-gray-100 text-xs uppercase w-1/5 text-center">Quantity</h3>
        <h3 className="font-semibold text-gray-100 text-xs uppercase md:w-1/5 text-center md:block hidden">Price</h3>
        <h3 className="font-semibold text-gray-100 text-xs uppercase w-1/5 text-center">Total</h3>
      </div>
      <div className="flex items-center hover:bg-gray-600 px-6 py-3" >
        <div className="flex md:w-2/5 w-3/5">
          <div className="w-20">
            <img className="h-24" alt="burgur" />
          </div>
          <div className="flex flex-col justify-between ml-4 flex-grow">
            <span className="font-bold md:text-sm text-xs">Burgur</span>

            <span className="text-green-500 text-xs">Veg</span>
            <button className="font-semibold hover:text-red-600 text-red-500 text-xs">Remove</button>
          </div>
        </div>
        <div className="flex justify-center w-1/5">
          <svg className="fill-current cursor-pointer text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
          <input className="mx-2 border bg-gray-700 text-center w-8" type="text" value="1" />
          <svg className="fill-current cursor-pointer text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </div>
        <span className="text-center w-1/5 md:block hidden font-semibold text-sm">₹30.00</span>
        <span className="text-center w-1/5 font-semibold text-sm">₹30.00</span>
      </div>
      <Link to='#' className="flex font-semibold text-indigo-600 text-sm  my-10 absolute bottom-0">
        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
        Add more Items
      </Link>
    </div>
    <div className="lg:w-1/4 px-8 lg:py-10 py-14">
      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">Items</span>
        <span className="font-semibold text-sm">₹30.00</span>
      </div>
      <div>
        <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
        <select className="block p-2 bg-gray-800 text-gray-400 w-full text-sm outline-none">
          <option className='p-3'>Standard shipping - ₹20.00</option>
        </select>
      </div>
      <div className="py-10">
        <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
        <input type="text" id="promo" placeholder="Enter your code" className="p-2 bg-gray-800 text-sm w-full outline-none" />
      </div>
      <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>₹50</span>
        </div>
        <button className="bg-green-500 font-semibold hover:bg-green-600 py-3 text-sm text-white uppercase w-full">Buy Now</button>
      </div>
    </div>
  </div>
 </div>
</body>`}
        </code>
      </pre>
    </div>
  )
}


