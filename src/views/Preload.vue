<template>
  <div class="preload">
    <div class="loading-panel">
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
        '/gy_group/img/songti.ttf',
        '/gy_group/img/backBtn.png',
        '/gy_group/img/nextBtn.png',
      ];
      for (let i = 0, len = imgs.length; i < len; i += 1) {
        const image = new Image();
        image.src = imgs[i];
        image.onload = () => {
          this.count += 1;
          // 计算图片加载的百分数，绑定到percent变量
          const percentNum = Math.floor((this.count / 3) * 100);
          this.percent = `${percentNum}%`;
        };
      }
    },
  },
  watch: {
    count(val) {
      if (val === 2) {
        // 图片加载完成后跳转页面
        this.rout = '/home';
        this.$router.replace({ path: 'home' });
      }
    },
  },
};
</script>

<style scoped>
.preload {
  width: 100%;
  height: 100%;
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
