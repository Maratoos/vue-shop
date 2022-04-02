<template>
<div class="container">
  <div class="cart">
    <div class="cart__route">   
        <h5 v-for="item in routeItems" :key="item.id">
            <router-link :to="item.path">
                {{item.label}}
            </router-link>
            <img :src="item.src" alt="">
        </h5>
    </div>
    <div class="cart__order">
        <span>Ваш заказ</span>
    </div>
        <div class="cart__items">
            <Item />
            <Item />
            <div class="cart__total">
            <h4 v-for="item in totalItems" :key="item">{{item}}</h4>
            </div>
        </div>
    <Checkout />
    
  </div>
</div>
</template>

<script>
import arrow from '@/assets/svgs/arrow.svg'
import Item from './Item.vue'
import Checkout from '@/components/Cart/Checkout.vue'
export default {
    components:{ Item, Checkout },
    setup() {
        const totalItems = ['К оплате:', '15250 грн']

        const routeItems = [
            {
                id: 1,
                label: 'Главная',
                path: '/',
                src: arrow
            },
            {
                id: 2,
                label: 'Корзина',
                path: '/cart',
                src: ''
            }
        ]

        return { totalItems, routeItems, arrow }
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
.container{
  width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
    .cart{
    &__route{
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
    &__total{
        display: flex;
        justify-content: end;
        margin: 30px 85px 0 0;
        h4{
        @include cartStyleFt;
        margin-right: 10px;
        }
        h4:last-child{
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #252525;
        }
    }
    &__order{
        span{
        display: flex;
        justify-content: start;
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 23px;
        color: #252525;
        margin: 30px 0;
    }
    }
}
}
</style>