<template>
  <div class="special2">
    <div class="txt">
      <p>Hi，{{name}}，</p>
      <p>{{year}}年前的今天</p>
      <p>{{joinDate}}</p>
      <p>你加入了羊群</p>
      <p>很高兴在这里遇见你</p>
    </div>
    <img class="anniv" :src="imgUrl">
    <img class="toNext" src="/gy_group/img/nextBtn.png" @click="toNext">
    <img class="toBack" src="/gy_group/img/backBtn.png" @click="toBack">
  </div>
</template>

<script>

export default {
  data() {
    const joinyear = parseInt(this.VAR.Userinfo[0].split('-')[0], 10);
    const yearnow = parseInt(this.VAR.pDate.split('-')[0], 10);
    const y = yearnow - joinyear;
    return {
      name: this.VAR.Name,
      joinDate: this.VAR.Userinfo[2],
      year: y,
      imgUrl: `/gy_group/img/year${y}.png`,
    };
  },
  methods: {
    toNext() {
      this.$router.push({ path: 'doc1' });
    },
    toBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.special2 {
  width: 100vw;
  height: 100%;
  background-color: rgb(254,254,254);
}
.txt {
  position: absolute;
  width: 100vw;
  top: 17vh;
  font-size: 16px;
  font-family: "songti";
  text-align: center;
  line-height: 10px;
}
.anniv {
  position: absolute;
  width: 40vw;
  top: 35vh;
  left: 25vw;
}
.toNext {
  position: absolute;
  top: calc(75vh-6vw);
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
</style>
