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
  <div class="vexpand-box">
    <div class="vexpand-box__header">
      <slot name="header">header</slot>
    </div>
    <div class="vexpand-box__leave">
      <slot>剩余高度视图</slot>
    </div>
    <div class="vexpand-box__footer">
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

.vexpand-box {
  display: flex;
  flex-flow: column nowrap;

  height: inherit;
  position: fixed;
}

.vexpand-box__header {
  width: 100vw;
}

.vexpand-box__footer {
  width: 100vw;
}

.vexpand-box__leave {
  flex: 1;

  overflow: auto;
}
</style>
