<script setup lang="ts">
const props = defineProps<{
	images: string[]
}>()
</script>

<template>
	<div class="flex flex-col gap-2 md:gap-4">
		<NuxtImg v-for="image in images" :key="image" :src="`/images/${image}.webp`" :alt="image"
			class="w-full object-cover rounded-sm md:rounded-md" />
	</div>
</template>