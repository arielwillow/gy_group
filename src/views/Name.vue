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
    preload() {
      const imgs = [
        '/715_Things_GY/things/22.png',
        '/715_Things_GY/things/23.png',
        '/715_Things_GY/things/24.png',
        '/715_Things_GY/things/25.png',
        '/715_Things_GY/things/26.png',
        '/715_Things_GY/things/27.png',
        '/715_Things_GY/things/28.png',
        '/715_Things_GY/things/29.png',
        '/715_Things_GY/things/30.png',
        '/715_Things_GY/things/31.png',
        '/715_Things_GY/things/32.png',
        '/715_Things_GY/things/33.png',
        '/715_Things_GY/things/34.png',
        '/715_Things_GY/things/35.png',
        '/715_Things_GY/things/36.png',
        '/715_Things_GY/things/37.png',
        '/715_Things_GY/things/38.png',
        '/715_Things_GY/things/39.png',
        '/715_Things_GY/things/40.png',
        '/715_Things_GY/things/41.png',
        '/715_Things_GY/things/42.png',
        '/715_Things_GY/things/43.png',
        '/715_Things_GY/things/44.png',
        '/715_Things_GY/things/45.png',
        '/715_Things_GY/things/46.png',
        '/715_Things_GY/things/47.png',
        '/715_Things_GY/things/48.png',
        '/715_Things_GY/things/49.png',
        '/715_Things_GY/things/50.png',
        '/715_Things_GY/things/51.png',
        '/715_Things_GY/things/52.png',
        '/715_Things_GY/things/53.png',
        '/715_Things_GY/things/54.png',
        '/715_Things_GY/things/55.png',
        '/715_Things_GY/things/56.png',
        '/715_Things_GY/things/57.png',
        '/715_Things_GY/things/58.png',
        '/715_Things_GY/things/59.png',
        '/715_Things_GY/things/60.png',
        '/715_Things_GY/things/61.png',
        '/715_Things_GY/things/62.png',
        '/715_Things_GY/things/63.png',
        '/715_Things_GY/things/64.png',
        '/715_Things_GY/things/65.png',
        '/715_Things_GY/things/66.png',
        '/715_Things_GY/things/67.png',
        '/715_Things_GY/things/68.png',
        '/715_Things_GY/things/69.png',
        '/715_Things_GY/things/70.png',
        '/715_Things_GY/things/71.png',
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
}
.back {
  position: absolute;
  top: calc(63vh + 2vw);
  left: 26vw;
  width: 16vw;
  height: 16vw;
}
</style>
