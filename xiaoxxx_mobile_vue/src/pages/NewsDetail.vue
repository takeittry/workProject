<template>
  <div>
    <Header></Header>
    <!--title-->
    <div class="newspage">
      <h2 class="newstitle">互联网驱动和消费升级趋势下，营销+技术助力品牌崛起</h2>
      <div class="newsauthor">
        作者：杭州小仙科技 | 2019-01-14
      </div>
      <div class="newsdetail">
        <p>小程序是社交媒体生态下技术+营销的产物。最近Martech概念亦十分火爆，众多营销策划人开始转战Martech战场。Martech直译营销&技术，指的是“管理和评估所有数字营销活动及电商活动的技术，能够优化消费者体验、管理现有客户、以及提升顾客转化。所涵盖的技术平台包括CRM、数据管理平台DMP、营销自动化软件和服务等。”
</p>
        <p>另一方面营销领域近期也出现CGO的升级概念，CGO即是首席增长官。这源于2018年3月23日，可口可乐撤销首席营销官CMO一职，并整合广告营销、商业客户以及策略，由新的首席增长官CGO接任，负责整个公司的产品和用户增长。</p>
        <p>互联网驱动和消费升级趋势下，营销概念和战场瞬息万变，唯一不变的是一直在变化，那怎样才能立于不败之地?答案是企业需要搭乘技术这列动车，营销+技术才是用户增长的强势动能。</p>
        <p>小程序构建企业营销新战场，顺势而为方能抢占先机</p>
        <p>然而，所谓的Martech最终还是要靠用户数据来营销，掌握用户数据才能实现精准营销，节约营销成本，促进用户增长。目前用户大数据依然集中在BAT手中，运用好这三大平台将流量和用户数据变现，就已经成功了一半。</p>
       
      </div>

    </div>
    




    <div class="title">
      <img src="../assets/images/文章内容页_03.png" alt="">
    </div>
    <div class="dynamic">
      <div>
        <p class="news">互联网驱动和消费升级趋势下，营销+技术助力品牌崛起</p>
        <p class="time">2019-01-16</p>
      </div>
      <div>
        <p class="news">企业H5营销中最受欢迎的十大功能</p>
        <p class="time">2019-01-16</p>
      </div>
      <div>
        <p class="news">中小企业“互联网+营销”的正确姿势</p>
        <p class="time">2019-01-16</p>
      </div>
    </div>
    <div class="more" style="width: 1.86rem;
        height: 0.66rem;
        border: 0.02rem solid #666666;
        font-size: 0.28rem;
        line-height: 0.66rem;
        text-align: center;
        margin: auto;
        margin-bottom: 1rem;
        margin-top:1rem;
        color: #666666;">MORE</div>
        <Footer></Footer>
  </div>
</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  components:{Header,Footer},
  name:'NewsDetail'
}
</script>
<style scoped>
.dynamic {
    margin: 0 auto;
    margin-top: 50px;
    width:686px;
}
.dynamic .news {
    font-size: 34px;
    color: black;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.dynamic .time {
    font-size: 24px;
    color: rgb(131, 131, 131);
}
.dynamic div {
    word-wrap: break-word;
    line-height: 50px;
    border-bottom: 1px solid rgb(159, 159, 159);/*no*/
    padding-bottom: 20px;
    margin-top: 30px;
}
.dynamic a{
  text-decoration: none;
}
.newspage{
  width: 686px;
  margin: 0 auto;
}
.newstitle{
  font-size: 35px;
  margin-top: 150px;
  color: rgb(51, 51, 51);
  line-height: 50px
}
.newsauthor{
  font-size: 22px;
  color:rgb(153, 153, 153);
  margin-top: 20px;
}
.newsdetail p{
font-size: 26px;
 text-indent: 52px;
 color:rgb(102, 102, 102);
 line-height: 40px;
}
.newsdetail p:nth-child(1){
  margin-top:30px;
}
.newsdetail p:not(:first-child){
  margin-top: 40px;
}

</style>
