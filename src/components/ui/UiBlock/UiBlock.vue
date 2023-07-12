<template>
  <div class="ui-block">
    <slot />
  </div>
</template>

<style scoped lang="scss">
 .ui-block {
   background: var(--ui-block-bg);
   box-shadow: var(--ui-block-box-shadow);
   border-radius: var(--ui-block-border-radius);
   padding: var(--ui-block-padding);
 }
</style>