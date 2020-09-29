<template>
  <div class="special2">
    <div class="txt">
      <p>Hi，{{name}}</p>
      <p>{{joinDate}},你加入了羊群</p>
      <p>感恩遇见，相伴{{year}}年</p>
    </div>
    <img class="anniv" src="/gy_group/img/yang2.png">
    <img class="toNext" src="/gy_group/img/nextBtn.png" @click="toNext">
    <img class="toBack" src="/gy_group/img/backBtn.png" @click="toBack">
  </div>
</template>

<script>

export default {
  data() {
    // const joinyear = parseInt(this.VAR.Userinfo[0].split('-')[0], 10);
    // const yearnow = parseInt(this.pDate.split('-')[0], 10);
    return {
      name: this.VAR.Name,
      joinDate: this.VAR.Userinfo[2],
      // year: yearnow - joinyear,
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
  background-color: #ffffff;
}
.txt {
  position: absolute;
  width: 100vw;
  top: 20vh;
  font-size: 18px;
  font-family: "songti";
  text-align: center;
  line-height: 10px;
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
</style>
