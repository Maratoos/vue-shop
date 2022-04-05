<template>
<div class="route">
    <h4 v-for="item in routeItems" :key="item.id">
        <router-link :to="item.path">{{item.label}}</router-link>
        <img :src="item.src" alt="">
    </h4>
</div>
</template>

<script>
import arrow from '@/assets/svgs/arrow.svg'
export default {
    setup() {

        const routeItems = [
            {
            id:1,
            label:'Главная',
            src:arrow,
            path:'/'
            },
            {
            id:2,
            label:'Каталог',
            src:arrow,
            path:'/catalog'
            },
            {
            id:3,
            label:'Кремовое пальто',
            src: '',
            path:'/product'
            }]

        return{
            routeItems, arrow
        }
    }
}
</script>

<style lang='scss'>
.route{
    display: flex;
    padding: 30px 0;
    margin-left: -10px;
    h4 a{
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #252525;
    margin: 0 11px;
    }
    h4 a:hover{
        color: #e0bea2;
    }
}
</style>