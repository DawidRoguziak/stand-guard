<script lang="ts" setup>

import useInjection from "@/composables/useInjection";
import {MENU_KEY_OPTIONS} from "@/constants/injection-keys";
import type {UiMenuOption} from "@/components/ui/UiMenu/UiMenuOption";
import {useI18n} from "vue-i18n";

let options: UiMenuOption[]  = [];

try {
  options = useInjection(MENU_KEY_OPTIONS);
} catch (e) {
  options = [];
}
const {t} = useI18n();

</script>
<template>
  <div v-if="options" class="w-full h-auto flex gap-2 flex-col p-3 ui-menu">
    <RouterLink v-for="item in options" :to="{name: item.urlName}" exact-active-class="active"
                :menu-url-name="item.urlName"
                class="menu-item rounded-md p-2 duration-100 flex align-middle"
    >
      <span class="material-symbols-outlined mr-1.5 ">
        {{ item.icon }}
      </span>
      <span class="link-text text-gray-50">
        {{ t(item.label) }}
      </span>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>

.menu-item {
  @apply text-teal-900 whitespace-nowrap;

  .material-symbols-outlined {
    @apply dark:text-gray-50 text-teal-900;
  }

  .link-text {
    @apply dark:text-gray-50 text-teal-900;
  }

  &:hover {
    @apply dark:bg-teal-700/40 bg-teal-700  ;

    .material-symbols-outlined {
      @apply text-gray-50;
    }

    .link-text {
      @apply text-gray-50;
    }
  }
}

.active {
  @apply dark:bg-teal-700/40 bg-teal-700;

  .material-symbols-outlined {
    @apply text-gray-50;
  }

  .link-text {
    @apply text-gray-50;
  }
}

</style>
