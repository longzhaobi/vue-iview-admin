<template>
  <div class="normal">
    <Button @click="back" icon='arrow-left-a' class="pan-back-btn">返回</Button>
    <Row>
      <Col :span="12">
        <h1 class="text-jumbo text-ginormous">Oops!</h1>
        <h2>你没有权限去该页面</h2>
        <ul class="list-unstyled">
          <li>或者你可以去:</li>
          <li class="link-type">
            <router-link to="/dashboard">回首页</router-link>
          </li>
          <li class="link-type"><a href="https://www.taobao.com/">随便看看</a></li>
          <li><a @click="dialogVisible=true" href="#">点我看图</a></li>
        </ul>
      </Col>
      <Col :span="12">
        <img :src="errGif" width="313" height="428" alt="Girl has dropped her ice cream.">
      </Col>
    </Row>
  </div>
</template>
<script>
    import errGif from 'assets/401.gif';

    export default {
      data() {
        return {
          errGif: errGif + '?' + +new Date()
        }
      },
      methods: {
        back() {
          this.$router.go(-1)
        }
      }
    };
</script>

<style scoped>
  .normal {
    width: 800px;
    margin:0 auto;
    padding-top: 50px;

  }
  .pan-back-btn {
      background: #008489;
      color: #fff;
  }
  .pan-gif {
      margin: 0 auto;
      display: block;
  }
  .pan-img{
      display: block;
      margin: 0 auto;
  }
  .text-jumbo {
      font-size: 60px;
      font-weight: 700;
      color: #484848;
  }
  .list-unstyled {
      font-size: 14px;
  }
  .list-unstyled li {
      padding-bottom: 5px;
  }
  .list-unstyled a {
      color: #008489;
      text-decoration: none;
  }  
  .list-unstyled a:hover {
      text-decoration: underline;
  }
</style>