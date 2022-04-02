<template>
    <HeaderMain />
  <div class="container">
      <div class="contacts">
        <div class="contacts__route">
              <h5 v-for="item in routeItems" :key="item.id">
            <router-link :to="item.path">
                {{item.label}}
            </router-link>
            <img :src="item.src" alt="">
            </h5>
        </div>
        <div class="contacts__title"><span>Связаться с нами</span></div>
        <div class="contacts__items">
            <div v-for="item in contactItems" :key="item.id" class="contacts__items-item">
                <h2>{{item.title}}</h2>
                <ul>
                    <li>{{item.label}}</li>
                    <li>{{item.label1}}</li>
                </ul>
            </div>
            <div class="contacts__items-item">
                <h2>В социальных сетях</h2>
                <div class="icons">
                <a v-for="item in contactItemLast" :key="item" :href="item.href">
                    <img :src="item.src" alt="">
                </a>
                </div>
            </div>
        </div>
        <div class="contancts__sub">
            <NewProduct />
        </div>
      </div>
  </div>
</template>

<script setup>
import HeaderMain from '../HeaderMain/HeaderMain.vue'
import NewProduct from '../NewProducts/NewProduct.vue'
import arrow from '@/assets/svgs/arrow.svg'
import instagram from '@/assets/svgs/instagram.svg'
import telegram from '@/assets/svgs/telegram.svg'

const routeItems = [
            {
                id: 1,
                label: 'Главная',
                path: '/',
                src: arrow
            },
            {
                id: 2,
                label: 'Контакты',
                path: '/contacts',
                src: ''
            }
]

const contactItems = [
    {
        id:1,
        title:'По телефону',
        label:'+38(067) 158 82 66',
        label1:'+38(073) 226 39 81',
    },
    {
        id:2,
        title:'По почте',
        label:'example@gmail.com',
    },
    {
        id:3,
        title:'Наш офис',
        label:'г. Киев, улица Батумская, 18',
    },
]
const contactItemLast = [{
    href:'https://www.instagram.com/',
    src:instagram,
}, 
{
    href:'https://web.telegram.org/',
    src:telegram,
}
]


</script>

<style lang="scss">
@mixin cartStyleFt {
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 19px;
color: #252525;
}
    .contacts{
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
        &__title{
            margin: 30px 0 0 0;
            display: flex;
            justify-content: start;
            span{
            @include cartStyleFt;
            font-size: 20px;
            line-height: 23px;
            }
        }
        &__items{
            display: flex;
            margin-top: 30px;
            &-item{
            width: 200px;
            margin-left: 113px;
            h2{
                @include cartStyleFt;
            }
            ul{
                li{
                    @include cartStyleFt;
                    font-weight: 200;
                    margin-top: 10px;
                }
            }
            .icons{
                margin:20px 100px 0 0;
              a{
                img{
                    margin-left: 15px;
                width: 25px;
                height: 25px;
                }
            }
            }
            }
            &-item:first-child{
                margin-left: -50px;
            }
        }
        &__sub{

        }
    }
</style>