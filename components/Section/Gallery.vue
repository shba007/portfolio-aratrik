<script setup lang="ts">
interface Position {
	row: { start: number; span: number };
	col: { start: number; span: number };
}

const props = defineProps<{
	tabs: {
		title: Categories;
		icon: string;
	}[], activeTab: Categories
}>()

const emit = defineEmits<{ (event: 'changeTab', value: Categories): void }>()

function objectToClass({ sm, md }: { sm: Position, md: Position }, size: string) {
	const aspectRatio = { 's': 1.57, 'm': 0.67, 'l': 1.39 }[size]
	return `row-start-${sm.row.start} md:row-start-${md.row.start} row-span-${sm.row.span} md:row-span-${md.row.span} 
	col-start-${sm.col.start} md:col-start-${md.col.start} col-span-${sm.col.span} md:col-span-${md.col.span} aspect-[${aspectRatio}]`
}

const categoryImages = {
	food: getImages(['Food-002-001', 'Food-005-001', 'Food-003-001',
		'Food-006-002', 'Food-007-001', 'Food-004-001', 'Food-001-001']),
	product: getImages(['Product-004-002', 'Product-005-001', 'Product-006-001',
		'Product-007-001', 'Product-002-002', 'Product-003-001', 'Product-001-001'])
}

const images = computed<{
	url: string;
	alt: string;
	dynamicClass: string;
	autoScale: boolean;
}[]>(() => (
	[
		{
			position: {
				'sm': { row: { start: 1, span: 2 }, col: { start: 1, span: 2 } },
				'md': { row: { start: 1, span: 2 }, col: { start: 1, span: 2 } }
			},
			size: 'l',
			autoScale: true
		},
		{
			position: {
				'sm': { row: { start: 3, span: 1 }, col: { start: 1, span: 1 } },
				'md': { row: { start: 1, span: 1 }, col: { start: 3, span: 1 } }
			},
			size: 's',
			autoScale: true
		},
		{
			position: {
				'sm': { row: { start: 4, span: 1 }, col: { start: 1, span: 1 } },
				'md': { row: { start: 1, span: 1 }, col: { start: 4, span: 1 } }
			},
			size: 's',
			autoScale: true
		},
		{
			position: {
				'sm': { row: { start: 5, span: 1 }, col: { start: 2, span: 1 } },
				'md': { row: { start: 3, span: 1 }, col: { start: 1, span: 1 } }
			},
			size: 's',
			autoScale: true
		},
		{
			position: {
				'sm': { row: { start: 6, span: 1 }, col: { start: 2, span: 1 } },
				'md': { row: { start: 3, span: 1 }, col: { start: 2, span: 1 } }
			},
			size: 's',
			autoScale: true
		},
		{
			position: {
				'sm': { row: { start: 3, span: 2 }, col: { start: 2, span: 1 } },
				'md': { row: { start: 2, span: 2 }, col: { start: 3, span: 1 } }
			},
			size: 'm',
			autoScale: false
		},
		{
			position: {
				'sm': { row: { start: 5, span: 2 }, col: { start: 1, span: 1 } },
				'md': { row: { start: 2, span: 2 }, col: { start: 4, span: 1 } }
			},
			size: 'm',
			autoScale: false
		},
	].map((image, index) => {
		return {
			url: categoryImages[props.activeTab][index].id,
			alt: categoryImages[props.activeTab][index].title,
			dynamicClass: objectToClass(image.position, image.size),
			autoScale: image.autoScale
		}
	})
))
</script>

<template>
	<section id="gallery" class="relative h-fit">
		<div class="flex gap-4 mx-auto mb-4 md:mb-12 w-fit">
			<TabButton v-for="{ icon, title } in tabs" :key="title" :icon="icon" :title="title" :active="activeTab === title"
				@click="emit('changeTab', title)" />
		</div>
		<div class="relative grid grid-rows-6 sm:grid-rows-3 grid-cols-2 sm:grid-cols-4 gap-2 mx-0 sm:-mx-12">
			<NuxtImg v-for="{ url, alt, dynamicClass, autoScale } in images" :key="url" provider="uploadcare"
				:src="autoScale ? `${url}/-/scale_crop/1280x960/center/` : url + '/-/preview/1280x960/'" :alt="alt"
				class="rounded-sm w-full h-full object-cover object-top overflow-hidden" :class="dynamicClass" />
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