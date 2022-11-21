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
  <div class="vexpand">
    <div class="vexpand__header">
      <slot name="header"></slot>
    </div>
    <div class="vexpand__content">
      <slot>剩余高度视图</slot>
    </div>
    <div class="vexpand__footer">
      <slot name="footer"></slot>
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

.vexpand {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  
  width: inherit;
  height: inherit;
  position: fixed;
}

/* .vexpand__header {
  width: 100vw;
}

.vexpand__footer {
  width: 100vw;
} */

.vexpand__content {
  flex: 1;

  overflow: auto;
}
</style>
