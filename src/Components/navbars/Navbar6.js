import React from 'react'

export default function Navbar6() {
  return (
    <!-- component -->
<!-- MDI Icons -->
<link rel="stylesheet" href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css">

<!-- Container -->
<div class="flex items-center justify-center min-h-screen">
	<div class="flex flex-col">
		<span class="text-center font-bold my-20">
			MDI (npm i @mdi/font) reuqired for navigation icons

			<hr class="my-4">

			<a href="https://egoistdeveloper.github.io/twcss-to-sass-playground/" target="_blank" class="text-blue-600">
				Convetert to SASS
			</a>
		</span>

		<div class="w-full max-w-md px-7 py-10 mx-auto bg-white rounded-2xl shadow-xl">
			<!-- Navigation Bar -->
			<div class="px-5 pt-3 bg-white shadow-lg rounded-2xl">
				<div class="flex flex-row space-x-3">
					<!-- Item #1 -->
					<div class="flex group">
						<a href="#" class="p-3 text-gray-400 hover:text-yellow-500">
							<span class="flex flex-col items-center">
								<!-- Icon -->
								<i class="mdi mdi-home-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
									transition-color duration-200"></i>

								<!-- Text -->
								<span class="text-xs mb-2 transition-all duration-200">
									Home
								</span>

								<!-- Focus Dot -->
								<span class="h-2 w-2 rounded-full group-hover:bg-yellow-500
									transition-all duration-150 delay-100"></span>
							</span>
						</a>
					</div>

					<!-- Item #2 -->
					<div class="flex group">
						<a href="#" class="p-3 text-gray-400 hover:text-yellow-500">
							<span class="flex flex-col items-center">
								<!-- Icon -->
								<i class="mdi mdi-compass-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
									transition-color duration-200"></i>

								<!-- Text -->
								<span class="text-xs mb-2 transition-all duration-200">
									Explore
								</span>

								<!-- Focus Dot -->
								<span class="h-2 w-2 rounded-full group-hover:bg-yellow-500
									transition-all duration-150 delay-100"></span>
							</span>
						</a>
					</div>

					<!-- Item #3 Active -->
					<div class="flex group">
						<a href="#" class="p-3 text-yellow-500 hover:text-yellow-500">
							<span class="flex flex-col items-center">
								<!-- Icon -->
								<i class="mdi mdi-layers-outline mdi-24px mx-1 text-gray-700 group-hover:text-gray-700
									transition-color duration-200"></i>

								<!-- Text -->
								<span class="text-xs mb-2 transition-all duration-200">
									Feeds
								</span>

								<!-- Focus Dot -->
								<span class="h-1 w-5 rounded-full bg-yellow-500 group-hover:bg-yellow-500
									hover:h-3 hover:w-3 transition-all duration-150 delay-100"></span>
							</span>
						</a>
					</div>

					<!-- Item #4 -->
					<div class="flex group">
						<a href="#" class="p-3 text-gray-400 hover:text-yellow-500">
							<span class="flex flex-col items-center">
								<!-- Icon -->
								<i class="mdi mdi-basket-plus-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
									transition-color duration-200"></i>

								<!-- Text -->
								<span class="text-xs mb-2 transition-all duration-200">
									Cart
								</span>

								<!-- Focus Dot -->
								<span class="h-2 w-2 rounded-full group-hover:bg-yellow-500
									transition-all duration-150 delay-100"></span>
							</span>
						</a>
					</div>

					<!-- Item #5 -->
					<div class="flex group">
						<a href="#" class="p-3 text-gray-400 hover:text-yellow-500">
							<span class="flex flex-col items-center">
								<!-- Icon -->
								<i class="mdi mdi-account-circle-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
									transition-color duration-200"></i>

								<!-- Text -->
								<span class="text-xs mb-2 transition-all duration-200">
									Account
								</span>

								<!-- Focus Dot -->
								<span class="h-2 w-2 rounded-full group-hover:bg-yellow-500
									transition-all duration-150 delay-100"></span>
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
  )
}
