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
		'69dcabdd-d9da-419a-a823-285d34db4f95',
		'badf3211-af49-4991-b573-303d8f485440',
		'd4857636-289b-4e4d-a29f-8e3a42617eb4',
		'9d7e283c-f017-40f5-b688-8af1a6f5d84c',
		'17b026dd-bc91-4c14-bb34-9901e13ba7f8',
		'9e82456d-78e0-4df0-a152-566327697ef7',
		'50071c98-e75c-4673-a105-1ae104b6eb35',
		// '69dcabdd-d9da-419a-a823-285d34db4f95',
		// '937b5072-2414-4d42-9006-5314f0b1682a',
		// '937b5072-2414-4d42-9006-5314f0b1682a',

	],
	product: [
		'f0bd8b64-1730-412e-a5cf-a9161c393ce6',
		'9a34beb4-211d-418b-afe4-727b36a64039',
		'c048ef8c-20d4-4b6b-be6f-103a56b2ba8b',
		'2d58b5fe-7552-4022-8bda-0f22a042eda2',
		'76d57406-39d6-42bb-b1e4-5b0c2d0f48e3',
		'c2a0dbd9-0ad4-4526-9f2f-3e95c2e3957d',
		'3011bb6e-b6cc-4de8-b829-793e17a23db9',
		// 'bfec22b7-c27b-4ad3-9765-9d33484d6723',
		// '50071c98-e75c-4673-a105-1ae104b6eb35',

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

function autoScaling({ row, col }: {
	row: { start: number; span: number };
	col: { start: number; span: number };
}) {
	if (mdDevices.value) {
		if (row.start === 1 && col.start > 1)
			return true
		else if (row.start === 3 && col.start < 3)
			return true
		else
			return false
	} else {
		if (col.start === 1 && row.start > 2 && row.start < 5)
			return true
		else if (col.start === 2 && row.start > 4)
			return true
		else
			return false
	}
}
</script>

<template>
	<section id="gallery" class="relative h-fit">
		<div class="flex gap-4 mx-auto mb-4 md:mb-12 w-fit">
			<TabButton v-for="{ icon, title } in tabs" :key="title" :icon="icon" :title="title" :active="activeTab === title"
				@click="changeActiveTab(title)" />
		</div>
		<div class="relative grid grid-rows-6 sm:grid-rows-3 grid-cols-2 sm:grid-cols-4 gap-2 mx-0 sm:-mx-12">
			<ClientOnly>
				<NuxtImg v-for="{ position, size, url, alt } in images" :key="alt" provider="uploadcare"
					:src="autoScaling(position) ? `${url}/-/scale_crop/1280x960/center/` : url"
					:alt="`alt-${JSON.stringify(position)}`" loading="lazy"
					class="rounded-sm w-full h-full object-cover object-top overflow-hidden"
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