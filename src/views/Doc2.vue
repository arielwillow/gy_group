<template>
  <div class="doc2">
    <div class="txt" style="white-space: pre-line;">
       <p>让我康康是哪只不乖的小羊在冒充男管理！</p>
       <p>我不会被你骗到的哈哈哈～</p>
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
.doc2 {
  width: 100vw;
  height: 100%;
  background-color: rgb(254,254,254);
}
.txt {
  position: absolute;
  width: 60vw;
  left: 20vw;
  top: 30vh;
  font-size: 16px;
  line-height: 27px;
  text-indent: 32px;
  font-family: "songti";
  word-wrap: break-word;
  font-display: swap;
}
.toBack {
  position: absolute;
  top: 3vw;
  left: 3vw;
  width: 5vw;
  height: 5vw;
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
