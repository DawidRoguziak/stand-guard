<script setup lang="ts">
import {ref} from "vue";
import {storeToRefs} from "pinia";
import {useProfileStore} from "@/modules/profile/stores/ProfileStore";

const profileStore = useProfileStore();
const {profile} = storeToRefs(profileStore);
const isDark = ref<boolean>(profile.value?.theme === 'dark');

const onChangeTheme = () => {
  profileStore.updateProfile({
    id:1,
    theme: isDark.value ? 'dark' : 'light'
  });
}


</script>
<template>
  <div>
    <el-switch v-model="isDark" label="Dark" size="large" @change="onChangeTheme" />
  </div>
</template>