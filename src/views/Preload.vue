<template>
  <div class="page-container" style="text-align: center;">
    <div id="loading-panel">
      <h1><strong>Loading...</strong></h1>
      <h2><strong>{{percent}}</strong></h2>
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
        '/715_Things_GY/img/title.png',
        '/715_Things_GY/img/title.png',
        '/715_Things_GY/img/.DS_Store',
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
        '/715_Things_GY/img/word.png',
      ];
      for (let i = 0, len = imgs.length; i < len; i += 1) {
        const image = new Image();
        image.src = imgs[i];
        image.onload = () => {
          this.count += 1;
          // 计算图片加载的百分数，绑定到percent变量
          const percentNum = Math.floor((this.count / 5) * 100);
          this.percent = `${percentNum}%`;
        };
      }
    },
  },
  watch: {
    count(val) {
      // console.log(val)
      if (val === 5) {
        // 图片加载完成后跳转页面
        this.$router.push({ path: 'home' });
      }
    },
  },
};
</script>

<style scoped>
.page-container {
  position: 48vh;
  width: 25vw;
}
</style>
