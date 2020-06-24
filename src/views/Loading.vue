<template>
  <div class="page-container">
    <div class="loading-panel">
      <p>{{percent}}</p>
    </div>
    <img class="birth" src="/gy_715/img/loading.png" />
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
          const percentNum = Math.floor((this.count / 50) * 100);
          this.percent = `${percentNum}%`;
        };
      }
    },
  },
  watch: {
    count(val) {
      // console.log(val)
      if (val === 50) {
        // 图片加载完成后跳转页面
        this.$router.replace({ path: 'list' });
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
  bottom: 72vw;
  height: 30vw;
  width: 30vw;
  left: 35vw;
  z-index: 100;
  text-align: center;
  font-size: 14px;
}
.birth {
  position: absolute;
  bottom: 82vw;
  left: 32vw;
  width: 36vw;
  height: 36vw;
  animation: spin 15s linear infinite;
  z-index: 0;
}
</style>
