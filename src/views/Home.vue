<template>
  <div class="home">
    <img alt="Vue logo" :src="imgSrc">
    <HelloWorld msg="This is an home page"/>
    <Btn v-model="isChecked"/>
    {{computedName}}
    <button type="button" @click="say">点击</button>
    <button @click="$router.go(-1)">返回</button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'
import Btn from '@/components/btn.vue';

@Component({
  components: {
    HelloWorld,Btn
  }
})
export default class Home extends Vue {
  imgSrc:string = require("../assets/logo.png");
  isChecked: boolean = true;
  name = 'tom';
  //computed
  get computedName() {
    return this.name + '123';
  }
  say(){
     console.log('say hello'); 
  }
}
</script>
