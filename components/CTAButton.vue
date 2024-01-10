<script setup lang="ts">
const { primary } = withDefaults(defineProps<{ primary?: boolean }>(), { primary: true })
</script>

<template>
	<button
		class="flex justify-between items-center gap-4 md:gap-5 rounded-full p-1 md:p-2 pl-5 md:pl-6 w-fit h-fit text-sm md:text-lg font-semi-bold"
		:class="primary ? 'text-dark-400 bg-primary-500' : 'text-primary-500 bg-dark-400'">
		<span class="whitespace-nowrap">Book a Session</span>
		<span class="relative rounded-full p-2 md:p-3 rotate-180" :class="primary ? 'bg-dark-400' : 'bg-primary-500'">
			<NuxtIcon name="chevron-bold" class="relative text-[16px] md:text-[24px] translate-x-2"
				:class="primary ? 'text-primary-500' : 'text-dark-400'" />
		</span>
	</button>
</template>