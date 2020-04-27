<template>
  <div class="scrollbox">
    <span class="iconfont icon-top"></span>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.scrollbox {
  z-index: 10;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0.28571429rem 0.42857143rem 0 #dee2e5;
  position: fixed;
  right: 10px;
  bottom: 20%;
  text-align: center;
  line-height: 36px;
  span {
    font-size: 100%;
  }
}
</style>
