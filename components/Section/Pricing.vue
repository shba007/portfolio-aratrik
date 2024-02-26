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
	arrows: false,
	trimSpace: true,
	perPage: 1,
	padding: '2.5rem',
	gap: '0.5rem',
	breakpoints: {
		640: {
			perPage: 3,
			padding: 0,
			gap: '1.5rem',
			focus: 'center',
			destroy: true,
		}
	}
};

const activeSlideIndex = ref(1)
</script>

<template>
	<section id="pricing" class="relative -left-4 md:left-0 w-screen md:w-full">
		<Splide :options="splideOption" tag="div" :has-track="false" class=""
			@move="(slideIndex: number) => activeSlideIndex = slideIndex">
			<SplideTrack>
				<SplideSlide v-for="{ title, price, points }, index in prices" :key="title">
					<PriceModel :active="index === activeSlideIndex" :title="title" :price="price" :points="points" />
				</SplideSlide>
			</SplideTrack>
		</Splide>
	</section>
</template>

<style>
.splide__list {
	@apply md:!flex md:justify-between md:items-center md:w-full
}
</style>