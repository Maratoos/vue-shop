<template>
     <ul>
        <li v-for="sidebar in sidebars" :key="sidebar">{{sidebar}}</li>
     </ul>
</template>

<script>
export default {
 setup() {
    const sidebars = ['New','Bestsellers','Верхняя одежда','Шубы','Тренчи','Пальто','Пуховики и жилеты','Костюмы',
    'Жакеты','Платья','Рубашки и блузы','Юбки','Футболки и топы','Аксессуары','Sale','Summer','Посмотреть всё']
    return{sidebars}
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
  ul {
  margin-left: -42px;
     li {
          @include sidebar;
         cursor: pointer;
        margin: 27px;
        max-width: max-content;
        display: flex;
     }
     li:hover {
       color: #E0BEA2;
     }
  }
</style>