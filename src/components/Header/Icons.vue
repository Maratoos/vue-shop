<template>
<div class="header__icons">
    <router-link v-for="item in iconsItems" :key="item.id" :to="item.path">
    <img :src="item.src" alt="">
    </router-link>
</div>
</template>

<script>
import search from '@/assets/svgs/search.svg'
import person from '@/assets/svgs/person.svg'
import heart from '@/assets/svgs/heart.svg'
import cart from '@/assets/svgs/cart.svg'
export default {
setup() {

    const iconsItems = [
        {
            id:1,
            path: '/contacts',
            src:search
        },
        {
            id:2,
            path: '/auth',
            src:person
        },
        {
            id:3,
            path: '/favorite',
            src:heart
        },
        {
            id:4,
            path: '/cart',
            src:cart
        }]

    return { iconsItems }
}
}
</script>

<style lang="scss">
.header__icons{
    margin: -70px -920px 0 0;
    a{
    img{
    margin-right: 30px;
    cursor: pointer;
    }
    img:last-child{
    margin-right: none;
    }
    img:hover{
    filter: #E0BEA2;
    }
    }
}
@media (max-width: 576px) {
    .header__icons{
        margin: -55px 780px 0 0;
      a{
        img{
            width: 16px;
            height: 16px;
        }
      }
      a:first-child{
        display: none;
      }
    }
}
</style>