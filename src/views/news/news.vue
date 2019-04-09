<template>
  <div class="news">
    <CommonHead />
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-8 col-xs-12">
          <h4>新闻中心
          </h4>
        </div>
      </div>
    </div>
    <div class="row examples">
      <div class="col-sm-4 col-md-4 col-xs-12 col-lg-4"
           v-for="(item,index) in examples"
           :key="index">
        <div class="thumbnail">
          <img :src="item.img">
          <div class="caption">
            <p class="title">{{item.title}}</p>
            <p class="date">{{item.date}}</p>
            <p class="detail">{{item.detail}}</p>
            <a :href="'/news/detail/'+item.id"
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
        { title: '四川省农业厅副厅长杨', img: require('../../images/news.png'), id: 0, date: '2019-03-08', detail: '四川省农业厅副厅长杨波及各地市负责农村改厕的领导、专家在德阳市罗江区领导的陪同下参观公司安装在罗江区金山镇…' },
        { title: '好看的负担返回的风好大好疯狂', img: require('../../images/news.png'), id: 1, date: '2019-03-08', detail: '四川省农业厅副厅长杨波及各地市负责农村改厕的领导、专家在德阳市罗江区领导的陪同下参观公司安装在罗江区金山镇…' },
        { title: '反而 v 运动服故事', img: require('../../images/news.png'), id: 2, date: '2019-03-08', detail: '四川省农业厅副厅长杨波及各地市负责农村改厕的领导、专家在德阳市罗江区领导的陪同下参观公司安装在罗江区金山镇…' },
        { title: '放入非非', img: require('../../images/news.png'), id: 3, date: '2019-03-08', detail: '四川省农业厅副厅长杨波及各地市负责农村改厕的领导、专家在德阳市罗江区领导的陪同下参观公司安装在罗江区金山镇…' },
        { title: '反而反而惹', img: require('../../images/news.png'), id: 4, date: '2019-03-08', detail: '四川省农业厅副厅长杨波及各地市负责农村改厕的领导、专家在德阳市罗江区领导的陪同下参观公司安装在罗江区金山镇…' },
        { title: '放反而反而惹也很讨人厌', img: require('../../images/news.png'), id: 5, date: '2019-03-08', detail: '四川省农业厅副厅长杨波及各地市负责农村改厕的领导、专家在德阳市罗江区领导的陪同下参观公司安装在罗江区金山镇…' },
        { title: '哭😢可可i 看 i', img: require('../../images/news.png'), id: 6, date: '2019-03-08', detail: '四川省农业厅副厅长杨波及各地市负责农村改厕的领导、专家在德阳市罗江区领导的陪同下参观公司安装在罗江区金山镇…' },
        { title: '科技韩国人过', img: require('../../images/news.png'), id: 7, date: '2019-03-08', detail: '四川省农业厅副厅长杨波及各地市负责农村改厕的领导、专家在德阳市罗江区领导的陪同下参观公司安装在罗江区金山镇…' }
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
  .row.examples {
    padding: 2% 2%;
    h4 {
      text-align: center;
      margin-bottom: 20px;
    }
    .thumbnail {
      position: relative;
      border: none;
    }
    .caption {
      //   position: absolute;
      //   bottom: 3px;
      //   background: #1aa8aa;
      //   width: 97.5%;
      //   opacity: 0.8;
      //   h5 {
      //     color: #fff;
      //   }
      .title {
        font-size: 18px;
        color: #3e403f;
      }
      .date {
        font-size: 12px;
        color: #7a7e7c;
      }
      .detail {
        font-size: 14px;
        color: #3e403f;
      }
      .learn_detail {
        font-size: 12px;
        color: #7a7e7c;
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
    }
  }
}
</style>