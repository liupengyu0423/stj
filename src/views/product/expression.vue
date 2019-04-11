<template>
  <div class="expression">
    <CommonHead />
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-8 col-xs-12">
          <h4>专注产品研发近20年， <br/>在全国10多个省区累计使用超过100万套<br/> 全国80%的市场占有率
          </h4>
        </div>
      </div>
    </div>
    <ul class="nav nav-tabs nav-justified">
      <li role="presentation"
          :class="index===click?'active nav-tabs-hover':'nav-tabs-hover'"
          v-for="(item,index) in items"
          :key="index">
        <a class="changeActiveA"
           @click="changeActive(index)">{{item.name}}
          <span :class="click===0?'line1':'line2'"
                v-if="click===index"></span>
        </a>
      </li>
    </ul>
    <div class="row examples">
      <div class="col-sm-4 col-md-4 col-xs-6 col-lg-4"
           v-for="(item,index) in click===0?examples1:examples2"
           :key="index">
        <div class="thumbnail">
          <img :src="item.img">
          <div class="caption">
            <h5>{{item.text}}</h5>
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
  name: 'expression',
  components: {
    CommonHead,
    CommonFoot
  },
  data () {
    return {
      items: [{ name: '农村户厕污水一体化生物处理设备', href: 'unify' }, { name: '生物环保厕所', href: 'wrashroom' }],
      click: 0,
      examples1: [
        { text: '内蒙鄂托克旗', img: require('../../images/news.png') },
        { text: '新疆喀什', img: require('../../images/news.png') },
        { text: '广西上林县', img: require('../../images/news.png') },
        { text: '陕西洛川县', img: require('../../images/news.png') },
        { text: '青海门源县', img: require('../../images/news.png') },
        { text: '宁夏利通区', img: require('../../images/news.png') },
        { text: '宁夏灵武市', img: require('../../images/news.png') },
        { text: '山东齐河县', img: require('../../images/news.png') },
        { text: '山东荣成市', img: require('../../images/news.png') }
      ],
      examples2: [
        { text: '内蒙鄂托克旗', img: require('../../images/news.png') },
        { text: '新疆喀什', img: require('../../images/news.png') },
        { text: '广西上林县', img: require('../../images/news.png') },
      ]
    }
  },
  methods: {
    changeActive (index) {
      this.click = index
    }
  }
}
</script>

<style lang="scss" scoped>
.expression {
  .line1,
  .line2 {
    display: inline-block;
    width: 100px;
    height: 2px;
    background: #40f2d0;
    position: absolute;
    bottom: 0;
    left: 30%;
  }
  .line2 {
    width: 50px;
  }
  .changeActiveA {
    position: relative;
  }
  .navbar {
    margin-bottom: 0;
  }
  .container {
    margin: 0;
    width: 100%;
    padding: 8% 5%;
    background: #f8faf9;
    h4 {
      line-height: 30px;
      color: #1aa8aa;
      font-family: PingFangSC-Regular;
      font-size: 20px;
    }
  }
  .row {
    margin-right: 0;
  }
  .nav-tabs-hover {
    padding: 10px 15px;
    text-align: center;
  }
  .nav-tabs-hover.active {
    color: #1aa8aa;
  }
  .nav-tabs-hover a {
    color: #303030 !important;
    display: inline;
  }
  .nav-tabs-hover.active a {
    color: #1aa8aa !important;
  }
  .nav-tabs > li > a {
    border: none;
  }
  .nav-tabs.nav-justified > li > a {
    border-bottom: none;
  }
  .nav-tabs.nav-justified {
    // border-bottom: 1px solid #f3f3f3;
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
  .row.examples {
    margin: 2% 10%;
    padding-top: 26px;
    h4 {
      text-align: center;
      margin-bottom: 20px;
    }
    .thumbnail {
      position: relative;
      border: none;
      padding: 0;
    }
    .caption {
      position: absolute;
      bottom: 0;
      background: #1aa8aa;
      width: 100%;
      opacity: 0.8;
      padding: 3%;
      h5 {
        color: #fff;
        font-family: PingFangSC-Regular;
        font-size: 10px;
      }
    }
  }
}
</style>