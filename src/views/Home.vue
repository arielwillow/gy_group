<template>
  <div class="home">
    <img class= "title" src="/gy_group/img/title.png">
    <img class= "yang1" src="/gy_group/img/yang1.png">
    <img class= "yang2" src="/gy_group/img/yang2.png">
    <img class="toCalendar" src="/gy_group/img/nextBtn.png" @click="toCalendar">
    <div class="txt">
      <p>流浪羊群｜佛系生长</p>
      <p>始于2018.11.23</p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    let day = new Date().getDate();
    let mon = new Date().getMonth() + 1;
    const year = new Date().getFullYear();

    if (mon < 10) {
      mon = ['0', mon].join('');
    }

    if (day < 10) {
      day = ['0', day].join('');
    }

    const arr = [];
    arr.push(year.toString());
    arr.push(mon.toString());
    arr.push(day.toString());
    const pdate = arr.join('-');
    this.VAR.setpDate(pdate);

    return {
      test: this.VAR.pDate,
    };
  },
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
  background-color: #ffffff;
}
.title {
  position: absolute;
  left: 36vw;
  top: 17vh;
  width: 26vw;
}
.yang1 {
  position: absolute;
  right: 60vw;
  top: 7vh;
  width: 100vw;
}
.yang2 {
  position: absolute;
  left: 60vw;
  top: 60vh;
  width: 100vw;
}
.toCalendar {
  position: absolute;
  bottom: calc(20vh+8vw);
  left: calc(47vw-1vh);
  width: calc(6vw+2vh);
}
.txt {
  position: absolute;
  width: 100vw;
  font-size: 12px;
  font-family: "songti";
  bottom: 15vh;
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
