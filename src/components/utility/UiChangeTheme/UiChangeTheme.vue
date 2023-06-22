<script setup lang="ts">
import useInjection from "@/composables/useInjection";
import {ref} from "vue";
import {storeToRefs} from "pinia";
import {STORE_KEY_PROFILE} from "@/modules/profile/stores/ProfileStore";

const profileStore = useInjection(STORE_KEY_PROFILE);
const {profile} = storeToRefs(profileStore);
const isDark = ref<boolean>(profile.value?.theme === 'dark');

const onChangeTheme = () => {
  profileStore.updateProfile({
    theme: isDark.value ? 'dark' : 'light'
  });
}


</script>
<template>
  <div>
    <el-switch v-model="isDark" label="Dark" size="large" @change="onChangeTheme" />
  </div>
</template>