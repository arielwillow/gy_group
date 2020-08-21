<template>
  <div class="app">
    <audio ref="bgMusic" src="@/assets/audio/bg.mp3" loop="loop" preload="auto"
    @canplaythrough = "updateStatus"></audio>
    <div class="mscDiv1" v-if="rout === '/home' && status === 'origin'">
      <div class="mscBtn1" @click = "playMusic"></div>
    </div>
    <div class="mscDiv2" v-if="rout === '/home' && status === 'load'">
      <div class="mscBtn2"></div>
    </div>
    <div class="mscDiv3" v-if="rout === '/home' && status === 'play'">
      <div class="mscBtn3" @click = "playMusic"></div>
    </div>
    <transition name="slide-left">
      <router-view @login="saveName" />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    const route = this.$router.currentRoute.fullPath;
    return {
      name: '',
      rout: route,
      status: 'origin',
      already: 0,
    };
  },
  watch: {
    $route(to) {
      if (to.path !== '/' && to.path !== '/home') this.rout = '123';
      else if (to.path === '/home') this.rout = '/home';
      else this.rout = '/';
    },
  },
  methods: {
    saveName(name) {
      this.name = name;
    },
    playMusic() {
      const { bgMusic } = this.$refs;
      if (bgMusic.paused && this.already === 1) {
        bgMusic.play();
        this.status = 'play';
      } else if (bgMusic.paused && this.already === 0) {
        bgMusic.play();
        this.status = 'load';
      } else {
        bgMusic.pause();
        this.status = 'origin';
      }
    },
    updateStatus() {
      this.already = 1;
      if (this.status === 'load') {
        this.status = 'play';
      }
    },
  },
  mounted() {
    const { NODE_ENV } = process.env;
    document.documentElement.className = NODE_ENV;
  },
};
</script>

<style lang="scss">
.app {
  width: 100%;
  height: 100vh;
}
.mscDiv1 {
  position: fixed;
  bottom: calc(20vw + 45vw);
  right: 15.5vw;
  z-index: 200;
}
.mscBtn1 {
  position: relative;
  width: 15vw;
  height: 15vw;
  background: url(/gy_715/img/mscBtn.png) no-repeat center / contain;
}
.mscDiv2 {
  position: fixed;
  bottom: calc(20vw + 45vw);
  right: 15.5vw;
  text-align: center;
  z-index: 200;
}
.mscBtn2 {
  position: relative;
  width: 15vw;
  height: 15vw;
  background: url(/gy_715/img/mscBtn.png) no-repeat center / contain;
  animation: shine 0.75s linear infinite alternate both;
}
.mscDiv3 {
  position: fixed;
  bottom: calc(20vw + 45vw);
  right: 15.5vw;
  text-align: center;
  z-index: 200;
}
.mscBtn3 {
  position: relative;
  width: 15vw;
  height: 15vw;
  background: url(/gy_715/img/mscBtn.png) no-repeat center / contain;
  animation: spin 10s linear infinite;
}
body {
    margin: 0;
    padding: 0;
}

// 页面切换过渡

.slide-left-enter-active,
.slide-left-leave-active {
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 1s;
}

.slide-left-enter-to,
.slide-left-leave {
  transform: translateX(0);
}

.slide-left-leave-to {
  transform: translateX(-100vw);
}

.slide-left-enter {
  transform: translateX(100vw);
}

@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(-360deg);
  }
}

@keyframes shine {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
