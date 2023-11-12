<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'


const imageSlides = {
	2: [
		[
			'Ceremony-006-001', 'Ceremony-006-003',
			'Ceremony-006-004', 'Ceremony-006-007',
			'Group-001-002', 'Group-002-001',
			'Group-003-001', 'Group-006-001',
			'Group-005-001', 'Portrait-001-001',
			'Portrait-002-001', 'Portrait-005-001',
			'Portrait-008-001', 'Portrait-010-001',
			'Portrait-011-001', 'Portrait-014-001',
			'Wedding-001-001', 'Wedding-001-003',
			'Wedding-001-004', 'Wedding-001-007',
			'Wedding-001-009', 'Wedding-001-012',
			'Wedding-001-010', 'Wedding-001-013'
		],
		[
			'Ceremony-006-002', 'Ceremony-006-006',
			'Ceremony-006-005', 'Ceremony-006-008',
			'Group-001-001', 'Group-001-003',
			'Group-004-001', 'Group-006-002',
			'Portrait-004-001', 'Portrait-007-001',
			'Portrait-003-001', 'Portrait-006-001',
			'Portrait-009-001', 'Portrait-012-001',
			'Portrait-013-001', 'Portrait-015-001',
			'Portrait-016-001', 'Wedding-001-002',
			'Wedding-001-005', 'Wedding-001-006',
			'Wedding-001-008',
			'Wedding-001-011', 'Wedding-001-014'
		],
	],
	3: [
		[
			'Ceremony-006-001', 'Ceremony-006-004',
			'Group-001-002', 'Group-003-001',
			'Group-006-001', 'Group-005-001',
			'Portrait-002-001', 'Portrait-005-001',
			'Portrait-008-001', 'Portrait-011-001',
			'Portrait-014-001', 'Wedding-001-001',
			'Wedding-001-004', 'Wedding-001-007',
			'Wedding-001-010', 'Wedding-001-013'
		],
		[
			'Ceremony-006-002', 'Ceremony-006-005',
			'Ceremony-006-008', 'Group-001-003',
			'Group-004-001', 'Group-006-002',
			'Portrait-003-001', 'Portrait-006-001',
			'Portrait-009-001', 'Portrait-012-001',
			'Portrait-015-001', 'Wedding-001-002',
			'Wedding-001-005', 'Wedding-001-008',
			'Wedding-001-011', 'Wedding-001-014'
		],
		[
			'Ceremony-006-003', 'Ceremony-006-006',
			'Ceremony-006-007', 'Group-001-001',
			'Group-002-001', 'Portrait-001-001',
			'Portrait-004-001', 'Portrait-007-001',
			'Portrait-010-001', 'Portrait-013-001',
			'Portrait-016-001', 'Wedding-001-003',
			'Wedding-001-006', 'Wedding-001-009',
			'Wedding-001-012'
		]
	],
	4: []
}

const breakpoints = useBreakpoints(breakpointsTailwind)
const mdDevices = breakpoints.greaterOrEqual('sm')

const offset = useInterval(35)

const deviceSpecificImageSlides = computed(() => {
	if (!mdDevices.value)
		return imageSlides[2]
	else
		return imageSlides[3]
})
</script>

<template>
	<main class="relative">
		<h1
			class="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-5xl md:text-[6rem] text-white text-center z-10 drop-shadow-lg">
			Aratrik Nandy
		</h1>
		<div class="px-2 md:px-4 w-screen h-screen overflow-hidden">
			<div class="relative flex gap-2 md:gap-4 h-fit transition-transform ease-linear duration-100"
				:style="{ transform: `translateY(${-offset}px)` }">
				<ImageColum v-for="images, index in deviceSpecificImageSlides" :images="images"
					:class="{ 'translate-y-5': index == 0, '-translate-y-4': index == 1, 'translate-y-12': index == 2 }" />
			</div>
		</div>
		<!-- Overlay -->
		<div
			class="fixed left-0 top-0 w-screen h-screen bg-gradient-to-b from-black/30 via-transparent to-black/30 from-1% via-10% to-99% z-20" />
	</main>
</template>