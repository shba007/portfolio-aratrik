<script setup lang="ts">
import type { Categories } from '~/utils/types';

const isModelContactOpen = ref<boolean>(false)

function onContact(action: boolean) {
	if (action) {
		isModelContactOpen.value = true
		useTrackEvent('contact_open')
	} else {
		isModelContactOpen.value = false
		useTrackEvent('contact_close')
	}
}

const tabs = ref([{
	icon: 'pizza',
	title: 'food' as const
}, {
	icon: 'box',
	title: 'product' as const
}])

const activeTab = ref<'food' | 'product'>('food')

function changeActiveTab(tab: Categories) {
	activeTab.value = tab
}
</script>

<template>
	<header class="absolute top-0 left-0 right-0 mx-auto px-4 md:px-16 max-w-[90rem]">
		<Navbar />
	</header>
	<main class="relative flex flex-col gap-4 md:gap-16 mx-auto p-4 md:p-16 !pb-0 max-w-[90rem] overflow-hidden">
		<SectionHero @contact="onContact(true)" />
		<SectionFeatured />
		<SectionGallery :tabs="tabs" :active-tab="activeTab" @change-tab="changeActiveTab" />
		<SectionPricing :tabs="tabs" :active-tab="activeTab" @change-tab="changeActiveTab" />
		<!-- <SectionTestimonial /> -->
		<ModelContact :is-open="isModelContactOpen" @close="onContact(false)" />
	</main>
	<footer
		class="relative grid grid-cols-2 md:grid-cols-3 grid-rows-2 md:grid-rows-3 items-end m-4 md:m-8 rounded-3xl p-6 md:p-8 h-52 bg-light-500 dark:bg-dark-500 text-dark-600/50 dark:text-light-600 overflow-hidden z-0">
		<div class="relative row-start-2 md:row-start-3 col-start-1 justify-self-start flex flex-col gap-2 text-sm">
			<NuxtIcon name="logo"
				class="absolute top-0 -left-[60px] md:-left-[104px] -translate-y-[56%] md:-translate-y-[37%] text-[309px] md:text-[560px] text-white opacity-10 -z-10" />
			<span>&copy; 2024-2025</span>
			<NuxtLink to="https://shirsendu-bairagi.dev" target="__blank" class="flex items-center gap-1">
				<span>Made by</span>
				<NuxtIcon name="shba007" filled class="text-[20px]" />
			</NuxtLink>
		</div>
		<CTAButton :primary="false"
			class="row-start-1 md:row-start-2 col-start-1 md:col-start-2 col-span-2 md:col-span-1 justify-self-center self-center"
			@click="onContact(true)" />
		<ul
			class="row-start-2 md:row-start-3 col-start-2 md:col-start-3 justify-self-end flex gap-4 md:gap-8 hover:*:text-white *:transition-colors *:duration-500 *:ease-out">
			<li>
				<NuxtLink to="https://www.facebook.com/profile.php?id=100084481593671" target="_blank">
					<NuxtIcon name="facebook" class="text-[28px] md:text-[40px]" />
				</NuxtLink>
			</li>
			<li>
				<NuxtLink to="https://www.instagram.com/photos_by_aratrik/" target="_blank">
					<NuxtIcon name="instagram" class="text-[28px] md:text-[40px]" />
				</NuxtLink>
			</li>
			<li>
				<NuxtLink to="https://www.youtube.com/" target="_blank">
					<NuxtIcon name="youtube" class="text-[28px] md:text-[40px]" />
				</NuxtLink>
			</li>
		</ul>
	</footer>
</template>