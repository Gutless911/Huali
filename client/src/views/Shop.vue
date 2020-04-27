<template>
  <div class="shop">
    <div class="main">
      <!-- 购物车列表 -->
      <div class="cart-list">
        <div class="cart-item" v-for="(item, index) in commodity" :key="index">
          <div class="item-left" @click="Select_a(index)">
            <span
              class="iconfont icon-ziyuan1"
              v-if="item.selectFlag"
              style="color: #ff734c;font-size: 16px;"
            ></span>
            <span class="iconfont icon-yuan" v-else></span>
          </div>
          <div class="item-right">
            <div class="item-cart-left">
              <img :src="item.img" alt />
            </div>
            <div class="item-cart-right">
              <p>{{ item.text }}</p>
              <div class="item-cart-Num">
                <span>数量</span>
                <div>
                  <span @click="reduce(index)">
                    <i class="iconfont icon-delete" v-if="item.reduceFlag"></i>
                    <i class="iconfont icon-nues" v-else></i>
                  </span>
                  <p>
                    <span>{{ item.thisNum }}</span>
                  </p>
                  <span @click="add(index)">
                    <i class="iconfont icon-add"></i>
                  </span>
                </div>
              </div>
              <p>¥{{ item.Discount }}</p>
            </div>
          </div>
        </div>
      </div>

      <footer class="footer">
        <div class="footer-left">
          <span @click="Select_all()">
            <i
              class="iconfont icon-ziyuan1"
              v-if="Select"
              style="color: #ff734c;font-size: 17px;"
            ></i>
            <i class="iconfont icon-yuan" v-else></i>
            全选
          </span>
          <span>
            合计:
            <em class="total">¥{{ tatal.Price }}</em>
          </span>
        </div>
        <button class="footer-right" type="button" id="jieSuan">
          去结算
          <span class="total-num">(1)</span>
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  mame: "shop",
  data() {
    return {
      commodity: [],
      Select: false
    };
  },
  created() {
    let productArr = window.localStorage.getItem("productArr");
    this.commodity = JSON.parse(productArr);
  },
  methods: {
    Return() {
      if (window.history.length <= 2) {
        this.$router.push("/index");
      } else {
        this.$router.go(-1);
      }
    },
    Select_all() {
      console.log(this.Select);
      this.Select = !this.Select;
      for (const i in this.commodity) {
        if (this.Select) this.commodity[i].selectFlag = true;
        else this.commodity[i].selectFlag = false;
      }
    },
    Select_a(index) {
      this.commodity[index].selectFlag = !this.commodity[index].selectFlag;
      let newcarList = this.commodity.filter(item => {
        return item.selectFlag == true;
      });
      if (newcarList.length == this.commodity.length) this.Select = true;
      else this.Select = false;
    },
    reduce(index) {
      if (this.commodity[index].thisNum > 1) {
        this.commodity[index].thisNum--;
        if (this.commodity[index].thisNum <= 1)
          this.commodity[index].reduceFlag = false;
      } else {
        // this.carList.splice(index, 1);
        this.openModel();
      }
    },
    add(index) {
      this.commodity[index].thisNum++;
      if (this.commodity[index].thisNum > 1)
        this.commodity[index].reduceFlag = true;
    }
  },
  computed: {
    tatal() {
      let comm = this.commodity.filter(itme => {
        return itme.selectFlag;
      });
      if (comm.length == 0) {
        return { Price: 0, num: 0 };
      } else {
        let totalPrice = 0;
        for (const i in comm) {
          totalPrice +=
            parseInt(comm[i].thisNum) * parseFloat(comm[i].Discount);
        }
        return { Price: totalPrice, num: comm.length };
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.headerbar {
  display: flex;
  background: #fff;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #e9ecf0;
  .headerbar-right {
    width: 10%;
    display: flex;
    text-align: center;
    span {
      width: 100%;
      font-size: 20px;
      line-height: 50px;
    }
  }
  .headerbar-left {
    width: 10%;
    display: flex;
    text-align: center;
    span {
      width: 100%;
      font-size: 20px;
      line-height: 50px;
    }
  }
  .headerbar-center {
    width: 80%;
    text-align: center;
    font-size: 18px;
    line-height: 50px;
  }
}
.main {
  display: flex;
  width: 100%;
  background: #fff;
  .cart-list {
    margin-bottom: 50px;
    .cart-item {
      display: flex;
      width: 100%;
      .item-left {
        padding: 7px 0;
        display: flex;
        width: 10%;
        justify-content: center;
        align-items: center;
        span:nth-child(1) {
          font-size: 23px;
        }
        span:nth-child(2) {
          color: #ff734c;
          font-size: 16px;
        }
      }
      .item-right {
        border-top: 1px solid #e9ecf0;
        padding: 7px 0;
        display: flex;
        width: 90%;
        .item-cart-left {
          width: 30%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .item-cart-right {
          box-sizing: border-box;
          width: 70%;
          margin-left: 10px;
          position: relative;
          p:nth-child(1) {
            width: 100%;
            font-size: 14px;
          }
          .item-cart-Num {
            display: flex;
            width: 100%;
            flex-direction: row;
            margin-top: 10px;
            span {
              font-size: 14px;
              width: 20%;
            }
            div {
              width: 80%;
              span {
                display: block;
                width: 15%;
                text-align: center;
                height: 20px;
                float: left;
                background-color: #f7f9fa;
                border-right: 1px solid #e9ecf0;
                i {
                  font-size: 14px;
                }
              }
              p {
                width: 25%;
                height: 20px;
                float: left;
                text-align: center;
                background-color: #f7f9fa;
                border-right: 1px solid #e9ecf0;
                span {
                  display: block;
                  width: 100%;
                  line-height: 20px;
                  text-align: center;
                }
              }
            }
            p {
              span:nth-child(1) {
                font-size: 1px;
              }
            }
          }
          p:nth-child(3) {
            position: absolute;
            bottom: 5px;
            width: 100%;
            color: #ff734c;
            font-weight: 500;
            font-size: 14px;
          }
        }
      }
    }
  }
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  .footer-left {
    width: 70%;
    display: flex;
    align-items: center;
    span:nth-child(1) {
      font-size: 17px;
      margin-left: 10px;
      i:nth-child(1) {
        font-size: 22px;
      }
    }
    span:nth-child(2) {
      font-size: 17px;
      margin-left: 10px;
      .total {
        color: #ff734c;
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
  .footer-right {
    width: 30%;
    text-align: center;
    background-color: #ff734c;
    border: 0;
    color: #fff;
  }
}
</style>
