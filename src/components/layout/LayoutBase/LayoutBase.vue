<template>
  <div class="w-full h-full">
    <el-container>
      <el-header class="dark:bg-slate-900/60 bg-slate-100 md:hidden app-header">
        <div class="flex justify-between place-items-center h-full">
          <div class="text-gray-50">
            <h3 class="dark:text-gray-50 text-teal-700 ">
              <SvgLogo class="w-[100px] h-[40px]" />
            </h3>
          </div>
          <span class="material-symbols-outlined cursor-pointer dark:text-gray-50 text-teal-700" @click="toggleAside">
            menu
          </span>
        </div>
      </el-header>
      <el-container class="relative">
        <el-aside :width="asideVisible ? '300px' : '0'" class="
          app-menu
           dark:bg-slate-900/60
           bg-slate-100
           ease-in-out duration-300
           max-sm:absolute max-sm:top-0 max-sm:left-0 max-sm:bottom-0 max-sm:z-50
           max-sm:overflow-auto
          ">
          <div class="mb-5 mt-5  flex justify-center max-md:hidden">
            <SvgLogo class="w-[100px] h-[50px]" />
          </div>
          <UiMenu/>
          <!--          delete this component after work-->
          <UiChangeTheme/>
        </el-aside>
        <el-main class="p-0">
          <el-scrollbar class="layout-base__scrollarea">
            <!--  this is for add padding for all view but to not move scroll bar from right side  -->
            <div :class="[pageHeightClass, pagePaddingClass]">
              <slot/>
            </div>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import UiChangeTheme from "@/components/utility/UiChangeTheme/UiChangeTheme.vue";
import {computed, ref, watch} from "vue";
import {useWindowSize} from "@vueuse/core";
import type UiMenuOption from "@/components/utility/UiMenu/UiMenuOption";
import {useI18n} from "vue-i18n";
import useProvide from "@/composables/useProvide";
import {MENU_KEY_OPTIONS, PAGE_HEIGHT_CLASS, PAGE_PADDING_CLASS_KEY} from "@/constants/injection-keys";
import UiMenu from "@/components/utility/UiMenu/UiMenu.vue";
import SvgLogo from "@/components/svg/SvgLogo.vue";

const hideAside = ref(false);
const {width} = useWindowSize();


watch(() => width.value, () => {
  if (width.value < 768) {
    hideAside.value = true;
  }
}, {
  immediate: true,
  flush: 'post'
});

const asideVisible = computed(() => {
  return !hideAside.value || (width.value > 768);
});

const toggleAside = () => {
  hideAside.value = !hideAside.value;
}

const {t} = useI18n();
const routs: UiMenuOption[] = [
  {
    icon: 'safety_check',
    label: t('home'),
    urlName: 'guard-home'
  },
  {
    icon: 'edit_calendar',
    label: t('planDefinition'),
    urlName: 'guard-define-plan'
  },
  {
    icon: 'manage_accounts',
    label: t('Create first profile'),
    urlName: 'create-first-profile'
  }
]

useProvide(MENU_KEY_OPTIONS, routs);

const pagePaddingClass = ref<string>('p-4');
const pageHeightClass = ref<string>('');
useProvide(PAGE_PADDING_CLASS_KEY, pagePaddingClass);
useProvide(PAGE_HEIGHT_CLASS, pageHeightClass);

</script>

<style scoped lang="scss">
:deep(.layout-base__scrollarea) {
  .el-scrollbar__wrap {
    height: calc(100lvh - var(--app-header-height));
  }
}

html {
  .app-header {
    min-width: calc(var(--el-aside-width) - 20px);
    background: rgb(241, 245 ,249);
    background: linear-gradient(210deg, rgba(15, 118, 110, 0.6) 0%, rgb(241, 245 ,249) 39%);
  }

  .app-menu {
    background: rgb(241, 245 ,249);
    background: linear-gradient(to top,hsla(175.34, 77%, 26%, 0.6) 0%, rgb(241, 245 ,249) 46%);
  }
}

html.dark {
  .app-header {
    background: hsla(175.34, 77%, 26%, 1);
    background: linear-gradient(210deg, rgba(15, 118, 110, 0.6) 0%, rgba(15, 23, 42, 1) 39%);
  }

  .app-menu {
    background: hsla(175.34, 77%, 26%, 1);
    background: linear-gradient(to top,hsla(175.34, 77%, 26%, 0.6) 0%, hsla(222.222, 47%, 11%, 1) 46%);
  }
}
</style>