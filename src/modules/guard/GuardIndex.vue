<script setup lang="ts">
import LayoutBase from "@/components/layout/LayoutBase/LayoutBase.vue";
import useProvide from "@/composables/useProvide";
import {STORE_KEY_PROFILE, useProfileStore} from "@/modules/profile/stores/ProfileStore";

const profileStore = useProfileStore();
useProvide(STORE_KEY_PROFILE, profileStore);

</script>
<template>
  <LayoutBase>
    <RouterView/>
  </LayoutBase>
</template>