<template>
  <div class="home scrolling-side">
    <audio ref="bgMusic" src="@/assets/audio/bg.mp3" loop="loop" preload="auto"></audio>
    <div class="msc-div" v-if="rout === '/'">
      <div class="music-btn" @click = "playMusic"></div>
    </div>
    <img class="title" src="/715_Things_GY/img/title.png">
    <img class="slide-btn-outer" src="/715_Things_GY/img/slide-btn-outer.png">
    <img class="slide-btn" src="/715_Things_GY/img/slide-btn.png" @click="toLogin">
    <img class="words" src="/715_Things_GY/img/word.png">
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
.msc-div {
  position: absolute;
  top: 6.7vw;
  right: 0vw;
  text-align: center;
  z-index: 100;
}
.music-btn {
  position: relative;
  width: 12vh;
  height: 12vh;
  background: url(/715_Things_GY/img/music-btn.png) no-repeat center / contain;
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
