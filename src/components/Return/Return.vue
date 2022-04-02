<template>
<HeaderMain />
<div class="container">
  <div class="return">
    <div class="return__route">   
        <h5 v-for="item in routeItems" :key="item.id">
            <router-link :to="item.path">
                {{item.label}}
            </router-link>
            <img :src="item.src" alt="">
        </h5>
    </div>
    <div class="return__exchange">
      <div class="return__exchange-desc">
        <span>Обмен и возврат</span>
        <p v-for="item in descItems" :key="item">{{item}}</p>
      </div>
      <div class="return__exchange-items">
          <div v-for="item in exchangeItems" :key="item.id" class="return__exchange-items-item">
              <img :src="item.src" alt="">
              <p>{{item.label}}</p>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import HeaderMain from '../HeaderMain/HeaderMain.vue'
import arrow from '@/assets/svgs/arrow.svg'
import mark from '@/assets/svgs/mark.svg'
import time from '@/assets/svgs/time.svg'
import bike from '@/assets/svgs/bike.svg'
import blank from '@/assets/svgs/blank.svg'
import dollar from '@/assets/svgs/dollar.svg'
import card from '@/assets/svgs/card.svg'
export default {
components:{ HeaderMain },
setup() {
     const routeItems = [
            {
                id: 1,
                label: 'Главная',
                path: '/',
                src: arrow,
            },
            {
                id: 2,
                label: 'Обмен и возврат',
                path: '/return',
                src: ''
            }
    ]
    const descItems = ['Если вам не подошел заказ, мы с удовольствием вам его обменяем или примем возврат', 'Обмен и возврат возможен в случае :']
    const exchangeItems = [
        {
        id:1,
        src:mark,
        label:'если заказ не был использован и сохранил товарный вид(в том числе не нарушены бирки, ярлыки, упаковочные материалы)'
        },
        {
        id:2,
        src:time,
        label:'возврат и обмен осуществляется в течение двух дней с момента получения заказа'
        },
        {
        id:3,
        src:bike,
        label:'возврат и обмен товара возможен только при отправке по Украине'
        },
        {
        id:4,
        src:blank,
        label:'бланк возврата присутствует в каждой посылке '
        },
        {
        id:5,
        src:dollar,
        label:'все расходы по обмену и возврату товара несет покупатель'
        },
        {
        id:6,
        src:card,
        label:'после получения возврата мы делаем перевод денежных средств на карту клиента'
        }
    ]

    return{ routeItems, exchangeItems, descItems }
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
.return{
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
    &__exchange{
        &-desc{
        margin-top: 30px;
        justify-content: start;
        span, p{
            display: flex;
            justify-content: start;
        }
        span{      
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 23px;
        color: #252525;
        }
        p{
        margin-top: 20px;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;
        color: #252525;
        }
        p:last-child{
        margin-top: 10px;
        }
        }
        &-items{
            display: flex;
            margin-top: 20px;
            &-item{
                margin-right: 30px;
                img{
                    margin: 0 0 10px 0;
                }
                p{
                    @include cartStyleFt;
                    width: 165px;
                }
            }

        }
    }
    
}
</style>