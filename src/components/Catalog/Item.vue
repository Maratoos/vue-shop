<template>
 <div class="catalog__items">
  <div v-for="clothe in clothes" :key="clothe.id" class="catalog__items-item">
    <div class="add-to-fav">
        <img class="main-img" :src="clothe.imageUrl" alt="">
      <img class="favbutt" :src="favbutt" alt="">
    </div>
    <div class="options">
      <router-link to="/product">
        <span>{{clothe.name}}</span>
      </router-link>
      <h5>{{clothe.price}} грн</h5>
      <p>{{clothe.sizes}}</p>
    </div>
    <img class="dots-img" :src="dots" alt="">
  </div>
 </div>
</template>

<script>
import dots from '@/assets/svgs/dots.svg'
import favbutt from '@/assets/svgs/fav-butt.svg'
import { useStore } from 'vuex'
export default {
  props: ["clothes"],
setup() {
  const store = useStore()

  return { dots, favbutt }
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
.catalog__items{
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
  margin: 30px 0 0 80px;
  &-item{
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
}
</style>