<template>
  <div class="my">
    <!-- 头部 -->
    <div class="headerbar" v-if="$route.meta.Ret_Urn">
      <p class="headerbar-left" @click="Return">
        <span class="iconfont icon-fanhui2"></span>
      </p>
      <div class="headerbar-center">
        <img src="/images/m_hualogo.png" alt />
      </div>
      <p class="headerbar-right">
        <span class="iconfont icon-menu"></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    Return() {
      if (window.history.length == 1) {
        this.$router.push("/index");
      } else {
        this.$router.go(-1);
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
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 50%;
      height: 20px;
    }
  }
}
</style>
