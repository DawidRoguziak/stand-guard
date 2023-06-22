<script setup lang="ts">
import {v4 as uuidv4} from 'uuid';
import {computed, ref, useSlots, watchEffect} from "vue";
import type UiModalProps from "@/components/utility/UiModal/UiModalProps";

const id = uuidv4();
const dialogId = computed(() => id);

const {size = 'medium'} = defineProps<UiModalProps>()
const isOpenClass = ref<boolean>(false);
const isOpen = defineModel('isOpen', {
  required: false,
  type: Boolean,
  default: false,
});

const modalRef = ref<HTMLDialogElement>();
const slots = useSlots();
const hasFooterSlot = computed(() => !!slots['footer']);

const open = () => {
  modalRef.value?.showModal();
  isOpenClass.value = true;
}

const close = () => {
  modalRef.value?.close();
  isOpen.value = false;
  setTimeout(() => {
    isOpenClass.value = false;
  }, 100);
}

watchEffect(() => {
  if (isOpen.value) {
    open();
  } else {
    close();
  }
})

</script>

<template>
  <dialog ref="modalRef" :id="dialogId" class="ui-modal" :class="[{'open': isOpenClass}, 'ui-modal--' + size]">
    <div class="ui-modal__header">
      <slot name="header">
        <span class="ui-modal__close material-symbols-outlined" @click="close">
          close
        </span>
      </slot>
    </div>
    <div class="ui-modal__body">
      <slot>
      </slot>
    </div>
    <div v-show="hasFooterSlot" class="ui-modal__footer">
      <slot name="footer"></slot>
    </div>
  </dialog>
</template>

<style lang="scss" scoped>
.ui-modal {
  margin-block-start: 10%;
  @apply rounded p-0 border-none;

  &.open {
    animation: .5s fadeIn;
  }

  &:not(.open) {
    animation: .5s fadeOut;
  }

  &::backdrop {
    transition: 1s;
    animation: .5s fadeIn;
    @apply dark:bg-black/50 backdrop-filter  backdrop-blur  ;
  }

  &:focus-visible {
    @apply outline-none;
  }

  &__header {
    @apply p-1 dark:bg-neutral-900 bg-gray-200 flex justify-end items-center;
  }

  &__body {
    @apply p-1 dark:bg-neutral-950 bg-gray-50;
  }

  &__footer {
    @apply p-1 dark:bg-neutral-900 bg-gray-200;
  }

  &__close {
    @apply rounded-full dark:bg-neutral-700 bg-gray-100 text-base leading-none p-1 cursor-pointer select-none;
  }

  &--large {
    @apply w-2/3 max-md:w-11/12 max-xl:w-2/3;
  }

  &--medium {
    @apply w-1/4 max-md:w-11/12 max-xl:w-2/3;
  }

  &--small {
    @apply w-1/6 max-md:w-11/12 max-xl:w-2/3;
  }

}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>