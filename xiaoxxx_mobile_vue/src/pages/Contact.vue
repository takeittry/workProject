<template>
<div>
    <Header></Header>
    <Banner></Banner>
    <div class="middle">
      <div class="conpanyName">
       <p class="name">杭州小仙科技有限公司</p>
       <p class="address">地址：杭州市西湖区文一西路857号智慧产业园B座601-1</p>
      </div>
      <div class="contact">
          <p  style=" font-size: 0.26rem ;
          color: black;">联系方式</p>
          <p>业务咨询：400-888-8888</p>
          <p>客服电话：400-888-8888</p>
          <p>技术支持：400-888-8888 </p>
          <p>Q&nbsp;&nbsp;Q咨询：1234</p>
      </div>
   <!--地图-->
       <div id="map"></div>
       <div class="Accountnumber">
          <p style=" font-size: 0.26rem ;
          color: black;">付款账号</p>
          <p>开户行：浙江民泰商业银行杭州分行</p>
          <p>账　号：5830 2213 7200 015</p>
          <p>开户名：杭州小仙科技有限公司</p>
          <p>行　号：1234567</p>
       </div>
    </div>

  <Footer></Footer>
</div>
</template>
<script>
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
export default {
  components: {Header,Banner,Footer},
  name:'Contact',
  data(){
    return{

    }
  },
  mounted(){
      var map = new BMap.Map("map");    // 创建Map实例
      var point = new BMap.Point(120.063849,30.291409);   
      map.centerAndZoom(point, 15);  // 初始化地图,设置中心点坐标和地图级别
      //添加地图类型控件
      var marker = new BMap.Marker(point);   // 创建标注
      map.addOverlay(marker);
      map.addControl(new BMap.NavigationControl());    
      map.addControl(new BMap.ScaleControl());    
      map.addControl(new BMap.OverviewMapControl());    
      map.addControl(new BMap.MapTypeControl());    
      // 设置地图显示的城市 此项是必须设置的
      map.setCurrentCity("杭州");
      map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  }
}
</script>
<style scoped>
.middle {
    /* position: relative; */
    /* background-color: white; */
    width:686px;
    margin: 0 auto;
    background-color: white;
}
.middle>div{
  width: 636px;
  margin: 0 auto;
}
.conpanyName {
    margin-top: 60px;
    width: 686px;
    margin-bottom: 50px;
    line-height: 40px;
    margin: 0 auto;
    padding-top: 60px;
}
.conpanyName>.name {
    font-size: 26px;
    color: black;
}
.conpanyName>.address, .contact>p, .Accountnumber>p {
    font-size: 20px;
    color: #999999;
}
.contact {
    width: 686px;
    line-height: 40px;
    margin: 0 auto;
    padding-top: 40px;
}
#map {
    width: 636px;
    height: 386px;
    margin: 0 auto;
    margin-top: 50px;
}
.Accountnumber {
    width: 686px;
    line-height: 40px;
    margin: 0 auto;
    padding-top: 40px;
    padding-bottom: 60px;
    
}
</style>

