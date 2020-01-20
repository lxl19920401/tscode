<template>
  <div id="nav">
    <router-link to="/home">{{homeMsg}}</router-link> |
    <router-link to="/about">{{aboutMsg}}</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'
@Component
export default class index extends Vue {
  @State('storeData') storeData:any
  @Prop() private msg!: string;
  private homeMsg:string = "Home";
  private aboutMsg:string = "About";
  created(){
    console.log(this.storeData,'0000')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

