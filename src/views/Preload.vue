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
        '/gy_715/img/mscBtn.png', // app
        '/gy_715/img/title.png', // home
        '/gy_715/img/nextBtn.png',
        '/gy_715/img/con.png',
        '/gy_715/img/inputBg.png', // name
        '/gy_715/img/error.png',
        '/gy_715/img/backBtn.png',
        '/gy_715/img/selectTop.png', // list
        '/gy_715/img/endingTxt.png', // wish
        '/gy_715/img/wishBg.png',
        '/gy_715/img/loading.png',
        '/gy_715/img/title3.png',
        '/gy_715/img/backS.png',
        '/gy_715/things/1.png',
        '/gy_715/things/2.png',
        '/gy_715/things/3.png',
        '/gy_715/things/4.png',
        '/gy_715/things/5.png',
        '/gy_715/things/6.png',
        '/gy_715/things/7.png',
        '/gy_715/things/8.png',
        '/gy_715/things/9.png',
        '/gy_715/things/10.png',
        '/gy_715/things/11.png',
        '/gy_715/things/12.png',
        '/gy_715/things/13.png',
        '/gy_715/things/14.png',
        '/gy_715/things/15.png',
        '/gy_715/things/16.png',
        '/gy_715/things/17.png',
        '/gy_715/things/18.png',
        '/gy_715/things/19.png',
        '/gy_715/things/20.png',
        '/gy_715/things/21.png',
      ];
      for (let i = 0, len = imgs.length; i < len; i += 1) {
        const image = new Image();
        image.src = imgs[i];
        image.onload = () => {
          this.count += 1;
          // 计算图片加载的百分数，绑定到percent变量
          const percentNum = Math.floor((this.count / 34) * 100);
          this.percent = `${percentNum}%`;
        };
      }
    },
  },
  watch: {
    count(val) {
      if (val === 34) {
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
