<script setup lang="ts">
import useInjection from "@/composables/useInjection";
import {PAGE_HEIGHT_CLASS} from "@/constants/injection-keys";
import {useI18n} from "vue-i18n";
import type {Ref} from "vue";
import FormCreatePlan from "@/modules/plan/forms/FormCreatePlan.vue";
import PlanList from "@/modules/plan/views/PlanList/PlanList.vue";
import FormEditPlanItem from "@/modules/plan/forms/FormEditPlanItem.vue";

let pageHeightClass: Ref<string>;
try {
  pageHeightClass = useInjection(PAGE_HEIGHT_CLASS);
  pageHeightClass.value = 'h-screen';
} catch (e) {

}

const {t} = useI18n();
</script>
<template>
  <div>
    <div v-if="false" class="flex justify-center items-center w-full h-full mt-[-20px]">
      <div  class="flex items-center flex-col">
        <h3 class="mb-5">{{ t('noEventsMessage') }}</h3>
        <UiButton>
          <span class="material-symbols-outlined mr-2">
            add
          </span>
          {{ t('addOne') }}
        </UiButton>
      </div>
    </div>

    <el-steps :active="2" align-center>
      <el-step title="Define"/>
      <el-step title="Save" />
    </el-steps>

    <div>
      <FormCreatePlan />
    </div>

    <div>
      <FormEditPlanItem />
      <PlanList />
    </div>
  </div>
</template>