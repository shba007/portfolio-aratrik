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
		class="flex justify-center items-center gap-2 rounded-full pl-3 md:pl-5 pr-4 md:pr-6 py-1.5 md:py-2 transition-colors duration-300 ease-out"
		:class="{ 'bg-primary-500 hover:bg-primary-400  dark:text-dark-600 dark:hover:text-black': active, 'bg-light-600 dark:bg-dark-600 hover:bg-light-500 dark:hover:bg-dark-500 text-dark-400 dark:text-primary-500 hover:text-dark-500 dark:hover:text-primary-400': !active }">
		<NuxtIcon :name="icon" class="text-[20px] md:text-[32px]" />
		<span class="text-sm md:text-lg font-semi-bold capitalize translate-y-0.5">{{ title }}</span>
	</button>
</template>