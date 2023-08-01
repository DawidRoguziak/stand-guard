<script setup lang="ts">
import {Form} from 'vee-validate';
import {number, object, string} from "yup";
import SelectExercise from "@/modules/plan/components/SelectExercise.vue";

const schema = object({
  exercise: string().transform((value, originalValue) => originalValue.key).required(),
  exerciseValue: number().required(),
});

</script>

<template>
  <Form class="ui-form" :validation-schema="schema" >


   <SelectExercise />
  </Form>
</template>