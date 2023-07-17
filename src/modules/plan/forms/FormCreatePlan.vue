<script setup lang="ts">
import {Form as VeeForm} from 'vee-validate';
import Exercise from "@/modules/plan/classes/Exercise/Exercise";
import PlanGenerator from "@/modules/plan/classes/PlanGenerator/PlanGenerator";
import type {PlanSettings} from "@/modules/plan/types/PlanSettings";
import {TIME_H} from "@/modules/plan/types/TimeHType";
import UiNumberInput from "@/components/ui/form-elements/UiNumberInput/UiNumberInput.vue";
import {ref} from "vue";

const exercise = new Exercise();


const generated = ref<any>();
const onSubmit = (data: any) => {
  const ps = data as PlanSettings;
  const planGenerator = new PlanGenerator({...ps});
  generated.value = planGenerator.generatePlan();
}

</script>

<template>
  <div>
    <VeeForm class="ui-form" @submit="onSubmit">

      <UiSelect name="timeRange" placeholder="Number of cycles" :options="TIME_H"/>

      <UiNumberInput name="sitTime" placeholder="Sit time" />

      <UiNumberInput name="exerciseTime" placeholder="Exercise time" />

      <UiSelect name="exercise" placeholder="Default action" :options="exercise.exerciseTypes">
        <template #default="{options}">
          <el-option v-for="opt in options" :value="opt.key" :label="opt.label">
            <span>{{ opt?.label }}</span>
          </el-option>
        </template>
      </UiSelect>

      <UiButton native-type="submit">
        Submit
      </UiButton>

    </VeeForm>
    <div>
      <pre >{{ generated }}</pre>
    </div>
  </div>
</template>