<script setup lang="ts">

import FormEditPlanItem from "@/modules/plan/forms/FormEditPlanItem.vue";
import {ref} from "vue";
import type {ExerciseType} from "@/modules/plan/types/Exercise";

const isOpen = ref<boolean>(false);

const toggle = (item: ExerciseType = null) => {
  if (item) {
    console.log(item);
  }

  isOpen.value = !isOpen.value;
}

defineExpose({
  toggle,
})

</script>

<template>
  <UiModal v-model:is-open="isOpen" ref="refModal" size="small">
    <div class="p-3 w-full">
      <FormEditPlanItem/>
    </div>
  </UiModal>
</template>