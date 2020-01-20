<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ word }}</p>
    <Test @customClick="handleCustomClick"></Test>
    {{ count }}
    <button @click="$router.go(-1)">返回</button>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator';
import myMixins from '../components/mixin';
import Test from '@/components/test.vue';

@Component({
  components: {
    Test
  },
  mixins: [myMixins]
})
export default class About extends Vue {
  word: string = "hello";
  count: number = 1;
  handleCustomClick(payload:any) {
     this.count += payload;
  }
  @Watch('word')
  onChangeValue(newV: string, oldV: string){
    console.log(newV, oldV); // world hello
  }

  created() {
    console.log(this.value); // => Hello
  }

  mounted(): void {
    // 1.5秒后改变msg值
    setTimeout(() => {
      this.word = 'world';
    }, 1500);
  }
}
</script>