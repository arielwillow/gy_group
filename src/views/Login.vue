<template>
  <div class="login scrolling-side-right">
    <img class="title" src="@/assets/img/title.png">
    <img class="confirm-txt" src="@/assets/img/free_txt.png" />
    <input type="text" class="input"
    placeholder="如不填写，则使用默认祝福～"
    value="祝高杨24岁生日快乐！" v-model="wish" v-focus />
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
  width: 60vw;
  bottom: 30vh;
  height: 100vw;
  left: 11vw;
}
.input {
  position: absolute;
  left: 11vw;
  bottom: 30vh;
  width: 60vw;
  height: 30vw;
  color: #4b4a4a;
  outline: 0;
  border: 0;
  padding: 0;
  background: transparent;
  font-size: 16px;
  text-align: center;
  vertical-align:middle;
}
.confirm-top {
  position: absolute;
  bottom: 15vh;
  right: 26vw;
  width: 30vw;
  transition: all .15s linear;
}
</style>
