<template>
  <div class="home">
    <FormNickname />
  </div>
</template>

<script>
// @ is an alias to /src
import FormNickname from "@/components/FormNickname.vue";

export default {
  name: "Home",
  components: {
    FormNickname,
  },
};
</script>
