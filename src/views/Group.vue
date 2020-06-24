<template>
  <div class="group">
    <img class="title" src="/gy_715/img/title3.png">
    <div class="txt" style="white-space: pre-line;">
      <p style="text-indent:30px;" >2018年11月13日9时24分，羊群成立。</p>
      <p> </p>
      <p style="text-indent:30px;" >{{joinTime}}，你加入了羊群，是现存成员中的第{{joinRank}}位{{rkPct}}</p>
      <p> </p>
      <p style="text-indent:30px;">今天是你在羊群的第</p>
      <p class="special">{{dayCnt}}</p>
      <p class="right">天&nbsp;&nbsp;</p>
    </div>
    <img class="next" src="/gy_715/img/nextBtn.png" @click="goShare">
    <img class="back" src="/gy_715/img/backBtn.png" @click="backLogin">
  </div>
</template>

<script>
import groupInfo from '@/mock/groupInfo';

export default {
  data() {
    const name = this.VAR.Name;
    const rk = groupInfo[name][1];
    const tm = groupInfo[name][0];
    const tmstr = groupInfo[name][2];
    const cntAll = 1294;
    let pct = '。';
    const cnt = Math.round((new Date() - new Date(tm.replace(/-/g, '/'))) / (24 * 3600 * 1000)) + 1;

    if (parseInt(rk, 10) < cntAll * 0.01) {
      pct = '，超过了群里99%的乐高。';
    } else if (parseInt(rk, 10) < cntAll * 0.02) {
      pct = '，超过了群里98%的乐高。';
    } else if (parseInt(rk, 10) < cntAll * 0.05) {
      pct = '，超过了群里95%的乐高。';
    } else if (parseInt(rk, 10) < cntAll * 0.1) {
      pct = '，超过了群里90%的乐高。';
    } else if (parseInt(rk, 10) < cntAll * 0.2) {
      pct = '，超过了群里80%的乐高。';
    } else if (parseInt(rk, 10) < cntAll * 0.3) {
      pct = '，超过了群里70%的乐高。';
    } else if (parseInt(rk, 10) < cntAll * 0.4) {
      pct = '，超过了群里60%的乐高。';
    } else if (parseInt(rk, 10) < cntAll * 0.5) {
      pct = '，超过了群里50%的乐高。';
    } else {
      pct = '。';
    }
    return {
      joinTime: tmstr,
      joinRank: rk,
      rkPct: pct,
      dayCnt: cnt,
    };
  },
  methods: {
    goShare() {
      this.$router.push({ path: 'share' });
    },
    backLogin() {
      this.$router.push({ path: 'login' });
    },
  },
};
</script>

<style scoped>
.group {
  width: 100vw;
  height: 100%;
  background-color: #d9e1d0;
}
.title {
  position: absolute;
  left: 3vw;
  top: 5vw;
  width: 18vw;
  height: auto;
}
.txt {
  position: absolute;
  left: 31vw;
  top: 19vh;
  width: 58vw;
  font-size: 15px;
}
.special {
  text-align: center;
  font-size: 40px;
}
.right {
  text-align: right;
  padding-right: 30px;
}
.next {
  position: absolute;
  top: 75vh;
  right: 26vw;
  width: 20vw;
  height: 20vw;
  animation: breathe 1.5s linear infinite alternate both;
}
.back {
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
