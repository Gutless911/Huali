<template>
  <div id="app">
    <Head></Head>
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer :globalNav="globalNav"></Footer>
  </div>
</template>
<script>
import Footer from "./components/Footer";
import Head from "./components/Head";
export default {
  data() {
    return {
      globalNav: true
    };
  },
  components: {
    Footer,
    Head
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
  background: #e9ecf0;
}
#app,
.content {
  height: 100%;
}
</style>
