<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Main from "@/components/Main.vue"; // @ is an alias to /src

@Options({
  components: {
    Main,
  },
})
export default class Home extends Vue {}
</script>
