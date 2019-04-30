<template>
<div>
   <div class="nav">
        <a href="" class="logo"><img src="../assets/images/logo.png"></a>
        <div class="more" @touchstart="showHide1()"><img src="../assets/images/nav.png"></div>
        <div class="search"  @touchstart="showHide2()"><img src="../assets/images/search.png"></div>
        <div class="show-hide-nav" v-show="hide1">
            <ul>
               <li><router-link to="/">首页<span></span></router-link></li>
               <li><router-link to="/Service">服务领域<span></span></router-link></li>
               <li><router-link to='/Case'>精彩案例<span></span></router-link></li>
               <li><router-link to="/About">关于小仙<span></span></router-link></li>
               <li><router-link to="/Contact">联系小仙<span></span></router-link></li>
            </ul>
        </div>
   
   </div>
   <div class="search-mask " v-show="hide2">
        <div class="serach-box">
            <div class="colse" @touchstart="showHide2()"></div>
            <div class="input">
                <input type="text">
                <div class="but-serach"></div>
            </div>
        </div>
    </div>
</div>

</template>
<script>
export default {
  name:"Header",
  data (){
    return{
      hide1:false,
      hide2:false
    }
  },
  methods:{
    showHide1(){
       if(this.hide1==true){
         this.hide1=false
       }else{
         this.hide1=true
       }
      },
      showHide2(){
         if(this.hide2==true){
         this.hide2=false
       }else{
         this.hide2=true
       }
      }
    }
  
}
</script>
<style>
body{
      background: #f7f7f7;
}
.nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    height: 100px;
    background: rgba(214, 24, 28, 0.9);
    padding: 30px 32px 0;
}
.nav .more, .nav .search {
    float: right;
    width: 45px;
    height: 35px;
    margin-left:35px;
}
.nav .logo {
    display: inline-block;
    width: 185px;
    height: 36px;
}
.nav .logo img{
   width: 185px;
    height: 36px;
}
.nav .more img, .nav .search img {
    width: 100%;
}
.nav .show-hide-nav {
    width: 100%;
    position: absolute;
    top: 96px;
    left: 0;
    background: rgba(46, 46, 46, 0.9);
    overflow: hidden;
}
.nav .show-hide-nav ul {
    overflow: hidden;
}
ul, ol {
    list-style: none;
}
.nav .show-hide-nav ul li {
    padding: 33px;
    border-bottom: 2px solid #464646;
    line-height: 32px;
    font-size: 30px;
}
.nav .show-hide-nav ul li a{
   text-decoration: none;
   color: white;
   display: block;
   text-decoration: none;
}
/* .nav .show-hide-nav ul li {
  

} */
.nav .show-hide-nav ul li span {
    /* background: rgba(46, 46, 46, 0.9); */
    background: url('../assets/images/ico-nav.png') top center no-repeat;
    background-size: contain;
    width: 18px;
    height: 30px;
    float: right;
}
img {
    border: 0;
    vertical-align: top;
}
.search-mask {
    background: rgba(0, 0, 0, 0.9);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 98px;
    left: 0;
    overflow: hidden;
    z-index: 10;
}
.search-mask .serach-box {
    width: 686px;
    margin: 0px auto;
    padding-top: 265px;
    position: relative;
}
.search-mask .serach-box .colse {
    position: absolute;
    top: 35px;
    right: 0;
    background: url('../assets/images/close.png') no-repeat;
    background-size: contain;
    width: 30px;
    height: 30px;
}
.search-mask .serach-box .input {
    width: 570px;
    margin: 0 auto;
    border-bottom: 2px solid #999999;
    height: 45px;
    line-height: 45px;
    font-size: 22px;
}
.search-mask .serach-box .input input {
    float: left;
    background: none;
    border: none;
    width: 470px;
    padding-left: 30px;
    height: 45px;
    color: #ffffff;
}
.search-mask .serach-box .input .but-serach {
    float: right;
    background: url('../assets/images/search2.png') no-repeat;
    background-size: contain;
    width: 27px;
    height: 27px;
    margin-top: 7px;
}
</style>

