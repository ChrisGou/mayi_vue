<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Vue.js Multi-Page App Mod1"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="stylus">
.home
  display flex
  flex-direction column
  padding 10px
</style>
