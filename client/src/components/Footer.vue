<template>
  <div id="nav" class="nav" v-if="$route.meta.Down_Nav">
    <div class="nav-item" v-for="(item, index) in nav" :key="index">
      <span class="Number" v-if="index == 2  && $store.state.numALL > 0">{{ $store.state.numALL }}</span>
      <router-link :to="item.path">
        <span :class="['icon', item.navClass]"></span>
        {{ item.text }}
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      nav: [
        {
          path: "/index",
          navClass: "iconfont icon-shouye",
          icon: true,
          text: "首页"
        },
        {
          path: "/category",
          navClass: "iconfont icon-fenlei1",
          icon: true,
          text: "分类"
        },
        {
          path: "/shop",
          navClass: "iconfont icon-gouwuche",
          icon: true,
          text: "购物车"
        },
        {
          path: "/my",
          navClass: "iconfont icon-ziyuan",
          icon: true,
          text: "我的"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style scoped lang="scss">
#nav {
  width: 100%;
  height: 40px;
  padding: 5px 0;
  background: #f7f9fa;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  z-index: 20;
  div {
    flex: 1;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .Number{
      position: absolute;
      top: 0px;
      right: 20px;
      width: 15px;
      height: 15px;
      text-align: center;
      line-height: 15px;
      background: #FF734C;
      border-radius: 100%;
      font-size: 12px;
    }
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      color: #232628;
      text-decoration: none;
      /* 取消点击nav图标时背景高亮 */
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    a.router-link-active {
      color: #ff734c;
    }
  }
}
</style>