<template>
     <div class="catalog">
     <h1>Каталог</h1>
     <ul>
         <li v-for="catalogItem in catalogItems" :key="catalogItem">
         {{catalogItem}}
         <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 3.88906L8.88906 -4.85606e-08L10 1.11094L5 6.11093L-4.85606e-08 1.11094L1.11094 -3.88553e-07L5 3.88906Z" fill="#E0BEA2"/>
         </svg>
         </li>
     </ul>   
  </div>
</template>

<script>
export default {
   setup() {
      const catalogItems = ['Размер', 'Цвет', 'Цена', 'Сортировать по']


      return {catalogItems}
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
.catalog {
   display: flex;
   margin-left: -95px;
   h1 {
      display: flex;
      font-style: normal;
      margin-left: 118px;
      margin-top: 35px;
      font-weight: 300;
      font-size: 20px;
      line-height: 23px;
      color: #252525;
      margin-right: 120px;
   }
   ul {
      display: flex;
      margin: 40px 0px;
   li {
      @include sidebar;
      cursor: pointer;
      margin-right: 30px;
   }
   li:hover {
    color: #E0BEA2;
   }
   }
   svg { 
      margin-left: 5px;
   }
}
</style>