<template>
  <div>
    <Header></Header>
    <Banner></Banner>
    <div class="title" id="service">
      <img src="../assets/images/service.png">
    </div>
    <div class="serviceTab">
          <ul>
            <li  @click="showHide(1)"><img src="../assets/images/s1.png" alt=""><p>数字营销</p></li>
            <li  @click="showHide(2)"><img src="../assets/images/s2.png" alt=""><p>视觉传达</p></li>
            <li  @click="showHide(3)"><img src="../assets/images/s3.png" alt=""><p>互动开发</p></li>
            <li  @click="showHide(4)"><img src="../assets/images/s4.png" alt=""><p>新媒体策略</p></li>
          </ul>
        </div>
    
    <div id="icon">
          <!--数字营销-->
          <div class="case-content"  v-show="flag == '1'">
            <div class="title" id="case"><img src="../assets/images/images/服务领域0.png"></div>
             <div class="text">H5开发/精准投放/事件传播/数字全案</div>
             <div class="flex-box">
                 <div class="box-text">
                   <div class="wenzi">
                     <p class="wenzi1">H5开发</p>
                     <p class="wenzi2"></p>
                     <p class="wenzi3">作为H5营销业内先行者，我们选择让展示更加精彩，互动不再无趣，让品牌与消费者达成有效沟通。</p>
                   </div>
                 </div>
                 <div class="box-img">
                    <img src="../assets/images/服务领域-数字营销_03.jpg" alt="">
                   </div>
             </div>
             <div class="flex-box">
                 <div class="box-text">
                   <div class="wenzi">
                     <p class="wenzi1">H5开发</p>
                     <p class="wenzi2"></p>
                     <p class="wenzi3">作为H5营销业内先行者，我们选择让展示更加精彩，互动不再无趣，让品牌与消费者达成有效沟通。</p>
                   </div>
                 </div>
                 <div class="box-img">
                    <img src="../assets/images/服务领域-数字营销_03.jpg" alt="">
                   </div>
             </div>
             <div class="flex-box">
                 <div class="box-text">
                   <div class="wenzi">
                     <p class="wenzi1">H5开发</p>
                     <p class="wenzi2"></p>
                     <p class="wenzi3">作为H5营销业内先行者，我们选择让展示更加精彩，互动不再无趣，让品牌与消费者达成有效沟通。</p>
                   </div>
                 </div>
                 <div class="box-img">
                    <img src="../assets/images/服务领域-数字营销_03.jpg" alt="">
                   </div>
             </div>
             <div class="flex-box">
                 <div class="box-text">
                   <div class="wenzi">
                     <p class="wenzi1">H5开发</p>
                     <p class="wenzi2"></p>
                     <p class="wenzi3">作为H5营销业内先行者，我们选择让展示更加精彩，互动不再无趣，让品牌与消费者达成有效沟通。</p>
                   </div>
                 </div>
                 <div class="box-img">
                    <img src="../assets/images/服务领域-数字营销_03.jpg" alt="">
                   </div>
             </div>
             <div class="flex-box">
                 <div class="box-text">
                   <div class="wenzi">
                     <p class="wenzi1">H5开发</p>
                     <p class="wenzi2"></p>
                     <p class="wenzi3">作为H5营销业内先行者，我们选择让展示更加精彩，互动不再无趣，让品牌与消费者达成有效沟通。</p>
                   </div>
                 </div>
                 <div class="box-img">
                    <img src="../assets/images/服务领域-数字营销_03.jpg" alt="">
                   </div>
             </div>
             <div class="flex-box">
                 <div class="box-text">
                   <div class="wenzi">
                     <p class="wenzi1">H5开发</p>
                     <p class="wenzi2"></p>
                     <p class="wenzi3">作为H5营销业内先行者，我们选择让展示更加精彩，互动不再无趣，让品牌与消费者达成有效沟通。</p>
                   </div>
                 </div>
                 <div class="box-img">
                    <img src="../assets/images/服务领域-数字营销_03.jpg" alt="">
                   </div>
             </div>
          </div>
          <!--视觉传达-->
          <div class="case-content"  v-show="flag == '2'">
               <div class="title" id="case"><img src="../assets/images/images/服务领域1.png"></div>
             <div class="text">商业插画/平面设计/动画短片/宣传视频</div>
             <div class="flex-box">
                 <div class="box-text">
                   <div class="wenzi">
                     <p class="wenzi1">H5开发</p>
                     <p class="wenzi2"></p>
                     <p class="wenzi3">作为H5营销业内先行者，我们选择让展示更加精彩，互动不再无趣，让品牌与消费者达成有效沟通。</p>
                   </div>
                 </div>
                 <div class="box-img">
                    <img src="../assets/images/服务领域-数字营销_03.jpg" alt="">
                   </div>
             </div>
             <div class="flex-box">
                 <div class="box-text">
                   <div class="wenzi">
                     <p class="wenzi1">H5开发</p>
                     <p class="wenzi2"></p>
                     <p class="wenzi3">作为H5营销业内先行者，我们选择让展示更加精彩，互动不再无趣，让品牌与消费者达成有效沟通。</p>
                   </div>
                 </div>
                 <div class="box-img">
                    <img src="../assets/images/服务领域-数字营销_03.jpg" alt="">
                   </div>
             </div>
             <div class="flex-box">
                 <div class="box-text">
                   <div class="wenzi">
                     <p class="wenzi1">H5开发</p>
                     <p class="wenzi2"></p>
                     <p class="wenzi3">作为H5营销业内先行者，我们选择让展示更加精彩，互动不再无趣，让品牌与消费者达成有效沟通。</p>
                   </div>
                 </div>
                 <div class="box-img">
                    <img src="../assets/images/服务领域-数字营销_03.jpg" alt="">
                   </div>
             </div>
             <div class="flex-box">
                 <div class="box-text">
                   <div class="wenzi">
                     <p class="wenzi1">H5开发</p>
                     <p class="wenzi2"></p>
                     <p class="wenzi3">作为H5营销业内先行者，我们选择让展示更加精彩，互动不再无趣，让品牌与消费者达成有效沟通。</p>
                   </div>
                 </div>
                 <div class="box-img">
                    <img src="../assets/images/服务领域-数字营销_03.jpg" alt="">
                   </div>
             </div>
             <div class="flex-box">
                 <div class="box-text">
                   <div class="wenzi">
                     <p class="wenzi1">H5开发</p>
                     <p class="wenzi2"></p>
                     <p class="wenzi3">作为H5营销业内先行者，我们选择让展示更加精彩，互动不再无趣，让品牌与消费者达成有效沟通。</p>
                   </div>
                 </div>
                 <div class="box-img">
                    <img src="../assets/images/服务领域-数字营销_03.jpg" alt="">
                   </div>
             </div>
             <div class="flex-box">
                 <div class="box-text">
                   <div class="wenzi">
                     <p class="wenzi1">H5开发</p>
                     <p class="wenzi2"></p>
                     <p class="wenzi3">作为H5营销业内先行者，我们选择让展示更加精彩，互动不再无趣，让品牌与消费者达成有效沟通。</p>
                   </div>
                 </div>
                 <div class="box-img">
                    <img src="../assets/images/服务领域-数字营销_03.jpg" alt="">
                   </div>
             </div>
          </div>
          <!--互动开发-->
          <div class="case-content "   v-show="flag == '3'">
               <div class="title" id="case"><img src="../assets/images/images/服务领域2.png"></div>
             <div class="text">网站开发/平台方案/App/小程序</div>
             <div class="flex-box">
                 <div class="box-text">
                   <div class="wenzi">
                     <p class="wenzi1">H5开发</p>
                     <p class="wenzi2"></p>
                     <p class="wenzi3">作为H5营销业内先行者，我们选择让展示更加精彩，互动不再无趣，让品牌与消费者达成有效沟通。</p>
                   </div>
                 </div>
                 <div class="box-img">
                    <img src="../assets/images/服务领域-数字营销_03.jpg" alt="">
                   </div>
             </div>
             <div class="flex-box">
                 <div class="box-text">
                   <div class="wenzi">
                     <p class="wenzi1">H5开发</p>
                     <p class="wenzi2"></p>
                     <p class="wenzi3">作为H5营销业内先行者，我们选择让展示更加精彩，互动不再无趣，让品牌与消费者达成有效沟通。</p>
                   </div>
                 </div>
                 <div class="box-img">
                    <img src="../assets/images/服务领域-数字营销_03.jpg" alt="">
                   </div>
             </div>
             <div class="flex-box">
                 <div class="box-text">
                   <div class="wenzi">
                     <p class="wenzi1">H5开发</p>
                     <p class="wenzi2"></p>
                     <p class="wenzi3">作为H5营销业内先行者，我们选择让展示更加精彩，互动不再无趣，让品牌与消费者达成有效沟通。</p>
                   </div>
                 </div>
                 <div class="box-img">
                    <img src="../assets/images/服务领域-数字营销_03.jpg" alt="">
                   </div>
             </div>
             <div class="flex-box">
                 <div class="box-text">
                   <div class="wenzi">
                     <p class="wenzi1">H5开发</p>
                     <p class="wenzi2"></p>
                     <p class="wenzi3">作为H5营销业内先行者，我们选择让展示更加精彩，互动不再无趣，让品牌与消费者达成有效沟通。</p>
                   </div>
                 </div>
                 <div class="box-img">
                    <img src="../assets/images/服务领域-数字营销_03.jpg" alt="">
                   </div>
             </div>
             <div class="flex-box">
                 <div class="box-text">
                   <div class="wenzi">
                     <p class="wenzi1">H5开发</p>
                     <p class="wenzi2"></p>
                     <p class="wenzi3">作为H5营销业内先行者，我们选择让展示更加精彩，互动不再无趣，让品牌与消费者达成有效沟通。</p>
                   </div>
                 </div>
                 <div class="box-img">
                    <img src="../assets/images/服务领域-数字营销_03.jpg" alt="">
                   </div>
             </div>
             <div class="flex-box">
                 <div class="box-text">
                   <div class="wenzi">
                     <p class="wenzi1">H5开发</p>
                     <p class="wenzi2"></p>
                     <p class="wenzi3">作为H5营销业内先行者，我们选择让展示更加精彩，互动不再无趣，让品牌与消费者达成有效沟通。</p>
                   </div>
                 </div>
                 <div class="box-img">
                    <img src="../assets/images/服务领域-数字营销_03.jpg" alt="">
                   </div>
             </div>
          </div>
          <!--新媒体策略-->
          <div class="case-content"  v-show="flag == '4'">
               <div class="title" id="case"><img src="../assets/images/images/服务领域3.png"></div>
             <div class="text">官微代运营/内容营销/渠道策略/策略咨询</div>
             <div class="flex-box">
                 <div class="box-text">
                   <div class="wenzi">
                     <p class="wenzi1">H5开发</p>
                     <p class="wenzi2"></p>
                     <p class="wenzi3">作为H5营销业内先行者，我们选择让展示更加精彩，互动不再无趣，让品牌与消费者达成有效沟通。</p>
                   </div>
                 </div>
                 <div class="box-img">
                    <img src="../assets/images/服务领域-数字营销_03.jpg" alt="">
                   </div>
             </div>
             <div class="flex-box">
                 <div class="box-text">
                   <div class="wenzi">
                     <p class="wenzi1">H5开发</p>
                     <p class="wenzi2"></p>
                     <p class="wenzi3">作为H5营销业内先行者，我们选择让展示更加精彩，互动不再无趣，让品牌与消费者达成有效沟通。</p>
                   </div>
                 </div>
                 <div class="box-img">
                    <img src="../assets/images/服务领域-数字营销_03.jpg" alt="">
                   </div>
             </div>
             <div class="flex-box">
                 <div class="box-text">
                   <div class="wenzi">
                     <p class="wenzi1">H5开发</p>
                     <p class="wenzi2"></p>
                     <p class="wenzi3">作为H5营销业内先行者，我们选择让展示更加精彩，互动不再无趣，让品牌与消费者达成有效沟通。</p>
                   </div>
                 </div>
                 <div class="box-img">
                    <img src="../assets/images/服务领域-数字营销_03.jpg" alt="">
                   </div>
             </div>
             <div class="flex-box">
                 <div class="box-text">
                   <div class="wenzi">
                     <p class="wenzi1">H5开发</p>
                     <p class="wenzi2"></p>
                     <p class="wenzi3">作为H5营销业内先行者，我们选择让展示更加精彩，互动不再无趣，让品牌与消费者达成有效沟通。</p>
                   </div>
                 </div>
                 <div class="box-img">
                    <img src="../assets/images/服务领域-数字营销_03.jpg" alt="">
                   </div>
             </div>
             <div class="flex-box">
                 <div class="box-text">
                   <div class="wenzi">
                     <p class="wenzi1">H5开发</p>
                     <p class="wenzi2"></p>
                     <p class="wenzi3">作为H5营销业内先行者，我们选择让展示更加精彩，互动不再无趣，让品牌与消费者达成有效沟通。</p>
                   </div>
                 </div>
                 <div class="box-img">
                    <img src="../assets/images/服务领域-数字营销_03.jpg" alt="">
                   </div>
             </div>
             <div class="flex-box">
                 <div class="box-text">
                   <div class="wenzi">
                     <p class="wenzi1">H5开发</p>
                     <p class="wenzi2"></p>
                     <p class="wenzi3">作为H5营销业内先行者，我们选择让展示更加精彩，互动不再无趣，让品牌与消费者达成有效沟通。</p>
                   </div>
                 </div>
                 <div class="box-img">
                    <img src="../assets/images/服务领域-数字营销_03.jpg" alt="">
                   </div>
             </div>
             <div class="flex-box">
                 <div class="box-text">
                   <div class="wenzi">
                     <p class="wenzi1">H5开发</p>
                     <p class="wenzi2"></p>
                     <p class="wenzi3">作为H5营销业内先行者，我们选择让展示更加精彩，互动不再无趣，让品牌与消费者达成有效沟通。</p>
                   </div>
                 </div>
                 <div class="box-img">
                    <img src="../assets/images/服务领域-数字营销_03.jpg" alt="">
                   </div>
             </div>
          </div>
       </div>
      <div class="title">
        <img src="../assets/images/images/服务领域0111.png">
      </div>
      <div class="case-box">
        <div class="case-content">
              <div class="case-list">
                  <ul>
                      <li v-for="(item, index) in caseImgList" :key="index">
                          <img :src="item.src" alt="暂时没有图片 ">
                          <div class="words-box">
                              <h3>{{item.title}}</h3>
                              <p>{{item.conpaney}}</p>
                              <div class="classify">{{item.content}}</div>
                          </div>
                      </li>
                  </ul>
              </div>
        </div>
   </div>
  <div class="more" style="width: 1.86rem;
  height: 0.66rem;
  border: 0.02rem solid #666666;
  font-size: 0.28rem;
  line-height: 0.66rem;
  text-align: center;
  margin: auto;
  margin-bottom:0.97rem;
  margin-top:1rem;
  color: #666666;">MORE</div>
 
  <Footer></Footer>
  </div>
</template>
<script>
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { mapState } from 'vuex'
export default {
  components: { Header, Banner, Footer },
  name: "Service",
  data() {
    return {
      caseImgList: [
        {
          src: require("../assets/images/关于小仙_91.jpg"),
          title: "新华智云品牌全案",
          conpaney: "新华智云科技有限公司",
          content: "品牌定位/品牌策划/Logo设计/VI设计"
        },
        {
          src: require("../assets/images/images/精彩案例大图2_06.png"),
          title: "新华智云品牌全案",
          conpaney: "新华智云科技有限公司",
          content: "品牌定位/品牌策划/Logo设计/VI设计"
        }
      ],
      flag: "1"
    };
  },
  methods: {
    showHide(a) {
      this.flag = a;
    }
  },
  mounted(){
    this.flag = this.$route.query.flag;
  },
  watch: {
    '$route' (to, from) {
      this.flag = this.$route.query.flag;
    }
  }
};
</script>
<style>
.serviceTab {
  width: 100%;
  margin: 0 auto;
  margin-top: 60px;
}
.serviceTab ul {
  font-size: 26px;
  color: rgb(51, 51, 51);
  text-align: center;
  display: flex;
  justify-content: space-around;
}
.serviceTab ul img {
  width: 100px;
  height: 100px;
}

.case-content .text {
  color: rgb(131, 131, 131);
  font-size: 30px;
  text-align: center;
  margin-top: 50px;
  /* width:100%; */
  height: 50px;
}
.flex-box {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.box-text {
  background: url("../assets/images/服务领域-数字营销_03.png") no-repeat;
  width: 345px;
  height: 300px;
  background-size: contain;
}
.wenzi {
  width: 95%;
  margin: 0 auto;
  margin-top: 20px;
}
.wenzi1 {
  color: rgb(255, 255, 255);
  font-size: 28px;
}
.wenzi2 {
  border: 1px solid rgb(174, 174, 174); /*no*/
  width: 20px;
  margin-top: 20px;
}
.wenzi3 {
  font-size: 19px;
  color: rgb(215, 215, 215);
  margin-top: 20px;
  line-height: 40px;
}
.box-img {
  width: 345px;
  height: 300px;
}
.box-img img {
  width: 100%;
  height: auto;
}
</style>
