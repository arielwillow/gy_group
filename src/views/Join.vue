<template>
   <div class="join">
    <div class="txt">
      <p>Oops，这里还找不到您哦～</p>
      <p>欢迎扫描下图加入羊群～</p>
    </div>
    <img class="joinPic" src="/gy_group/img/yang2.png">
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
  background-color: #ffffff;
}
.txt {
  position: absolute;
  width: 100vw;
  top: 20vh;
  font-size: 18px;
  font-family: "songti";
  text-align: center;
  line-height: 15px;
}
.joinPic {
  position: absolute;
  width: 50vw;
  top: 28vh;
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
