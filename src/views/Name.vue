<template>
  <div class="name">
    <img class="title" src="/gy_715/img/title.png">
    <img class="inputBg" src="/gy_715/img/inputBg.png">
    <input type="text" class="input" v-model="name"/>
    <div class="errTip" v-if="showError">
      <img class="errImg" src="/gy_715/img/error.png">请输入您的名字哦~
    </div>
    <div class="errTip" v-if="!showError">
      <p>PS：可以随意输入，但羊群小伙伴输入准确微博名会有额外小彩蛋掉落~</p>
    </div>
    <img class="nameSmt" src="/gy_715/img/nextBtn.png" @click="onSubmit">
    <img class="back" src="/gy_715/img/backBtn.png" @click="backHome">
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
    preload() {
      const imgs = [
        '/gy_715/things/22.png',
        '/gy_715/things/23.png',
        '/gy_715/things/24.png',
        '/gy_715/things/25.png',
        '/gy_715/things/26.png',
        '/gy_715/things/27.png',
        '/gy_715/things/28.png',
        '/gy_715/things/29.png',
        '/gy_715/things/30.png',
        '/gy_715/things/31.png',
        '/gy_715/things/32.png',
        '/gy_715/things/33.png',
        '/gy_715/things/34.png',
        '/gy_715/things/35.png',
        '/gy_715/things/36.png',
        '/gy_715/things/37.png',
        '/gy_715/things/38.png',
        '/gy_715/things/39.png',
        '/gy_715/things/40.png',
        '/gy_715/things/41.png',
        '/gy_715/things/42.png',
        '/gy_715/things/43.png',
        '/gy_715/things/44.png',
        '/gy_715/things/45.png',
        '/gy_715/things/46.png',
        '/gy_715/things/47.png',
        '/gy_715/things/48.png',
        '/gy_715/things/49.png',
        '/gy_715/things/50.png',
        '/gy_715/things/51.png',
        '/gy_715/things/52.png',
        '/gy_715/things/53.png',
        '/gy_715/things/54.png',
        '/gy_715/things/55.png',
        '/gy_715/things/56.png',
        '/gy_715/things/57.png',
        '/gy_715/things/58.png',
        '/gy_715/things/59.png',
        '/gy_715/things/60.png',
        '/gy_715/things/61.png',
        '/gy_715/things/62.png',
        '/gy_715/things/63.png',
        '/gy_715/things/64.png',
        '/gy_715/things/65.png',
        '/gy_715/things/66.png',
        '/gy_715/things/67.png',
        '/gy_715/things/68.png',
        '/gy_715/things/69.png',
        '/gy_715/things/70.png',
        '/gy_715/things/71.png',
      ];
      for (let i = 0, len = imgs.length; i < len; i += 1) {
        const image = new Image();
        image.src = imgs[i];
        image.onload = () => {
          this.count += 1;
          // 计算图片加载的百分数，绑定到percent变量
        };
      }
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
  top: calc(24vh + 14vw);
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
  animation: breathe 1.5s linear infinite alternate both;
}
.back {
  position: absolute;
  top: calc(63vh + 2vw);
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
    top: calc(63vh - 1vw);
    right: 25vw;
  }
}
</style>
