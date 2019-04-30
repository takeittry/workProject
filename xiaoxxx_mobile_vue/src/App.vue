<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

* {
 margin: 0;
 padding: 0;
 }
 a{
   -webkit-tap-highlight-color: transparent;
 }
 .title {
    width: 290px;
    height:85px;
    margin: 0 auto;
    padding-top: 60px;
    display: flex;
    justify-content: center;
}
.title img {
    width: 100%;
}
#icon {
    width: 686px;
    margin: 0 auto;
}
.case-box {
    width: 686px;
    margin: 45px auto 0;
    margin-bottom: 60px;
}
.case-box .case-nav {
    width: 686px;
    font-size: 24px;
    color: #999999;
    height: 37px;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    justify-content: center;
}
.case-box .case-nav span {
    margin: 0 20px;
    padding-bottom: 5px;
    /* margin-right: 0.6rem; */
    display: inline-block;
    line-height: 32px;
    min-width: 50px;
}
.case-box .case-content {
    width: 686px;
    overflow: hidden;
}
.case-box .case-content .case-list ul li {
    background: #ffffff;
    border-radius: 20px;/*no*/
    overflow: hidden;
    margin-top: 25px;
    margin-bottom: 5px;
}
.case-box .case-content .case-list ul li img {
    width: 686px;
}
.case-box .case-content .case-list ul li .words-box {
    padding: 20px 30px 25px;
}
.case-box .case-content .case-list ul li .words-box h3 {
    line-height: 50px;
    font-size: 34px;
    color: #333333;
    font-weight: normal;
}
.case-box .case-content .case-list ul li .words-box p {
    font-size: 26px;
    line-height: 36px;
    color: #999999;
}
.case-box .case-content .case-list ul li .words-box .classify {
    font-size: 22px;
    color: #999999;
    margin-top: 15px;
}
.active {
    padding-bottom: 4px;
    border-bottom: 1px solid #181818;/*no*/
    color: #181818; 
}
.show{
  display: block;
}
.none{
  display: none;
}

</style>
