import React from 'react'

export default function Button1() {
  return (
    <!-- component -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js"></script>
<script src="https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js"></script>
  <link rel="stylesheet" href="tailwind.css">
   <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
      integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
      crossorigin="anonymous"
    />
</head>
<body>
<div class="w-screen h-screen flex items-center justify-center">
<div class="grid grid-cols-4 gap-4">
  <!--Facebook Button -->

    <button id="facebook" class="bg-white  sticky duration-500 border-2 border-blue-600 fixed  w-12 transform hover:-translate-y-3   h-12 text-2xl rounded-full hover:bg-blue-600 hover:text-white text-blue-600 ">
      <i class="fab fa-facebook-f"></i>
  </button>



 <!--İnstagram Button -->

   <button id="instagram" class=" border-2 hover:border-0 border-pink-500 bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white bg-white text-pink-600 w-12 h-12  transform hover:-translate-y-3 rounded-full duration-500 ">
    <i class="fab fa-instagram"></i>
  </button>


  <!--Whatsapp Button -->
  <button id="whatsapp" class="bg-white duration-500    w-12 h-12 border-2 rounded-full border-green-600 transform hover:-translate-y-3  text-2xl text-green-500 hover:bg-green-600 hover:text-white">
    <i class="fab fa-whatsapp"></i>
  </button>


  <!--Twitter Button -->
  <button id="twitter" class="bg-white  transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white text-2xl">
    <i class="fab fa-twitter"></i>
  </button>

  <!--YouTube Button -->
  <button id="youtube" class="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-red-500 border-red-500 hover:bg-red-500 hover:text-white text-2xl">
    <i class="fab fa-youtube"></i>
  </button>

   <!--Snapchat Button-->
   <button id="snapchat" class="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-yellow-300 border-yellow-300 hover:bg-yellow-300 hover:text-white text-2xl">
    <i class="fab fa-snapchat-ghost"></i>
  </button>

   <!--Linkedin Button-->
  <button id="linkedin" class="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-blue-500 border-blue-500  hover:bg-blue-500 hover:text-white text-2xl">
    <i class="fab fa-linkedin-in"></i>
  </button>

   <!--Tiktok Button-->
  <button id="tiktok" class="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-black border-black hover:bg-black hover:text-white text-2xl">
   <i class="fab fa-tiktok"></i>
  </button>

  <!--Twitter Button -->
  <button id="telegram" class="bg-white  transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white text-2xl">
    <i class="fab fa-telegram-plane"></i>
  </button>

  <!--Pinterest Button -->
  <button id="pinterest" class="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-red-500 border-red-500 hover:bg-red-500 hover:text-white text-2xl">
    <i class="fab fa-pinterest-p"></i>
  </button>

  <!--Spotify Button -->
  <button id="spotify" class="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-green-500 border-green-500 hover:bg-green-500 hover:text-white text-2xl">
    <i class="fab fa-spotify"></i>
  </button>

  <!--Discord Button -->
  <button id="discord" class="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-indigo-500 border-indigo-500 hover:bg-indigo-500 hover:text-white text-2xl">
    <i class="fab fa-discord"></i>
  </button>


  <!--Reddit Button -->
  <button id="reddit" class="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-yellow-600 border-yellow-600 hover:bg-yellow-600 hover:text-white text-2xl">
    <i class="fab fa-reddit-alien"></i>
  </button>

   <!--Google Plus Button -->
  <button id="googleplus" class="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-red-500 border-red-500 hover:bg-red-500 hover:text-white text-2xl">
    <i class="fab fa-google-plus-g"></i>
  </button>

  <!--Skype Button -->
  <button id="skype" class="bg-white  transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white text-2xl">
    <i class="fab fa-skype"></i>
  </button>

  <!--Line Button -->
  <button id="line" class="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-green-400 border-green-400 hover:bg-green-400 hover:text-white text-2xl">
    <i class="fab fa-line"></i>
  </button>


</div>

 
  <script>
    tippy('#facebook',{
      content:'Facebook',
      animation:'fade',
      delay:[200,200]
    });
    tippy('#instagram',{
      content:'Instagram',
      animation:'fade',
      delay:[200,200]
    });
     tippy('#whatsapp',{
      content:'Whatsapp',
      animation:'fade',
      delay:[200,200]
    });
    tippy('#twitter',{
      content:'Twitter',
      animation:'fade',
      delay:[200,200]
    });
    tippy('#youtube',{
      content:'Youtube',
      animation:'fade',
      placement: 'left-start',
      delay:[200,200]
    });
    tippy('#telegram',{
      content:'Telegram',
      animation:'fade',
      placement: 'left-start',
      delay:[200,200]
    });
    tippy('#reddit',{
      content:'Reddit',
      animation:'fade',
      placement: 'bottom',
      delay:[200,200]
    });
    tippy('#googleplus',{
      content:'Google +',
      animation:'fade',
      placement: 'bottom',
      delay:[200,200]
    });
    tippy('#skype',{
      content:'Skype',
      animation:'fade',
      placement: 'bottom',
      delay:[200,200]
    });
    tippy('#line',{
      content:'Line',
      animation:'fade',
      placement: 'bottom',
      delay:[200,200]
    });
    tippy('#discord',{
      content:'Discord',
      animation:'fade',
      placement: 'right-start',
      delay:[200,200]
    });
    tippy('#tiktok',{
      content:'Tiktok',
      animation:'fade',
      placement: 'right-start',
      delay:[200,200]
    });
    tippy('#linkedin',{
      content:'Linkedin',
      animation:'fade',
      placement: 'top',
      delay:[200,200]
    });
     tippy('#snapchat',{
      content:'Snapchat',
      animation:'fade',
      placement: 'top',
      delay:[200,200]
    });
    tippy('#pinterest',{
      content:'Pinterest',
      animation:'fade',
      placement: 'bottom',
      delay:[200,200],
    });
    tippy('#spotify',{
      content:'Spotify',
      animation:'fade',
      placement: 'bottom',
      delay:[200,200]
    });


   
   
  </script>

</div>
</body>
</html>
  )
}
