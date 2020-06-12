<template>
  <div class="home scrolling-side">
    <img class="title" src="@/assets/img/title.png">
    <img class="slide-btn-outer" src="@/assets/img/slide-btn-outer.png">
    <img class="slide-btn" src="@/assets/img/slide-btn.png" @click="toLogin">
    <img class="words" src="@/assets/img/word.png">
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    return {};
  },
  methods: {
    toLogin() {
      this.$router.replace('/name');
    },
    playMusic() {
      const { bgMusic } = this.$refs;
      if (bgMusic.paused) {
        bgMusic.play();
      }
    },
  },
};
</script>

<style scoped>
.home {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #85b8cb;
}
.title {
  position: absolute;
  left: 18vw;
  top: 17vh;
  width: 68vw;
  height: auto;
}
.words {
  position: absolute;
  right: 8vw;
  top: 50vh;
  width: auto;
  height: 30vh;
}
.eye-outline {
  position: absolute;
  top: 125px;
  left: 262px;
  width: 66px;
  height: 66px;
  animation: spin 7s linear infinite both;
}
.slide-btn {
  position: absolute;
  bottom: 15vw;
  right: 15vw;
  width: 10vw;
  height: 10vw;
}
.slide-btn-outer {
  position: absolute;
  bottom: 15vw;
  right: 15vw;
  width: 10vw;
  height: 10vw;
  animation: breathe 1s linear infinite alternate both;
}
@keyframes breathe {
  from {
    width: 10vw;
    height: 10vw;
  }
  to {
    width: 15vw;
    height: 15vw;
    bottom: 12.5vw;
    right: 12.5vw;
  }
}
</style>
