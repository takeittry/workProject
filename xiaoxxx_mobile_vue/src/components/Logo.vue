<template>
<div>
   <div class="logo-box">
      <div class="title">
          <img src="../assets/images/cooperation.png">
        </div>
      
            <ul>
                <li v-for="(item,index) in logoList" :key="index"><img :src="item.src" ></li>
            </ul>
        </div>
</div>
  
</template>
<script>
export default {
  name:"Logo",
  data(){
    return{
      logoList:[
        {src:require('../assets/images/images/logo1.png')},
        {src:require('../assets/images/images/logo2.png')},
        {src:require('../assets/images/images/logo3.png')},
        {src:require('../assets/images/images/logo4.png')},
        {src:require('../assets/images/images/logo5.png')},
        {src:require('../assets/images/images/logo6.png')},
        {src:require('../assets/images/images/logo7.png')},
        {src:require('../assets/images/images/logo8.png')},
        {src:require('../assets/images/images/logo9.png')},
        {src:require('../assets/images/images/logo10.png')},
        {src:require('../assets/images/images/logo11.png')},
        {src:require('../assets/images/images/logo12.png')},
        {src:require('../assets/images/images/logo13.png')},
        {src:require('../assets/images/images/logo14.png')},
        {src:require('../assets/images/images/logo15.png')},
        {src:require('../assets/images/images/logo16.png')},
        {src:require('../assets/images/images/logo17.png')},
        {src:require('../assets/images/images/logo18.png')},
        {src:require('../assets/images/images/logo19.png')},
        {src:require('../assets/images/images/logo20.png')},
        {src:require('../assets/images/images/logo21.png')},
        {src:require('../assets/images/images/logo22.png')},
        {src:require('../assets/images/images/logo23.png')},
        {src:require('../assets/images/images/logo24.png')},
      ]
    }
  },
  methods:{
    
  }
}
</script>
<style>
  .logo-box ul {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
.logo-box ul li {
    width: 290px;
    height: 125px;
    margin-top: 50px;
}
.logo-box ul li img {
    width: 290px;
    height: 125px;
}
.logo-box{
  padding-bottom: 60px;
  background-color: white;
  margin-top: 60px;
}
</style>
