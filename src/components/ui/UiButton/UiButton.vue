<script setup lang="ts">
import type {UiButtonProps} from "@/components/ui/UiButton/UiButtonProps";

const {type = 'primary', nativeType = 'button', isBlock = false} = defineProps<UiButtonProps>();
</script>

<template>
  <button :type="nativeType" class="ui-button" :class="['ui-button--' + type, {'block': isBlock}]">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
  .ui-button {
    @apply cursor-pointer  p-2 rounded flex align-middle w-fit;

    &.block {
      @apply w-full justify-center;
    }

    &--primary {
      @apply text-teal-700
      bg-teal-500/20
      hover:bg-teal-500/10
      dark:brightness-150 brightness-110;
    }

    &--text {
      @apply text-white
      hover:bg-sky-300/10
      dark:brightness-150 brightness-110;
    }


    &--danger {
      @apply text-red-700
      bg-rose-500/20
      hover:bg-rose-500/10
      dark:brightness-150 brightness-110;
    }

    &--warning {
      @apply text-amber-700
      bg-amber-500/20
      hover:bg-amber-500/10
      dark:brightness-150 brightness-110;
    }

    &--success {
      @apply text-emerald-700
      bg-emerald-500/20
      hover:bg-emerald-500/10
      dark:brightness-150 brightness-110;
    }
  }
</style>