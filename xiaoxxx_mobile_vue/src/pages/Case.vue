<template>
  <div>
<!--遮罩层-->
    <div class="mask" v-show="mask" @click="mask=false"></div>
    <Header></Header>
    <Banner></Banner>
    <div class="navigation gray" >
      <p class="search serch"><img src="../assets/images/images/精彩案例_03.png" alt="" ></p>
      <span :class="flag == '1' ? 'active' : ''"  @click="showHide(1)">数字营销</span>
      <span :class="flag == '2' ? 'active' : ''"  @click="showHide(2)">视觉传达</span>
      <span :class="flag == '3' ? 'active' : ''"  @click="showHide(3)">互动开发</span>
      <span :class="flag == '4' ? 'active' : ''"  @click="showHide(4)">新媒体策略</span>
    </div>
    
    <!--标签筛选-->
       <!--按钮-->
    <div class="label"  @click="labelShow()">
      <img src="../assets/images/images/精彩案例3_03.png" alt="">
    </div>
     <!--筛选项-->
    <div class="Filterbox">
     <div class="screen" v-if="mask" >
       <div class="choose">请选择一个标签</div>
       <div class="filterItem">
         <div v-for="(item,index) in buttonList" :key="index"  @click="showLabel(index)">{{item.title}}<img v-show="flag2 == index" src="../assets/images/精彩案例交互_03.png"/></div>
       </div>
     <div class='determine' @click="mask=false">确定</div>
    </div>
    <!--标签筛选结束-->
 </div>


    <div class="case-box">
        <div id="icon">
           <!--数字营销-->
           <div class="case-content"  v-show="flag == '1'">
                <div class="case-list">
                    <ul>
                        <li>
                             <router-link to="/CaseDetail">
                              <img src="../assets/images/关于小仙_91.jpg" alt="暂时没有图片 ">
                              <div class="words-box">
                                <h3>新华智云品牌全案</h3>
                                <p>新华智云科技有限公司</p>
                                <div class="classify">品牌定位/品牌策划/Logo设计/VI设计</div>
                              </div> 
                            </router-link>
                        </li>
                    </ul>
                </div>
           </div>
           <!--视觉传达-->
           <div class="case-content"  v-show="flag == '2'">
              <div class="case-list">
                  <ul>
                      <li>
                           <router-link to="/CaseDetail">
                              <img src="../assets/images/images/精彩案例大图1_03.png" alt="暂时没有图片 ">
                              <div class="words-box">
                                  <h3>新华智云品牌全案</h3>
                                  <p>新华智云科技有限公司</p>
                                  <div class="classify">品牌定位/品牌策划/Logo设计/VI设计</div>
                              </div>  
                           </router-link>
                      </li>
                  </ul>
                
              </div>
           </div>
           <!--互动开发-->
           <div class="case-content"  v-show="flag == '3'">
              <div class="case-list">
                  <ul>
                      <li>
                           <router-link to="/CaseDetail">
                            <img src="../assets/images/images/精彩案例大图2_06.png" alt="暂时没有图片 ">
                              <div class="words-box">
                              <h3>新华智云品牌全案</h3>
                              <p>新华智云科技有限公司</p>
                              <div class="classify">品牌定位/品牌策划/Logo设计/VI设计</div>
                          </div>
                           </router-link>
                      </li>
                  </ul>
              </div>
           </div>
           <!--新媒体策略-->
           <div class="case-content"  v-show="flag == '4'">
              <div class="case-list">
                  <ul>
                      <li>
                           <router-link to="/CaseDetail">
                            <img src="../assets/images/images/精彩案例大图3_09.png" alt="暂时没有图片 ">
                            <div class="words-box">
                              <h3>新华智云品牌全案</h3>
                              <p>新华智云科技有限公司</p>
                              <div class="classify">品牌定位/品牌策划/Logo设计/VI设计</div>
                            </div>
                           </router-link>
                      </li>
                  </ul>
                
              </div>
           </div>
        </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
export default {
  components: { Header, Banner, Footer },
  name: "Case",
  data() {
    return {
      flag: "1",
      flag2: "1",
      i: 0,
      mask:false,
      buttonList: [
        { title: "全部" },
        { title: "H5开发" },
        { title: "平面设计" },
        { title: "数字全案" },
        { title: "内容营销" },
        { title: "宣传视频" },
        { title: "渠道策略" },
        { title: "动图海报" },
        { title: "网站开发" },
        { title: "商业插画" }
      ]
    };
  },
  methods: {
    showHide(i) {
      this.flag = i;
    },
    labelShow() {
     this.mask=true
    },
    showLabel(i) {
      this.flag2 = i;
    },
  
  }
};
</script>
<style>
.navigation {
  font-size: 26px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(255, 255, 255);
  height: 80px;
}
.gray {
  color: rgb(173, 173, 173);
}
/* .serch {
  position: relative;
  left: 14px;
} */
.serch,
.serch img {
  width: 28px;
  height: 28px;
}
.case-content .case-list ul li a {
  text-decoration: none;
}
.label {
  width: 686px;
  text-align: center;
  margin-top: 40px;
  padding-bottom: 10px;
}
.label img {
  width: 105px;
  height: 32px;
  float: right;
}
.screen {
  width: 100%;
  background-color: white;
  margin-top: 40px;
}
.screen .choose {
  width: 686px;
  margin: 0 auto;
  padding-bottom: 20px;
}
.filterItem {
  width: 686px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.filterItem div {
  text-align: center;
  padding: 10px 20px;
  width: 160px;
  height: 50px;
  color: rgb(102, 102, 102);
  border: 1px solid rgb(102, 102, 102); /*no*/
  margin-top: 25px;
  border-radius: 15px;
  line-height: 50px;
  position: relative;
}
.choose {
  font-size: 28px;
  position: relative;
  top: 20px;
  color: rgb(133, 133, 133);
}
.determine {
  width: 100%;
  text-align: center;
  font-size: 30px;
  margin-top: 44px;
  height: 80px;
  color: rgb(133, 133, 133);
  border-top:2px solid rgb(244,244,244); /*no*/
  line-height: 80px;
  
}
.filterItem div img {
  width: 29px;
  height: 29px;
  position: absolute;
  top: -13px;
  right: -13px;
}
.Filterbox {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}
.mask {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top:0;
}
</style>

