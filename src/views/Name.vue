<template>
  <div class="name">
    <img class="title" src="/715_Things_GY/img/title.png">
    <img class="inputBg" src="/715_Things_GY/img/inputBg.png">
    <input type="text" class="input" v-model="name"/>
    <div class="errTip" v-if="showError">
      <img class="errImg" src="/715_Things_GY/img/error.png">请输入您的名字哦~
    </div>
    <div class="errTip" v-if="!showError">
      <p>PS：可以随意输入，但羊群小伙伴输入准确微博名会有额外小彩蛋掉落~</p>
    </div>
    <img class="nameSmt" src="/715_Things_GY/img/nextBtn.png" @click="onSubmit">
    <img class="back" src="/715_Things_GY/img/backBtn.png" @click="backHome">
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.VAR.Name,
      showError: false,
    };
  },
  methods: {
    onSubmit() {
      if (this.name) {
        // this.$emit('login', this.name);
        this.VAR.setName(this.name);
        this.showError = false;
        this.$router.push({ path: 'loading' });
      } else {
        this.showError = true;
      }
    },
    backHome() {
      this.VAR.setName(this.name);
      this.$router.push({ path: 'home' });
    },
  },
};
</script>

<style scoped>
.name {
  width: 100vw;
  height: 100%;
  background-color: #d2e0e9;
}
.title {
  position: absolute;
  top: 2vw;
  right: 0vw;
  width: 28vw;
}
.inputBg {
  position: absolute;
  left: 20vw;
  top: 24vh;
  width: 60vw;
}
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
.errTip {
  position: absolute;
  top: calc(24% + 26vw);
  left: 20vw;
  width: 60vw;
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
.nameSmt {
  position: absolute;
  top: 63vh;
  right: 26vw;
  width: 20vw;
  height: 20vw;
}
.back {
  position: absolute;
  top: calc(63% + 2vw);
  left: 26vw;
  width: 16vw;
  height: 16vw;
}
</style>
