import React, { useEffect, useRef } from 'react'
import ClipBoard from '../../Components/ClipBoard';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-okaidia.css';
import '../prism-custom-theme.css';
import ClipboardJS from 'clipboard';
import { useAppContext } from '../../AppContext';
import card4 from '../../Components/cards/Card4';

export default function CodeCard4() {
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

    const Card4 = ClipBoard(card4);
    return (
        <div className='w-11/12 m-auto'>
            <Card4 />
            <pre className='mt-0'>
                <code ref={codeRef} className="language-html">{dark === false && globalVariable === 'HTML' ?
                    `<div>
    <div class="relative flex md:w-96  flex-col rounded-xl bg-gray-50 dark:text-gray-100 dark:bg-gray-800 bg-clip-border text-gray-700 shadow-md mx-auto">
        <div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img src={airpod} class="h-full w-full object-cover"></img>
        </div>
        <div class="p-6">
            <div class="mb-2 flex items-center justify-between">
                <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                    Apple AirPods
                </p>
                <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                    $95.00
                </p>
            </div>
            <p class="block font-sans text-sm font-normal leading-normal text-gray-700 dark:text-gray-500 antialiased opacity-75">
                With plenty of talk and listen time, voice-activated Siri access, and an
                available wireless charging case.
            </p>
        </div>
        <div class="p-6 pt-0">
            <button class="block w-full bg-gray-200 dark:bg-gray-700 select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button">
                Add to Cart
            </button>
        </div>
    </div>
    <div class="w-full pt-5 px-4 mb-8 mx-auto ">
        <div class="text-sm text-gray-700 py-1">
            Made by <a href="https://codesnippet.freewebhostmost.com/" class="text-gray-700 font-semibold" target="_blank">Code Snippet</a>.
        </div>
    </div>
</div>` : dark === false && globalVariable === 'React' ?
                        `<div>
    <div className="relative flex md:w-96  flex-col rounded-xl bg-gray-50 dark:text-gray-100 dark:bg-gray-800 bg-clip-border text-gray-700 shadow-md mx-auto">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img src={airpod} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
            <div className="mb-2 flex items-center justify-between">
                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                    Apple AirPods
                </p>
                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                    $95.00
                </p>
            </div>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 dark:text-gray-500 antialiased opacity-75">
                With plenty of talk and listen time, voice-activated Siri access, and an
                available wireless charging case.
            </p>
        </div>
        <div className="p-6 pt-0">
            <button className="block w-full bg-gray-200 dark:bg-gray-700 select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                Add to Cart
            </button>
        </div>
    </div>
    <div className="w-full pt-5 px-4 mb-8 mx-auto ">
        <div className="text-sm text-gray-700 py-1">
            Made by <Link to="https://codesnippet.freewebhostmost.com/" className="text-gray-700 font-semibold" target="_blank">Code Snippet</Link>.
        </div>
    </div>
</div>` : dark === true && globalVariable === 'HTML' ?
                            `<div>
    <div class="relative flex md:w-96  flex-col rounded-xl text-gray-100 bg-gray-800 bg-clip-border shadow-md mx-auto">
        <div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img src={airpod} class="h-full w-full object-cover"></img>
        </div>
        <div class="p-6">
            <div class="mb-2 flex items-center justify-between">
                <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                    Apple AirPods
                </p>
                <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                    $95.00
                </p>
            </div>
            <p class="block font-sans text-sm font-normal leading-normal text-gray-500 antialiased opacity-75">
                With plenty of talk and listen time, voice-activated Siri access, and an
                available wireless charging case.
            </p>
        </div>
        <div class="p-6 pt-0">
            <button class="block w-full bg-gray-700 select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button">
                Add to Cart
            </button>
        </div>
    </div>
    <div class="w-full pt-5 px-4 mb-8 mx-auto ">
        <div class="text-sm text-gray-700 py-1">
            Made by <a href="https://codesnippet.freewebhostmost.com/" class="text-gray-700 font-semibold" target="_blank">Code Snippet</a>.
        </div>
    </div>
</div>` :
                            ` <div>
    <div className="relative flex md:w-96  flex-col rounded-xl text-gray-100 bg-gray-800 bg-clip shadow-md mx-auto">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img src={airpod} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
            <div className="mb-2 flex items-center justify-between">
                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                    Apple AirPods
                </p>
                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                    $95.00
                </p>
            </div>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-500 antialiased opacity-75">
                With plenty of talk and listen time, voice-activated Siri access, and an
                available wireless charging case.
            </p>
        </div>
        <div className="p-6 pt-0">
            <button className="block w-full bg-gray-700 select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                Add to Cart
            </button>
        </div>
    </div>
    <div className="w-full pt-5 px-4 mb-8 mx-auto ">
        <div className="text-sm text-gray-700 py-1">
            Made by <Link to="https://codesnippet.freewebhostmost.com/" className="text-gray-700 font-semibold" target="_blank">Code Snippet</Link>.
        </div>
    </div>
</div>`}
                </code>
            </pre>
        </div>
    )
}


