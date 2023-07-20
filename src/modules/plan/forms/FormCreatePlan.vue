<script setup lang="ts">
import {Form as VeeForm} from 'vee-validate';
import Exercise from "@/modules/plan/classes/Exercise/Exercise";
import PlanGenerator from "@/modules/plan/classes/PlanGenerator/PlanGenerator";
import type {PlanSettings} from "@/modules/plan/types/PlanSettings";
import {TIME_H} from "@/modules/plan/types/TimeHType";
import UiNumberInput from "@/components/ui/form-elements/UiNumberInput/UiNumberInput.vue";
import {reactive, ref} from "vue";
import type {Ref} from "vue";
import PlanCalcValues from "@/modules/plan/classes/PlanComputedValues/PlanCalcValues";
import type CalcPlanMetaData from "@/modules/plan/classes/PlanComputedValues/CalcPlanMetaData";
import type {PlanMetaData} from "@/modules/plan/types/PlanMetaData";

const exercise = new Exercise();


const generated = ref<any>();
const planCalcValues = reactive<CalcPlanMetaData>(new PlanCalcValues({cycles: 0, sitTime: 0, exerciseTime: 0}));
const planMetaData = reactive<PlanMetaData>({estimatedTime: '', totalSitsTime: '', totalExercises: ''});
const onSubmit = (data: any) => {
  const ps = data as PlanSettings;
  const planGenerator = new PlanGenerator({...ps});
  generated.value = planGenerator.generatePlan();

  planCalcValues.updatePlanSettings({cycles: ps.cycles, sitTime: ps.sitTime, exerciseTime: ps.exerciseTime});
  const calculated = planCalcValues.calcPlanMetaData();
  planMetaData.estimatedTime = calculated.estimatedTime;
  planMetaData.totalExercises = calculated.totalExercises;
  planMetaData.totalSitsTime = calculated.totalSitsTime;

}


</script>

<template>
  <div>
    <VeeForm ref="formRef" class="ui-form" @submit="onSubmit">

      <UiSelect name="cycles" placeholder="Number of cycles" :options="TIME_H"/>

      <UiNumberInput name="sitTime" placeholder="Sit time"/>

      <UiNumberInput name="exerciseTime" placeholder="Exercise time"/>

      <UiSelect name="exercise" placeholder="Default action" :options="exercise.exerciseTypes">
        <template #default="{options}">
          <el-option v-for="opt in options" :value="opt.key" :label="opt.label">
            <span>{{ opt?.label }}</span>
          </el-option>
        </template>
      </UiSelect>

      <UiBlock class="flex gap-5 flex-wrap" style="--ui-block-box-shadow: none;">
        <div>Total time: <span class="text-sm">{{ planMetaData?.estimatedTime }}(h)</span></div>
        <div>Total sitting time: <span class="text-sm">{{ planMetaData?.totalSitsTime }}(h)</span></div>
        <div>Total exercises time: <span class="text-sm">{{ planMetaData?.totalExercises }}(h)</span></div>
      </UiBlock>

      <UiButton native-type="submit">
        Submit
      </UiButton>

    </VeeForm>
    <div>
      <pre>{{ generated }}</pre>
    </div>
  </div>
</template>