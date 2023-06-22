<script setup lang="ts">
import FormCreateProfile from "@/modules/profile/forms/FormCreateProfile.vue";
import {useI18n} from "vue-i18n";
const {t} = useI18n();
</script>

<template>
  <div class="flex justify-center flex-col place-items-center h-full gap-0.5 p-4">
    <h3>{{ t('createProfile') }}</h3>
    <FormCreateProfile/>
  </div>
</template>
