<template>
  <div class="news">
    <CommonHead />
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h4>生态洁产品受到国家领导关注<br>被中央电视台报道
          </h4>
        </div>
      </div>
    </div>
    <div class="row examples"
         id="mao">
      <div class="col-sm-4 col-md-4 col-xs-4 col-lg-4 col-sm"
           v-for="(item,index) in examples"
           :key="index">
        <div class="thumbnail">
          <img :src="item.img"
               @click="showimage(item.img)">
          <div class="caption">
            <p class="title">{{item.title}}</p>
            <p class="date">{{item.date}}</p>
            <p class="detail">{{item.detail}}</p>
            <a :href="'/leader/detail/'+item.id"
               class="learn_detail"
               @click="learn_detail(item)">了解详情</a>
          </div>
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation"
         class="nav">
      <ul class="pagination">
        <li>
          <a aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li>
          <a :class="num==='one'?'active':''"
             href="#mao"
             @click="tab('one')">1</a>
        </li>
        <li>
          <a :class="num==='two'?'active':''"
             href="#mao"
             @click="tab('two')">2</a>
        </li>
        <li>
          <a :class="num==='three'?'active':''"
             href="#mao"
             @click="tab('three')">3</a>
        </li>
        <li>
          <a aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
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
  name: 'news',
  data () {
    return {
      num: 'one',
      examples: [],
      examples1: [
        { title: '四川省农业厅副厅长杨波参观公司产品', img: require('../../images/news.png'), id: 0, date: '2019-03-08', detail: '四川省农业厅副厅长杨波及各地市负责农村改厕的领导、专家在德阳市罗江区领导的陪同下参观公司安装在罗江区金山镇…' },
        { title: '生态洁公司荣获《山东名牌产品》称号', img: require('../../images/news.png'), id: 1, date: '2019-03-08', detail: '日前，从山东省质量强省及名牌战略推进工作领导小组办公室传来喜讯，“生态洁牌农村户厕改造及生活污水一体化生…' },
        { title: '农业农村部部长韩长赋参观公司产品', img: require('../../images/news.png'), id: 2, date: '2019-03-08', detail: '全国首届农村卫生厕所新技术新产品展示交流会在山东淄博国际会展中心盛大开幕，生态洁公司受邀参加。交流会期间…' },
        { title: '四川省农业厅副厅长杨波参观公司产品', img: require('../../images/news.png'), id: 3, date: '2019-03-08', detail: '四川省农业厅副厅长杨波及各地市负责农村改厕的领导、专家在德阳市罗江区领导的陪同下参观公司安装在罗江区金山镇…' },
        { title: '生态洁公司荣获《山东名牌产品》称号', img: require('../../images/news.png'), id: 4, date: '2019-03-08', detail: '日前，从山东省质量强省及名牌战略推进工作领导小组办公室传来喜讯，“生态洁牌农村户厕改造及生活污水一体化生…' },
        { title: '农业农村部部长韩长赋参观公司产品', img: require('../../images/news.png'), id: 5, date: '2019-03-08', detail: '全国首届农村卫生厕所新技术新产品展示交流会在山东淄博国际会展中心盛大开幕，生态洁公司受邀参加。交流会期间…' },
        { title: '四川省农业厅副厅长杨波参观公司产品', img: require('../../images/news.png'), id: 6, date: '2019-03-08', detail: '四川省农业厅副厅长杨波及各地市负责农村改厕的领导、专家在德阳市罗江区领导的陪同下参观公司安装在罗江区金山镇…' },
        { title: '生态洁公司荣获《山东名牌产品》称号', img: require('../../images/news.png'), id: 7, date: '2019-03-08', detail: '日前，从山东省质量强省及名牌战略推进工作领导小组办公室传来喜讯，“生态洁牌农村户厕改造及生活污水一体化生…' },
        { title: '农业农村部部长韩长赋参观公司产品', img: require('../../images/news.png'), id: 8, date: '2019-03-08', detail: '全国首届农村卫生厕所新技术新产品展示交流会在山东淄博国际会展中心盛大开幕，生态洁公司受邀参加。交流会期间…' }
      ],
      examples2: [
        { title: '生态洁公司荣获《山东名牌产品》称号', img: require('../../images/news.png'), id: 1, date: '2019-03-08', detail: '日前，从山东省质量强省及名牌战略推进工作领导小组办公室传来喜讯，“生态洁牌农村户厕改造及生活污水一体化生…' },
        { title: '农业农村部部长韩长赋参观公司产品', img: require('../../images/news.png'), id: 2, date: '2019-03-08', detail: '全国首届农村卫生厕所新技术新产品展示交流会在山东淄博国际会展中心盛大开幕，生态洁公司受邀参加。交流会期间…' },
        { title: '四川省农业厅副厅长杨波参观公司产品', img: require('../../images/news.png'), id: 3, date: '2019-03-08', detail: '四川省农业厅副厅长杨波及各地市负责农村改厕的领导、专家在德阳市罗江区领导的陪同下参观公司安装在罗江区金山镇…' },
        { title: '生态洁公司荣获《山东名牌产品》称号', img: require('../../images/news.png'), id: 4, date: '2019-03-08', detail: '日前，从山东省质量强省及名牌战略推进工作领导小组办公室传来喜讯，“生态洁牌农村户厕改造及生活污水一体化生…' },
        { title: '农业农村部部长韩长赋参观公司产品', img: require('../../images/news.png'), id: 5, date: '2019-03-08', detail: '全国首届农村卫生厕所新技术新产品展示交流会在山东淄博国际会展中心盛大开幕，生态洁公司受邀参加。交流会期间…' },
        { title: '四川省农业厅副厅长杨波参观公司产品', img: require('../../images/news.png'), id: 6, date: '2019-03-08', detail: '四川省农业厅副厅长杨波及各地市负责农村改厕的领导、专家在德阳市罗江区领导的陪同下参观公司安装在罗江区金山镇…' },
        { title: '生态洁公司荣获《山东名牌产品》称号', img: require('../../images/news.png'), id: 7, date: '2019-03-08', detail: '日前，从山东省质量强省及名牌战略推进工作领导小组办公室传来喜讯，“生态洁牌农村户厕改造及生活污水一体化生…' },
        { title: '农业农村部部长韩长赋参观公司产品', img: require('../../images/news.png'), id: 8, date: '2019-03-08', detail: '全国首届农村卫生厕所新技术新产品展示交流会在山东淄博国际会展中心盛大开幕，生态洁公司受邀参加。交流会期间…' },
        { title: '四川省农业厅副厅长杨波参观公司产品', img: require('../../images/news.png'), id: 0, date: '2019-03-08', detail: '四川省农业厅副厅长杨波及各地市负责农村改厕的领导、专家在德阳市罗江区领导的陪同下参观公司安装在罗江区金山镇…' },
      ],
      examples3: [
        { title: '农业农村部部长韩长赋参观公司产品', img: require('../../images/news.png'), id: 2, date: '2019-03-08', detail: '全国首届农村卫生厕所新技术新产品展示交流会在山东淄博国际会展中心盛大开幕，生态洁公司受邀参加。交流会期间…' },
        { title: '四川省农业厅副厅长杨波参观公司产品', img: require('../../images/news.png'), id: 3, date: '2019-03-08', detail: '四川省农业厅副厅长杨波及各地市负责农村改厕的领导、专家在德阳市罗江区领导的陪同下参观公司安装在罗江区金山镇…' },
        { title: '生态洁公司荣获《山东名牌产品》称号', img: require('../../images/news.png'), id: 4, date: '2019-03-08', detail: '日前，从山东省质量强省及名牌战略推进工作领导小组办公室传来喜讯，“生态洁牌农村户厕改造及生活污水一体化生…' },
        { title: '农业农村部部长韩长赋参观公司产品', img: require('../../images/news.png'), id: 5, date: '2019-03-08', detail: '全国首届农村卫生厕所新技术新产品展示交流会在山东淄博国际会展中心盛大开幕，生态洁公司受邀参加。交流会期间…' },
        { title: '四川省农业厅副厅长杨波参观公司产品', img: require('../../images/news.png'), id: 6, date: '2019-03-08', detail: '四川省农业厅副厅长杨波及各地市负责农村改厕的领导、专家在德阳市罗江区领导的陪同下参观公司安装在罗江区金山镇…' },
        { title: '生态洁公司荣获《山东名牌产品》称号', img: require('../../images/news.png'), id: 7, date: '2019-03-08', detail: '日前，从山东省质量强省及名牌战略推进工作领导小组办公室传来喜讯，“生态洁牌农村户厕改造及生活污水一体化生…' },
        { title: '农业农村部部长韩长赋参观公司产品', img: require('../../images/news.png'), id: 8, date: '2019-03-08', detail: '全国首届农村卫生厕所新技术新产品展示交流会在山东淄博国际会展中心盛大开幕，生态洁公司受邀参加。交流会期间…' },
        { title: '四川省农业厅副厅长杨波参观公司产品', img: require('../../images/news.png'), id: 0, date: '2019-03-08', detail: '四川省农业厅副厅长杨波及各地市负责农村改厕的领导、专家在德阳市罗江区领导的陪同下参观公司安装在罗江区金山镇…' },
        { title: '生态洁公司荣获《山东名牌产品》称号', img: require('../../images/news.png'), id: 1, date: '2019-03-08', detail: '日前，从山东省质量强省及名牌战略推进工作领导小组办公室传来喜讯，“生态洁牌农村户厕改造及生活污水一体化生…' },
      ],
    }
  },
  components: {
    CommonHead,
    CommonFoot
  },
  created () {
    this.examples = this.examples1
  },
  methods: {
    learn_detail (news) {
      localStorage.setItem('news', JSON.stringify(news))
    },
    showimage (source) {
      $("#ShowImage_Form").find("#img_show").html("<img src='" + source + "' class='carousel-inner img-responsive img-rounded' />");
      $("#ShowImage_Form").modal();
    },
    close () {
      $("#ShowImage_Form").modal('hide');
    },
    tab (num) {
      this.num = num
      if (num === 'one') {
        this.examples = this.examples1
      } else if (num === 'two') {
        this.examples = this.examples2
      } else {
        this.examples = this.examples3
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.news {
  .col-sm {
    border-bottom: 1px solid #ebebeb;
    padding-top: 4.6vw;
  }
  .pagination > li > a,
  .pagination > li > span {
    color: #000;
    font-size: 18px;
    font-size: 1.8rem;
  }
  .active {
    color: #1aa8aa !important;
  }
  .nav {
    text-align: center;
  }
  .pagination {
    a {
      border: none;
    }
  }
  .row {
    margin-right: 0;
  }
  .row.examples {
    padding: 2% 2%;
    h4 {
      font-size: 40px;
      text-align: center;
      margin-bottom: 20px;
      font-family: PingFangSC-Regular;
    }
    .thumbnail {
      position: relative;
      border: none;
    }
    .thumbnail a > img,
    .thumbnail > img {
      margin: 0;
      width: 100%;
    }
    .caption {
      padding: 0;
      // margin-top: 2.8vw;
      .title {
        font-size: 14px;
        font-size: 1.3rem;
        color: #3e403f;
        font-family: PingFangSC-Regular;
        margin: 0 0 0.8vw;
      }
      .date {
        font-size: 12px;
        font-size: 1.2rem;
        color: #7a7e7c;
        font-family: PingFangSC-Light;
      }
      .detail {
        font-size: 13px;
        font-size: 1.3rem;
        color: #3e403f;
        font-family: PingFangSC-Light;
        margin: 0.8vw 0 1.6vw;
      }
      .learn_detail {
        font-size: 12px;
        font-size: 1.1rem;
        color: #7a7e7c;
        font-family: PingFangSC-Light;
      }
    }
  }
  .navbar {
    margin-bottom: 0;
  }
  .navbar-default {
    border: none;
  }
  .container {
    margin: 0;
    width: 100%;
    padding: 15% 5%;
    background: #1aa8aa;
    h4 {
      line-height: 5.4vw;
      color: #f8faf9;
      font-size: 20px;
      font-family: PingFangSC-Regular;
      font-size: 40px;
      font-size: 4rem;
    }
  }
}
</style>