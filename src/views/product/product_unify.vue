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
        <img src="../../images/wc.png"
             alt=""
             class="img-responsive">
        <div class="row-lg-1 center-auto">
          <div class="row row_col1">
            <div class="bes_1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h4>科学解决农村厕所、生活污水处理问题</h4>
            </div>
          </div>
          <div class="row row_col2">
            <div class="bes_2 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <p>利用微生物降解原理，对生活污水进行截流、吸附和分解， <br/>最终实现对厕所、生活污水的无害化处理和循环利用。
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
                <h4>适合中国农村实情的新型农村污水处理设备</h4>
              </div>
            </div>
            <div class="row row_col2">
              <div class="bes_2 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <p>与中科院微生物合作，针对中国农村生活所排放的粪便、生活污水特点，<br/>开发出适合中国农村实情的新型农村污水处理设备。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <h5>一体化</h5>
            <ul>
              <li>一机多用，一步到位。</li>
              <li>厕所、厨房、洗浴一体化处理。</li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>无害化</h5>
            <ul>
              <li>排放符合《城镇污水处理厂污染物综合排放标准》，出水达到一级 B 标准，彻底解决农村主要污染源。</li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>智能化</h5>
            <ul>
              <li>户厕设备由智能物联网 IoT 设备控制驱动，实现故障报警、动态远程控制等功能，与智能管护 App 打通实现高效运维。</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <h5>中水与肥效回用</h5>
            <ul>
              <li>设备人性化设计，支持中水回田灌溉、冲厕等。</li>
              <li>支持安全、便捷地肥效回用</li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>性价比高</h5>
            <ul>
              <li>无需建设管网，投资少，设备设计寿命 30 年，收益高。</li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>维护简单</h5>
            <ul>
              <li>自动化故障报警， 平时无需专业人员维修。</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container responsive-div3">
        <div class="img-responsive-container">
          <img :src="click_group===0?require('../../images/single.png'):click_group===1?require('../../images/much.png'):require('../../images/center.png')"
               alt=""
               class="img-responsive">
        </div>
        <div class="list-group">
          <h4>产品类型</h4>
          <a :class="index === click_group?'list-group-item active':'list-group-item'"
             v-for="(item,index) in list_group_items"
             :key="index"
             @click="changegroup(index)">
            {{item}}
          </a>
        </div>
      </div>
      <div class="container responsive-div4">
        <img src="../../images/theory.png"
             alt=""
             class="img-responsive">
        <div class="col-lg-">
          <div class="row row_col1">
            <div class="col-lg-0 col-lg-4 col-md-4 col-sm-6 col-xs-10">
              <h4>设备原理及工作流程</h4>
            </div>
          </div>
          <div class="row row_col2">
            <div class="col-lg-13 col-lg-3 col-md-3 col-sm-3 col-xs-8">
              <p>采用倒置 A2/O 和接触氧化法工艺的基础上，通过在降解反应器内添加一定优化配置的生物强化菌剂，对污染物进行高效降解，实现对污水的精华并循环再利用的产品。 排出的水指标符合国家排放标准，可用于绿化、灌溉等。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container responsive-div5">
        <ul>
          <li class="one">
            <h4>处理技术参数</h4>
            <img src="../../images/parameter.png"
                 alt=""
                 class="img-responsive center-block">
          </li>
          <li class="two">
            <h4>污水处理指标</h4>
            <img src="../../images/index.png"
                 alt=""
                 class="img-responsive center-block">
          </li>
        </ul>
      </div>
      <div class="responsive-div6">
        <h4>应用案例</h4>
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
        <p class="more">查看更多应用案例</p>
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
        { text: '内蒙鄂托克旗', img: require('../../images/news.png') },
        { text: '内蒙鄂托克旗', img: require('../../images/news.png') },
        { text: '内蒙鄂托克旗', img: require('../../images/news.png') }
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
    background: #1aa8aa;
    width: 97.5%;
    opacity: 0.8;
    h5 {
      color: #fff;
    }
  }
  .more {
    font-size: 9px;
    color: #747c77;
    text-align: center;
  }
}
</style>