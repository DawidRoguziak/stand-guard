<script setup lang="ts">

import {shallowRef} from "vue";
import useProvide from "@/composables/useProvide";
import {LAYOUT_RESOLVER_KEY} from "@/constants/injection-keys";
import LayoutBase from "@/components/layout/LayoutBase/LayoutBase.vue";
import LayoutPublic from "@/components/layout/LayoutPublic/LayoutPublic.vue";

export type Layouts = typeof LayoutBase | typeof LayoutPublic;

const layoutComponent = shallowRef<Layouts>(LayoutPublic);
useProvide(LAYOUT_RESOLVER_KEY, layoutComponent);

</script>

<template>
  <div>
    <component :is="layoutComponent">
      <slot/>
    </component>
  </div>
</template>