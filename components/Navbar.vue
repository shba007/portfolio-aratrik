<script setup lang="ts">
function onNavigate(section: string) {
	useTrackEvent('navigate', {
		section
	})
}
</script>

<template>
	<nav class="relative grid grid-cols-3 items-center z-20">
		<NuxtLink to="/">
			<NuxtIcon name="logo-full" class="text-[96px] md:text-[128px]" />
		</NuxtLink>
		<ul class="hidden md:flex gap-8 justify-center">
			<li><NuxtLink to="#featured" @click="onNavigate('featured')">Featured</NuxtLink></li>
			<li><NuxtLink to="#gallery" @click="onNavigate('gallery')">Gallery</NuxtLink></li>
			<li><NuxtLink to="#pricing" @click="onNavigate('pricing')">Pricing</NuxtLink></li>
			<!-- <li><NuxtLink to="#testimonials" @click="onNavigate('testimonials')">Testimonials</NuxtLink></li> -->
		</ul>
		<div class="col-start-3 justify-self-end -translate-y-1/2">
			<ColorModeButton />
		</div>
	</nav>
</template>