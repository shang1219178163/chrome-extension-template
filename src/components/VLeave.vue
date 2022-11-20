/** 
剩余视图 默认 margin/padding 8px, borderRadius 4px;
**********************************************
 * slot name="header"
**********************************************
 * 剩余高度视图
**********************************************
 * slot name="footer"
********************************************** 
*/

<template>
  <div class="vleave">
    <div class="vleave__header">
      <slot name="header">header</slot>
    </div>
    <div class="vleave__content">
      <slot>剩余高度视图</slot>
    </div>
    <div class="vleave__footer">
      <slot name="footer">footer</slot>
    </div>
  </div>
</template>

<script setup>
// import {ref} from "vue";

// const props = defineProps({
//   height: {
//     type: String,
//     default: "'100vh'",
//   },
// });
</script>

<style scoped>

.vleave {
  display: flex;
  flex-flow: column nowrap;

  height: inherit;
  position: fixed;

  box-sizing: border-box;
}

.vleave__header {
  width: 100vw;
}

.vleave__footer {
  width: 100vw;
}

.vleave__content {
  flex: 1;

  overflow: auto;
}
</style>
