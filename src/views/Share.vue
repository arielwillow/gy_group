/* eslint-disable guard-for-in */
<template>
  <div class="A" style="background-color:#afc4d3;">
    <img src="/gy_715/img/backS.png" class="back" @click="backList"/>
    <div class="name" style="vertical-align: middle;display: table-cell;">
      <img src="/gy_715/img/avatar.png" class="nameImg"/>
      <div class="name-bottom">
        <p class="nameClass" style="white-space: pre-line;">{{nameA}}</p>
      </div>
    </div>
    <img src="/gy_715/img/title.png" class="headImg"/>
    <div class="barA">
      <div class="finishedA">已完成 {{selectedCount}} 件</div>
      <div class="qrDiv">
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
    <p class="footerTxt">图源CR：@高杨_Gyon @高杨的小剧场</p>
    <p class="footerTxt">@高杨全球粉丝后援会 @保利演出有限公司 @TiAn咸鱼安</p>
    <p class="footerTxt">样式参考：网易哒哒”人生必做的100件事“</p>
    <p class="footerTxt">标题设计参考：高杨的冰箱贴</p>
    <p class="footerTxt">By：德克馒头与豹子头 2020.07.15</p>
  </div>
</template>

<script>
import items from '@/mock/items';

export default {
  data() {
    let wish = this.VAR.Wish;
    if (wish.length === 0) {
      wish = '祝高杨24岁生日快乐～';
    }
    return {
      selectedItems: this.VAR.Selection,
      selectedCount: this.VAR.Selection.length,
      nameA: this.VAR.Name,
      wishA: wish,
      imgUrl: '',
      firstFlag: true,
    };
  },
  computed: {
    computeItems() {
      return this.selectedItems.map((item) => {
        const itemSrc = parseInt(item, 10);
        return {
          idd: item,
          text: items[item - 1],
          src: `/gy_715/things/${itemSrc}.png`,
        };
      });
    },
  },
  methods: {
    backList() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.A {
  min-height: 100%;
  background-color: #afc4d3;
}
.headImg{
  margin-top: 5.3vw;
  margin-bottom: 5.3vw;
  margin-right: 2vw;
  padding-left: 24vw;
  width: 100%;
}
.back {
  position: absolute;
  top: 2vw;
  left: 2vw;
  width: 3vw;
  z-index: 100;
}
.name{
  position: absolute;
  top: 0;
  left: 1vw;
  height: 32vw;
  width: 24vw;
  justify-content: center;
  flex-direction: column;
}
.nameImg {
  position: absolute;
  left: 2vw;
  top: 9vw;
  width: 20vw;
  height: 20vw;
  border: 0.5vw solid #8d7c84;
  border-radius: 50%;
  box-shadow: 0px 1px 3px 0px black;
  display:table-cell;
  text-align: center;
}
.name-bottom{
  position: relative;
  top: 30vw;
  height: 15vw;
  width: 100%;
  display: table;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 1px;
  word-wrap: break-word;
}
.nameClass {
  width: 100%;
  vertical-align: middle;
  text-align: center;
  display:table-cell;
}
.qrDiv {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 40%;
  display: table;
  font-size: 13px;
  height: 16vw;
  line-height: 5.3vw;
  word-wrap: break-word;
  background-color: #50657e;
}
.wishtxt{
  display:table-cell;
  vertical-align:middle;
  text-align: center;
  width:100%;
}
.footerTxt {
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
.barA {
  position: relative;
  margin-top: -10px;
  display:flex;
  flex-direction: row;
}
.finishedA {
  background-color: black;
  padding: 2.7vw;
  color: #afc4d3;
  font-size: 9vw;
  width: 60%;
  text-align: center;
  font-weight: bolder;
  height: 16vw;
  line-height: 9.3vw;
}
</style>
