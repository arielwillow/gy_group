<template>
  <div class="doc1">
    <div class="txt" style="white-space: pre-line;">
      <p style="text-indent:30px;" >2018年11月13日9时24分，羊群成立。</p>
      <p> </p>
      <p style="text-indent:30px;" >{{joinTime}}，你加入了羊群，是现存成员中的第{{joinRank}}位{{rkPct}}</p>
      <p> </p>
      <p style="text-indent:30px;">今天是你在羊群的第</p>
      <p class="special">{{dayCnt}}</p>
      <p class="right">天&nbsp;&nbsp;</p>
      <p class="right">{{anniv}}</p>
    </div>
    <img class="toBack" src="/gy_group/img/backBtn.png" @click="toBack">
    <img class="toDoc2" src="/gy_group/img/backBtn.png" @click="toDoc2">
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
    const pdate = this.VAR.pDate;
    let pct = '。';
    const cnt = Math.ceil((new Date().getTime() - new Date(tm.replace(/-/g, '/')).getTime()) / (24 * 3600 * 1000));
    let a = '';

    if (parseInt(rk, 10) < cntall * 0.01) {
      pct = '，超过了群里99%的乐高。';
    } else if (parseInt(rk, 10) < cntall * 0.02) {
      pct = '，超过了群里98%的乐高。';
    } else if (parseInt(rk, 10) < cntall * 0.05) {
      pct = '，超过了群里95%的乐高。';
    } else if (parseInt(rk, 10) < cntall * 0.1) {
      pct = '，超过了群里90%的乐高。';
    } else if (parseInt(rk, 10) < cntall * 0.2) {
      pct = '，超过了群里80%的乐高。';
    } else if (parseInt(rk, 10) < cntall * 0.3) {
      pct = '，超过了群里70%的乐高。';
    } else if (parseInt(rk, 10) < cntall * 0.4) {
      pct = '，超过了群里60%的乐高。';
    } else if (parseInt(rk, 10) < cntall * 0.5) {
      pct = '，超过了群里50%的乐高。';
    } else {
      pct = '。';
    }

    if (info[10] !== 'na' && info[10] !== '' && info[9] > pdate) {
      a = [];
      a.push(parseInt(info[9].slice(5, 7), 10).toString());
      a.push('月');
      a.push(parseInt(info[9].slice(8, 10), 10).toString());
      a.push('日，你将迎来的你在这里的');
      a.push(info[10]);
      a.push('纪念日');
      a = a.join('');
    }

    return {
      joinTime: tmstr,
      joinRank: rk,
      rkPct: pct,
      dayCnt: cnt,
      anniv: a,
    };
  },
  methods: {
    toBack() {
      this.$router.go(-1);
    },
    toDoc2() {
      this.$router.push({ path: 'doc2' });
    },
  },
};
</script>

<style scoped>
.doc1 {
  width: 100vw;
  height: 100%;
  background-color: #ffffff;
}
.toBack {
  position: absolute;
  top: calc(75vh + 2vw);
  left: 26vw;
  width: 16vw;
  height: 16vw;
}
.toDoc2 {
  position: absolute;
  bottom: 20vw;
  right: 13vw;
  height: 20vw;
  width: 20vw;
  animation: breathe 1.5s linear infinite alternate both;
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
