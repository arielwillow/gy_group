<template>
  <div class="group">
    <img class="title" src="/715_Things_GY/img/title3.png">
    <div class="txt" style="white-space: pre-line;">
      <p style="text-indent:30px;" >2018年11月13日9时24分，羊群成立。</p>
      <p> </p>
      <p style="text-indent:30px;" >{{joinTime}}，你加入了羊群，是现存成员中的第{{joinRank}}位{{rkPct}}</p>
      <p> </p>
      <p style="text-indent:30px;">今天是你在羊群的第</p>
      <p class="special">{{dayCnt}}</p>
      <p class="right">天&nbsp;&nbsp;</p>
    </div>
    <img class="next" src="/715_Things_GY/img/nextBtn.png" @click="goShare">
    <img class="back" src="/715_Things_GY/img/backBtn.png" @click="backLogin">
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
    let cnt = Math.ceil((new Date().getTime() - new Date(tm).getTime()) / (24 * 3600 * 1000));
    if (Number.isNaN(cnt)) {
      cnt = Math.ceil((new Date().getTime() - new Date(tm.replace(/-/g, '/')).getTime()) / (24 * 3600 * 1000));
    }

    if (parseInt(rk, 10) < cntAll * 0.1) {
      pct = '，超过了群里90%的乐高。';
    } else if (parseInt(rk, 10) < cntAll * 0.3) {
      pct = '，超过了群里70%的乐高。';
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
}
.back {
  position: absolute;
  top: calc(75% + 2vw);
  left: 26vw;
  width: 16vw;
  height: 16vw;
}
</style>
