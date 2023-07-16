<script setup lang="ts">

import {shallowRef, watch} from "vue";
import {useRoute} from "vue-router";
import LayoutBase from "@/components/layout/LayoutBase/LayoutBase.vue";
import LayoutPublic from "@/components/layout/LayoutPublic/LayoutPublic.vue";


export type Layouts =  'LayoutBase' | 'LayoutPublic';

const layoutComponent = shallowRef<typeof LayoutPublic | typeof LayoutBase>(LayoutPublic);

const route = useRoute();

watch(() => route.meta, (name) => {
  const layout = route.meta?.layout
  switch (layout) {
    case 'LayoutBase':
      layoutComponent.value = LayoutBase;
      break;
    case 'LayoutPublic':
      layoutComponent.value = LayoutPublic;
      break;
    default:
      layoutComponent.value = LayoutPublic;
      break;
  }
}, {immediate: true});

</script>

<template>
  <div class="w-full h-full">
      <component :is="layoutComponent" >
        <slot/>
      </component>
  </div>
</template>

<style  lang="scss">


</style>