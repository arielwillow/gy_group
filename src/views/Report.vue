<template>
  <div class="notice">
    <img class="toBack" src="/gy_group/img/backBtn.png" @click="toBack">
    <p class="title">羊群月报｜2020.10</p>
    <p class="subtitle">制作：@荷花园卖花卷</p>
    <img class="content" src="/gy_group/img/report.jpg">
  </div>
</template>

<script>
export default {
  methods: {
    toBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.notice {
  width: 100vw;
  height: 100%;
  background-color: rgb(254,254,254);
}
.toBack {
  position: absolute;
  top: 3vw;
  left: 3vw;
  width: 4vw;
  height: 4vw;
}
.title {
  position: absolute;
  top: 5vh;
  width: 100vw;
  font-size: 18px;
  font-family: "songti";
  text-align: center;
}
.subtitle {
  position: absolute;
  top: calc(5vh+25px);
  width: 100vw;
  font-size: 14px;
  font-family: "songti";
  text-align: center;
}
.content {
  position: absolute;
  top: calc(5vh+60px);
  left: 8vw;
  width: 84vw;
}
@keyframes breathe {
  from {
    width: 20vw;
    height: 20vw;
  }
  to {
    width: 22vw;
    height: 22vw;
    bottom: calc(20vw - 1vw);
    right: 12vw;
  }
}
</style>
