<script setup lang="ts">
import {v4 as uuidv4} from 'uuid';
import {computed, ref, watchEffect} from "vue";

const id = uuidv4();
const dialogId = computed(() => id);
const modalRef = ref<HTMLDialogElement>();

const isOpen = defineModel('isOpen', {
  required: false,
  type: Boolean,
  default: false,
});

const open = () => {
  modalRef.value?.showModal();
}

const close = () => {
  modalRef.value?.close();
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
  <dialog ref="modalRef" :id="dialogId">
    <div>
      {{ isOpen }}
      content
    </div>
  </dialog>
</template>