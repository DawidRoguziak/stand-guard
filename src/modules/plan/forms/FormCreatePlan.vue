<script setup lang="ts">
import {Form} from 'vee-validate';
import Exercise from "@/modules/plan/classes/Exercise/Exercise";
import PlanGenerator from "@/modules/plan/classes/PlanGenerator/PlanGenerator";
import type {PlanSettings} from "@/modules/plan/types/PlanSettings";
import {TIME_H} from "@/modules/plan/types/TimeHType";
import UiNumberInput from "@/components/ui/form-elements/UiNumberInput/UiNumberInput.vue";
import {reactive, ref} from "vue";
import PlanCalcValues from "@/modules/plan/classes/PlanComputedValues/PlanCalcValues";
import type CalcPlanMetaData from "@/modules/plan/classes/PlanComputedValues/CalcPlanMetaData";
import type {PlanMetaData} from "@/modules/plan/types/PlanMetaData";
import {number, object} from "yup";
import {ElMessage} from 'element-plus'
import type {ExerciseType} from "@/modules/plan/types/Exercise";


const schema = object({
  cycles: number().required(),
  sitTime: number().required(),
  exerciseTime: number().required(),
});

const exercise = new Exercise();

const generated = ref<any>();
const valid = ref<boolean>(false);
const planCalcValues = reactive<CalcPlanMetaData>(new PlanCalcValues({cycles: 0, sitTime: 0, exerciseTime: 0}));
const planMetaData = reactive<PlanMetaData>({estimatedTime: '', totalSitsTime: '', totalExercises: ''});
const onSubmit = (data: any) => {
  const ps = data as PlanSettings;
  const planGenerator = new PlanGenerator({...ps});
  generated.value = planGenerator.generatePlan();

  planCalcValues.updatePlanSettings({cycles: ps.cycles, sitTime: ps.sitTime, exerciseTime: ps.exerciseTime});

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


const getLabelForExerciseValue = (exercise: ExerciseType, exerciseTime: number) => {
  if (exercise?.unit === 'counter') {
    return 'Number of repetitions';
  }
  return `Time for exercise (max ${exerciseTime ?? 0} min.)`;
}

</script>

<template>
  <UiBlock class="form-plan">
    <Form class="ui-form" :validation-schema="schema" @submit="onSubmit" v-slot="{values}">

      <UiSelect name="cycles" placeholder="Number of cycles" :options="TIME_H"/>

      <UiNumberInput name="sitTime" placeholder="Sit time"/>

      <UiNumberInput name="exerciseTime" placeholder="Exercise time"/>

      <UiSelect name="exercise" placeholder="Default action" :options="exercise.exerciseTypes">
      </UiSelect>

      <UiNumberInput v-if="values.exercise"
                     name="exerciseValue"
                     :placeholder="getLabelForExerciseValue(values.exercise, values.exerciseTime)"
      />


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