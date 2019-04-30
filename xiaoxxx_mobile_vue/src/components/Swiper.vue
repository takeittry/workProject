<template>
  <div>
     <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="swiper-item">
                    <img src="../assets/images/关于小仙_09_03.png" alt="">
              <div class="text1">财神</div>
              <div class="text2">品牌策划总监</div>
              <div class="text3">新媒体公关负责人，毕业于中国美院。
                5年互联网从业经验。策划执行多次大型商演。</div>
            </div>
            <div class="swiper-item">
                    <img src="../assets/images/关于小仙_09_03.png" alt="">
              <div class="text1">财神</div>
              <div class="text2">品牌策划总监</div>
              <div class="text3">新媒体公关负责人，毕业于中国美院。
                5年互联网从业经验。策划执行多次大型商演。</div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-item">
                    <img src="../assets/images/关于小仙_09_03.png" alt="">
              <div class="text1">财神</div>
              <div class="text2">品牌策划总监</div>
              <div class="text3">新媒体公关负责人，毕业于中国美院。
                5年互联网从业经验。策划执行多次大型商演</div>
            </div>
            <div class="swiper-item">
                    <img src="../assets/images/关于小仙_09_03.png" alt="">
              <div class="text1">财神</div>
              <div class="text2">品牌策划总监</div>
              <div class="text3">新媒体公关负责人，毕业于中国美院。
                5年互联网从业经验。策划执行多次大型商演。</div>
            </div>
          </div>
		  <div class="swiper-slide">
            <div class="swiper-item">
                    <img src="../assets/images/关于小仙_09_03.png" alt="">
              <div class="text1">财神</div>
              <div class="text2">品牌策划总监</div>
              <div class="text3">新媒体公关负责人，毕业于中国美院。
                5年互联网从业经验。策划执行多次大型商演。</div>
            </div>
            <div class="swiper-item">
                    <img src="../assets/images/关于小仙_09_03.png" alt="">
              <div class="text1">财神</div>
              <div class="text2">品牌策划总监</div>
              <div class="text3">新媒体公关负责人，毕业于中国美院。
                5年互联网从业经验。策划执行多次大型商演。</div>
            </div>
          </div>
        </div>
        <!-- Add Pagination -->
        <!-- <div class="swiper-pagination"></div> -->
        <!-- Add Arrows -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
       </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  data() {
    return {};
  },
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,
      delay: 1000,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
};
</script>
<style scoped>
.swiper-button-next {
  background: url("../assets/images/关于小仙_07_03.png") center / cover
    no-repeat;
  z-index: 10;
  width: 55px;
  height: 47px;
  top: 40%;
  right: 40px;
  transform: scale(1.25);
  -webkit-tap-highlight-color: transparent;
}
.swiper-button-prev {
  background: url("../assets/images/关于小仙_038.png") center / cover no-repeat;
  z-index: 10;
  width: 47px;
  height: 47px;
  top: 40%;
  left: 50px;
  transform: scale(1.25);
  -webkit-tap-highlight-color: transparent;
}
.swiper-container {
  width: 100%;
  height: 100%;
  margin-top: 50px;
  /* margin-left: 0.04rem; */
}
.swiper-item {
  width: 45%;
  /* height: 50%; */
  margin: 2% 2%;
  background: #fff;
  border-radius: 10px; /*no*/
}
.text1 {
  text-align: left;
  margin: 3% 6%;
  font-size: 26px;
  color: black;
}
.text2 {
  text-align: left;
  margin: 3% 6%;
  font-size: 20px;
  color: rgb(102, 102, 102);
}
.text3 {
  text-align: left;
  margin: 3% 6%;
  font-size: 15px;
  color: rgb(167, 167, 167);
}
.swiper-item img {
  width: 100%;
}
.swiper-slide {
  background: #f7f7f7;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>

