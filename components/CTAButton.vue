<script setup lang="ts">
const { primary } = withDefaults(defineProps<{ primary?: boolean }>(), { primary: true })
</script>

<template>
	<button
		class="flex justify-between items-center gap-3 md:gap-5 rounded-full p-[6px] md:p-2 pl-5 md:pl-6 w-fit h-fit text-base md:text-lg font-semi-bold hover:text-dark-400 hover:bg-primary-400 transition-colors duration-500 ease-out z-10"
		:class="primary ? 'text-dark-400 bg-primary-500' : 'text-dark-400 dark:text-primary-500 bg-light-400 dark:bg-dark-400'">
		<span class="whitespace-nowrap">Book a Session</span>
		<span class="rounded-full p-2 md:p-3 rotate-180" :class="primary ? 'bg-white dark:bg-dark-400' : 'bg-primary-500'">
			<NuxtIcon name="chevron-bold" class="text[20px] md:text-[24px]"
				:class="primary ? 'text-dark-400 dark:text-primary-500' : 'text-dark-400'" />
		</span>
	</button>
</template>