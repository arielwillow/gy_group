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
import _ from 'lodash';
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
      const tt = _.random(-10, 10, false);
      let top;
      top = window.innerHeight * 0.05 + (index % 6) * 0.1 * window.innerHeight;
      top += _.random(-0.03, 0.03, true) * window.innerHeight;
      top = Math.max(top, 0.05);
      const angle = Math.floor(index / 6) * 30 + tt;
      const radius = window.innerHeight * 1.35 - top;
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
  position: absolute;
  top:6vh;
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
