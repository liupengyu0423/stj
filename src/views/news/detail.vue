<template>
  <div class="detail">
    <CommonHead />
    <div class="container">
      <h4>{{data.title}}</h4>
      <p class="detail_mid">
        <span>{{data.date}}</span>
        <span>来源：生态洁</span>
      </p>
      <img :src="data.img"
           alt=""
           class="img-responsive center-block">
      <p class="data_detail">{{data.detail}}</p>
    </div>
    <CommonFoot />
  </div>
</template>

<script>
import CommonHead from '@/components/head'
import CommonFoot from '@/components/foot'
export default {
  name: 'detail',
  data () {
    return {
      data: {}
    }
  },
  created () {
    this.data = JSON.parse(localStorage.getItem('news'))
  },
  components: {
    CommonHead,
    CommonFoot
  }
}
</script>

<style lang="scss" scoped>
.detail {
  .container {
    h4 {
      text-align: center;
    }
    .detail_mid {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 14px;
        color: #7a7e7c;
      }
    }
    .data_detail {
      margin: 45px 0 20px 0;
    }
  }
}
</style>