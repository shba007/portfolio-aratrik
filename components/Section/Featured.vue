<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const images = [
	// Food
	'9e82456d-78e0-4df0-a152-566327697ef7',
	'69dcabdd-d9da-419a-a823-285d34db4f95',
	'd4857636-289b-4e4d-a29f-8e3a42617eb4',
	'50071c98-e75c-4673-a105-1ae104b6eb35',
	'badf3211-af49-4991-b573-303d8f485440',
	'17b026dd-bc91-4c14-bb34-9901e13ba7f8',
	'937b5072-2414-4d42-9006-5314f0b1682a',
	'7873bdc2-a518-440d-a8d9-9dd5a13f332e',
	'2c3e85c4-5562-4bc6-91bb-5ffb2cf95160',
	// Profucts
	'3011bb6e-b6cc-4de8-b829-793e17a23db9',
	'c2a0dbd9-0ad4-4526-9f2f-3e95c2e3957d',
	'bfec22b7-c27b-4ad3-9765-9d33484d6723',
	'9a34beb4-211d-418b-afe4-727b36a64039',
	'fa4134de-c4ef-467f-b750-a5f6b6d8a3fb',
	'35899c6d-4a02-4979-bf88-55afe2d48a07',
	'ab7cab7e-d43e-4c48-a0e6-845db7b14c1d'
]

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
	const slides: string[][] = new Array(noOfSlides).fill(null).map(_ => [])

	images.forEach((image, index) => {
		slides[index % noOfSlides].push(image)
	});

	return slides
})
</script>

<template>
	<section ref="container" id="featured" class="relative mx-0 md:-mx-12 h-screen overflow-hidden z-0 bg-dark-400">
		<div v-show="isSliderVisible" ref="slider" class="relative flex gap-2 transition-all duration-[2s] ease-linear z-10"
			:style="{ translate: `0 ${-offset}px` }">
			<div v-for="images, index in imageSlides" :key="index" class="flex-1 flex flex-col gap-2"
				:class="{ 'translate-y-5': index == 0, '-translate-y-4': index == 1, 'translate-y-12': index == 2 }">
				<NuxtImg v-for="image in images" :key="image" provider="uploadcare" :src="image + '/-/preview/1280x960/'"
					:alt="image" class="w-full object-cover rounded-sm" />
			</div>
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