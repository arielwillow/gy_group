<template>
  <div class="app">
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
