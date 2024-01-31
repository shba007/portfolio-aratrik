<script setup lang="ts">
const props = withDefaults(defineProps<{
	icon: string,
	title: string,
	active?: boolean
}>(), {
	active: false
})
</script>

<template>
	<button
		class="flex justify-center items-center gap-2 rounded-full pl-3 md:pl-5 pr-4 md:pr-6 py-1.5 md:py-2 transition-colors"
		:class="{ 'bg-primary-500 hover:bg-primary-400 text-dark-600 hover:text-black': active, 'bg-dark-600 hover:bg-dark-500 text-primary-500 hover:text-primary-400': !active }">
		<NuxtIcon :name="icon" class="text-[20px] md:text-[32px]" />
		<span class="text-sm md:text-lg font-semi-bold capitalize translate-y-0.5">{{ title }}</span>
	</button>
</template>