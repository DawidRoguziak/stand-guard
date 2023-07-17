<script setup lang="ts">
import {Form as VeeForm} from 'vee-validate';
import Exercise from "@/modules/plan/classes/Exercise/Exercise";
import PlanGenerator from "@/modules/plan/classes/PlanGenerator/PlanGenerator";
import type {PlanSettings} from "@/modules/plan/types/PlanSettings";
import {TIME_H} from "@/modules/plan/types/TimeHType";

const exercise = new Exercise();

const onSubmit = (data: any) => {
  const ps = data as PlanSettings;
  const planGenerator = new PlanGenerator({...ps});
  console.log(planGenerator.generatePlan());
}

</script>

<template>
  <div>
    <VeeForm class="ui-form" @submit="onSubmit">

      <UiSelect name="timeRange" placeholder="Time range" :options="TIME_H"/>

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
  </div>
</template>