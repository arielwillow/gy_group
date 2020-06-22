<template>
  <div class="page-container">
    <div class="loading-panel">
      <p>{{percent}}</p>
    </div>
    <img class="birth" src="/715_Things_GY/img/loading.png" />
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
