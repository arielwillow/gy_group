<template>
  <div class="login">
    <img class="title" src="/715_Things_GY/img/title.png">
    <img class="endingTxt" src="/715_Things_GY/img/endingTxt.png" />
    <img class="wishBg" src="/715_Things_GY/img/wishBg.png" />
    <textarea type="text" class="input"
    placeholder="空白提交则使用默认祝福～"
    value="祝高杨24岁生日快乐！" v-model="wish" />
    <div class="errTip" v-if="showError">
      <img class="errImg" src="/715_Things_GY/img/error.png">字数最好不要超过33哦~
    </div>
    <img class="back" src="/715_Things_GY/img/backBtn.png" @click="backList">
    <img class="wishSmt" src="/715_Things_GY/img/nextBtn.png" @click="onSubmit">
  </div>
</template>

<script>
export default {
  data() {
    return {
      wish: this.VAR.Wish,
      showError: false,
    };
  },
  methods: {
    onSubmit() {
      // const { sele, name } = this.$route.query;
      if (this.wish && this.wish.length <= 33) {
        this.VAR.setWish(this.wish);
        this.$emit('login', this.wish);
        localStorage.setItem('free', this.wish);
        // this.$router.replace(`/share?sele=${sele}&name=${name}&wish=${this.wish}`);
        this.$router.push({ path: 'share' });
        this.showError = false;
      } else if (this.wish && this.wish.length > 33) {
        this.showError = true;
      } else {
        // const w = '祝高杨24岁生日快乐！';
        // this.$emit('login', w);
        // this.$router.replace(`/share?sele=${sele}&name=${name}&wish=${w}`);
        this.$router.push({ path: 'share' });
      }
    },
    backList() {
      if (this.wish && this.wish.length <= 33) {
        this.VAR.setWish(this.wish);
        this.$router.push({ path: 'list' });
      } else {
        this.$router.push({ path: 'list' });
      }
      // const { sele, name } = this.$route.query;
      // this.$router.replace(`/list?name=${name}&sele=${sele}`);
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
  top: 15vh;
  height: 20vh;
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
  top: calc(40%+15vw);
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
}
.back {
  position: absolute;
  top: calc(75% + 2vw);
  left: 26vw;
  width: 16vw;
  height: 16vw;
}
</style>
