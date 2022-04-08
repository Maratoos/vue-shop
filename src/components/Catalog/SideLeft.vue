<template>
<div class="catalog__left">
   <div class="catalog__left-set">
   <ul>
      <li v-for="sidebar in sidebars" :key="sidebar">{{sidebar}}</li>
   </ul>
   </div>
   <div class="catalog__left-items">
     <div class="catalog__items">
      <div v-for="clothe in clothes" :key="clothe.id" class="catalog__items-item">
      <Item :clothe="clothe" />
      </div>
     </div>
   </div>
</div>
</template>

<script>
import Item from './Item.vue'
import { computed, onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
   components: { Item },
   setup() {
   const store = useStore()
   const clothes = computed(() => store.state.clothes)
    
    onMounted(() => {
      store.dispatch('getClothes')
    });

   const sidebars = [
    'New',
    'Bestsellers',
    'Верхняя одежда',
    'Шубы',
    'Тренчи',
    'Пальто',
    'Пуховики и жилеты',
    'Костюмы',
    'Жакеты',
    'Платья',
    'Рубашки и блузы',
    'Юбки',
    'Футболки и топы',
    'Аксессуары',
    'Sale',
    'Summer',
    'Посмотреть всё'
   ]

      return { sidebars, clothes }
   }
}

</script>

<style lang="scss" scoped>
@mixin sidebar {
   font-style: normal;
   font-weight: 300;
   font-size: 16px;
   line-height: 19px;
   color: #252525;
}
.catalog__left{
   display: flex;
   &-set{
      ul {
      margin-left: -40px;
      width: 150px;
     li {
      @include sidebar;
      cursor: pointer;
      margin: 27px 0 0 0;
      display: flex;
     }
     li:hover {
       color: #E0BEA2;
     }
  }
  }
}
.catalog__items{
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
  margin: 30px 0 0 80px;
  &-item{
   margin: 0 15px 90px 0;
    width: 310px;
    height: 461px;
  }
}
</style>