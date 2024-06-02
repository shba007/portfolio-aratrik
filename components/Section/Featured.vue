<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const images = getImages([
	'Food-004-001', 'Food-002-001', 'Food-003-001', 'Food-001-001',
	'Food-005-001', 'Food-007-001', 'Food-006-001', 'Food-009-001',
	'Food-008-001', 'Food-006-002', 'Product-001-001', 'Product-003-001',
	'Product-004-001', 'Product-005-001', 'Product-006-001', 'Product-007-001',
	'Product-002-001'
])

const breakpoints = useBreakpoints(breakpointsTailwind)
const mdDevices = breakpoints.greaterOrEqual('sm')

const container = ref<HTMLDivElement | null>(null)
const { height: containerHeight } = useElementSize(container)
const slider = ref<HTMLDivElement | null>(null)
const { height: sliderHeight } = useElementSize(slider)

const offsetFactor = 100
const counter = useInterval(1800)
const offset = computed(() => counter.value * offsetFactor)
const isSliderVisible = ref(true)
const isEndVisible = ref(false)

watch(offset, (value) => {
	if (offset.value >= -(containerHeight.value * (3 / 4)) && offset.value <= (sliderHeight.value - containerHeight.value * (2 / 5)))
		isEndVisible.value = false
	else
		isEndVisible.value = true

	if (offset.value > -(containerHeight.value + 2 * offsetFactor))
		isSliderVisible.value = true
	if (value > sliderHeight.value)
		isSliderVisible.value = false
	if (value > sliderHeight.value + 2 * offsetFactor)
		counter.value = -(containerHeight.value + 2 * offsetFactor) / offsetFactor
})

const imageSlides = computed(() => {
	const noOfSlides = !mdDevices.value ? 2 : 3
	const slides: { id: string, title: string }[][] = new Array(noOfSlides).fill(null).map(_ => [])

	images.forEach((image, index) => {
		slides[index % noOfSlides].push(image)
	});

	return slides
})
</script>

<template>
	<section ref="container" id="featured"
		class="relative mx-0 md:-mx-12 h-screen overflow-hidden z-0 bg-light-400 dark:bg-dark-400">
		<div v-show="isSliderVisible" ref="slider" class="relative flex gap-2 transition-all duration-[2s] ease-linear z-10"
			:style="{ translate: `0 ${-offset}px` }">
			<!-- <ClientOnly> -->
			<div v-for="images, index in imageSlides" :key="index" class="flex-1 flex flex-col gap-2"
				:class="{ 'translate-y-5': index == 0, '-translate-y-4': index == 1, 'translate-y-12': index == 2 }">
				<NuxtImg v-for="{ id, title } in images" :key="id" provider="uploadcare" :src="id + '/-/preview/1280x960/'"
					:alt="title" class="w-full object-cover rounded-sm" />
			</div>
			<!-- </ClientOnly> -->
		</div>
		<Transition>
			<div v-show="isEndVisible"
				class="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center w-full h-full text-primary-500">
				<NuxtIcon name="logo-full" class="text-[196px] md:text-[356px] drop-shadow-md" />
			</div>
		</Transition>
	</section>
</template>

<style scoped>
.overlay {
	@apply after:content-[''] after:fixed after:left-0 after:top-0 after:w-screen after:h-screen after:bg-gradient-to-b after:from-black/40 after:via-transparent after:to-black/40 after:from-[3%] after:via-20% after:to-[97%] after:z-20
}

.v-enter-active,
.v-leave-active {
	@apply transition duration-[3000ms];
}

.v-enter-from,
.v-leave-to {
	@apply opacity-0 scale-90;
}
</style>