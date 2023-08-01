<script setup lang="ts">
import {Form} from 'vee-validate';
import PlanGenerator from "@/modules/plan/classes/PlanGenerator/PlanGenerator";
import {TIME_H} from "@/modules/plan/types/TimeHType";
import UiNumberInput from "@/components/ui/form-elements/UiNumberInput/UiNumberInput.vue";
import {reactive, ref} from "vue";
import PlanCalcValues from "@/modules/plan/classes/PlanComputedValues/PlanCalcValues";
import type CalcPlanMetaData from "@/modules/plan/classes/PlanComputedValues/CalcPlanMetaData";
import type {PlanMetaData} from "@/modules/plan/types/PlanMetaData";
import {number, object, string} from "yup";
import {ElMessage} from 'element-plus'
import SelectExercise from "@/modules/plan/components/SelectExercise.vue";


const schema = object({
  cycles: number().transform((value, originalValue) => originalValue.value).required(),
  sitTime: number().required(),
  exerciseTime: number().required(),
  exercise: string().transform((value, originalValue) => originalValue.key).required(),
  exerciseValue: number().required(),
});


const generated = ref<any>();
const valid = ref<boolean>(false);
const planCalcValues = reactive<CalcPlanMetaData>(new PlanCalcValues({cycles: 0, sitTime: 0, exerciseTime: 0}));
const planMetaData = reactive<PlanMetaData>({estimatedTime: '', totalSitsTime: '', totalExercises: ''});
const onSubmit = (data: any) => {
  const planGenerator = new PlanGenerator({
    cycles: data.cycles.value,
    sitTime: data.sitTime,
    exerciseTime: data.exerciseTime,
    exercise: data.exercise,
    exerciseValue: data.exerciseValue,
  });
  generated.value = planGenerator.generatePlan();

  planCalcValues.updatePlanSettings({
    cycles: data.cycles.value,
    sitTime: data.sitTime,
    exerciseTime: data.exerciseTime
  });

  const calculated = planCalcValues.calcPlanMetaData();

  if (planCalcValues.totalTimeInMinutes <= planCalcValues.MAX_TIME_FOR_PLAN) {
    // save plan
    planMetaData.estimatedTime = calculated.estimatedTime;
    planMetaData.totalExercises = calculated.totalExercises;
    planMetaData.totalSitsTime = calculated.totalSitsTime;
    valid.value = true;
  } else {
    // error
    valid.value = false;
    ElMessage({
      message: 'Plan cant be generated, total time is more than 24h',
      type: 'error',
    })
  }
}


</script>

<template>
  <UiBlock class="form-plan">
    <Form class="ui-form" :validation-schema="schema" @submit="onSubmit" v-slot="{values}">

      <UiSelect name="cycles" placeholder="Number of cycles" :options="TIME_H"/>

      <UiNumberInput name="sitTime" placeholder="Sit time"/>

      <UiNumberInput name="exerciseTime" placeholder="Exercise time"/>

      <SelectExercise/>

      <UiBlock v-if="valid" class="flex gap-5 flex-wrap form-plan__meta-block">
        <div v-if="planMetaData.estimatedTime">Total time: <span class="text-sm">{{
            planMetaData?.estimatedTime
          }}(h)</span></div>
        <div v-if="planMetaData.totalSitsTime">Total sitting time: <span class="text-sm">{{
            planMetaData?.totalSitsTime
          }}(h)</span></div>
        <div v-if="planMetaData.totalExercises">Total exercises time: <span
            class="text-sm">{{ planMetaData?.totalExercises }}(h)</span></div>
      </UiBlock>

      <UiButton class="mt-4" native-type="submit" is-block>
        Submit
      </UiButton>

    </Form>
    <div>
      <pre>{{ generated }}</pre>
    </div>
  </UiBlock>
</template>

<style lang="scss">
:deep(.form-plan) {
  .form-plan__meta-block {
    --ui-block-box-shadow: none;
  }
}
</style>