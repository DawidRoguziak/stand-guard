<script setup lang="ts">
import {Form} from 'vee-validate';
import {number, object, string} from "yup";
import SelectExercise from "@/modules/plan/forms/common/SelectExercise.vue";

const schema = object({
  exercise: string().transform((value, originalValue) => originalValue.key).required(),
  exerciseValue: number().required(),
});

</script>

<template>
  <Form class="ui-form" :validation-schema="schema" >

    <SelectExercise />

    <div class="mt-2 flex justify-between w-full">
      <UiButton native-type="button" type="text">Cancel</UiButton>
      <UiButton native-type="submit"  >Create plan</UiButton>
    </div>
  </Form>
</template>