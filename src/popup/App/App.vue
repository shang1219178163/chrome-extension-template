<template>
  <div class="main_app">
    <h1>Hello popup111</h1>
    <HelloWorld msg="Welcome to Your Vue.js Chrome Extension!"/>
    <button @click="onClick">button</button>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<script setup>
import HelloWorld from '../components/HelloWorld.vue'


const onClick = () => {
  alert('Hello popup');

  openNewTab();
};

const openNewTab = () => {
  console.log('openNewTab');
  var newURL = "https://segmentfault.com/";
  window.chrome.tabs.create({ url: newURL });
}
</script>

<style>
.main_app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */

  width: 400px;
}
</style>
