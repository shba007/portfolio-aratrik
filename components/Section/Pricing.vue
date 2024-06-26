<script setup lang="ts">
import { type Options, Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';

const props = defineProps<{
	tabs: {
		title: Categories;
		icon: string;
	}[], activeTab: Categories
}>()

const emit = defineEmits<{ (event: 'changeTab', value: Categories): void }>()

const prices = {
	'food': [{
		title: 'Basic Photography',
		price: 3500,
		unit: 'session',
		points: [
			{ icon: 'photo', content: '20 Photos' },
			{ icon: 'photo', content: 'Basic editing, color correction' },
			{ icon: 'photo', content: 'High-resolution images delivered via online gallery' }
		]
	}, {
		title: 'Premium Photography',
		price: 5500,
		unit: 'session',
		points: [
			{ icon: 'photo', content: '20 Photos' },
			{ icon: 'photo', content: 'Advanced editing, retouching, and color correction ' },
			{ icon: 'photo', content: 'High-resolution images delivered via online gallery' }
		]
	}, {
		title: 'Standard Videography',
		price: 3500,
		unit: 'session',
		points: [
			{ icon: 'photo', content: '1 Minute Video' },
			{ icon: 'photo', content: 'Extensive editing, retouching, and color grading' },
			{ icon: 'photo', content: 'High-resolution video delivered via online gallery' }
		]
	}], 'product': [{
		title: 'Basic Photography',
		price: 100,
		unit: 'photo',
		points: [
			{ icon: 'photo', content: '20 Photos' },
			{ icon: 'photo', content: 'Basic editing, color correction' },
			{ icon: 'photo', content: 'High-resolution images delivered via online gallery' }
		]
	}, {
		title: 'Premium Photography',
		price: 200,
		unit: 'photo',
		points: [
			{ icon: 'photo', content: '20 Photos' },
			{ icon: 'photo', content: 'Dynamic angle, retouching, and color correction' },
			{ icon: 'photo', content: 'High-resolution images delivered via online gallery' }
		]
	}, {
		title: 'Standard Videography',
		price: 800,
		unit: 'video',
		points: [
			{ icon: 'photo', content: '30 Second Video' },
			{ icon: 'photo', content: 'Extensive editing, retouching, and color grading' },
			{ icon: 'photo', content: 'High-resolution video delivered via online gallery' }
		]
	}]
}

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
		<div class="flex gap-4 mx-auto mb-4 md:mb-12 w-fit">
			<TabButton v-for="{ icon, title } in tabs" :key="title" :icon="icon" :title="title" :active="activeTab === title"
				@click="emit('changeTab', title)" />
		</div>
		<Splide :options="splideOption" tag="div" :has-track="false"
			@move="(slideIndex: number) => activeSlideIndex = slideIndex">
			<SplideTrack>
				<SplideSlide v-for="{ title, price, unit, points }, index in prices[activeTab]" :key="title"
					class="flex justify-center">
					<ModelPrice :active="index === activeSlideIndex" :title="title" :price="price" :unit="unit" :points="points"
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