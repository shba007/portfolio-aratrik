<script setup lang="ts">
const props = defineProps<{
	active: boolean,
	title: string,
	price: number,
	unit: string,
	points: {
		icon: string,
		content: string
	}[]
}>()

const emit = defineEmits<{
	(event: 'contact'): void
}>()
</script>

<template>
	<div
		class="flex flex-col justify-between items-center md:mx-auto my-4 rounded-[2.75rem] md:rounded-[4.4rem] px-5 md:px-9 py-8 md:py-12 w-[254px] md:w-[323px] xl:w-[392px] aspect-[5/8] bg-light-500 dark:bg-dark-500"
		:class="{ 'border border-primary-500 scale-105': active }">
		<h2 class="text-center text-lg md:text-2xl text-primary-500 w-min">{{ title }}</h2>
		<span class="flex gap-2 justify-center items-center">
			<h1 class="text-center text-3xl md:text-3xl">₹{{ price }}</h1>
			<h6>/ {{ unit }}</h6>
		</span>
		<ul class="flex flex-col gap-3 md:gap-5 w-full">
			<li v-for="{ icon, content } in points" :key="icon"
				class="relative flex items-center gap-3 rounded-2xl px-4 py-3 w-full text-center bg-light-400 dark:bg-dark-400 overflow-hidden before:content-[''] before:absolute before:left-0 before:rounded-full before:w-[3px] before:h-[26px] before:bg-primary-500 after:content-[''] after:absolute after:right-0 after:rounded-full after:w-[3px] after:h-[26px] after:bg-primary-500">
				<NuxtIcon :name="icon" class="text-[24px] md:text-[36px] text-primary-500" />
				<span class="text-left text-2xs md:text-base">{{ content }}</span>
			</li>
		</ul>
		<button
			class="rounded-xl md:rounded-3xl px-7 md:px-10 py-2 md:py-4 text-xs md:text-lg font-semi-bold text-black bg-primary-500 hover:bg-primary-400 transition-colors duration-300 ease-out"
			@click="$emit('contact')">
			Contact
		</button>
	</div>
</template>