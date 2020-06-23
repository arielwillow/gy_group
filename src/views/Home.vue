<template>
  <div class="home">
    <img class="title" src="/715_Things_GY/img/title.png">
    <img class="con" src="/715_Things_GY/img/con.png">
    <img class="entryBtn" src="/715_Things_GY/img/nextBtn.png" @click="toLogin">
  </div>
</template>

<script>
export default {
  methods: {
    toLogin() {
      this.$router.push({ path: 'name' });
    },
  },
  mounted() {
    this.VAR.setGlobalheight(window.innerHeight);
  },
};
</script>

<style scoped>
.home {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #afc4d3;
}
.title {
  position: absolute;
  left: 3vw;
  top: 15vh;
  width: 85vw;
  height: auto;
}
.con {
  position: absolute;
  bottom: calc(10vh + 19vw);
  right: 18vw;
  width: 10vw;
}
.entryBtn {
  position: absolute;
  bottom: 10vh;
  right: 13vw;
  height: 20vw;
  width: 20vw;
  animation: breathe 1.5s linear infinite alternate both;
}
@keyframes breathe {
  from {
    width: 20vw;
    height: 20vw;
  }
  to {
    width: 22vw;
    height: 22vw;
    bottom: calc(10%- 1vw);
    right: 12vw;
  }
}
</style>
