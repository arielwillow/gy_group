/* eslint-disable guard-for-in */
<template>
  <div class="A" style="background-color:#85b8cb;">
    <div v-if="imgUrl">
      <img :src="imgUrl" class="newImg" />
    </div>
    <div class="sharee" ref="mainDom">
      <div v-if="!imgUrl">
      <div class="name" style="vertical-align: middle;display: table-cell;">
        <img :src="imgsrc" class="nameImg"/>
        <p class="nameClass">{{nameA}}</p>
      </div>
        <img src="@/assets/img/title.png" class="headImg"/>
        <div class="barA">
          <div class="finishedA">已完成 {{selectedCount}} 件</div>
          <div class="qrDiv" style="vertical-align: middle;display: table-cell;">
            <p class="wishtxt">{{wishA}}</p>
          </div>
        </div>
        <div class="imgs">
          <b-row>
            <b-col cols="3" class="imgItem" v-for="item in computeItems" :key="item.idd">
              <img :src="item.src" class="imgI"/>
              <p class="titleI">{{item.text}}</p>
            </b-col>
          </b-row>
        </div>
        <p class="footer-txt">图源CR：@高杨_Gyon @高杨的小剧场”</p>
        <p class="footer-txt">样式仿照：网易哒哒“人生必做的100件事”</p>
        <p class="footer-txt">By：德克馒头与豹子头 2020.07.15</p>
      </div>
    </div>
  </div>
</template>

<script>
import items from '@/mock/items';
import html2canvas from 'html2canvas';
import _ from 'lodash';

export default {
  data() {
    const selectItems = this.$route.query.sele.split(',');
    const { name, wish } = this.$route.query;
    const itemlen = selectItems.length;
    const ind = _.random(0, itemlen - 1, false);
    const imgId = selectItems[ind];
    return {
      selectedItems: selectItems,
      selectedCount: itemlen,
      nameA: name,
      wishA: wish,
      imgsrc: `/things/${imgId}.png`,
    };
  },
  computed: {
    computeItems() {
      return this.selectedItems.map((item) => {
        const itemSrc = parseInt(item, 10);
        return {
          idd: item,
          text: items[item - 1],
          src: `/things/${itemSrc}.png`,
        };
      });
    },
  },
  methods: {
    toLogin() {
      this.$router.replace('/login');
    },
    saveImage() {
      html2canvas(this.$refs.mainDom).then((canvas) => {
        this.imgUrl = canvas.toDataURL('image/png');
        alert('长按');
      });
    },
  },
};
</script>

<style scoped>
.A {
  min-height: 100%;
  background-color: #85b8cb;
}
.sharee {
  background-color: #85b8cb;
  min-height: 400px;
}
.headImg{
  margin-top: 5.3vw;
  margin-bottom: 5.3vw;
  margin-right: 2vw;
  padding-left: 24vw;
  width: 100%;
}
.name{
  position: absolute;
  top: 3vh;
  left: 5vw;
  height: 43vw;
  width: 24vw;
}
.nameImg {
  width: 18vw;
  height: 18vw;
  border: 0.5vw solid #a35d22;
  border-radius: 50%;
  box-shadow: 0px 1px 3px 0px black;
  z-index: 100;
}
.nameClass {
  width: 18vw;
  margin-top: 3px;
  margin-left: 10px;
  font-size: 18px;
  z-index: 100;
  font-weight: bold;
  word-wrap: break-word;
  justify-content: center;
  flex-direction: row;
}
.footer-txt {
  font-size: 10px;
  color: rgba(0,0,0,0.6);
  text-align: center;
  margin-bottom: 0px;
}
.imgItem {
  width: 18.7vw;
}
.newImg {
  width: 100%;
}
.imgI {
  width: 18.7vw;
  height: 18.7vw;
  border: 1vw solid #d2e0e9;
  border-radius: 50%;
  box-shadow: 0px 1px 3px 0px black;
}
.titleI {
  text-align: center;
  width: 70px;
  font-size: 12px;
  margin-top: 3px;
}
.imgs {
  padding: 10px;
}
.qrDiv {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 40%;
  background-color: #4579a0;
  display: flex;
  font-size: 12px;
  height: 16vw;
  line-height: 5.3vw;
  justify-content: center;
  word-wrap: break-word;
}
.wishtxt{
  justify-content: center;
}
.barA {
  position: relative;
  margin-top: -4px;
  display:flex;
  flex-direction: row;
}
.finishedA {
  background-color: black;
  padding: 2.7vw;
  color:white;
  font-size: 35px;
  width: 60%;
  text-align: center;
  font-weight: bolder;
  height: 16vw;
  line-height: 9.3vw;
}
</style>
