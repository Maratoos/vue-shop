<template>
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
    <div class="catalog__btn">
      <button @click="handleAddClotheToCart">
        <span>Заказать</span>
        <i v-if="addedClotheCount">{{addedClotheCount}}</i>
      </button>
    </div>
</template>

<script>
import dots from '@/assets/svgs/dots.svg'
import favbutt from '@/assets/svgs/fav-butt.svg'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'
export default {
  props: ["clothe"],
setup(props) {
  const store = useStore()

  const addedClotheCount = computed(() => store.state.cartItems.get(props.clothe.id)?.count)

  const handleAddClotheToCart = () => {
    store.commit('ADD_CLOTHE_TO_CART', props.clothe)
  }

  return { dots, favbutt, handleAddClotheToCart, addedClotheCount }
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
  
   .catalog__btn{
     margin-top: 15px;
    button{
      cursor: pointer;
      background-color: #e0bea2;
      border: none;
      padding: 16px 50px;
      &:hover{
      background-color: #f1ddaa;
      }
      span{
      @include itemStyle;
      color: white;
      }
      i{
        margin-left: 20px;
      @include itemStyle;
      color: white;
      }
    }
  }
</style>