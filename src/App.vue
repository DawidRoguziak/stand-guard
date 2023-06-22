<script setup lang="ts">
import {RouterView} from 'vue-router'
import GlobalLoader from "@/components/utility/GlobalLoader/GlobalLoader.vue";
import afterRootComponentCreated from "@/hooks/afterRootComponentCreated";
import {onMounted} from "vue";
import {useProfileStore} from "@/modules/profile/stores/ProfileStore";
import afterRootComponentMount from "@/hooks/afterRootComponentMount";

afterRootComponentCreated();

onMounted(() => {
 afterRootComponentMount();
});
</script>

<template>
  <!--  <header>-->
  <!--    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->

  <!--    <div class="wrapper">-->
  <!--      <HelloWorld msg="You did it!" />-->

  <!--      <nav>-->
  <!--        <RouterLink to="/">Home</RouterLink>-->
  <!--        <RouterLink to="/about">About</RouterLink>-->
  <!--      </nav>-->
  <!--    </div>-->
  <!--  </header>-->
  <el-config-provider>
    <RouterView />
    <teleport to="body">
      <GlobalLoader/>
    </teleport>
  </el-config-provider>
</template>
<style>
@import "assets/main.css";
</style>