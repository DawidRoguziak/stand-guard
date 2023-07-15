<script setup lang="ts">
import {ref} from "vue";
import {storeToRefs} from "pinia";
import {useProfileDbUpdate} from "@/modules/profile/stores/ProfileDbUpdate/ProfileDbUpdate";
import {useActiveProfile} from "@/modules/profile/stores/ActiveProfileStore/ActiveProfile";

const {updateProfile} = useProfileDbUpdate();
const {profile} = storeToRefs(useActiveProfile());
const isDark = ref<boolean>(profile.value?.theme === 'dark');

const onChangeTheme = () => {
  updateProfile(1,{
    theme: isDark.value ? 'dark' : 'light'
  });
}


</script>
<template>
  <div>
    <el-switch v-model="isDark" label="Dark" size="large" @change="onChangeTheme" />
  </div>
</template>