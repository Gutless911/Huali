<template>
  <div class="category">
    <!-- 搜索 -->
    <div class="headerbar">
      <div class="headerbar-bottom">
        <div class="headerbar-left">
          <span class="iconfont icon-sousuo1"></span>
        </div>
        <div class="headerbar-right">
          <span>搜索鲜花、蛋糕、礼品</span>
        </div>
      </div>
    </div>

    <div class="catebox">
      <div class="catebox-left">
        <ul class="catebox-left-item">
          <li v-for="(itme, index) in content_Name" :key="index">
            <a :href="'#' + itme.href">{{ itme.name }}</a>
          </li>
        </ul>
      </div>
      <div class="catebox-right">
        <ul class="catebox-right-item">
          <li v-for="(itme, index) in content1" :key="index" :id="itme.id">
            <img :src="itme.img" alt />
            <div
              v-for="(itme, index) in itme.detailed"
              :key="index"
              class="right-item"
            >
              <div class="right-item-title">
                <p>{{ itme.Small_name }}</p>
                <p>{{ itme.Small_describe }}</p>
              </div>
              <div
                v-for="(itme, index) in itme.Small"
                :key="index"
                :class="itme.w"
              >
                <img :src="itme.img" alt />
                <span>{{ itme.text }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content_Name: [
        { name: "热门推荐", href: "Recommend" },
        { name: "鲜花", href: "flower" },
        { name: "永生花", href: "Immortal " },
        { name: "蛋糕", href: "cack" },
        { name: "特色礼品", href: "gift" },
        { name: "礼篮", href: "Hamper" },
        { name: "绿植花卉", href: "plants " }
      ],
      content1: [
        {
          img: "images/classification/classification_1.jpg",
          id: "Recommend",
          detailed: [
            {
              Small_name: "",
              Small_describe: "",
              Small: [
                {
                  img: "images/classification/classification_1_Small.png",
                  text: "送恋人鲜花"
                },
                {
                  img: "images/classification/classification_1_2_Small.png",
                  text: "送长辈鲜花"
                },
                {
                  img: "images/classification/classification_1_3_Small.png",
                  text: "生日鲜花"
                },
                {
                  img: "images/classification/classification_1_4_Small.png",
                  text: "礼盒鲜花"
                },
                {
                  img: "images/classification/classification_1_5_Small.png",
                  text: "永生花"
                },
                {
                  img: "images/classification/classification_1_6_Small.png",
                  text: "蛋糕"
                },
                {
                  img: "images/classification/classification_1_7_Small.png",
                  text: "元祖蛋糕"
                },
                {
                  img: "images/classification/classification_1_8_Small.png",
                  text: "金箔花"
                },
                {
                  img: "images/classification/classification_1_9_Small.png",
                  text: "首饰"
                },
                {
                  img: "images/classification/classification_1_10_Small.png",
                  text: "巧罗巧克力"
                },
                {
                  img: "images/classification/classification_1_11_Small.png",
                  text: "创意礼品"
                },
                {
                  img: "images/classification/classification_1_12_Small.png",
                  text: "企业团购"
                }
              ]
            }
          ]
        },
        {
          img: "images/classification/classification_2.png",
          id: "flower",
          detailed: [
            {
              Small_name: "对象",
              Small_describe: "鲜花排行榜",
              Small: [
                {
                  img: "images/classification/classification_2_Small.png",
                  text: "全部"
                },
                {
                  img: "images/classification/classification_2_2_Small.png",
                  text: "送女友鲜花"
                },
                {
                  img: "images/classification/classification_2_3_Small.png",
                  text: "送男性鲜花"
                },
                {
                  img: "images/classification/classification_2_4_Small.png",
                  text: "送长辈鲜花"
                },
                {
                  img: "images/classification/classification_2_5_Small.png",
                  text: "送朋友鲜花"
                }
              ]
            },
            {
              Small_name: "场合",
              Small_describe: "",
              Small: [
                {
                  img: "images/classification/classification_2_6_Small.png",
                  text: "爱情鲜花"
                },
                {
                  img: "images/classification/classification_2_7_Small.png",
                  text: "生日鲜花"
                },
                {
                  img: "images/classification/classification_2_8_Small.png",
                  text: "探望慰问"
                },
                {
                  img: "images/classification/classification_2_9_Small.png",
                  text: "商务鲜花"
                },
                {
                  img: "images/classification/classification_2_10_Small.png",
                  text: "祝福庆贺"
                },
                {
                  img: "images/classification/classification_2_11_Small.png",
                  text: "婚庆鲜花"
                },
                {
                  img: "images/classification/classification_2_12_Small.png",
                  text: "道歉鲜花"
                },
                {
                  img: "images/classification/classification_2_13_Small.png",
                  text: "哀思鲜花"
                },
                {
                  img: "images/classification/classification_2_14_Small.png",
                  text: "港澳台鲜花"
                }
              ]
            },
            {
              Small_name: "花材",
              Small_describe: "",
              Small: [
                {
                  img: "images/classification/classification_2_15_Small.png",
                  text: "玫瑰"
                },
                {
                  img: "images/classification/classification_2_16_Small.png",
                  text: "康乃馨"
                },
                {
                  img: "images/classification/classification_2_17_Small.png",
                  text: "向日葵"
                },
                {
                  img: "images/classification/classification_2_18_Small.png",
                  text: "百合"
                },
                {
                  img: "images/classification/classification_2_19_Small.png",
                  text: "绣球"
                },
                {
                  img: "images/classification/classification_2_20_Small.png",
                  text: "郁金香"
                },
                {
                  img: "images/classification/classification_2_21_Small.png",
                  text: "扶郎/太阳花"
                },
                {
                  img: "images/classification/classification_2_22_Small.png",
                  text: "马蹄莲"
                }
              ]
            },
            {
              Small_name: "玫瑰颜色",
              Small_describe: "",
              Small: [
                {
                  img: "images/classification/classification_2_23_Small.png",
                  text: "红玫瑰"
                },
                {
                  img: "images/classification/classification_2_24_Small.png",
                  text: "粉玫瑰"
                },
                {
                  img: "images/classification/classification_2_25_Small.png",
                  text: "白玫瑰"
                },
                {
                  img: "images/classification/classification_2_26_Small.png",
                  text: "紫玫瑰"
                },
                {
                  img: "images/classification/classification_2_27_Small.png",
                  text: "黄玫瑰"
                },
                {
                  img: "images/classification/classification_2_28_Small.png",
                  text: "香槟色"
                }
              ]
            },
            {
              Small_name: "类别",
              Small_describe: "",
              Small: [
                {
                  img: "images/classification/classification_2_29_Small.png",
                  text: "花束"
                },
                {
                  img: "images/classification/classification_2_30_Small.png",
                  text: "花盒"
                },
                {
                  img: "images/classification/classification_2_31_Small.png",
                  text: "瓶插花"
                },
                {
                  img: "images/classification/classification_2_32_Small.png",
                  text: "果篮"
                },
                {
                  img: "images/classification/classification_2_33_Small.png",
                  text: "开业花篮"
                },
                {
                  img: "images/classification/classification_2_34_Small.png",
                  text: "香槟色"
                }
              ]
            }
          ]
        },
        {
          img: "images/classification/classification_3.png",
          id: "Immortal",
          detailed: [
            {
              Small_name: "对象",
              Small_describe: "永生花排行榜",
              Small: [
                {
                  img: "images/classification/classification_2_Small.png",
                  text: "全部"
                },
                {
                  img: "images/classification/classification_3_1_Small.png",
                  text: "送女友"
                },
                {
                  img: "images/classification/classification_3_2_Small.png",
                  text: "送男性"
                },
                {
                  img: "images/classification/classification_3_3_Small.png",
                  text: "送长辈"
                },
                {
                  img: "images/classification/classification_3_4_Small.png",
                  text: "送朋友"
                }
              ]
            },
            {
              Small_name: "对象",
              Small_describe: "",
              Small: [
                {
                  img: "images/classification/classification_3_5_Small.png",
                  text: "永生瓶花"
                },
                {
                  img: "images/classification/classification_3_6_Small.png",
                  text: "经典花盒"
                },
                {
                  img: "images/classification/classification_3_7_Small.png",
                  text: "特色永生花"
                },
                {
                  img: "images/classification/classification_3_8_Small.png",
                  text: "巨型玫瑰"
                }
              ]
            }
          ]
        },
        {
          img: "images/classification/classification_4.png",
          id: "cack",
          detailed: [
            {
              Small_name: "品牌",
              Small_describe: "",
              Small: [
                {
                  img: "images/classification/classification_4_1_Small.png",
                  text: "",
                  w: "w"
                },
                {
                  img: "images/classification/classification_4_2_Small.png",
                  text: "",
                  w: "w"
                },
                {
                  img: "images/classification/classification_4_3_Small.png",
                  text: "",
                  w: "w"
                },
                {
                  img: "images/classification/classification_4_4_Small.png",
                  text: "",
                  w: "w"
                },
                {
                  img: "images/classification/classification_4_5_Small.png",
                  text: "",
                  w: "w"
                },
                {
                  img: "images/classification/classification_4_6_Small.png",
                  text: "",
                  w: "w"
                },
                {
                  img: "images/classification/classification_4_7_Small.png",
                  text: "",
                  w: "w"
                },
                {
                  img: "images/classification/classification_4_8_Small.png",
                  text: "",
                  w: "w"
                },
                {
                  img: "images/classification/classification_4_9_Small.png",
                  text: "",
                  w: "w"
                },
                {
                  img: "images/classification/classification_4_10_Small.png",
                  text: "",
                  w: "w"
                },
                {
                  img: "images/classification/classification_4_11_Small.png",
                  text: "",
                  w: "w"
                },
                {
                  img: "images/classification/classification_4_12_Small.png",
                  text: "",
                  w: "w"
                },
                {
                  img: "images/classification/classification_4_13_Small.png",
                  text: "",
                  w: "w"
                },
                {
                  img: "images/classification/classification_4_14_Small.png",
                  text: "",
                  w: "w"
                }
              ]
            }
          ]
        },
        {
          img: "images/classification/classification_5.png",
          id: "gift",
          detailed: [
            {
              Small_name: "品牌",
              Small_describe: "",
              Small: [
                {
                  img: "images/classification/classification_5_1_Small.png",
                  text: "",
                  w: "w"
                },
                {
                  img: "images/classification/classification_5_2_Small.png",
                  text: "",
                  w: "w"
                },
                {
                  img: "images/classification/classification_5_3_Small.png",
                  text: "",
                  w: "w"
                },
                {
                  img: "images/classification/classification_5_4_Small.png",
                  text: "",
                  w: "w"
                },
                {
                  img: "images/classification/classification_5_5_Small.png",
                  text: "",
                  w: "w"
                },
                {
                  img: "images/classification/classification_5_6_Small.png",
                  text: "",
                  w: "w"
                }
              ]
            },
            {
              Small_name: "对象",
              Small_describe: "",
              Small: [
                {
                  img: "images/classification/classification_5_7_Small.png",
                  text: "送女友"
                },
                {
                  img: "images/classification/classification_5_8_Small.png",
                  text: "送男性"
                },
                {
                  img: "images/classification/classification_5_9_Small.png",
                  text: "送长辈"
                },
                {
                  img: "images/classification/classification_5_10_Small.png",
                  text: "送朋友"
                },
                {
                  img: "images/classification/classification_5_11_Small.png",
                  text: "送客户"
                },
                {
                  img: "images/classification/classification_5_12_Small.png",
                  text: "送老师"
                },
                {
                  img: "images/classification/classification_5_13_Small.png",
                  text: "送小孩"
                },
                {
                  img: "images/classification/classification_5_14_Small.png",
                  text: "送领导"
                }
              ]
            },
            {
              Small_name: "对象",
              Small_describe: "",
              Small: [
                {
                  img: "images/classification/classification_5_15_Small.png",
                  text: "音乐盒"
                },
                {
                  img: "images/classification/classification_5_16_Small.png",
                  text: "金箔花"
                },
                {
                  img: "images/classification/classification_5_17_Small.png",
                  text: "3D水晶内雕"
                },
                {
                  img: "images/classification/classification_5_18_Small.png",
                  text: "首饰/美妆"
                },
                {
                  img: "images/classification/classification_5_19_Small.png",
                  text: "巧克力"
                },
                {
                  img: "images/classification/classification_5_20_Small.png",
                  text: "公仔/睡枕"
                },
                {
                  img: "images/classification/classification_5_21_Small.png",
                  text: "家居生活"
                },
                {
                  img: "images/classification/classification_5_22_Small.png",
                  text: "摆件/其他"
                }
              ]
            }
          ]
        },
        {
          img: "images/classification/classification_6.png",
          id: "Hamper",
          detailed: [
            {
              Small_name: "礼篮",
              Small_describe: "",
              Small: [
                {
                  img: "images/classification/classification_6_1_Small.png",
                  text: "礼篮"
                }
              ]
            }
          ]
        },
        {
          img: "images/classification/classification_7.png",
          id: "plants",
          detailed: [
            {
              Small_name: "绿植花卉",
              Small_describe: "",
              Small: [
                {
                  img: "images/classification/classification_2_Small.png",
                  text: "全部"
                },
                {
                  img: "images/classification/classification_7_1_Small.png",
                  text: "绿色植物"
                },
                {
                  img: "images/classification/classification_7_2_Small.png",
                  text: "盆栽花卉"
                },
                {
                  img: "images/classification/classification_7_3_Small.png",
                  text: "多肉盆栽"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
li {
  list-style-type: none;
}
.category {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  height: 100%;
}
.headerbar {
  display: flex;
  width: 100%;
  justify-content: center;
  background: #fff;
  height: 5%;
  padding: 5px 0;
  border-bottom: 2px solid #f1f3f6;
  .headerbar-bottom {
    display: flex;
    background-color: #f3f5f7;
    width: 90%;
    border-radius: 100px;
    .headerbar-left {
      display: flex;
      width: 10%;
      justify-content: center;
      align-items: center;
      span {
        font-size: 18px;
      }
    }
    .headerbar-right {
      display: flex;
      align-items: center;
      width: 90%;
      span {
        font-size: 12px;
      }
    }
  }
}
.catebox {
  display: flex;
  width: 100%;
  height: 95%;
  background-color: #fff;
  a {
    text-decoration: none;
  }
  .catebox-left {
    width: 20%;
    border-right: 1px solid #e9ecf0;
    ul {
      width: 100%;
      li {
        width: 100%;
        display: flex;
        a {
          width: 100%;
          height: 55px;
          font-size: 14px;
          color: #232628;
          text-align: center;
          line-height: 55px;
        }
      }
    }
  }
  .catebox-right {
    width: 80%;
    .catebox-right-item {
      height: 100%;
      overflow: hidden;
      li {
        overflow: scroll;
        width: 100%;
        height: 100%;
        padding: 10px 10px 40px;
        img {
          width: 100%;
        }
        .right-item {
          display: flex;
          width: 100%;
          box-shadow: 0px 2px 6px 0px #e9ecf0;
          flex-wrap: wrap;
          margin-bottom: 15px;
          .right-item-title {
            width: 100%;
            flex-direction: row;
            padding: 5px 0;
            p:nth-child(1) {
              display: flex;
              font-size: 12px;
              font-weight: normal;
              width: 50%;
              justify-content: flex-start;
              padding-left: 10px;
            }
            p:nth-child(2) {
              display: flex;
              font-size: 12px;
              font-weight: normal;
              width: 50%;
              justify-content: flex-end;
              padding-right: 10px;
            }
          }
          .w {
            box-sizing: border-box;
            width: 33%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2px 0px 2px 2px;
            border-bottom: 1px solid #f7f9fa;
            border-right: 1px solid #f7f9fa;
            img {
              width: 90%;
              height: auto;
            }
          }
          div {
            width: 33%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-bottom: 5px;
            img {
              width: 56px;
              height: 56px;
            }
            span {
              margin: 0 5px 5px 5px;
              margin-top: 4px;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
