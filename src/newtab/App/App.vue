<template>
  <div class="main_app">
    <div class="main_app_header">
      <h1>Hello newtab</h1>
      <h1>JSON to TypeScript</h1>
      <!-- <HelloWorld msg="Welcome to Your Vue.js Chrome Extension!"/> -->
      <button @click="onClick">button</button>
    </div>
    <div class="main_app_main">
      <div>
        
      </div>
    </div>
    <div class="main_app_footer">
      <h4>minimum_chrome_version: {{ manifest.minimum_chrome_version }} </h4>
    </div>
  </div>
</template>

<script setup>
// import HelloWorld from '../components/HelloWorld.vue'
import manifest from '../../manifest.development.json';

const onClick = () => {
  alert('Hello popup');
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */

  box-sizing: border-box;
}

.main_app {
  width: 100%;
}
</style>
