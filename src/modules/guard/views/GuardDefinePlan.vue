<script setup lang="ts">
import UiButton from "@/components/ui/UiButton/UiButton.vue";
import useInjection from "@/composables/useInjection";
import {PAGE_HEIGHT_CLASS} from "@/constants/injection-keys";
import {useI18n} from "vue-i18n";

const pageHeightClass = useInjection(PAGE_HEIGHT_CLASS)
pageHeightClass.value = 'h-screen';

const {t} = useI18n();
</script>
<template>
  <div class="flex justify-center items-center w-full h-full mt-[-20px]">
    <div class="flex items-center flex-col">
      <h3 class="mb-5">{{ t('noEventsMessage') }}</h3>
      <UiButton>
        <span class="material-symbols-outlined mr-2">
          add
        </span>
        {{ t('addOne') }}
      </UiButton>
    </div>
  </div>
</template>