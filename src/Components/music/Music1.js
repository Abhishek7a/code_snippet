import React from 'react'

export default function Music1() {
  return (
    <!-- component -->
<!-- MDI Icons -->
<link rel="stylesheet" href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css" />

<!-- AlpineJS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/3.8.1/cdn.min.js" defer></script>

<!-- Quicksand -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap" rel="stylesheet">

<style>
    html, body {
        font-family: 'Quicksand', sans-serif;
    }

    /* alpinejs */
    [x-cloak] {
        display: none !important;
    }

    /* custom rounded classes */
    .rounded-xxl {
        border-radius: 30px;
    }

    .rounded-t-xxl {
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
    }

    .rounded-b-xxl {
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
    }

    /* Range Input */

    .x-slider * {
        width: 350px !important;
    }

    .x-slider input::-webkit-slider-thumb {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #636363;
        border: 5px solid #24c55d;
        box-shadow: 0px 0px 40px -4px rgba(0, 0, 0, 0.76);
        transition: all 0.1s ease-in-out;
        outline: none;
        appearance: none;
    }

    .x-slider input::-webkit-slider-thumb:hover {
        border-color: #1bb350;
    }

    /* Player Controls */
    .x-player-controls .play-pause{
        transform: scale(3);
    }

    .x-player-controls .play-pause:hover{
        transform: scale(3.1);
    }

    .x-player-controls .center-controls{
        transform: scale(2.5);
    }

    .x-player-controls .center-controls:hover{
        transform: scale(2.7);
    }

    .x-player-controls .side-controls{
        transform: scale(1.8);
    }

    .x-player-controls .side-controls:hover{
        transform: scale(2);
    }
</style>

<!-- Page Container -->
<div class="flex flex-col items-center justify-center bg-white" x-cloak x-data="appData()" x-init="appInit()">

    <!-- Player -->
    <div class="relative min-h-screen bg-white
            rounded-xxl bg-amber-500 w-96 mx-auto my-20">

        <!-- Player Cover -->
        <img class="absolute rounded-xxl object-cover h-full w-full"
            src="https://images.unsplash.com/photo-1619983081563-430f63602796?fit=crop&w=450&h=800&q=80"
            alt="Product Preview" />

        <div class="flex flex-col absolute h-full w-full">
            <!-- Top -->
            <div class="flex-none group h-20 w-fit-screen rounded-t-xxl mb-auto">
                <!-- Shadow Bar -->
                <div class="flex flex-row flex-grow justify-start rounded-t-xxl
                    h-16 w-fit-screen px-3 space-x-2
                    bg-gradient-to-b from-black/70 via-gray-800/70 to-transparent
                    opacity-80 group-hover:opacity-100
                    transition-all ease-in-out duration-200 delay-100">

                    <!-- Slide Down Button -->
                    <button class="flex-none px-1 h-10 w-10 my-auto hover:scale-125
                        transition-all duration-200 ease-in-out" title="Slide Down">
                        <i class="mdi mdi-chevron-down text-2xl text-gray-200
                            hover:text-white transition-all duration-200"></i>
                    </button>

                    <!-- Grow Space -->
                    <div class="grow"></div>

                    <!-- Share Button -->
                    <button class="flex-none h-10 w-10 my-auto hover:scale-125
                        transition-all duration-200 ease-in-out" title="Share With">
                        <i class="mdi mdi-share-variant-outline text-xl text-gray-200
                            hover:text-white transition-all duration-200"></i>
                    </button>

                    <!-- Options Button -->
                    <button class="flex-none h-10 w-10 my-auto hover:scale-125
                        transition-all duration-200 ease-in-out" title="Show Options">
                        <i class="mdi mdi-dots-vertical text-2xl text-gray-200
                            hover:text-white transition-all duration-200"></i>
                    </button>
                </div>
            </div>

            <div class="my-auto"></div>

            <!-- Player -->
            <div class="flex-none group h-2/4 w-fit-screen rounded-b-xxl mt-auto backdrop-blur-md">
                <!-- Shadow Bar -->
                <div class="flex flex-col justify-start rounded-b-xxl
                    h-full w-fit-screen px-3 space-x-2 my-auto
                    bg-black/70 via-gray-800/70 to-transparent
                    opacity-95 group-hover:opacity-100
                    transition-all ease-in-out duration-200 delay-100">

                    <!-- Song Details -->
                    <div class="flex flex-row flex-grow justify-start mt-3 pl-2">
                        <div class="flex flex-col">
                            <div class="text-gray-400/90 text-xl font-semibold select-none">
                                Kalbimi Kırdın
                            </div>

                            <div class="text-gray-500/90 text-base font-semibold select-none">
                                Zeynep Yastık & Yorgan
                            </div>
                        </div>

                        <!-- Grow Space -->
                        <div class="grow"></div>

                        <div class="flex flex-row">
                            <!-- Make Karaoke -->
                            <button class="flex-none px-1 h-10 w-10 my-auto hover:scale-125 rotate-45
                                transition-all duration-200 ease-in-out" title="Karaoke">
                                <i class="mdi mdi-microphone-variant text-2xl text-gray-200
                                    hover:text-white transition-all duration-200"></i>
                            </button>

                            <!-- Like This Song -->
                            <button class="flex-none px-1 h-10 w-10 my-auto hover:scale-125
                                transition-all duration-200 ease-in-out" title="Like This Song">
                                <i class="mdi mdi-heart text-2xl text-green-500 shadow-lg
                                    hover:text-white transition-all duration-200"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Player Slider Container -->
                    <div class="x-slider flex relative my-3">
                        <!-- Player Slider -->
                        <div class="x-slider inline justify-center rounded-md">
                            <!-- Range Input -->
                            <input class="absolute bg-transparent rounded-md
                                z-10 h-1 w-80 outline-0 appearance-none" type="range"
                                step="1" min='0' max="100" value="0"
                                x-model="sliderValue"
                                x-on:change.debounce="sliderProgressTime = sliderProgressToTime(sliderValue, songLength)">

                            <!-- Slider Placeholder -->
                            <div class="absolute z-0 w-80 h-0.5 mt-0.5 rounded-md bg-gray-500/70"></div>

                            <!-- Progress -->
                            <div class="absolute z-0 w-80 h-1.5 rounded-md bg-green-600
                                bg-gradient-to-r from-emerald-700 to-green-500"
                                x-bind:style="'width: ' + (sliderValue * 3.5) + 'px !important; '"></div>
                            <!-- x-slider is width 350px -->
                        </div>
                    </div>

                    <!-- Duration Container -->
                    <div class="flex flex-row flex-grow justify-start px-0.5">
                        <!-- Current Time -->
                        <div class="text-gray-500/90 text-sm select-none" x-text="sliderProgressTime"></div>

                        <!-- Grow Space -->
                        <div class="grow"></div>

                        <!-- Total Time -->
                        <div class="text-gray-400/90 text-sm select-none pr-1" x-text="secondsToDuration(songLength)"></div>
                    </div>

                    <!-- Player Controls Container -->
                    <div class="x-player-controls flex flex-row flex-grow justify-start 
                        space-x-8 mx-4 px-3">
                        <!-- Suffle -->
                        <button class="side-controls flex-none px-1 h-10 w-10 my-auto
                            transition-all duration-200 ease-in-out" title="Suffle">
                            <i class="mdi mdi-gamepad-circle-right text-gray-300/90
                                hover:text-white transition-all duration-200"></i>
                        </button>

                        <!-- Previous - Begining -->
                        <button class="center-controls flex-none px-1 h-10 w-10 my-auto
                            transition-all duration-200 ease-in-out" title="Previous">
                            <i class="mdi mdi-skip-previous-outline text-2xl text-gray-200/95
                                hover:text-white transition-all duration-200"></i>
                        </button>

                        <!-- Play - Pause -->
                        <button class="play-pause flex-none px-1 h-10 w-10 my-auto
                            transition-all duration-200 ease-in-out" title="Play/Pause">
                            <i class="mdi mdi-play-circle-outline text-2xl text-gray-200
                                hover:text-white transition-all duration-200"></i>
                        </button>

                        <!-- Next - End -->
                        <button class="center-controls flex-none px-1 h-10 w-10 my-auto
                            transition-all duration-200 ease-in-out" title="Next Song">
                            <i class="mdi mdi-skip-next-outline text-2xl text-gray-200/95
                                hover:text-white transition-all duration-200"></i>
                        </button>

                        <!-- Repeat -->
                        <button class="side-controls flex-none px-1 h-10 w-10 my-auto
                            transition-all duration-200 ease-in-out" title="Repeat">
                            <i class="mdi mdi-repeat text-gray-300/90
                                hover:text-white transition-all duration-200"></i>
                        </button>
                    </div>

                    <!-- Source Playlist -->
                    <div class="flex flex-row flex-grow justify-start 
                        border-t border-gray-600/50 mt-5 pt-1">
                        <!-- Album -->
                        <button class="side-controls flex-none 
                            h-10 w-10 my-auto hover:scale-125
                            transition-all duration-200">
                            <!-- Cover -->
                            <img class="h-8 w-8 rounded-full border border-gray-600" 
                                src="https://images.unsplash.com/photo-1612982663544-54e9d6d2818d?fit=crop&w=50&h=50&q=80" alt="Album">
                        </button>

                        <!-- Playlist -->
                        <div class="flex flex-col my-auto mx-2 ">
                            <!-- Title -->
                            <div class="text-gray-500/90 text-xs font-semibold select-none cursor-pointer">
                                From Playlist
                            </div>

                            <!-- Playlist Name -->
                            <div class="text-gray-300/90 text-base font-semibold select-none cursor-pointer">
                                Daily Discover
                            </div>
                        </div>

                        <!-- Grow Space -->
                        <div class="grow"></div>

                        <!-- Slide Down Button -->
                        <button class="flex-none px-1 h-10 w-10 my-auto hover:scale-125
                            transition-all duration-200 ease-in-out" title="Show Playlist">
                            <i class="mdi mdi-chevron-up text-2xl text-gray-200
                                hover:text-white transition-all duration-200"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Notes -->
    <span class="text-center font-bold my-20">
        MDI (npm i @mdi/font) reuqired for icons

        <hr class="my-4">

        <a href="https://egoistdeveloper.github.io/twcss-to-sass-playground/" target="_blank" class="text-blue-600">
            Convetert to SASS
        </a>

        <hr class="my-4">

        <a href="https://tailwindcomponents.com/component/progress-slider-component" target="_blank" class="text-blue-600">
            Standalone Slider Component
        </a>

        <hr class="my-4">

        <a href="https://unsplash.com/photos/QzpgqElvSiA" target="_blank" class="text-blue-600">
            Cover Image
        </a>

        <hr class="my-4">

        <a href="https://unsplash.com/photos/af0KTGlI4ss" target="_blank" class="text-blue-600">
            Playlist Image
        </a>
    </span>
</div>

<script>
    function appData() {
        return {
            sliderValue: 50,
            songLength: 250,
            sliderProgressTime: '00:00',

            appInit() {
                this.sliderProgressTime = this.sliderProgressToTime(this.sliderValue, this.songLength);
            },

            /*
            * Convert slider value to time
            */
            secondsToDuration(seconds) {
                var minutes = Math.floor(seconds / 60).toFixed(0),
                    seconds = Math.floor(seconds % 60).toFixed(0);

                return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
            },

            /*
            * Slider progress value to time
            */
            sliderProgressToTime(sliderValue, songLength) {
                return this.secondsToDuration((songLength / 100) * sliderValue);
            }
        }
    }
</script>
  )
}
