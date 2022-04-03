<template>
<div class="catalog__left">
   <div class="catalog__left-set">
   <ul>
      <li v-for="sidebar in sidebars" :key="sidebar">{{sidebar}}</li>
   </ul>
   </div>
   <div class="catalog__left-items">
      <Item />
   </div>
</div>
</template>

<script setup>
import Item from './Item.vue'

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
</style>