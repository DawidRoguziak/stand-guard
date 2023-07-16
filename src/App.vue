<script setup lang="ts">
import {RouterView} from 'vue-router'
import GlobalLoader from "@/components/utility/GlobalLoader/GlobalLoader.vue";
import afterRootComponentCreated from "@/hooks/afterRootComponentCreated";
import {onMounted} from "vue";
import afterRootComponentMount from "@/hooks/afterRootComponentMount";
import {useProfileCounter} from "@/modules/profile/stores/ProfileCounter/ProfileCounter";
import LayoutResolver from "@/components/layout/LayoutResolver.vue";

useProfileCounter().countProfiles();
afterRootComponentCreated();

onMounted(() => {
  afterRootComponentMount();
});
</script>

<template>
  <el-config-provider>

    <LayoutResolver>
      <RouterView v-slot="{Component}">
        <Transition name="fade" mode="out-in">
          <component :is="Component"/>
        </Transition>
      </RouterView>
    </LayoutResolver>

    <teleport to="body">
      <GlobalLoader/>
    </teleport>
  </el-config-provider>
</template>
<style lang="scss">
@import "assets/styles/main.scss";

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}


</style>