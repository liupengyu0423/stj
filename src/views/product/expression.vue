<template>
  <div class="expression">
    <CommonHead />
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h4>专注产品研发近20年， <br />在全国10多个省区累计使用超过100万套<br /> 全国80%的市场占有率
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
      <div class="col-sm-4 col-md-4 col-xs-4 col-lg-4"
           v-for="(item,index) in click===0?examples1:examples2"
           :key="index">
        <div class="thumbnail">
          <img @click="showimage(item.img)"
               :src="item.img">
          <div class="caption">
            <h5>{{item.text}}</h5>
          </div>
        </div>
      </div>
    </div>
    <div id="ShowImage_Form"
         class="modal">
      <div class="modal-header">
        <button data-dismiss="modal"
                class="close"
                type="button"></button>
      </div>
      <div class="modal-body"
           @click="close">
        <div id="img_show"
             @click="close">
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
        { text: '山东莱芜', img: require('../../images/w1/w1.jpg') },
        { text: '金鼎置业', img: require('../../images/w1/w2.jpg') },
        { text: '房干旅游区', img: require('../../images/w1/w3.jpg') },
        { text: '郭家沟社区', img: require('../../images/w1/w4.jpg') },
        { text: '宁夏利通', img: require('../../images/w1/w5.jpg') },
        { text: '宁夏灵武', img: require('../../images/w1/w6.jpg') },
        { text: '青海贵德', img: require('../../images/w1/w7.jpg') },
        { text: '浙江嘉兴', img: require('../../images/w1/w8.png') },
        { text: '山东嘉祥', img: require('../../images/w1/w9.jpg') }
      ],
      examples2: [
        { text: '微生物降解环保厕所', img: require('../../images/c1/c1.jpg') },
        { text: '街头站立式环保厕所', img: require('../../images/c1/c2.jpg') },
        { text: '泡沫封堵式环保厕所', img: require('../../images/c1/c3.jpg') },
      ]
    }
  },
  methods: {
    changeActive (index) {
      this.click = index
    },
    showimage (source) {
      $("#ShowImage_Form").find("#img_show").html("<img src='" + source + "' class='carousel-inner img-responsive img-rounded' />");
      $("#ShowImage_Form").modal();
    },
    close () {
      $("#ShowImage_Form").modal('hide');
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
    left: 8vw;
  }
  .line2 {
    width: 50px;
    left: 4.5vw;
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
      font-size: 16px;
      font-size: 1.6rem;
      line-height: 4vw;
    }
  }
  .row {
    margin-right: 0;
  }
  .nav-tabs-hover {
    padding: 1.5vw;
    text-align: center;
  }
  .nav-tabs-hover.active {
    color: #1aa8aa;
  }
  .nav-tabs-hover a {
    color: #303030 !important;
    display: inline;
    font-size: 8px;
    font-size: 0.8rem;
  }
  .nav-tabs-hover.active a {
    color: #1aa8aa !important;
  }
  .nav-tabs > li > a {
    border: none;
  }
  .nav-tabs.nav-justified > li > a {
    border-bottom: none;
    padding: 1.5vw;
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
    margin: 2vw 10vw;
    padding-top: 2.6vw;
    h4 {
      text-align: center;
      margin-bottom: 2vw;
    }
    .thumbnail {
      position: relative;
      border: none;
      padding: 0;
    }
    img {
      width: 100%;
      height: 12vw;
      margin: 0;
    }
    .caption {
      position: absolute;
      bottom: 0;
      background: #1aa8aa;
      width: 100%;
      opacity: 0.8;
      padding: 0.5vw;
      h5 {
        color: #fff;
        font-family: PingFangSC-Regular;
        font-size: 6px;
        font-size: 0.6rem;
      }
    }
  }
}
</style>