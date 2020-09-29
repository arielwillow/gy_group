<template>
  <div class="calendar">
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
        <p class="sourceTxt">——来源：测试测试测试</p>
      </div>
      <div class = "storyPanel">
        <p class="storyTxt">在我小时候，我爸是摆卡拉OK的；就是那种在公园里面摆几个音箱，
        拿一盘或者很多很多碟啊、磁带啊，接一个小麦克风，然后五毛钱或是一块钱点一首歌这样去唱。
        我觉得那个时候的歌，怎么说呢，有一种真实感。对我来说，那种真实感很重要，
        真正可以听到某种情绪或是这个人、这首歌想表达的东西。\n\n</p>
      </div>
    </div>
    <div class = "bottomPanel">
      <div class = "bottom1">
        <img class="toBack" src="/gy_group/img/backBtn.png" @click="toBack">
      </div>
      <div class = "bottom2">
        <img class="toName" src="/gy_group/img/nextBtn.png" @click="toName">
      </div>
      <div class = "bottom3">
        <img class="toNotice" src="/gy_group/img/nextBtn.png" @click="toNotice">
      </div>
    </div>
  </div>
</template>

<script>
import calendar from '@/mock/calendar';

export default {
  data() {
    const dateInfo = calendar[this.VAR.pDate];
    return {
      p_date: this.VAR.pDate,
      day: dateInfo[0],
      dayOther: dateInfo[1],
      history: dateInfo[2],
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
  },
};
</script>

<style scoped>
.calendar {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}
.topPanel {
  position: absolute;
  right: 8vw;
  top: 15vh;
  width: 84vw;
  height: calc(25vh+56vw);
  border: 2.5px solid black;
  display:flex;
  flex-direction: row;
}
.leftPanel {
  position: relative;
  width: 25%;
  border-right: 1px solid black;
  display:flex;
  flex-direction: column;
}
.day {
  position: relative;
  height: 15%;
  border-bottom: 1px solid black;
  text-align: center;
  margin: 0 auto;
}
.dayTxt {
  font-size: 50px;
  font-family: "songti";
}
.dayother {
  position: relative;
  height: 15%;
  border-bottom: 1px solid black;
  text-align: center;
  margin: 0 auto;
  white-space: pre;
  line-height: 5%;
}
.dayotherTxt{
  font-size: 20px;
  font-family: "songti";
}
.history {
  position: relative;
  height: 70%;
  text-align: center;
}
.historyTxt {
  font-size: 20px;
  font-family: "songti";
  writing-mode: tb-rl;
  writing-mode: vertical-rl;
  bottom: 0;
}
.sourcePanel {
  position: relative;
  width: 15%;
  border-right: 1px solid black;
  text-align: bottom;
  display:table-cell;
  vertical-align: center;
}
.sourceTxt {
  position: relative;
  width: 90%;
  left: 5%;
  height: 90%;
  top: 5%;
  font-size: 15px;
  font-family: "songti";
  writing-mode: tb-rl;
  writing-mode: vertical-rl;
  word-wrap: break-word;
  font-display: swap;
}
.storyPanel {
  position: relative;
  width: 60%;
  display:table-cell;
  vertical-align: center;
}
.storyTxt {
  position: relative;
  width: 90%;
  left: 5%;
  height: 90%;
  top: 5%;
  font-size: 16px;
  font-family: "songti";
  margin: 0 auto;
  writing-mode: tb-rl;
  writing-mode: vertical-rl;
  word-wrap: break-word;
  font-display: swap;
}
.bottomPanel {
  position: absolute;
  right: 10vw;
  top: calc(45vh+56vw);
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
}
.toBack {
  position: relative;
  width: 70%;
}
.bottom2 {
  position: relative;
  width: 33%;
  margin: 0 auto;
  text-align: center;
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
}
.toNotice {
  position: relative;
  width: 70%;
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
