<script lang="ts" setup generic="T">
import type UiListProps from "@/components/utility/UiList/UiListProps";

defineProps<UiListProps>()
</script>

<template>
  <div class="ui-list grid grid-cols-1 auto-rows-auto gap-4">
    <div v-for="item in items" :key="String(item[keyField as keyof T])" class="ui-list__item">
      <slot :item="item" >
        <div>{{ String(item[keyField as keyof T]) }}</div>
      </slot>
    </div>
  </div>
</template>