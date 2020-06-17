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
        this.$router.push({ path: 'Home' });
      }
    },
  },
};
</script>
