<template>
  <div>
    <div class="footer">
            <div class="footer-top">
                <div class="code_box clearfix">
                    <div class="code_box_img">
                      <img src="../assets/images/logo.jpg">
                      <img src="../assets/images/code.jpg">
                    </div>
                    <div class="footer-worp">
                        <p class="link_a">
                            <a href="">合作客户</a>
                            <a href="">人才招聘</a>
                        </p>
                        <p>服务热线:15868478335</p>
                        <p>Copyright 2015-2019</p>
                        <p>版权所有:杭州小仙科技有限公司</p>
                        <p>浙ICP备09032301号-1</p>
                    </div>
                </div>
                <p class="end-text">杭州小仙科技专注新媒体整合营销；集全案策划，视觉设计,Motion Graphic,程序开发，媒介推广为一体的全能型公司。</p>
            </div>
            <div class="friend-link">
              
                <ul>
                  <li>友情链接:</li>
                  <li><a href="">友情链接</a></li>
                  <li><a href="">友情链接</a></li>
                  <li><a href="">友情链接</a></li>
                  <li><a href="">友情链接</a></li>
                  <li><a href="">友情链接</a></li>
                  <li><a href="">友情链接</a></li>
                </ul>
            </div>
            <div class="footer-bottom">
                <ul>
                    <li v-for="(item,index) in jumpList" :key="index" @click="jump(index)">
                        {{item.servnceTitle}}
                    </li>
                </ul>
            </div>
        </div>
  </div>
</template>
<script>
export default {
  name:'Footer',
  data(){
    return{
      jumpList:[
        {servnceTitle:"数字营销"},
        {servnceTitle:"视觉传达"},
        {servnceTitle:"互动开发"},
        {servnceTitle:"新媒体策略"},
      ]
    }
  },
  methods:{
    jump(index){
      this.$router.push({name: 'Service', query:{flag:index+1}});
    }
  }
}
</script>
<style>
.footer {
    /* margin-top: 100px; */
    width: 100%;
    color: #797979;
}
.footer .footer-top {
    padding: 55px 30px 30px;
    border-bottom: 1px solid #404040;/*no*/
    background: #303030;
}
.clearfix {
    zoom: 1;
}
.footer .footer-top .end-text {
    line-height: 32px;
    margin-top: 35px;
    font-size:20px;
}
.footer .friend-link {
    padding: 24px 30px;
    background: #303030;
    overflow: hidden;
}
.footer .friend-link ul {
    font-size: 22px;
    display: flex;
    
}
.footer .friend-link ul li {
   width: 570px;
}
.footer .friend-link ul li a {
    color: white;
    text-decoration: none;
   
}
.footer .footer-bottom {
    background: #242424;
    color: white;
    padding: 30px 0;
    overflow: hidden;
}
.footer .footer-bottom ul {
    width: 100%;
    height: 22px;
    display: table;
    table-layout: fixed;
}
.footer .footer-bottom ul li {
    display: table-cell;
    line-height: 22px;
    font-size: 22px;
    text-align: center;
}
.footer .footer-bottom ul li a {
    color: #fff;
     text-decoration: none;
}
.footer .footer-top .code_box {
  width: 686px;
  display:flex;
  justify-content: space-between;
}
.footer .footer-top .code_box img {
  width: 170px;
  height: 170px;
  float: left;
  margin-right: 15px;
}
.footer .footer-top .footer-worp {
  height: 183px;
}
.footer .footer-top .footer-worp p {
    margin: 0;
    line-height: 35px;
    font-size: 20px;
    overflow: hidden;
}
.footer .footer-top .footer-worp .link_a a {
    font-size: 22px;
    color: #ffffff;
    margin-right: 20px;
    float: left;
    text-decoration: none;
}
.clearfix:after {
    content: '';
    display: block;
    height: 0;
    clear: both;
}
.footer .footer-bottom ul li:not(:last-child) {
    border-right: 1px solid #ffffff;
}


</style>

