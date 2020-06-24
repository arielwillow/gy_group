<template>
  <div class="login">
    <img class="title" src="/gy_715/img/title.png">
    <img class="endingTxt" src="/gy_715/img/endingTxt.png" />
    <img class="wishBg" src="/gy_715/img/wishBg.png" />
    <textarea type="text" class="input"
    placeholder="空白提交则使用默认祝福～"
    value="祝高杨24岁生日快乐！" v-model="wish" />
    <div class="errTip" v-if="showError">
      <img class="errImg" src="/gy_715/img/error.png">字数最好不要超过33哦~
    </div>
    <img class="back" src="/gy_715/img/backBtn.png" @click="backList">
    <img class="wishSmt" src="/gy_715/img/nextBtn.png" @click="onSubmit">
  </div>
</template>

<script>
import groupInfo from '@/mock/groupInfo';

export default {
  data() {
    return {
      wish: this.VAR.Wish,
      showError: false,
      name: this.VAR.Name,
    };
  },
  methods: {
    onSubmit() {
      const isGroup = Object.keys(groupInfo).includes(this.name);
      if (this.wish && this.wish.length > 33) {
        this.showError = true;
      } else if (this.wish && this.wish.length <= 33 && isGroup) {
        this.VAR.setWish(this.wish);
        this.$router.push({ path: 'group' });
      } else if (this.wish && this.wish.length <= 33) {
        this.VAR.setWish(this.wish);
        this.$router.push({ path: 'share' });
      } else if (isGroup) {
        this.$router.push({ path: 'group' });
      } else {
        this.$router.push({ path: 'share' });
      }
    },
    backList() {
      this.VAR.setWish(this.wish);
      this.$router.push({ path: 'list' });
    },
  },
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: #d2e0e9;
}
.title {
  position: absolute;
  top: 2vw;
  right: 0vw;
  width: 28vw;
}
.endingTxt {
  position: absolute;
  top: 17vh;
  height: 15vh;
  left: 20vw;
}
.wishBg {
  position: absolute;
  width: 60vw;
  top: 40vh;
  left: 20vw;
}
.input {
  position: absolute;
  left: 23vw;
  top: calc(40vh + 15vw);
  width: 54vw;
  height: 15vw;
  color: #4b4a4a;
  outline: 0;
  border: 0;
  padding: 0;
  background: transparent;
  font-size: 15px;
  text-align: center;
  display: table-cell;
  vertical-align:middle;
  maxlength: 33;
  wrap: hard;
}
.errTip {
  position: absolute;
  top: calc(40%+33vw);
  left: 0;
  left: 23vw;
  width: 54vw;
  text-align: center;
  color: #8d7c84;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.errImg {
  width: 12px;
  height: 12px;
  display: block;
  margin-right: 3px;
}
.wishSmt {
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
