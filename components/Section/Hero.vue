<template>
	<section id="hero"
		class="relative grid grid-rows-[repeat(3,min-content)] md:grid-rows-1 grid-cols-3 items-center gap-y-[4.5rem] mt-24 md:m-0 min-h-screen">
		<div class="row-start-1 !col-start-1 col-span-3 md:col-span-2 flex flex-col gap-6 text-center md:text-left">
			<h1 class="text-3xl md:text-5xl font-semi-bold">Capture the <br />memorable moments</h1>
			<p class="text-lg md:text-xl leading-9 tracking-wide">Moments are too precious, <br />it should be chariest life
				long</p>
			<CTAButton class="hidden md:flex" />
		</div>
		<div class="relative row-start-2 md:row-start-1 col-start-1 md:col-start-2 col-span-3 md:col-span-2 -z-10">
			<NuxtImg src="/images/background.webp" alt="background" width="1200"
				class="relative right-0 bottom-0 -translate-y-[10%] -translate-x-[25%] md:-translate-x-[10%] scale-[165%] md:scale-125" />
		</div>
		<CTAButton class="md:hidden row-start-3 col-start-2 justify-self-center items-center" />
	</section>
</template>