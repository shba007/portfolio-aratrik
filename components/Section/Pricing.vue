<script setup lang="ts">
import { type Options, Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';

const prices = [{
	title: 'Basic',
	price: 1000,
	points: [
		{ icon: 'photo', content: '10 Photos' },
		{ icon: 'photo', content: 'Basic editing and color correction' },
		{ icon: 'photo', content: 'High-resolution images delivered via online gallery' }
	]
}, {
	title: 'Standard',
	price: 5000,
	points: [
		{ icon: 'photo', content: '50 Photos/ 1 Minute Video' },
		{ icon: 'photo', content: 'Advanced editing, retouching, and color grading' },
		{ icon: 'photo', content: 'High-resolution images and video delivered via online gallery' }
	]
}, {
	title: 'Pro',
	price: 10000,
	points: [
		{ icon: 'photo', content: '100 Photos/ 2 Minute Video' },
		{ icon: 'photo', content: 'Extensive editing, retouching, and color grading' },
		{ icon: 'photo', content: 'High-resolution images and video delivered via online gallery' }
	]
}]

const splideOption: Options = {
	mediaQuery: 'min',
	arrows: true,
	pagination: false,
	trimSpace: true,
	focus: 'center',
	perPage: 1,
	padding: '1rem',
	gap: '-2.5rem',
	breakpoints: {
		640: {
			destroy: true,
			arrows: false,
			// perPage: 3,
			// padding: 0,
			// gap: '1.5rem',
		}
	}
};

const activeSlideIndex = ref(1)
const isModelContactOpen = ref<boolean>(false)

function onContact(action: boolean) {
	if (action) {
		isModelContactOpen.value = true
		useTrackEvent('contact_open')
	} else {
		isModelContactOpen.value = false
		useTrackEvent('contact_close')
	}
}
</script>

<template>
	<section id="pricing" class="relative -left-4 md:left-0 w-screen md:w-full">
		<Splide :options="splideOption" tag="div" :has-track="false" class=""
			@move="(slideIndex: number) => activeSlideIndex = slideIndex">
			<SplideTrack>
				<SplideSlide v-for="{ title, price, points }, index in prices" :key="title" class="flex justify-center">
					<PriceModel :active="index === activeSlideIndex" :title="title" :price="price" :points="points"
						@contact="onContact(true)" />
				</SplideSlide>
			</SplideTrack>
			<div class="splide__arrows absolute top-1/2 left-0 right-0 flex justify-between text-[24px] text-black">
				<button class="relative splide__arrow splide__arrow--prev arrow">
					<NuxtIcon name="chevron-bold" class="relative z-10" />
				</button>
				<button class="relative splide__arrow splide__arrow--next arrow scale-x-[-1]">
					<NuxtIcon name="chevron-bold" class="relative z-10" />
				</button>
			</div>
		</Splide>
		<ModelContact :is-open="isModelContactOpen" @close="onContact(false)" />
	</section>
</template>

<style scoped>
:deep(.splide__list) {
	@apply md:!flex md:justify-between md:items-center md:w-full;
}

.arrow {
	@apply before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-translate-x-1/2 before:block before:rounded-xl before:size-16 before:rotate-45 before:bg-primary-500 active:before:bg-primary-400 before:transition-colors before:duration-500 before:ease-out;
}
</style>