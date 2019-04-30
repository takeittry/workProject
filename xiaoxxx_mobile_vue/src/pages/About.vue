<template>
  <div>
    <Header></Header>
    <Banner></Banner>
    <div class="title">
      <img src="../assets/images/关于小仙_03.png">
    </div>
    <div class="container">
       <div class="about">
        <p class="text1">“一群互联网原住民的广告探索” </p>
        <p class="text2">小仙科技是一家致力于新媒体整合营销的内容与技术服务公司。依托设计、技术、创意与三大领域，结合营销、内容、研发等多维度，为客户提供综合性数字化创新服务，帮助传统企业实现“互联网+”转型升级，帮助互联网品牌搭建与客户沟通的信息桥梁。</p>
       </div>
       <div class="img">
        <img src="../assets/images/关于小仙_03.jpg" alt="">
       </div>
    </div>
    <div class="title">
     <img src="../assets/images/关于小仙_04_03.png">
    </div>
  <Swiper></Swiper>
  <div class="title">
    <img src="../assets/images/关于小仙_07.png">
  </div>
  <div class="case-box">
      <div class="case-nav">
          <span :class="flag == '1' ? 'active' : ''"  @click="showHide(1)">公司活动</span>
          <span :class="flag == '2' ? 'active' : ''"  @click="showHide(2)">新闻动态</span>
          <span :class="flag == '3' ? 'active' : ''"  @click="showHide(3)">案例新闻</span>
      </div>
      <div id="icon">
      <!--公司活动页-->
      <div class="case-content" v-if="flag == '1'">
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
      <!--新闻动态页-->
      <div class="dynamic" v-if="flag == '2'">
        <div>
          <p class="news">互联网驱动和消费升级趋势下，营销+技术助力品牌崛起</p>
          <p class="time">2019-01-16</p>
        </div>
      </div>
      <!--案例新闻 页 -->
      <div class="dynamic" v-if="flag == '3'">
           <router-link to="/NewsDetail">
            <div>
              <p class="news">互联网驱动和消费升级趋势下，营销+技术助力品牌崛起</p>
              <p class="time">2019-01-16</p>
            </div>
           </router-link>
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
   <Logo></Logo>
  <div class="title">
    <img src="../assets/images/关于小仙-新闻动态_03.png">
  </div>
  <div class="container">
       <div class="about">
        <p class="text1">“一群互联网原住民的广告探索” </p>
        <p class="text2">小仙科技是一家致力于新媒体整合营销的内容与技术服务公司。依托设计、技术、创意与三大领域，结合营销、内容、研发等多维度，为客户提供综合性数字化创新服务，帮助传统企业实现“互联网+”转型升级，帮助互联网品牌搭建与客户沟通的信息桥梁。</p>
       </div>
  </div>
  <!--招聘模块-->
   <div class="father">
        <div class="vision">
          <div class="head">
            <p>视觉设计师</p>
            <img src="../assets/images/关于小仙1111_03.png" alt="">
          </div>
          <div class="body none">
            <div class="post margin">
              <p class="content-title">资深视觉设计师 [杭州]</p>
              <p class="detail">1、2年以上视觉设计工作经验，美术院校或者网页设计相关专业毕业优先；</p>
              <p class="detail">2、精通Photoshop、Illustrator、CorelDRAW、Dreamweaver等设计软件；</p>
              <p class="detail">3、擅长创意、策划，具备较强的美术功底和审美能力；</p>
              <p class="detail">4、工作主动勤奋，能承受一定的工作压力；</p>
              <p class="detail">5、富有责任感和团队精神。</p>
            </div>
            <div class="content margin">
              <p class="content-title">工作内容</p>
              <p class="detail">负责平台推广/活动/专题页面的视觉设计工作。</p>
            </div>
            <div class="welfare margin">
              <p class="content-title">公司福利</p>
              <p class="detail">五险一金／绩效奖金／年终奖金／午餐补贴／高温补贴／生日贺</p>
              <p class="detail">节日福利／团队建设</p>
            </div>
            <div class="mailbox margin">
              <p>请发简历至：<a href=mailto:jumang@8think.com>jumang@8think.com</a> </p>
            </div>
          </div>
        </div>

        <div class="vision">
          <div class="head">
            <p>平面设计师</p>
            <img src="../assets/images/关于小仙1111_03.png" alt="">
          </div>
          <div class="body none">
            <div class="post margin">
              <p class="content-title">资深视觉设计师 [杭州]</p>
              <p class="detail">1、2年以上视觉设计工作经验，美术院校或者网页设计相关专业毕业优先；</p>
              <p class="detail">2、精通Photoshop、Illustrator、CorelDRAW、Dreamweaver等设计软件；</p>
              <p class="detail">3、擅长创意、策划，具备较强的美术功底和审美能力；</p>
              <p class="detail">4、工作主动勤奋，能承受一定的工作压力；</p>
              <p class="detail">5、富有责任感和团队精神。</p>
            </div>
            <div class="content margin">
              <p class="content-title">工作内容</p>
              <p class="detail">负责平台推广/活动/专题页面的视觉设计工作。</p>
            </div>
            <div class="welfare margin">
              <p class="content-title">公司福利</p>
              <p class="detail">五险一金／绩效奖金／年终奖金／午餐补贴／高温补贴／生日贺</p>
              <p class="detail">节日福利／团队建设</p>
            </div>
            <div class="mailbox margin">
              <p>请发简历至：<a href=mailto:jumang@8think.com>jumang@8think.com</a> </p>
            </div>
          </div>
        </div>
        
        <div class="vision ">
          <div class="head">
            <p>品牌设计师</p>
            <img src="../assets/images/关于小仙1111_03.png" alt="">
          </div>
          <div class="body none ">
            <div class="post margin">
              <p class="content-title">资深视觉设计师 [杭州]</p>
              <p class="detail">1、2年以上视觉设计工作经验，美术院校或者网页设计相关专业毕业优先；</p>
              <p class="detail">2、精通Photoshop、Illustrator、CorelDRAW、Dreamweaver等设计软件；</p>
              <p class="detail">3、擅长创意、策划，具备较强的美术功底和审美能力；</p>
              <p class="detail">4、工作主动勤奋，能承受一定的工作压力；</p>
              <p class="detail">5、富有责任感和团队精神。</p>
            </div>
            <div class="content margin">
              <p class="content-title">工作内容</p>
              <p class="detail">负责平台推广/活动/专题页面的视觉设计工作。</p>
            </div>
            <div class="welfare margin">
              <p class="content-title">公司福利</p>
              <p class="detail">五险一金／绩效奖金／年终奖金／午餐补贴／高温补贴／生日贺</p>
              <p class="detail">节日福利／团队建设</p>
            </div>
            <div class="mailbox margin">
              <p>请发简历至：<a href=mailto:jumang@8think.com>jumang@8think.com</a> </p>
            </div>
          </div>
        </div>

        <div class="vision">
          <div class="head">
            <p>文案策划</p>
            <img src="../assets/images/关于小仙1111_03.png" alt="">
          </div>
          <div class="body none">
            <div class="post margin">
              <p class="content-title">资深视觉设计师 [杭州]</p>
              <p class="detail">1、2年以上视觉设计工作经验，美术院校或者网页设计相关专业毕业优先；</p>
              <p class="detail">2、精通Photoshop、Illustrator、CorelDRAW、Dreamweaver等设计软件；</p>
              <p class="detail">3、擅长创意、策划，具备较强的美术功底和审美能力；</p>
              <p class="detail">4、工作主动勤奋，能承受一定的工作压力；</p>
              <p class="detail">5、富有责任感和团队精神。</p>
            </div>
            <div class="content margin">
              <p class="content-title">工作内容</p>
              <p class="detail">负责平台推广/活动/专题页面的视觉设计工作。</p>
            </div>
            <div class="welfare margin">
              <p class="content-title">公司福利</p>
              <p class="detail">五险一金／绩效奖金／年终奖金／午餐补贴／高温补贴／生日贺</p>
              <p class="detail">节日福利／团队建设</p>
            </div>
            <div class="mailbox margin">
              <p>请发简历至：<a href=mailto:jumang@8think.com>jumang@8think.com</a> </p>
            </div>
          </div>
        </div>

        <div class="vision">
            <div class="head">
              <p>插画师</p>
              <img src="../assets/images/关于小仙1111_03.png" alt="">
            </div>
            <div class="body none">
              <div class="post margin">
                <p class="content-title">资深视觉设计师 [杭州]</p>
                <p class="detail">1、2年以上视觉设计工作经验，美术院校或者网页设计相关专业毕业优先；</p>
                <p class="detail">2、精通Photoshop、Illustrator、CorelDRAW、Dreamweaver等设计软件；</p>
                <p class="detail">3、擅长创意、策划，具备较强的美术功底和审美能力；</p>
                <p class="detail">4、工作主动勤奋，能承受一定的工作压力；</p>
                <p class="detail">5、富有责任感和团队精神。</p>
              </div>
              <div class="content margin">
                <p class="content-title">工作内容</p>
                <p class="detail">负责平台推广/活动/专题页面的视觉设计工作。</p>
              </div>
              <div class="welfare margin">
                <p class="content-title">公司福利</p>
                <p class="detail">五险一金／绩效奖金／年终奖金／午餐补贴／高温补贴／生日贺</p>
                <p class="detail">节日福利／团队建设</p>
              </div>
              <div class="mailbox margin">
                <p>请发简历至：<a href=mailto:jumang@8think.com>jumang@8think.com</a> </p>
              </div>
            </div>
        </div>
   </div>
   <Footer></Footer>

  
  </div>
</template>
<script>
 
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Swiper from '../components/Swiper'
import Logo   from '../components/Logo'
export default {
  components: {Header,Banner,Footer,Swiper,Logo},
  name:'About',
  data(){
    return{
      flag:1,
      iconClose:require('../assets/images/关于小仙1111_03.png'),
      iconOpen:require('../assets/images/关于小仙_003.png')
      }
  },
  methods: {
    showHide(i) {
      this.flag = i;
    } ,
  },
  mounted(){
           $(".father").on("touchstart",".head",function(e){
            var i=$(this).parent().index();
            if ($(this).hasClass("red")){
              $(".body").hide()
              $(".head").removeClass("red");
              $(".head>p").css("color","black");
              $(".head>img").attr("src", 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAATCAYAAAAeVmTJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxNjQ3OGRhZS1jOTFmLWUwNGItYjhkYy05Y2YxMzk5Nzg0ODUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDVERkNFMjk0QjhEMTFFOUExNjZBQzZGNUU3OTE4MUUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDVERkNFMjg0QjhEMTFFOUExNjZBQzZGNUU3OTE4MUUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzY5YTkyMTktNjNlNC1iNTRlLTlkNWItZjg1NzM0M2QzY2FiIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDk4ZDQxOTQtMWZiOC0xMWU5LTkxYjUtZjAzYmI2ZTczNmVmIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+j0JheAAAAcZJREFUeNpivHr1qjQDA0MtEB8C4mUMZAItLS2S1F+7ds0FSIUB8XwWIHEKiKWAOB2IJYG4l4HGAOiASCQPJzIBCTYk+R4grqaxAxLQQvw/yBGuaOpagLiMRg4ABz+acDgTMC4vABmGQPwbSaITiGuo7IBYILUSTTgEaP96JmiiAjlEH4i/ISlohmJqOCAVSC1CE/YB2rsWxGBCErwOxKZoIQIKjQwqRMEsNGFfoAO2wjhM6HqA2AAtRKYDcQ6ZDgjCEgWgENiCLMCETS80aj4iiU0G4hIysuFaNGEX5BDA5wgQuAPERkD8E0msG4iLSQgB9ILPGeiAvdjUM+Ex6x401/xHK0dKCDggBEsIuAIdsA+XHiYCngIlVmMg/oUWItU4HBADpFajCXsCHbAHnyWM////hxmAT50OEF9GEwPlnFYkfjQQL0FT4wd0wGZC0cdEZDq7Ak0jv9FK1lIoOwiLA4KIcQApIQEDmkB8Boi5kMTWQR2BDLyADthObE5iIjHrg9KIHloaCcKSC7aTYigTGWXQXWjJ+gOLnCe+XEBNR4DAJWj2/YQk5gR0wA5yDGOhoFq4AcQmQAyqHXcBHXCEXIMAAgwAnnyA5I+F3b8AAAAASUVORK5CYII=');
            }else{
              $(".body").not(i).hide()
              $(".body").eq(i).slideToggle()
              $(".head").not(i).removeClass("red");
              $(this).addClass("red");
              $(".head>img").attr("src",'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAATCAYAAAAeVmTJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxNjQ3OGRhZS1jOTFmLWUwNGItYjhkYy05Y2YxMzk5Nzg0ODUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDVERkNFMjk0QjhEMTFFOUExNjZBQzZGNUU3OTE4MUUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDVERkNFMjg0QjhEMTFFOUExNjZBQzZGNUU3OTE4MUUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzY5YTkyMTktNjNlNC1iNTRlLTlkNWItZjg1NzM0M2QzY2FiIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDk4ZDQxOTQtMWZiOC0xMWU5LTkxYjUtZjAzYmI2ZTczNmVmIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+j0JheAAAAcZJREFUeNpivHr1qjQDA0MtEB8C4mUMZAItLS2S1F+7ds0FSIUB8XwWIHEKiKWAOB2IJYG4l4HGAOiASCQPJzIBCTYk+R4grqaxAxLQQvw/yBGuaOpagLiMRg4ABz+acDgTMC4vABmGQPwbSaITiGuo7IBYILUSTTgEaP96JmiiAjlEH4i/ISlohmJqOCAVSC1CE/YB2rsWxGBCErwOxKZoIQIKjQwqRMEsNGFfoAO2wjhM6HqA2AAtRKYDcQ6ZDgjCEgWgENiCLMCETS80aj4iiU0G4hIysuFaNGEX5BDA5wgQuAPERkD8E0msG4iLSQgB9ILPGeiAvdjUM+Ex6x401/xHK0dKCDggBEsIuAIdsA+XHiYCngIlVmMg/oUWItU4HBADpFajCXsCHbAHnyWM////hxmAT50OEF9GEwPlnFYkfjQQL0FT4wd0wGZC0cdEZDq7Ak0jv9FK1lIoOwiLA4KIcQApIQEDmkB8Boi5kMTWQR2BDLyADthObE5iIjHrg9KIHloaCcKSC7aTYigTGWXQXWjJ+gOLnCe+XEBNR4DAJWj2/YQk5gR0wA5yDGOhoFq4AcQmQAyqHXcBHXCEXIMAAgwAnnyA5I+F3b8AAAAASUVORK5CYII=');
              $(".head>img").eq(i).attr("src",'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAATCAYAAAAeVmTJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxNjQ3OGRhZS1jOTFmLWUwNGItYjhkYy05Y2YxMzk5Nzg0ODUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjFFMDE3ODQ0QzYyMTFFOThDNUI4RDM3RDBBMkY5MDUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjFFMDE3ODM0QzYyMTFFOThDNUI4RDM3RDBBMkY5MDUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzY5YTkyMTktNjNlNC1iNTRlLTlkNWItZjg1NzM0M2QzY2FiIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDk4ZDQxOTQtMWZiOC0xMWU5LTkxYjUtZjAzYmI2ZTczNmVmIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+lw4csgAAAU1JREFUeNpi/P//PwMFgAWIU4B4FxDfI9sUkCPIxBxAfOE/BHwEYg1yzSLXAXxAfOM/KvgOxHrkmMdIRnSwA/ElIFbDIvcbiLWA+A4pBjKR6AAeIL6A5oALSGxWIL4IxJq0ShPCQHwPLQrmQ+Wy0cR/AbEhtdMEJxA/RLNoOZqa6v+YQIdajuAH4ltohi/DobYaS4hoU+oIbiwhMJ+AnmI09d+AWJNcR7AA8W00AxcRGX3oDvkJxEqkOgJUEF1GM2gJifm/BE3/ByBWIdYRfFjSwFwyC7UcNHO+ArEWIUdwYUkDsyko2kG4FEti1cLlCB4gvo6mYS2FDoDhFnwhAlMkBMR3icyG5GJs2dcA5ghRIH6MpmAplR0Aw2VYCjQjkMRpNME1NHIArhB5ARL8R4cQwFuOgKpyO2A9lgPE14C4gYF+IAaI/YB4FUCAAQDM7FfpCE7KzwAAAABJRU5ErkJggg==');
              $(".head>p").css("color","black");
              $(".head>p").eq(i).css("color","white");
               }
          })
  }
}
</script>
<style scope>
.container{
  width: 100%;
  
}
.about {
    width: 686px;
    margin: 0 auto;
    margin-top: 50px;
    line-height: 50px;
   
}
.about .text1{
  color:rgb(112, 112, 112); 
  font-size: 18px;
  text-align: center;
  margin-bottom: 0px;
}
.about .text2{
  color:rgb(51, 51, 51);
  font-size: 22px;
  margin: 0 auto;
  line-height: 40px;
  text-align: justify;
  word-wrap:break-word;
  
}
.img {
    margin-top: 10px;
    width: 686px;
    height: 300px;
    margin:50 auto;
    margin-left: 35px;
}
.img>img {
    margin: 0 auto;
    width: 686px;
    height: 300px;
}
.dynamic {
    margin: 0 auto;
    margin-top: 50px;
    width:686px;
}
.dynamic a{
  text-decoration: none;
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
.father{
  margin-bottom: 60px;
}
.vision{
  width:686px;
  /* margin-left: 20px; */
  margin: 25px auto;
  background-color: white;
  line-height: 35px;
}
.head{
  background-color:white;
  color: black;
  font-size: 26px;
  padding: 30px 0 30px 0;
  position: relative;
}
.vision p{
  margin-left: 20px;
}
.head>img{
  display:inline-block;
  position: absolute;
  top:40px;
  left:600px;
  color: black;
  width: 33px;
}
.body{
  background-color: white;
}
.content-title{
  color: black;font-size: 26px;
}
.detail{
  color: rgb(131, 131, 131);
  font-size: 20px;
}
.mailbox{
  color: red;
  font-size: 30px;
  font-weight: bold;
}
.mailbox a{
  color: red;
  
}
.margin{
  margin-top: 30px;
}
.red{
  background-color: rgb(209, 18, 23)
}

</style>
