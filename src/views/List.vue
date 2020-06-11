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
      top = 50 + (index % 6) * 80;
      top += _.random(-9, 9, false);
      const angle = Math.floor(index / 6) * 30 + tt;
      const radius = window.innerHeight * 1.25 - top;
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
  bottom: 12vh;
  left: 0px;
  right: 0px;
}
.tips {
  text-align: center;
  margin: auto;
  font-size: 12px;
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
  width: 15vw;
  height: 100%;
  background: #a35d22;
  text-align: center;
  line-height: 1;
}
.select-num {
  font-weight: 700;
  font-style: italic;
  font-size: 23px;
  color: #000;
  margin-top: 4px;
}
.select-state {
  font-size: 12px;
}
.list-bd {
  position: absolute;
  top: 10vh;
  left: calc(50% - 125vh);
  width: 250vh;
  height: 250vh;
  border-radius: 50%;
  animation: spin 71.5s linear infinite;
  color: #000;
}
.list-item {
  position: absolute;
  top: 0;
  left: 50%;
}
.btn-text {
  position: absolute;
  bottom: 5vh;
  left: 32vw;
  width: 36vw;
}
</style>
