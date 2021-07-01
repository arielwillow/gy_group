<template>
  <div class="doc1">
    <div class="docPanel">
      <div class="updatePanel">
         <div class="updateTxt">
           <p>* 数据更新时间：2020.11.05 11:00</p>
         </div>
      </div>
      <div class="actPanel">
         <div class="actTxt">
           <p>上月你的活跃指数为{{act_index}}</p>
           <p>截至当前你的活跃等级为{{level_now}}</p>
           <p>{{next_txt}}</p>
         </div>
      </div>
      <div class="joinPanel">
         <div class="joinTxt">
         <p>你于{{joinTime}}加入了羊群</p>
         <p>居现存成员第{{joinRank}}位{{rkPct}}</p>
         <p>今天是你在羊群的第{{dayCnt}}天</p>
         </div>
      </div>
      <div class="namePanel">
         <p class="nameTxt">{{name}}</p>
      </div>
    </div>
    <img class="toBack" src="/gy_group/img/backBtn.png" @click="toBack">
    <div class = "bottomPanel">
      <div class = "bottom1">
        <img class="toBack1" src="/gy_group/img/back.png" @click="toCalendar">
        <p>返回日历</p>
      </div>
      <div class = "bottom2">
        <img class="toName" src="/gy_group/img/report.png" @click="toReport">
        <p>上月月报</p>
      </div>
      <div class = "bottom3">
        <img class="toNotice" src="/gy_group/img/schedule.png" @click="toNotice">
        <p>公告栏</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const info = this.VAR.Userinfo;
    const rk = info[1];
    const tm = info[0];
    const tmstr = info[2];
    const cntall = this.VAR.cntAll;
    let pct = '。';
    const cnt = Math.ceil((new Date().getTime() - new Date(tm.replace(/-/g, '/')).getTime()) / (24 * 3600 * 1000));
    let txt = '';
    if (info[5] === 'LV7') {
      txt = '已为最高等级';
    } else if (info[5] === 'LV6') {
      const arr = [];
      arr.push('累计活跃度为');
      arr.push(info[10]);
      arr.push('，暂无升级进度');
      txt = arr.join('');
    } else {
      const arr = [];
      arr.push('至下一等级');
      arr.push(info[6]);
      arr.push('的升级进度为');
      arr.push(info[8]);
      txt = arr.join('');
    }

    if (parseInt(rk, 10) < cntall * 0.01) {
      pct = '，早于99%成员';
    } else if (parseInt(rk, 10) < cntall * 0.02) {
      pct = '，早于98%成员';
    } else if (parseInt(rk, 10) < cntall * 0.05) {
      pct = '，早于95%成员';
    } else if (parseInt(rk, 10) < cntall * 0.1) {
      pct = '，早于90%成员';
    } else if (parseInt(rk, 10) < cntall * 0.2) {
      pct = '，早于80%成员';
    } else if (parseInt(rk, 10) < cntall * 0.3) {
      pct = '，早于70%成员';
    } else if (parseInt(rk, 10) < cntall * 0.4) {
      pct = '，早于60%成员';
    } else if (parseInt(rk, 10) < cntall * 0.5) {
      pct = '，早于50%成员';
    } else {
      pct = '。';
    }

    return {
      joinTime: tmstr,
      joinRank: rk,
      rkPct: pct,
      dayCnt: cnt,
      act_index: info[3],
      level_now: info[5],
      name: this.VAR.Name,
      next_txt: txt,
    };
  },
  methods: {
    toCalendar() {
      this.$router.push({ path: 'calendar' });
    },
    toReport() {
      this.$router.push({ path: 'report' });
    },
    toNotice() {
      this.$router.push({ path: 'notice' });
    },
    toBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.doc1 {
  width: 100vw;
  height: 100%;
  background-color: rgb(254,254,254);
}
.docPanel {
  position: absolute;
  right: 8vw;
  top: 15vh;
  width: 84vw;
  height: 112vw;
  border: 2.5px solid black;
  display:flex;
  flex-direction: row;
}
.namePanel {
  position: relative;
  width: 25%;
  height: 80%;
  top: 10%;
  margin: 0;
  text-align: center;
  display: table;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: rl-tb;
  writing-mode: vertical-rl;
}
.nameTxt {
  position: relative;
  margin: 0;
  width: 100%;
  height: 100%;
  font-size: 23px;
  font-family: "songti";
  line-height: 23px;
  word-wrap: break-word;
  text-align: left;
  outline: 0;
  border: 0;
  padding: 0;
  display: table-cell;
  vertical-align: middle;
}
.joinPanel {
  position: relative;
  width: 36%;
  height: 80%;
  top: 10%;
  margin: 0;
  text-align: center;
  display: table;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: rl-tb;
  writing-mode: vertical-rl;
  border-right: 1px solid black;
}
.joinTxt {
  position: relative;
  margin: 0;
  width: 100%;
  height: 100%;
  font-size: 16px;
  line-height: 11px;
  text-indent: 16px;
  font-family: "songti";
  white-space: pre-wrap;
  text-align: left;
  outline: 0;
  border: 0;
  padding: 0;
  display: table-cell;
  vertical-align: middle;
}
.actPanel {
  position: relative;
  width: 36%;
  height: 80%;
  top: 10%;
  margin: 0;
  text-align: center;
  display: table;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: rl-tb;
  writing-mode: vertical-rl;
  border-right: 1px solid black;
}
.actTxt {
  position: relative;
  margin: 0;
  width: 100%;
  height: 100%;
  font-size: 16px;
  line-height: 11px;
  text-indent: 16px;
  font-family: "songti";
  white-space: pre-wrap;
  text-align: left;
  outline: 0;
  border: 0;
  padding: 0;
  display: table-cell;
  vertical-align: middle;
}
.updatePanel {
  position: relative;
  width: 3%;
  height: 80%;
  top: 10%;
  margin: 0;
  text-align: center;
  display: table;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: rl-tb;
  writing-mode: vertical-rl;
}
.updateTxt {
  position: relative;
  margin: 0;
  width: 100%;
  height: 100%;
  font-size: 8px;
  font-family: "songti";
  white-space: pre-wrap;
  text-align: right;
  outline: 0;
  border: 0;
  padding: 0;
  display: table-cell;
  vertical-align: middle;
}
.toBack {
  position: absolute;
  top: 3vw;
  left: 3vw;
  width: 5vw;
  height: 5vw;
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
