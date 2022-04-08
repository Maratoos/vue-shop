<template>
  <div class="cart__item">
      <div class="cart__item-left">
        <router-link to="/product">
          <img :src="clotheItem.imageUrl" alt="">
        </router-link>
        <div class="cart__item-left-text">
          <h5>арт. 1589956</h5>
          <h4>{{clotheItem.name}}</h4>
        </div>
      </div>
      <div class="cart__item-mid">
        <div class="cart__item-mid-color">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="14.85" stroke="#252525" stroke-width="0.3"/>
              <circle cx="15" cy="15" r="12" fill="#F1DDAA"/>
            </svg>
        </div>
        <div class="cart__item-mid-sizes">
        <h4>{{clotheItem.sizes}}</h4>
        </div>
        <div class="cart__item-mid-count">
            <div class="counter">
            <div @click="handleClickMinus" class="counter__minus">
            <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0.285706H5.71429H4.28571H0V1.71428H4.28571H5.71429H10V0.285706Z" fill="#E0BEA2"/>
            </svg>
            </div>
            <h4>{{clotheItem.count}}</h4>
            <div @click="handleClickPlus" class="counter__plus">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.28571 4.28571V0H5.71429V4.28571H10V5.71429H5.71429V10H4.28571V5.71429H0V4.28571H4.28571Z" fill="#E0BEA2"/>
            </svg>
            </div>
            </div>
        </div>
      </div>
      <div class="cart__item-right">
        <p>{{clotheItem.price * clotheItem.count}} грн</p>
        <svg @click="handleClickRemove"  width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_267_438)">
<path d="M18.75 5H25V7.5H22.5V23.75C22.5 24.0815 22.3683 24.3995 22.1339 24.6339C21.8995 24.8683 21.5815 25 21.25 25H3.75C3.41848 25 3.10054 24.8683 2.86612 24.6339C2.6317 24.3995 2.5 24.0815 2.5 23.75V7.5H0V5H6.25V1.25C6.25 0.918479 6.3817 0.600537 6.61612 0.366116C6.85054 0.131696 7.16848 0 7.5 0H17.5C17.8315 0 18.1495 0.131696 18.3839 0.366116C18.6183 0.600537 18.75 0.918479 18.75 1.25V5ZM20 7.5H5V22.5H20V7.5ZM8.75 11.25H11.25V18.75H8.75V11.25ZM13.75 11.25H16.25V18.75H13.75V11.25ZM8.75 2.5V5H16.25V2.5H8.75Z" fill="#E0BEA2"/>
</g>
<defs>
<clipPath id="clip0_267_438">
<rect width="25" height="25" fill="white"/>
</clipPath>
</defs>
        </svg>
      </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  props:["clotheItem"],
  setup() {
    const store = useStore()

    const handleClickMinus = () => {
      store.commit("DECREMENT_CART_ITEM", props.clotheItem.id)
    }
    const handleClickPlus = () => {
      store.commit("INCREMENT_CART_ITEM", props.clotheItem.id)
    }
    const handleClickRemove = () => {
      store.commit("REMOVE_CART_ITEM", props.clotheItem.id)
    }

    return{ handleClickMinus, handleClickPlus, handleClickRemove }
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
.cart__item{
    font-family: 'Raleway';
    display: flex;
    border-bottom: 0.3px solid #898686;
    width: 1300px;
    padding: 10px 0;
    &-left{
        display: flex;
        a img{
          width: 95px;
          height: 110px;
        }
        &-text{
            h5{
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            line-height: 16px;          
            color: #E0BEA2;
            }
            h4{
            @include itemStyle;
            padding: 29px 0 0 10px;
            width: 200px;
            }
        }
    }
    &-mid{
        margin: 30px 0 0 138px;
        display: flex;
        &-count{
        margin-left: 138px;
        .counter{
        display: flex;
        border: 0.5px solid #252525;
        opacity: 0.5;
        box-sizing: border-box;
        &__minus{
            cursor: pointer;
            margin: 22px 14px 22px 20px;
        }
        &__plus{
            cursor: pointer;
            margin: 24px 20px 18px 14px;
        }
            h4{
            @include itemStyle;
            margin: 25px 0 15px 0;
            }
         }
        }
        &-sizes{
          h4{
            width: 100px;
            @include itemStyle;
            margin: 15px 0 0 100px;
          }
        }
    }
    &-right{
        margin: 38px 150px 0 138px;
        display: flex;
        p{
        margin-right: 31px;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #252525;
        }
        svg{
            cursor: pointer;
        }
    }
}
h1,h2,h3,h4,h5,h6,p{
  margin: 0;
}
</style>