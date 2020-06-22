<template>
  <div class="page-container">
    <div class="loading-panel">
      <p>送给24岁的高先生</p>
      <p> </p>
      <p>也送给喜欢高杨的你</p>
      <p> </p>
      <p>{{percent}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      percent: '0%',
    };
  },
  mounted() {
    this.preload();
  },
  methods: {
    preload() {
      const imgs = [
        '/715_Things_GY/img/mscBtn.png', // app
        '/715_Things_GY/img/title.png', // home
        '/715_Things_GY/img/nextBtn.png',
        '/715_Things_GY/img/con.png',
        '/715_Things_GY/img/inputBg.png', // name
        '/715_Things_GY/img/error.png',
        '/715_Things_GY/img/backBtn.png',
        '/715_Things_GY/img/selectTop.png', // list
        '/715_Things_GY/img/endingTxt.png', // wish
        '/715_Things_GY/img/wishBg.png',
        '/715_Things_GY/img/avatar.png', // share
        '/715_Things_GY/img/loading.png',
        '/715_Things_GY/things/1.png',
        '/715_Things_GY/things/2.png',
        '/715_Things_GY/things/3.png',
        '/715_Things_GY/things/4.png',
        '/715_Things_GY/things/5.png',
        '/715_Things_GY/things/6.png',
        '/715_Things_GY/things/7.png',
        '/715_Things_GY/things/8.png',
        '/715_Things_GY/things/9.png',
        '/715_Things_GY/things/10.png',
        '/715_Things_GY/things/11.png',
        '/715_Things_GY/things/12.png',
        '/715_Things_GY/things/13.png',
        '/715_Things_GY/things/14.png',
        '/715_Things_GY/things/15.png',
        '/715_Things_GY/things/16.png',
        '/715_Things_GY/things/17.png',
        '/715_Things_GY/things/18.png',
        '/715_Things_GY/things/19.png',
        '/715_Things_GY/things/20.png',
        '/715_Things_GY/things/21.png',
      ];
      for (let i = 0, len = imgs.length; i < len; i += 1) {
        const image = new Image();
        image.src = imgs[i];
        image.onload = () => {
          this.count += 1;
          // 计算图片加载的百分数，绑定到percent变量
          const percentNum = Math.floor((this.count / 33) * 100);
          this.percent = `${percentNum}%`;
        };
      }
    },
  },
  watch: {
    count(val) {
      if (val === 33) {
        // 图片加载完成后跳转页面
        this.rout = '/home';
        this.$router.replace({ path: 'home' });
      }
    },
  },
};
</script>

<style scoped>
.page-container {
  width: 100%;
  height: 100%;
  background-color: #d2e0e9;
}
.loading-panel {
  position: absolute;
  top: 30vh;
  width: 100vw;
  left: 0vw;
  z-index: 100;
  text-align: center;
  font-size: 15px;
}
</style>
