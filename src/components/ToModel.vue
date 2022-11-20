<template>
  <div class="view">
    <div class="view_header">
      <h3>Hello newtab</h3>
      <h3>JSON to TypeScript</h3>
      <button @click="onClick">button</button>
    </div>
    <div class="view_main">
      <div class="view_main_left">
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
      <div class="view_main_right">
        <div>
          view_main_right
        </div>
      </div>
    </div>
    <div class="view_footer">
      <h4>minimum_chrome_version: {{ manifest.minimum_chrome_version }} </h4>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';
import manifest from '../manifest.development.json';

const json = ref('');
json.value = "这是一个textarea框";
json.value = "本文来自微信公众号：每日经济新闻 （ID：nbdnews），记者：蔡鼎，编辑：段炼、杜恒峰，校对：王月龙，原文标题：《全部8座球场，都不准卖啤酒！掏了5亿元赞助费，世界杯顶级赞助商遭重锤后发文：呃，这很尴尬》，题图来自：视觉中国";

const onClick = () => {
  alert('Hello popup');
};
</script>

<style scoped>
div{
  /* border: 0.5px solid blue; */
}

.view {
  box-sizing: border-box;

  padding: 8px;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
}

.view_header{
  /* max-height: 100px; */
}

.view_footer{
  /* max-height: 100px; */
}

.view_main{
  flex: 1;

  display: flex;
  justify-content: space-between;

  overflow: auto;

  padding: 8px;
  height: 300px;
  background-color: green;
}

.view_main_left, 
.view_main_right{
  display: flex;
  flex-direction: column;

  width: 45%;
}


.json-text{
  width: 100%;
  height: 100%;

  border: 1px solid blue;
}
</style>
