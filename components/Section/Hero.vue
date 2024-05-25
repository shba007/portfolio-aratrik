<script setup lang="ts">
const emit = defineEmits<{ (event: 'contact'): void }>()
const images = ref([
	'fa4134de-c4ef-467f-b750-a5f6b6d8a3fb',
	'c048ef8c-20d4-4b6b-be6f-103a56b2ba8b',
	'cfed72bc-cbfa-4ab0-b30c-1eb17ae431b2'
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
			class="gradient-mask row-start-2 md:row-start-1 col-start-1 md:col-start-2 col-span-3 md:col-span-2 relative flex md:flex-col gap-4 justify-center items-center mx-auto sm:max-w-[32rem] lg:max-w-full lg:h-screen -z-10">
			<NuxtImg v-for="image, index in images" :key="image" :src="image + '/-/resize/1600x900/'" :alt="image"
				provider="uploadcare" class="rounded-full md:translate-x-[10%] lg:scale-[80%] aspect-video"
				:class="{ '-rotate-6': index !== 1 }" />
		</div>
		<CTAButton class="md:hidden row-start-3 col-start-2 justify-self-center items-center" @click="emit('contact')" />
	</section>
</template>

<style scoped>
.gradient-mask {
	@apply md:[mask-image:linear-gradient(0deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_20%,rgba(0,0,0,1)_50%,rgba(0,0,0,1)_80%,rgba(0,0,0,0)_100%)];
}
</style>