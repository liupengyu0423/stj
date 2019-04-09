<template>
  <div class="unify">
    <CommonHead />
    <div class="container-fluid">
      <img src="../../images/unify.png"
           alt=""
           class="img-responsive">
      <div class="col-lg-">
        <div class="row row_col1">
          <div class="col-lg-0 col-lg-4 col-md-4 col-sm-6 col-xs-10">
            <h4>响应习主席"厕所革命"的号召<br/>为实施乡村振兴战略贡献力量</h4>
          </div>
        </div>
        <div class="row row_col2">
          <div class="col-lg-13 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <p>积极参与农村人居环境整治三年行动方案，为实施乡村振兴战略贡献力量</p>
          </div>
        </div>
      </div>
      <ul class="nav nav-tabs nav-justified">
        <li role="presentation"
            :class="index===click?'active nav-tabs-hover':'nav-tabs-hover'"
            v-for="(item,index) in items"
            :key="index">
          <a :href="item.href"
             @click="changeActive(index)">{{item.name}}</a>
        </li>
      </ul>
      <div class="container responsive-div">
        <img src="../../images/wrashroom.png"
             alt=""
             class="img-responsive">
        <div class="row-lg-1 center-auto">
          <div class="row row_col1">
            <div class="bes_1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h4>生物环保厕所</h4>
            </div>
          </div>
          <div class="row row_col2">
            <div class="bes_2 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <p>利用经过优化的微生物菌剂，对人体排泄物进行高效分解，并将微量残<br/>留物转化成生态有机肥的高科技产品。
              </p>
            </div>
          </div>
          <a href="/expression">
            <p class="text-muted">查看应用案例 ></p>
          </a>
        </div>
      </div>
      <div class="container responsive-div2">
        <div class="container">
          <div class="row-lg-2 center-auto">
            <div class="row row_col1">
              <div class="bes_1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h4>产品特点</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <h5>免除污染</h5>
            <ul>
              <li>直接将人的排泄物原位处理，一年可减少36万吨+清洁水</li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>经济节能</h5>
            <ul>
              <li>运行费用低廉、无须冲水，一年可节水1000吨+，可节约清运、处理费用10000+元</li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>安装方便</h5>
            <ul>
              <li>无需铺设排污管网，可根据地形随处安放，建设费用低</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <h5>外形美观</h5>
            <ul>
              <li>外观造型和文化色彩具多样性，具有景观效应，提升城市、旅游景区形象</li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>用途广泛</h5>
            <ul>
              <li>适用于城镇、风景名胜区、广场、公园、居民小区、车站、码头等人员密集场所，以及火车、轮船上</li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>产品多样</h5>
            <ul>
              <li>水循环式、泡沫封堵式、水冲式、打包式等多种产品类型</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="responsive-div6">
        <h4>产品展示</h4>
        <div class="row">
          <div class="col-sm-6 col-md-4"
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
    <CommonFoot />
  </div>
</template>

<script>
import CommonHead from '@/components/head'
import CommonFoot from '@/components/foot'
export default {
  name: 'unify',
  data () {
    return {
      items: [{ name: '农村户厕污水一体化生物处理设备', href: 'unify' }, { name: '生物环保厕所', href: 'profile' }, { name: '生活污水生物集成处理设备', href: 'message' }, { name: '餐厨垃圾处理设备', href: 'setting' }],
      click: 0,
      list_group_items: ['STJ-单户式', 'STJ-多户式', 'STJ-村集中式'],
      click_group: 0,
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
  methods: {
    changeActive (index) {
      this.click = index
    },
    changegroup (index) {
      this.click_group = index
    }
  },
  components: {
    CommonHead,
    CommonFoot
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
.navbar {
  margin-bottom: 0;
}
.container-fluid {
  padding: 0;
  margin: 0;
  position: relative;
}
.col-lg- {
  width: 100%;
  position: absolute;
  top: 0;
}

.row_col1 {
  margin-top: 2%;
}

.row_col2 {
  margin-top: 2%;
}

.col-lg-0 h4 {
  color: #1aa8aa;
}

.col-lg-13 p {
  color: #303030;
}
.nav-tabs-hover.active {
  color: #1aa8aa;
  border-bottom: 1px solid #1aa8aa;
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
}
.nav > li > a:focus,
.nav > li > a:hover {
  background: #fff;
  color: #525b68;
}
.nav-tabs > li > a:hover {
  border-color: #fff;
}
.container {
  margin: 0 !important;
  padding: 0 !important;
}
.responsive-div {
  width: 100%;
  background: #ebf4f4;
  .img-responsive {
    float: right;
    display: inline-block;
  }
}
.responsive-div2 {
  width: 100%;
  background: #08a5a7;
  .img-responsive {
    float: right;
    display: inline-block;
  }
  .row .col-md-4 {
    h5,
    ul > li {
      color: #fff;
    }
    ul,
    li {
      list-style: inside;
    }
  }
}
.row-lg-1 {
  position: absolute;
}
.row-lg-2 {
  .bes_1 h4,
  .bes_2 p {
    color: #fff;
  }
  .bes_1 h4 {
    font-size: 16px;
  }
  .bes_2 p {
    font-size: 9px;
  }
}

.bes_1 h4 {
  font-size: 16px;
  color: #303030;
}
.bes_2 p {
  font-size: 9px;
  color: #303030;
}
.text-muted {
  font-size: 9px;
}
.responsive-div3 {
  width: 100%;
  .img-responsive-container {
    background: #ebf4f4;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    float: right;
  }
  .list-group {
    position: absolute;
    flex-direction: column;
    .list-group-item {
      font-size: 16px !important;
      a.list-group-item,
      button.list-group-item {
        color: #a5a5a5;
        border-bottom: 1px solid #dadada;
      }
    }
  }
  .list-group-item.active,
  .list-group-item.active:focus,
  .list-group-item.active:hover {
    background: #fff !important;
    color: #303030;
    border-bottom: 1px solid #1aa8aa;
  }
}
.responsive-div4 {
  width: 100%;
  background: #e8f6f4;
  position: relative;
  .img-responsive {
    float: right;
  }
  .col-lg- {
    h4 {
      color: #303030;
    }
    .col-lg-13 {
      p {
        font-size: 9px;
      }
    }
  }
}
.responsive-div5 {
  width: 100%;
  text-align: center;
  .one {
    margin-top: 60px;
  }
  .two {
    margin-top: 45px;
  }
  img {
    margin-top: 20px;
  }
}
.responsive-div6 {
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
</style>