<template>
  <div class="about">
    <CommonHead />
    <div class="container-fluid">
      <div class="col-lg- xi-col-lg-">
        <img src="../../images/about.png"
             alt=""
             class="img-responsive">
        <div class="row row_col1">
          <div class="col-lg-0 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h4>致力于把环保节水理念和绿色环保产业<br />扩展到更加广阔的领域。
            </h4>
            <p>为农村厕所革命和生态文明建设做出应有的贡献！</p>
          </div>
        </div>
      </div>
    </div>
    <ul class="nav nav-tabs nav-justified">
      <li role="presentation"
          :class="index===click?'active nav-tabs-hover':'nav-tabs-hover'"
          v-for="(item,index) in items"
          :key="index">
        <a @click="changeActive(index)"
           :href="'#'+item.href">{{item.name}}</a>
      </li>
    </ul>
    <div class="container container_intro"
         id="unify">
      <div class="row"
           v-for="(item,index) in click===0?intro1:click===1?intro2:intro3"
           :key="index">
        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
          <h6>{{item.title}}</h6>
          <p class="two_title">{{item.two_title}}</p>
          <p class="content">{{item.content}}</p>
          <p class="laster">{{item.laster}}</p>
        </div>
      </div>
    </div>
    <div class="responsive-div6"
         id="profile">
      <h4>发展历程</h4>
      <div class="row">
        <div class="col-sm-12 col-md-12 col-xs-12 col-lg-12">
          <ul class="develop">
            <li class="date">2004</li>
            <li class="text">生态洁公司成立，确立了以研制、开发、销售防止环境污染和综合利用资源的新型环保厕所及相关设备、污水处理设备、餐厨垃圾处理设备为主的立厂思路。</li>
            <li class="date">2006</li>
            <li class="text">
              <p>3月22日，北京中科隆泰生物科技有限公司成立，为生态洁公司产品研发提供技术支撑。</p>
              <p>11月18日，北京市长王岐山参观公司生物环保厕所展品，要求将国产先进技术用到奥运会。环保厕所被列为奥运会直接采购产品。</p>
            </li>
            <li class="date">2007</li>
            <li class="text">5月5日，微生物技术产业化发展研讨会上，中办、国办、科技部、发改委、中科院、人民日报领导、专家对中科隆泰公司将微生物技术产业化做出的贡献表示肯定。</li>
            <li class="date">2008</li>
            <li class="text">
              <p>公司生物环保厕所在汶川灾区安装，价值3060000万元。公司向灾区捐助的款物达3361400元。</p>
              <p>第29届奥运会开幕，公司生产的生态厕所在20多个场馆服务，凭着在奥运会的优异表现，生态洁走向了世界。环保厕所获奥运会优秀科技品牌称号。</p>
            </li>
            <li class="date">2009</li>
            <li class="text">
              <p>由生态洁公司提出并起草的《生物降解免水冲厕所》地方标准经省质监局评审，批准发布为推荐性地方标准，自2009年5月1日起实施。</p>
              <p>公司研发的“生活污水生物集成处理技术”列为建设行业科技成果评估项目。</p>
            </li>
            <li class="date">2010</li>
            <li class="text">北京中科隆泰生物科技有限公司和山东生态洁环保科技有限公司申报的“生活污水生物集成处理技术”项目获得住房和城乡建设部科技发展促进中心颁发的“生活污水生物集成处理技术”推广项目证书，向全国推荐应用。</li>
            <li class="date">2011</li>
            <li class="text">
              <p>北京中科隆泰生物科技有限公司和山东生态洁环保科技有限公司申报的“生活污水生物集成处理技术”项目获得住房和城乡建设部科技发展促进中心颁发的“生活污水生物集成处理技术”推广项目证书，向全国推荐应用。</p>
              <p>中华人民共和国住房和城乡建设部发布第 795 号公告，公司参与编写的《小型生活污水处理成套设备》为城镇建设行业产品标准，编号为CJ/T355-2010，自2011年5月1日起实施。</p>
            </li>
            <li class="date">2012</li>
            <li class="text">
              <p>公司污水处理设备在威海军分区步兵营安装。</p>
              <p>在解放军空军某部安装，公司产品开始走向军营。</p>
            </li>
            <li class="date">2013</li>
            <li class="text">公司生活污水处理技术获国际专利</li>
            <li class="date">2014</li>
            <li class="text">生态洁一体化处理技术在莱芜市住建委提报的《生态洁环保科技股份有限公司分散式社区生活污水生物集成处理技术处理方案》论证会上作为山东省新型社区生活污水推荐方案。</li>
            <li class="date">2015</li>
            <li class="text">
              <p>习近平总书记到到延边考察，提出“厕所革命”，让农村群众用上卫生的厕所。生态洁公司储备了10多年的技术得到应用，农村户厕一体化生物处理设备推向市场。</p>
              <p>生态洁已在山东全省农村新型社区安装污水处理设施5000多处，项目验收合格率达到100%。</p>
            </li>
            <li class="date">2016</li>
            <li class="text">公司产品先后被各地住建局领导参观后，大规模在山东齐河、宁夏灵武、青海、广西等地安装。</li>
            <li class="date">2017</li>
            <li class="text">
              <p>公司产品在宁夏吴中市、青州、寿光、齐河等地开始大规模安装。</p>
              <p>生态洁公司参与编制的《农村生活污水处理工程技术规程》被批准为宁夏回族自治区地方标准。编号为《农村生活污水处理工程技术规程》（DB64/T1518-2017）。标准自2018年2月28日起实施。</p>
            </li>
            <li class="date">2018</li>
            <li class="text">
              <p>央视七套“聚焦三农”栏目以“厕所革命再升级”为题，报道生态洁公司农村户厕一体化生物处理设备在“厕所革命”中发挥的作用，引起强烈反响。</p>
              <p>生态洁农村户厕一体化生物处理设备在新疆、内蒙安装，截止目前，生态洁产品覆盖山东、吉林、内蒙、陕西、宁夏、甘肃、青海、新疆、河南、浙江、江苏、重庆、四川、广西、湖南在内的15个省市。</p>
            </li>
            <li class="date"><img src="../../images/develop.png"
                   alt=""
                   class="img-responsive"></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container container_intro2"
         id="message">
      <div class="row">
        <div class="bottom_intro col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <p>生态洁产品广泛运用到包括</p>
          <p class="center">“南极科考站、北京奥运会场馆、十一届全运会场馆、上海世博会、重庆大剧院、雪野湖旅游区、</p>
          <p class="center">全国各大铁路局以及广阔的新农村社区建设中！</p>
          <p>公司作为主要起草单位参与制定了《小型生活污水成套处理设备》行业标准及《生物降解免水冲厕所》、</p>
          <p>《农村生活污水处理工程技术规程》等地方标准。</p>
        </div>
      </div>
      <div class="responsive-div">
        <div class="row">
          <div class="bottom_intro bottom_intro2 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h4>荣誉奖项</h4>
            <p>通过了ISO9001质量管理体系、ISO14001环境管理体系和ISO18001职业健康管理体系三个国际标准化管理体系认证。 党、国家和省市部委领导王歧山、李建国、韩长赋、龚正、姜大明、田力普等领导都参观过公司产品，并做出高度评价。
            </p>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"
                 v-for="(item,index) in examples"
                 :key="index">
              <div class="thumbnail">
                <img :src="item.img"
                     @click="showimage(item.img)">
                <div class="caption">
                  <h5>{{item.text}}</h5>
                </div>
              </div>
            </div>
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
  name: 'about',
  data () {
    return {
      data: {},
      click: 0,
      items: [{ name: '公司简介', href: 'unify' }, { name: '发展历程', href: 'profile' }, { name: '荣誉奖项', href: 'message' }],
      intro1: [{
        title: '公司简介',
        two_title: '生态洁环保科技股份有限公司是国内唯一一家取得驰名商标的环保厕所和污水处理设备研发制造企业',
        content: '是专业环保产品研发、设计、生产销售于一体的股份制高科技企业。\n公司以先进的技术，优良的品质，专业的服务为客户提供最优质的服务。\n主要从事环保装备制造、工程承包、环保项目投资、工程建设、运营服务。形成一体化处理设备、农村污水集\n成处理系统、生物环保卫生间等系列产品。',
        laster: '公司建有院士工作站、省级工程技术研究中心，生态洁与国内最大的综合性微生物学研究机构——\n中国科学院微生物研究所合作，从事微生物学基础和应用研究。'
      }],
      intro2: [{
        title: '公司简介',
        two_title: '生态洁环保科技股份有限公司是国内唯一一家取得驰名商标的环保厕所和污水处理设备研发制造企业',
        content: '是专业环保产品研发、设计、生产销售于一体的股份制高科技企业。\n公司以先进的技术，优良的品质，专业的服务为客户提供最优质的服务。\n主要从事环保装备制造、工程承包、环保项目投资、工程建设、运营服务。形成一体化处理设备、农村污水集<br/>成处理系统、生物环保卫生间等系列产品。',
        laster: '公司建有院士工作站、省级工程技术研究中心，生态洁与国内最大的综合性微生物学研究机构——\n中国科学院微生物研究所合作，从事微生物学基础和应用研究。'
      }],
      intro3: [{
        title: '公司简介',
        two_title: '生态洁环保科技股份有限公司是国内唯一一家取得驰名商标的环保厕所和污水处理设备研发制造企业',
        content: '是专业环保产品研发、设计、生产销售于一体的股份制高科技企业。\n公司以先进的技术，优良的品质，专业的服务为客户提供最优质的服务。\n主要从事环保装备制造、工程承包、环保项目投资、工程建设、运营服务。形成一体化处理设备、农村污水集<br/>成处理系统、生物环保卫生间等系列产品。',
        laster: '公司建有院士工作站、省级工程技术研究中心，生态洁与国内最大的综合性微生物学研究机构——\n中国科学院微生物研究所合作，从事微生物学基础和应用研究。'
      }],
      examples: [
        { text: '高新技术企业', img: require('../../images/ry/r1.jpg') },
        { text: '火炬计划重点高新技术企业', img: require('../../images/ry/r2.jpg') },
        { text: '院士工作站', img: require('../../images/ry/r3.jpg') },
        { text: '中国驰名商标', img: require('../../images/ry/r4.jpg') },
        { text: '工人先锋号', img: require('../../images/ry/r5.jpg') },
        { text: '优秀科技品牌', img: require('../../images/ry/r6.jpg') },
        { text: '山东名牌', img: require('../../images/ry/r7.jpg') },
        { text: '中国专利山东明星企业', img: require('../../images/ry/r8.jpg') },
        { text: '山东最具发展潜力民营企业', img: require('../../images/ry/r9.jpg') }
      ]
    }
  },
  created () {

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
  },
  components: {
    CommonHead,
    CommonFoot
  }
}
</script>

<style lang="scss" scoped>
.about {
  .responsive-div6 {
    padding: 6vw 12vw 5vw !important;
    box-sizing: border-box;
    background: #fff;
    h4 {
      text-align: center;
      margin-bottom: 2.2vw;
      font-family: PingFangSC-Semibold;
      font-size: 32px;
      font-size: 3.2vw;
    }
    .develop {
      li {
        padding: 1.7vw 0 1.35vw;
      }
      .date {
        font-family: PingFangSC-Semibold;
        font-size: 32px;
        font-size: 1.3rem;
        color: #1aa8aa;
        &:last-of-type {
          position: relative;
          img {
            position: absolute;
            top: 0;
            left: -1.6vw;
            width: 5vw;
            height: 5vw;
          }
        }
      }
      @media (min-width: 768px) {
        .date {
          &:last-of-type {
            position: relative;
            img {
              position: absolute;
              top: 0;
              left: -1.2vw;
              width: 5vw;
              height: 5vw;
            }
          }
        }
      }
      @media (min-width: 992px) {
        .date {
          &:last-of-type {
            position: relative;
            img {
              position: absolute;
              top: 0;
              left: -0.8vw;
              width: 5vw;
              height: 5vw;
            }
          }
        }
      }
      @media (min-width: 1200px) {
        .date {
          &:last-of-type {
            position: relative;
            img {
              position: absolute;
              top: 0;
              left: 0.5;
              width: 0.5vw;
              height: 0.5vw;
            }
          }
        }
      }
      .text {
        font-family: PingFangSC-Light;
        font-size: 16px;
        font-size: 0.7rem;
        color: #303030;
        letter-spacing: -0.04;
        text-align: justify;
        line-height: 3vw;
        padding-left: 5.9vw;
        border-left: 1px solid #1aa8aa;
        margin-left: 3vw;
      }
      .text p {
        font-family: PingFangSC-Light;
        font-size: 16px;
        font-size: 0.7rem;
        color: #303030;
        &:nth-child(2) {
          margin-top: 2vw;
        }
      }
      // .text::before {
      //   content: '';
      //   height: 100%;
      //   width: 2px;
      //   background: #1aa8aa;
      // }
    }
  }
  .row {
    margin-right: 0;
  }
  .container {
    padding: 0;
    width: 100%;
  }
  .container-fluid {
    margin: 0;
    padding: 0;
    width: 100%;
    // position: relative;
    .xi-col-lg-.col-lg- {
      position: relative;
      .row {
        position: absolute;
        top: 0;
        width: 100%;
        padding-left: 10vw;
        padding-top: 3.5vw;
      }
    }
    h4 {
      font-size: 32px;
      font-size: 1.3rem;
      line-height: 24.5px;
      line-height: 4.9vw;
      color: #fff;
      font-family: PingFangSC-Semibold;
    }
    p {
      color: #fff;
      font-family: PingFangSC-Regular;
      font-size: 20px;
      font-size: 。8rem;
      margin-top: 2vw;
    }
  }
  .navbar {
    margin-bottom: 0;
  }
  .navbar-default {
    border: none;
  }
  .nav-tabs-hover {
    padding: 10px 15px;
    text-align: center;
    font-size: 16px;
    font-size: 1.6vw;
  }
  .nav-tabs-hover a {
    color: #303030 !important;
    display: inline;
  }
  .nav-tabs.nav-justified > li > a {
    border-bottom: none;
  }
  // .nav-tabs.nav-justified > .active > a,
  // .nav-tabs.nav-justified > .active > a:focus,
  // .nav-tabs.nav-justified > .active > a:hover {
  //   border: none;
  //   color: #525b68;
  // }
  .nav-tabs-hover.active {
    color: #1aa8aa;
  }
  .nav-tabs-hover.active a {
    border: none;
    color: #1aa8aa !important;
    border-bottom: 2px solid #40f2d0 !important;
  }
  .nav > .active > a,
  .nav > li > a:focus,
  .nav > li > a:hover {
    background: #fff;
    border-bottom: 2px solid #40f2d0 !important;
    border-bottom: 1px solid #1aa8aa;
  }
  .nav-tabs > li > a:hover {
    border-color: #fff;
  }
  .nav-tabs > li > a {
    border: none;
  }
  .container_intro {
    background: #ebf4f4;
  }
  h6 {
    font-size: 32px;
    font-size: 1.3rem;
    margin: 6vw 0 2.8vw 7vw;
    font-family: PingFangSC-Semibold;
    color: #303030;
  }
  p.two_title,
  p.laster {
    color: #1aa8aa;
    font-size: 18px;
    font-size: 0.75rem;
    margin: 0 0 1.9vw 7vw;
    font-family: PingFangSC-Light;
  }
  p.laster {
    margin-bottom: 7.95vw;
    font-family: PingFangSC-Light;
  }
  p.two_title {
    margin-bottom: 1.9vw;
  }
  p.content {
    color: #303030;
    font-size: 16px;
    font-size: 0.65rem;
    font-family: PingFangSC-Light;
    margin: 0 0 1.45vw 7vw;
  }
  .container_intro2 {
    background: #ebf4f4;
    text-align: center;
  }
  .bottom_intro {
    line-height: 20px;
    padding: 12vw 0 0;
  }
  .bottom_intro p {
    color: #303030;
    font-size: 18px;
    font-size: 0.75rem;
    line-height: 4vw;
  }
  .bottom_intro h4 {
    color: #303030;
    font-size: 32px;
    font-size: 1.3rem;
    margin-bottom: 5.6vw !important;
    font-family: PingFangSC-Semibold;
  }
  .bottom_intro2 p {
    margin-bottom: 48px;
  }
  .bottom_intro .center {
    color: #1aa8aa;
  }
  .responsive-div {
    padding: 0 3vw !important;
    box-sizing: border-box;
    .col-sm-4,
    .col-lg-4,
    .col-md-4,
    .col-xs-4 {
      padding: 0;
      margin: 2vw 0;
      // margin-left: 0.5vw;
    }
    .bottom_intro2 {
      padding-left: 6vw;
    }
    // .bottom_intro2 {
    //   padding: 0;
    //   padding-left: 6vw;
    // }
    .thumbnail {
      position: relative;
      border: none;
      padding: 0;
      background: transparent;
    }
    img {
      width: 28vw;
      height: 18vw;
      margin: 0;
    }
    .caption {
      position: absolute;
      bottom: 0;
      background: rgba(255, 255, 255, 0.88);
      width: 28vw;
      padding: 0.7vw 1vw;
      h5 {
        color: #303030;
        font-family: PingFangSC-Regular;
        font-size: 18px;
        font-size: 0.75rem;
        text-align: left;
      }
    }
    .more {
      font-size: 9px;
      color: #747c77;
      text-align: center;
    }
  }
}
</style>