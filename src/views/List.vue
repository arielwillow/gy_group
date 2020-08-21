<template>
  <div class="list">
    <div class="top">
      <div class="numBox">
        <div class="selectNum">{{ selectedCount }}</div>
        <div class="selectState">已选择</div>
      </div>
    </div>
    <div ref="wheel" class="listBg"
    :style="{ animationPlayState }" @dblclick="changeStatus">
      <list-item
        class="listItem"
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
      <p class="tips">双击空白区域可暂停，再次双击恢复~</p>
      </div>
    </div>
    <img class="listSmt" src="/gy_715/img/nextBtn.png"
    @click = "goToShare" v-if="selectedCount">
    <img class="back" src="/gy_715/img/backBtn.png" @click = "backName">
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue';
import items from '@/mock/items';
import RADIUS from '@/mock/RADIUS';
import ANGLE from '@/mock/ANGLE';

export default {
  components: {
    ListItem,
  },
  data() {
    return {
      items,
      selectedItems: this.VAR.Selection,
      animationPlayState: 'running',
      // hhh: h,
      animation: 'spin 130s linear infinite',
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
      this.VAR.setSelection(this.selectedItems);
      this.$router.push({ path: 'login' });
    },
    backName() {
      this.VAR.setSelection(this.selectedItems);
      this.$router.push({ path: 'name' });
    },
    getConfigByIndex(index) {
      const id = index + 1;
      const angle = ANGLE[index];
      const radius = document.documentElement.clientWidth * RADIUS[index] * 2;
      const top = document.documentElement.clientWidth * (1.35 - RADIUS[index]) * 2;
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
    },
    changeStatus() {
      if (this.animationPlayState === 'paused') {
        this.animationPlayState = 'running';
      } else {
        this.animationPlayState = 'paused';
      }
    },
  },
};
</script>

<style scoped>
.list {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #d2e0e9;
}
.top {
  position: relative;
  height: 6vh;
  background: url(/gy_715/img/selectTop.png) no-repeat 0 0 / cover;
  box-shadow: 0 1px rgba(0, 0, 0, .3);
}
.numBox {
  position: absolute;
  top: 0;
  right: 0;
  width: 12.5vw;
  height: 100%;
  background: #50657e;
  text-align: center;
  line-height: 1;
}
.selectNum {
  font-weight: 700;
  font-style: italic;
  font-size: 2.8vh;
  color: #000;
  margin-top: 0.49vh;
}
.selectState {
  font-size: 1.5vh;
}
.listBg {
  position: absolute;
  top: 15vw;
  left: -220vw;
  width: 540vw;
  height: 540vw;
  border-radius: 50%;
  color: #000;
  animation: spin 125s linear infinite;
}
.listItem {
  position: fixed;
  top: 0;
  left: 50%;
  font-size: 11px;
  letter-spacing: 1px;
  z-index: 200;
}
.tipsDiv {
  text-align: center;
  position: absolute;
  bottom: 31vh;
  left: 0px;
  right: 0px;
}
.tips {
  text-align: center;
  margin: auto;
  font-size: 11px;
  font-style: italic;
  color: #8d7c84;
}
.listSmt {
  position: absolute;
  bottom: 15vh;
  right: 26vw;
  width: 20vw;
  height: 20vw;
  z-index: 100;
  animation: breathe 1.5s linear infinite alternate both;
}
.back {
  position: absolute;
  bottom: calc(15vh + 2vw);
  left: 26vw;
  width: 16vw;
  height: 16vw;
  z-index: 100;
}
@keyframes breathe {
  from {
    width: 20vw;
    height: 20vw;
  }
  to {
    width: 22vw;
    height: 22vw;
    bottom: calc(15vh - 1vw);
    right: 25vw;
  }
}
</style>
