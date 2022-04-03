<template>
 <div class="catalog__items">
  <div v-for="item in catalogItems" :key="item.id" class="catalog__items-item">
    <div class="add-to-fav">
      <router-link to="/product">
        <img class="main-img" :src="item.src" alt="">
      </router-link>
      <img class="favbutt" :src="favbutt" alt="">
    </div>
    <div class="options">
      <span>{{item.name}}</span>
      <h5>{{item.price}} грн</h5>
      <p>{{item.sizes}}</p>
    </div>
    <img class="dots-img" :src="dots" alt="">
  </div>
 </div>
</template>

<script setup>
import jacketImg from '@/assets/pngs/jacketN.png'
import furcoatImg from '@/assets/pngs/furcoatN.png'
import parksImg from '@/assets/pngs/parksN.png'
import sheshenamImg from '@/assets/pngs/sheshenamN.png'
import dots from '@/assets/svgs/dots.svg'
import favbutt from '@/assets/svgs/fav-butt.svg'

const catalogItems = [
  {
    id:1,
    src:jacketImg,
    name:'Белая куртка',
    price: 2900,
    sizes: 'XXS XS S M L'
  },
  {
    id:2,
    src:sheshenamImg,
    name:'Синее пальто',
    price: 3150,
    sizes: 'XS M L'
  },
  {
    id:3,
    src:furcoatImg,
    name:'Бежевая шуба',
    price: 4200,
    sizes: 'XS S L'
  },
  {
    id:4,
    src:parksImg,
    name:'Синяя парка',
    price: 3400,
    sizes: 'XXS XS S M L'
  },
  {
    id:5,
    src:jacketImg,
    name:'Белая куртка',
    price: 2900,
    sizes: 'XXS XS S M L'
  },
  {
    id:6,
    src:sheshenamImg,
    name:'Синее пальто',
    price: 3150,
    sizes: 'XS M L'
  },
  {
    id:7,
    src:furcoatImg,
    name:'Бежевая шуба',
    price: 4200,
    sizes: 'XS S L'
  },
  {
    id:8,
    src:parksImg,
    name:'Синяя парка',
    price: 3400,
    sizes: 'XXS XS S M L'
  },
]

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