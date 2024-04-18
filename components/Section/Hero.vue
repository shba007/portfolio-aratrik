<script setup lang="ts">
const emit = defineEmits<{ (event: 'contact'): void }>()
const images = ref([
	'c048ef8c-20d4-4b6b-be6f-103a56b2ba8b',
	'76d57406-39d6-42bb-b1e4-5b0c2d0f48e3',
	'f0bd8b64-1730-412e-a5cf-a9161c393ce6'
])
</script>

<template>
	<section id="hero"
		class="relative grid grid-rows-[repeat(3,min-content)] md:grid-rows-1 grid-cols-3 items-center gap-y-[4.5rem] h-screen md:h-auto mt-24 lg:mt-0 ">
		<div
			class="relative row-start-1 !col-start-1 col-span-3 md:col-span-2 flex flex-col gap-6 text-center md:text-left ">
			<h1 class="text-3xl md:text-5xl font-semi-bold">
				Bring your<br /> product to life
			</h1>
			<p class="text-lg md:text-xl max-w-screen-sm leading-9 tracking-wide">
				Nurture the essence of your product with our photography & videography services
			</p>
			<CTAButton class="hidden md:flex" @click="emit('contact')" />
		</div>
		<div
			class="relative flex md:flex-col justify-center items-center row-start-2 md:row-start-1 col-start-1 md:col-start-2 col-span-3 md:col-span-2 mx-auto sm:max-w-[32rem] lg:max-w-full lg:h-screen md:-translate-y-16 -z-10 overflow-hidden">
			<NuxtImg :src="images[0]" :alt="images[0]" provider="uploadcare"
				class="rounded-full md:translate-x-[10%] -rotate-6 lg:scale-[80%] aspect-video" />
			<NuxtImg :src="images[1]" :alt="images[1]" provider="uploadcare"
				class="rounded-full md:translate-x-[10%] -rotate-0 lg:scale-[80%] aspect-video" />
			<NuxtImg :src="images[2]" :alt="images[2]" provider="uploadcare"
				class="rounded-full md:translate-x-[10%] -rotate-6 lg:scale-[80%] aspect-video" />
		</div>
		<CTAButton class="md:hidden row-start-3 col-start-2 justify-self-center items-center" @click="emit('contact')" />
	</section>
</template>