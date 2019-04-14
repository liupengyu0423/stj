<template>
  <footer>
    <div class="quickly">
      <p class="quickly_title">快速通道</p>
      <ul class="quickly_li">
        <li v-for="(item,index) in quickly"
            :key="index">
          <a :href="item.tab_E">{{item.tab_C}}</a>
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
           alt=""
           class="img-responsive">
    </div>
    <div class="bottom">
      <p class="left">页面版权所有： 生态洁环保科技股份有限公司</p>
      <p class="right">地址：山东省济南市莱芜区赢牟西大街003号</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'CommonFoot',
  data () {
    return {
      quickly: [{ tab_C: '首页', tab_E: 'home' },
      { tab_C: '产品中心', tab_E: 'unify' },
      { tab_C: '互联网+', tab_E: 'net' },
      { tab_C: '应用案例', tab_E: 'expression' },
      { tab_C: '领导关怀', tab_E: 'leader' },
      { tab_C: '新闻中心', tab_E: 'news' },
      { tab_C: '关于我们', tab_E: 'about' }],
      call: ['T. 0634-6270330', 'F. 0634-6270292', 'E. stj@chinastj.com']
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  position: relative;
  width: 100%;
  max-height: 500px;
  background: #2a2f2f;
  padding: 1.5em 3.5em 1.8vw 2.3em;
  // position: fixed;
  // bottom: 0;
  .img-responsive {
    position: absolute;
    right: 1vw !important;
  }
  > div {
    display: inline-block;
    vertical-align: top;
  }
  .quickly_title,
  .call_title {
    color: #b1b1b1;
    font-size: 16px;
    font-size: 0.6rem;
    margin-bottom: 1vw;
  }
  .quickly_li,
  .call_li {
    li {
      line-height: 120%;
    }
    a {
      color: #747c77 !important;
      font-size: 14px;
      font-size: 0.5rem;
    }
  }
  .call {
    margin-left: 1em;
  }
  .hot_line_top,
  .hot_line_bot {
    color: #747c77;
    font-size: 14px;
    font-size: 0.5rem;
  }
  .hot_line_bot {
    font-size: 20px;
    font-size: 0.6rem;
  }
  .hot_line {
    margin-top: 2em;
  }
  .footer_logo {
    float: right;
  }
  .bottom {
    display: block;
    // padding-top: 4vw;
    // position: absolute;
    // bottom: 0;
    // left: 2.3em;
    margin-top: 1vw;
    .left {
      padding-right: 2vw;
    }
    .right {
      padding-left: 2vw;
    }
    p {
      color: #747c77;
      display: inline-block;
      font-size: 13px;
      font-size: 0.5vw;
      &:first-of-type {
        border-right: 1px solid #747c77;
      }
    }
  }
}
</style>