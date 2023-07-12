<script setup lang="ts">
import {useProfileStore} from "@/modules/profile/stores/ProfileStore";
import {useI18n} from "vue-i18n";

const {profile} = useProfileStore();
const {t} = useI18n();

</script>
<template>
  <div class="flex justify-center flex-col items-center mt-[10%]">
    <h1>{{ t('wellcome') }}, {{ profile?.username }}</h1>
    <div>

      <div class="flex gap-2 mt-1.5 ml-2">
        <UiButton>
          {{ t('starTodayWork') }} &#8987;
        </UiButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.plan-grid) {
  .ui-list__item {
    .is-work {
      @apply bg-blue-700/10 text-blue-600;
    }

    .is-exercise {
      @apply bg-amber-700/10 text-amber-500;
    }
  }
}
</style>