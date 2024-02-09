<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const tabs = ref([{
	icon: 'pizza',
	title: 'food'
}, {
	icon: 'box',
	title: 'product'
}] as const)

const activeTab = ref<'food' | 'product'>('food')

function changeActiveTab(newTab: 'food' | 'product') {
	activeTab.value = newTab
}

const breakpoints = useBreakpoints(breakpointsTailwind)
const mdDevices = breakpoints.greaterOrEqual('sm')

const categoryImages = {
	food: [
		'Portrait-002-001', 'Portrait-003-001', 'Portrait-004-001',
		'Portrait-005-001', 'Portrait-006-001', 'Portrait-007-001',
		'Portrait-008-001', 'Portrait-009-001', 'Portrait-010-001',
		'Portrait-011-001', 'Portrait-012-001', 'Portrait-013-001',
	],
	product: [
		'Wedding-001-002', 'Wedding-001-003', 'Wedding-001-004',
		'Wedding-001-005', 'Wedding-001-006', 'Wedding-001-007',
		'Wedding-001-008', 'Wedding-001-009', 'Wedding-001-010',
		'Wedding-001-011', 'Wedding-001-012', 'Wedding-001-013',
	]
}

const images = computed<{
	position: {
		row: { start: number; span: number };
		col: { start: number; span: number };
	};
	size: string;
	url: string;
	alt: string
}[]>(() => (
	[
		{
			position: { row: { start: 1, span: 2 }, col: { start: 1, span: 2 } },
			size: 'l',
		},
		{
			position: !mdDevices.value ? { row: { start: 3, span: 1 }, col: { start: 1, span: 1 } } : { row: { start: 1, span: 1 }, col: { start: 3, span: 1 } },
			size: 's',
		},
		{
			position: !mdDevices.value ? { row: { start: 4, span: 1 }, col: { start: 1, span: 1 } } : { row: { start: 1, span: 1 }, col: { start: 4, span: 1 } },
			size: 's',
		},
		{
			position: !mdDevices.value ? { row: { start: 5, span: 1 }, col: { start: 2, span: 1 } } : { row: { start: 3, span: 1 }, col: { start: 1, span: 1 } },
			size: 's',
		},
		{
			position: !mdDevices.value ? { row: { start: 6, span: 1 }, col: { start: 2, span: 1 } } : { row: { start: 3, span: 1 }, col: { start: 2, span: 1 } },
			size: 's',
		},
		{
			position: !mdDevices.value ? { row: { start: 3, span: 2 }, col: { start: 2, span: 1 } } : { row: { start: 2, span: 2 }, col: { start: 3, span: 1 } },
			size: 'm',
		},
		{
			position: !mdDevices.value ? { row: { start: 5, span: 2 }, col: { start: 1, span: 1 } } : { row: { start: 2, span: 2 }, col: { start: 4, span: 1 } },
			size: 'm',
		},
	].map((image: any, index) => {
		image.url = categoryImages[activeTab.value][index]
		image.alt = image.url
		return image
	})
))

function objectToClass({ row, col }: {
	row: { start: number; span: number };
	col: { start: number; span: number };
}, size: string) {
	const aspectRatio = { 's': 1.57, 'm': 0.67, 'l': 1.39 }[size]
	return `row-start-${row.start} row-span-${row.span} col-start-${col.start} col-span-${col.span} aspect-[${aspectRatio}]`
}
</script>

<template>
	<section id="gallery" class="relative min-h-screen">
		<div class="flex gap-4 mx-auto mb-4 md:mb-12 w-fit">
			<TabButton v-for="{ icon, title } in tabs" :key="title" :icon="icon" :title="title" :active="activeTab === title"
				@click="changeActiveTab(title)" />
		</div>
		<div class="relative grid grid-rows-6 md:grid-rows-3 grid-cols-2 md:grid-cols-4 gap-4 mx-0 md:-mx-12">
			<ClientOnly>
				<img v-for="{ position, size, url, alt } in images" :key="alt" :src="`/images/photos/${url}.webp`" :alt="alt"
					loading="lazy" class="rounded-md w-full h-full object-cover object-top overflow-hidden"
					:class="objectToClass(position, size)" />
			</ClientOnly>
		</div>
	</section>
</template>

<style scoped>
.img-dynamic {
	@apply row-start-1 row-span-1 col-start-1 col-span-1 aspect-[1.57];
	@apply row-start-2 row-span-2 col-start-2 col-span-2 aspect-[0.67];
	@apply row-start-3 col-start-3 aspect-[1.39];
	@apply row-start-5 col-start-5;
}
</style>