import React, { useEffect, useRef } from 'react'
import ClipBoard from '../../Components/ClipBoard';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-okaidia.css';
import '../prism-custom-theme.css';
import ClipboardJS from 'clipboard';
import { useAppContext } from '../../AppContext';
import ecommerce2 from '../../Components/ecommerce/Ecommerce2';

export default function CodeEcommerce2() {
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

    const Ecommerce2 = ClipBoard(ecommerce2);
    return (
        <div className='w-11/12 m-auto'>
            <Ecommerce2 />
            <pre className='mt-0'>
                <code ref={codeRef} className="language-html">{dark === false && globalVariable === 'HTML' ?
                    `<section class="text-gray-600 dark:bg-gray-900 dark:text-gray-50 body-font overflow-hidden" >
 <div class="container px-5 py-16 mx-auto">
  <div class="mx-auto flex flex-wrap">
    <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
      <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
      <h1 class="text-gray-900 text-3xl title-font font-medium mb-4 dark:text-gray-50">Animated Night Hill Illustrations</h1>
      <div class="flex mb-4">
        <a class="flex-grow text-red-500 border-b-2 border-red-500 py-2 text-lg px-1">Description</a>
        <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
        <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
      </div>
      <p class="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
      <div class="flex border-t border-gray-200 py-2">
        <span class="text-gray-500">Color</span>
        <span class="ml-auto text-gray-900 dark:text-gray-100">Red</span>
      </div>
      <div class="flex border-t border-gray-200 py-2">
        <span class="text-gray-500">Size</span>
        <span class="ml-auto text-gray-900 dark:text-gray-100">Medium</span>
      </div>
      <div class="flex border-t border-b mb-6 border-gray-200 py-2">
        <span class="text-gray-500">Quantity</span>
        <span class="ml-auto text-gray-900 dark:text-gray-100">4</span>
      </div>
      <div class="flex">
        <span class="title-font font-medium text-2xl text-gray-900 dark:text-gray-100">$58.00</span>
        <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Button</button>
        <button class="rounded-full w-10 h-10 bg-gray-200 dark:bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
          </svg>
        </button>
      </div>
    </div>
    <img src="#" alt="shoes" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover p-5 object-center rounded"></img>
  </div>
 </div>
</section>` : dark === false && globalVariable === 'React' ?
                        `<section className="text-gray-600 dark:bg-gray-900 dark:text-gray-50 body-font overflow-hidden" >
 <div className="container px-5 py-16 mx-auto">
  <div className="mx-auto flex flex-wrap">
    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
      <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
      <h1 className="text-gray-900 text-3xl title-font font-medium mb-4 dark:text-gray-50">Animated Night Hill Illustrations</h1>
      <div className="flex mb-4">
        <Link className="flex-grow text-red-500 border-b-2 border-red-500 py-2 text-lg px-1">Description</Link>
        <Link className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</Link>
        <Link className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</Link>
      </div>
      <p className="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
      <div className="flex border-t border-gray-200 py-2">
        <span className="text-gray-500">Color</span>
        <span className="ml-auto text-gray-900 dark:text-gray-100">Red</span>
      </div>
      <div className="flex border-t border-gray-200 py-2">
        <span className="text-gray-500">Size</span>
        <span className="ml-auto text-gray-900 dark:text-gray-100">Medium</span>
      </div>
      <div className="flex border-t border-b mb-6 border-gray-200 py-2">
        <span className="text-gray-500">Quantity</span>
        <span className="ml-auto text-gray-900 dark:text-gray-100">4</span>
      </div>
      <div className="flex">
        <span className="title-font font-medium text-2xl text-gray-900 dark:text-gray-100">$58.00</span>
        <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Button</button>
        <button className="rounded-full w-10 h-10 bg-gray-200 dark:bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
          </svg>
        </button>
      </div>
    </div>
    <img src={shoes} alt="shoes" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover p-5 object-center rounded" />
  </div>
 </div>
</section>` : dark === true && globalVariable === 'HTML' ?
                            `<section class="bg-gray-900 text-gray-50 body-font overflow-hidden" >
 <div class="container px-5 py-16 mx-auto">
  <div class="mx-auto flex flex-wrap">
    <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
      <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
      <h1 class="text-3xl title-font font-medium mb-4 text-gray-50">Animated Night Hill Illustrations</h1>
      <div class="flex mb-4">
        <a class="flex-grow text-red-500 border-b-2 border-red-500 py-2 text-lg px-1">Description</a>
        <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
        <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
      </div>
      <p class="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
      <div class="flex border-t border-gray-200 py-2">
        <span class="text-gray-500">Color</span>
        <span class="ml-auto text-gray-100">Red</span>
      </div>
      <div class="flex border-t border-gray-200 py-2">
        <span class="text-gray-500">Size</span>
        <span class="ml-auto text-gray-100">Medium</span>
      </div>
      <div class="flex border-t border-b mb-6 border-gray-200 py-2">
        <span class="text-gray-500">Quantity</span>
        <span class="ml-auto text-gray-100">4</span>
      </div>
      <div class="flex">
        <span class="title-font font-medium text-2xl text-gray-100">$58.00</span>
        <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Button</button>
        <button class="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
          </svg>
        </button>
      </div>
    </div>
    <img src="#" alt="shoes" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover p-5 object-center rounded"></img>
  </div>
 </div>
</section>` :
                            `<section className="bg-gray-900 text-gray-50 body-font overflow-hidden" >
 <div className="container px-5 py-16 mx-auto">
  <div className="mx-auto flex flex-wrap">
    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
      <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
      <h1 className="text-3xl title-font font-medium mb-4 text-gray-50">Animated Night Hill Illustrations</h1>
      <div className="flex mb-4">
        <Link className="flex-grow text-red-500 border-b-2 border-red-500 py-2 text-lg px-1">Description</Link>
        <Link className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</Link>
        <Link className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</Link>
      </div>
      <p className="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
      <div className="flex border-t border-gray-200 py-2">
        <span className="text-gray-500">Color</span>
        <span className="ml-auto text-gray-100">Red</span>
      </div>
      <div className="flex border-t border-gray-200 py-2">
        <span className="text-gray-500">Size</span>
        <span className="ml-auto text-gray-100">Medium</span>
      </div>
      <div className="flex border-t border-b mb-6 border-gray-200 py-2">
        <span className="text-gray-500">Quantity</span>
        <span className="ml-auto text-gray-100">4</span>
      </div>
      <div className="flex">
        <span className="title-font font-medium text-2xl text-gray-100">$58.00</span>
        <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Button</button>
        <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
          </svg>
        </button>
      </div>
    </div>
    <img src={shoes} alt="shoes" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover p-5 object-center rounded" />
  </div>
 </div>
</section>`}
                </code>
            </pre>

        </div>
    )
}


