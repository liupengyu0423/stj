<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand"
           href="#"><img src="../images/stj_logo.png"
               alt="Brand"></a>
      </div>
    </div>
    <ul class="nav navbar-nav navbar-right">
      <li v-for="(item,index) in tab"
          :key="index"
          v-if="item.tab_C!=='产品中心'">
        <router-link :to="'/'+item.tab_E"
                     class="dropdown-toggle">{{item.tab_C}}</router-link>
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
</style>
