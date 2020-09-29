<template>
  <div class="doc2">
    <div class="txt" style="white-space: pre-line;">
      <p style="text-indent:30px;" >上月你的活跃指数为{{act_index}}{{actpct}}</p>
      <p> </p>
      <p style="text-indent:30px;" >你的当前活跃等级为{{level_now}}，
      至下一等级{{level_next}}的升级进度为{{rate_str}}。</p>
      <p> </p>
    </div>
    <img class="toBack" src="/gy_group/img/backBtn.png" @click="toBack">
  </div>
</template>

<script>
export default {
  data() {
    const info = this.VAR.Userinfo;

    return {
      act_index: info[3],
      level_now: info[5],
      level_next: info[6],
      rate_str: info[8],
    };
  },
  methods: {
    toBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.doc2 {
  width: 100vw;
  height: 100%;
  background-color: #ffffff;
}
.toBack {
  position: absolute;
  top: calc(75vh + 2vw);
  left: 26vw;
  width: 16vw;
  height: 16vw;
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
