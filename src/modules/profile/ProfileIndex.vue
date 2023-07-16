<script setup lang="ts">

import {LAYOUT_RESOLVER_KEY} from "@/constants/injection-keys";
import useInjection from "@/composables/useInjection";
import LayoutPublic from "@/components/layout/LayoutPublic/LayoutPublic.vue";

try {
  const layoutResolver = useInjection(LAYOUT_RESOLVER_KEY);
  layoutResolver.value = LayoutPublic;
} catch (e) {
  console.error(e);
}

</script>
<template>
    <RouterView/>
</template>