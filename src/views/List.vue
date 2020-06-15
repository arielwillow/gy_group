<template>
  <div class="list">
    <div class="top">
      <div class="num-box">
        <div class="select-num">{{ selectedCount }}</div>
        <div class="select-state">已选择</div>
      </div>
    </div>
    <div ref="wheel" class="list-bd" :style="{ animationPlayState }">
      <list-item
        class="list-item"
        v-for="item in randomItems"
        :key="item.id"
        :id="item.id"
        :text="item.text"
        :style="item.style"
        :radius="item.radius"
        @toggle="updateSelectedItems"
      />
    </div>
    <div>
      <div class="tipsDiv">
      <p class="tips">不用担心错过，还会转回来哒~</p>
      <p class="tips">每71.5秒就会转一圈哦~</p>
      </div>
    </div>
    <template v-if="selectedCount">
      <div @click = "goToShare">
      <img class="btn-text" src="@/assets/img/confirm-btn.png">
      </div>
    </template>
  </div>
</template>

<script>
// import _ from 'lodash';
import ListItem from '@/components/ListItem.vue';
import items from '@/mock/items';

export default {
  components: {
    ListItem,
  },
  data() {
    return {
      items,
      selectedItems: [],
      animationPlayState: 'running',
      startX: null,
    };
  },
  computed: {
    randomItems() {
      return this.items.map((item, index) => {
        const {
          id, top, angle, radius,
        } = this.getConfigByIndex(index);
        return {
          id,
          text: item,
          style: {
            transform: `translateY(${top}px) rotate(${angle}deg)`,
            transformOrigin: `center ${radius}px`,
          },
          radius,
        };
      });
    },
    selectedCount() {
      return this.selectedItems.length;
    },
  },
  methods: {
    goToShare() {
      const { name } = this.$route.query;
      const selection = this.selectedItems.toString();
      this.$router.replace(`/login?name=${name}&sele=${selection}`);
    },
    getConfigByIndex(index) {
      const id = index + 1;
      const ANGLE = [0, 5, 3, 10, 7, 6, 31, 24, 29, 32,
        32, 28, 69, 67, 69, 62, 66, 63, 96, 94,
        80, 94, 97, 91, 127, 118, 113, 122, 121,
        119, 141, 157, 157, 141, 148, 152, 186,
        176, 172, 172, 176, 184, 210, 213, 204,
        205, 203, 203, 231, 234, 241, 249, 239,
        241, 266, 274, 273, 275, 274, 266, 293,
        310, 295, 308, 294, 305, 327, 323, 340, 337, 330];
      const RADIUS = [1.2792, 1.2246, 1.1051, 0.9751, 0.8971, 0.8057,
        1.3, 1.2033, 1.1195, 1.0152, 0.9132, 0.8259, 1.3, 1.2267,
        1.127, 1.0138, 0.9211, 0.8135, 1.291, 1.1703, 1.0748,
        0.9932, 0.9114, 0.7911, 1.2895, 1.2078, 1.1201,
        1.0153, 0.8963, 0.8012, 1.2992, 1.1834, 1.1292,
        1.0285, 0.9277, 0.8238, 1.2773, 1.2145, 1.107,
        1.0117, 0.9038, 0.8221, 1.3, 1.2036, 1.076, 0.9846,
        0.8792, 0.8019, 1.2873, 1.2067, 1.1193, 1.0044,
        0.88, 0.7792, 1.3, 1.222, 1.0761, 1.0072, 0.9206,
        0.7975, 1.3, 1.2055, 1.1164, 1.0202, 0.9064, 0.8221,
        1.286, 1.1768, 1.0952, 0.9971, 0.8894];
      const angle = ANGLE[index];
      const radius = window.innerHeight * RADIUS[index];
      const top = window.innerHeight * (1.35 - RADIUS[index]);
      return {
        id, top, angle, radius,
      };
    },
    updateSelectedItems(text) {
      if (this.selectedItems.includes(text)) {
        this.selectedItems = this.selectedItems.filter((item) => item !== text);
      } else {
        this.selectedItems.push(text);
      }
      // console.log(this.selectedItems);
    },
  },
};
</script>

<style scoped>
.tipsDiv {
  text-align: center;
  position: absolute;
  bottom: 17vh;
  left: 0px;
  right: 0px;
}
.tips {
  text-align: center;
  margin: auto;
  font-size: 11px;
  font-style: italic;
  color: rgb(163, 93, 34);
}
.list {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #d2e0e9;
}
.top {
  position: relative;
  height: 5.5vh;
  background: url(~@/assets/img/select-top.png) no-repeat 0 0 / cover;
  box-shadow: 0 1px rgba(0, 0, 0, .3);
}
.num-box {
  position: absolute;
  top: 0;
  right: 0;
  width: 12.5vw;
  height: 100%;
  background: #a35d22;
  text-align: center;
  line-height: 1;
}
.select-num {
  font-weight: 700;
  font-style: italic;
  font-size: 2.8vh;
  color: #000;
  margin-top: 0.49vh;
}
.select-state {
  font-size: 1.5vh;
}
.list-bd {
  position: absolute;
  top: 6vh;
  left: calc(50% - 135vh);
  width: 270vh;
  height: 270vh;
  border-radius: 50%;
  animation: spin 71.5s linear infinite;
  color: #000;
}
.list-item {
  position: absolute;
  top: 0;
  left: 50%;
  font-size: 11px;
}
.btn-text {
  position: absolute;
  bottom: 10vh;
  left: 35vw;
  width: 30vw;
}
</style>
