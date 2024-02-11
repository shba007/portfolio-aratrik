<script setup lang="ts">
const emit = defineEmits<{ (event: 'contact'): void }>()
</script>

<template>
	<section id="hero"
		class="relative grid grid-rows-[repeat(3,min-content)] md:grid-rows-1 grid-cols-3 items-center gap-y-[4.5rem] mt-24 lg:mt-0 min-h-[calc(100vh-6rem)] lg:min-h-screen">
		<div class="row-start-1 !col-start-1 col-span-3 md:col-span-2 flex flex-col gap-6 text-center md:text-left">
			<h1 class="text-3xl md:text-5xl font-semi-bold">Capture the <br />memorable moments</h1>
			<p class="text-lg md:text-xl leading-9 tracking-wide">Moments are too precious, <br />it should be chariest life
				long</p>
			<CTAButton class="hidden md:flex" @click="emit('contact')" />
		</div>
		<div
			class="relative row-start-2 md:row-start-1 col-start-1 md:col-start-2 col-span-3 md:col-span-2 mx-auto md:max-w-[35rem] lg:max-w-full -z-10">
			<img :src="`/images/background-light.webp`" alt="background"
				class="dark:hidden relative right-0 bottom-0 -translate-y-[10%] -translate-x-[25%] md:-translate-x-[10%] scale-[165%] lg:scale-125" />
			<img :src="`/images/background-dark.webp`" alt="background"
				class="hidden dark:inline relative right-0 bottom-0 -translate-y-[10%] -translate-x-[25%] md:-translate-x-[10%] scale-[165%] lg:scale-125" />
		</div>
		<CTAButton class="md:hidden row-start-3 col-start-2 justify-self-center items-center" @click="emit('contact')" />
	</section>
</template>