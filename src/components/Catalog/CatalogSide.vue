<template>
   <div class="sidebar">
   <div class="overview">
    <span><router-link to="/">Главная</router-link></span>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.88906 9L6 5.11094L7.11094 4L12.1109 9L7.11094 14L6 12.8891L9.88906 9Z" fill="#E0BEA2"/>
</svg>
<span><router-link to="/catalog">Каталог</router-link></span>
   </div>
   <SideTop />
   <div class="item__list">
   <Item />
   <Item />
   <Item />
   <Item />
   <Item />
   <Item />
   <Item />
   <Item />
   <Item />
   <Item />
   </div>
   <SideLeft />
</div>
</template>

<script>
import SideTop from './SideTop.vue'
import SideLeft from './SideLeft.vue'
import Item from './Item.vue'
export default {
   components: { SideTop, SideLeft, Item },
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
.sidebar{
   .overview {
    margin-right: 74%;
    margin-top: 35px;
   span {
      cursor: pointer;
      a{
         @include sidebar;
      }
   }
   svg {
      margin: -4px;
      margin-left: 2px;
      margin-right: 2px;
   }
}
.item__list{
}
}
</style>