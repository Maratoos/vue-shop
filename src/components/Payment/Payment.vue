<template>
<HeaderMain />
  <div class="container">
      <div class="payment">
        <div class="payment__route">   
        <h5 v-for="item in routeItems" :key="item.id">
            <router-link :to="item.path">
                {{item.label}}
            </router-link>
            <img :src="item.src" alt="">
        </h5>
        </div>
        <div class="payment__head"><span>Оплата и доставка</span></div>
        <div class="payment__delivery">
          <div class="payment__delivery-item">
            <p>Вы можете оплатить покупку одним из ниже перечисленных способов:</p>
            <ul>
                <li v-for="item in paymentItems" :key="item">• {{item}}</li>
            </ul>    
          </div> 
          <div class="payment__delivery-item">
            <p>Мы готовы предложить несколько вариантов доставки:</p>
            <ul>
                <li v-for="item in deliveryItems" :key="item">• {{item}}</li>
            </ul>    
          </div>
        </div>
        <div class="payment__liqpay">
            <div class="payment__liqpay-head">
                <span>Процесс оформления заказа с помощью LIQPAY:</span>
            </div>
            <div class="payment__liqpay-desc">
                <div v-for="item in liqpayItems" :key="item.id" class="payment__liqpay-desc-item">
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
import vectorright from '@/assets/svgs/vectorright.svg'
import vectorright1 from '@/assets/svgs/vectorright1.svg'
import vectorright2 from '@/assets/svgs/vectorright2.svg'
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
                label: 'Оплата и доставка',
                path: '/payment',
                src: ''
            }
    ]
    const paymentItems = ['наложенным платежом в отделении Новой Почты', 'денежным переводом  Visa/MasterCard', 'полная предоплата через Приват 24']
    const deliveryItems = ['отправка по всей Украине в отделение Новой Почты(1-2 дня)', 'международные сервисы доставки для жителей зарубежья', 'Срок доставки: 1–2 дня с момента  заказа']
    const liqpayItems = [
        {
            id:1,
            label:'Выбрать в корзине способ оплаты "LIQPAY";',
            src:vectorright
        },
        {
            id:2,
            label:'Подтвердить заказ;',
            src:vectorright1
        },
        {
            id:3,
            label:'После этого Вас перенаправит на сайт LIQPAY, где вы выбираете удобный для вас способ оплаты: через Приват24, или с помощью карты Mastercard/VISA со всего мира. ',
            src:vectorright2
        },
    ]

    return { routeItems, paymentItems, deliveryItems, liqpayItems }
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
.payment{
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
    &__head{
        span{
        display: flex;
        justify-content: start;
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 23px;
        color: #252525;
        margin: 30px 0 20px 0;
        }
    }
    &__delivery{
        display: flex;
        &-item{
            margin-right: 40px;
            width: 550px;
            height: 100px;
            p{
            @include cartStyleFt;
            display: flex;
            justify-content: start;
            line-height: 20px;    
            width: 543px;
            }
            ul{
                li{
                @include cartStyleFt;
                margin: 0 0 5px -40px;
                display: flex;
                justify-content: start;
                }
            }
        }
       
    }
    &__liqpay{
        margin-top: 40px;
        &-head{
            margin-right: 830px;
            span{
              @include cartStyleFt;
            }
        }
        &-desc{
            display: flex;
            &-item{
                margin: 25px 0 0 -40px;
                display: flex;
                img{
                    margin:0 15px 0 40px;
                    width: 45px;
                    height: 50px;
                }
                p{
                  @include cartStyleFt;  
                  margin: 15px 40px 0 0;
                }
            }
            &-item:last-child{
                width: 550px;
                p{
                    margin: 0;
                }
            }
        }
    }
}
</style>



