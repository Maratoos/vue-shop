<template>
    <div  class="sidebar__left">
     <ul>
        <li v-for="sidebar in sidebars" :key="sidebar.id">{{sidebar.li}}</li>
     </ul>
  </div>
</template>

<script>
export default {
 setup() {
    const sidebars = [
       {
          id: 1,
          li:'New'
       },
        {
          id: 2,
          li:'Bestsellers'
       },
        {
          id: 3,
          li:'Верхняя одежда'
       },
        {
          id: 4,
          li:'Шубы'
       },
        {
          id: 5,
          li:'Тренчи'
       },
        {
          id: 6,
          li:'Пальто'
       },
        {
          id: 7,
          li:'Пуховики и жилеты'
       },
        {
          id: 8,
          li:'Костюмы'
       },
        {
          id: 9,
          li:'Жакеты'
       },
        {
          id: 10,
          li:'Платья'
       },
        {
          id: 11,
          li:'Рубашки и блузы'
       },
        {
          id: 12,
          li:'Юбки'
       },
        {
          id: 13,
          li:'Футболки и топы'
       },
        {
          id: 14,
          li:'Аксессуары'
       },
        {
          id: 15,
          li:'Sale'
       },
        {
          id: 16,
          li:'Summer'
       },
       {
          id: 17,
          li:'Посмотреть всё'
       },
    ]
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
.sidebar__left {
  @include sidebar;
  cursor: pointer;
  display: flex;
  margin-left: -42px;
  ul {
     li {
        margin: 27px;
        max-width: max-content;
        display: flex;
     }
     li:hover {
       color: #E0BEA2;
     }
  }
}
</style>