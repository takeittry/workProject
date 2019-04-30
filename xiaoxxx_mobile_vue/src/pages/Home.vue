<template>
  <div>
    <Header></Header>
    <Banner></Banner>
    <div class="title">
      <img src="../assets/images/service.png">
    </div>
    <div class="service-box">
            <ul>
                <li>
                    <div class="img-box"><img src="../assets/images/s1.png"></div>
                    <div class="li-title">数字营销</div>
                    <div class="bor"></div>
                    <div class="list">
                        <p>H5开发</p>
                        <p>精准投放</p>
                        <p>事件传播</p>
                        <p>数字全按</p>
                    </div>
                </li>
                <li>
                    <div class="img-box"><img src="../assets/images/s2.png"></div>
                    <div class="li-title">视觉传达</div>
                    <div class="bor"></div>
                    <div class="list">
                        <p>商业插画</p>
                        <p>平面设计</p>
                        <p>动画短片</p>
                        <p>宣传视频</p>
                    </div>
                </li>
                <li>
                    <div class="img-box"><img src="../assets/images/s3.png"></div>
                    <div class="li-title">互动开发</div>
                    <div class="bor"></div>
                    <div class="list">
                        <p>网站开发</p>
                        <p>平台方案</p>
                        <p>APP</p>
                        <p>小程序</p>
                    </div>
                </li>
                <li>
                    <div class="img-box"><img src="../assets/images/s4.png"></div>
                    <div class="li-title">新媒体策略</div>
                    <div class="bor"></div>
                    <div class="list">
                        <p>官微代运营</p>
                        <p>内容营销</p>
                        <p>渠道策略</p>
                        <p>策略咨询</p>
                    </div>
                </li>
            </ul>
        </div>
    <div class="title" id="case">
      <img src='../assets/images/case0.png'>
    </div>
    <div class="case-box">
            <div class="case-nav">
                <span :class="flag == '1' ? 'active' : ''" @click="showHide(1)">全部</span>
                <span :class="flag == '2' ? 'active' : ''" @click="showHide(2)">数字营销</span>
                <span :class="flag == '3' ? 'active' : ''" @click="showHide(3)">视觉传达</span>
                <span :class="flag == '4' ? 'active' : ''" @click="showHide(4)">互动开发</span>
                <span :class="flag == '5' ? 'active' : ''" @click="showHide(5)">新媒体策略</span>
            </div>
        <div id="icon">
           <!--全部-->
           <div v-show="flag == '1'" class="case-content">
                <div class="case-list">
                    <ul>
                        <li v-for="(item,index) in allImgList" :key="index">
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
           <!--数字营销-->
           <div  v-show="flag == '2'" class="case-content">
            <div class="case-list">
                <ul>
                    <li>
                        <img src="../assets/images/images/精彩案例大图3_09.png" alt="暂时没有图片 ">
                        <div class="words-box">
                            <h3>新华智云品牌全案</h3>
                            <p>新华智云科技有限公司</p>
                            <div class="classify">品牌定位/品牌策划/Logo设计/VI设计</div>
                        </div>
                    </li>
                </ul>
              
            </div>
           </div>
           <!--视觉传达-->
           <div  v-show="flag == '3'" class="case-content">
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
           <!--互动开发-->
           <div  v-show="flag == '4'" class="case-content " >
            <div class="case-list">
                <ul>
                    <li>
                        <img src="../assets/images/images/精彩案例大图1_03.png" alt="暂时没有图片 ">
                        <div class="words-box">
                            <h3>新华智云品牌全案</h3>
                            <p>新华智云科技有限公司</p>
                            <div class="classify">品牌定位/品牌策划/Logo设计/VI设计</div>
                        </div>
                    </li>
                </ul>
              
            </div>
           </div>
           <!--新媒体策略-->
           <div  v-show="flag == '5'" class="case-content">
            <div class="case-list">
                <ul>
                    <li>
                        <img src="../assets/images/关于小仙_91.jpg" alt="暂时没有图片 ">
                        <div class="words-box">
                            <h3>新华智云品牌全案</h3>
                            <p>新华智云科技有限公司</p>
                            <div class="classify">品牌定位/品牌策划/Logo设计/VI设计</div>
                        </div>
                    </li>
                </ul>
            </div>
           </div>
        </div>
        <div class="more" style="
        width: 1.86rem;
        height: 0.66rem;
        border: 0.02rem solid #666666;
        font-size: 0.28rem;
        line-height: 0.66rem;
        text-align: center;
        margin: auto;
        margin-top:1rem;
        color: #666666;">MORE</div>
        </div>
       <Logo></Logo>
       <Footer></Footer>
  </div>
</template>
<script>
import Header from "../components/Header";
import Banner from "../components/Banner";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
export default {
  components: { Header, Banner, Logo, Footer },
  name: "Home",
  data() {
    return {
      allImgList: [
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
    showHide(i) {
      this.flag = i;
    }
  }
};
</script>
<style>
.service-box {
  width: 710px;
  margin: 40px auto 0;
  overflow: hidden;
}
.service-box ul li {
  text-align: center;
  float: left;
  width: 330px;
  height: 370px;
  margin: 20px 10px 0;
  border: 1px solid #cccccc /*no*/;
}
.service-box ul li .img-box {
  width: 70px;
  height: 70px;
  overflow: hidden;
  padding-top: 20px;
  margin: 0 auto;
}
.img-box img {
  width: 70px;
  height: 70px;
}
.service-box ul li .li-title {
  line-height: 48px;
  font-size: 30px;
  color: #333333;
}
.service-box ul li .bor {
  width: 68px;
  height: 2px;
  /* background: #e71419; */
  border-bottom: 1px solid #e71419;
  margin: 10px auto 10px;
}
.service-box ul li .list p {
  line-height: 50px;
  font-size: 22px;
  color: #666666;
}
</style>
