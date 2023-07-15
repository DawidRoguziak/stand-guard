<template>
  <div v-show="isLoading" class="global-loader">
    <UiLoader class="global"/>
    <UiOverlay />
  </div>
</template>
<script setup lang="ts">
import {useGlobalLoaderStore} from "@/components/utility/GlobalLoader/GlobalLoaderStore";
import {storeToRefs} from "pinia";
import UiLoader from "@/components/ui/UiLoader/UiLoader.vue";
import UiOverlay from "@/components/ui/UiOverlay/UiOverlay.vue";

const {isLoading} = storeToRefs(useGlobalLoaderStore());
</script>