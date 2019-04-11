<template>
  <div class="news">
    <CommonHead />
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-8 col-xs-12">
          <h4>生态洁产品受到国家领导关注<br>被中央电视台报道
          </h4>
        </div>
      </div>
    </div>
    <div class="row examples">
      <div class="col-sm-4 col-md-4 col-xs-6 col-lg-4"
           v-for="(item,index) in examples"
           :key="index">
        <div class="thumbnail">
          <img :src="item.img">
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
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li>
          <a href="#"
             aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li>
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">5</a>
        </li>
        <li>
          <a href="#"
             aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
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
      examples: [
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
    }
  },
  components: {
    CommonHead,
    CommonFoot
  },
  created () {
  },
  methods: {
    learn_detail (news) {
      localStorage.setItem('news', JSON.stringify(news))
    }
  }
}
</script>

<style lang="scss" scoped>
.news {
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
    }
    .caption {
      padding: 0;
      margin-top: 14px;
      .title {
        font-size: 18px;
        color: #3e403f;
        font-family: PingFangSC-Regular;
      }
      .date {
        font-size: 12px;
        font-family: PingFangSC-Light;
        color: #7a7e7c;
        margin-top: 4px;
      }
      .detail {
        font-size: 14px;
        margin-top: 4px;
        color: #3e403f;
        font-family: PingFangSC-Light;
      }
      .learn_detail {
        font-size: 12px;
        display: inline-block;
        margin-top: 8px;
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
      line-height: 30px;
      color: #f8faf9;
      font-size: 20px;
      font-family: PingFangSC-Regular;
    }
  }
}
</style>