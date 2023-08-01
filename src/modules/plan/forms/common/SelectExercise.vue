<script setup lang="ts">

import UiNumberInput from "@/components/ui/form-elements/UiNumberInput/UiNumberInput.vue";
import {useField} from "vee-validate";
import Exercise from "@/modules/plan/classes/Exercise/Exercise";
import type {ExerciseType} from "@/modules/plan/types/Exercise";

const {value: exercise} = useField<ExerciseType>('exercise');
const {value: exerciseTime} = useField<number>('exerciseTime');

const exerciseInstance = new Exercise();

const getLabelForExerciseValue = (exercise: ExerciseType, exerciseTime: number) => {
  if (exercise?.unit === 'counter') {
    return 'Number of repetitions';
  }
  return `Time for exercise (max ${exerciseTime ?? 0} min.)`;
}

</script>

<template>
<div class="w-full">
  <UiSelect name="exercise" placeholder="Default action"
            :teleported="false"
            :options="exerciseInstance.exerciseTypes" />


  <UiNumberInput v-if="exercise"
                 class="mt-[10px]"
                 name="exerciseValue"
                 :placeholder="getLabelForExerciseValue(exercise, exerciseTime)"
  />
</div>
</template>