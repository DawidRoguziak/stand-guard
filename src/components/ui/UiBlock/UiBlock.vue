<template>
  <div class="ui-block">
    <slot/>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixisns/mixins';

@include mixins.useDarkTheme {
  .ui-block {
    --ui-block-bg: #1d1e1f;
    --ui-block-box-shadow: 0px 0px 12px rgba(0, 0, 0, .72);
  }
}

.ui-block {
  --ui-block-bg: #f4f4f5;
  --ui-block-box-shadow: 0px 0px 12px rgba(0, 0, 0, .12);
}


.ui-block {
  background: var(--ui-block-bg);
  box-shadow: var(--ui-block-box-shadow);
  border-radius: var(--ui-block-border-radius, 4px);
  padding: var(--ui-block-padding, 12px);
}
</style>