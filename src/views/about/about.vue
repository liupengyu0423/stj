<template>
  <div class="about">
    <CommonHead />
    <div class="container">
      <div class="row">
        <img src="../../images/about.png"
             alt=""
             class="img-responsive">
        <div class="col-lg-0 col-lg-3 col-md-4 col-sm-8 col-xs-12">
          <h4>致力于把环保节水理念和绿色环保产业<br />扩展到更加广阔
          </h4>
          <p>为农村厕所革命和生态文明建设做出应有的贡献！</p>
        </div>
      </div>
    </div>
    <ul class="nav nav-tabs nav-justified">
      <li role="presentation"
          :class="index===click?'active nav-tabs-hover':'nav-tabs-hover'"
          v-for="(item,index) in items"
          :key="index">
        <a @click="changeActive(index)">{{item.name}}</a>
      </li>
    </ul>
    <div class="container container_intro">
      <div class="row"
           v-for="(item,index) in click===0?intro1:click===1?intro2:intro3"
           :key="index">
        <div class="col-lg-3 col-md-4 col-sm-8 col-xs-12">
          <h6>{{item.title}}</h6>
          <p class="two_title">{{item.two_title}}</p>
          <p class="content">{{item.content}}</p>
          <p class="laster">{{item.laster}}</p>
        </div>
      </div>
    </div>
    <div class="container container_intro2">
      <div class="row">
        <div class="bottom_intro col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <p>生态洁产品广泛运用到包括</p>
          <p class="center">“南极科考站、北京奥运会场馆、十一届全运会场馆、上海世博会、重庆大剧院、雪野湖旅游区、</p>
          <p class="center">全国各大铁路局以及广阔的新农村社区建设中！</p>
          <p>公司作为主要起草单位参与制定了《小型生活污水成套处理设备》行业标准及《生物降解免水冲厕所》、</p>
          <p>《农村生活污水处理工程技术规程》等地方标准。</p>
        </div>
      </div>
      <div class="responsive-div">
        <div class="row">
          <div class="bottom_intro bottom_intro2 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h4>荣誉奖项</h4>
            <p>通过了ISO9001质量管理体系、ISO14001环境管理体系和ISO18001职业健康管理体系三个国际标准化管理体系认证。
              党、国家和省市部委领导王歧山、李建国、韩长赋、龚正、姜大明、田力普等领导都参观过公司产品，并做出高度评价。
            </p>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-12"
                 v-for="(item,index) in examples"
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
export default {
  name: 'about',
  data () {
    return {
      data: {},
      click: 0,
      items: [{ name: '公司简介', href: 'unify' }, { name: '发展历程', href: 'profile' }, { name: '荣誉奖项', href: 'message' }],
      intro1: [{
        title: '公司简介',
        two_title: '生态洁环保科技股份有限公司是国内唯一一家取得驰名商标的环保厕所和污水处理设备研发制造企业',
        content: '是专业环保产品研发、设计、生产销售于一体的股份制高科技企业。\n公司以先进的技术，优良的品质，专业的服务为客户提供最优质的服务。\n主要从事环保装备制造、工程承包、环保项目投资、工程建设、运营服务。形成一体化处理设备、农村污水集<br/>成处理系统、生物环保卫生间等系列产品。',
        laster: '公司建有院士工作站、省级工程技术研究中心，生态洁与国内最大的综合性微生物学研究机构——\n中国科学院微生物研究所合作，从事微生物学基础和应用研究。'
      }],
      intro2: [{
        title: '发展历程',
        two_title: '生态洁环保科技股份有限公司是国内唯一一家取得驰名商标的环保厕所和污水处理设备研发制造企业',
        content: '是专业环保产品研发、设计、生产销售于一体的股份制高科技企业。\n公司以先进的技术，优良的品质，专业的服务为客户提供最优质的服务。\n主要从事环保装备制造、工程承包、环保项目投资、工程建设、运营服务。形成一体化处理设备、农村污水集<br/>成处理系统、生物环保卫生间等系列产品。',
        laster: '公司建有院士工作站、省级工程技术研究中心，生态洁与国内最大的综合性微生物学研究机构——\n中国科学院微生物研究所合作，从事微生物学基础和应用研究。'
      }],
      intro3: [{
        title: '荣誉奖项',
        two_title: '生态洁环保科技股份有限公司是国内唯一一家取得驰名商标的环保厕所和污水处理设备研发制造企业',
        content: '是专业环保产品研发、设计、生产销售于一体的股份制高科技企业。\n公司以先进的技术，优良的品质，专业的服务为客户提供最优质的服务。\n主要从事环保装备制造、工程承包、环保项目投资、工程建设、运营服务。形成一体化处理设备、农村污水集<br/>成处理系统、生物环保卫生间等系列产品。',
        laster: '公司建有院士工作站、省级工程技术研究中心，生态洁与国内最大的综合性微生物学研究机构——\n中国科学院微生物研究所合作，从事微生物学基础和应用研究。'
      }],
      examples: [
        { text: '街头站立式', img: require('../../images/news.png') },
        { text: '微生物降解环保厕所', img: require('../../images/news.png') },
        { text: '泡沫封堵式环保厕所', img: require('../../images/news.png') },
        { text: '街头站立式', img: require('../../images/news.png') },
        { text: '微生物降解环保厕所', img: require('../../images/news.png') },
        { text: '泡沫封堵式环保厕所', img: require('../../images/news.png') },
        { text: '街头站立式', img: require('../../images/news.png') },
        { text: '微生物降解环保厕所', img: require('../../images/news.png') },
        { text: '泡沫封堵式环保厕所', img: require('../../images/news.png') }
      ]
    }
  },
  created () {

  },
  methods: {
    changeActive (index) {
      this.click = index
    }
  },
  components: {
    CommonHead,
    CommonFoot
  }
}
</script>

<style lang="scss" scoped>
.about {
  .container {
    margin: 0;
    width: 100%;
    position: relative;
    .col-lg-0 {
      position: absolute;
      top: 0;
    }
    h4 {
      line-height: 30px;
      color: #fff;
    }
    p {
      color: #fff;
    }
  }
  .navbar {
    margin-bottom: 0;
  }
  .navbar-default {
    border: none;
  }
  .nav-tabs-hover a {
    color: #303030 !important;
  }
  .nav-tabs.nav-justified > li > a {
    border-bottom: none;
  }
  .nav-tabs.nav-justified > .active > a,
  .nav-tabs.nav-justified > .active > a:focus,
  .nav-tabs.nav-justified > .active > a:hover {
    border: none;
    color: #525b68;
  }
  .nav > .active > a,
  .nav > li > a:focus,
  .nav > li > a:hover {
    background: #fff;
    color: #1aa8aa !important;
    border-bottom: 1px solid #1aa8aa;
  }
  .nav-tabs > li > a:hover {
    border-color: #fff;
  }
  .container_intro {
    background: #ebf4f4;
  }
  h6 {
    font-size: 16px;
    margin-bottom: 28px;
    margin-top: 60px;
  }
  p.two_title,
  p.laster {
    color: #1aa8aa;
    font-size: 9px;
  }
  p.laster {
    margin-bottom: 79.5px;
  }
  p.two_title {
    margin-bottom: 19px;
  }
  p.content {
    color: #303030;
    font-size: 8px;
    margin-bottom: 14.5px;
  }
  .container_intro2 {
    background: #ebf4f4;
    text-align: center;
  }
  .bottom_intro {
    padding-top: 60px;
    line-height: 20px;
  }
  .bottom_intro p {
    color: #303030;
    font-size: 9px;
  }
  .bottom_intro h4 {
    color: #303030;
    font-size: 16px;
    margin-bottom: 28px;
  }
  .bottom_intro2 p {
    margin-bottom: 48px;
  }
  .bottom_intro .center {
    color: #1aa8aa;
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
      bottom: 3px;
      background: rgba(255, 255, 255, 0.88);
      width: 97.5%;
      h5 {
        color: #303030;
      }
    }
    .more {
      font-size: 9px;
      color: #747c77;
      text-align: center;
    }
  }
}
</style>