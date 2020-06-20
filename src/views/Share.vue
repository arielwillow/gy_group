/* eslint-disable guard-for-in */
<template>
  <div class="A" style="background-color:#85b8cb;">
    <div v-if="imgUrl">
      <img :src="imgUrl" class="newImg" />
    </div>
    <div class="sharee" ref="mainDom">
      <div v-if="!imgUrl">
      <div class="name" style="vertical-align: middle;display: table-cell;">
        <img src="/715_Things_GY/img/avatar.png" class="nameImg"/>
        <div class="name-bottom">
          <p class="nameClass" style="white-space: pre-line;">{{nameA}}</p>
        </div>
      </div>
        <img src="/715_Things_GY/img/title.png" class="headImg"/>
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
        <p class="footer-txt">图源CR：@高杨_Gyon @高杨的小剧场</p>
        <p class="footer-txt">@高杨全球粉丝后援会 @保利演出有限公司 @TiAn咸鱼安</p>
        <p class="footer-txt">样式仿照：网易哒哒“人生必做的100件事</p>
        <p class="footer-txt">By：德克馒头与豹子头 2020.07.15</p>
      </div>
    </div>
  </div>
</template>

<script>
import items from '@/mock/items';
import html2canvas from 'html2canvas';

export default {
  data() {
    const selectItems = this.$route.query.sele.split(',');
    const { name, wish } = this.$route.query;
    const itemlen = selectItems.length;
    let n1;
    let n2;
    if (name.length === 4 || name.length === 5) {
      n1 = name.slice(0, 2);
      n2 = name.slice(2);
    } else if (name.length === 6) {
      n1 = name.slice(0, 3);
      n2 = name.slice(3);
    } else {
      n1 = name;
      n2 = '';
    }
    return {
      selectedItems: selectItems,
      selectedCount: itemlen,
      nameA: `${n1}\n${n2}`,
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
          src: `/715_Things_GY/things/${itemSrc}.png`,
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
        // alert('长按');
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
  top: 0;
  left: 1vw;
  height: 45vw;
  width: 24vw;
  justify-content: center;
  text-align: center;
}
.name-bottom{
  bottom: 0;
  height: 34%;
  width: 100%;
  display: table;
}
.nameImg {
  position: absolute;
  left: 2vw;
  top: 12vw;
  width: 20vw;
  height: 20vw;
  border: 0.5vw solid #a35d22;
  border-radius: 50%;
  box-shadow: 0px 1px 3px 0px black;
  display:table-cell;
  text-align: center;
}
.nameClass {
  position: absolute;
  top: 35vw;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  word-wrap: break-word;
  text-align: center;
  display:table-cell;
  vertical-align: middle;
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
  display: table;
  font-size: 13px;
  height: 16vw;
  line-height: 5.3vw;
  word-wrap: break-word;
  background-color: #4579a0;
}
.wishtxt{
  display:table-cell;
  vertical-align:middle;
  text-align: center;
  width:100%;
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
  font-size: 9vw;
  width: 60%;
  text-align: center;
  font-weight: bolder;
  height: 16vw;
  line-height: 9.3vw;
}
</style>
