<template>
  <div class="favorite__items-item">
    <div class="add-to-fav">
        <img class="main-img" :src="parksN" alt="">
      <img class="favbutt" :src="favbutt" alt="">
    </div>
    <div class="options">
      <router-link to="/product">
        <span>Синяя парка</span>
      </router-link>
      <h5>2900 грн</h5>
      <p>XXS XS S M L</p>
    </div>
    <img class="dots-img" :src="dots" alt="">
  </div>
</template>

<script>
import dots from '@/assets/svgs/dots.svg'
import favbutt from '@/assets/svgs/fav-butt.svg'
import parksN from '@/assets/pngs/parksN.png'
export default {
setup() {

return { dots, favbutt, parksN }
}
}
</script>

<style lang="scss" scoped>
@mixin itemStyle {
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 19px;
color: #252525;
}
  .favorite__items-item{
    margin: 0 15px 30px 0;
    width: 310px;
    height: 461px;
    .add-to-fav{
      height: 375px;
      .main-img{
      width: 310px;
      height: 360px;
      }
      .favbutt{
        position: relative;
        top: -364px;
        left: 135px;
      }
    }
    .options{
      span{
        @include itemStyle;
        margin: 15px 0 5px 0;
      }
      h5{
        @include itemStyle;
        font-weight: 700;
        margin-bottom: 5px;
      }
      p{
        @include itemStyle;
        margin-bottom: 5px;
      }
    }
  }
</style>