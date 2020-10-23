<template>
  <div class="home">
    <img class= "yang1" src="/gy_group/img/yang1.png">
    <img class= "yang2" src="/gy_group/img/yang2.png">
    <img class= "title" src="/gy_group/img/title.png">
    <img class="toCalendar" src="/gy_group/img/nextBtn.png" @click="toCalendar">
    <div class="txt">
      <p>流浪羊群｜佛系生长</p>
      <p>始于2018.11.13</p>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    toCalendar() {
      this.$router.push({ path: 'calendar' });
    },
  },
};
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100%;
  background-color: rgb(254,254,254);
}
.title {
  position: absolute;
  left: 36vw;
  top: 14vh;
  width: 26vw;
}
.yang1 {
  position: absolute;
  left: 0vw;
  top: 7vw;
  width: 40vw;
}
.yang2 {
  position: absolute;
  right: 0vw;
  top: 45vh;
  width: 55vw;
}
.toCalendar {
  position: absolute;
  top: calc(75vh-6vw);
  left: calc(47vw-1.5vh);
  width: calc(6vw+3vh);
}
.txt {
  position: absolute;
  width: 100vw;
  font-size: 12px;
  font-family: "songti";
  top: 82vh;
  text-align: center;
  white-space: pre;
  line-height: 2px;
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
    right: 39vw;
  }
}
</style>
