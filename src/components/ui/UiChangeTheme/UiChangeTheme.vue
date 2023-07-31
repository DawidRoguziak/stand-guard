<script setup lang="ts">
import {ref} from "vue";
import {storeToRefs} from "pinia";
import {useActiveProfile} from "@/modules/profile/stores/ActiveProfileStore/ActiveProfile";
import {useProfileThemeManager} from "@/modules/profile/stores/ProfileThemeManagerStore/ProfileThemeManager";
import {useProfileIndexDb} from "@/modules/profile/stores/ProfileIndexDbManager/ProfileIndexDbManager";

const {updateDb} = useProfileIndexDb();
const {profile} = storeToRefs(useActiveProfile());
const {setTheme} = useProfileThemeManager();
const isDark = ref<boolean>(profile.value?.theme === 'dark');

const onChangeTheme = () => {
  if (!profile.value?.id) {
    return;
  }

  updateDb.update(profile.value?.id, {
    ...profile.value,
    theme: isDark.value ? 'dark' : 'light'
  }).then(() => {
    setTheme(isDark.value ? 'dark' : 'light');
  });
}

</script>
<template>
  <div>
    <el-switch v-model="isDark" label="Dark" size="large" @change="onChangeTheme" />
  </div>
</template>