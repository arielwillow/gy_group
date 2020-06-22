<template>
  <div class="list">
    <div class="top">
      <div class="numBox">
        <div class="selectNum">{{ selectedCount }}</div>
        <div class="selectState">已选择</div>
      </div>
    </div>
    <div ref="wheel" class="listBg" :style="{ animationPlayState }">
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
      </div>
    </div>
    <img class="listSmt" src="/715_Things_GY/img/nextBtn.png"
    @click = "goToShare" v-if="selectedCount">
    <img class="back" src="/715_Things_GY/img/backBtn.png" @click = "backName">
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
    // let histItems = this.$route.query.sele;
    // if (histItems !== null && histItems !== undefined) {
    //  histItems.split(',');
    // } else {
    //  histItems = [];
    // }
    return {
      items,
      selectedItems: this.VAR.Selection,
      animationPlayState: 'running',
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
      this.setSelection(this.selectedItems);
      // const nm = this.$route.query.name;
      // const selection = this.selectedItems.toString();
      this.$router.push({ path: 'share' });
      //   {
      //     path: 'share',
      //    query: {
      //      name: nm,
      //      sele: selection,
      //    },
      //  },
      // );
    },
    backName() {
      this.setSelection(this.selectedItems);
      this.$router.push({ path: 'name' });
      // const nm = this.$route.query.name;
      // this.$router.push(
      //  {
      //    path: 'name',
      //    query: {
      //      name: nm,
      //    },
      //  },
      // );
    },
    getConfigByIndex(index) {
      const id = index + 1;
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
  background: url(/715_Things_GY/img/selectTop.png) no-repeat 0 0 / cover;
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
  position: fixed;
  top: 6vh;
  left: calc(50% - 135vh);
  width: 270vh;
  height: 270vh;
  border-radius: 50%;
  animation: spin 125s linear infinite;
  color: #000;
}
.listItem {
  position: fixed;
  top: 0;
  left: 50%;
  font-size: 11px;
}
.tipsDiv {
  text-align: center;
  position: absolute;
  bottom: 29vh;
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
}
.back {
  position: absolute;
  bottom: calc(15% + 2vw);
  left: 26vw;
  width: 16vw;
  height: 16vw;
  z-index: 100;
}
</style>
