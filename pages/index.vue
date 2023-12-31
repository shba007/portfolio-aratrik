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
	'Wedding-001-013', 'Wedding-001-014'
]

const breakpoints = useBreakpoints(breakpointsTailwind)
const mdDevices = breakpoints.greaterOrEqual('sm')

const container = ref()
const offset = useInterval(25)

const { y } = useScroll(container, { behavior: 'smooth' })

watch(y, (value) => {
	offset.value = value
})

watch(offset, (value) => {
	y.value = value
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
	<header class="fixed top-0 left-0 right-0 z-50">
		<Navbar />
	</header>
	<main class="relative">
		<div
			class="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-5xl md:text-[6rem] text-white text-center z-10 drop-shadow-lg">
			<NuxtImg src="/logo-light.png" alt="Aratrik Nandy" class="w-[30rem]" />
		</div>
		<div ref="container" class="px-2 md:px-4 h-screen overflow-y-scroll overlay">
			<div class="flex gap-2 md:gap-4">
				<ClientOnly>
					<div v-for="images, index in imageSlides" :key="index" class="flex flex-col gap-2 md:gap-4"
						:class="{ 'translate-y-5': index == 0, '-translate-y-4': index == 1, 'translate-y-12': index == 2 }">
						<img v-for="image in images" :key="image" :src="`/images/${image}.webp`" :alt="image"
							class="w-full object-cover rounded-sm md:rounded-md" />
					</div>
				</ClientOnly>
			</div>
		</div>
	</main>
</template>

<style scoped>
.overlay {
	@apply after:content-[''] after:fixed after:left-0 after:top-0 after:w-screen after:h-screen after:bg-gradient-to-b after:from-black/40 after:via-transparent after:to-black/40 after:from-[3%] after:via-20% after:to-[97%] after:z-20
}
</style>