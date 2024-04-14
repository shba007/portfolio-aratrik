<script setup lang="ts">
const emit = defineEmits<{ (event: 'contact'): void }>()
</script>

<template>
	<section id="hero"
		class="relative grid grid-rows-[repeat(3,min-content)] md:grid-rows-1 grid-cols-3 items-center gap-y-[4.5rem] mt-24 lg:mt-0 min-h-[calc(100vh-6rem)] lg:min-h-screen">
		<div
			class="relative row-start-1 !col-start-1 col-span-3 md:col-span-2 flex flex-col gap-6 text-center md:text-left lg:-translate-y-28">
			<h1 class="text-3xl md:text-5xl font-semi-bold">
				Bring your<br /> product to life
			</h1>
			<p class="text-lg md:text-xl max-w-screen-sm leading-9 tracking-wide">
				Nurture the essence of your product with our photography & videography services </p>
			<CTAButton class="hidden md:flex" @click="emit('contact')" />
		</div>
		<div
			class="relative row-start-2 md:row-start-1 col-start-1 md:col-start-2 col-span-3 md:col-span-2 mx-auto sm:max-w-[32rem] lg:max-w-full -z-10">
			<img :src="`/images/background.webp`" alt="background"
				class="relative right-0 bottom-0 -translate-y-[10%] md:translate-x-[10%] scale-125 lg:scale-[80%]" />
		</div>
		<CTAButton class="md:hidden row-start-3 col-start-2 justify-self-center items-center" @click="emit('contact')" />
	</section>
</template>