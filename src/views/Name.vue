<template>
  <div class="login scrolling-side-right">
    <img class="title" src="@/assets/img/title.png">
    <img class="input-bg" src="@/assets/img/input_name.png">
    <input type="text" class="input" v-model="name" v-focus />
    <div class="error-tip" v-if="showError">
      <img class="error-img" src="@/assets/img/error.png">请输入你的名字（昵称也行），字数要小于等于4哦~
    </div>
    <img class="confirm-top" src="@/assets/img/confirm-top.png" @click="onSubmit">
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
      if (this.name && (this.name.length <= 4)) {
        this.$emit('login', this.name);
        this.showError = false;
        this.$router.replace(`/list?name=${this.name}`);
      } else {
        this.showError = true;
      }
    },
  },
};
</script>

<style scoped>
.input {
  position: absolute;
  left: 20vw;
  top: 25vh;
  width: 60vw;
  outline: 0;
  border: 0;
  padding: 0;
  color: #4b4a4a;
  background: transparent;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
}
.login {
  width: 100vw;
  height: 100%;
  background-color: #d2e0e9;
}
.title {
  position: absolute;
  top: 13px;
  right: 53px;
  width: 114px;
}
.input-bg {
  position: absolute;
  left: 15vw;
  top: 20vh;
  width: 70vw;
}
.error-tip {
  position: absolute;
  top: 195px;
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
  top: 513px;
  left: 100px;
  width: 105px;
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
