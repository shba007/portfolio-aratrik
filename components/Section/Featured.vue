<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const images = [
	'Ceremony-006-001', 'Ceremony-006-002', 'Ceremony-006-003',
	'Ceremony-006-004', 'Ceremony-006-005', 'Ceremony-006-006',
	'Ceremony-006-007', 'Ceremony-006-008', 'Group-001-001',
	'Group-001-002', 'Group-001-003', 'Group-002-001',
	'Group-003-001', 'Group-004-001', 'Group-005-001',
	'Group-006-001', 'Group-006-002', 'Portrait-001-001',
	'Portrait-002-001', 'Portrait-003-001', 'Portrait-004-001',
	'Portrait-005-001', 'Portrait-006-001', 'Portrait-007-001',
	'Portrait-008-001', 'Portrait-009-001', 'Portrait-010-001',
	'Portrait-011-001', 'Portrait-012-001', 'Portrait-013-001',
	'Portrait-014-001', 'Portrait-015-001', 'Portrait-016-001',
	'Wedding-001-001', 'Wedding-001-002', 'Wedding-001-003',
	'Wedding-001-004', 'Wedding-001-005', 'Wedding-001-006',
	'Wedding-001-007', 'Wedding-001-008', 'Wedding-001-009',
	'Wedding-001-010', 'Wedding-001-011', 'Wedding-001-012',
	'Wedding-001-013', 'Wedding-001-014', 'Food-001-001',
	'Food-001-002', 'Food-001-003', 'Food-001-004',
	'Food-001-005', 'Food-001-006', 'Food-001-007'
]

const breakpoints = useBreakpoints(breakpointsTailwind)
const mdDevices = breakpoints.greaterOrEqual('sm')
const container = ref<HTMLDivElement | null>(null)
const { height: containerHeight } = useElementSize(container)
const slider = ref<HTMLDivElement | null>(null)
const { height: sliderHeight } = useElementSize(slider)

const counter = useInterval(75)
const offset = computed(() => counter.value * 5)
const isViewVisible = ref(true)

watch(offset, (value) => {
	if (offset.value > -(containerHeight.value + 50))
		isViewVisible.value = true
	if (value > sliderHeight.value)
		isViewVisible.value = false
	if (value > sliderHeight.value + 50)
		counter.value = -(containerHeight.value + 100) / 5
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
	<section ref="container" id="featured" class="relative mx-0 md:-mx-12 h-screen overflow-hidden">
		<div ref="slider" class="relative flex gap-2 md:gap-4 transition-all ease-linear"
			:class="{ 'invisible': !isViewVisible }" :style="{ translate: `0 ${-offset}px` }">
			<ClientOnly>
				<div v-for="images, index in imageSlides" :key="index" class="flex flex-col gap-2 md:gap-4"
					:class="{ 'translate-y-5': index == 0, '-translate-y-4': index == 1, 'translate-y-12': index == 2 }">
					<img v-for="image in images" :key="image" :src="`/images/photos/${image}.webp`" :alt="image" loading="lazy"
						class="w-full object-cover rounded-sm md:rounded-md" />
				</div>
			</ClientOnly>
		</div>
	</section>
</template>

<style scoped>
.overlay {
	@apply after:content-[''] after:fixed after:left-0 after:top-0 after:w-screen after:h-screen after:bg-gradient-to-b after:from-black/40 after:via-transparent after:to-black/40 after:from-[3%] after:via-20% after:to-[97%] after:z-20
}
</style>