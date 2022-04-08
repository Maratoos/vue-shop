<template>
<HeaderMain />
<div class="container">
    <div class="favorite__route">   
        <h5 v-for="item in routeItems" :key="item.id">
            <router-link :to="item.path">
                {{item.label}}
            </router-link>
            <img :src="item.src" alt="">
        </h5>
    </div>
   <div class="favorite__items">
     <Item />
     <Item />
     <Item />
     <Item />
   </div>
</div>
</template>

<script>
import arrow from '@/assets/svgs/arrow.svg'
import HeaderMain from '../HeaderMain/HeaderMain.vue'
import Item from '@/components/Favorite/Item.vue'
export default {
components: { HeaderMain, Item},
setup() {
    

    const routeItems = [
            {
                id: 1,
                label: 'Главная',
                path: '/',
                src: arrow,
            },
            {
                id: 2,
                label: 'Избранное',
                path: '/favorite',
                src: ''
            }
    ]

return {  routeItems, }
}
}
</script>

<style lang="scss">
@mixin cartStyleFt {
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 19px;
color: #252525;
}
.favorite__items{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 30px 0 0 0;
}
.favorite__route{
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

</style>