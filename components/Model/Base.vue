<script setup lang="ts">
const props = defineProps<{ isOpen: boolean, innerClass: string }>()
const emit = defineEmits<{
  (event: 'close'): void,
}>()
</script>

<template>
  <Teleport to="body">
    <Transition>
      <div v-if="isOpen" class="fixed inset-0 flex items-center bg-black/50 z-50 overflow-y-auto"
        @click.self="emit('close')">
        <dialog open
          class="relative mx-4 md:mx-auto max-w-[700px] w-full h-min rounded-xl text-black dark:text-white bg-light-400 dark:bg-dark-400"
          :class="innerClass">
          <button aria-label="close" class="absolute top-2 right-2" @click="emit('close')">
            <NuxtIcon name="cross" class="text-[24px] hover:text-alert-500 transition-colors duration-500 ease-out" />
          </button>
          <slot />
        </dialog>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  @apply transition-opacity duration-500 ease-out;
}

.v-enter-from,
.v-leave-to {
  @apply opacity-0
}
</style>