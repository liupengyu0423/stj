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
            <!-- <p class="detail">{{item.detail}}</p> -->
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
        { title: '国家副主席王岐山关注公司产品', img: require('../../images/l1/l1.jpg'), id: 0, date: '2019-03-08', detail: '' },
        { title: '全国人大常委会原副委员长、中华全', img: require('../../images/l1/l2.jpg'), id: 1, date: '2019-02-01', detail: '' },
        { title: '全国人大常委会原副委员长路甬祥参观公', img: require('../../images/l1/l3.jpg'), id: 2, date: '2019-01-01', detail: '' },
        { title: '农业农村部部长韩长赋参观公司产品', img: require('../../images/l1/l4.jpg'), id: 3, date: '2018-10-08', detail: '' },
        { title: '山东省省长龚正检查指导公司户厕改造工', img: require('../../images/l1/l5.jpg'), id: 4, date: '2018-07-03', detail: '' },
        { title: '原国家知识产权局长田力普来公司考察', img: require('../../images/l1/l6.jpg'), id: 5, date: '2018-02-19', detail: '' },
        { title: '河南省委常委、统战部部长孙守刚指导公', img: require('../../images/l1/l7.jpg'), id: 6, date: '2018-02-08', detail: '' },
        { title: '住房和城乡建设部总经济师赵晖参观公司', img: require('../../images/l1/l8.jpg'), id: 7, date: '2017-12-01', detail: '' },
        { title: '住房和城乡建设部总经济师赵晖参观公司', img: require('../../images/l1/l9.jpg'), id: 8, date: '2017-05-08', detail: '' }
      ]
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
    font-size: 0.75rem;
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
      height: 18vw;
    }
    .caption {
      padding: 0;
      // margin-top: 2.8vw;
      .title {
        font-size: 18px;
        font-size: 0.8rem;
        color: #3e403f;
        font-family: PingFangSC-Regular;
        margin: 0.8vw 0 0.8vw;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .date {
        font-size: 12px;
        font-size: 0.5rem;
        font-family: PingFangSC-Light;
        margin-bottom: 1vw;
      }
      .detail {
        font-size: 14px;
        font-size: 0.6rem;
        color: #3e403f;
        font-family: PingFangSC-Light;
        margin: 0.8vw 0 1.6vw;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
      .learn_detail {
        font-size: 12px;
        font-size: 0.5rem;
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
      font-family: PingFangSC-Regular;
      font-size: 20px;
      font-size: 1.7rem;
    }
  }
}
</style>