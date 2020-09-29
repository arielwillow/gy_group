<template>
  <div class="special1">
    <div class="txt">
      <p>亲爱的{{name}}</p>
      <p>生日快乐。</p>
    </div>
    <img class="anniv" src="/gy_group/img/yang2.png">
    <img class="toNext" src="/gy_group/img/nextBtn.png" @click="toNext">
    <img class="toBack" src="/gy_group/img/backBtn.png" @click="toBack">
  </div>
</template>

<script>

export default {
  data() {
    return {
      name: this.VAR.Name,
      special2: this.VAR.Special2,
    };
  },
  methods: {
    toNext() {
      if (this.special2 === 1) {
        this.$router.push({ path: 'special2' });
      } else {
        this.$router.push({ path: 'doc1' });
      }
    },
    toBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.special1 {
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
.anniv {
  position: absolute;
  width: 50vw;
  top: 28vh;
  left: 25vw;
}
.toNext {
  position: absolute;
  bottom: calc(20vh+8vw);
  left: calc(47vw-1vh);
  width: calc(6vw+2vh);
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
    top: calc(63vh - 1vw);
    right: 25vw;
  }
}
</style>
