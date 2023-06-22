<script setup lang="ts">
import useInjection from "@/composables/useInjection";
import UiButton from "@/components/utility/UiButton/UiButton.vue";
import {STORE_KEY_PROFILE} from "@/modules/profile/stores/ProfileStore";
import {useI18n} from "vue-i18n";
import UiList from "@/components/utility/UiList/UiList.vue";
import UiModal from "@/components/utility/UiModal/UiModal.vue";

const {profile} = useInjection(STORE_KEY_PROFILE);
const {t} = useI18n();

const exampleList = [
  {
    id: 1,
    name: 'test',
    type: 'work',
  },
  {
    id: 2,
    name: 'test2',
    type: 'exercise',
  },
  {
    id: 3,
    name: 'test2',
    type: 'work',
  },
  {
    id: 4,
    name: 'test2',
    type: 'exercise',
  },
  {
    id: 5,
    name: 'test2',
    type: 'work',
  },
  {
    id: 6,
    name: 'test2',
    type: 'exercise',
  },
  {
    id: 7,
    name: 'test2',
    type: 'work',
  },
  {
    id: 9,
    name: 'test2',
    type: 'exercise',
  },
  {
    id: 9,
    name: 'test2',
    type: 'work',
  },

]
</script>
<template>
  <div>
    <h1>{{ t('wellcome') }}, {{profile?.username}}</h1>
    <div>

      <div class="flex gap-2 mt-1.5 ml-2">
      <UiButton>
        {{ t('starTodayWork') }} &#8987;
      </UiButton>
      </div>
      <UiModal />
      <UiList class="plan-grid" key-field="id" :items="exampleList">
        <template #default="{item}">
          <div class="bg-cyan-500/50 rounded p-4 drop-shadow-[0_0_10px_1px_rgba(59,130,246,1)]"
               :class="{'bg-blue-500/40 is-work': item.type === 'work','bg-amber-400/40 is-exercise': item.type === 'exercise'}">{{ item.name }}</div>
        </template>
      </UiList>
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