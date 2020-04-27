import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Category from "../views/Category.vue";
import Shop from "../views/Shop.vue";
import My from "../views/My.vue";
import Detail from "../views/Detail.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/index",
    name: "Index",
    component: Index,
    meta: { Down_Nav: true }
  },
  {
    path: "/index/detail",
    name: "Detail",
    component: Detail,
    meta: { Ret_Urn: true }
  },
  {
    path: "/category",
    name: "Category",
    component: Category,
    meta: { Down_Nav: true }
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
    meta: { Ret_Urn: true }
  },
  {
    path: "/my",
    name: "My",
    component: My,
    meta: { Ret_Urn: true, Down_Nav: true }
  },
  {
    path: "/",
    // name: "Index",
    redirect: "/Index" //重新定向首页
  },
  {
    path: "*",
    // name: "Index",
    redirect: "/Index" //重新定向首页
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  //不记录滚动条位置
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  }
});

export default router;
