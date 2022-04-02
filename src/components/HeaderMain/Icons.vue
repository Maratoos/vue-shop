<template>
<div class="header__icons">
    <router-link v-for="item in iconsItems" :key="item.id" :to="item.path">
    <img :src="item.src" alt="">
    </router-link>
</div>
</template>

<script>
import searchLu from '@/assets/svgs/searchLu.svg'
import personLu from '@/assets/svgs/personLu.svg'
import heartLu from '@/assets/svgs/heartLu.svg'
import cartLu from '@/assets/svgs/cartLu.svg'
export default {
setup() {

    const iconsItems = [
        {
            id:1,
            path: '/contacts',
            src:searchLu
        },
        {
            id:2,
            path: '/auth',
            src:personLu
        },
        {
            id:3,
            path: '/favorite',
            src:heartLu
        },
        {
            id:4,
            path: '/cart',
            src:cartLu
        }]

    return { iconsItems }
}
}
</script>

<style lang="scss">
.header__icons{
    padding: 32px 0 0 220px;
    a{
    img{
    margin-right: 30px;
    cursor: pointer;
    }
    img:last-child{
    margin-right: none;
    }
    img:hover{
    color: #252525;
    }
    }
}
</style>