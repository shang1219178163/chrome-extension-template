<template>
  <VLeave class="view">
    <template #header>
      <div class="view_header">
        <h3>Hello newtab</h3>
        <h3>JSON to TypeScript</h3>
        <button @click="onClick">button</button>
        <button @click="hanleToModel">hanleToModel</button>
      </div>
    </template>

    <template #footer>
      <div class="view_footer">
        <h4>minimum_chrome_version: {{ manifest.minimum_chrome_version }} </h4>
      </div>
    </template>

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

  </VLeave>
</template>

<script setup>
import VLeave from './VLeave.vue';

import { ref } from 'vue';
import manifest from '../manifest.development.json';
import { appObj } from '../info.js';

const json = ref('');
// json.value = "这是一个textarea框";
// json.value = "本文来自微信公众号：每日经济新闻 （ID：nbdnews），记者：蔡鼎，编辑：段炼、杜恒峰，校对：王月龙，原文标题：《全部8座球场，都不准卖啤酒！掏了5亿元赞助费，世界杯顶级赞助商遭重锤后发文：呃，这很尴尬》，题图来自：视觉中国";
json.value = JSON.stringify(appObj);


const onClick = () => {
  alert('Hello popup');
};

const hanleToModel = () => {
  console.log('hanleToModel');

  generatorModel(appObj)
};

// const level = ref(0);

// let map = new Map() // 缓存不能全局，最好临时创建并递归传递

const generatorModel = (obj) => {
  console.log(obj);
  // console.log(`generatorModel:${level.value}`);

  // for(const key of Reflect.ownKeys(obj)) {
  //   // console.log(key, obj[key]);
  //   const value = obj[key];
  //   if (value instanceof String) {
  //     map.set(key, value);    
  //   } 
  //   else if (value instanceof Number) {

  //   }
  //   else if (value instanceof Boolean) {

  //   } 
  //   else if (value instanceof Object) {
  //     generatorModel(value);
  //   } 
  //   else if (value instanceof Array) {
  //     if (value.length > 0) {
  //       const first = value[0];
  //       if (first instanceof Object) {
  //         generatorModel(first);
  //       }
  //       else if (first instanceof String) {
          
  //       } 
  //       else if (first instanceof Number) {

  //       }
  //       else if (first instanceof Boolean) {

  //       }
  //       else {

  //       }
  //     }
  //   } 

  // }

  // for(let {key, value} of obj){
  //   console.log(key, value);
  // }
  // Reflect.key(obj)
  // if (obj instanceof Object) {
  //   generatorModel(obj);
  // } 
  // else if (){ 
  // }
  
};


// const deepClone1 = (a, cache) => {
//   if(!cache){
//     cache = new Map() // 缓存不能全局，最好临时创建并递归传递
//   }
//   if(a instanceof Object) { // 不考虑跨 iframe
//     if(cache.get(a)) { return cache.get(a) }
//     let result 
//     if(a instanceof Function) {
//       if(a.prototype) { // 有 prototype 就是普通函数
//         result = function(){ return a.apply(this, arguments) }
//       } else {
//         result = (...args) => { return a.call(undefined, ...args) }
//       }
//     } else if(a instanceof Array) {
//       result = []
//     } else if(a instanceof Date) {
//       result = new Date(a - 0)
//     } else if(a instanceof RegExp) {
//       result = new RegExp(a.source, a.flags)
//     } else {
//       result = {}
//     }
//     cache.set(a, result)
//     for(let key in a) { 
//       if(a.hasOwnProperty(key)){
//         result[key] = deepClone(a[key], cache) 
//       }
//     }
//     return result
//   } else {
//     return a
//   }
// }

</script>

<style scoped>
div{
  /* border: 0.5px solid blue; */
}

.view {
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
  /* box-sizing: border-box; */

  display: flex;
  justify-content: space-between;

  /* overflow: auto; */

  padding: 8px;
  /* height: 300px; */
  height: 100%;
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
