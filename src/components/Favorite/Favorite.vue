<template>
<HeaderMain />
<div class="container">
    <div class="favorite__route">   
        <h5 v-for="item in routeItems" :key="item.id">
            <router-link :to="item.path">
                {{item.label}}
            </router-link>
            <img :src="item.src" alt="">
        </h5>
        </div>
 <div class="favorite">
    <h4 class="favorite-h4">Избранное</h4>
    <div class="favorite-content">
      <div v-for="item in items" :key="item" class="favorite-item">
        <img class="item-fav" :src="favIcon" alt="" />
        <router-link to="/product">
          <img class="favorite-img" :src="item.img" alt="" />
        </router-link>
        <div class="favorite-title">
          <span>{{ item.title }}</span>
          <p class="favorite-p">{{ item.new }}</p>
        </div>
        <p class="favorite-price">{{ item.price }} грн</p>
        <p class="favorite-size">{{ item.size }}</p>
        <Ball />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import arrow from '@/assets/svgs/arrow.svg'
import imageIcon from "@/assets/pngs/image1.png";
import Ball from "../Product/Ball.vue";
import favIcon from "@/assets/pngs/favIcon.png";
import HeaderMain from '../HeaderMain/HeaderMain.vue'
export default {
components: { HeaderMain, Ball },
setup() {
    const items = [
  {
    img: "	https://images.wbstatic.net/big/new/10220000/10223921-1.jpg",
    title: "Белая куртка",
    new: "new",
    price: 2900,
    size: "XXS XS S M L",
  },
  {
    img: "https://images.wbstatic.net/big/new/21560000/21569576-1.jpg",
    title: "Синее пальто",
    price: 3150,
    size: "XXS XS S",
  },
]
    const routeItems = [
            {
                id: 1,
                label: 'Главная',
                path: '/',
                src: arrow,
            },
            {
                id: 2,
                label: 'Избранное',
                path: '/favorite',
                src: ''
            }
    ]

return { items, favIcon, imageIcon, routeItems }
}
}
</script>

<style lang="scss">
@mixin cartStyleFt {
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 19px;
color: #252525;
}
.favorite {
    &-h4 {
    @include cartStyleFt;
    margin: 30px 0;
    text-align: left;
    font-size: 20px;
    line-height: 23px;
    }
    &-content {
    display: flex;
        .favorite-item {
        position: relative;
         margin-left: 15px;
        }
        .item-fav {
        position: absolute;
        top: 0;
        right: 0;
        }
        .favorite-item:first-child {
         margin: 0;
        }
        .favorite-img {
        width: 370px;
        height: 400px;
        }
        .favorite-title {
        display: flex;
        justify-content: center;
        margin-top: 15px;
        span{
            @include cartStyleFt;
        }
            .favorite-p {
            font-weight: 700;
            color: #e0bea2;
            margin: 0 10px;
            }
        }    
        .favorite-price {
        margin: 5px 0;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #252525;
        }
        .faavorite-size{
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 19px;
text-align: center;
color: rgba(37, 37, 37, 0.5);
        }
    }
}
.favorite__route{
display: flex;
margin: 30px 0 0 0;
img{
margin: 0 10px;
}
h5 a{
@include cartStyleFt;
}
h5 a:hover{
color:#E0BEA2;
}
}

</style>