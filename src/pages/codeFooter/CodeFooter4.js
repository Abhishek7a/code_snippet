import React, { useEffect, useRef } from 'react'
import ClipBoard from '../../Components/ClipBoard';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-okaidia.css';
import '../prism-custom-theme.css';
import ClipboardJS from 'clipboard';
import { useAppContext } from '../../AppContext';
import footer4 from '../../Components/footer/Footer4';

export default function CodeFooter4() {
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

    const Footer4 = ClipBoard(footer4);
    return (
        <div className='w-11/12 m-auto'>
            <Footer4 />
            <pre className='mt-0'>
                <code ref={codeRef} className="language-html">{dark === false && globalVariable === 'HTML' ?
                    `<div class='dark:bg-gray-900 dark:text-gray-50 text-gray-800 bg-gray-100'>
 <div class="md:w-2/3 w-full m-auto py-7 px-4 flex flex-col">
  <div class="w-full lg:text-6xl sm:text-4xl text-2xl font-bold">
    <h1 class="w-full md:w-2/3">How can we help you. get in touch</h1>
  </div>
  <div class="flex mt-8 flex-col md:flex-row md:justify-between">
    <p class="w-full md:w-2/3 text-gray-400">To ensure that all Wikipedia content is verifiable, anyone may question an uncited claim. If your work has been tagged</p>
    <div class="w-44 pt-6 md:pt-0">
      <a class="bg-red-600 text-gray-50 justify-center text-center cursor-pointer hover:bg-red-700 rounded-lg shadow px-10 py-3 flex items-center">Contact US</a>
    </div>
  </div>
 </div>
 <div class="md:p-10">
  <div class="max-w-screen-lg px-4 sm:px-4 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
    <div class="lg:p-5 px-5 pr-10 text-center">
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" class='w-10 h-10 text-gray-800 dark:text-gray-50 mx-auto' viewBox="0 0 512 512">
        <path style="fill: #E41F11;" d="M0,260.908l174.648-81.136v38.568l-132.08,57.848v0.728l132.08,57.848v38.568L0,292.212V260.908z" />
        <path style="fill: currentcolor;" d="M201.6,387.9l77.864-263.8h36.752L238.4,387.9H201.6z" />
        <path style="fill: #00008B;" d="M512,293.284L337.352,373.34v-38.568l134.992-57.848v-0.728L337.352,218.34v-38.568L512,259.828 V293.284z" />
      </svg>
      <h3 class="font-bold text-xl">Code <span class='text-red-600'>Snippet</span> </h3>
    </div>
    <div class="md:p-5 p-3">
      <div class="text-sm uppercase text-red-600 font-bold">Resources</div>
      <a class="my-3 block" href="/#">Documentation <span class="text-red-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Tutorials <span class="text-red-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Support <span class="text-red-600 text-xs p-1">New</span></a>
    </div>
    <div class="md:p-5 p-3">
      <div class="text-sm uppercase text-red-600 font-bold">Support</div>
      <a class="my-3 block" href="/#">Help Center <span class="text-red-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Privacy Policy <span class="text-red-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Conditions <span class="text-red-600 text-xs p-1"></span></a>
    </div>
    <div class="md:p-5 p-3">
      <div class="text-sm uppercase text-red-600 font-bold">Contact us</div>
      <a class="my-3 block" href="/#">XXX XXXX, Floor 4 San Francisco, CA <span class=" text-red-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">codesnippett@gmail.com <span class=" text-red-600 text-xs p-1"></span></a>
    </div>
  </div>
 </div>
 <div class="max-w-2xl mx-auto border-t border-b border-gray-700 dark:border-gray-50 p-4 mt-10 py-10">
  <div class="text-center">
    <h3 class="text-3xl mb-3">Download our fitness app</h3>
    <p>Stay fit. All day, every day.</p>
    <div class="my-5 sm:flex-row sm:flex hover:cursor-pointer md:gap-3">
      <div class="bg-gray-900 text-gray-200 flex items-center border rounded-lg p-3 w-52 md:mx-2 mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 md:w-8" viewBox="0 0 511.999 511.999">
          <g>
            <path style="fill: #32BBFF;" d="M382.369,175.623C322.891,142.356,227.427,88.937,79.355,6.028C69.372-0.565,57.886-1.429,47.962,1.93l254.05,254.05L382.369,175.623z" />
            <path style="fill: #32BBFF;" d="M47.962,1.93c-1.86,0.63-3.67,1.39-5.401,2.308C31.602,10.166,23.549,21.573,23.549,36v439.96c0,14.427,8.052,25.834,19.012,31.761c1.728,0.917,3.537,1.68,5.395,2.314L302.012,255.98L47.962,1.93z" />
            <path style="fill: #32BBFF;" d="M302.012,255.98L47.956,510.035c9.927,3.384,21.413,2.586,31.399-4.103c143.598-80.41,237.986-133.196,298.152-166.746c1.675-0.941,3.316-1.861,4.938-2.772L302.012,255.98z" />
          </g>
          <path style="fill: #2C9FD9;" d="M23.549,255.98v219.98c0,14.427,8.052,25.834,19.012,31.761c1.728,0.917,3.537,1.68,5.395,2.314L302.012,255.98H23.549z" />
          <path style="fill: #29CC5E;" d="M79.355,6.028C67.5-1.8,53.52-1.577,42.561,4.239l255.595,255.596l84.212-84.212C322.891,142.356,227.427,88.937,79.355,6.028z" />
          <path style="fill: #D93F21;" d="M298.158,252.126L42.561,507.721c10.96,5.815,24.939,6.151,36.794-1.789c143.598-80.41,237.986-133.196,298.152-166.746c1.675-0.941,3.316-1.861,4.938-2.772L298.158,252.126z" />
          <path style="fill: #FFD500;" d="M488.45,255.98c0-12.19-6.151-24.492-18.342-31.314c0,0-22.799-12.721-92.682-51.809l-83.123,83.123l83.204,83.205c69.116-38.807,92.6-51.892,92.6-51.892C482.299,280.472,488.45,268.17,488.45,255.98z" />
          <path style="fill: #FFAA00;" d="M470.108,287.294c12.191-6.822,18.342-19.124,18.342-31.314H294.303l83.204,83.205C446.624,300.379,470.108,287.294,470.108,287.294z" />
        </svg>
        <div class="text-left ml-3">
          <p class='text-xs'>Download on</p>
          <p class="text-sm md:text-base">Google Play Store</p>
        </div>
      </div>
      <div class="bg-gray-900 text-gray-200 flex items-center border md:mt-0 mt-1 rounded-lg p-3 w-52 md:mx-2 mx-auto">
        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-7 md:w-8">
          <path d="M7.87456 2.93707C7.66756 2.93707 7.49956 2.77259 7.49956 2.56993C7.49956 1.1506 8.67554 0 10.1245 0C10.3323 0 10.4995 0.164476 10.4995 0.367133C10.4995 1.78647 9.32429 2.93707 7.87456 2.93707Z" fill="#fff" />
          <path d="M7.87456 2.93707C7.66756 2.93707 7.49956 2.77259 7.49956 2.56993C7.49956 1.1506 8.67554 0 10.1245 0C10.3323 0 10.4995 0.164476 10.4995 0.367133C10.4995 1.78647 9.32429 2.93707 7.87456 2.93707Z" fill="#fff" />
          <path d="M13.3498 10.6678C13.4946 10.7743 13.5418 10.9674 13.4601 11.126C12.1401 13.7121 11.0871 15 10.1249 15C9.67713 15 9.23689 14.8583 8.8079 14.5822C8.18316 14.1791 7.37692 14.1622 6.73493 14.5381C6.21518 14.8429 5.72019 15 5.24995 15C3.83472 15 1.5 10.7332 1.5 8.3916C1.5 5.89216 2.83873 3.986 4.87495 3.986C5.83269 3.986 6.65993 4.12405 7.35442 4.40454C7.64916 4.52349 7.98216 4.51468 8.2694 4.37957C8.8334 4.1145 9.57664 3.986 10.4999 3.986C11.6264 3.986 12.6081 4.53524 13.4248 5.60139C13.5486 5.76366 13.5156 5.99349 13.3498 6.11538C12.4386 6.78429 11.9999 7.53618 11.9999 8.3916C11.9999 9.24702 12.4386 9.99891 13.3498 10.6678Z" fill="#fff" />
          <path d="M13.3498 10.6678C13.4946 10.7743 13.5418 10.9674 13.4601 11.126C12.1401 13.7121 11.0871 15 10.1249 15C9.67713 15 9.23689 14.8583 8.8079 14.5822C8.18316 14.1791 7.37692 14.1622 6.73493 14.5381C6.21518 14.8429 5.72019 15 5.24995 15C3.83472 15 1.5 10.7332 1.5 8.3916C1.5 5.89216 2.83873 3.986 4.87495 3.986C5.83269 3.986 6.65993 4.12405 7.35442 4.40454C7.64916 4.52349 7.98216 4.51468 8.2694 4.37957C8.8334 4.1145 9.57664 3.986 10.4999 3.986C11.6264 3.986 12.6081 4.53524 13.4248 5.60139C13.5486 5.76366 13.5156 5.99349 13.3498 6.11538C12.4386 6.78429 11.9999 7.53618 11.9999 8.3916C11.9999 9.24702 12.4386 9.99891 13.3498 10.6678Z" fill="#fff" />
        </svg>
        <div class="text-left ml-3">
          <p class='text-xs'>Download on</p>
          <p class="text-sm md:text-base">Apple Store</p>
        </div>
      </div>
    </div>
  </div>
 </div>
 <div class="dark:bg-grey-900 pt-2">
  <div class="flex pb-5 md:px-3 m-auto pt-5 w-5/6 text-sm flex-col max-w-screen-lg items-center">
    <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
      <a href="#" class="w-6 mx-1">
        <svg class="fill-current cursor-pointer text-gray-500 hover:text-red-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" space="preserve" serif="http://www.serif.com/">
          <path id="Twitter" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168 -0.786,0.281 -1.213,0.333c0.436,-0.262 0.771,-0.676 0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411 -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166 0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929 -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379 0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009 -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049 -0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838 1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0 -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0 6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298 0.771,-0.67 1.054,-1.093Z"></path>
        </svg>
      </a>
      <a href="#" class="w-6 mx-1">
        <svg class="fill-current cursor-pointer text-gray-500 hover:text-red-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" space="preserve" serif="http://www.serif.com/" >
          <path id="Facebook" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422 0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784 -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"></path>
        </svg>
      </a>
      <a href="#" class="w-6 mx-1">
        <svg class="fill-current cursor-pointer text-gray-500 hover:text-red-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" space="preserve" serif="http://www.serif.com/">
          <path id="Shape" d="M7.3,0.9c1.5,-0.6 3.1,-0.9 4.7,-0.9c1.6,0 3.2,0.3 4.7,0.9c1.5,0.6 2.8,1.5 3.8,2.6c1,1.1 1.9,2.3 2.6,3.8c0.7,1.5 0.9,3 0.9,4.7c0,1.7 -0.3,3.2 -0.9,4.7c-0.6,1.5 -1.5,2.8 -2.6,3.8c-1.1,1 -2.3,1.9 -3.8,2.6c-1.5,0.7 -3.1,0.9 -4.7,0.9c-1.6,0 -3.2,-0.3 -4.7,-0.9c-1.5,-0.6 -2.8,-1.5 -3.8,-2.6c-1,-1.1 -1.9,-2.3 -2.6,-3.8c-0.7,-1.5 -0.9,-3.1 -0.9,-4.7c0,-1.6 0.3,-3.2 0.9,-4.7c0.6,-1.5 1.5,-2.8 2.6,-3.8c1.1,-1 2.3,-1.9 3.8,-2.6Zm-0.3,7.1c0.6,0 1.1,-0.2 1.5,-0.5c0.4,-0.3 0.5,-0.8 0.5,-1.3c0,-0.5 -0.2,-0.9 -0.6,-1.2c-0.4,-0.3 -0.8,-0.5 -1.4,-0.5c-0.6,0 -1.1,0.2 -1.4,0.5c-0.3,0.3 -0.6,0.7 -0.6,1.2c0,0.5 0.2,0.9 0.5,1.3c0.3,0.4 0.9,0.5 1.5,0.5Zm1.5,10l0,-8.5l-3,0l0,8.5l3,0Zm11,0l0,-4.5c0,-1.4 -0.3,-2.5 -0.9,-3.3c-0.6,-0.8 -1.5,-1.2 -2.6,-1.2c-0.6,0 -1.1,0.2 -1.5,0.5c-0.4,0.3 -0.8,0.8 -0.9,1.3l-0.1,-1.3l-3,0l0.1,2l0,6.5l3,0l0,-4.5c0,-0.6 0.1,-1.1 0.4,-1.5c0.3,-0.4 0.6,-0.5 1.1,-0.5c0.5,0 0.9,0.2 1.1,0.5c0.2,0.3 0.4,0.8 0.4,1.5l0,4.5l2.9,0Z"></path>
        </svg>
      </a>
      <a href="#" class="w-6 mx-1">
        <svg class="fill-current cursor-pointer text-gray-500 hover:text-red-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" space="preserve" serif="http://www.serif.com/" >
          <path id="Combined-Shape" d="M12,24c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12c-6.627,0
      -12,5.373 -12,12c0,6.627 5.373,12 12,12Zm6.591,-15.556l-0.722,0c-0.189,0
      -0.681,0.208 -0.681,0.385l0,6.422c0,0.178 0.492,0.323
      0.681,0.323l0.722,0l0,1.426l-4.675,0l0,-1.426l0.935,0l0,-6.655l-0.163,0l-2.251,8.081l-1.742,0l-2.222,-8.081l-0.168,0l0,6.655l0.935,0l0,1.426l-3.74,0l0,-1.426l0.519,0c0.203,0
      0.416,-0.145 0.416,-0.323l0,-6.422c0,-0.177 -0.213,-0.385
      -0.416,-0.385l-0.519,0l0,-1.426l4.847,0l1.583,5.704l0.042,0l1.598,-5.704l5.021,0l0,1.426Z"></path>
        </svg>
      </a>
    </div>
    <div className="my-4 md:pb-0 pb-10">© Copyright 2024. All Rights Reserved.</div>
  </div>
 </div>
</div>` : dark === false && globalVariable === 'React' ?
                        `<div className='dark:bg-gray-900 dark:text-gray-50 text-gray-800 bg-gray-100'>
 <div className="md:w-2/3 w-full m-auto py-7 px-4 flex flex-col">
    <div className="w-full lg:text-6xl sm:text-4xl text-2xl font-bold">
        <h1 className="w-full md:w-2/3">How can we help you. get
            in touch</h1>
    </div>
    <div className="flex mt-8 flex-col md:flex-row md:justify-between">
        <p className="w-full md:w-2/3 text-gray-400">To ensure that all Wikipedia content is verifiable, anyone may question an uncited claim. If your work has been tagged</p>
        <div className="w-44 pt-6 md:pt-0">
            <a className="bg-red-600 text-gray-50 justify-center text-center cursor-pointer hover:bg-red-700 rounded-lg shadow px-10 py-3 flex items-center">Contact US</a>
        </div>
    </div>
 </div>
 <div className="md:p-10">
    <div className="max-w-screen-lg px-4 sm:px-4 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
        <div className="lg:p-5 px-5 pr-10 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className='w-10 h-10 text-gray-800 dark:text-gray-50 mx-auto' viewBox="0 0 512 512">
                <path style={{ fill: "#E41F11" }} d="M0,260.908l174.648-81.136v38.568l-132.08,57.848v0.728l132.08,57.848v38.568L0,292.212V260.908z" />
                <path style={{ fill: "currentcolor" }} d="M201.6,387.9l77.864-263.8h36.752L238.4,387.9H201.6z" />
                <path style={{ fill: "#00008B" }} d="M512,293.284L337.352,373.34v-38.568l134.992-57.848v-0.728L337.352,218.34v-38.568L512,259.828 V293.284z" />
            </svg>
            <h3 className="font-bold text-xl">Code <span className='text-red-600'>Snippet</span> </h3>
        </div>
        <div className="md:p-5 p-3">
            <div className="text-sm uppercase text-red-600 font-bold">Resources</div>
            <a className="my-3 block" href="/#">Documentation <span className="text-red-600  text-xs p-1"></span></a><a className="my-3 block" href="/#">Tutorials <span className="text-red-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Support <span className="text-red-600  text-xs p-1">New</span></a>
        </div>
        <div className="md:p-5 p-3">
            <div className="text-sm uppercase text-red-600 font-bold">Support</div>
            <a className="my-3 block" href="/#">Help Center <span className="text-red-600  text-xs p-1"></span></a><a className="my-3 block" href="/#">Privacy Policy <span className="text-red-600  text-xs p-1"></span></a><a className="my-3 block" href="/#">Conditions <span className="text-red-600 text-xs p-1"></span></a>
        </div>
        <div className="md:p-5 p-3">
            <div className="text-sm uppercase text-red-600 font-bold">Contact us</div>
            <a className="my-3 block" href="/#">XXX XXXX, Floor 4 San Francisco, CA <span className=" text-red-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">codesnippett@gmail.com <span className=" text-red-600 text-xs p-1"></span></a>
        </div>
    </div>
 </div>
 <div className="max-w-2xl mx-auto  border-t border-b border-gray-700 dark:border-gray-50 p-4 mt-10 py-10 ">
    <div className="text-center">
        <h3 className="text-3xl mb-3 ">Download our fitness app </h3>
        <p> Stay fit. All day, every day.</p>
        <div className="my-5 sm:flex-row sm:flex hover:cursor-pointer md:gap-3">
            <div className="bg-gray-900 text-gray-200 flex items-center border rounded-lg p-3 w-52 md:mx-2 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 md:w-8" viewBox="0 0 511.999 511.999" xmlSpace="preserve">  <g>
                    <path style={{ fill: "#32BBFF", }} d="M382.369,175.623C322.891,142.356,227.427,88.937,79.355,6.028 C69.372-0.565,57.886-1.429,47.962,1.93l254.05,254.05L382.369,175.623z" />
                    <path style={{ fill: "#32BBFF", }} d="M47.962,1.93c-1.86,0.63-3.67,1.39-5.401,2.308C31.602,10.166,23.549,21.573,23.549,36v439.96 c0,14.427,8.052,25.834,19.012,31.761c1.728,0.917,3.537,1.68,5.395,2.314L302.012,255.98L47.962,1.93z" />
                    <path style={{ fill: "#32BBFF", }} d="M302.012,255.98L47.956,510.035c9.927,3.384,21.413,2.586,31.399-4.103 c143.598-80.41,237.986-133.196,298.152-166.746c1.675-0.941,3.316-1.861,4.938-2.772L302.012,255.98z" />  </g>
                    <path style={{ fill: "#2C9FD9", }} d="M23.549,255.98v219.98c0,14.427,8.052,25.834,19.012,31.761c1.728,0.917,3.537,1.68,5.395,2.314 L302.012,255.98H23.549z" />
                    <path style={{ fill: "#29CC5E", }} d="M79.355,6.028C67.5-1.8,53.52-1.577,42.561,4.239l255.595,255.596l84.212-84.212 C322.891,142.356,227.427,88.937,79.355,6.028z" />
                    <path style={{ fill: "#D93F21", }} d="M298.158,252.126L42.561,507.721c10.96,5.815,24.939,6.151,36.794-1.789 c143.598-80.41,237.986-133.196,298.152-166.746c1.675-0.941,3.316-1.861,4.938-2.772L298.158,252.126z" />
                    <path style={{ fill: "#FFD500", }} d="M488.45,255.98c0-12.19-6.151-24.492-18.342-31.314c0,0-22.799-12.721-92.682-51.809l-83.123,83.123 l83.204,83.205c69.116-38.807,92.6-51.892,92.6-51.892C482.299,280.472,488.45,268.17,488.45,255.98z" />
                    <path style={{ fill: "#FFAA00", }} d="M470.108,287.294c12.191-6.822,18.342-19.124,18.342-31.314H294.303l83.204,83.205 C446.624,300.379,470.108,287.294,470.108,287.294z" />
                </svg>
                <div className="text-left ml-3">
                    <p className='text-xs'>Download on </p>
                    <p className="text-sm md:text-base"> Google Play Store </p>
                </div>
            </div>
            <div className="bg-gray-900 text-gray-200 flex items-center border md:mt-0 mt-1 rounded-lg p-3 w-52 md:mx-2 mx-auto">
                <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 md:w-8">
                    <path d="M7.87456 2.93707C7.66756 2.93707 7.49956 2.77259 7.49956 2.56993C7.49956 1.1506 8.67554 0 10.1245 0C10.3323 0 10.4995 0.164476 10.4995 0.367133C10.4995 1.78647 9.32429 2.93707 7.87456 2.93707Z" fill="#fff" />
                    <path d="M7.87456 2.93707C7.66756 2.93707 7.49956 2.77259 7.49956 2.56993C7.49956 1.1506 8.67554 0 10.1245 0C10.3323 0 10.4995 0.164476 10.4995 0.367133C10.4995 1.78647 9.32429 2.93707 7.87456 2.93707Z" fill="#fff" />
                    <path d="M13.3498 10.6678C13.4946 10.7743 13.5418 10.9674 13.4601 11.126C12.1401 13.7121 11.0871 15 10.1249 15C9.67713 15 9.23689 14.8583 8.8079 14.5822C8.18316 14.1791 7.37692 14.1622 6.73493 14.5381C6.21518 14.8429 5.72019 15 5.24995 15C3.83472 15 1.5 10.7332 1.5 8.3916C1.5 5.89216 2.83873 3.986 4.87495 3.986C5.83269 3.986 6.65993 4.12405 7.35442 4.40454C7.64916 4.52349 7.98216 4.51468 8.2694 4.37957C8.8334 4.1145 9.57664 3.986 10.4999 3.986C11.6264 3.986 12.6081 4.53524 13.4248 5.60139C13.5486 5.76366 13.5156 5.99349 13.3498 6.11538C12.4386 6.78429 11.9999 7.53618 11.9999 8.3916C11.9999 9.24702 12.4386 9.99891 13.3498 10.6678Z" fill="#fff" />
                    <path d="M13.3498 10.6678C13.4946 10.7743 13.5418 10.9674 13.4601 11.126C12.1401 13.7121 11.0871 15 10.1249 15C9.67713 15 9.23689 14.8583 8.8079 14.5822C8.18316 14.1791 7.37692 14.1622 6.73493 14.5381C6.21518 14.8429 5.72019 15 5.24995 15C3.83472 15 1.5 10.7332 1.5 8.3916C1.5 5.89216 2.83873 3.986 4.87495 3.986C5.83269 3.986 6.65993 4.12405 7.35442 4.40454C7.64916 4.52349 7.98216 4.51468 8.2694 4.37957C8.8334 4.1145 9.57664 3.986 10.4999 3.986C11.6264 3.986 12.6081 4.53524 13.4248 5.60139C13.5486 5.76366 13.5156 5.99349 13.3498 6.11538C12.4386 6.78429 11.9999 7.53618 11.9999 8.3916C11.9999 9.24702 12.4386 9.99891 13.3498 10.6678Z" fill="#fff" />
                </svg>
                <div className="text-left ml-3">
                    <p className='text-xs'>Download on </p>
                    <p className="text-sm md:text-base"> Apple Store </p>
                </div>
            </div>
        </div>
    </div>
 </div>
 <div className="dark:bg-grey-900 pt-2">
    <div className="flex pb-5 md:px-3 m-auto pt-5  w-5/6 text-sm flex-col max-w-screen-lg items-center">
        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <Link to="#" className="w-6 mx-1">
                <svg className="fill-current cursor-pointer text-gray-500 hover:text-red-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" space="preserve" serif="http://www.serif.com/">
                    <path id="Twitter" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168 -0.786,0.281 -1.213,0.333c0.436,-0.262 0.771,-0.676 0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411 -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166 0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929 -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379 0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009 -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049 -0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838 1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0 -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0 6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298 0.771,-0.67 1.054,-1.093Z"></path>
                </svg>
            </Link>
            <Link to="#" className="w-6 mx-1">
                <svg className="fill-current cursor-pointer text-gray-500 hover:text-red-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" space="preserve" serif="http://www.serif.com/" >
                    <path id="Facebook" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422 0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784 -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"></path>
                </svg>
            </Link>
            <Link to="#" className="w-6 mx-1">
                <svg className="fill-current cursor-pointer text-gray-500 hover:text-red-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" space="preserve" serif="http://www.serif.com/">
                    <path id="Shape" d="M7.3,0.9c1.5,-0.6 3.1,-0.9 4.7,-0.9c1.6,0 3.2,0.3 4.7,0.9c1.5,0.6 2.8,1.5 3.8,2.6c1,1.1 1.9,2.3 2.6,3.8c0.7,1.5 0.9,3 0.9,4.7c0,1.7 -0.3,3.2 -0.9,4.7c-0.6,1.5 -1.5,2.8 -2.6,3.8c-1.1,1 -2.3,1.9 -3.8,2.6c-1.5,0.7 -3.1,0.9 -4.7,0.9c-1.6,0 -3.2,-0.3 -4.7,-0.9c-1.5,-0.6 -2.8,-1.5 -3.8,-2.6c-1,-1.1 -1.9,-2.3 -2.6,-3.8c-0.7,-1.5 -0.9,-3.1 -0.9,-4.7c0,-1.6 0.3,-3.2 0.9,-4.7c0.6,-1.5 1.5,-2.8 2.6,-3.8c1.1,-1 2.3,-1.9 3.8,-2.6Zm-0.3,7.1c0.6,0 1.1,-0.2 1.5,-0.5c0.4,-0.3 0.5,-0.8 0.5,-1.3c0,-0.5 -0.2,-0.9 -0.6,-1.2c-0.4,-0.3 -0.8,-0.5 -1.4,-0.5c-0.6,0 -1.1,0.2 -1.4,0.5c-0.3,0.3 -0.6,0.7 -0.6,1.2c0,0.5 0.2,0.9 0.5,1.3c0.3,0.4 0.9,0.5 1.5,0.5Zm1.5,10l0,-8.5l-3,0l0,8.5l3,0Zm11,0l0,-4.5c0,-1.4 -0.3,-2.5 -0.9,-3.3c-0.6,-0.8 -1.5,-1.2 -2.6,-1.2c-0.6,0 -1.1,0.2 -1.5,0.5c-0.4,0.3 -0.8,0.8 -0.9,1.3l-0.1,-1.3l-3,0l0.1,2l0,6.5l3,0l0,-4.5c0,-0.6 0.1,-1.1 0.4,-1.5c0.3,-0.4 0.6,-0.5 1.1,-0.5c0.5,0 0.9,0.2 1.1,0.5c0.2,0.3 0.4,0.8 0.4,1.5l0,4.5l2.9,0Z"></path>
                </svg>
            </Link>
            <Link to="#" className="w-6 mx-1">
                <svg className="fill-current cursor-pointer text-gray-500 hover:text-red-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" space="preserve" serif="http://www.serif.com/" >
                    <path id="Combined-Shape" d="M12,24c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12c-6.627,0
                    -12,5.373 -12,12c0,6.627 5.373,12 12,12Zm6.591,-15.556l-0.722,0c-0.189,0
                    -0.681,0.208 -0.681,0.385l0,6.422c0,0.178 0.492,0.323
                    0.681,0.323l0.722,0l0,1.426l-4.675,0l0,-1.426l0.935,0l0,-6.655l-0.163,0l-2.251,8.081l-1.742,0l-2.222,-8.081l-0.168,0l0,6.655l0.935,0l0,1.426l-3.74,0l0,-1.426l0.519,0c0.203,0
                    0.416,-0.145 0.416,-0.323l0,-6.422c0,-0.177 -0.213,-0.385
                    -0.416,-0.385l-0.519,0l0,-1.426l4.847,0l1.583,5.704l0.042,0l1.598,-5.704l5.021,0l0,1.426Z"></path>
                </svg>
            </Link>
        </div>
        <div className="my-4 md:pb-0 pb-10">© Copyright 2024. All Rights Reserved.</div>
    </div>
 </div>
</div>`
                        : dark === true && globalVariable === 'HTML' ?
                            `<div class='bg-gray-900 text-gray-50'>
 <div class="md:w-2/3 w-full m-auto py-7 px-4 flex flex-col">
  <div class="w-full lg:text-6xl sm:text-4xl text-2xl font-bold">
    <h1 class="w-full md:w-2/3">How can we help you. get in touch</h1>
  </div>
  <div class="flex mt-8 flex-col md:flex-row md:justify-between">
    <p class="w-full md:w-2/3 text-gray-400">To ensure that all Wikipedia content is verifiable, anyone may question an uncited claim. If your work has been tagged</p>
    <div class="w-44 pt-6 md:pt-0">
      <a class="bg-red-600 text-gray-50 justify-center text-center cursor-pointer hover:bg-red-700 rounded-lg shadow px-10 py-3 flex items-center">Contact US</a>
    </div>
  </div>
 </div>
 <div class="md:p-10">
  <div class="max-w-screen-lg px-4 sm:px-4 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
    <div class="lg:p-5 px-5 pr-10 text-center">
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" class='w-10 h-10 text-gray-50 mx-auto' viewBox="0 0 512 512">
        <path style="fill: #E41F11;" d="M0,260.908l174.648-81.136v38.568l-132.08,57.848v0.728l132.08,57.848v38.568L0,292.212V260.908z" />
        <path style="fill: currentcolor;" d="M201.6,387.9l77.864-263.8h36.752L238.4,387.9H201.6z" />
        <path style="fill: #00008B;" d="M512,293.284L337.352,373.34v-38.568l134.992-57.848v-0.728L337.352,218.34v-38.568L512,259.828 V293.284z" />
      </svg>
      <h3 class="font-bold text-xl">Code <span class='text-red-600'>Snippet</span> </h3>
    </div>
    <div class="md:p-5 p-3">
      <div class="text-sm uppercase text-red-600 font-bold">Resources</div>
      <a class="my-3 block" href="/#">Documentation <span class="text-red-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Tutorials <span class="text-red-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Support <span class="text-red-600 text-xs p-1">New</span></a>
    </div>
    <div class="md:p-5 p-3">
      <div class="text-sm uppercase text-red-600 font-bold">Support</div>
      <a class="my-3 block" href="/#">Help Center <span class="text-red-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Privacy Policy <span class="text-red-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Conditions <span class="text-red-600 text-xs p-1"></span></a>
    </div>
    <div class="md:p-5 p-3">
      <div class="text-sm uppercase text-red-600 font-bold">Contact us</div>
      <a class="my-3 block" href="/#">XXX XXXX, Floor 4 San Francisco, CA <span class=" text-red-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">codesnippett@gmail.com <span class=" text-red-600 text-xs p-1"></span></a>
    </div>
  </div>
 </div>
 <div class="max-w-2xl mx-auto border-t border-b border-gray-50 p-4 mt-10 py-10">
  <div class="text-center">
    <h3 class="text-3xl mb-3">Download our fitness app</h3>
    <p>Stay fit. All day, every day.</p>
    <div class="my-5 sm:flex-row sm:flex hover:cursor-pointer md:gap-3">
      <div class="bg-gray-900 text-gray-200 flex items-center border rounded-lg p-3 w-52 md:mx-2 mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 md:w-8" viewBox="0 0 511.999 511.999">
          <g>
            <path style="fill: #32BBFF;" d="M382.369,175.623C322.891,142.356,227.427,88.937,79.355,6.028C69.372-0.565,57.886-1.429,47.962,1.93l254.05,254.05L382.369,175.623z" />
            <path style="fill: #32BBFF;" d="M47.962,1.93c-1.86,0.63-3.67,1.39-5.401,2.308C31.602,10.166,23.549,21.573,23.549,36v439.96c0,14.427,8.052,25.834,19.012,31.761c1.728,0.917,3.537,1.68,5.395,2.314L302.012,255.98L47.962,1.93z" />
            <path style="fill: #32BBFF;" d="M302.012,255.98L47.956,510.035c9.927,3.384,21.413,2.586,31.399-4.103c143.598-80.41,237.986-133.196,298.152-166.746c1.675-0.941,3.316-1.861,4.938-2.772L302.012,255.98z" />
          </g>
          <path style="fill: #2C9FD9;" d="M23.549,255.98v219.98c0,14.427,8.052,25.834,19.012,31.761c1.728,0.917,3.537,1.68,5.395,2.314L302.012,255.98H23.549z" />
          <path style="fill: #29CC5E;" d="M79.355,6.028C67.5-1.8,53.52-1.577,42.561,4.239l255.595,255.596l84.212-84.212C322.891,142.356,227.427,88.937,79.355,6.028z" />
          <path style="fill: #D93F21;" d="M298.158,252.126L42.561,507.721c10.96,5.815,24.939,6.151,36.794-1.789c143.598-80.41,237.986-133.196,298.152-166.746c1.675-0.941,3.316-1.861,4.938-2.772L298.158,252.126z" />
          <path style="fill: #FFD500;" d="M488.45,255.98c0-12.19-6.151-24.492-18.342-31.314c0,0-22.799-12.721-92.682-51.809l-83.123,83.123l83.204,83.205c69.116-38.807,92.6-51.892,92.6-51.892C482.299,280.472,488.45,268.17,488.45,255.98z" />
          <path style="fill: #FFAA00;" d="M470.108,287.294c12.191-6.822,18.342-19.124,18.342-31.314H294.303l83.204,83.205C446.624,300.379,470.108,287.294,470.108,287.294z" />
        </svg>
        <div class="text-left ml-3">
          <p class='text-xs'>Download on</p>
          <p class="text-sm md:text-base">Google Play Store</p>
        </div>
      </div>
      <div class="bg-gray-900 text-gray-200 flex items-center border md:mt-0 mt-1 rounded-lg p-3 w-52 md:mx-2 mx-auto">
        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-7 md:w-8">
          <path d="M7.87456 2.93707C7.66756 2.93707 7.49956 2.77259 7.49956 2.56993C7.49956 1.1506 8.67554 0 10.1245 0C10.3323 0 10.4995 0.164476 10.4995 0.367133C10.4995 1.78647 9.32429 2.93707 7.87456 2.93707Z" fill="#fff" />
          <path d="M7.87456 2.93707C7.66756 2.93707 7.49956 2.77259 7.49956 2.56993C7.49956 1.1506 8.67554 0 10.1245 0C10.3323 0 10.4995 0.164476 10.4995 0.367133C10.4995 1.78647 9.32429 2.93707 7.87456 2.93707Z" fill="#fff" />
          <path d="M13.3498 10.6678C13.4946 10.7743 13.5418 10.9674 13.4601 11.126C12.1401 13.7121 11.0871 15 10.1249 15C9.67713 15 9.23689 14.8583 8.8079 14.5822C8.18316 14.1791 7.37692 14.1622 6.73493 14.5381C6.21518 14.8429 5.72019 15 5.24995 15C3.83472 15 1.5 10.7332 1.5 8.3916C1.5 5.89216 2.83873 3.986 4.87495 3.986C5.83269 3.986 6.65993 4.12405 7.35442 4.40454C7.64916 4.52349 7.98216 4.51468 8.2694 4.37957C8.8334 4.1145 9.57664 3.986 10.4999 3.986C11.6264 3.986 12.6081 4.53524 13.4248 5.60139C13.5486 5.76366 13.5156 5.99349 13.3498 6.11538C12.4386 6.78429 11.9999 7.53618 11.9999 8.3916C11.9999 9.24702 12.4386 9.99891 13.3498 10.6678Z" fill="#fff" />
          <path d="M13.3498 10.6678C13.4946 10.7743 13.5418 10.9674 13.4601 11.126C12.1401 13.7121 11.0871 15 10.1249 15C9.67713 15 9.23689 14.8583 8.8079 14.5822C8.18316 14.1791 7.37692 14.1622 6.73493 14.5381C6.21518 14.8429 5.72019 15 5.24995 15C3.83472 15 1.5 10.7332 1.5 8.3916C1.5 5.89216 2.83873 3.986 4.87495 3.986C5.83269 3.986 6.65993 4.12405 7.35442 4.40454C7.64916 4.52349 7.98216 4.51468 8.2694 4.37957C8.8334 4.1145 9.57664 3.986 10.4999 3.986C11.6264 3.986 12.6081 4.53524 13.4248 5.60139C13.5486 5.76366 13.5156 5.99349 13.3498 6.11538C12.4386 6.78429 11.9999 7.53618 11.9999 8.3916C11.9999 9.24702 12.4386 9.99891 13.3498 10.6678Z" fill="#fff" />
        </svg>
        <div class="text-left ml-3">
          <p class='text-xs'>Download on</p>
          <p class="text-sm md:text-base">Apple Store</p>
        </div>
      </div>
    </div>
  </div>
 </div>
 <div class="bg-grey-900 pt-2">
  <div class="flex pb-5 md:px-3 m-auto pt-5 w-5/6 text-sm flex-col max-w-screen-lg items-center">
    <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
      <a href="#" class="w-6 mx-1">
        <svg class="fill-current cursor-pointer text-gray-500 hover:text-red-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" space="preserve" serif="http://www.serif.com/">
          <path id="Twitter" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168 -0.786,0.281 -1.213,0.333c0.436,-0.262 0.771,-0.676 0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411 -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166 0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929 -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379 0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009 -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049 -0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838 1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0 -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0 6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298 0.771,-0.67 1.054,-1.093Z"></path>
        </svg>
      </a>
      <a href="#" class="w-6 mx-1">
        <svg class="fill-current cursor-pointer text-gray-500 hover:text-red-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" space="preserve" serif="http://www.serif.com/" >
          <path id="Facebook" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422 0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784 -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"></path>
        </svg>
      </a>
      <a href="#" class="w-6 mx-1">
        <svg class="fill-current cursor-pointer text-gray-500 hover:text-red-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" space="preserve" serif="http://www.serif.com/">
          <path id="Shape" d="M7.3,0.9c1.5,-0.6 3.1,-0.9 4.7,-0.9c1.6,0 3.2,0.3 4.7,0.9c1.5,0.6 2.8,1.5 3.8,2.6c1,1.1 1.9,2.3 2.6,3.8c0.7,1.5 0.9,3 0.9,4.7c0,1.7 -0.3,3.2 -0.9,4.7c-0.6,1.5 -1.5,2.8 -2.6,3.8c-1.1,1 -2.3,1.9 -3.8,2.6c-1.5,0.7 -3.1,0.9 -4.7,0.9c-1.6,0 -3.2,-0.3 -4.7,-0.9c-1.5,-0.6 -2.8,-1.5 -3.8,-2.6c-1,-1.1 -1.9,-2.3 -2.6,-3.8c-0.7,-1.5 -0.9,-3.1 -0.9,-4.7c0,-1.6 0.3,-3.2 0.9,-4.7c0.6,-1.5 1.5,-2.8 2.6,-3.8c1.1,-1 2.3,-1.9 3.8,-2.6Zm-0.3,7.1c0.6,0 1.1,-0.2 1.5,-0.5c0.4,-0.3 0.5,-0.8 0.5,-1.3c0,-0.5 -0.2,-0.9 -0.6,-1.2c-0.4,-0.3 -0.8,-0.5 -1.4,-0.5c-0.6,0 -1.1,0.2 -1.4,0.5c-0.3,0.3 -0.6,0.7 -0.6,1.2c0,0.5 0.2,0.9 0.5,1.3c0.3,0.4 0.9,0.5 1.5,0.5Zm1.5,10l0,-8.5l-3,0l0,8.5l3,0Zm11,0l0,-4.5c0,-1.4 -0.3,-2.5 -0.9,-3.3c-0.6,-0.8 -1.5,-1.2 -2.6,-1.2c-0.6,0 -1.1,0.2 -1.5,0.5c-0.4,0.3 -0.8,0.8 -0.9,1.3l-0.1,-1.3l-3,0l0.1,2l0,6.5l3,0l0,-4.5c0,-0.6 0.1,-1.1 0.4,-1.5c0.3,-0.4 0.6,-0.5 1.1,-0.5c0.5,0 0.9,0.2 1.1,0.5c0.2,0.3 0.4,0.8 0.4,1.5l0,4.5l2.9,0Z"></path>
        </svg>
      </a>
      <a href="#" class="w-6 mx-1">
        <svg class="fill-current cursor-pointer text-gray-500 hover:text-red-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" space="preserve" serif="http://www.serif.com/" >
          <path id="Combined-Shape" d="M12,24c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12c-6.627,0
      -12,5.373 -12,12c0,6.627 5.373,12 12,12Zm6.591,-15.556l-0.722,0c-0.189,0
      -0.681,0.208 -0.681,0.385l0,6.422c0,0.178 0.492,0.323
      0.681,0.323l0.722,0l0,1.426l-4.675,0l0,-1.426l0.935,0l0,-6.655l-0.163,0l-2.251,8.081l-1.742,0l-2.222,-8.081l-0.168,0l0,6.655l0.935,0l0,1.426l-3.74,0l0,-1.426l0.519,0c0.203,0
      0.416,-0.145 0.416,-0.323l0,-6.422c0,-0.177 -0.213,-0.385
      -0.416,-0.385l-0.519,0l0,-1.426l4.847,0l1.583,5.704l0.042,0l1.598,-5.704l5.021,0l0,1.426Z"></path>
        </svg>
      </a>
    </div>
    <div className="my-4 md:pb-0 pb-10">© Copyright 2024. All Rights Reserved.</div>
  </div>
 </div>
</div>` :
                            `<div className='bg-gray-900 text-gray-50'>
 <div className="md:w-2/3 w-full m-auto py-7 px-4 flex flex-col">
  <div className="w-full lg:text-6xl sm:text-4xl text-2xl font-bold">
    <h1 className="w-full md:w-2/3">How can we help you. get
      in touch</h1>
  </div>
  <div className="flex mt-8 flex-col md:flex-row md:justify-between">
    <p className="w-full md:w-2/3 text-gray-400">To ensure that all Wikipedia content is verifiable, anyone may question an uncited claim. If your work has been tagged</p>
    <div className="w-44 pt-6 md:pt-0">
      <a className="bg-red-600 text-gray-50 justify-center text-center cursor-pointer hover:bg-red-700 rounded-lg shadow px-10 py-3 flex items-center">Contact US</a>
    </div>
  </div>
 </div>
 <div className="md:p-10">
  <div className="max-w-screen-lg px-4 sm:px-4 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
    <div className="lg:p-5 px-5 pr-10 text-center">
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className='w-10 h-10 text-gray-50 mx-auto' viewBox="0 0 512 512">
        <path style={{ fill: "#E41F11" }} d="M0,260.908l174.648-81.136v38.568l-132.08,57.848v0.728l132.08,57.848v38.568L0,292.212V260.908z" />
        <path style={{ fill: "currentcolor" }} d="M201.6,387.9l77.864-263.8h36.752L238.4,387.9H201.6z" />
        <path style={{ fill: "#00008B" }} d="M512,293.284L337.352,373.34v-38.568l134.992-57.848v-0.728L337.352,218.34v-38.568L512,259.828 V293.284z" />
      </svg>
      <h3 className="font-bold text-xl">Code <span className='text-red-600'>Snippet</span> </h3>
    </div>
    <div className="md:p-5 p-3">
      <div className="text-sm uppercase text-red-600 font-bold">Resources</div>
      <a className="my-3 block" href="/#">Documentation <span className="text-red-600  text-xs p-1"></span></a><a className="my-3 block" href="/#">Tutorials <span className="text-red-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Support <span className="text-red-600  text-xs p-1">New</span></a>
    </div>
    <div className="md:p-5 p-3">
      <div className="text-sm uppercase text-red-600 font-bold">Support</div>
      <a className="my-3 block" href="/#">Help Center <span className="text-red-600  text-xs p-1"></span></a><a className="my-3 block" href="/#">Privacy Policy <span className="text-red-600  text-xs p-1"></span></a><a className="my-3 block" href="/#">Conditions <span className="text-red-600 text-xs p-1"></span></a>
    </div>
    <div className="md:p-5 p-3">
      <div className="text-sm uppercase text-red-600 font-bold">Contact us</div>
      <a className="my-3 block" href="/#">XXX XXXX, Floor 4 San Francisco, CA <span className=" text-red-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">codesnippett@gmail.com <span className=" text-red-600 text-xs p-1"></span></a>
    </div>
  </div>
 </div>
 <div className="max-w-2xl mx-auto  border-t border-b border-gray-50 p-4 mt-10 py-10 ">
  <div className="text-center">
    <h3 className="text-3xl mb-3 ">Download our fitness app </h3>
    <p> Stay fit. All day, every day.</p>
    <div className="my-5 sm:flex-row sm:flex hover:cursor-pointer md:gap-3">
      <div className="bg-gray-900 text-gray-200 flex items-center border rounded-lg p-3 w-52 md:mx-2 mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 md:w-8" viewBox="0 0 511.999 511.999" xmlSpace="preserve">  <g>
          <path style={{ fill: "#32BBFF", }} d="M382.369,175.623C322.891,142.356,227.427,88.937,79.355,6.028 C69.372-0.565,57.886-1.429,47.962,1.93l254.05,254.05L382.369,175.623z" />
          <path style={{ fill: "#32BBFF", }} d="M47.962,1.93c-1.86,0.63-3.67,1.39-5.401,2.308C31.602,10.166,23.549,21.573,23.549,36v439.96 c0,14.427,8.052,25.834,19.012,31.761c1.728,0.917,3.537,1.68,5.395,2.314L302.012,255.98L47.962,1.93z" />
          <path style={{ fill: "#32BBFF", }} d="M302.012,255.98L47.956,510.035c9.927,3.384,21.413,2.586,31.399-4.103 c143.598-80.41,237.986-133.196,298.152-166.746c1.675-0.941,3.316-1.861,4.938-2.772L302.012,255.98z" />  </g>
          <path style={{ fill: "#2C9FD9", }} d="M23.549,255.98v219.98c0,14.427,8.052,25.834,19.012,31.761c1.728,0.917,3.537,1.68,5.395,2.314 L302.012,255.98H23.549z" />
          <path style={{ fill: "#29CC5E", }} d="M79.355,6.028C67.5-1.8,53.52-1.577,42.561,4.239l255.595,255.596l84.212-84.212 C322.891,142.356,227.427,88.937,79.355,6.028z" />
          <path style={{ fill: "#D93F21", }} d="M298.158,252.126L42.561,507.721c10.96,5.815,24.939,6.151,36.794-1.789 c143.598-80.41,237.986-133.196,298.152-166.746c1.675-0.941,3.316-1.861,4.938-2.772L298.158,252.126z" />
          <path style={{ fill: "#FFD500", }} d="M488.45,255.98c0-12.19-6.151-24.492-18.342-31.314c0,0-22.799-12.721-92.682-51.809l-83.123,83.123 l83.204,83.205c69.116-38.807,92.6-51.892,92.6-51.892C482.299,280.472,488.45,268.17,488.45,255.98z" />
          <path style={{ fill: "#FFAA00", }} d="M470.108,287.294c12.191-6.822,18.342-19.124,18.342-31.314H294.303l83.204,83.205 C446.624,300.379,470.108,287.294,470.108,287.294z" />
        </svg>
        <div className="text-left ml-3">
          <p className='text-xs'>Download on </p>
          <p className="text-sm md:text-base"> Google Play Store </p>
        </div>
      </div>
      <div className="bg-gray-900 text-gray-200 flex items-center border md:mt-0 mt-1 rounded-lg p-3 w-52 md:mx-2 mx-auto">
        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 md:w-8">
          <path d="M7.87456 2.93707C7.66756 2.93707 7.49956 2.77259 7.49956 2.56993C7.49956 1.1506 8.67554 0 10.1245 0C10.3323 0 10.4995 0.164476 10.4995 0.367133C10.4995 1.78647 9.32429 2.93707 7.87456 2.93707Z" fill="#fff" />
          <path d="M7.87456 2.93707C7.66756 2.93707 7.49956 2.77259 7.49956 2.56993C7.49956 1.1506 8.67554 0 10.1245 0C10.3323 0 10.4995 0.164476 10.4995 0.367133C10.4995 1.78647 9.32429 2.93707 7.87456 2.93707Z" fill="#fff" />
          <path d="M13.3498 10.6678C13.4946 10.7743 13.5418 10.9674 13.4601 11.126C12.1401 13.7121 11.0871 15 10.1249 15C9.67713 15 9.23689 14.8583 8.8079 14.5822C8.18316 14.1791 7.37692 14.1622 6.73493 14.5381C6.21518 14.8429 5.72019 15 5.24995 15C3.83472 15 1.5 10.7332 1.5 8.3916C1.5 5.89216 2.83873 3.986 4.87495 3.986C5.83269 3.986 6.65993 4.12405 7.35442 4.40454C7.64916 4.52349 7.98216 4.51468 8.2694 4.37957C8.8334 4.1145 9.57664 3.986 10.4999 3.986C11.6264 3.986 12.6081 4.53524 13.4248 5.60139C13.5486 5.76366 13.5156 5.99349 13.3498 6.11538C12.4386 6.78429 11.9999 7.53618 11.9999 8.3916C11.9999 9.24702 12.4386 9.99891 13.3498 10.6678Z" fill="#fff" />
          <path d="M13.3498 10.6678C13.4946 10.7743 13.5418 10.9674 13.4601 11.126C12.1401 13.7121 11.0871 15 10.1249 15C9.67713 15 9.23689 14.8583 8.8079 14.5822C8.18316 14.1791 7.37692 14.1622 6.73493 14.5381C6.21518 14.8429 5.72019 15 5.24995 15C3.83472 15 1.5 10.7332 1.5 8.3916C1.5 5.89216 2.83873 3.986 4.87495 3.986C5.83269 3.986 6.65993 4.12405 7.35442 4.40454C7.64916 4.52349 7.98216 4.51468 8.2694 4.37957C8.8334 4.1145 9.57664 3.986 10.4999 3.986C11.6264 3.986 12.6081 4.53524 13.4248 5.60139C13.5486 5.76366 13.5156 5.99349 13.3498 6.11538C12.4386 6.78429 11.9999 7.53618 11.9999 8.3916C11.9999 9.24702 12.4386 9.99891 13.3498 10.6678Z" fill="#fff" />
        </svg>
        <div className="text-left ml-3">
          <p className='text-xs'>Download on </p>
          <p className="text-sm md:text-base"> Apple Store </p>
        </div>
      </div>
    </div>
  </div>
 </div>
 <div className="bg-grey-900 pt-2">
  <div className="flex pb-5 md:px-3 m-auto pt-5  w-5/6 text-sm flex-col max-w-screen-lg items-center">
    <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
      <Link to="#" className="w-6 mx-1">
        <svg className="fill-current cursor-pointer text-gray-500 hover:text-red-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" space="preserve" serif="http://www.serif.com/">
          <path id="Twitter" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168 -0.786,0.281 -1.213,0.333c0.436,-0.262 0.771,-0.676 0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411 -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166 0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929 -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379 0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009 -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049 -0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838 1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0 -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0 6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298 0.771,-0.67 1.054,-1.093Z"></path>
        </svg>
      </Link>
      <Link to="#" className="w-6 mx-1">
        <svg className="fill-current cursor-pointer text-gray-500 hover:text-red-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" space="preserve" serif="http://www.serif.com/" >
          <path id="Facebook" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422 0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784 -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"></path>
        </svg>
      </Link>
      <Link to="#" className="w-6 mx-1">
        <svg className="fill-current cursor-pointer text-gray-500 hover:text-red-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" space="preserve" serif="http://www.serif.com/">
          <path id="Shape" d="M7.3,0.9c1.5,-0.6 3.1,-0.9 4.7,-0.9c1.6,0 3.2,0.3 4.7,0.9c1.5,0.6 2.8,1.5 3.8,2.6c1,1.1 1.9,2.3 2.6,3.8c0.7,1.5 0.9,3 0.9,4.7c0,1.7 -0.3,3.2 -0.9,4.7c-0.6,1.5 -1.5,2.8 -2.6,3.8c-1.1,1 -2.3,1.9 -3.8,2.6c-1.5,0.7 -3.1,0.9 -4.7,0.9c-1.6,0 -3.2,-0.3 -4.7,-0.9c-1.5,-0.6 -2.8,-1.5 -3.8,-2.6c-1,-1.1 -1.9,-2.3 -2.6,-3.8c-0.7,-1.5 -0.9,-3.1 -0.9,-4.7c0,-1.6 0.3,-3.2 0.9,-4.7c0.6,-1.5 1.5,-2.8 2.6,-3.8c1.1,-1 2.3,-1.9 3.8,-2.6Zm-0.3,7.1c0.6,0 1.1,-0.2 1.5,-0.5c0.4,-0.3 0.5,-0.8 0.5,-1.3c0,-0.5 -0.2,-0.9 -0.6,-1.2c-0.4,-0.3 -0.8,-0.5 -1.4,-0.5c-0.6,0 -1.1,0.2 -1.4,0.5c-0.3,0.3 -0.6,0.7 -0.6,1.2c0,0.5 0.2,0.9 0.5,1.3c0.3,0.4 0.9,0.5 1.5,0.5Zm1.5,10l0,-8.5l-3,0l0,8.5l3,0Zm11,0l0,-4.5c0,-1.4 -0.3,-2.5 -0.9,-3.3c-0.6,-0.8 -1.5,-1.2 -2.6,-1.2c-0.6,0 -1.1,0.2 -1.5,0.5c-0.4,0.3 -0.8,0.8 -0.9,1.3l-0.1,-1.3l-3,0l0.1,2l0,6.5l3,0l0,-4.5c0,-0.6 0.1,-1.1 0.4,-1.5c0.3,-0.4 0.6,-0.5 1.1,-0.5c0.5,0 0.9,0.2 1.1,0.5c0.2,0.3 0.4,0.8 0.4,1.5l0,4.5l2.9,0Z"></path>
        </svg>
      </Link>
      <Link to="#" className="w-6 mx-1">
        <svg className="fill-current cursor-pointer text-gray-500 hover:text-red-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" space="preserve" serif="http://www.serif.com/" >
          <path id="Combined-Shape" d="M12,24c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12c-6.627,0
              -12,5.373 -12,12c0,6.627 5.373,12 12,12Zm6.591,-15.556l-0.722,0c-0.189,0
              -0.681,0.208 -0.681,0.385l0,6.422c0,0.178 0.492,0.323
              0.681,0.323l0.722,0l0,1.426l-4.675,0l0,-1.426l0.935,0l0,-6.655l-0.163,0l-2.251,8.081l-1.742,0l-2.222,-8.081l-0.168,0l0,6.655l0.935,0l0,1.426l-3.74,0l0,-1.426l0.519,0c0.203,0
              0.416,-0.145 0.416,-0.323l0,-6.422c0,-0.177 -0.213,-0.385
              -0.416,-0.385l-0.519,0l0,-1.426l4.847,0l1.583,5.704l0.042,0l1.598,-5.704l5.021,0l0,1.426Z"></path>
        </svg>
      </Link>
    </div>
    <div className="my-4 md:pb-0 pb-10">© Copyright 2024. All Rights Reserved.</div>
  </div>
 </div>
</div>`}
                </code >
            </pre >
        </div>
    )
}


