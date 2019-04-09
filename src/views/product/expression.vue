<template>
  <div class="expression">
    <CommonHead />
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-8 col-xs-12">
          <h4>专注产品研发近20年， 在全国10多个省区累计使用超过100万套 全国80%的市场占有率
          </h4>
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
    <div class="row examples">
      <div class="col-sm-4 col-md-4 col-xs-12 col-lg-4"
           v-for="(item,index) in click===0?examples1:click===1?examples2:click===2?examples3:examples4"
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
      items: [{ name: '农村户厕污水一体化生物处理设备', href: 'unify' }, { name: '生物环保厕所', href: 'profile' }, { name: '生活污水生物集成处理设备', href: 'message' }, { name: '餐厨垃圾处理设备', href: 'setting' }],
      click: 0,
      examples1: [
        { text: '内蒙鄂托克旗', img: require('../../images/news.png') },
        { text: '内蒙鄂托克旗', img: require('../../images/news.png') },
      ],
      examples2: [
        { text: '内蒙鄂托克旗', img: require('../../images/news.png') },
        { text: '内蒙鄂托克旗', img: require('../../images/news.png') },
        { text: '内蒙鄂托克旗', img: require('../../images/news.png') },
      ],
      examples3: [
        { text: '内蒙鄂托克旗', img: require('../../images/news.png') },
        { text: '内蒙鄂托克旗', img: require('../../images/news.png') },
        { text: '内蒙鄂托克旗', img: require('../../images/news.png') },
        { text: '内蒙鄂托克旗', img: require('../../images/news.png') }
      ],
      examples4: [
        { text: '内蒙鄂托克旗', img: require('../../images/news.png') },
        { text: '内蒙鄂托克旗', img: require('../../images/news.png') },
        { text: '内蒙鄂托克旗', img: require('../../images/news.png') },
        { text: '内蒙鄂托克旗', img: require('../../images/news.png') },
        { text: '内蒙鄂托克旗', img: require('../../images/news.png') }
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
  .navbar {
    margin-bottom: 0;
  }
  .container {
    margin: 0;
    width: 100%;
    padding: 15% 5%;
    background: #f8faf9;
    h4 {
      line-height: 30px;
      color: #1aa8aa;
    }
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
  .row.examples {
    padding: 2% 10%;
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
      background: #1aa8aa;
      width: 97.5%;
      opacity: 0.8;
      h5 {
        color: #fff;
      }
    }
  }
}
</style>