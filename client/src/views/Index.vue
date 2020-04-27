<template>
  <div class="index">
    <!-- 头部 -->
    <div class="header">
      <span class="iconfont icon-sousuo"></span>
      <div>
        <img src="images/m_hualogo.png" alt />
      </div>
      <span class="iconfont icon-kefu"></span>
    </div>

    <!-- 轮播 -->
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="banner" v-for="banner in banners">
          <img :src="banner" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <!-- 广告  -->
    <div class="notice">
      <div class="notice-itme" v-for="(itme, index) in notice" :key="index">
        <span class="iconfont icon-wancheng"></span>
        <span v-html="itme"></span>
      </div>
    </div>

    <!-- 图片导航  -->
    <div class="Image_nav">
      <div class="notice-itme" v-for="(itme, index) in Image_nav" :key="index">
        <img :src="itme.img" :alt="itme.text" />
        <span>{{ itme.text }}</span>
      </div>
    </div>

    <!-- 一秒选花 -->
    <div class="scene">
      <div class="modetitle">
        <span></span>
        一秒选花
      </div>

      <div class="scene-top">
        <div v-for="(itme, index) in scene" :key="index">
          <img :src="itme.img" :alt="itme.text" />
          <span>{{ itme.text }}</span>
        </div>
      </div>

      <div class="scene-in">
        <div v-for="(itme, index) in scene_1" :key="index">
          <img :src="itme.img" :alt="itme.text" />
          <span>{{ itme.text }}</span>
        </div>
      </div>

      <div class="scene-notice">
        <div class="notice">
          <img src="images/scene3-listItem1.png" alt="热销榜" />
          <div class="notice_right">
            <span>热销榜</span>
            <span>集万千宠爱</span>
          </div>
          <div class="notice_bottom">
            <p>
              <span>大家都在买</span>
            </p>
            <p>
              <span>热销11.7万束</span>
            </p>
          </div>
        </div>
        <div class="notice">
          <img src="images/scene3-listItem2.png" alt="特价专区" />
          <div class="notice_right">
            <span>特价专区</span>
            <span>超值好货</span>
          </div>
          <div class="notice_bottom">
            <p>
              <span>限时直降</span>
            </p>
            <p>
              <span>
                ¥158
                <s>¥186</s>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="scene-lower">
        <div v-for="(itme, index) in scene_3" :key="index">
          <img :src="itme.img" :alt="itme.text" />
          <span>{{ itme.text }}</span>
        </div>
      </div>
    </div>

    <!-- 产品 -->
    <div class="product">
      <div class="product-itme">
        <h3 class="productHeader">送恋人/爱情鲜花</h3>
        <div
          class="productContent"
          v-for="(itme, index) in commodity"
          :key="index"
          @click="ToDetail"
        >
          <div class="productContentLeft">
            <img :src="itme.img" alt />
          </div>
          <div class="productContentRight">
            <h4>{{ itme.text }}</h4>
            <p>{{ itme.describe }}</p>
            <p>{{ itme.promo }}</p>
            <div>
              <div>
                <p>
                  <span>¥{{ itme.Discount }}</span>
                  <span>¥{{ itme.Price }}</span>
                </p>
                <p>已销售{{ itme.Sales }}万件</p>
              </div>
              <div>
                <span class="iconfont icon-gouwuche" @click.stop="addShop(itme)"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="productFooter">
          <a href="#">查看更多</a>
        </div>
      </div>
    </div>

    <Scrollbox v-show="onScrollbox" @click.native="BackTop"></Scrollbox>
  </div>
</template>

<script>
import Scrollbox from "../components/Scrollbox";
export default {
  data() {
    return {
      banners: [
        //轮播
        "images/lunbo01.jpg",
        "/images/lunbo02.jpg",
        "/images/lunbo03.jpg",
        "images/lunbo04.jpg"
      ],
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      },
      notice: [
        "认证龙头企业",
        "15年品牌",
        "3小时送花",
        '最近<a href="">3213</a>条好评'
      ], //广告
      Image_nav: [
        { img: "images/m_1.png", text: "鲜花" },
        { img: "images/m_2.png", text: "永生花" },
        { img: "images/m_3.png", text: "蛋糕" },
        { img: "images/m_4.png", text: "礼品" },
        { img: "images/m_5.png", text: "巧克力" }
      ],
      scene: [
        { img: "images/scene1-listItem1.png", text: "送恋人" },
        { img: "images/scene1-listItem2.png", text: "送长辈" },
        { img: "images/scene1-listItem3.png", text: "送朋友" }
      ],
      scene_1: [
        { img: "images/scene2-listItem1.png", text: "生日祝福" },
        { img: "images/scene2-listItem2.png", text: "表白求婚" },
        { img: "images/scene2-listItem3.png", text: "开业商务" },
        { img: "images/scene2-listItem4.png", text: "周年纪念" }
      ],
      scene_3: [
        { img: "images/scene4-listItem1.png", text: "新品来袭" },
        { img: "images/scene4-listItem2.png", text: "品味之选" },
        { img: "images/scene4-listItem3.png", text: "设计师臻选" }
      ],
      commodity: [
        {
          img: "images/Rose1.jpg",
          text: "一往情深",
          describe: "精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎",
          promo: "经典爆款，年销售冠军！",
          Discount: "249",
          Price: "315",
          Sales: "12.0",
          thisNum: 1,
          reduceFlag: false,
          selectFlag: false
        },
        {
          img: "images/Rose2.jpg",
          text: "一心一意",
          describe: "玫瑰11枝，粉色勿忘我0.3扎",
          promo: "经典款式 精选爆款",
          Discount: "139",
          Price: "189",
          Sales: "11.7",
          thisNum: 1,
          reduceFlag: false,
          selectFlag: false
        },
        {
          img: "images/Rose3.jpg",
          text: "忘情巴黎",
          describe: "33枝红玫瑰",
          promo: "浪漫唯美 女神挚爱",
          Discount: "298",
          Price: "382",
          Sales: "6.7",
          thisNum: 1,
          reduceFlag: false,
          selectFlag: false
        },
        {
          img: "images/Rose4.jpg",
          text: "恋恋情深",
          describe: "11枝香槟玫瑰，白色多头百合2枝",
          promo: "经典款式 简约设计",
          Discount: "198",
          Price: "255",
          Sales: "7.5",
          thisNum: 1,
          reduceFlag: false,
          selectFlag: false
        },
        {
          img: "images/Rose5.jpg",
          text: "不变的承诺",
          describe: "99枝红玫瑰",
          promo: "经典99枝，鼎力推荐！",
          Discount: "520",
          Price: "869",
          Sales: "6.4",
          thisNum: 1,
          reduceFlag: false,
          selectFlag: false
        },
        {
          img: "images/Rose6.jpg",
          text: "韩式系列/一路向阳",
          describe:
            "向日葵3枝、香槟玫瑰9枝、橙色多头玫5枝、黄色腊梅5枝、大叶尤加利5枝",
          promo: "花艺师打造 韩式花束系列",
          Discount: "298",
          Price: "398",
          Sales: "6.2",
          thisNum: 1,
          reduceFlag: false,
          selectFlag: false
        },
        {
          img: "images/Rose7.jpg",
          text: "韩式系列/初心不负",
          describe:
            " 韩式花束系列花艺师全新打造，卡罗拉玫瑰11枝、白底粉边洋桔梗5枝、大叶尤加利10枝",
          promo: "花艺师打造 韩式花束系列",
          Discount: "229",
          Price: "298",
          Sales: "6.7",
          thisNum: 1,
          reduceFlag: false,
          selectFlag: false
        },
        {
          img: "images/Rose8.jpg",
          text: "韩式系列/亲爱的你",
          describe:
            "粉佳人玫瑰16枝、白和粉色洋桔梗各5枝、尤加利10枝、浅紫色小菊3枝、深粉色绣球1枝",
          promo: "花艺师打造 韩式花束系列",
          Discount: "368",
          Price: "469",
          Sales: "833",
          thisNum: 1,
          reduceFlag: false,
          selectFlag: false
        }
      ],
      onScrollbox: false,
      scrolltop: 0,
      shopCart: true
    };
  },
  methods: {
    //跳转详情页
    ToDetail() {
      this.$router.push("/index/detail");
    },
    //返回顶部
    ScrollTop() {
      this.scrolltop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (this.scrolltop > 100) {
        this.onScrollbox = true;
      } else {
        this.onScrollbox = false;
      }
    },

    //返回顶部
    BackTop() {
      let timer = setInterval(() => {
        let speed = Math.floor(-this.scrolltop / 5);
        document.documentElement.scrollTop = this.scrolltop + speed;
        if (this.scrolltop == 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    //添加购物车
    addShop(shopItem) {
      let productArr = window.localStorage.getItem("productArr") || [];
      if (productArr.length == 0) {
        this.$store.commit("add");
        productArr.push(shopItem);
        window.localStorage.setItem("productArr", JSON.stringify(productArr));
      } else {
        productArr = JSON.parse(productArr);
        this.shopCart = productArr.some(itme => {
          console.log(itme.text, shopItem.text);
          return itme.text == shopItem.text;
        });
        console.log(this.shopCart);
        if (!this.shopCart) {
          this.$store.commit("add");
          productArr.push(shopItem);
          window.localStorage.setItem("productArr", JSON.stringify(productArr));
        }
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.ScrollTop);
    let cartnum = window.localStorage.getItem("productArr");
    cartnum = JSON.parse(cartnum);
    if (!cartnum==[]) {
       this.$store.state.numALL = cartnum.length;
    }
  },
  components: {
    Scrollbox
  }
};
</script>
<style lang="scss" scoped>
.index {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.header {
  width: 100%;
  height: 50px;
  background: #435448;
  display: flex;
  color: #fff;
  div {
    text-align: center;
    img {
      width: 60%;
      height: auto;
    }
  }
  span {
    width: 20%;
    font-size: 25px;
    text-align: center;
    line-height: 50px;
  }
}
.swiper-wrapper {
  img {
    width: 375px;
  }
  .swiper-pagination-bullet-active {
    background: #ff734c;
    width: 30px;
  }
}
.notice {
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 5px;
  color: #435448;
  font-size: 12px;
  div {
    span {
      font-size: 12px;
      a {
        color: #435448;
      }
    }
  }
}
.Image_nav {
  background: #fff;
  width: 100%;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 7px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
    }
    span {
      font-size: 12px;
    }
  }
}
.scene {
  background: #fff;
  width: 100%;
  color: #232628;
  .modetitle {
    margin-left: 10px;
    font-size: 16px;
    display: flex;
    span {
      display: flex;
      width: 3px;
      height: 20px;
      background: #232628;
      margin-right: 5px;
    }
  }
  .scene-top {
    width: 100%;
    display: flex;
    div {
      width: 100%;
      flex-grow: 1;
      margin: 0 2px;
      border-radius: 2px;
      flex-direction: row;
      display: flex;
      position: relative;
      position: relative;
      img {
        width: 100%;
      }
      span {
        position: absolute;
        // display: inline-flex;
        width: 100%;
        bottom: 5px;
        font-size: 14px;
        z-index: 1;
        text-align: center;
      }
    }
  }
  .scene-in {
    margin-top: 5px;
    width: 100%;
    display: flex;
    div {
      width: 100%;
      flex-grow: 1;
      margin: 0 2px;
      border-radius: 2px;
      flex-direction: row;
      display: flex;
      position: relative;
      position: relative;
      img {
        width: 100%;
      }
      span {
        position: absolute;
        // display: inline-flex;
        width: 100%;
        top: 10px;
        font-size: 14px;
        z-index: 1;
        text-align: center;
      }
    }
  }
  .scene-lower {
    margin-top: 5px;
    width: 100%;
    display: flex;
    div {
      width: 100%;
      flex-grow: 1;
      margin: 0 2px;
      border-radius: 2px;
      flex-direction: row;
      display: flex;
      position: relative;
      position: relative;
      img {
        width: 100%;
      }
      span {
        position: absolute;
        color: #fff;
        background: rgba(35, 38, 40, 0.8);
        width: 100%;
        bottom: 0;
        font-size: 14px;
        padding: 4px 0;
        z-index: 1;
        text-align: center;
      }
    }
  }
  .scene-notice {
    margin-top: 5px;
    width: 100%;
    display: flex;
    .notice {
      width: 100%;
      flex-grow: 1;
      border-radius: 2px;
      flex-direction: row;
      display: flex;
      position: relative;
      padding: 20px;
      border: 1px solid #e9ecf0;
      img {
        width: 100%;
      }
      .notice_right {
        position: absolute;
        top: 5px;
        left: 15px;
        display: flex;
        width: 80%;
        flex-wrap: wrap;
        span {
          width: 70%;
        }
        span:nth-child(1) {
          font-size: 16px;
        }
        span:nth-child(2) {
          font-size: 12px;
          color: #71797f;
        }
      }
      .notice_bottom {
        position: absolute;
        bottom: 5px;
        left: 15px;
        display: flex;
        width: 90%;
        p {
          width: 50%;
        }
        p:nth-child(1) {
          margin-right: 5px;
          span:nth-child(1) {
            width: 80%;
            margin-right: 3px;
            display: block;
            border-radius: 20px;
            background: #ff734c;
            text-align: center;
            font-size: 11px;
            color: #fff;
          }
        }
        p:nth-child(2) {
          span:nth-child(2) {
            text-align: center;
            font-size: 10px;
          }
        }
      }
    }
  }
}
.product {
  background: #fff;
  .product-itme {
    margin: 0px 10px;
    h3 {
      width: 100%;
      font-size: 16px;
      text-align: center;
      font-weight: normal;
      padding: 15px 0px;
    }
    .productContent {
      display: flex;
      width: 100%;
      // flex: 1;
      box-shadow: 0 5px 20px 0 #e9ecf0;
      margin-top: 15px;
      .productContentLeft {
        width: 50%;
        display: flex;
        img {
          width: 100%;
          height: auto;
        }
      }
      .productContentRight {
        width: 50%;
        font-weight: 300;
        padding: 0 15px;
        font-weight: 500;
        h4 {
          font-size: 16px;
          margin-top: 15px;
          font-weight: 300;
        }
        p:nth-child(1) {
          font-size: 12px;
        }
        p:nth-child(2) {
          font-size: 12px;
          font-weight: 300;
          padding-bottom: 10px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        p:nth-child(3) {
          font-size: 12px;
          padding: 10px 0;
          border-top: 1px solid #e9ecf0;
          border-bottom: 1px solid #e9ecf0;
        }
        div {
          display: flex;
          padding: 5px 0;
          div:nth-child(1) {
            display: flex;
            width: 60%;
            flex-wrap: wrap;
            flex-direction: column;

            p {
              width: 100%;
              span:nth-child(1) {
                color: #ff734c;
                font-weight: 500;
                font-size: 18px;
              }
              span:nth-child(2) {
                color: #71797f;
                font-weight: 500;
                font-size: 12px;
                text-decoration: line-through;
              }
            }
          }
          div:nth-child(2) {
            width: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
            span {
              font-size: 20px;
            }
          }
        }
      }
    }
    .productFooter {
      display: flex;
      justify-content: center;
      padding: 35px 0;
      a {
        text-decoration: none;
        color: inherit;
        border: 1px solid #232628;
        font-size: 14px;
        padding: 0 20px;
      }
    }
  }
}
</style>
