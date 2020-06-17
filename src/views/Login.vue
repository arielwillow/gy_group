<template>
  <div class="login">
    <img class="title" src="/715_Things_GY/img/title.png">
    <img class="confirm-txt" src="/715_Things_GY/img/free_txt.png" />
    <img class="input-bg" src="/715_Things_GY/img/input-bg.png" />
    <textarea type="text" class="input"
    placeholder="如不填写，则使用默认祝福～"
    value="祝高杨24岁生日快乐！" v-model="wish" v-focus />
    <div class="error-tip" v-if="showError">
      <img class="error-img" src="/715_Things_GY/img/error.png">字数最好不要超过33哦~
    </div>
    <img class="confirm-top" src="/715_Things_GY/img/finish.png" @click="onSubmit">
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      showError: false,
    };
  },
  methods: {
    onSubmit() {
      const { sele, name } = this.$route.query;
      if (this.wish && this.wish.length <= 33) {
        this.$emit('login', this.wish);
        localStorage.setItem('free', this.wish);
        this.$router.replace(`/share?sele=${sele}&name=${name}&wish=${this.wish}`);
        this.showError = false;
      } else if (this.wish && this.wish.length > 33) {
        this.showError = true;
      } else {
        const w = '祝高杨24岁生日快乐！';
        this.$emit('login', w);
        this.$router.replace(`/share?sele=${sele}&name=${name}&wish=${w}`);
      }
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
  top: 1vh;
  right: 0vw;
  width: 28vw;
}
.confirm-txt {
  position: absolute;
  top: 15vh;
  height: 20vh;
  left: 20vw;
}
.input-bg {
  position: absolute;
  width: 60vw;
  top: 40vh;
  left: 20vw;
}
.input {
  position: absolute;
  left: 23vw;
  top: 50vh;
  width: 54vw;
  height: 30vw;
  color: #4b4a4a;
  outline: 0;
  border: 0;
  padding: 0;
  background: transparent;
  font-size: 16px;
  text-align: center;
  display: table-cell;
  vertical-align:middle;
  maxlength: 33;
  wrap: hard;
}
.confirm-top {
  position: absolute;
  bottom: 15vh;
  right: 17vw;
  width: 30vw;
}
.error-tip {
  position: absolute;
  top: calc(40%+45vw);
  left: 0;
  left: 23vw;
  width: 54vw;
  text-align: center;
  color: #a35d22;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.error-img {
  width: 12px;
  height: 12px;
  display: block;
  margin-right: 3px;
}
</style>
