<template>
  <nav class="navbar navbar-default"
       role="navigation">
    <div class="container-fluid">
      <div class="navbar-header nav-title">
        <button type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand"
           href="#"><img src="../images/stj_logo.png"
               alt="Brand"></a>
        <span class="float">400-618-9911</span>
      </div>
    </div>
    <div class="collapse navbar-collapse navbar-right is-collapse">
      <ul class="nav navbar-nav navbar-right">
        <li v-for="(item,index) in tab"
            :key="index"
            v-if="item.tab_C!=='产品中心'">
          <router-link :to="'/'+item.tab_E"
                       class="dropdown-toggle router-link-one">{{item.tab_C}}</router-link>
          <div class="line"></div>
        </li>
        <li v-else
            class="dropdown">
          <a href="#"
             class="dropdown-toggle"
             data-toggle="dropdown"
             role="button"
             aria-haspopup="true"
             aria-expanded="false">产品中心
            <span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
            <li v-for="(detail,index) in item_tab"
                :key="index">
              <router-link :to="'/'+detail.tab_E">{{detail.tab_C}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>

  </nav>
</template>

<script>
export default {
  name: 'CommonHead',
  data () {
    return {
      tab: [
        { tab_C: '首页', tab_E: 'home' },
        { tab_C: '产品中心', tab_E: 'product' },
        { tab_C: '互联网+', tab_E: 'net' },
        { tab_C: '应用案例', tab_E: 'expression' },
        { tab_C: '领导关怀', tab_E: 'leader' },
        { tab_C: '新闻中心', tab_E: 'news' },
        { tab_C: '关于我们', tab_E: 'about' }
      ],
      item_tab: [
        { tab_C: '农村户厕污水一体化生物处理设备', tab_E: 'unify' },
        { tab_C: '生物环保厕所', tab_E: 'washroom' }
      ]
    }
  },
  created () {

  }
}
</script>

<style lang="scss" scoped>
.navbar-header {
  width: 100%;
}
.float {
  float: right;
  margin: 2vw;
  color: #1aa8aa;
  font-size: 18px;
  font-size: 0.75rem;
}
.navbar-default {
  background: #1aa8aa;
}
.container-fluid {
  background: #fff;
}
.dropdown-toggle {
  color: #fff !important;
}
.navbar-brand {
  padding: 15px 56px;
}
.container-fluid {
  min-height: 64px;
}
.open .dropdown-toggle {
  background: #1aa8aa !important;
}
.dropdown-menu > li > a:focus,
.dropdown-menu > li > a:hover {
  background: #fff;
  color: #1aa8aa;
}
.router-link-one.router-link-exact-active {
  text-align: center;
  border-bottom: 2px solid #40f2d0;
  text-align: center;
}
.dropdown-toggle {
  text-align: center;
}
@media (max-width: 767px) {
  .navbar-default .navbar-nav .open .dropdown-menu > li > a {
    color: #303030;
    text-align: center;
  }
  .navbar-nav .open .dropdown-menu {
    background: #fff;
  }
}
.nav > li > a {
  padding: 10px 0;
  margin: 0 15px;
}
.navbar {
  margin-bottom: 0px;
  border: none;
}
.navbar-right {
  margin-right: 0;
}
@media (min-width: 768px) {
  .navbar-right {
    padding-right: 39px;
  }
}
@media (min-width: 992px) {
  .navbar-right {
    margin-right: 80px;
  }
}
@media (min-width: 1200px) {
  .navbar-right {
    padding-right: 100px;
  }
}
.dropdown-menu > li > a {
  padding: 12px 26px;
}
@media (min-width: 768px) {
  .navbar-right .dropdown-menu {
    right: auto;
  }
}
</style>
