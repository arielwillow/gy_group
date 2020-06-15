<template>
  <div class="login scrolling-side-right">
    <img class="title" src="@/assets/img/title.png">
    <img class="input-bg" src="@/assets/img/input-bg.png">
    <input type="text" class="input"
    placeholder="如不填写，则使用默认祝福～"
    value="祝高杨24岁生日快乐！" v-model="wish" v-focus />
    <img class="confirm-txt" src="@/assets/img/free_txt.png" />
    <img class="confirm-top" src="@/assets/img/finish.png" @click="onSubmit">
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
      if (this.wish) {
        this.$emit('login', this.wish);
        localStorage.setItem('free', this.wish);
        this.$router.replace(`/share?sele=${sele}&name=${name}&wish=${this.wish}`);
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
  right: 17vw;
  width: 28vw;
}
.confirm-txt {
  position: absolute;
  width: 220px;
  top: 305px;
  left: 40px;
}
.input-bg {
  position: absolute;
  left: 37px;
  top: 90px;
  width: 244px;
}
.input {
  position: absolute;
  left: 41px;
  top: 147px;
  width: 239px;
  height: 115px;
  outline: 0;
  border: 0;
  padding: 0;
  color: #4b4a4a;
  background: transparent;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
}
.error-tip {
  position: absolute;
  top: 275px;
  left: 0;
  right: 50px;
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
  animation: shine .5s linear infinite alternate both;
}
.confirm-top {
  position: absolute;
  bottom: 30vh;
  left: 26vw;
  width: 30vw;
  transition: all .15s linear;
}


@keyframes shine {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
