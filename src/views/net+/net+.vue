<template>
  <div class="net">
    <CommonHead />
    <div class="container-fluid container-fluid-top">
      <div class="col-lg- xi-col-lg-">
        <div class="row row_col1">
          <div class="row1 col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <h4>互联网+ 智能厕所
            </h4>
            <p>借助云计算、IoT 物联网、大数据、智能运维 App、用户端智能家居 App 等前沿科技产品，让每一台生态洁环保厕所都插上科技的翅膀，数据双向互联互通，故障自动报警，售后工单自动派发，真正实现高效率、低成本的管护运维。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="col-lg- xi-col-lg-2">
        <div class="row row_col1">
          <div class="row1 col-lg-10 col-md-12 col-sm-12 col-xs-12">
            <h4>IoT 终端设备
            </h4>
            <p class="top">每一台生态洁厕所，都是一台智能设备。</p>
            <p>与中科院计算所团队通力合作，自主设计研发「网关 + 子设备」的创新 IoT 物联网架构，数据双向互联互通，自动监测与上报故障，支持多种动态扩展传感器，支持固件 OTA 更新，完美实现低成本、高可靠性、高扩展性。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="col-lg- xi-col-lg-3">
        <div class="row row_col1">
          <div class="row1 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h4>运维 APP
            </h4>
            <p class="top">每一台生态洁厕所，都是高效运维的典范。</p>
            <p>生态洁 IoT 物联网终端设备与管理后台无缝衔接，每一次设备故障都会自动报警、创建售后工单，并自动分配给相关的运维人员，未来提供类似滴滴打车的抢单、派单模式，运维效率大大增加。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="col-lg- xi-col-lg-4">
        <div class="row row_col1">
          <div class="row1 col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <h4>智能家居 APP
            </h4>
            <p class="top">每一台生态洁厕所，都是用户的智能家居。</p>
            <p>每一位用户都可以下载生态洁 App，实时查看自家户厕的运转情况、售后服务进展、产品使用介绍、国家政策资讯等信息。</p>
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
  name: 'net',
  data () {
    return {

    }
  },
  created () {

  },
  methods: {

  },
  components: {
    CommonHead,
    CommonFoot
  }
}
</script>

<style lang="scss" scoped>
.net {
  .container-fluid {
    padding: 0;
    margin-right: 0;
  }
  .row {
    margin-right: 0;
  }
  .xi-col-lg-.col-lg- {
    background: url('../../images/net1.png') no-repeat;
    background-size: cover;
    padding: 168px 0 156px 70px;
    h4 {
      font-family: PingFangSC-Semibold;
      font-size: 32px;
      color: #ffffff;
      letter-spacing: 0;
      line-height: 49px;
    }
    p {
      font-family: PingFangSC-Light;
      font-size: 16px;
      color: #ffffff;
      letter-spacing: 0;
      line-height: 32px;
    }
  }
  .xi-col-lg-2 {
    background: url('../../images/net2.png') no-repeat;
    background-size: cover;
    padding: 214px 0 242px 70px;
    text-align: right;
    width: 100%;
    .row_col1 {
      padding-left: 20%;
    }
    h4 {
      font-family: PingFangSC-Semibold;
      font-size: 32px;
      color: #ffffff;
      letter-spacing: 0;
      line-height: 49px;
    }
    p {
      font-family: PingFangSC-Light;
      font-size: 16px;
      color: #ffffff;
      letter-spacing: 0;
      line-height: 32px;
    }
    .top {
      margin-top: 31px;
      margin-bottom: 60px;
    }
  }
  .xi-col-lg-3 {
    background: url('../../images/net3.png') no-repeat;
    background-size: cover;
    padding: 214px 0 242px 70px;
    width: 100%;
    h4 {
      font-family: PingFangSC-Semibold;
      font-size: 32px;
      color: #ffffff;
      letter-spacing: 0;
      line-height: 49px;
    }
    p {
      font-family: PingFangSC-Light;
      font-size: 16px;
      color: #ffffff;
      letter-spacing: 0;
      line-height: 32px;
    }
    .top {
      margin-top: 31px;
      margin-bottom: 60px;
    }
  }
  .xi-col-lg-4 {
    background: url('../../images/net4.png') no-repeat;
    background-size: cover;
    padding: 214px 0 242px 70px;
    text-align: right;
    width: 100%;
    .row_col1 {
      padding-left: 18%;
    }
    h4 {
      font-family: PingFangSC-Semibold;
      font-size: 32px;
      color: #303030;
      letter-spacing: 0;
      line-height: 49px;
    }
    p {
      font-family: PingFangSC-Light;
      font-size: 16px;
      color: #303030;
      letter-spacing: 0;
      line-height: 32px;
    }
    .top {
      margin-top: 31px;
      margin-bottom: 60px;
    }
  }
  .navbar {
    margin-bottom: 0;
  }
  .navbar-default {
    border: none;
  }
  // .row1,
  // .row3 {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  // }
  .row2,
  .row4 {
    position: absolute;
    top: 0;
    right: 0;
  }
  .row4 {
    h4,
    p {
      color: #303030;
    }
  }
  .container-fluid {
    position: relative;
  }
  h4 {
    font-size: 16px;
    color: #fff;
  }
  p {
    color: #fff;
    font-size: 9px;
    line-height: 16px;
  }
}
</style>