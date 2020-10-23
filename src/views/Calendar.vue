<template>
  <div class="calendar">
    <img class="toBack" src="/gy_group/img/backBtn.png" @click="toBack">
    <div class="topPanel">
      <div class = "leftPanel">
        <div class="day">
          <p class="dayTxt">{{day}}</p>
        </div>
        <div class="dayother">
          <p class="dayotherTxt">{{dayOther}}</p>
        </div>
        <div class="history">
          <p class="historyTxt">{{history}}</p>
        </div>
      </div>
      <div class = "sourcePanel">
        <p class="sourceTxt">{{source}}</p>
      </div>
      <div class = "storyPanel">
        <p class="storyTxt">{{detail}}</p>
      </div>
    </div>
    <div class = "bottomPanel">
      <div class = "bottom1">
        <img class="toBack1" src="/gy_group/img/back.png" @click="toHome">
        <p>返回主页</p>
      </div>
      <div class = "bottom2">
        <img class="toName" src="/gy_group/img/home.png" @click="toName">
        <p>羊群档案</p>
      </div>
      <div class = "bottom3">
        <img class="toNotice" src="/gy_group/img/schedule.png" @click="toNotice">
        <p>公告栏</p>
      </div>
    </div>
  </div>
</template>

<script>
import calendar from '@/mock/calendar';

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
    const dateInfo = calendar[pdate];

    return {
      p_date: pdate,
      day: dateInfo[0],
      dayOther: dateInfo[1],
      history: dateInfo[2],
      detail: dateInfo[3],
      source: dateInfo[4],
    };
  },
  methods: {
    toBack() {
      this.$router.go(-1);
    },
    toName() {
      this.$router.push({ path: 'name' });
    },
    toNotice() {
      this.$router.push({ path: 'notice' });
    },
    toHome() {
      this.$router.push({ path: 'home' });
    },
  },
};
</script>

<style scoped>
.calendar {
  width: 100%;
  height: 100%;
  background-color: rgb(254,254,254);
}
.topPanel {
  position: absolute;
  right: 8vw;
  top: 15vh;
  width: 84vw;
  height: 112vw;
  border: 2.5px solid black;
  display:flex;
  flex-direction: row;
}
.leftPanel {
  position: relative;
  width: 25%;
  height: 100%;
  border-right: 1px solid black;
  display:flex;
  flex-direction: column;
}
.day {
  position: relative;
  height: 20%;
  width: 100%;
  text-align:center;
  display: table;
}
.dayTxt {
  position: relative;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 70px;
  font-family: "songti";
  outline: 0;
  border: 0;
  padding: 0;
  margin: 0 auto;
  text-align:center;
  display: table-cell;
  vertical-align: middle;
}
.dayother{
  position: relative;
  height: 20%;
  width: 100%;
  text-align:center;
  display: table;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
}
.dayotherTxt{
  position: relative;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 18px;
  font-family: "songti";
  white-space: pre-wrap;
  outline: 0;
  border: 0;
  padding: 0;
  margin: 0 auto;
  text-align:center;
  display: table-cell;
  vertical-align: middle;
  line-height:21px;
}
.history {
  position: relative;
  height: 60%;
  width: 100%;
  display: table;
  margin: 0;
  text-align: center;
}
.historyTxt {
  position: relative;
  width: 90%;
  height: 90%;
  font-size: 13px;
  font-family: "songti";
  margin: 0 auto;
  text-align: center;
  outline: 0;
  border: 0;
  padding: 0;
  display: table-cell;
  vertical-align: middle;
  line-height: 22px;
  word-wrap: break-word;
  font-display: swap;
}
.sourcePanel {
  position: relative;
  width: 15%;
  height: 80%;
  top: 10%;
  margin: 0;
  text-align: center;
  display: table;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: rl-tb;
  writing-mode: vertical-rl;
}
.sourceTxt {
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 13px;
  font-family: "songti";
  text-align: right;
  font-display: swap;
  outline: 0;
  border: 0;
  padding: 0;
  margin: 0;
}
.storyPanel {
  position: relative;
  width: 60%;
  height: 80%;
  top: 10%;
  margin: 0;
  text-align: center;
  display: table;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: rl-tb;
  writing-mode: vertical-rl;
}
.storyTxt {
  position: relative;
  margin: 0;
  width: 100%;
  height: 100%;
  font-size: 17px;
  line-height: 28px;
  text-indent: 34px;
  font-family: "songti";
  word-wrap: break-word;
  font-display: swap;
  text-align: left;
  outline: 0;
  border: 0;
  padding: 0;
  display: table-cell;
  vertical-align: middle;
}
.bottomPanel {
  position: absolute;
  right: 10vw;
  top: calc(20vh+112vw);
  width: 45vw;
  height: 20vw;
  display:flex;
  flex-direction: row;
}
.bottom1 {
  position: relative;
  width: 33%;
  margin: 0 auto;
  text-align: center;
  font-size: 9px;
  font-family: "songti";
}
.toBack1 {
  position: relative;
  width: 70%;
}
.bottom2 {
  position: relative;
  width: 33%;
  margin: 0 auto;
  text-align: center;
  font-size: 9px;
  font-family: "songti";
}
.toName {
  position: relative;
  width: 70%;
}
.bottom3 {
  position: relative;
  width: 33%;
  margin: 0 auto;
  text-align: center;
  font-size: 9px;
  font-family: "songti";
}
.toNotice {
  position: relative;
  width: 70%;
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
    bottom: calc(20vw - 1vw);
    right: 12vw;
  }
}
</style>
