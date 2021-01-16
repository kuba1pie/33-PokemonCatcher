<template>
  <FormNickname />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FormNickname from "@/components/FormNickname.vue";

@Component({
  components: {
    FormNickname
  }
})
export default class Home extends Vue {}
</script>
