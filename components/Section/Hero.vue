<script setup lang="ts">
const emit = defineEmits<{ (event: 'contact'): void }>()
const images = ref([
	'fa4134de-c4ef-467f-b750-a5f6b6d8a3fb',
	'c048ef8c-20d4-4b6b-be6f-103a56b2ba8b',
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
			class="relative flex md:flex-col justify-center items-center row-start-2 md:row-start-1 col-start-1 md:col-start-2 col-span-3 md:col-span-2 mx-auto sm:max-w-[32rem] lg:max-w-full lg:h-screen -z-10">
			<NuxtImg v-for="image, index in images" :key="image" :src="image + '/-/preview/1600x1200/'" :alt="image"
				provider="uploadcare" class="rounded-full md:translate-x-[10%] lg:scale-[80%] aspect-video"
				:class="{ '-rotate-6': index !== 1 }" />
		</div>
		<CTAButton class="md:hidden row-start-3 col-start-2 justify-self-center items-center" @click="emit('contact')" />
	</section>
</template>