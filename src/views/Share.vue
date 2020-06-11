/* eslint-disable guard-for-in */
<template>
  <div class="A" style="background-color:#85b8cb;">
    <div v-if="imgUrl">
      <img :src="imgUrl" class="newImg" />
    </div>
    <div class="sharee" ref="mainDom">
      <div v-if="!imgUrl">
      <div class="name">
        <img src="@/assets/img/name.png" class="tianImg"/>
        <p class="nameClass">{{nameA}}</p>
      </div>
        <img src="@/assets/img/title.png" class="headImg"/>
        <div class="barA">
          <div class="finishedA">已完成 {{selectedCount}} 件</div>
          <div class="qrDiv">
            <div class="qrDivLeftTxt">
              <div class="upTxt">{{wishA}}</div>
            </div>
            <img src="@/assets/img/qrcode.jpg" class="qrImg"/>
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

export default {
  data() {
    const selectItems = this.$route.query.sele.split(',');
    const { name, wish } = this.$route.query;
    return {
      selectedItems: selectItems,
      selectedCount: selectItems.length,
      imgUrl: null,
      nameA: name,
      wishA: wish,
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
  },
};
</script>

<style scoped>

.name {
  position: absolute;
  top: 50px;
  left: 10px;
}
.nameClass {
  position: relative;
  width: 30px;
  margin-top: 3px;
  margin-left: 10px;
  font-size: 18px;
  z-index: 100;
  font-weight: bold;
  word-wrap: break-word;
  justify-content: center;
  flex-direction: column;
}
.tianImg {
  position: absolute;
  width: 36px;
}
.footer-txt {
  font-size: 10px;
  color: rgba(0,0,0,0.6);
  text-align: center;
  margin-bottom: 0px;
}
.newImg {
  width: 100%;
}
.floating-button {
position: absolute;
right: 16px;
bottom: 150px;
z-index: 1500;
height: 100px;
overflow: hidden;
display: flex;
}
.imgItem {
  width: 18.7vw;
}
.imgI {
  width: 18.7vw;
  height: 18.7vw;
  border: 1vw solid white;
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
.A {
  min-height: 100%;
  background-color: #85b8cb;
}
.sharee {
  background-color: #85b8cb;
  min-height: 400px;
}
.qrDiv {
  height:58px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 40%;
  background-color: #85b8cb;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}

.qrImg {
  line-height: 55px;
  height: 50px;
  width: 50px;
  vertical-align: center;
  margin-top: 3px;
}

.qrDivLeftTxt {
  font-size: 12px;
  height: 60px;
  line-height: 20px;
  display:flex;
  justify-content: center;
  flex-direction: column;
  word-wrap: break-word;
}
.upTxt {
  margin-top: -3px;
  font-weight: bold;
}

.barA {
  position: relative;
  margin-top: -4px;
  min-height: 60px;
  display:flex;
  flex-direction: row;
}

.finishedA {
  background-color: black;
  padding: 10px;
  color:white;
  font-size: 35px;
  width: 60%;
  text-align: center;
  font-weight: bolder;
  height: 58px;
  line-height: 35px;
}
.headImg{
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 40px;
  width: 100%;
}
</style>
