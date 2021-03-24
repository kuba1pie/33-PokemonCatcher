<template>
  <div id="FormNickname" class="Wrapper">
    <p>Type your nickname:</p>
    <form class="Item" @submit="checkForm">
      <label for="nickname">Nickname:</label>
      <input
        name="nickname"
        type="text"
        id="nickname"
        v-model="nickname2"
        placeholder="Nickname"
      />
      <p v-if="error" class="Error">
        <b>Please correct the following error:</b><br />
        {{ error }}
      </p>
      <input type="submit" value="Continue" class="Button" />
    </form>
  </div>
</template>

<script lang="js">
import { mapMutations, mapState } from "vuex";
export default {
  name: "FormNickname",
  data: function() {
    return { nickname2: null, error: null };
  },
  computed: {
    ...mapState(["nickname"])
  },
  methods: {
    ...mapMutations(["SAVE_NICKNAME"], ["RESET"]),
    checkForm: function(e) {
      if (this.nickname2) {
        this.SAVE_NICKNAME(this.nickname2);
        this.$router.push({ name: "Catcher" });
      }

      if (!this.nickname2) {
        this.error = "Nickname is required";
      }

      e.preventDefault();
    }
  }
};
</script>
