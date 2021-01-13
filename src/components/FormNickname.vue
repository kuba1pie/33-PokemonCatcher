<template>
  <div id="FormNickname">
    <form action="">
      <label for="input"
        ><input type="text" id="input-0" v-model="nickname" placeholder="Name"
      /></label>
    </form>
    <router-link :to="`/catcher/` + this.nickname">
      <button>Continue</button></router-link
    >
  </div>
</template>

<script lang="ts">
export default {
  name: "FormNickname",
  data: function() {
    return { nickname: "" };
  },
  props: {
    pokemons: Object
  }
};
</script>
