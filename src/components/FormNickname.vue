<template>
  <div id="FormNickname" class="Wrapper">
    <p>Type your nickname:</p>
    <form class="Item" @submit="checkForm">
      <label for="nickname">Nickname:</label>
      <input
        name="nickname"
        type="text"
        id="nickname"
        v-model="nickname"
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

<script lang="ts">
export default {
  name: "FormNickname",
  data: function() {
    return { nickname: null, error: null };
  },
  methods: {
    checkForm: function(e) {
      if (this.nickname) {
        this.$router.push({ name: "Catcher", params: { id: this.nickname } });
      }

      if (!this.nickname) {
        this.error = "Nickname is required";
      }

      e.preventDefault();
    }
  }
};
</script>
