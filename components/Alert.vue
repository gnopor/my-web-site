<template>
  <div class="alert-content" :class="hide">
    <div class="alert-message">
      <button @click="handleMainButton">Get Started 🚀</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hide: "",
      showAlert: "",
    };
  },
  mounted() {
    // this.showAlert = window.innerWidth <= 646;
  },
  methods: {
    handleMainButton() {
      this.hide = "hide";
    },
  },
};
</script>

<style scoped>
/* alert content  */
.alert-content {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(transparent, var(--shadow));
  height: 100vh;
  width: 100vw;
  z-index: 2;
}

.hide {
  display: none;
}

/* alert message  */
.alert-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

button {
  background: none;
  border: 1px solid white;
  color: white;
  font-weight: bold;
  margin: 50px 0;
  padding: 10px;
  cursor: pointer;
}

button:hover {
  box-shadow: 0 1px 60px 4px var(--accent);
}
</style>