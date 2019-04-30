<template>
  <div>
    <Header></Header>
    <div class="casepage">
      <h2 class="casetitle">
        小仙科技 X MAGIC X 世界杯
      </h2>
      <div class="partners">
        <div class="project"><span>|</span>
          <div class='left'>合作方：新华智云</div>
        </div>
        <p>新华智云科技有限公司是由新华通讯社、阿里巴巴合资成立的大数据人工智能企业。致力于通过大数据及人工智能技术，为内容生产者提供涉及内容采集、编辑、存储、分发等全生产链的专有技术，重新定义大数据时代内容生产者的核心竞争力。</p>
      </div>
      <div class="partners">
        <div class="project">
          <span>|</span>
            <div class='left'>项目背景：MAGIC</div>
          </div>
        <p>自新华智云项目肇始，小仙科技就与其达成了紧密的合作关系。为新华智云提供了全套品牌VI设计与策划服务，协助建立了新华智云整体视觉规范与应用规范。</p>
        <p>继成功发布媒体大脑1.0后，新华智云平台向全球发布的媒体大脑2.0——“MAGIC”智能生产平台。</p>
        <div class="case-img">
         <img src="../assets/images/images/案例内容页_03.png" alt="">
        </div>
        <p>世界杯期间，MAGIC以“流水线部件组装”的方式，帮助新闻机构提高效率，完成内容农场的升级，为所有受众带来一场大大丰富的世界杯“新闻盛宴”</p>
        <p>本次项目为配合MAGIC的首次上线，小仙科技团队与新华智云团队相互合作，在短短一周多时间内开发完成了一系列线上推广活动。将在接下去的两周内陆续上线。并通过微信转发，喜马拉雅，阿里UC，今日头条等平台全面投放。</p>
        <p>小仙科技提供了技术开发，视觉设计，渠道投放等整体一站式服务。</p>
      </div>  
        
 
        <div class="Advertisement">
          <img src="../assets/images/images/案例内容页_06.png" alt="">
        </div>
        <div class="erweima">
          <img src="../assets/images/images/案例内容页_10.png" alt="">
        </div> 
        <p class="text_erweima">手机扫描二维码访问</p>
      </div>
      <div class="title" style="margin-top:-1.3rem">
        <img src="../assets/images/images/服务领域0111.png">
      </div>
      <div class="case-box">
        <div class="case-content">
             <div class="case-list">
                 <ul>
                     <li>
                         <img src="../assets/images/images/精彩案例大图2_06.png" alt="暂时没有图片 ">
                         <div class="words-box">
                             <h3>新华智云品牌全案</h3>
                             <p>新华智云科技有限公司</p>
                             <div class="classify">品牌定位/品牌策划/Logo设计/VI设计</div>
                         </div>
                     </li>
                 </ul>
               
             </div>
             
        </div>   
     <div class="more" style="    width: 1.86rem;
     height: 0.66rem;
     border: 0.02rem solid #666666;
     font-size: 0.28rem;
     line-height: 0.66rem;
     text-align: center;
     margin: auto;
     margin-top:1rem;
     color: #666666;">MORE
     </div>
    </div>
      <Footer></Footer>
  </div>
</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  components:{Header,Footer},
  name:'CaseDetail',
}
</script>
<style scoped>
body{
  background-color: rgb(247, 247, 247)
  }
.casepage{
  width: 686px;
  margin: 0 auto;
}
.casetitle{
  font-size: 35px;
  margin-top: 150px;
  color: rgb(51, 51, 51);
  line-height: 50px
}
.project{
  font-size: 26px;
  margin-bottom: 10px;
}
.project span{
  color: rgb(231, 20, 25);
  font-weight: bolder;
  padding-left: 0
  
}
.project .left{
  display: inline-block;
  margin-left:10px;
}
.partners{
  margin-top: 40px;
}
.partners p{
 font-size: 26px;
 color:rgb(102, 102, 102);
 line-height: 40px;
 margin-top: 30px;
}

.case-img {
    width: 686px;
    margin: 20px auto;
}
.case-img img {
    width: 686px;
    height: 385px;
}

.Advertisement, .Advertisement img {
    width: 686px;
    height: 1103px;
    margin: 20px auto;
}
.erweima, .erweima>img {
    width: 184px;
    height: 184px;
    margin: 30px auto;
}
.text_erweima {
    width: 686px;
    font-size: 24px;
    color: rgb(102, 102, 102);
    margin: 0 auto;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 100px;
}
</style>

