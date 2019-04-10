<template>
  <div class="home">
    <CommonHead />
    <Swiper/>
    <div class="environment">
      <ul class="list-group">
        <li class="list-group-item"><img src="../../images/envir.png"
               alt=""></li>
        <li class="list-group-item"><img src="../../images/innocuity.png"
               alt=""></li>
        <li class="list-group-item"><img src="../../images/integration.png"
               alt=""></li>
      </ul>
    </div>
    <div class="intro wrap"
         @click="blowimg">
      <img src="../../images/intro.png"
           alt=""
           class="intro_img zoomify">
      <div class="intro_text">
        <p class="intro_title">为农村厕所革命和生态文明建设做出贡献</p>
        <p>生态洁是国内唯一一家取得驰名商标的环保厕所和污水处理设备研发制造企业</p>
        <p>专注产品研发近20年，在全国10多个省区累计使用超过100万套</p>
      </div>
    </div>
    <div class="scheme">
      <div class="scheme_left">
        <h2>产品中心</h2>
        <p>农村户厕一体化生物处理建设</p>
        <p>利用微生物降解原理，对生活污水进行截流、吸附和分解，最终实现对污水完全净化并循环利用的新型农村生活污水处理设备</p>
        <a href="#">了解所有产品</a>
      </div>
    </div>
    <CommonFoot />
  </div>
</template>

<script>
import CommonHead from '@/components/head'
import CommonFoot from '@/components/foot'
import Swiper from '@/components/swiper'
export default {
  name: 'home',
  data () {
    return {

    }
  },
  components: {
    CommonHead,
    CommonFoot,
    Swiper
  },
  created () {
    console.log(zoomifyJs)
  },
  methods: {
    blowimg () {
      console.log($('img.intro_img').zoomify())
      $('img.intro_img').zoomify();
    }
  }
}
</script>

<style lang="scss" scoped>
.list-group-item {
  display: inline-block;
  flex: 1;
  padding: 0;
  font-size: 0 !important;
  border: none;
  img {
    width: 100%;
    height: 100%;
  }
}
.list-group {
  display: flex;
  margin-bottom: 0;
}
.intro {
  margin-top: 0;
  width: 100%;
  position: relative;
  pointer-events: auto;
  .intro_img {
    width: 100%;
  }
  .intro_text {
    position: absolute;
    top: 0;
    text-align: center;
    width: 100%;
    .intro_title {
      margin-top: 80px;
      margin-bottom: 30px;
    }
    p {
      color: #fff;
      line-height: 44px;
    }
  }
}
.scheme {
  .scheme_left {
    background: url('../../images/product.png') no-repeat;
    background-size: contain;
  }
}
.thumbnail {
  padding: 0 !important;
  margin: 0 !important;
  border: none;
}
.col-md-0 {
  padding: 0;
}

.row {
  margin: 0;
}
</style>