<template>
  <div class="name">
    <img class="title" src="@/assets/img/title.png">
    <img class="input-bg" src="@/assets/img/input_name.png">
    <input type="text" class="input" v-model="name" v-focus />
    <div class="error-tip" v-if="showError">
      <img class="error-img" src="@/assets/img/error.png">请输入你的名字，字数要小于等于6哦~
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
      if (this.name && (this.name.length <= 6)) {
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
  width: 60vw;
  top: calc(24% + 14vw);
  outline: 0;
  border: 0;
  padding: 0;
  color: #4b4a4a;
  background: transparent;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
}
.name {
  width: 100vw;
  height: 100%;
  background-color: #d2e0e9;
}
.title {
  position: absolute;
  top: 1vh;
  right: 0vw;
  width: 28vw;
}
.input-bg {
  position: absolute;
  left: 20vw;
  top: 24vh;
  width: 60vw;
}
.error-tip {
  position: absolute;
  top: calc(24% + 26vw);
  left: 20vw;
  width: 60vw;
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
.confirm-top {
  position: absolute;
  bottom: 30vh;
  left: 35vw;
  width: 30vw;
}
</style>
