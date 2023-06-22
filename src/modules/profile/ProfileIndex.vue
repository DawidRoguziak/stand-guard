<script setup lang="ts">
import {STORE_KEY_PROFILE, useProfileStore} from "@/modules/profile/stores/ProfileStore";
import useProvide from "@/composables/useProvide";

const profileStore = useProfileStore();
useProvide(STORE_KEY_PROFILE, profileStore);

</script>
<template>
    <RouterView/>
</template>