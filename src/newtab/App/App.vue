<template>
  <div class="main_app">
    <div class="main_app_header">
      <h1>Hello newtab</h1>
      <h1>JSON to TypeScript</h1>
      <!-- <HelloWorld msg="Welcome to Your Vue.js Chrome Extension!"/> -->
      <button @click="onClick">button</button>
    </div>
    <div class="main_app_main">
      <div class="main_app_main_left">
        <label for="story">Tell us your story:</label>
        <textarea 
          class="json-text"
          id="story" 
          name="story"
          :value="json"
        >
        It was a dark and stormy night...
        </textarea>
      </div>
      <div class="main_app_main_right">
        main_app_main_right
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

import { ref } from 'vue';

const json = ref('');
json.value = "这是一个textarea框";
json.value = "本文来自微信公众号：每日经济新闻 （ID：nbdnews），记者：蔡鼎，编辑：段炼、杜恒峰，校对：王月龙，原文标题：《全部8座球场，都不准卖啤酒！掏了5亿元赞助费，世界杯顶级赞助商遭重锤后发文：呃，这很尴尬》，题图来自：视觉中国";

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
  height: 100%;
}

.main_app_main{
  display: flex;
  justify-content: space-between;
  
  width: 80%;
  height: 100%;
}

.main_app_main_left, .main_app_main_right{
  display: flex;
  flex-direction: column;

  /* width: 100%; */

  border: 1px solid blue;
}


.json-text{
  width: 100%;
  height: 100%;

  border: 1px solid blue;
}
</style>
