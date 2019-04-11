<template>
  <footer>
    <div class="quickly">
      <p class="quickly_title">快速通道</p>
      <ul class="quickly_li">
        <li v-for="(item,index) in quickly"
            :key="index">
          <a href="#">{{item}}</a>
        </li>
      </ul>
    </div>
    <div class="call">
      <p class="call_title">联系方式</p>
      <ul class="call_li">
        <li v-for="(item,index) in call"
            :key="index">
          <a href="#">{{item}}</a>
        </li>
      </ul>
      <div class="hot_line">
        <p class="hot_line_top">客户服务热线</p>
        <p class="hot_line_bot">400-618-9911</p>
      </div>
    </div>
    <div class="footer_logo">
      <img src="../images/stj_logo_footer.png"
           alt="">
    </div>
    <div class="bottom">
      <p>页面版权所有： 生态洁环保科技股份有限公司</p>
      <p>地址：山东省济南市莱芜区赢牟西大街003号</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'CommonFoot',
  data () {
    return {
      quickly: ['首页', '产品中心', '互联网+', '应用案例', '领导关怀', '新闻中心', '关于我们'],
      call: ['T. 0634-6270330', 'F. 0634-6270292', 'E. stj@chinastj.com']
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  max-height: 500px;
  background: #2a2f2f;
  padding: 2.3em 3.5em 0 2.3em;
  // position: fixed;
  // bottom: 0;
  > div {
    display: inline-block;
    vertical-align: top;
  }
  .quickly_title,
  .call_title {
    color: #b1b1b1;
  }
  .quickly_li,
  .call_li {
    a {
      color: #747c77 !important;
    }
  }
  .call {
    margin-left: 1em;
  }
  .hot_line_top,
  .hot_line_bot {
    color: #747c77;
  }
  .hot_line {
    margin-top: 2em;
  }
  .footer_logo {
    float: right;
  }
  .bottom {
    display: block;
    p {
      color: #747c77;
      display: inline-block;
      &:first-of-type {
        border-right: 1px solid #747c77;
      }
    }
  }
}
</style>