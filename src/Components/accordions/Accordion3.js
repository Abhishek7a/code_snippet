import React from 'react'

export default function Accordion3() {
  return (
    <!-- component -->
<!-- 
  Date : 29 November 2021
  Author : Saad Hasan
  Github : https://github.com/saadh393
  Title : Accordion UI Design
  External Plugin : Font Awesome 
  Actual Design Source : https://dribbble.com/shots/14726947-Accordion-UI-Design
  
  Special Thanks and Love to Ildiko Gaspar 

 -->

<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
    

<div class="h-screen bg-gradient-to-br from-pink-50 to-indigo-100 grid place-items-center">
    <div class="w-6/12 mx-auto rounded border">
    <div class="bg-white p-10 shadow-sm">
        <h3 class="text-lg font-medium text-gray-800">Several Windows stacked on each other</h3>
        <p class="text-sm font-light text-gray-600 my-3">
        The accordion is a graphical control element comprising a vertically stacked list of items such as labels or thumbnails
        </p>

        <div class="h-1 w-full mx-auto border-b my-5"></div>

        <!-- What is term -->
        <div class="transition hover:bg-indigo-50">
        <!-- header -->
        <div class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
            <i class="fas fa-plus"></i>
            <h3>What is term?</h3>
        </div>
        <!-- Content -->
        <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
            <p class="leading-6 font-light pl-9 text-justify">
            Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put
            far daughter.
            </p>
            <button class="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">Learn more</button>
        </div>
        </div>

        <!-- When to use Accordion Components -->
        <div class="transition hover:bg-indigo-50">
        <!-- header -->
        <div class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
            <i class="fas fa-plus"></i>
            <h3>When to use Accordion Components?</h3>
        </div>
        <!-- Content -->
        <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
            <p class="leading-6 font-light pl-9 text-justify">
            Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put
            far daughter.
            </p>
            <button class="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">Learn more</button>
        </div>
        </div>

        <!-- Accordion Wrapper -->
        <div class="transition hover:bg-indigo-50">
        <!-- header -->
        <div class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
            <i class="fas fa-plus"></i>
            <h3>How can it be defined?</h3>
        </div>
        <!-- Content -->
        <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
            <p class="leading-6 font-light pl-9 text-justify">
            Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put
            far daughter.
            </p>
            <button class="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">Learn more</button>
        </div>
        </div>

        <!-- Accordion Wrapper -->
        <div class="transition hover:bg-indigo-50">
        <!-- header -->
        <div class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
            <i class="fas fa-plus"></i>
            <h3>Chamber reached do he nothing be?</h3>
        </div>
        <!-- Content -->
        <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
            <p class="leading-6 font-light pl-9 text-justify">
            Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put
            far daughter.
            </p>
            <button class="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">Learn more</button>
        </div>
        </div>
    </div>
    </div>
<section class="mt-4 text-center">Build with ❤️ by <a href="https://github.com/saadh393" target="_blank">Saad Hasan </a></section>
</div>

<style>
    .accordion-content {
    transition: max-height 0.3s ease-out, padding 0.3s ease;
    }
</style>

<script>
    const accordionHeader = document.querySelectorAll(".accordion-header");
    accordionHeader.forEach((header) => {
    header.addEventListener("click", function () {
        const accordionContent = header.parentElement.querySelector(".accordion-content");
        let accordionMaxHeight = accordionContent.style.maxHeight;

        // Condition handling
        if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
        accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
        header.querySelector(".fas").classList.remove("fa-plus");
        header.querySelector(".fas").classList.add("fa-minus");
        header.parentElement.classList.add("bg-indigo-50");
        } else {
        accordionContent.style.maxHeight = `0px`;
        header.querySelector(".fas").classList.add("fa-plus");
        header.querySelector(".fas").classList.remove("fa-minus");
        header.parentElement.classList.remove("bg-indigo-50");
        }
    });
    });
</script>
  )
}
