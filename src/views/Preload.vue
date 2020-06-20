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
      percent: '',
    };
  },
  mounted() {
    this.preload();
  },
  methods: {
    preload() {
      const imgs = [
        '/715_Things_GY/img/title.png',
        '/715_Things_GY/img/free_txt.png',
        '/715_Things_GY/img/confirm-top.png',
        '/715_Things_GY/img/side.png',
        '/715_Things_GY/img/input-bg.png',
        '/715_Things_GY/img/slide-btn-outer.png',
        '/715_Things_GY/img/slide-btn.png',
        '/715_Things_GY/img/confirm-btn.png',
        '/715_Things_GY/img/avatar.png',
        '/715_Things_GY/img/error.png',
        '/715_Things_GY/img/select-top.png',
        '/715_Things_GY/img/finish.png',
        '/715_Things_GY/img/input_name.png',
        '/715_Things_GY/img/music-btn.png',
        '/715_Things_GY/img/loading.png',
      ];
      for (let i = 0, len = imgs.length; i < len; i += 1) {
        const image = new Image();
        image.src = imgs[i];
        image.onload = () => {
          this.count += 1;
          // 计算图片加载的百分数，绑定到percent变量
          const percentNum = Math.floor((this.count / 15) * 100);
          this.percent = `${percentNum}%`;
        };
      }
    },
  },
  watch: {
    count(val) {
      // console.log(val)
      if (val === 15) {
        // 图片加载完成后跳转页面
        this.rout = '/home';
        this.$router.push({ path: 'home' });
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
