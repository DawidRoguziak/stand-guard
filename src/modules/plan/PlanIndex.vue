<script setup lang="ts">
import {LAYOUT_RESOLVER_KEY} from "@/constants/injection-keys";
import useInjection from "@/composables/useInjection";
import LayoutBase from "@/components/layout/LayoutBase/LayoutBase.vue";

try {
  const layoutResolver = useInjection(LAYOUT_RESOLVER_KEY);
  layoutResolver.value = LayoutBase;
} catch (e) {
  console.error(e);
}
</script>

<template>
    <RouterView/>
</template>