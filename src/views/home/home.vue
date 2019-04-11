<template>
  <div class="home">
    <CommonHead />
    <Swiper />
    <div class="environment">
      <div class="row">
        <div class="col-sm-0 col-sm-4 col-md-4 col-lg-4 col-xs-12">
          <div class="thumbnail">
            <img src="../../images/envir.png"
                 alt="">
            <div class="caption">
              <p class="list-group-item-p">人居环境建设</p>
            </div>
          </div>
        </div>
        <div class="col-sm-0 col-sm-4 col-md-4 col-lg-4 col-xs-12">
          <div class="thumbnail">
            <img src="../../images/innocuity.png"
                 alt="">
            <div class="caption">
              <p class="list-group-item-p">无害化</p>
            </div>
          </div>
        </div>
        <div class="col-sm-0 col-sm-4 col-md-4 col-lg-4 col-xs-12">
          <div class="thumbnail">
            <img src="../../images/integration.png"
                 alt="">
            <div class="caption">
              <p class="list-group-item-p">厕所、洗浴、厨房一体化</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="intro wrap"
         @click="blowimg">
      <!-- <img src="../../images/intro.png"
           alt=""
           class="img-responsive"> -->
      <div class="intro_text">
        <p class="intro_title">为农村厕所革命和生态文明建设做出贡献</p>
        <p>生态洁是国内唯一一家取得驰名商标的环保厕所和污水处理设备研发制造企业</p>
        <p>专注产品研发近20年，在全国10多个省区累计使用超过100万套</p>
        <ul class="instro-radius-ul">
          <li class="instro-radius">
            <h4>ISO</h4>
            <p>体系认证</p>
            <p>
              <strong>3</strong>个</p>
          </li>
          <li class="instro-radius">
            <h4>50+</h4>
            <p>专利</p>
          </li>
          <li class="instro-radius">
            <p>核心技术</p>
            <p>列入国家</p>
            <p>
              <strong>863</strong>计划</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="row scheme">
      <div class="col-sm-13 col-sm-6 col-md-6 col-lg-6 col-xs-12">
        <div class="thumbnail">
          <h2>产品中心</h2>
          <p class="top">农村户厕一体化生物处理建设</p>
          <p class="center">利用微生物降解原理，对生活污水进行截流、吸附和分解，最终实现对污水完全净化并循环利用的新型农村生活污水处理设备</p>
          <a href="/unify"
             class="all">了解所有产品</a>
          <img src="../../images/product.png"
               alt="">
        </div>
      </div>
      <div class="col-sm-13 col-sm-6 col-md-6 col-lg-6 col-xs-12">
        <div class="thumbnail">
          <h2>互联网+智慧方案</h2>
          <p class="top">农村户厕一体化生物处理设备</p>
          <p class="center">利用微生物降解原理，对生活污水进行截流、吸附和分解，最终实现对污水完全净化并循环利用的新型农村生活污水处理设备</p>
          <a href="/expression"
             class="all">了解所有方案</a>
          <img src="../../images/fa.png"
               alt="">
        </div>
      </div>
    </div>
    <div class="container-fluid map">
      <h4>产品覆盖分布图</h4>
      <img src="../../images/map.png"
           alt=""
           class="img-responsive center-block">
      <div>
        <span class="spure"></span>
        <span class="spure_text">已安装的省份</span>
      </div>
    </div>
    <div class="container-fluid map">
      <h4>新闻中心</h4>
      <div class="row examples">
        <div class="col-sm-12 col-md-6 col-xs-12 col-lg-6"
             v-for="(item,index) in examples"
             :key="index">
          <div class="thumbnail">
            <img :src="item.img"
                 class="center-block">
            <div class="caption">
              <p class="title">{{item.title}}</p>
              <p class="detail">{{item.detail}}</p>
              <a :href="'/news/detail/'+item.id"
                 class="learn_detail"
                 @click="learn_detail(item)">了解详情</a>
            </div>
          </div>
        </div>
      </div>
      <a class="more_news"
         href="/news">查看更多新闻</a>
    </div>
    <div class="container">
      <div class="responsive-div">
        <div class="row">
          <div class="bottom_intro bottom_intro2 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h4>褒奖</h4>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-12"
                 v-for="(item,index) in examples2"
                 :key="index">
              <div class="thumbnail">
                <img :src="item.img">
                <div class="caption">
                  <h5>{{item.text}}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      examples: [
        { title: '四川省农业厅副厅长杨波参观公司产品', img: require('../../images/news.png'), id: 0, date: '2019-03-08', detail: '3月8日，四川省农业厅副厅长杨波及各地市负责农村改厕的领导、专家在…' },
        { title: '农业农村部部长韩长赋参观公司产品', img: require('../../images/news.png'), id: 1, date: '2019-10-09', detail: '2018年10月9日，全国首届农村卫生厕所新技术新产品展示交流会在山东…' },
        { title: '四川省农业厅副厅长杨波参观公司产品', img: require('../../images/news.png'), id: 2, date: '2019-03-08', detail: '3月8日，四川省农业厅副厅长杨波及各地市负责农村改厕的领导、专家在…' },
        { title: '农业农村部部长韩长赋参观公司产品', img: require('../../images/news.png'), id: 3, date: '2019-03-08', detail: '2018年10月9日，全国首届农村卫生厕所新技术新产品展示交流会在山东…' }
      ],
      examples2: [
        { text: '高新技术企业', img: require('../../images/news.png') },
        { text: '火炬计划重点高新技术企业', img: require('../../images/news.png') },
        { text: '院士工作站', img: require('../../images/news.png') },
        { text: '国家级科技进步奖', img: require('../../images/news.png') },
        { text: '世界厕所大赛表扬奖', img: require('../../images/news.png') },
        { text: '中国专利山东明星企业证书', img: require('../../images/news.png') },
      ]
    }
  },
  components: {
    CommonHead,
    CommonFoot,
    Swiper
  },
  created () {
  },
  methods: {
    blowimg () {
      console.log($('img.intro_img').zoomify())
      $('img.intro_img').zoomify();
    },
    learn_detail (news) {
      localStorage.setItem('news', JSON.stringify(news))
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
  background: url('../../images/intro.png') no-repeat;
  background-size: cover;
  .intro_img {
    width: 100%;
  }
  .intro_text {
    // position: absolute;
    // top: 0;
    text-align: center;
    width: 100%;
    padding-top: 1px;
    p {
      color: #fff;
      line-height: 22px;
      font-size: 12px;
    }
    .intro_title {
      font-size: 16px;
      margin-top: 40px;
      margin-bottom: 20px;
    }
  }
}
.scheme {
  background-image: linear-gradient(
    -180deg,
    #ebf4f4 0%,
    #ffffff 50%,
    #ebf4f4 100%
  );
  .scheme_left {
    background: url('../../images/product.png') no-repeat;
    background-size: contain;
  }
}
.thumbnail {
  padding: 0 !important;
  margin: 0 !important;
  border: none;
  background: none;
}
.col-md-0 {
  padding: 0;
}

.row {
  margin: 0;
}
.list-group-item {
  position: relative;
}
.list-group-item-p {
  color: #fff;
  position: absolute;
  top: 35%;
  font-size: 16px;
  width: 100%;
  text-align: center;
}
.environment {
  .row {
    .col-sm-0 {
      padding: 0 !important;
    }
  }
}
.thumbnail .caption {
  padding: 0;
}
.instro-radius-ul {
  display: flex;
  justify-content: space-around;
  margin-top: 43.5px;
  padding-bottom: 75px;
}
.instro-radius {
  width: 86px;
  height: 86px;
  border: 1px solid #fff;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  h4 {
    color: #fff;
  }
}
.col-sm-13 {
  h2 {
    font-size: 19px;
    color: #1aa8aa;
    padding-top: 60px;
    margin-bottom: 35.5px;
  }
  .top {
    font-size: 11px;
    color: #3e403f;
    margin-bottom: 4px;
  }
  .center {
    font-size: 8px;
    color: #3e403f;
  }
  .all {
    float: left;
    color: #1aa8aa;
    font-size: 8px;
    margin-top: 19px;
  }
}
.map {
  padding-bottom: 40px;
  h4 {
    text-align: center;
    padding: 60px 0 50px 0;
  }
  > div {
    float: left;
    margin-left: 5%;
  }
  .spure {
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #3dc4aa;
  }
  .spure_text {
    color: #303030;
    font-size: 9px;
    margin-left: 6px;
  }
  .thumbnail {
    img {
      width: 50%;
      height: 40%;
      margin-right: 2%;
      display: inline-block;
    }
    .learn_detail {
      font-size: 12px;
      color: #7a7e7c;
    }
    .detail {
      font-size: 14px;
      color: #303030;
    }
    .title {
      font-size: 18px;
      color: #303030;
      margin-top: 5px;
    }
  }
  .examples {
    > div {
      margin-bottom: 37px;
    }
    .title {
      margin-bottom: 8px;
    }
    .detail {
      margin-bottom: 13px;
    }
  }
  @media (min-width: 768px) {
    .thumbnail {
      display: inline;
      .title {
        margin-bottom: 8px;
      }
      .detail {
        margin-bottom: 13px;
      }
    }
  }
  @media (min-width: 992px) {
    .thumbnail {
      display: flex;
      .title {
        margin-bottom: 8px;
      }
      .detail {
        margin-bottom: 13px;
      }
    }
  }
  @media (min-width: 1200px) {
    .thumbnail {
      display: flex;
      .title {
        margin-bottom: 16px;
      }
      .detail {
        margin-bottom: 26px;
      }
    }
  }
}
.more_news {
  border: 1px solid #ebebeb;
  font-size: 8px;
  color: #747c77;
  padding: 5px 9px;
  margin-left: 40%;
  margin-top: 19.5px;
}
.responsive-div {
  padding: 2% 10% !important;
  box-sizing: border-box;
  h4 {
    text-align: center;
    margin-bottom: 20px;
  }
  .thumbnail {
    position: relative;
    border: none;
  }
  .caption {
    position: absolute;
    bottom: 0px;
    background: rgba(255, 255, 255, 0.88);
    width: 100%;
    padding: 3%;
    h5 {
      color: #303030;
      font-family: PingFangSC-Regular;
      font-size: 12px;
    }
  }
  .more {
    font-size: 9px;
    color: #747c77;
    text-align: center;
  }
}
</style>