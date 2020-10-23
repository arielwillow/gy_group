
<template>
  <div class="name">
    <img class="yang3" src="/gy_group/img/yang3.png">
    <p class="title">请输入您的微博ID~</p>
    <div class="inputBg">
      <input type="text" class="input" v-model="name"/>
    </div>
    <div class="errTip" v-if="showError">
      <img class="errImg" src="/gy_group/img/error.png">这样我不知道您是谁哦~
    </div>
    <img class="nameSmt" src="/gy_group/img/nextBtn.png" @click="onSubmit">
    <img class="toBack" src="/gy_group/img/backBtn.png" @click="toBack">
  </div>
</template>

<script>
import groupInfo from '@/mock/groupInfo';

export default {
  data() {
    return {
      name: this.VAR.Name,
      userinfo: this.VAR.Userinfo,
      special1: this.VAR.Special1,
      special2: this.VAR.Special2,
      cntall: this.VAR.cntAll,
      showError: false,
      p_date: this.VAR.pDate,
    };
  },
  methods: {
    toBack() {
      this.$router.go(-1);
    },
    onSubmit() {
      const isGroup = Object.keys(groupInfo).includes(this.name);

      if (this.name === '高杨_Gyon' || this.name === '黄子弘凡_Lars' || this.name === '代玮代玮') {
        this.$router.push({ path: 'doc2' });
        this.showError = false;
        this.VAR.setName(this.name);
        this.VAR.setSpecial1(0);
        this.VAR.setSpecial2(0);
        this.VAR.setUserinfo([]);
        this.VAR.setcntAll(0);
      } else if (this.name && isGroup) {
        const userinfo = groupInfo[this.name];
        const birthDay = userinfo[9];
        this.VAR.setName(this.name);
        this.VAR.setUserinfo(userinfo);
        this.VAR.setcntAll(Object.keys(groupInfo).length);
        this.showError = false;

        if (birthDay === this.p_date.slice(5)) {
          this.VAR.setSpecial1(1);
        } else {
          this.VAR.setSpecial1(0);
        }
        if (userinfo[0].slice(5) === this.p_date.slice(5)) {
          this.VAR.setSpecial2(1);
        } else {
          this.VAR.setSpecial2(0);
        }

        if (this.VAR.Special1 === 1) {
          this.$router.push({ path: 'special1' });
        } else if (this.VAR.Special2 === 1) {
          this.$router.push({ path: 'special2' });
        } else {
          this.$router.push({ path: 'doc1' });
        }
      } else if (this.name) {
        this.VAR.setName(this.name);
        this.showError = false;
        this.$router.push({ path: 'join' });
        this.VAR.setSpecial1(0);
        this.VAR.setSpecial2(0);
        this.VAR.setUserinfo([]);
        this.VAR.setcntAll(0);
      } else {
        this.showError = true;
        this.VAR.setName('');
        this.VAR.setSpecial1(0);
        this.VAR.setSpecial2(0);
        this.VAR.setUserinfo([]);
        this.VAR.setcntAll(0);
      }
    },
  },
};
</script>

<style scoped>
.name {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}
.title {
  position: absolute;
  top: 50vh;
  width: 100vw;
  font-size: 18px;
  font-family: "songti";
  text-align: center;
}
.yang3 {
  position: absolute;
  right: 0vw;
  top: 10vh;
  width: 35vw;
}
.inputBg {
  position: absolute;
  top: calc(52vh + 40px);
  left: 20vw;
  width: 60vw;
  height: 40px;
  border: 1px solid black;
}
.input {
  position: relative;
  width: 95%;
  height: 95%;
  font-size: 18px;
  font-family: "songti";
  text-align: center;
  top: 50%;
  transform: translate(0, -50%);
  outline: 0;
  border: 0;
  padding: 0;
  color: #4b4a4a;
  background: transparent;
}
.errTip {
  position: absolute;
  top: calc(52vh + 90px);
  left: 20vw;
  width: 60vw;
  text-align: center;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "songti";
}
.errImg {
  width: 12px;
  height: 12px;
  display: block;
  margin-right: 3px;
}
.toBack {
  position: absolute;
  top: 3vw;
  left: 3vw;
  width: 4vw;
  height: 4vw;
}
.nameSmt {
  position: absolute;
  bottom: calc(20vh+8vw);
  left: calc(47vw-1vh);
  width: calc(6vw+2vh);
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
