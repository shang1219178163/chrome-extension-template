<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <div>Welcome to Your Vue.js App</div> -->
  <!-- <ToModel></ToModel> -->
  <ToModelNew></ToModelNew>
</template>

<script setup>
// import ToModel from '@/components/ToModel.vue';
import ToModelNew from '@/components/ToModelNew.vue';

//此页面非扩展开发必须,仅用于开发页面功能;
</script>

<style>
* { box-sizing: border-box; }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-overflow-scrolling: touch;

  width: 100%;
  height: 100vh;
  overflow: auto;
  margin: 0 auto;
}

body {
  -webkit-text-size-adjust: 100% !important;
  text-size-adjust: 100% !important;
  -moz-text-size-adjust: 100% !important;
  font-size: 10px;
  margin: 0 auto;

  /* --theme-color:#0082e0; */
  --theme-color:#BE965A;
  --bg-color:#F6F6F6;
}

</style>
