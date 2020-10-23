<template>
   <div class="join">
     <img class="joinPic" src="/gy_group/img/join.png">
    <div class="txt">
      <p>Oops，这里还找不到您哦～</p>
      <p>可能您尚未加入或者加入时间不足一个月～</p>
      <p>欢迎微博扫描下图加入羊群～</p>
    </div>
    <img class="toBack" src="/gy_group/img/backBtn.png" @click="toBack">
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
.join {
  width: 100vw;
  height: 100%;
  background-color: rgb(254,254,254);
}
.txt {
  position: absolute;
  width: 100vw;
  top: 20vh;
  font-size: 16px;
  line-height: 27px;
  font-family: "songti";
  text-align: center;
  word-wrap: break-word;
  font-display: swap;
}
.joinPic {
  position: absolute;
  width: 50vw;
  top: 38vh;
  left: 25vw;
}
.toBack {
  position: absolute;
  top: 3vw;
  left: 3vw;
  width: 4vw;
  height: 4vw;
}
@keyframes breathe {
  from {
    width: 20vw;
    height: 20vw;
  }
  to {
    width: 22vw;
    height: 22vw;
    top: calc(75vh - 1vw);
    right: 25vw;
  }
}
</style>
