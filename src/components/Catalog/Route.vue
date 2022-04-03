<template>
        <div class="catalog__route">   
        <h5 v-for="item in routeItems" :key="item.id">
            <router-link :to="item.path">
                {{item.label}}
            </router-link>
            <img :src="item.src" alt="">
        </h5>
      </div>
</template>

<script setup>
import arrow from '@/assets/svgs/arrow.svg'

        const routeItems = [
            {
                id: 1,
                label: 'Главная',
                path: '/',
                src: arrow
            },
            {
                id: 2,
                label: 'Каталог',
                path: '/catalog',
                src: ''
            }
        ]
</script>

<style lang="scss">
@mixin cartStyleFt {
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 19px;
color: #252525;
}
    .catalog__route{
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