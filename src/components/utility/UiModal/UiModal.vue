<script setup lang="ts">
import {v4 as uuidv4} from 'uuid';
import {computed, ref} from "vue";

const id = uuidv4();
const dialogId = computed(() => id);
const modalRef = ref<HTMLDialogElement>();

const open = () => {
  modalRef.value?.showModal();
}

</script>

<template>
  <dialog ref="modalRef" :id="dialogId">
      <div>
        content
      </div>
  </dialog>
</template>