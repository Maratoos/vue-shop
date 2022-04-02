<template>
  <div class="footer">
      <div class="footer__items">
          <div class="footer__item">
              <h4>КОМПАНИЯ</h4>
              <ul>
                  <li v-for="item in footerItemFirst" :key="item.id">
                      <router-link :to="item.path">
                          {{item.label}}
                      </router-link>
                  </li>
              </ul>
          </div>
          <div class="footer__item">
              <h4>ПОЛЕЗНОЕ</h4>
              <ul>
                  <li v-for="item in footerItemSecond" :key="item.id">
                      <router-link :to="item.path">
                          {{item.label}}
                      </router-link>
                  </li>
              </ul>
          </div>
          <div class="footer__item">
              <h4>ПОКУПАТЕЛЮ</h4>
                <ul>
                    <li v-for="item in footerItemThird" :key="item.id">
                      <router-link :to="item.path">
                          {{item.label}}
                      </router-link>
                  </li>
                </ul>
          </div>
          <div class="footer__item">
              <h4>КОНТАКТЫ</h4>
              <ul> 
                  <div class="footer__item-svg">
                    <a v-for="item in iconItems" :key="item.id" :href="item.href"><img :src="item.src" alt=""></a>
                  </div>
                    <li v-for="item in footerItemForth" :key="item.id">
                      <router-link :to="item.path">
                          {{item.label}}
                      </router-link>
                  </li>
              </ul>
          </div>
      </div>
      <h5>©️ 2021 Yanki. All rights reserved</h5>
  </div>
</template>

<script>
import instagram from '@/assets/svgs/instagram.svg'
import telegram from '@/assets/svgs/telegram.svg'
export default {
setup() {
    const footerItemFirst = [
        {
        id:1,
        label:'О нас',
        path: '/aboutus'
        },
        {
        id:2,
        label:'Контакты',
        path: '/contacts'
        }]
    const footerItemSecond = [{
        id:1,
        label:'Оплата и доставка',
        path: '/payment'
        },
        {
        id:2,
        label: 'Условия возврата',
        path: '/return',
        },
        {
        id:3,
        label:'Бонусная система',
        path: ''
        }]
    const footerItemThird = [{
        id:1,
        label:'Избранное',
        path: '/favorite'
        },
        {
        id:2,
        label: 'Публичная оферта',
        path: '',
        },
        {
        id:3,
        label:'Конфиденциальность',
        path: ''
        }]
    const footerItemForth = [{
        id:1,
        label:'+38(073) 096 36 44',
        path: ''
        },
        {
        id:2,
        label: 'info@yanki.com',
        path: '',
        }]
    const iconItems = [
    {
        id:1,
        href:'https://www.instagram.com/',
        src:instagram,
    },
    {
        id:2,
        href:'https://web.telegram.org/',
        src:telegram,
    }]


    return { footerItemFirst, footerItemSecond, footerItemThird, footerItemForth, iconItems, instagram, telegram }
}
}
</script>

<style lang="scss">
    .footer{
        margin-top: 100px;
        &__items{
            display: flex;
            justify-content: center;
            text-align: center;
            .footer__item{
                margin-right: 47px;
                width: 250px;
                height: 120px;
                h4{
                font-style: normal;
                font-weight: 300;
                font-size: 20px;
                line-height: 23px;
                color: #252525;
                cursor: pointer;
                }
                ul{   
                    li a{
                    display: flex;
                    font-style: normal;
                    font-weight: 200;
                    font-size: 16px;
                    line-height: 19px;
                    color: #252525;
                    margin: 0 0 10px 30px;
                    cursor: pointer;
                    }
                    li a:hover{
                        color: #E0BEA2;
                    }
                    .footer__item-svg{
                        margin-right: 110px;
                        img{
                        margin: 0 0 11.58px 11.58px;  
                        }
                    }
                }
            }
        }
        h5{
        margin-top: 50px;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        color: #252525;
        }
    }
</style>