<template>
  <div class="home scrolling-side">
    <img class="title" src="@/assets/img/title.png">
    <img class="slide-btn-outer" src="@/assets/img/bird.png">
    <div class="start" @click="toLogin">
      <img class="text" src="@/assets/img/leaves.png">
      <p class="text2">即刻前往</p>
    </div>
    <img src="@/assets/img/3tian.png" class="footer1"/>
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
      const ele = document.getElementById('music-btn');
      if (bgMusic.paused) {
        bgMusic.play();
        ele.setAttribute('animation', 'spin 7s linear infinite both');
      }
    },
  },
};
</script>

<style scoped>
.footer1 {
  position: absolute;
  z-index: 11;
  bottom: 0rem;
  width: 15rem;
  right: 3rem;
  height: auto;
}
.home {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #4579a0;
}
.msc-div {
  position: absolute;
  top: 25px;
  right: 23px;
  text-align: center;
}
.music-btn {
  margin: auto;
  position: relative;
  width: 52px;
  height: 52px;
  background: url(~@/assets/img/music-btn.png) no-repeat center / contain;
}
.mcs-txt {
  position: relative;
  font-size: 12px;
  color: black;
}

.title {
  position: absolute;
  left: 59px;
  top: 159px;
  width: auto;
  height: 200px;
}

.eye {
  position: absolute;
  top: 148px;
  left: 277px;
  width: 50px;
  height: 30px;
}

.eye-outline {
  position: absolute;
  top: 125px;
  left: 262px;
  width: 66px;
  height: 66px;
  animation: spin 7s linear infinite both;
}

.start {
  position: absolute;
  right: 60px;
  top: 361px;
}

.text {
  width: auto;
  height: 80px;
}

.text2 {
  position: relative;
  color: black;
  right: 0px;
  text-align: right;
}

.slide {
  position: absolute;
  top: 580px;
  left: 165px;
}

.slide-line {
  position: absolute;
  top: 5px;
  width: 104px;
  height: 24px;
}

.slide-text {
  position: absolute;
  left: 37px;
  width: 50px;
  height: 14px;
}

.slide-btn {
  position: absolute;
  left: 104px;
}
.slide-btn-outer {
  position: absolute;
  top: 5px;
  width: 24px;
  height: 24px;
  animation: breathe 1s linear infinite alternate both;
}
@keyframes breathe {
  from {
    width: 24px;
    height: 24px;
  }
  to {
    width: 62px;
    height: 62px;
    margin-left: -19px;
    margin-top: -19px;
  }
}
</style>
