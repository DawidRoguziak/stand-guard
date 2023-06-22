<template>
  <div v-show="isLoading">
    <UiLoader class="global"/>
    <UiOverlay />
  </div>
</template>
<script setup lang="ts">
import {useGlobalLoaderStore} from "@/components/utility/GlobalLoader/GlobalLoaderStore";
import {storeToRefs} from "pinia";
import UiLoader from "@/components/utility/UiLoader/UiLoader.vue";
import UiOverlay from "@/components/utility/UiOverlay/UiOverlay.vue";

const {isLoading} = storeToRefs(useGlobalLoaderStore());
</script>